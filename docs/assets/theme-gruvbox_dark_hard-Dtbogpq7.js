import{g as u}from"./index-I3dhZJQA.js";function _(n,o){for(var a=0;a<o.length;a++){const r=o[a];if(typeof r!="string"&&!Array.isArray(r)){for(const e in r)if(e!=="default"&&!(e in n)){const c=Object.getOwnPropertyDescriptor(r,e);c&&Object.defineProperty(n,e,c.get?c:{enumerable:!0,get:()=>r[e]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var d={exports:{}},t;function g(){return t||(t=1,function(n,o){ace.define("ace/theme/gruvbox_dark_hard-css",["require","exports","module"],function(a,r,e){e.exports=`.ace-gruvbox-dark-hard .ace_gutter {
  background: #1d2021;
  color: rgb(132,126,106)
}

.ace-gruvbox-dark-hard .ace_print-margin {
  width: 1px;
  background: #e8e8e8
}

.ace-gruvbox-dark-hard {
  background-color: #1d2021;
  color: rgba(235, 219, 178, 0.50)
}

.ace-gruvbox-dark-hard .ace_cursor {
  color: #a89984
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_selection {
  background: #3c3836
}

.ace-gruvbox-dark-hard.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #1d2021;
  border-radius: 2px
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(235, 219, 178, 0.15)
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_active-line {
  background: #3c3836
}

.ace-gruvbox-dark-hard .ace_gutter-active-line {
  background-color: #3c3836
}

.ace-gruvbox-dark-hard .ace_marker-layer .ace_selected-word {
  border: 1px solid #3c3836
}

.ace-gruvbox-dark-hard .ace_fold {
  background-color: #b8bb26;
  border-color: rgba(235, 219, 178, 0.50)
}

.ace-gruvbox-dark-hard .ace_keyword {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_keyword.ace_operator {
  color: #8ec07c
}

.ace-gruvbox-dark-hard .ace_keyword.ace_other.ace_unit {
  color: #b16286
}

.ace-gruvbox-dark-hard .ace_constant {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_constant.ace_numeric {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_constant.ace_character.ace_escape {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_constant.ace_other {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_support.ace_function {
  color: #8ec07c
}

.ace-gruvbox-dark-hard .ace_support.ace_constant {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_support.ace_constant.ace_property-value {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_support.ace_class {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_support.ace_type {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_storage {
  color: #fb4934
}

.ace-gruvbox-dark-hard .ace_invalid {
  color: #f9f5d7;
  background-color: #fb4934
}

.ace-gruvbox-dark-hard .ace_string {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_string.ace_regexp {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_comment {
  font-style: italic;
  color: #928374
}

.ace-gruvbox-dark-hard .ace_variable {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_variable.ace_language {
  color: #d3869b
}

.ace-gruvbox-dark-hard .ace_variable.ace_parameter {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_meta.ace_tag {
  color: #f9f5d7
}

.ace-gruvbox-dark-hard .ace_entity.ace_other.ace_attribute-name {
  color: #fabd2f
}

.ace-gruvbox-dark-hard .ace_entity.ace_name.ace_function {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_entity.ace_name.ace_tag {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_markup.ace_heading {
  color: #b8bb26
}

.ace-gruvbox-dark-hard .ace_markup.ace_list {
  color: #83a598
}

.ace-gruvbox-dark-hard .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/gruvbox_dark_hard",["require","exports","module","ace/theme/gruvbox_dark_hard-css","ace/lib/dom"],function(a,r,e){r.isDark=!0,r.cssClass="ace-gruvbox-dark-hard",r.cssText=a("./gruvbox_dark_hard-css");var c=a("../lib/dom");c.importCssString(r.cssText,r.cssClass)}),function(){ace.require(["ace/theme/gruvbox_dark_hard"],function(a){n&&(n.exports=a)})}()}(d)),d.exports}var b=g();const l=u(b),s=_({__proto__:null,default:l},[b]);export{s as t};
