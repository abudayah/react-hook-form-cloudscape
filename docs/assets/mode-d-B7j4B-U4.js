import{g as D}from"./index-CU2Byj_S.js";function w(k,v){for(var n=0;n<v.length;n++){const s=v[n];if(typeof s!="string"&&!Array.isArray(s)){for(const p in s)if(p!=="default"&&!(p in k)){const f=Object.getOwnPropertyDescriptor(s,p);f&&Object.defineProperty(k,p,f.get?f:{enumerable:!0,get:()=>s[p]})}}}return Object.freeze(Object.defineProperty(k,Symbol.toStringTag,{value:"Module"}))}var R={exports:{}},M;function E(){return M||(M=1,function(k,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,s,p){var f=n("../lib/oop"),x=n("./text_highlight_rules").TextHighlightRules,h=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},h.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};f.inherits(h,x),h.getTagRule=function(g){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},h.getStartRule=function(g){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:g}},h.getEndRule=function(g){return{token:"comment.doc",regex:"\\*\\/",next:g}},s.DocCommentHighlightRules=h}),ace.define("ace/mode/d_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(n,s,p){var f=n("../lib/oop"),x=n("./doc_comment_highlight_rules").DocCommentHighlightRules,h=n("./text_highlight_rules").TextHighlightRules,g=function(){var e="this|super|import|module|body|mixin|__traits|invariant|alias|asm|delete|typeof|typeid|sizeof|cast|new|in|is|typedef|__vector|__parameters",t="break|case|continue|default|do|else|for|foreach|foreach_reverse|goto|if|return|switch|while|catch|try|throw|finally|version|assert|unittest|with",r="auto|bool|char|dchar|wchar|byte|ubyte|float|double|real|cfloat|creal|cdouble|cent|ifloat|ireal|idouble|int|long|short|void|uint|ulong|ushort|ucent|function|delegate|string|wstring|dstring|size_t|ptrdiff_t|hash_t|Object",l="abstract|align|debug|deprecated|export|extern|const|final|in|inout|out|ref|immutable|lazy|nothrow|override|package|pragma|private|protected|public|pure|scope|shared|__gshared|synchronized|static|volatile",a="class|struct|union|template|interface|enum|macro",c={token:"constant.language.escape",regex:`\\\\(?:(?:x[0-9A-F]{2})|(?:[0-7]{1,3})|(?:['"\\?0abfnrtv\\\\])|(?:u[0-9a-fA-F]{4})|(?:U[0-9a-fA-F]{8}))`},d="null|true|false|__DATE__|__EOF__|__TIME__|__TIMESTAMP__|__VENDOR__|__VERSION__|__FILE__|__MODULE__|__LINE__|__FUNCTION__|__PRETTY_FUNCTION__",o="/|/\\=|&|&\\=|&&|\\|\\|\\=|\\|\\||\\-|\\-\\=|\\-\\-|\\+|\\+\\=|\\+\\+|\\<|\\<\\=|\\<\\<|\\<\\<\\=|\\<\\>|\\<\\>\\=|\\>|\\>\\=|\\>\\>\\=|\\>\\>\\>\\=|\\>\\>|\\>\\>\\>|\\!|\\!\\=|\\!\\<\\>|\\!\\<\\>\\=|\\!\\<|\\!\\<\\=|\\!\\>|\\!\\>\\=|\\?|\\$|\\=|\\=\\=|\\*|\\*\\=|%|%\\=|\\^|\\^\\=|\\^\\^|\\^\\^\\=|~|~\\=|\\=\\>|#",_=this.$keywords=this.createKeywordMapper({"keyword.modifier":l,"keyword.control":t,"keyword.type":r,keyword:e,"keyword.storage":a,punctation:"\\.|\\,|;|\\.\\.|\\.\\.\\.","keyword.operator":o,"constant.language":d},"identifier"),u="[a-zA-Z_¡-￿][a-zA-Z\\d_¡-￿]*\\b";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},x.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"star-comment"},{token:"comment.shebang",regex:"^\\s*#!.*"},{token:"comment",regex:"\\/\\+",next:"plus-comment"},{onMatch:function(i,b,m){return m.unshift(this.next,i.substr(2)),"string"},regex:'q"(?:[\\[\\(\\{\\<]+)',next:"operator-heredoc-string"},{onMatch:function(i,b,m){return m.unshift(this.next,i.substr(2)),"string"},regex:'q"(?:[a-zA-Z_]+)$',next:"identifier-heredoc-string"},{token:"string",regex:'[xr]?"',next:"quote-string"},{token:"string",regex:"[xr]?`",next:"backtick-string"},{token:"string",regex:"[xr]?['](?:(?:\\\\.)|(?:[^'\\\\]))*?['][cdw]?"},{token:["keyword","text","paren.lparen"],regex:/(asm)(\s*)({)/,next:"d-asm"},{token:["keyword","text","paren.lparen","constant.language"],regex:"(__traits)(\\s*)(\\()("+u+")"},{token:["keyword","text","variable.module"],regex:"(import|module)(\\s+)((?:"+u+"\\.?)*)"},{token:["keyword.storage","text","entity.name.type"],regex:"("+a+")(\\s*)("+u+")"},{token:["keyword","text","variable.storage","text"],regex:"(alias|typedef)(\\s*)("+u+")(\\s*)"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F_]+(l|ul|u|f|F|L|U|UL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d[\\d_]*(?:(?:\\.[\\d_]*)?(?:[eE][+-]?[\\d_]+)?)?(l|ul|u|f|F|L|U|UL)?\\b"},{token:"entity.other.attribute-name",regex:"@"+u},{token:_,regex:"[a-zA-Z_][a-zA-Z0-9_]*\\b"},{token:"keyword.operator",regex:o},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\.|\\:"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],"star-comment":[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],"plus-comment":[{token:"comment",regex:"\\+\\/",next:"start"},{defaultToken:"comment"}],"quote-string":[c,{token:"string",regex:'"[cdw]?',next:"start"},{defaultToken:"string"}],"backtick-string":[c,{token:"string",regex:"`[cdw]?",next:"start"},{defaultToken:"string"}],"operator-heredoc-string":[{onMatch:function(i,b,m){i=i.substring(i.length-2,i.length-1);var y={">":"<","]":"[",")":"(","}":"{"};return Object.keys(y).indexOf(i)!=-1&&(i=y[i]),i!=m[1]||(m.shift(),m.shift()),"string"},regex:'(?:[\\]\\)}>]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"identifier-heredoc-string":[{onMatch:function(i,b,m){return i=i.substring(0,i.length-1),i!=m[1]||(m.shift(),m.shift()),"string"},regex:'^(?:[A-Za-z_][a-zA-Z0-9]+)"',next:"start"},{token:"string",regex:"[^\\]\\)}>]+"}],"d-asm":[{token:"paren.rparen",regex:"\\}",next:"start"},{token:"keyword.instruction",regex:"[a-zA-Z]+",next:"d-asm-instruction"},{token:"text",regex:"\\s+"}],"d-asm-instruction":[{token:"constant.language",regex:/AL|AH|AX|EAX|BL|BH|BX|EBX|CL|CH|CX|ECX|DL|DH|DX|EDX|BP|EBP|SP|ESP|DI|EDI|SI|ESI/i},{token:"identifier",regex:"[a-zA-Z]+"},{token:"string",regex:'"[^"]*"'},{token:"comment",regex:"//.*$"},{token:"constant.numeric",regex:"[0-9.xA-F]+"},{token:"punctuation.operator",regex:"\\,"},{token:"punctuation.operator",regex:";",next:"d-asm"},{token:"text",regex:"\\s+"}]},this.embedRules(x,"doc-",[x.getEndRule("start")])};g.metaData={comment:"D language",fileTypes:["d","di"],firstLineMatch:"^#!.*\\b[glr]?dmd\\b.",foldingStartMarker:"(?x)/\\*\\*(?!\\*)|^(?![^{]*?//|[^{]*?/\\*(?!.*?\\*/.*?\\{)).*?\\{\\s*($|//|/\\*(?!.*?\\*/.*\\S))",foldingStopMarker:"(?<!\\*)\\*\\*/|^\\s*\\}",keyEquivalent:"^~D",name:"D",scopeName:"source.d"},f.inherits(g,h),s.DHighlightRules=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,s,p){var f=n("../../lib/oop"),x=n("../../range").Range,h=n("./fold_mode").FoldMode,g=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};f.inherits(g,h),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,r){var l=e.getLine(r);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var a=this._getFoldWidgetBase(e,t,r);return!a&&this.startRegionRe.test(l)?"start":a},this.getFoldWidgetRange=function(e,t,r,l){var a=e.getLine(r);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,r);var o=a.match(this.foldingStartMarker);if(o){var c=o.index;if(o[1])return this.openingBracketBlock(e,o[1],r,c);var d=e.getCommentFoldRange(r,c+o[0].length,1);return d&&!d.isMultiLine()&&(l?d=this.getSectionRange(e,r):t!="all"&&(d=null)),d}if(t!=="markbegin"){var o=a.match(this.foldingStopMarker);if(o){var c=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],r,c):e.getCommentFoldRange(r,c,-1)}}},this.getSectionRange=function(e,t){var r=e.getLine(t),l=r.search(/\S/),a=t,c=r.length;t=t+1;for(var d=t,o=e.getLength();++t<o;){r=e.getLine(t);var _=r.search(/\S/);if(_!==-1){if(l>_)break;var u=this.getFoldWidgetRange(e,"all",t);if(u){if(u.start.row<=a)break;if(u.isMultiLine())t=u.end.row;else if(l==_)break}d=t}}return new x(a,c,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,t,r){for(var l=t.search(/\s*$/),a=e.getLength(),c=r,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++r<a;){t=e.getLine(r);var _=d.exec(t);if(_&&(_[1]?o--:o++,!o))break}var u=r;if(u>c)return new x(c,l,u,t.length)}}).call(g.prototype)}),ace.define("ace/mode/d",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/d_highlight_rules","ace/mode/folding/cstyle"],function(n,s,p){var f=n("../lib/oop"),x=n("./text").Mode,h=n("./d_highlight_rules").DHighlightRules,g=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=h,this.foldingRules=new g,this.$behaviour=this.$defaultBehaviour};f.inherits(e,x),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/d"}).call(e.prototype),s.Mode=e}),function(){ace.require(["ace/mode/d"],function(n){k.exports=n})}()}(R)),R.exports}var S=E();const F=D(S),L=w({__proto__:null,default:F},[S]);export{L as m};
