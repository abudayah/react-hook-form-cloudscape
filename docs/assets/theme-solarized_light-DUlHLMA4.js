import{g as s}from"./index-I3dhZJQA.js";function g(r,t){for(var a=0;a<t.length;a++){const e=t[a];if(typeof e!="string"&&!Array.isArray(e)){for(const n in e)if(n!=="default"&&!(n in r)){const c=Object.getOwnPropertyDescriptor(e,n);c&&Object.defineProperty(r,n,c.get?c:{enumerable:!0,get:()=>e[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},o;function A(){return o||(o=1,function(r,t){ace.define("ace/theme/solarized_light-css",["require","exports","module"],function(a,e,n){n.exports=`.ace-solarized-light .ace_gutter {
  background: #fbf1d3;
  color: #333
}

.ace-solarized-light .ace_print-margin {
  width: 1px;
  background: #e8e8e8
}

.ace-solarized-light {
  background-color: #FDF6E3;
  color: #586E75
}

.ace-solarized-light .ace_cursor {
  color: #000000
}

.ace-solarized-light .ace_marker-layer .ace_selection {
  background: rgba(7, 54, 67, 0.09)
}

.ace-solarized-light.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #FDF6E3;
}

.ace-solarized-light .ace_marker-layer .ace_step {
  background: rgb(255, 255, 0)
}

.ace-solarized-light .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid rgba(147, 161, 161, 0.50)
}

.ace-solarized-light .ace_marker-layer .ace_active-line {
  background: #EEE8D5
}

.ace-solarized-light .ace_gutter-active-line {
  background-color : #EDE5C1
}

.ace-solarized-light .ace_marker-layer .ace_selected-word {
  border: 1px solid #7f9390
}

.ace-solarized-light .ace_invisible {
  color: rgba(147, 161, 161, 0.50)
}

.ace-solarized-light .ace_keyword,
.ace-solarized-light .ace_meta,
.ace-solarized-light .ace_support.ace_class,
.ace-solarized-light .ace_support.ace_type {
  color: #859900
}

.ace-solarized-light .ace_constant.ace_character,
.ace-solarized-light .ace_constant.ace_other {
  color: #CB4B16
}

.ace-solarized-light .ace_constant.ace_language {
  color: #B58900
}

.ace-solarized-light .ace_constant.ace_numeric {
  color: #D33682
}

.ace-solarized-light .ace_fold {
  background-color: #268BD2;
  border-color: #586E75
}

.ace-solarized-light .ace_entity.ace_name.ace_function,
.ace-solarized-light .ace_entity.ace_name.ace_tag,
.ace-solarized-light .ace_support.ace_function,
.ace-solarized-light .ace_variable,
.ace-solarized-light .ace_variable.ace_language {
  color: #268BD2
}

.ace-solarized-light .ace_storage {
  color: #073642
}

.ace-solarized-light .ace_string {
  color: #2AA198
}

.ace-solarized-light .ace_string.ace_regexp {
  color: #D30102
}

.ace-solarized-light .ace_comment,
.ace-solarized-light .ace_entity.ace_other.ace_attribute-name {
  color: #93A1A1
}

.ace-solarized-light .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHjy8NJ/AAjgA5fzQUmBAAAAAElFTkSuQmCC) right repeat-y
}

.ace-solarized-light .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAZSURBVHjaYvj///9/hivKyv8BAAAA//8DACLqBhbvk+/eAAAAAElFTkSuQmCC") right repeat-y;
} 
`}),ace.define("ace/theme/solarized_light",["require","exports","module","ace/theme/solarized_light-css","ace/lib/dom"],function(a,e,n){e.isDark=!1,e.cssClass="ace-solarized-light",e.cssText=a("./solarized_light-css");var c=a("../lib/dom");c.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/solarized_light"],function(a){r&&(r.exports=a)})}()}(i)),i.exports}var l=A();const d=s(l),h=g({__proto__:null,default:d},[l]);export{h as t};
