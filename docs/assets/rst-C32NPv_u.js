import{g as a}from"./index-CU2Byj_S.js";function u(r,s){for(var t=0;t<s.length;t++){const e=s[t];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const p=Object.getOwnPropertyDescriptor(e,n);p&&Object.defineProperty(r,n,p.get?p:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function f(){return o||(o=1,function(r,s){ace.define("ace/snippets/rst.snippets",["require","exports","module"],function(t,e,n){n.exports=`# rst

snippet :
	:\${1:field name}: \${2:field body}
snippet *
	*\${1:Emphasis}*
snippet **
	**\${1:Strong emphasis}**
snippet _
	\\\`\${1:hyperlink-name}\\\`_
	.. _\\\`$1\\\`: \${2:link-block}
snippet =
	\${1:Title}
	=====\${2:=}
	\${3}
snippet -
	\${1:Title}
	-----\${2:-}
	\${3}
snippet cont:
	.. contents::
	
`}),ace.define("ace/snippets/rst",["require","exports","module","ace/snippets/rst.snippets"],function(t,e,n){e.snippetText=t("./rst.snippets"),e.scope="rst"}),function(){ace.require(["ace/snippets/rst"],function(t){r.exports=t})}()}(i)),i.exports}var c=f();const l=a(c),$=u({__proto__:null,default:l},[c]);export{$ as r};
