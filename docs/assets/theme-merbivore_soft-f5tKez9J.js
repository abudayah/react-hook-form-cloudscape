import{g as m}from"./index-I3dhZJQA.js";function b(n,c){for(var r=0;r<c.length;r++){const e=c[r];if(typeof e!="string"&&!Array.isArray(e)){for(const o in e)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(e,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>e[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},s;function f(){return s||(s=1,function(n,c){ace.define("ace/theme/merbivore_soft-css",["require","exports","module"],function(r,e,o){o.exports=`.ace-merbivore-soft .ace_gutter {
  background: #262424;
  color: #E6E1DC
}

.ace-merbivore-soft .ace_print-margin {
  width: 1px;
  background: #262424
}

.ace-merbivore-soft {
  background-color: #1C1C1C;
  color: #E6E1DC
}

.ace-merbivore-soft .ace_cursor {
  color: #FFFFFF
}

.ace-merbivore-soft .ace_marker-layer .ace_selection {
  background: #494949
}

.ace-merbivore-soft.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1C1C1C;
}

.ace-merbivore-soft .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-merbivore-soft .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404040
}

.ace-merbivore-soft .ace_marker-layer .ace_active-line {
  background: #333435
}

.ace-merbivore-soft .ace_gutter-active-line {
  background-color: #333435
}

.ace-merbivore-soft .ace_marker-layer .ace_selected-word {
  border: 1px solid #494949
}

.ace-merbivore-soft .ace_invisible {
  color: #404040
}

.ace-merbivore-soft .ace_entity.ace_name.ace_tag,
.ace-merbivore-soft .ace_keyword,
.ace-merbivore-soft .ace_meta,
.ace-merbivore-soft .ace_meta.ace_tag,
.ace-merbivore-soft .ace_storage {
  color: #FC803A
}

.ace-merbivore-soft .ace_constant,
.ace-merbivore-soft .ace_constant.ace_character,
.ace-merbivore-soft .ace_constant.ace_character.ace_escape,
.ace-merbivore-soft .ace_constant.ace_other,
.ace-merbivore-soft .ace_support.ace_type {
  color: #68C1D8
}

.ace-merbivore-soft .ace_constant.ace_character.ace_escape {
  color: #B3E5B4
}

.ace-merbivore-soft .ace_constant.ace_language {
  color: #E1C582
}

.ace-merbivore-soft .ace_constant.ace_library,
.ace-merbivore-soft .ace_string,
.ace-merbivore-soft .ace_support.ace_constant {
  color: #8EC65F
}

.ace-merbivore-soft .ace_constant.ace_numeric {
  color: #7FC578
}

.ace-merbivore-soft .ace_invalid,
.ace-merbivore-soft .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #FE3838
}

.ace-merbivore-soft .ace_fold {
  background-color: #FC803A;
  border-color: #E6E1DC
}

.ace-merbivore-soft .ace_comment,
.ace-merbivore-soft .ace_meta {
  font-style: italic;
  color: #AC4BB8
}

.ace-merbivore-soft .ace_entity.ace_other.ace_attribute-name {
  color: #EAF1A3
}

.ace-merbivore-soft .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWOQkpLyZfD09PwPAAfYAnaStpHRAAAAAElFTkSuQmCC) right repeat-y
}

.ace-merbivore-soft .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/merbivore_soft",["require","exports","module","ace/theme/merbivore_soft-css","ace/lib/dom"],function(r,e,o){e.isDark=!0,e.cssClass="ace-merbivore-soft",e.cssText=r("./merbivore_soft-css");var a=r("../lib/dom");a.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/merbivore_soft"],function(r){n&&(n.exports=r)})}()}(t)),t.exports}var i=f();const _=m(i),A=b({__proto__:null,default:_},[i]);export{A as t};
