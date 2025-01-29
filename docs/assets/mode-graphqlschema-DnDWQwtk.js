import{g as S}from"./index-CU2Byj_S.js";function _(v,R){for(var a=0;a<R.length;a++){const n=R[a];if(typeof n!="string"&&!Array.isArray(n)){for(const c in n)if(c!=="default"&&!(c in v)){const s=Object.getOwnPropertyDescriptor(n,c);s&&Object.defineProperty(v,c,s.get?s:{enumerable:!0,get:()=>n[c]})}}}return Object.freeze(Object.defineProperty(v,Symbol.toStringTag,{value:"Module"}))}var k={exports:{}},x;function y(){return x||(x=1,function(v,R){ace.define("ace/mode/graphqlschema_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(a,n,c){var s=a("../lib/oop"),p=a("./text_highlight_rules").TextHighlightRules,m=function(){var f="type|interface|union|enum|schema|input|implements|extends|scalar",e="Int|Float|String|ID|Boolean",t=this.createKeywordMapper({keyword:f,"storage.type":e},"identifier");this.$rules={start:[{token:"comment",regex:"#.*$"},{token:"paren.lparen",regex:/[\[({]/,next:"start"},{token:"paren.rparen",regex:/[\])}]/},{token:t,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"}]},this.normalizeRules()};s.inherits(m,p),n.GraphQLSchemaHighlightRules=m}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(a,n,c){var s=a("../../lib/oop"),p=a("../../range").Range,m=a("./fold_mode").FoldMode,f=n.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};s.inherits(f,m),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var l=e.getLine(r);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var o=this._getFoldWidgetBase(e,t,r);return!o&&this.startRegionRe.test(l)?"start":o},this.getFoldWidgetRange=function(e,t,r,l){var o=e.getLine(r);if(this.startRegionRe.test(o))return this.getCommentRegionBlock(e,o,r);var i=o.match(this.foldingStartMarker);if(i){var g=i.index;if(i[1])return this.openingBracketBlock(e,i[1],r,g);var h=e.getCommentFoldRange(r,g+i[0].length,1);return h&&!h.isMultiLine()&&(l?h=this.getSectionRange(e,r):t!="all"&&(h=null)),h}if(t!=="markbegin"){var i=o.match(this.foldingStopMarker);if(i){var g=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],r,g):e.getCommentFoldRange(r,g,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),l=r.search(/\S/),o=t,g=r.length;t=t+1;for(var h=t,i=e.getLength();++t<i;){r=e.getLine(t);var u=r.search(/\S/);if(u!==-1){if(l>u)break;var d=this.getFoldWidgetRange(e,"all",t);if(d){if(d.start.row<=o)break;if(d.isMultiLine())t=d.end.row;else if(l==u)break}h=t}}return new p(o,g,h,e.getLine(h).length)},this.getCommentRegionBlock=function(e,t,r){for(var l=t.search(/\s*$/),o=e.getLength(),g=r,h=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++r<o;){t=e.getLine(r);var u=h.exec(t);if(u&&(u[1]?i--:i++,!i))break}var d=r;if(d>g)return new p(g,l,d,t.length)}}).call(f.prototype)}),ace.define("ace/mode/graphqlschema",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/graphqlschema_highlight_rules","ace/mode/folding/cstyle"],function(a,n,c){var s=a("../lib/oop"),p=a("./text").Mode,m=a("./graphqlschema_highlight_rules").GraphQLSchemaHighlightRules,f=a("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=m,this.foldingRules=new f};s.inherits(e,p),(function(){this.lineCommentStart="#",this.$id="ace/mode/graphqlschema",this.snippetFileId="ace/snippets/graphqlschema"}).call(e.prototype),n.Mode=e}),function(){ace.require(["ace/mode/graphqlschema"],function(a){v.exports=a})}()}(k)),k.exports}var M=y();const b=S(M),L=_({__proto__:null,default:b},[M]);export{L as m};
