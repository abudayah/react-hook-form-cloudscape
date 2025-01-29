import{g as f}from"./index-CU2Byj_S.js";function c(r,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const o=Object.getOwnPropertyDescriptor(e,n);o&&Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},p;function u(){return p||(p=1,function(r,s){ace.define("ace/snippets/fsl.snippets",["require","exports","module"],function(t,e,n){n.exports=`snippet header
	machine_name     : "";
	machine_author   : "";
	machine_license  : MIT;
	machine_comment  : "";
	machine_language : en;
	machine_version  : 1.0.0;
	fsl_version      : 1.0.0;
	start_states     : [];
`}),ace.define("ace/snippets/fsl",["require","exports","module","ace/snippets/fsl.snippets"],function(t,e,n){e.snippetText=t("./fsl.snippets"),e.scope="fsl"}),function(){ace.require(["ace/snippets/fsl"],function(t){r.exports=t})}()}(i)),i.exports}var a=u();const l=f(a),d=c({__proto__:null,default:l},[a]);export{d as f};
