📦
2420 /agent/index.js.map
1684 /agent/index.js
2382 /agent/hwbp.js.map
2310 /agent/hwbp.js
2018 /agent/msvc.js.map
1898 /agent/msvc.js
1403 /node_modules/@frida/process/index.js.map
1110 /node_modules/@frida/process/index.js
↻ process
✄
{"version":3,"file":"index.js","names":["HWBP","baseAddr","Process","enumerateModules","base","baseSize","size","currentHashCallType","currentHashCallInput","procVceBlockEncryptBlowfishCtor","Map","rpc","exports","initAgent","patternScanResults","Memory","scanSync","length","console","log","callInstructionAddress","address","add","vceBlockEncryptBlowfishCtorAddress","readPointer","NativeFunction","installBlowfishLogger","attach","onCall","context","sp","blowfishKey","readAnsiString","fileSize","readU32","filepath","send","message_type","log_type","file_size","blowfish_key","installHashLogger","hashStringStartResults","hashStringStartAddr","hashStringEndResults","hashStringEndAddr","rawString","usedLength","slice","hash","eax","hash_type","hash_input","hash_output"],"sourceRoot":"C:/Users/mebo/Documents/github/dqx-translation-project/dqxclarity/app/dqxcrypt/dqx-blowfish-frida-agent/agent/","sources":["index.ts"],"mappings":"OAEOA,MAAU,YAEjB,MAAMC,EAAWC,QAAQC,mBAAmB,GAAGC,KACzCC,EAAWH,QAAQC,mBAAmB,GAAGG,KAE/C,IACIC,EACAC,EAFAC,EAAuC,KAQvB,IAAIC,IAWxBC,IAAIC,QAAU,CACVC,UAAW,WAaP,MACMC,EAAqBC,OAAOC,SAASf,EAAUI,EADrC,kEAEhB,GAAgC,GAA7BS,EAAmBG,OAElB,OADAC,QAAQC,IAAI,iEACL,EAIX,MAAMC,EAAyBN,EAAmB,GAAGO,QAAQC,IAAI,IAC3DC,EAAqCH,EACtCE,IAAI,GACJE,cACAF,IAAIF,EAAuBE,IAAI,IAMpC,OAFAb,EAAkC,IAAIgB,eAAeF,EAAoC,UAAW,CAAC,WAAY,aAE1G,CACX,EACAG,sBAAuB,WACnB,MACMZ,EAAqBC,OAAOC,SAASf,EAAUI,EAD1B,sDAE3B,GAAgC,GAA7BS,EAAmBG,OAElB,OADAC,QAAQC,IAAI,8DACL,EAGAnB,EAAK2B,OAAOb,EAAmB,GAAGO,SAASO,IAChCA,EAAOC,QAAQC,GAAGR,IAAI,GAAME,cAA9C,IACIO,EAAcH,EAAOC,QAAQC,GAAGR,IAAI,GAAME,cAAcQ,iBACxDC,EAAWL,EAAOC,QAAQC,GAAGR,IAAI,IAAMY,UACvCC,EAAWP,EAAOC,QAAQC,GAAGR,IAAI,IAAME,cAAcQ,iBACzDI,KAAK,CAACC,aAAa,MAAOC,SAAS,QAASH,SAASA,EAAUI,UAAUN,EAAUO,aAAaT,GAAa,IAGjH,OAAO,CACX,EACAU,kBAAmB,WAEf,MACMC,EAAyB3B,OAAOC,SAASf,EAAUI,EAD1B,gDAE/B,GAAoC,GAAjCqC,EAAuBzB,OAEtB,OADAC,QAAQC,IAAI,mDACL,EAEX,MAAMwB,EAAsBD,EAAuB,GAAGrB,QAOhDuB,EAAuB7B,OAAOC,SAASf,EAAUI,EAD1B,0CAE7B,GAAkC,GAA/BuC,EAAqB3B,OAEpB,OADAC,QAAQC,IAAI,iDACL,EAEX,MAAM0B,EAAoBD,EAAqB,GAAGvB,QAAQC,IAAI,IAIzCtB,EAAK2B,OAAOgB,GAAqBf,IAClD,IAAIkB,EAAYlB,EAAOC,QAAQC,GAAGR,IAAI,GAAME,cAAcQ,iBACtDe,EAAanB,EAAOC,QAAQC,GAAGR,IAAI,GAAMY,UAGzC3B,EADAuC,GAAW7B,QAAU8B,EACC,OAEA,MAG1BvC,EAAuBsC,GAAWE,MAAM,EAAGD,EAAY,IAGnC/C,EAAK2B,OAAOkB,GAAmBjB,IAEnD,IAAIqB,EADQrB,EAAOC,QACJqB,IACfd,KAAK,CAACC,aAAa,MAAOC,SAAS,UAAWa,UAAU5C,EAAqB6C,WAAW5C,EAAsB6C,YAAYJ,GAAM,IAGpI,OAAO,CACX"}
✄
import e from"./hwbp.js";const t=Process.enumerateModules()[0].base,n=Process.enumerateModules()[0].size;let o,r,a=null;new Map;rpc.exports={initAgent:function(){const e=Memory.scanSync(t,n,"6A 0C 6A 0C E8 ?? ?? ?? ?? 83 C4 08 85 C0 74 ?? 6A 00 ?? ?? E8");if(1!=e.length)return console.log("Failed to pattern match for vce::BlockEncryptBlowfish::ctor."),!1;const o=e[0].address.add(20),r=o.add(1).readPointer().add(o.add(5));return a=new NativeFunction(r,"pointer",["pointer"],"thiscall"),!0},installBlowfishLogger:function(){const o=Memory.scanSync(t,n,"55 8B EC 53 57 8B F9 83 7F 24 00 74 ?? 83 7D 08 00");if(1!=o.length)return console.log("Failed to pattern match for unknown_decryptor::do_decrypt"),!1;e.attach(o[0].address,(e=>{e.context.sp.add(4).readPointer();let t=e.context.sp.add(8).readPointer().readAnsiString(),n=e.context.sp.add(12).readU32(),o=e.context.sp.add(16).readPointer().readAnsiString();send({message_type:"log",log_type:"bflog",filepath:o,file_size:n,blowfish_key:t})}));return!0},installHashLogger:function(){const a=Memory.scanSync(t,n,"55 8B EC 8B 55 08 85 D2 75 04 33 C0 5D C3 56");if(1!=a.length)return console.log("Failed to pattern match for hash_string(start)"),!1;const s=a[0].address,d=Memory.scanSync(t,n,"33 04 8D ?? ?? ?? ?? 4E 75 D3 5E 5D C3");if(1!=d.length)return console.log("Failed to pattern match for hash_string(end)"),!1;const c=d[0].address.add(12);e.attach(s,(e=>{let t=e.context.sp.add(4).readPointer().readAnsiString(),n=e.context.sp.add(8).readU32();o=t?.length==n?"file":"dir",r=t?.slice(0,n)})),e.attach(c,(e=>{let t=e.context.eax;send({message_type:"log",log_type:"hashlog",hash_type:o,hash_input:r,hash_output:t})}));return!0}};
✄
{"version":3,"file":"hwbp.js","names":["OpenThread","NativeFunction","Module","findExportByName","CloseHandle","GetThreadContext","SetThreadContext","_a","constructor","_HardwareBreakpointClass_initialized","set","this","_HardwareBreakpointClass_breakpoints","__classPrivateFieldSet","Process","setExceptionHandler","details","type","__classPrivateFieldGet","forEach","bp","address","equals","callback","_HardwareBreakpointClass_instances","_HardwareBreakpointClass_updateContext","call","nativeContext","console","error","attach","length","breakpoint","detach","splice","indexOf","push","_HardwareBreakpointClass_refreshContext","context","dr7","i","add","writePointer","writeU32","readU32","enumerateThreads","thread","hThread","id","Memory","alloc"],"sourceRoot":"C:/Users/mebo/Documents/github/dqx-translation-project/dqxclarity/app/dqxcrypt/dqx-blowfish-frida-agent/agent/","sources":["hwbp.ts"],"mappings":"0uBACA,MAAMA,EAAa,IAAIC,eAAeC,OAAOC,iBAAiB,eAAgB,cAAgB,QAAS,CAAC,QAAS,QAAS,UACpHC,EAAc,IAAIH,eAAeC,OAAOC,iBAAiB,eAAgB,eAAiB,QAAS,CAAC,UACpGE,EAAmB,IAAIJ,eAAeC,OAAOC,iBAAiB,eAAgB,oBAAsB,QAAS,CAAC,QAAS,YACvHG,EAAmB,IAAIL,eAAeC,OAAOC,iBAAiB,eAAgB,oBAAsB,QAAS,CAAC,QAAS,2BAU9G,IAAAI,EAAI,MAIjBC,c,YAHAC,EAAAC,IAAAC,MAAe,GACfC,EAAAF,IAAAC,KAA6B,IAGtBX,GAAeI,GAAgBC,GAAqBC,GAKzDO,EAAAF,KAAIF,GAAgB,EAAI,KAExBK,QAAQC,qBAAoBC,IAC1B,GAAqB,gBAAjBA,EAAQC,KAQV,OAPAC,EAAAP,KAAIC,EAAA,KAAcO,SAAQC,IACpBA,EAAGC,QAAQC,OAAON,EAAQK,UAC5BD,EAAGG,SAASP,E,IAIhBE,EAAAP,KAAIa,EAAA,IAAAC,GAAeC,KAAnBf,KAAoBK,EAAQW,gBACrB,C,KAfTC,QAAQC,MAAM,2CAkBlB,CAEAC,OAAOT,EAAwBE,GAC7B,IAAKL,EAAAP,KAAIF,EAAA,KAEP,OADAmB,QAAQC,MAAM,4DACP,KAET,GAAIX,EAAAP,KAAIC,EAAA,KAAcmB,QAAU,EAE9B,OADAH,QAAQC,MAAM,iEACP,KAGT,MAAMG,EAAyB,CAC7BX,UACAE,WACAU,OAAQ,KACNf,EAAAP,KAAIC,EAAA,KAAcsB,OAAOhB,EAAAP,KAAIC,EAAA,KAAcuB,QAAQH,GAAa,EAAE,GAOtE,OAHAd,EAAAP,KAAIC,EAAA,KAAcwB,KAAKJ,GACvBd,EAAAP,KAAIa,EAAA,IAAAa,GAAgBX,KAApBf,MAEOqB,CACT,G,qDAEeM,GACb,IAAIC,EAAM,EACVrB,EAAAP,KAAIC,EAAA,KAAcO,SAAQ,CAACC,EAAIoB,KAC7BF,EAAQG,IAAI,EAAQ,EAAJD,GAAOE,aAAatB,EAAGC,SACvCkB,GAAa,GAAS,EAAJC,CAAM,IAE1BF,EAAQG,IAAI,IAAME,SAASJ,GAC3BD,EAAQG,IAAI,KAAME,SAAuC,MAA9BL,EAAQG,IAAI,KAAMG,UAC/C,E,aAGE9B,QAAQ+B,mBAAmB1B,SAAQ2B,IACjC,MAAMC,EAAU/C,EAAW,QAAwB,EAAG8C,EAAOE,IACvDV,EAAUW,OAAOC,MAAM,KAC7BZ,EAAQK,SAAS,OAEbtC,EAAiB0C,EAAST,KAC5BpB,EAAAP,KAAIa,EAAA,IAAAC,GAAeC,KAAnBf,KAAoB2B,GACpBhC,EAAiByC,EAAST,IAE5BlC,EAAY2C,EAAQ,GAExB,E"}
✄
var e,t,r,a,i,n,o=this&&this.__classPrivateFieldSet||function(e,t,r,a,i){if("m"===a)throw new TypeError("Private method is not writable");if("a"===a&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===a?i.call(e,r):i?i.value=r:t.set(e,r),r},s=this&&this.__classPrivateFieldGet||function(e,t,r,a){if("a"===r&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!a:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?a:"a"===r?a.call(e):a?a.value:t.get(e)};const l=new NativeFunction(Module.findExportByName("kernel32.dll","OpenThread"),"ulong",["ulong","uchar","ulong"]),d=new NativeFunction(Module.findExportByName("kernel32.dll","CloseHandle"),"uchar",["ulong"]),c=new NativeFunction(Module.findExportByName("kernel32.dll","GetThreadContext"),"uchar",["ulong","pointer"]),h=new NativeFunction(Module.findExportByName("kernel32.dll","SetThreadContext"),"uchar",["ulong","pointer"]);export default new(n=class{constructor(){e.add(this),t.set(this,!1),r.set(this,[]),l&&d&&c&&h?(o(this,t,!0,"f"),Process.setExceptionHandler((t=>{if("single-step"===t.type)return s(this,r,"f").forEach((e=>{e.address.equals(t.address)&&e.callback(t)})),s(this,e,"m",a).call(this,t.nativeContext),!0}))):console.error("HardwareBreakpoint initialization failed")}attach(a,n){if(!s(this,t,"f"))return console.error("Attach failed: Hardwarebreakpoints were not initialized!"),null;if(s(this,r,"f").length>=4)return console.error("Attach failed: Not more than 4 hardware breakpoints possible!"),null;const o={address:a,callback:n,detach:()=>{s(this,r,"f").splice(s(this,r,"f").indexOf(o),1)}};return s(this,r,"f").push(o),s(this,e,"m",i).call(this),o}},t=new WeakMap,r=new WeakMap,e=new WeakSet,a=function(e){let t=0;s(this,r,"f").forEach(((r,a)=>{e.add(4+4*a).writePointer(r.address),t|=1<<2*a})),e.add(24).writeU32(t),e.add(192).writeU32(65536|e.add(192).readU32())},i=function(){Process.enumerateThreads().forEach((t=>{const r=l(2032639,0,t.id),i=Memory.alloc(716);i.writeU32(65552),c(r,i)&&(s(this,e,"m",a).call(this,i),h(r,i)),d(r)}))},n);
✄
{"version":3,"file":"msvc.js","names":["MSVCVector","constructor","alloc","dealloc","_MSVCVector_alloc","set","this","_MSVCVector_dealloc","_MSVCVector_head","_MSVCVector_backing","__classPrivateFieldSet","__classPrivateFieldGet","call","ptr","reserve","size","compare","set_start","set_end","set_cap","add","resize","i","writeU8","get_start","readPointer","get_end","get_cap","writePointer","sub","toUInt32","setData","data","byteLength","writeByteArray"],"sourceRoot":"C:/Users/mebo/Documents/github/dqx-translation-project/dqxclarity/app/dqxcrypt/dqx-blowfish-frida-agent/agent/","sources":["msvc.ts"],"mappings":"6uBAKM,MAAOA,WAMTC,YAAYC,EAAoBC,GALhCC,EAAAC,IAAAC,UAAA,GACAC,EAAAF,IAAAC,UAAA,GACAE,EAAAH,IAAAC,UAAA,GACAG,EAAAJ,IAAAC,UAAA,GAGII,EAAAJ,KAAIF,EAAUF,EAAK,KACnBQ,EAAAJ,KAAIC,EAAYJ,EAAO,KACvBO,EAAAJ,KAAIE,EAASG,EAAAL,KAAIF,EAAA,KAAOQ,KAAXN,KAAY,IAAG,KAC5BI,EAAAJ,KAAIG,EAAYI,IAAI,GAAE,IAC1B,CAEAC,QAAQC,GAEAJ,EAAAL,KAAIG,EAAA,KAAUO,QAAQH,IAAI,MAC1BF,EAAAL,KAAIC,EAAA,KAASK,KAAbN,KAAcK,EAAAL,KAAIG,EAAA,MAClBC,EAAAJ,KAAIG,EAAYI,IAAI,GAAE,MAI1BH,EAAAJ,KAAIG,EAAYE,EAAAL,KAAIF,EAAA,KAAOQ,KAAXN,KAAYS,GAAK,KAGjCT,KAAKW,UAAUN,EAAAL,KAAIG,EAAA,MACnBH,KAAKY,QAAQP,EAAAL,KAAIG,EAAA,MACjBH,KAAKa,QAAQR,EAAAL,KAAIG,EAAA,KAAUW,IAAIL,GACnC,CAGAM,OAAON,GACHT,KAAKQ,QAAQC,GACb,IAAI,IAAIO,EAAI,EAAGA,EAAIP,EAAMO,IACrBX,EAAAL,KAAIG,EAAA,KAAUW,IAAIE,GAAGC,QAAQ,GAEjCjB,KAAKY,QAAQZ,KAAKkB,YAAYJ,IAAIL,GACtC,CAEAF,MAAsB,OAAOF,EAAAL,KAAIE,EAAA,IAAQ,CACzCgB,YAA6B,OAAOb,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMK,aAAe,CACxEC,UAA2B,OAAOf,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMK,aAAe,CACtEE,UAA2B,OAAOhB,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMK,aAAe,CACtER,UAAUJ,GAAqC,OAAOF,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMQ,aAAaf,EAAM,CAC9FK,QAAQL,GAAqC,OAAOF,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMQ,aAAaf,EAAM,CAC5FM,QAAQN,GAAqC,OAAOF,EAAAL,KAAIE,EAAA,KAAOY,IAAI,GAAMQ,aAAaf,EAAM,CAE5FE,OAAiB,OAAOT,KAAKoB,UAAUG,IAAIvB,KAAKkB,aAAaM,UAAY,CAEzEC,QAAQC,GACJ1B,KAAKQ,QAAQkB,EAAKC,YAClBtB,EAAAL,KAAIG,EAAA,KAAUyB,eAAeF,GAC7B1B,KAAKY,QAAQZ,KAAKkB,YAAYJ,IAAIY,EAAKC,YAC3C,E"}
✄
var t,e,r,s,i=this&&this.__classPrivateFieldSet||function(t,e,r,s,i){if("m"===s)throw new TypeError("Private method is not writable");if("a"===s&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===s?i.call(t,r):i?i.value=r:e.set(t,r),r},a=this&&this.__classPrivateFieldGet||function(t,e,r,s){if("a"===r&&!s)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!s:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?s:"a"===r?s.call(t):s?s.value:e.get(t)};export class MSVCVector{constructor(h,n){t.set(this,void 0),e.set(this,void 0),r.set(this,void 0),s.set(this,void 0),i(this,t,h,"f"),i(this,e,n,"f"),i(this,r,a(this,t,"f").call(this,12),"f"),i(this,s,ptr(0),"f")}reserve(r){a(this,s,"f").compare(ptr(0))||(a(this,e,"f").call(this,a(this,s,"f")),i(this,s,ptr(0),"f")),i(this,s,a(this,t,"f").call(this,r),"f"),this.set_start(a(this,s,"f")),this.set_end(a(this,s,"f")),this.set_cap(a(this,s,"f").add(r))}resize(t){this.reserve(t);for(let e=0;e<t;e++)a(this,s,"f").add(e).writeU8(0);this.set_end(this.get_start().add(t))}ptr(){return a(this,r,"f")}get_start(){return a(this,r,"f").add(0).readPointer()}get_end(){return a(this,r,"f").add(4).readPointer()}get_cap(){return a(this,r,"f").add(8).readPointer()}set_start(t){return a(this,r,"f").add(0).writePointer(t)}set_end(t){return a(this,r,"f").add(4).writePointer(t)}set_cap(t){return a(this,r,"f").add(8).writePointer(t)}size(){return this.get_end().sub(this.get_start()).toUInt32()}setData(t){this.reserve(t.byteLength),a(this,s,"f").writeByteArray(t),this.set_end(this.get_start().add(t.byteLength))}}t=new WeakMap,e=new WeakMap,r=new WeakMap,s=new WeakMap;
✄
{"version":3,"file":"index.js","names":["nextTick","callback","args","Script","title","browser","platform","Process","detectPlatform","pid","id","env","FRIDA_COMPILE","argv","version","Frida","versions","noop","on","addListener","once","off","removeListener","removeAllListeners","emit","prependListener","prependOnceListener","listeners","name","binding","Error","cwd","chdir","dir","umask"],"sourceRoot":"C:/Users/mebo/Documents/github/dqx-translation-project/dqxclarity/app/dqxcrypt/dqx-blowfish-frida-agent/node_modules/@frida/process/","sources":[""],"mappings":"OAAO,SAASA,SAASC,KAAaC,GACpCC,OAAOH,SAASC,KAAaC,EAC/B,QAEO,MAAME,MAAQ,eACd,MAAMC,SAAU,SAChB,MAAMC,SA6Db,WACI,MAAMA,EAAWC,QAAQD,SACzB,MAAqB,YAAbA,EAA0B,QAAUA,CAChD,CAhEwBE,UACjB,MAAMC,IAAMF,QAAQG,UACpB,MAAMC,IAAM,CACjBC,cAAe,YAEV,MAAMC,KAAO,UACb,MAAMC,QAAUC,MAAMD,eACtB,MAAME,SAAW,CAAC,EAEzB,SAASC,IAAQ,QAEV,MAAMC,GAAKD,SACX,MAAME,YAAcF,SACpB,MAAMG,KAAOH,SACb,MAAMI,IAAMJ,SACZ,MAAMK,eAAiBL,SACvB,MAAMM,mBAAqBN,SAC3B,MAAMO,KAAOP,SACb,MAAMQ,gBAAkBR,SACxB,MAAMS,oBAAsBT,SAE5B,MAAMU,UAAY,SAAUC,GAAQ,MAAO,EAAI,SAE/C,SAASC,QAAQD,GACpB,MAAM,IAAIE,MAAM,mCACpB,QAEO,SAASC,MACZ,MAA6B,YAArBxB,QAAQD,SAA0B,OAAS,GACvD,QACO,SAAS0B,MAAMC,GAClB,MAAM,IAAIH,MAAM,iCACpB,QACO,SAASI,QAAU,OAAO,CAAG,eAErB,CACXlC,SACAI,MACAC,QAvCmB,MAwCnBC,SACAG,IACAE,IACAE,KACAC,QACAE,SACAE,GACAC,YACAC,KACAC,IACAC,eACAC,mBACAC,KACAC,gBACAC,oBACAC,UACAE,QACAE,IACAC,MACAE"}
✄
export function nextTick(e,...r){Script.nextTick(e,...r)}export const title="Frida";export const browser=!1;export const platform=function(){const e=Process.platform;return"windows"===e?"win32":e}();export const pid=Process.id;export const env={FRIDA_COMPILE:"1"};export const argv=[];export const version=Frida.version;export const versions={};function e(){}export const on=e;export const addListener=e;export const once=e;export const off=e;export const removeListener=e;export const removeAllListeners=e;export const emit=e;export const prependListener=e;export const prependOnceListener=e;export const listeners=function(e){return[]};export function binding(e){throw new Error("process.binding is not supported")}export function cwd(){return"windows"===Process.platform?"C:\\":"/"}export function chdir(e){throw new Error("process.chdir is not supported")}export function umask(){return 0}export default{nextTick,title,browser:false,platform,pid,env,argv,version,versions,on,addListener,once,off,removeListener,removeAllListeners,emit,prependListener,prependOnceListener,listeners,binding,cwd,chdir,umask};
