import{g as u}from"./index-I3dhZJQA.js";function g(r,a){for(var o=0;o<a.length;o++){const e=a[o];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const t=Object.getOwnPropertyDescriptor(e,n);t&&Object.defineProperty(r,n,t.get?t:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var c={exports:{}},i;function m(){return i||(i=1,function(r,a){ace.define("ace/theme/tomorrow_night_blue-css",["require","exports","module"],function(o,e,n){n.exports=`.ace-tomorrow-night-blue .ace_gutter {
  background: #00204b;
  color: #7388b5
}

.ace-tomorrow-night-blue .ace_print-margin {
  width: 1px;
  background: #00204b
}

.ace-tomorrow-night-blue {
  background-color: #002451;
  color: #FFFFFF
}

.ace-tomorrow-night-blue .ace_constant.ace_other,
.ace-tomorrow-night-blue .ace_cursor {
  color: #FFFFFF
}

.ace-tomorrow-night-blue .ace_marker-layer .ace_selection {
  background: #003F8E
}

.ace-tomorrow-night-blue.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #002451;
}

.ace-tomorrow-night-blue .ace_marker-layer .ace_step {
  background: rgb(127, 111, 19)
}

.ace-tomorrow-night-blue .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #404F7D
}

.ace-tomorrow-night-blue .ace_marker-layer .ace_active-line {
  background: #00346E
}

.ace-tomorrow-night-blue .ace_gutter-active-line {
  background-color: #022040
}

.ace-tomorrow-night-blue .ace_marker-layer .ace_selected-word {
  border: 1px solid #003F8E
}

.ace-tomorrow-night-blue .ace_invisible {
  color: #404F7D
}

.ace-tomorrow-night-blue .ace_keyword,
.ace-tomorrow-night-blue .ace_meta,
.ace-tomorrow-night-blue .ace_storage,
.ace-tomorrow-night-blue .ace_storage.ace_type,
.ace-tomorrow-night-blue .ace_support.ace_type {
  color: #EBBBFF
}

.ace-tomorrow-night-blue .ace_keyword.ace_operator {
  color: #99FFFF
}

.ace-tomorrow-night-blue .ace_constant.ace_character,
.ace-tomorrow-night-blue .ace_constant.ace_language,
.ace-tomorrow-night-blue .ace_constant.ace_numeric,
.ace-tomorrow-night-blue .ace_keyword.ace_other.ace_unit,
.ace-tomorrow-night-blue .ace_support.ace_constant,
.ace-tomorrow-night-blue .ace_variable.ace_parameter {
  color: #FFC58F
}

.ace-tomorrow-night-blue .ace_invalid {
  color: #FFFFFF;
  background-color: #F99DA5
}

.ace-tomorrow-night-blue .ace_invalid.ace_deprecated {
  color: #FFFFFF;
  background-color: #EBBBFF
}

.ace-tomorrow-night-blue .ace_fold {
  background-color: #BBDAFF;
  border-color: #FFFFFF
}

.ace-tomorrow-night-blue .ace_entity.ace_name.ace_function,
.ace-tomorrow-night-blue .ace_support.ace_function,
.ace-tomorrow-night-blue .ace_variable {
  color: #BBDAFF
}

.ace-tomorrow-night-blue .ace_support.ace_class,
.ace-tomorrow-night-blue .ace_support.ace_type {
  color: #FFEEAD
}

.ace-tomorrow-night-blue .ace_heading,
.ace-tomorrow-night-blue .ace_markup.ace_heading,
.ace-tomorrow-night-blue .ace_string {
  color: #D1F1A9
}

.ace-tomorrow-night-blue .ace_entity.ace_name.ace_tag,
.ace-tomorrow-night-blue .ace_entity.ace_other.ace_attribute-name,
.ace-tomorrow-night-blue .ace_meta.ace_tag,
.ace-tomorrow-night-blue .ace_string.ace_regexp,
.ace-tomorrow-night-blue .ace_variable {
  color: #FF9DA4
}

.ace-tomorrow-night-blue .ace_comment {
  color: #7285B7
}

.ace-tomorrow-night-blue .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYJDzqfwPAANXAeNsiA+ZAAAAAElFTkSuQmCC) right repeat-y
}

.ace-tomorrow-night-blue .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/tomorrow_night_blue",["require","exports","module","ace/theme/tomorrow_night_blue-css","ace/lib/dom"],function(o,e,n){e.isDark=!0,e.cssClass="ace-tomorrow-night-blue",e.cssText=o("./tomorrow_night_blue-css");var t=o("../lib/dom");t.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/tomorrow_night_blue"],function(o){r&&(r.exports=o)})}()}(c)),c.exports}var l=m();const _=u(l),h=g({__proto__:null,default:_},[l]);export{h as t};
