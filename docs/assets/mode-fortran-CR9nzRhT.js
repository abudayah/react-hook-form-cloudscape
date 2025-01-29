import{g as F}from"./index-CU2Byj_S.js";function M(p,m){for(var l=0;l<m.length;l++){const d=m[l];if(typeof d!="string"&&!Array.isArray(d)){for(const f in d)if(f!=="default"&&!(f in p)){const u=Object.getOwnPropertyDescriptor(d,f);u&&Object.defineProperty(p,f,u.get?u:{enumerable:!0,get:()=>d[f]})}}}return Object.freeze(Object.defineProperty(p,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}},k;function b(){return k||(k=1,function(p,m){ace.define("ace/mode/fortran_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(l,d,f){var u=l("../lib/oop"),E=l("./text_highlight_rules").TextHighlightRules,h=function(){var T="call|case|contains|continue|cycle|do|else|elseif|end|enddo|endif|function|if|implicit|in|include|inout|intent|module|none|only|out|print|program|return|select|status|stop|subroutine|return|then|use|while|write|CALL|CASE|CONTAINS|CONTINUE|CYCLE|DO|ELSE|ELSEIF|END|ENDDO|ENDIF|FUNCTION|IF|IMPLICIT|IN|INCLUDE|INOUT|INTENT|MODULE|NONE|ONLY|OUT|PRINT|PROGRAM|RETURN|SELECT|STATUS|STOP|SUBROUTINE|RETURN|THEN|USE|WHILE|WRITE",t="and|or|not|eq|ne|gt|ge|lt|le|AND|OR|NOT|EQ|NE|GT|GE|LT|LE",r="true|false|TRUE|FALSE",a="abs|achar|acos|acosh|adjustl|adjustr|aimag|aint|all|allocate|anint|any|asin|asinh|associated|atan|atan2|atanh|bessel_j0|bessel_j1|bessel_jn|bessel_y0|bessel_y1|bessel_yn|bge|bgt|bit_size|ble|blt|btest|ceiling|char|cmplx|conjg|cos|cosh|count|cpu_time|cshift|date_and_time|dble|deallocate|digits|dim|dot_product|dprod|dshiftl|dshiftr|dsqrt|eoshift|epsilon|erf|erfc|erfc_scaled|exp|float|floor|format|fraction|gamma|input|len|lge|lgt|lle|llt|log|log10|maskl|maskr|matmul|max|maxloc|maxval|merge|min|minloc|minval|mod|modulo|nint|not|norm2|null|nullify|pack|parity|popcnt|poppar|precision|present|product|radix|random_number|random_seed|range|repeat|reshape|round|rrspacing|same_type_as|scale|scan|selected_char_kind|selected_int_kind|selected_real_kind|set_exponent|shape|shifta|shiftl|shiftr|sign|sin|sinh|size|sngl|spacing|spread|sqrt|sum|system_clock|tan|tanh|tiny|trailz|transfer|transpose|trim|ubound|unpack|verify|ABS|ACHAR|ACOS|ACOSH|ADJUSTL|ADJUSTR|AIMAG|AINT|ALL|ALLOCATE|ANINT|ANY|ASIN|ASINH|ASSOCIATED|ATAN|ATAN2|ATANH|BESSEL_J0|BESSEL_J1|BESSEL_JN|BESSEL_Y0|BESSEL_Y1|BESSEL_YN|BGE|BGT|BIT_SIZE|BLE|BLT|BTEST|CEILING|CHAR|CMPLX|CONJG|COS|COSH|COUNT|CPU_TIME|CSHIFT|DATE_AND_TIME|DBLE|DEALLOCATE|DIGITS|DIM|DOT_PRODUCT|DPROD|DSHIFTL|DSHIFTR|DSQRT|EOSHIFT|EPSILON|ERF|ERFC|ERFC_SCALED|EXP|FLOAT|FLOOR|FORMAT|FRACTION|GAMMA|INPUT|LEN|LGE|LGT|LLE|LLT|LOG|LOG10|MASKL|MASKR|MATMUL|MAX|MAXLOC|MAXVAL|MERGE|MIN|MINLOC|MINVAL|MOD|MODULO|NINT|NOT|NORM2|NULL|NULLIFY|PACK|PARITY|POPCNT|POPPAR|PRECISION|PRESENT|PRODUCT|RADIX|RANDOM_NUMBER|RANDOM_SEED|RANGE|REPEAT|RESHAPE|ROUND|RRSPACING|SAME_TYPE_AS|SCALE|SCAN|SELECTED_CHAR_KIND|SELECTED_INT_KIND|SELECTED_REAL_KIND|SET_EXPONENT|SHAPE|SHIFTA|SHIFTL|SHIFTR|SIGN|SIN|SINH|SIZE|SNGL|SPACING|SPREAD|SQRT|SUM|SYSTEM_CLOCK|TAN|TANH|TINY|TRAILZ|TRANSFER|TRANSPOSE|TRIM|UBOUND|UNPACK|VERIFY",s="logical|character|integer|real|type|LOGICAL|CHARACTER|INTEGER|REAL|TYPE",i="allocatable|dimension|intent|parameter|pointer|target|private|public|ALLOCATABLE|DIMENSION|INTENT|PARAMETER|POINTER|TARGET|PRIVATE|PUBLIC",o=this.createKeywordMapper({"invalid.deprecated":"debugger","support.function":a,"constant.language":r,keyword:T,"keyword.operator":t,"storage.type":s,"storage.modifier":i},"identifier"),n="(?:r|u|ur|R|U|UR|Ur|uR)?",e="(?:(?:[1-9]\\d*)|(?:0))",g="(?:0[oO]?[0-7]+)",c="(?:0[xX][\\dA-Fa-f]+)",x="(?:0[bB][01]+)",A="(?:"+e+"|"+g+"|"+c+"|"+x+")",O="(?:[eE][+-]?\\d+)",_="(?:\\.\\d+)",N="(?:\\d+)",L="(?:(?:"+N+"?"+_+")|(?:"+N+"\\.))",C="(?:(?:"+L+"|"+N+")"+O+")",I="(?:"+C+"|"+L+")",R=`\\\\(x[0-9A-Fa-f]{2}|[0-7]{3}|[\\\\abfnrtv'"]|U[0-9A-Fa-f]{8}|u[0-9A-Fa-f]{4})`;this.$rules={start:[{token:"comment",regex:"!.*$"},{token:"string",regex:n+'"{3}',next:"qqstring3"},{token:"string",regex:n+'"(?=.)',next:"qqstring"},{token:"string",regex:n+"'{3}",next:"qstring3"},{token:"string",regex:n+"'(?=.)",next:"qstring"},{token:"constant.numeric",regex:"(?:"+I+"|\\d+)[jJ]\\b"},{token:"constant.numeric",regex:I},{token:"constant.numeric",regex:A+"[lL]\\b"},{token:"constant.numeric",regex:A+"\\b"},{token:"keyword",regex:"#\\s*(?:include|import|define|undef|INCLUDE|IMPORT|DEFINE|UNDEF)\\b"},{token:"keyword",regex:"#\\s*(?:endif|ifdef|else|elseif|ifndef|ENDIF|IFDEF|ELSE|ELSEIF|IFNDEF)\\b"},{token:o,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"\\+|\\-|\\*|\\*\\*|\\/|\\/\\/|%|<<|>>|&|\\||\\^|~|<|>|<=|=>|==|!=|<>|="},{token:"paren.lparen",regex:"[\\[\\(\\{]"},{token:"paren.rparen",regex:"[\\]\\)\\}]"},{token:"text",regex:"\\s+"}],qqstring3:[{token:"constant.language.escape",regex:R},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qstring3:[{token:"constant.language.escape",regex:R},{token:"string",regex:'"{3}',next:"start"},{defaultToken:"string"}],qqstring:[{token:"constant.language.escape",regex:R},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],qstring:[{token:"constant.language.escape",regex:R},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"},{defaultToken:"string"}]}};u.inherits(h,E),d.FortranHighlightRules=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(l,d,f){var u=l("../../lib/oop"),E=l("../../range").Range,h=l("./fold_mode").FoldMode,T=d.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};u.inherits(T,h),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,r,a){var s=t.getLine(a);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var i=this._getFoldWidgetBase(t,r,a);return!i&&this.startRegionRe.test(s)?"start":i},this.getFoldWidgetRange=function(t,r,a,s){var i=t.getLine(a);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(t,i,a);var e=i.match(this.foldingStartMarker);if(e){var o=e.index;if(e[1])return this.openingBracketBlock(t,e[1],a,o);var n=t.getCommentFoldRange(a,o+e[0].length,1);return n&&!n.isMultiLine()&&(s?n=this.getSectionRange(t,a):r!="all"&&(n=null)),n}if(r!=="markbegin"){var e=i.match(this.foldingStopMarker);if(e){var o=e.index+e[0].length;return e[1]?this.closingBracketBlock(t,e[1],a,o):t.getCommentFoldRange(a,o,-1)}}},this.getSectionRange=function(t,r){var a=t.getLine(r),s=a.search(/\S/),i=r,o=a.length;r=r+1;for(var n=r,e=t.getLength();++r<e;){a=t.getLine(r);var g=a.search(/\S/);if(g!==-1){if(s>g)break;var c=this.getFoldWidgetRange(t,"all",r);if(c){if(c.start.row<=i)break;if(c.isMultiLine())r=c.end.row;else if(s==g)break}n=r}}return new E(i,o,n,t.getLine(n).length)},this.getCommentRegionBlock=function(t,r,a){for(var s=r.search(/\s*$/),i=t.getLength(),o=a,n=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,e=1;++a<i;){r=t.getLine(a);var g=n.exec(r);if(g&&(g[1]?e--:e++,!e))break}var c=a;if(c>o)return new E(o,s,c,r.length)}}).call(T.prototype)}),ace.define("ace/mode/fortran",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/fortran_highlight_rules","ace/mode/folding/cstyle","ace/range"],function(l,d,f){var u=l("../lib/oop"),E=l("./text").Mode,h=l("./fortran_highlight_rules").FortranHighlightRules,T=l("./folding/cstyle").FoldMode,t=l("../range").Range,r=function(){this.HighlightRules=h,this.foldingRules=new T,this.$behaviour=this.$defaultBehaviour};u.inherits(r,E),(function(){this.lineCommentStart="!",this.getNextLineIndent=function(s,i,o){var n=this.$getIndent(i),e=this.getTokenizer().getLineTokens(i,s),g=e.tokens;if(g.length&&g[g.length-1].type=="comment")return n;if(s=="start"){var c=i.match(/^.*[\{\(\[:]\s*$/);c&&(n+=o)}return n};var a={return:1,break:1,continue:1,RETURN:1,BREAK:1,CONTINUE:1};this.checkOutdent=function(s,i,o){if(o!==`\r
`&&o!=="\r"&&o!==`
`)return!1;var n=this.getTokenizer().getLineTokens(i.trim(),s).tokens;if(!n)return!1;do var e=n.pop();while(e&&(e.type=="comment"||e.type=="text"&&e.value.match(/^\s+$/)));return e?e.type=="keyword"&&a[e.value]:!1},this.autoOutdent=function(s,i,o){o+=1;var n=this.$getIndent(i.getLine(o)),e=i.getTabString();n.slice(-e.length)==e&&i.remove(new t(o,n.length-e.length,o,n.length))},this.$id="ace/mode/fortran"}).call(r.prototype),d.Mode=r}),function(){ace.require(["ace/mode/fortran"],function(l){p.exports=l})}()}(S)),S.exports}var v=b();const D=F(v),y=M({__proto__:null,default:D},[v]);export{y as m};
