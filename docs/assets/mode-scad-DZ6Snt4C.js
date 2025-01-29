import{g as b}from"./index-CU2Byj_S.js";function M(k,v){for(var r=0;r<v.length;r++){const s=v[r];if(typeof s!="string"&&!Array.isArray(s)){for(const f in s)if(f!=="default"&&!(f in k)){const h=Object.getOwnPropertyDescriptor(s,f);h&&Object.defineProperty(k,f,h.get?h:{enumerable:!0,get:()=>s[f]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var x={exports:{}},R;function $(){return R||(R=1,function(k,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,s,f){var h=r("../lib/oop"),u=r("./text_highlight_rules").TextHighlightRules,o=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},o.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};h.inherits(o,u),o.getTagRule=function(g){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},o.getStartRule=function(g){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:g}},o.getEndRule=function(g){return{token:"comment.doc",regex:"\\*\\/",next:g}},s.DocCommentHighlightRules=o}),ace.define("ace/mode/scad_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,s,f){var h=r("../lib/oop");r("../lib/lang");var u=r("./doc_comment_highlight_rules").DocCommentHighlightRules,o=r("./text_highlight_rules").TextHighlightRules,g=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"module|if|else|for","constant.language":"NULL"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},u.getStartRule("start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant",regex:"<[a-zA-Z0-9.]+>"},{token:"keyword",regex:"(?:use|include)"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]},this.embedRules(u,"doc-",[u.getEndRule("start")])};h.inherits(g,o),s.scadHighlightRules=g}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,s,f){var h=r("../range").Range,u=function(){};(function(){this.checkOutdent=function(o,g){return/^\s+$/.test(o)?/^\s*\}/.test(g):!1},this.autoOutdent=function(o,g){var e=o.getLine(g),n=e.match(/^(\s*\})/);if(!n)return 0;var t=n[1].length,i=o.findMatchingBracket({row:g,column:t});if(!i||i.row==g)return 0;var c=this.$getIndent(o.getLine(i.row));o.replace(new h(g,0,g,t-1),c)},this.$getIndent=function(o){return o.match(/^\s*/)[0]}}).call(u.prototype),s.MatchingBraceOutdent=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,s,f){var h=r("../../lib/oop"),u=r("../../range").Range,o=r("./fold_mode").FoldMode,g=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};h.inherits(g,o),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,t){var i=e.getLine(t);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var c=this._getFoldWidgetBase(e,n,t);return!c&&this.startRegionRe.test(i)?"start":c},this.getFoldWidgetRange=function(e,n,t,i){var c=e.getLine(t);if(this.startRegionRe.test(c))return this.getCommentRegionBlock(e,c,t);var a=c.match(this.foldingStartMarker);if(a){var l=a.index;if(a[1])return this.openingBracketBlock(e,a[1],t,l);var d=e.getCommentFoldRange(t,l+a[0].length,1);return d&&!d.isMultiLine()&&(i?d=this.getSectionRange(e,t):n!="all"&&(d=null)),d}if(n!=="markbegin"){var a=c.match(this.foldingStopMarker);if(a){var l=a.index+a[0].length;return a[1]?this.closingBracketBlock(e,a[1],t,l):e.getCommentFoldRange(t,l,-1)}}},this.getSectionRange=function(e,n){var t=e.getLine(n),i=t.search(/\S/),c=n,l=t.length;n=n+1;for(var d=n,a=e.getLength();++n<a;){t=e.getLine(n);var p=t.search(/\S/);if(p!==-1){if(i>p)break;var m=this.getFoldWidgetRange(e,"all",n);if(m){if(m.start.row<=c)break;if(m.isMultiLine())n=m.end.row;else if(i==p)break}d=n}}return new u(c,l,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,n,t){for(var i=n.search(/\s*$/),c=e.getLength(),l=t,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,a=1;++t<c;){n=e.getLine(t);var p=d.exec(n);if(p&&(p[1]?a--:a++,!a))break}var m=t;if(m>l)return new u(l,i,m,n.length)}}).call(g.prototype)}),ace.define("ace/mode/scad",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scad_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(r,s,f){var h=r("../lib/oop"),u=r("./text").Mode,o=r("./scad_highlight_rules").scadHighlightRules,g=r("./matching_brace_outdent").MatchingBraceOutdent,e=r("./folding/cstyle").FoldMode,n=function(){this.HighlightRules=o,this.$outdent=new g,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new e};h.inherits(n,u),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(t,i,c){var l=this.$getIndent(i),d=this.getTokenizer().getLineTokens(i,t),a=d.tokens,p=d.state;if(a.length&&a[a.length-1].type=="comment")return l;if(t=="start"){var m=i.match(/^.*[\{\(\[]\s*$/);m&&(l+=c)}else if(t=="doc-start"){if(p=="start")return"";var m=i.match(/^\s*(\/?)\*/);m&&(m[1]&&(l+=" "),l+="* ")}return l},this.checkOutdent=function(t,i,c){return this.$outdent.checkOutdent(i,c)},this.autoOutdent=function(t,i,c){this.$outdent.autoOutdent(i,c)},this.$id="ace/mode/scad"}).call(n.prototype),s.Mode=n}),function(){ace.require(["ace/mode/scad"],function(r){k.exports=r})}()}(x)),x.exports}var _=$();const S=b(_),B=M({__proto__:null,default:S},[_]);export{B as m};
