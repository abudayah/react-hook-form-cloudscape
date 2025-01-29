import{g as _}from"./index-CU2Byj_S.js";function y(p,k){for(var n=0;n<k.length;n++){const l=k[n];if(typeof l!="string"&&!Array.isArray(l)){for(const m in l)if(m!=="default"&&!(m in p)){const u=Object.getOwnPropertyDescriptor(l,m);u&&Object.defineProperty(p,m,u.get?u:{enumerable:!0,get:()=>l[m]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}},R;function L(){return R||(R=1,function(p,k){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,l,m){var u=n("../lib/oop"),h=n("./text_highlight_rules").TextHighlightRules,g=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},g.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};u.inherits(g,h),g.getTagRule=function(c){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},g.getStartRule=function(c){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:c}},g.getEndRule=function(c){return{token:"comment.doc",regex:"\\*\\/",next:c}},l.DocCommentHighlightRules=g}),ace.define("ace/mode/sac_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(n,l,m){var u=n("../lib/oop"),h=n("./doc_comment_highlight_rules").DocCommentHighlightRules,g=n("./text_highlight_rules").TextHighlightRules,c=function(){var e="break|continue|do|else|for|if|return|with|while|use|class|all|void",t="bool|char|complex|double|float|byte|int|short|long|longlong|ubyte|uint|ushort|ulong|ulonglong|struct|typedef",o="inline|external|specialize",s="step|width",i="true|false",d=this.$keywords=this.createKeywordMapper({"keyword.control":e,"storage.type":t,"storage.modifier":o,"keyword.operator":s,"constant.language":i},"identifier"),a=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,r="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},h.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+a+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:a},{token:"constant.language.escape",regex:r},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:"support.function",regex:"fold|foldfix|genarray|modarray|propagate"},{token:d,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(h,"doc-",[h.getEndRule("start")]),this.normalizeRules()};u.inherits(c,g),l.sacHighlightRules=c}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,l,m){var u=n("../../lib/oop"),h=n("../../range").Range,g=n("./fold_mode").FoldMode,c=l.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};u.inherits(c,g),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var s=e.getLine(o);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var i=this._getFoldWidgetBase(e,t,o);return!i&&this.startRegionRe.test(s)?"start":i},this.getFoldWidgetRange=function(e,t,o,s){var i=e.getLine(o);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,o);var r=i.match(this.foldingStartMarker);if(r){var d=r.index;if(r[1])return this.openingBracketBlock(e,r[1],o,d);var a=e.getCommentFoldRange(o,d+r[0].length,1);return a&&!a.isMultiLine()&&(s?a=this.getSectionRange(e,o):t!="all"&&(a=null)),a}if(t!=="markbegin"){var r=i.match(this.foldingStopMarker);if(r){var d=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],o,d):e.getCommentFoldRange(o,d,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),s=o.search(/\S/),i=t,d=o.length;t=t+1;for(var a=t,r=e.getLength();++t<r;){o=e.getLine(t);var x=o.search(/\S/);if(x!==-1){if(s>x)break;var f=this.getFoldWidgetRange(e,"all",t);if(f){if(f.start.row<=i)break;if(f.isMultiLine())t=f.end.row;else if(s==x)break}a=t}}return new h(i,d,a,e.getLine(a).length)},this.getCommentRegionBlock=function(e,t,o){for(var s=t.search(/\s*$/),i=e.getLength(),d=o,a=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++o<i;){t=e.getLine(o);var x=a.exec(t);if(x&&(x[1]?r--:r++,!r))break}var f=o;if(f>d)return new h(d,s,f,t.length)}}).call(c.prototype)}),ace.define("ace/mode/sac",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/sac_highlight_rules","ace/mode/folding/cstyle"],function(n,l,m){var u=n("../lib/oop"),h=n("./text").Mode,g=n("./sac_highlight_rules").sacHighlightRules,c=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=g,this.foldingRules=new c,this.$behaviour=this.$defaultBehaviour};u.inherits(e,h),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/sac"}).call(e.prototype),l.Mode=e}),function(){ace.require(["ace/mode/sac"],function(n){p.exports=n})}()}(v)),v.exports}var b=L();const M=_(b),C=y({__proto__:null,default:M},[b]);export{C as m};
