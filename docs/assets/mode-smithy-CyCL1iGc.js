import{g as _}from"./index-CU2Byj_S.js";function R(f,k){for(var n=0;n<k.length;n++){const u=k[n];if(typeof u!="string"&&!Array.isArray(u)){for(const m in u)if(m!=="default"&&!(m in f)){const d=Object.getOwnPropertyDescriptor(u,m);d&&Object.defineProperty(f,m,d.get?d:{enumerable:!0,get:()=>u[m]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}},v;function M(){return v||(v=1,function(f,k){ace.define("ace/mode/smithy_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,u,m){var d=n("../lib/oop"),g=n("./text_highlight_rules").TextHighlightRules,s=function(){this.$rules={start:[{include:"#comment"},{token:["meta.keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(\$)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.namespace.smithy"],regex:/^(namespace)(\s+)([A-Z-a-z0-9_\.#$-]+)/},{token:["keyword.statement.smithy","text","keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(use)(\s+)(shape|trait)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.statement.smithy","variable.other.smithy","text","keyword.operator.smithy"],regex:/^(metadata)(\s+.+)(\s*)(=)/},{token:["keyword.statement.smithy","text","entity.name.type.smithy"],regex:/^(apply|byte|short|integer|long|float|double|bigInteger|bigDecimal|boolean|blob|string|timestamp|service|resource|trait|list|map|set|structure|union|document)(\s+)([A-Z-a-z0-9_\.#$-]+)\b/},{token:["keyword.operator.smithy","text","entity.name.type.smithy","text","text","support.function.smithy","text","text","support.function.smithy"],regex:/^(operation)(\s+)([A-Z-a-z0-9_\.#$-]+)(\(.*\))(?:(\s*)(->)(\s*[A-Z-a-z0-9_\.#$-]+))?(?:(\s+)(errors))?/},{include:"#trait"},{token:["support.type.property-name.smithy","punctuation.separator.dictionary.pair.smithy"],regex:/([A-Z-a-z0-9_\.#$-]+)(:)/},{include:"#value"},{token:"keyword.other.smithy",regex:/\->/}],"#comment":[{include:"#doc_comment"},{include:"#line_comment"}],"#doc_comment":[{token:"comment.block.documentation.smithy",regex:/\/\/\/.*/}],"#line_comment":[{token:"comment.line.double-slash.smithy",regex:/\/\/.*/}],"#trait":[{token:["punctuation.definition.annotation.smithy","storage.type.annotation.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)/},{token:["punctuation.definition.annotation.smithy","punctuation.definition.object.end.smithy","meta.structure.smithy"],regex:/(@)([0-9a-zA-Z\.#-]+)(\()/,push:[{token:"punctuation.definition.object.end.smithy",regex:/\)/,next:"pop"},{include:"#value"},{include:"#object_inner"},{defaultToken:"meta.structure.smithy"}]}],"#value":[{include:"#constant"},{include:"#number"},{include:"#string"},{include:"#array"},{include:"#object"}],"#array":[{token:"punctuation.definition.array.begin.smithy",regex:/\[/,push:[{token:"punctuation.definition.array.end.smithy",regex:/\]/,next:"pop"},{include:"#comment"},{include:"#value"},{token:"punctuation.separator.array.smithy",regex:/,/},{token:"invalid.illegal.expected-array-separator.smithy",regex:/[^\s\]]/},{defaultToken:"meta.structure.array.smithy"}]}],"#constant":[{token:"constant.language.smithy",regex:/\b(?:true|false|null)\b/}],"#number":[{token:"constant.numeric.smithy",regex:/-?(?:0|[1-9]\d*)(?:(?:\.\d+)?(?:[eE][+-]?\d+)?)?/}],"#object":[{token:"punctuation.definition.dictionary.begin.smithy",regex:/\{/,push:[{token:"punctuation.definition.dictionary.end.smithy",regex:/\}/,next:"pop"},{include:"#trait"},{include:"#object_inner"},{defaultToken:"meta.structure.dictionary.smithy"}]}],"#object_inner":[{include:"#comment"},{include:"#string_key"},{token:"punctuation.separator.dictionary.key-value.smithy",regex:/:/,push:[{token:"punctuation.separator.dictionary.pair.smithy",regex:/,|(?=\})/,next:"pop"},{include:"#value"},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s,]/},{defaultToken:"meta.structure.dictionary.value.smithy"}]},{token:"invalid.illegal.expected-dictionary-separator.smithy",regex:/[^\s\}]/}],"#string_key":[{include:"#identifier_key"},{include:"#dquote_key"},{include:"#squote_key"}],"#identifier_key":[{token:"support.type.property-name.smithy",regex:/[A-Z-a-z0-9_\.#$-]+/}],"#dquote_key":[{include:"#dquote"}],"#squote_key":[{include:"#squote"}],"#string":[{include:"#textblock"},{include:"#dquote"},{include:"#squote"},{include:"#identifier"}],"#textblock":[{token:"punctuation.definition.string.begin.smithy",regex:/"""/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"""/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#dquote":[{token:"punctuation.definition.string.begin.smithy",regex:/"/,push:[{token:"punctuation.definition.string.end.smithy",regex:/"/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.double.smithy"}]}],"#squote":[{token:"punctuation.definition.string.begin.smithy",regex:/'/,push:[{token:"punctuation.definition.string.end.smithy",regex:/'/,next:"pop"},{token:"constant.character.escape.smithy",regex:/\\./},{defaultToken:"string.quoted.single.smithy"}]}],"#identifier":[{token:"storage.type.smithy",regex:/[A-Z-a-z_][A-Z-a-z0-9_\.#$-]*/}]},this.normalizeRules()};s.metaData={name:"Smithy",fileTypes:["smithy"],scopeName:"source.smithy",foldingStartMarker:"(\\{|\\[)\\s*",foldingStopMarker:"\\s*(\\}|\\])"},d.inherits(s,g),u.SmithyHighlightRules=s}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,u,m){var d=n("../range").Range,g=function(){};(function(){this.checkOutdent=function(s,c){return/^\s+$/.test(s)?/^\s*\}/.test(c):!1},this.autoOutdent=function(s,c){var e=s.getLine(c),t=e.match(/^(\s*\})/);if(!t)return 0;var i=t[1].length,o=s.findMatchingBracket({row:c,column:i});if(!o||o.row==c)return 0;var r=this.$getIndent(s.getLine(o.row));s.replace(new d(c,0,c,i-1),r)},this.$getIndent=function(s){return s.match(/^\s*/)[0]}}).call(g.prototype),u.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,u,m){var d=n("../../lib/oop"),g=n("../../range").Range,s=n("./fold_mode").FoldMode,c=u.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};d.inherits(c,s),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,i){var o=e.getLine(i);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var r=this._getFoldWidgetBase(e,t,i);return!r&&this.startRegionRe.test(o)?"start":r},this.getFoldWidgetRange=function(e,t,i,o){var r=e.getLine(i);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,i);var a=r.match(this.foldingStartMarker);if(a){var h=a.index;if(a[1])return this.openingBracketBlock(e,a[1],i,h);var l=e.getCommentFoldRange(i,h+a[0].length,1);return l&&!l.isMultiLine()&&(o?l=this.getSectionRange(e,i):t!="all"&&(l=null)),l}if(t!=="markbegin"){var a=r.match(this.foldingStopMarker);if(a){var h=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],i,h):e.getCommentFoldRange(i,h,-1)}}},this.getSectionRange=function(e,t){var i=e.getLine(t),o=i.search(/\S/),r=t,h=i.length;t=t+1;for(var l=t,a=e.getLength();++t<a;){i=e.getLine(t);var p=i.search(/\S/);if(p!==-1){if(o>p)break;var y=this.getFoldWidgetRange(e,"all",t);if(y){if(y.start.row<=r)break;if(y.isMultiLine())t=y.end.row;else if(o==p)break}l=t}}return new g(r,h,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,t,i){for(var o=t.search(/\s*$/),r=e.getLength(),h=i,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++i<r;){t=e.getLine(i);var p=l.exec(t);if(p&&(p[1]?a--:a++,!a))break}var y=i;if(y>h)return new g(h,o,y,t.length)}}).call(c.prototype)}),ace.define("ace/mode/smithy",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/smithy_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(n,u,m){var d=n("../lib/oop"),g=n("./text").Mode,s=n("./smithy_highlight_rules").SmithyHighlightRules,c=n("./matching_brace_outdent").MatchingBraceOutdent,e=n("./folding/cstyle").FoldMode,t=function(){this.HighlightRules=s,this.$outdent=new c,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};d.inherits(t,g),(function(){this.lineCommentStart="//",this.$quotes={'"':'"'},this.checkOutdent=function(i,o,r){return this.$outdent.checkOutdent(o,r)},this.autoOutdent=function(i,o,r){this.$outdent.autoOutdent(o,r)},this.$id="ace/mode/smithy"}).call(t.prototype),u.Mode=t}),function(){ace.require(["ace/mode/smithy"],function(n){f.exports=n})}()}(x)),x.exports}var b=M();const S=_(b),B=R({__proto__:null,default:S},[b]);export{B as m};
