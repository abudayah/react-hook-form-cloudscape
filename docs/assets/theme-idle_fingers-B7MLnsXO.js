import{g as s}from"./index-CU2Byj_S.js";function g(a,i){for(var n=0;n<i.length;n++){const e=i[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in a)){const c=Object.getOwnPropertyDescriptor(e,r);c&&Object.defineProperty(a,r,c.get?c:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var o={exports:{}},t;function d(){return t||(t=1,function(a,i){ace.define("ace/theme/idle_fingers-css",["require","exports","module"],function(n,e,r){r.exports=`.ace-idle-fingers .ace_gutter {
  background: #3b3b3b;
  color: rgb(153,153,153)
}

.ace-idle-fingers .ace_print-margin {
  width: 1px;
  background: #3b3b3b
}

.ace-idle-fingers {
  background-color: #323232;
  color: #FFFFFF
}

.ace-idle-fingers .ace_cursor {
  color: #91FF00
}

.ace-idle-fingers .ace_marker-layer .ace_selection {
  background: rgba(90, 100, 126, 0.88)
}

.ace-idle-fingers.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #323232;
}

.ace-idle-fingers .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-idle-fingers .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040
}

.ace-idle-fingers .ace_marker-layer .ace_active-line {
  background: #353637
}

.ace-idle-fingers .ace_gutter-active-line {
  background-color: #353637
}

.ace-idle-fingers .ace_marker-layer .ace_selected-word {
  border: 1px solid rgba(90, 100, 126, 0.88)
}

.ace-idle-fingers .ace_invisible {
  color: #404040
}

.ace-idle-fingers .ace_keyword,
.ace-idle-fingers .ace_meta {
  color: #CC7833
}

.ace-idle-fingers .ace_constant,
.ace-idle-fingers .ace_constant.ace_character,
.ace-idle-fingers .ace_constant.ace_character.ace_escape,
.ace-idle-fingers .ace_constant.ace_other,
.ace-idle-fingers .ace_support.ace_constant {
  color: #6C99BB
}

.ace-idle-fingers .ace_invalid {
  color: #FFFFFF;
  background-color: #FF0000
}

.ace-idle-fingers .ace_fold {
  background-color: #CC7833;
  border-color: #FFFFFF
}

.ace-idle-fingers .ace_support.ace_function {
  color: #B83426
}

.ace-idle-fingers .ace_variable.ace_parameter {
  font-style: italic
}

.ace-idle-fingers .ace_string {
  color: #A5C261
}

.ace-idle-fingers .ace_string.ace_regexp {
  color: #CCCC33
}

.ace-idle-fingers .ace_comment {
  font-style: italic;
  color: #BC9458
}

.ace-idle-fingers .ace_meta.ace_tag {
  color: #FFE5BB
}

.ace-idle-fingers .ace_entity.ace_name {
  color: #FFC66D
}

.ace-idle-fingers .ace_collab.ace_user1 {
  color: #323232;
  background-color: #FFF980
}

.ace-idle-fingers .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWMwMjLyZYiPj/8PAAreAwAI1+g0AAAAAElFTkSuQmCC) right repeat-y
}

.ace-idle-fingers .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/idle_fingers",["require","exports","module","ace/theme/idle_fingers-css","ace/lib/dom"],function(n,e,r){e.isDark=!0,e.cssClass="ace-idle-fingers",e.cssText=n("./idle_fingers-css");var c=n("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/idle_fingers"],function(n){a.exports=n})}()}(o)),o.exports}var l=d();const f=s(l),A=g({__proto__:null,default:f},[l]);export{A as t};
