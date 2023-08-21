from common.translate import determine_translation_service, Translate
from json import dumps

import os
import sys


def translate_shellcode(esi_address: int, debug: bool) -> str:
    """
    Returns shellcode for the translate function hook.
    esi_address: Where text can be modified to be fed to the screen
    """
    local_paths = dumps(sys.path).replace("\\", "\\\\")
    working_dir = dumps(os.getcwd()).replace("\\", "\\\\")

    Translate()
    api_details = determine_translation_service()
    api_logging = api_details["EnableDialogLogging"]
    region_code = Translate.region_code

    shellcode = rf"""
try:
    import sys
    from os import chdir, getcwd

    local_paths = {local_paths}
    working_dir = {working_dir}
    debug = {debug}
    api_logging = {api_logging}
    region_code = '{region_code}'

    sys.path = local_paths
    og_working_dir = getcwd()
    chdir(working_dir)

    from common.lib import setup_logger
    from common.memory import (
        write_string,
        read_string,
        unpack_to_int)
    from common.translate import (
        sanitized_dialog_translate,
        sqlite_read,
        sqlite_write,
        detect_lang)
    from common.errors import AddressOutOfRange

    logger = setup_logger('out', 'out.log')
    game_text_logger = setup_logger('gametext', 'game_text.log')

    # get address values where text can be identified
    ja_address = unpack_to_int({esi_address})
    ja_text = read_string(ja_address)

    if api_logging:
        game_text_logger.info(ja_text)

    if detect_lang(ja_text):
        result = sqlite_read(ja_text, region_code, 'dialog')
        if result is not None:
            logger.info('Found database entry. No translation was needed.')
            write_string(ja_address, result)
        else:
            logger.info('Translation is needed for ' + str(len(ja_text) / 3) + ' characters.')
            translated_text = sanitized_dialog_translate(ja_text)
            sqlite_write(ja_text, 'dialog', translated_text, region_code, npc_name='')
            write_string(ja_address, translated_text)
    chdir(og_working_dir)
except AddressOutOfRange:
    pass
except Exception as e:
    with open('out.log', 'a+') as f:
        f.write(e)
    """

    return str(shellcode)
