import{g as u}from"./index-I3dhZJQA.js";function d(c,o){for(var e=0;e<o.length;e++){const a=o[e];if(typeof a!="string"&&!Array.isArray(a)){for(const n in a)if(n!=="default"&&!(n in c)){const r=Object.getOwnPropertyDescriptor(a,n);r&&Object.defineProperty(c,n,r.get?r:{enumerable:!0,get:()=>a[n]})}}}return Object.freeze(Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}))}var t={exports:{}},l;function s(){return l||(l=1,function(c,o){ace.define("ace/theme/dracula-css",["require","exports","module"],function(e,a,n){n.exports=`/*
 * Copyright © 2017 Zeno Rocha <hi@zenorocha.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

.ace-dracula .ace_gutter {
  background: #282a36;
  color: rgb(144,145,148)
}

.ace-dracula .ace_print-margin {
  width: 1px;
  background: #44475a
}

.ace-dracula {
  background-color: #282a36;
  color: #f8f8f2
}

.ace-dracula .ace_cursor {
  color: #f8f8f0
}

.ace-dracula .ace_marker-layer .ace_selection {
  background: #44475a
}

.ace-dracula.ace_multiselect .ace_selection.ace_start {
  box-shadow: 0 0 3px 0px #282a36;
  border-radius: 2px
}

.ace-dracula .ace_marker-layer .ace_step {
  background: rgb(198, 219, 174)
}

.ace-dracula .ace_marker-layer .ace_bracket {
  margin: -1px 0 0 -1px;
  border: 1px solid #a29709
}

.ace-dracula .ace_marker-layer .ace_active-line {
  background: #44475a
}

.ace-dracula .ace_gutter-active-line {
  background-color: #44475a
}

.ace-dracula .ace_marker-layer .ace_selected-word {
  box-shadow: 0px 0px 0px 1px #a29709;
  border-radius: 3px;
}

.ace-dracula .ace_fold {
  background-color: #50fa7b;
  border-color: #f8f8f2
}

.ace-dracula .ace_keyword {
  color: #ff79c6
}

.ace-dracula .ace_constant.ace_language {
  color: #bd93f9
}

.ace-dracula .ace_constant.ace_numeric {
  color: #bd93f9
}

.ace-dracula .ace_constant.ace_character {
  color: #bd93f9
}

.ace-dracula .ace_constant.ace_character.ace_escape {
  color: #ff79c6
}

.ace-dracula .ace_constant.ace_other {
  color: #bd93f9
}

.ace-dracula .ace_support.ace_function {
  color: #8be9fd
}

.ace-dracula .ace_support.ace_constant {
  color: #6be5fd
}

.ace-dracula .ace_support.ace_class {
  font-style: italic;
  color: #66d9ef
}

.ace-dracula .ace_support.ace_type {
  font-style: italic;
  color: #66d9ef
}

.ace-dracula .ace_storage {
  color: #ff79c6
}

.ace-dracula .ace_storage.ace_type {
  font-style: italic;
  color: #8be9fd
}

.ace-dracula .ace_invalid {
  color: #F8F8F0;
  background-color: #ff79c6
}

.ace-dracula .ace_invalid.ace_deprecated {
  color: #F8F8F0;
  background-color: #bd93f9
}

.ace-dracula .ace_string {
  color: #f1fa8c
}

.ace-dracula .ace_comment {
  color: #6272a4
}

.ace-dracula .ace_variable {
  color: #50fa7b
}

.ace-dracula .ace_variable.ace_parameter {
  font-style: italic;
  color: #ffb86c
}

.ace-dracula .ace_entity.ace_other.ace_attribute-name {
  color: #50fa7b
}

.ace-dracula .ace_entity.ace_name.ace_function {
  color: #50fa7b
}

.ace-dracula .ace_entity.ace_name.ace_tag {
  color: #ff79c6
}
.ace-dracula .ace_invisible {
  color: #626680;
}

.ace-dracula .ace_indent-guide {
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYHB3d/8PAAOIAdULw8qMAAAAAElFTkSuQmCC) right repeat-y
}

.ace-dracula .ace_indent-guide-active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACAQMAAACjTyRkAAAABlBMVEUAAADCwsK76u2xAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGBoAAAAhACBGFbxzQAAAABJRU5ErkJggg==") right repeat-y;
}
`}),ace.define("ace/theme/dracula",["require","exports","module","ace/theme/dracula-css","ace/lib/dom"],function(e,a,n){a.isDark=!0,a.cssClass="ace-dracula",a.cssText=e("./dracula-css"),a.$selectionColorConflict=!0;var r=e("../lib/dom");r.importCssString(a.cssText,a.cssClass,!1)}),function(){ace.require(["ace/theme/dracula"],function(e){c&&(c.exports=e)})}()}(t)),t.exports}var i=s();const A=u(i),_=d({__proto__:null,default:A},[i]);export{_ as t};
