import{g as i}from"./index-CU2Byj_S.js";function f(a,o){for(var t=0;t<o.length;t++){const e=o[t];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(a,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var m={exports:{}},c;function u(){return c||(c=1,function(a,o){ace.define("ace/theme/textmate",["require","exports","module","ace/theme/textmate-css","ace/lib/dom"],function(t,e,r){e.isDark=!1,e.cssClass="ace-tm",e.cssText=t("./textmate-css"),e.$id="ace/theme/textmate";var s=t("../lib/dom");s.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/textmate"],function(t){a.exports=t})}()}(m)),m.exports}var n=u();const l=i(n),d=f({__proto__:null,default:l},[n]);export{d as t};
