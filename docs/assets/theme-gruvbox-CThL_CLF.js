import{g as i}from"./index-I3dhZJQA.js";function l(o,c){for(var n=0;n<c.length;n++){const e=c[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in o)){const a=Object.getOwnPropertyDescriptor(e,r);a&&Object.defineProperty(o,r,a.get?a:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},u;function s(){return u||(u=1,function(o,c){ace.define("ace/theme/gruvbox-css",["require","exports","module"],function(n,e,r){r.exports=`.ace-gruvbox .ace_gutter-active-line {
  background-color: #3C3836;
}

.ace-gruvbox {
  color: #EBDAB4;
  background-color: #1D2021;
}

.ace-gruvbox .ace_invisible {
  color: #504945;
}

.ace-gruvbox .ace_marker-layer .ace_selection {
  background: rgba(179, 101, 57, 0.75)
}

.ace-gruvbox.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #002240;
}

.ace-gruvbox .ace_keyword {
  color: #8ec07c;
}

.ace-gruvbox .ace_comment {
  font-style: italic;
  color: #928375;
}

.ace-gruvbox .ace-statement {
  color: red;
}

.ace-gruvbox .ace_variable {
  color: #84A598;
}

.ace-gruvbox .ace_variable.ace_language {
  color: #D2879B;
}

.ace-gruvbox .ace_constant {
  color: #C2859A;
}

.ace-gruvbox .ace_constant.ace_language {
  color: #C2859A;
}

.ace-gruvbox .ace_constant.ace_numeric {
  color: #C2859A;
}

.ace-gruvbox .ace_string {
  color: #B8BA37;
}

.ace-gruvbox .ace_support {
  color: #F9BC41;
}

.ace-gruvbox .ace_support.ace_function {
  color: #F84B3C;
}

.ace-gruvbox .ace_storage {
  color: #8FBF7F;
}

.ace-gruvbox .ace_keyword.ace_operator {
  color: #EBDAB4;
}

.ace-gruvbox .ace_punctuation.ace_operator {
  color: yellow;
}

.ace-gruvbox .ace_marker-layer .ace_active-line {
  background: #3C3836;
}

.ace-gruvbox .ace_marker-layer .ace_selected-word {
  border-radius: 4px;
  border: 8px solid #3f475d;
}

.ace-gruvbox .ace_print-margin {
  width: 5px;
  background: #3C3836;
}

.ace-gruvbox .ace_indent-guide {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNQUFD4z6Crq/sfAAuYAuYl+7lfAAAAAElFTkSuQmCC") right repeat-y;
}

.ace-gruvbox .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/gruvbox",["require","exports","module","ace/theme/gruvbox-css","ace/lib/dom"],function(n,e,r){e.isDark=!0,e.cssClass="ace-gruvbox",e.cssText=n("./gruvbox-css");var a=n("../lib/dom");a.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/gruvbox"],function(n){o&&(o.exports=n)})}()}(t)),t.exports}var g=s();const A=i(g),x=l({__proto__:null,default:A},[g]);export{x as t};
