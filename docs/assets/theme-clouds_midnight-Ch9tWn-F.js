import{g as s}from"./index-I3dhZJQA.js";function l(a,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in a)){const o=Object.getOwnPropertyDescriptor(e,c);o&&Object.defineProperty(a,c,o.get?o:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var i={exports:{}},r;function u(){return r||(r=1,function(a,t){ace.define("ace/theme/clouds_midnight-css",["require","exports","module"],function(n,e,c){c.exports=`.ace-clouds-midnight .ace_gutter {
  background: #232323;
  color: #929292
}

.ace-clouds-midnight .ace_print-margin {
  width: 1px;
  background: #232323
}

.ace-clouds-midnight {
  background-color: #191919;
  color: #929292
}

.ace-clouds-midnight .ace_cursor {
  color: #7DA5DC
}

.ace-clouds-midnight .ace_marker-layer .ace_selection {
  background: #000000
}

.ace-clouds-midnight.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #191919;
}

.ace-clouds-midnight .ace_marker-layer .ace_step {
  background: rgb(102, 82, 0)
}

.ace-clouds-midnight .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #BFBFBF
}

.ace-clouds-midnight .ace_marker-layer .ace_active-line {
  background: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_gutter-active-line {
  background-color: rgba(215, 215, 215, 0.031)
}

.ace-clouds-midnight .ace_marker-layer .ace_selected-word {
  border: 1px solid #000000
}

.ace-clouds-midnight .ace_invisible {
  color: #666
}

.ace-clouds-midnight .ace_keyword,
.ace-clouds-midnight .ace_meta,
.ace-clouds-midnight .ace_support.ace_constant.ace_property-value {
  color: #927C5D
}

.ace-clouds-midnight .ace_keyword.ace_operator {
  color: #4B4B4B
}

.ace-clouds-midnight .ace_keyword.ace_other.ace_unit {
  color: #366F1A
}

.ace-clouds-midnight .ace_constant.ace_language {
  color: #39946A
}

.ace-clouds-midnight .ace_constant.ace_numeric {
  color: #46A609
}

.ace-clouds-midnight .ace_constant.ace_character.ace_entity {
  color: #A165AC
}

.ace-clouds-midnight .ace_invalid {
  color: #FFFFFF;
  background-color: #E92E2E
}

.ace-clouds-midnight .ace_fold {
  background-color: #927C5D;
  border-color: #929292
}

.ace-clouds-midnight .ace_storage,
.ace-clouds-midnight .ace_support.ace_class,
.ace-clouds-midnight .ace_support.ace_function,
.ace-clouds-midnight .ace_support.ace_other,
.ace-clouds-midnight .ace_support.ace_type {
  color: #E92E2E
}

.ace-clouds-midnight .ace_string {
  color: #5D90CD
}

.ace-clouds-midnight .ace_comment {
  color: #3C403B
}

.ace-clouds-midnight .ace_entity.ace_name.ace_tag,
.ace-clouds-midnight .ace_entity.ace_other.ace_attribute-name {
  color: #606060
}

.ace-clouds-midnight .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y
}

.ace-clouds-midnight .ace_indent-guide-active {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/clouds_midnight",["require","exports","module","ace/theme/clouds_midnight-css","ace/lib/dom"],function(n,e,c){e.isDark=!0,e.cssClass="ace-clouds-midnight",e.cssText=n("./clouds_midnight-css");var o=n("../lib/dom");o.importCssString(e.cssText,e.cssClass,!1)}),function(){ace.require(["ace/theme/clouds_midnight"],function(n){a&&(a.exports=n)})}()}(i)),i.exports}var d=u();const g=s(d),_=l({__proto__:null,default:g},[d]);export{_ as t};
