import{g as v}from"./index-CU2Byj_S.js";function h(s,l){for(var e=0;e<l.length;e++){const n=l[e];if(typeof n!="string"&&!Array.isArray(n)){for(const t in n)if(t!=="default"&&!(t in s)){const a=Object.getOwnPropertyDescriptor(n,t);a&&Object.defineProperty(s,t,a.get?a:{enumerable:!0,get:()=>n[t]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var f={exports:{}},_;function y(){return _||(_=1,function(s,l){ace.define("ace/ext/simple_tokenizer",["require","exports","module","ace/tokenizer","ace/layer/text_util"],function(e,n,t){var a=e("../tokenizer").Tokenizer,x=e("../layer/text_util").isTextToken,g=function(){function u(r,i){this._lines=r.split(/\r\n|\r|\n/),this._states=[],this._tokenizer=i}return u.prototype.getTokens=function(r){var i=this._lines[r],p=this._states[r-1],o=this._tokenizer.getLineTokens(i,p);return this._states[r]=o.state,o.tokens},u.prototype.getLength=function(){return this._lines.length},u}();function z(u,r){for(var i=new g(u,new a(r.getRules())),p=[],o=0;o<i.getLength();o++){var m=i.getTokens(o);p.push(m.map(function(c){return{className:x(c.type)?void 0:"ace_"+c.type.replace(/\./g," ace_"),value:c.value}}))}return p}t.exports={tokenize:z}}),function(){ace.require(["ace/ext/simple_tokenizer"],function(e){s.exports=e})}()}(f)),f.exports}var k=y();const T=v(k),d=h({__proto__:null,default:T},[k]);export{d as e};
