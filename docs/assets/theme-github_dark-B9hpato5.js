import{g as d}from"./index-I3dhZJQA.js";function g(c,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in c)){const r=Object.getOwnPropertyDescriptor(e,n);r&&Object.defineProperty(c,n,r.get?r:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function b(){return o||(o=1,function(c,t){ace.define("ace/theme/github_dark-css",["require","exports","module"],function(a,e,n){n.exports=`.ace-github-dark .ace_gutter {
  background: #24292e;
  color: #7388b5
}

.ace-github-dark .ace_print-margin {
  width: 1px;
  background: #00204b
}

.ace-github-dark {
  background-color: #24292e;
  color: #FFFFFF
}

.ace-github-dark .ace_constant.ace_other,
.ace-github-dark .ace_cursor {
  color: #FFFFFF
}

.ace-github-dark .ace_marker-layer .ace_selection {
  background: #003F8E
}

.ace-github-dark.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #24292e;
}

.ace-github-dark .ace_marker-layer .ace_step {
  background: rgb(127, 111, 19)
}

.ace-github-dark .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404F7D
}

.ace-github-dark .ace_marker-layer .ace_active-line {
  background: #00346E
}

.ace-github-dark .ace_gutter-active-line {
  background-color: #24292e
}

.ace-github-dark .ace_marker-layer .ace_selected-word {
  border: 1px solid #003F8E
}

.ace-github-dark .ace_invisible {
  color: #404F7D
}

.ace-github-dark .ace_keyword,
.ace-github-dark .ace_meta,
.ace-github-dark .ace_storage,
.ace-github-dark .ace_storage.ace_type,
.ace-github-dark .ace_support.ace_type {
  color: #ff7b72
}

.ace-github-dark .ace_keyword.ace_operator {
  color: #79c0ff
}

.ace-github-dark .ace_constant.ace_character,
.ace-github-dark .ace_constant.ace_language,
.ace-github-dark .ace_constant.ace_numeric,
.ace-github-dark .ace_keyword.ace_other.ace_unit,
.ace-github-dark .ace_support.ace_constant,
.ace-github-dark .ace_variable.ace_parameter {
  color: #FFC58F
}

.ace-github-dark .ace_invalid {
  color: #FFFFFF;
  background-color: #F99DA5
}

.ace-github-dark .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #ff7b72
}

.ace-github-dark .ace_fold {
  background-color: #BBDAFF;
  border-color: #FFFFFF
}

.ace-github-dark .ace_entity.ace_name.ace_function,
.ace-github-dark .ace_support.ace_function,
.ace-github-dark .ace_variable {
  color: #BBDAFF
}

.ace-github-dark .ace_support.ace_class,
.ace-github-dark .ace_support.ace_type {
  color: #FFEEAD
}

.ace-github-dark .ace_heading,
.ace-github-dark .ace_markup.ace_heading,
.ace-github-dark .ace_string {
  color: #9fcef6
}

.ace-github-dark .ace_entity.ace_name.ace_tag,
.ace-github-dark .ace_entity.ace_other.ace_attribute-name,
.ace-github-dark .ace_meta.ace_tag,
.ace-github-dark .ace_string.ace_regexp,
.ace-github-dark .ace_variable {
  color: #FF9DA4
}

.ace-github-dark .ace_comment {
  color: #7285B7
}

.ace-github-dark .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y
}

.ace-github-dark .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}

.ace-github-dark .ace_constant.ace_buildin {
  color: #0086B3;
}

.ace-github-dark .ace_variable.ace_language {
  color: #ffffff;
}
  `}),ace.define("ace/theme/github_dark",["require","exports","module","ace/theme/github_dark-css","ace/lib/dom"],function(a,e,n){e.isDark=!0,e.cssClass="ace-github-dark",e.cssText=a("./github_dark-css");var r=a("../lib/dom");r.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/github_dark"],function(a){c&&(c.exports=a)})}()}(i)),i.exports}var u=b();const _=d(u),h=g({__proto__:null,default:_},[u]);export{h as t};
