import{g as u}from"./index-I3dhZJQA.js";function g(a,t){for(var n=0;n<t.length;n++){const e=t[n];if(typeof e!="string"&&!Array.isArray(e)){for(const c in e)if(c!=="default"&&!(c in a)){const o=Object.getOwnPropertyDescriptor(e,c);o&&Object.defineProperty(a,c,o.get?o:{enumerable:!0,get:()=>e[c]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}var r={exports:{}},i;function d(){return i||(i=1,function(a,t){ace.define("ace/theme/cloud9_night-css",["require","exports","module"],function(n,e,c){c.exports=`.ace-cloud9-night .ace_gutter {
    background: #303130;
    color: #eee
}

.ace-cloud9-night .ace_print-margin {
    width: 1px;
    background: #222
}

.ace-cloud9-night {
    background-color: #181818;
    color: #EBEBEB
}

.ace-cloud9-night .ace_cursor {
    color: #9F9F9F
}

.ace-cloud9-night .ace_marker-layer .ace_selection {
    background: #424242
}

.ace-cloud9-night.ace_multiselect .ace_selection.ace_start {
    box-shadow: 0 0 3px 0px #000000;
    border-radius: 2px
}

.ace-cloud9-night .ace_marker-layer .ace_step {
    background: rgb(102, 82, 0)
}

.ace-cloud9-night .ace_marker-layer .ace_bracket {
    margin: -1px 0 0 -1px;
    border: 1px solid #888888
}

.ace-cloud9-night .ace_marker-layer .ace_highlight {
    border: 1px solid rgb(110, 119, 0);
    border-bottom: 0;
    box-shadow: inset 0 -1px rgb(110, 119, 0);
    margin: -1px 0 0 -1px;
    background: rgba(255, 235, 0, 0.1);
}

.ace-cloud9-night .ace_marker-layer .ace_active-line {
    background: #292929
}

.ace-cloud9-night .ace_gutter-active-line {
    background-color: #3D3D3D
}

.ace-cloud9-night .ace_stack {
    background-color: rgb(66, 90, 44)
}

.ace-cloud9-night .ace_marker-layer .ace_selected-word {
    border: 1px solid #888888
}

.ace-cloud9-night .ace_invisible {
    color: #343434
}

.ace-cloud9-night .ace_keyword,
.ace-cloud9-night .ace_meta,
.ace-cloud9-night .ace_storage,
.ace-cloud9-night .ace_storage.ace_type,
.ace-cloud9-night .ace_support.ace_type {
    color: #C397D8
}

.ace-cloud9-night .ace_keyword.ace_operator {
    color: #70C0B1
}

.ace-cloud9-night .ace_constant.ace_character,
.ace-cloud9-night .ace_constant.ace_language,
.ace-cloud9-night .ace_constant.ace_numeric,
.ace-cloud9-night .ace_keyword.ace_other.ace_unit,
.ace-cloud9-night .ace_support.ace_constant,
.ace-cloud9-night .ace_variable.ace_parameter {
    color: #E78C45
}

.ace-cloud9-night .ace_constant.ace_other {
    color: #EEEEEE
}

.ace-cloud9-night .ace_invalid {
    color: #CED2CF;
    background-color: #DF5F5F
}

.ace-cloud9-night .ace_invalid.ace_deprecated {
    color: #CED2CF;
    background-color: #B798BF
}

.ace-cloud9-night .ace_fold {
    background-color: #7AA6DA;
    border-color: #DEDEDE
}

.ace-cloud9-night .ace_entity.ace_name.ace_function,
.ace-cloud9-night .ace_support.ace_function,
.ace-cloud9-night .ace_variable:not(.ace_parameter),
.ace-cloud9-night .ace_constant:not(.ace_numeric) {
    color: #7AA6DA
}

.ace-cloud9-night .ace_support.ace_class,
.ace-cloud9-night .ace_support.ace_type {
    color: #E7C547
}

.ace-cloud9-night .ace_heading,
.ace-cloud9-night .ace_markup.ace_heading,
.ace-cloud9-night .ace_string {
    color: #B9CA4A
}

.ace-cloud9-night .ace_entity.ace_name.ace_tag,
.ace-cloud9-night .ace_entity.ace_other.ace_attribute-name,
.ace-cloud9-night .ace_meta.ace_tag,
.ace-cloud9-night .ace_string.ace_regexp,
.ace-cloud9-night .ace_variable {
    color: #D54E53
}

.ace-cloud9-night .ace_comment {
    color: #969896
}

.ace-cloud9-night .ace_c9searchresults.ace_keyword {
    color: #C2C280;
}

.ace-cloud9-night .ace_indent-guide {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y
}

.ace-cloud9-night .ace_indent-guide-active {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQIW2PQ1dX9zzBz5sz/ABCcBFFentLlAAAAAElFTkSuQmCC) right repeat-y;
}
`}),ace.define("ace/theme/cloud9_night",["require","exports","module","ace/theme/cloud9_night-css","ace/lib/dom"],function(n,e,c){e.isDark=!0,e.cssClass="ace-cloud9-night",e.cssText=n("./cloud9_night-css");var o=n("../lib/dom");o.importCssString(e.cssText,e.cssClass)}),function(){ace.require(["ace/theme/cloud9_night"],function(n){a&&(a.exports=n)})}()}(r)),r.exports}var l=d();const _=u(l),s=g({__proto__:null,default:_},[l]);export{s as t};
