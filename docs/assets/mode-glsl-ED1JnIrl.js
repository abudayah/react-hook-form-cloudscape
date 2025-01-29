import{g as k}from"./index-CU2Byj_S.js";function y(x,v){for(var r=0;r<v.length;r++){const c=v[r];if(typeof c!="string"&&!Array.isArray(c)){for(const h in c)if(h!=="default"&&!(h in x)){const d=Object.getOwnPropertyDescriptor(c,h);d&&Object.defineProperty(x,h,d.get?d:{enumerable:!0,get:()=>c[h]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var _={exports:{}},w;function R(){return w||(w=1,function(x,v){ace.define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,c,h){var d=r("../lib/oop"),g=r("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@\\w+(?=\\s|$)"},a.getTagRule(),{defaultToken:"comment.doc.body",caseInsensitive:!0}]}};d.inherits(a,g),a.getTagRule=function(i){return{token:"comment.doc.tag.storage.type",regex:"\\b(?:TODO|FIXME|XXX|HACK)\\b"}},a.getStartRule=function(i){return{token:"comment.doc",regex:/\/\*\*(?!\/)/,next:i}},a.getEndRule=function(i){return{token:"comment.doc",regex:"\\*\\/",next:i}},c.DocCommentHighlightRules=a}),ace.define("ace/mode/c_cpp_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],function(r,c,h){var d=r("../lib/oop"),g=r("./doc_comment_highlight_rules").DocCommentHighlightRules,a=r("./text_highlight_rules").TextHighlightRules,i=c.cFunctions="hypot|hypotf|hypotl|sscanf|system|snprintf|scanf|scalbn|scalbnf|scalbnl|scalbln|scalblnf|scalblnl|sin|sinh|sinhf|sinhl|sinf|sinl|signal|signbit|strstr|strspn|strncpy|strncat|strncmp|strcspn|strchr|strcoll|strcpy|strcat|strcmp|strtoimax|strtod|strtoul|strtoull|strtoumax|strtok|strtof|strtol|strtold|strtoll|strerror|strpbrk|strftime|strlen|strrchr|strxfrm|sprintf|setjmp|setvbuf|setlocale|setbuf|sqrt|sqrtf|sqrtl|swscanf|swprintf|srand|nearbyint|nearbyintf|nearbyintl|nexttoward|nexttowardf|nexttowardl|nextafter|nextafterf|nextafterl|nan|nanf|nanl|csin|csinh|csinhf|csinhl|csinf|csinl|csqrt|csqrtf|csqrtl|ccos|ccosh|ccoshf|ccosf|ccosl|cimag|cimagf|cimagl|ctime|ctan|ctanh|ctanhf|ctanhl|ctanf|ctanl|cos|cosh|coshf|coshl|cosf|cosl|conj|conjf|conjl|copysign|copysignf|copysignl|cpow|cpowf|cpowl|cproj|cprojf|cprojl|ceil|ceilf|ceill|cexp|cexpf|cexpl|clock|clog|clogf|clogl|clearerr|casin|casinh|casinhf|casinhl|casinf|casinl|cacos|cacosh|cacoshf|cacoshl|cacosf|cacosl|catan|catanh|catanhf|catanhl|catanf|catanl|calloc|carg|cargf|cargl|cabs|cabsf|cabsl|creal|crealf|creall|cbrt|cbrtf|cbrtl|time|toupper|tolower|tan|tanh|tanhf|tanhl|tanf|tanl|trunc|truncf|truncl|tgamma|tgammaf|tgammal|tmpnam|tmpfile|isspace|isnormal|isnan|iscntrl|isinf|isdigit|isunordered|isupper|ispunct|isprint|isfinite|iswspace|iswcntrl|iswctype|iswdigit|iswupper|iswpunct|iswprint|iswlower|iswalnum|iswalpha|iswgraph|iswxdigit|iswblank|islower|isless|islessequal|islessgreater|isalnum|isalpha|isgreater|isgreaterequal|isgraph|isxdigit|isblank|ilogb|ilogbf|ilogbl|imaxdiv|imaxabs|div|difftime|_Exit|ungetc|ungetwc|pow|powf|powl|puts|putc|putchar|putwc|putwchar|perror|printf|erf|erfc|erfcf|erfcl|erff|erfl|exit|exp|exp2|exp2f|exp2l|expf|expl|expm1|expm1f|expm1l|vsscanf|vsnprintf|vscanf|vsprintf|vswscanf|vswprintf|vprintf|vfscanf|vfprintf|vfwscanf|vfwprintf|vwscanf|vwprintf|va_start|va_copy|va_end|va_arg|qsort|fscanf|fsetpos|fseek|fclose|ftell|fopen|fdim|fdimf|fdiml|fpclassify|fputs|fputc|fputws|fputwc|fprintf|feholdexcept|fesetenv|fesetexceptflag|fesetround|feclearexcept|fetestexcept|feof|feupdateenv|feraiseexcept|ferror|fegetenv|fegetexceptflag|fegetround|fflush|fwscanf|fwide|fwprintf|fwrite|floor|floorf|floorl|fabs|fabsf|fabsl|fgets|fgetc|fgetpos|fgetws|fgetwc|freopen|free|fread|frexp|frexpf|frexpl|fmin|fminf|fminl|fmod|fmodf|fmodl|fma|fmaf|fmal|fmax|fmaxf|fmaxl|ldiv|ldexp|ldexpf|ldexpl|longjmp|localtime|localeconv|log|log1p|log1pf|log1pl|log10|log10f|log10l|log2|log2f|log2l|logf|logl|logb|logbf|logbl|labs|lldiv|llabs|llrint|llrintf|llrintl|llround|llroundf|llroundl|lrint|lrintf|lrintl|lround|lroundf|lroundl|lgamma|lgammaf|lgammal|wscanf|wcsstr|wcsspn|wcsncpy|wcsncat|wcsncmp|wcscspn|wcschr|wcscoll|wcscpy|wcscat|wcscmp|wcstoimax|wcstod|wcstoul|wcstoull|wcstoumax|wcstok|wcstof|wcstol|wcstold|wcstoll|wcstombs|wcspbrk|wcsftime|wcslen|wcsrchr|wcsrtombs|wcsxfrm|wctob|wctomb|wcrtomb|wprintf|wmemset|wmemchr|wmemcpy|wmemcmp|wmemmove|assert|asctime|asin|asinh|asinhf|asinhl|asinf|asinl|acos|acosh|acoshf|acoshl|acosf|acosl|atoi|atof|atol|atoll|atexit|atan|atanh|atanhf|atanhl|atan2|atan2f|atan2l|atanf|atanl|abs|abort|gets|getc|getchar|getenv|getwc|getwchar|gmtime|rint|rintf|rintl|round|roundf|roundl|rename|realloc|rewind|remove|remquo|remquof|remquol|remainder|remainderf|remainderl|rand|raise|bsearch|btowc|modf|modff|modfl|memset|memchr|memcpy|memcmp|memmove|mktime|malloc|mbsinit|mbstowcs|mbsrtowcs|mbtowc|mblen|mbrtowc|mbrlen",t=function(e){var n="break|case|continue|default|do|else|for|goto|if|_Pragma|return|switch|while|catch|operator|try|throw|using",o="asm|__asm__|auto|bool|_Bool|char|_Complex|double|enum|float|_Imaginary|int|int8_t|int16_t|int32_t|int64_t|long|short|signed|size_t|struct|typedef|uint8_t|uint16_t|uint32_t|uint64_t|union|unsigned|void|class|wchar_t|template|char16_t|char32_t",l="const|extern|register|restrict|static|volatile|inline|private|protected|public|friend|explicit|virtual|export|mutable|typename|constexpr|new|delete|alignas|alignof|decltype|noexcept|thread_local",f="and|and_eq|bitand|bitor|compl|not|not_eq|or|or_eq|typeid|xor|xor_eq|const_cast|dynamic_cast|reinterpret_cast|static_cast|sizeof|namespace",u="NULL|true|false|TRUE|FALSE|nullptr",s=this.$keywords=this.createKeywordMapper(Object.assign({"keyword.control":n,"storage.type":o,"storage.modifier":l,"keyword.operator":f,"variable.language":"this","constant.language":u,"support.function.C99.c":i},e),"identifier"),p=/\\(?:['"?\\abfnrtv]|[0-7]{1,3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}U[a-fA-F\d]{8}|.)/.source,m="%"+/(\d+\$)?/.source+/[#0\- +']*/.source+/[,;:_]?/.source+/((-?\d+)|\*(-?\d+\$)?)?/.source+/(\.((-?\d+)|\*(-?\d+\$)?)?)?/.source+/(hh|h|ll|l|j|t|z|q|L|vh|vl|v|hv|hl)?/.source+/(\[[^"\]]+\]|[diouxXDOUeEfFgGaACcSspn%])/.source;this.$rules={start:[{token:"comment",regex:"//$",next:"start"},{token:"comment",regex:"//",next:"singleLineComment"},g.getStartRule("doc-start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:"'(?:"+p+"|.)?'"},{token:"string.start",regex:'"',stateName:"qqstring",next:[{token:"string",regex:/\\\s*$/,next:"qqstring"},{token:"constant.language.escape",regex:p},{token:"constant.language.escape",regex:m},{token:"string.end",regex:'"|$',next:"start"},{defaultToken:"string"}]},{token:"string.start",regex:'R"\\(',stateName:"rawString",next:[{token:"string.end",regex:'\\)"',next:"start"},{defaultToken:"string"}]},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?(L|l|UL|ul|u|U|F|f|ll|LL|ull|ULL)?\\b"},{token:"keyword",regex:"#\\s*(?:include|import|pragma|line|define|undef)\\b",next:"directive"},{token:"keyword",regex:"#\\s*(?:endif|if|ifdef|else|elif|ifndef)\\b"},{token:s,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*"},{token:"keyword.operator",regex:/--|\+\+|<<=|>>=|>>>=|<>|&&|\|\||\?:|[*%\/+\-&\^|~!<>=]=?/},{token:"punctuation.operator",regex:"\\?|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}],singleLineComment:[{token:"comment",regex:/\\$/,next:"singleLineComment"},{token:"comment",regex:/$/,next:"start"},{defaultToken:"comment"}],directive:[{token:"constant.other.multiline",regex:/\\/},{token:"constant.other.multiline",regex:/.*\\/},{token:"constant.other",regex:"\\s*<.+?>",next:"start"},{token:"constant.other",regex:'\\s*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]',next:"start"},{token:"constant.other",regex:"\\s*['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']",next:"start"},{token:"constant.other",regex:/[^\\\/]+/,next:"start"}]},this.embedRules(g,"doc-",[g.getEndRule("start")]),this.normalizeRules()};d.inherits(t,a),c.c_cppHighlightRules=t}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(r,c,h){var d=r("../range").Range,g=function(){};(function(){this.checkOutdent=function(a,i){return/^\s+$/.test(a)?/^\s*\}/.test(i):!1},this.autoOutdent=function(a,i){var t=a.getLine(i),e=t.match(/^(\s*\})/);if(!e)return 0;var n=e[1].length,o=a.findMatchingBracket({row:i,column:n});if(!o||o.row==i)return 0;var l=this.$getIndent(a.getLine(o.row));a.replace(new d(i,0,i,n-1),l)},this.$getIndent=function(a){return a.match(/^\s*/)[0]}}).call(g.prototype),c.MatchingBraceOutdent=g}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(r,c,h){var d=r("../../lib/oop"),g=r("../../range").Range,a=r("./fold_mode").FoldMode,i=c.FoldMode=function(t){t&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+t.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+t.end)))};d.inherits(i,a),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(t,e,n){var o=t.getLine(n);if(this.singleLineBlockCommentRe.test(o)&&!this.startRegionRe.test(o)&&!this.tripleStarBlockCommentRe.test(o))return"";var l=this._getFoldWidgetBase(t,e,n);return!l&&this.startRegionRe.test(o)?"start":l},this.getFoldWidgetRange=function(t,e,n,o){var l=t.getLine(n);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(t,l,n);var s=l.match(this.foldingStartMarker);if(s){var f=s.index;if(s[1])return this.openingBracketBlock(t,s[1],n,f);var u=t.getCommentFoldRange(n,f+s[0].length,1);return u&&!u.isMultiLine()&&(o?u=this.getSectionRange(t,n):e!="all"&&(u=null)),u}if(e!=="markbegin"){var s=l.match(this.foldingStopMarker);if(s){var f=s.index+s[0].length;return s[1]?this.closingBracketBlock(t,s[1],n,f):t.getCommentFoldRange(n,f,-1)}}},this.getSectionRange=function(t,e){var n=t.getLine(e),o=n.search(/\S/),l=e,f=n.length;e=e+1;for(var u=e,s=t.getLength();++e<s;){n=t.getLine(e);var p=n.search(/\S/);if(p!==-1){if(o>p)break;var m=this.getFoldWidgetRange(t,"all",e);if(m){if(m.start.row<=l)break;if(m.isMultiLine())e=m.end.row;else if(o==p)break}u=e}}return new g(l,f,u,t.getLine(u).length)},this.getCommentRegionBlock=function(t,e,n){for(var o=e.search(/\s*$/),l=t.getLength(),f=n,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,s=1;++n<l;){e=t.getLine(n);var p=u.exec(e);if(p&&(p[1]?s--:s++,!s))break}var m=n;if(m>f)return new g(f,o,m,e.length)}}).call(i.prototype)}),ace.define("ace/mode/c_cpp",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/c_cpp_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(r,c,h){var d=r("../lib/oop"),g=r("./text").Mode,a=r("./c_cpp_highlight_rules").c_cppHighlightRules,i=r("./matching_brace_outdent").MatchingBraceOutdent,t=r("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=a,this.$outdent=new i,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new t};d.inherits(e,g),(function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(n,o,l){var f=this.$getIndent(o),u=this.getTokenizer().getLineTokens(o,n),s=u.tokens,p=u.state;if(s.length&&s[s.length-1].type=="comment")return f;if(n=="start"){var m=o.match(/^.*[\{\(\[]\s*$/);m&&(f+=l)}else if(n=="doc-start"){if(p=="start")return"";var m=o.match(/^\s*(\/?)\*/);m&&(m[1]&&(f+=" "),f+="* ")}return f},this.checkOutdent=function(n,o,l){return this.$outdent.checkOutdent(o,l)},this.autoOutdent=function(n,o,l){this.$outdent.autoOutdent(o,l)},this.$id="ace/mode/c_cpp",this.snippetFileId="ace/snippets/c_cpp"}).call(e.prototype),c.Mode=e}),ace.define("ace/mode/glsl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/c_cpp_highlight_rules"],function(r,c,h){var d=r("../lib/oop"),g=r("./c_cpp_highlight_rules").c_cppHighlightRules,a=function(){var i="attribute|const|uniform|varying|break|continue|do|for|while|if|else|in|out|inout|float|int|void|bool|true|false|lowp|mediump|highp|precision|invariant|discard|return|mat2|mat3|mat4|vec2|vec3|vec4|ivec2|ivec3|ivec4|bvec2|bvec3|bvec4|sampler2D|samplerCube|struct",t="radians|degrees|sin|cos|tan|asin|acos|atan|pow|exp|log|exp2|log2|sqrt|inversesqrt|abs|sign|floor|ceil|fract|mod|min|max|clamp|mix|step|smoothstep|length|distance|dot|cross|normalize|faceforward|reflect|refract|matrixCompMult|lessThan|lessThanEqual|greaterThan|greaterThanEqual|equal|notEqual|any|all|not|dFdx|dFdy|fwidth|texture2D|texture2DProj|texture2DLod|texture2DProjLod|textureCube|textureCubeLod|gl_MaxVertexAttribs|gl_MaxVertexUniformVectors|gl_MaxVaryingVectors|gl_MaxVertexTextureImageUnits|gl_MaxCombinedTextureImageUnits|gl_MaxTextureImageUnits|gl_MaxFragmentUniformVectors|gl_MaxDrawBuffers|gl_DepthRangeParameters|gl_DepthRange|gl_Position|gl_PointSize|gl_FragCoord|gl_FrontFacing|gl_PointCoord|gl_FragColor|gl_FragData",e=this.createKeywordMapper({"variable.language":"this",keyword:i,"constant.language":t},"identifier");this.$rules=new g().$rules,this.$rules.start.forEach(function(n){typeof n.token=="function"&&(n.token=e)})};d.inherits(a,g),c.glslHighlightRules=a}),ace.define("ace/mode/glsl",["require","exports","module","ace/lib/oop","ace/mode/c_cpp","ace/mode/glsl_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/folding/cstyle"],function(r,c,h){var d=r("../lib/oop"),g=r("./c_cpp").Mode,a=r("./glsl_highlight_rules").glslHighlightRules,i=r("./matching_brace_outdent").MatchingBraceOutdent,t=r("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=a,this.$outdent=new i,this.$behaviour=this.$defaultBehaviour,this.foldingRules=new t};d.inherits(e,g),(function(){this.$id="ace/mode/glsl"}).call(e.prototype),c.Mode=e}),function(){ace.require(["ace/mode/glsl"],function(r){x.exports=r})}()}(_)),_.exports}var b=R();const M=k(b),L=y({__proto__:null,default:M},[b]);export{L as m};
