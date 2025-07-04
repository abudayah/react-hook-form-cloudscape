import{g as M}from"./index-I3dhZJQA.js";function y(m,x){for(var n=0;n<x.length;n++){const r=x[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in m)){const c=Object.getOwnPropertyDescriptor(r,s);c&&Object.defineProperty(m,s,c.get?c:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var v={exports:{}},R;function _(){return R||(R=1,function(m,x){ace.define("ace/mode/alda_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,r,s){var c=n("../lib/oop"),f=n("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={pitch:[{token:"variable.parameter.operator.pitch.alda",regex:/(?:[+\-]+|\=)/},{token:"",regex:"",next:"timing"}],timing:[{token:"string.quoted.operator.timing.alda",regex:/\d+(?:s|ms)?/},{token:"",regex:"",next:"start"}],start:[{token:["constant.language.instrument.alda","constant.language.instrument.alda","meta.part.call.alda","storage.type.nickname.alda","meta.part.call.alda"],regex:/^([a-zA-Z]{2}[\w\-+\'()]*)((?:\s*\/\s*[a-zA-Z]{2}[\w\-+\'()]*)*)(?:(\s*)(\"[a-zA-Z]{2}[\w\-+\'()]*\"))?(\s*:)/},{token:["text","entity.other.inherited-class.voice.alda","text"],regex:/^(\s*)(V\d+)(:)/},{token:"comment.line.number-sign.alda",regex:/#.*$/},{token:"entity.name.function.pipe.measure.alda",regex:/\|/},{token:"comment.block.inline.alda",regex:/\(comment\b/,push:[{token:"comment.block.inline.alda",regex:/\)/,next:"pop"},{defaultToken:"comment.block.inline.alda"}]},{token:"entity.name.function.marker.alda",regex:/%[a-zA-Z]{2}[\w\-+\'()]*/},{token:"entity.name.function.at-marker.alda",regex:/@[a-zA-Z]{2}[\w\-+\'()]*/},{token:"keyword.operator.octave-change.alda",regex:/\bo\d+\b/},{token:"keyword.operator.octave-shift.alda",regex:/[><]/},{token:"keyword.operator.repeat.alda",regex:/\*\s*\d+/},{token:"string.quoted.operator.timing.alda",regex:/[.]|r\d*(?:s|ms)?/},{token:"text",regex:/([cdefgab])/,next:"pitch"},{token:"string.quoted.operator.timing.alda",regex:/~/,next:"timing"},{token:"punctuation.section.embedded.cram.alda",regex:/\}/,next:"timing"},{token:"constant.numeric.subchord.alda",regex:/\//},{todo:{token:"punctuation.section.embedded.cram.alda",regex:/\{/,push:[{token:"punctuation.section.embedded.cram.alda",regex:/\}/,next:"pop"},{include:"$self"}]}},{todo:{token:"keyword.control.sequence.alda",regex:/\[/,push:[{token:"keyword.control.sequence.alda",regex:/\]/,next:"pop"},{include:"$self"}]}},{token:"meta.inline.clojure.alda",regex:/\(/,push:[{token:"meta.inline.clojure.alda",regex:/\)/,next:"pop"},{include:"source.clojure"},{defaultToken:"meta.inline.clojure.alda"}]}]},this.normalizeRules()};u.metaData={scopeName:"source.alda",fileTypes:["alda"],name:"Alda"},c.inherits(u,f),r.AldaHighlightRules=u}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,r,s){var c=n("../../lib/oop"),f=n("../../range").Range,u=n("./fold_mode").FoldMode,k=r.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(k,u),(function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,a){var l=e.getLine(a);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var i=this._getFoldWidgetBase(e,t,a);return!i&&this.startRegionRe.test(l)?"start":i},this.getFoldWidgetRange=function(e,t,a,l){var i=e.getLine(a);if(this.startRegionRe.test(i))return this.getCommentRegionBlock(e,i,a);var o=i.match(this.foldingStartMarker);if(o){var g=o.index;if(o[1])return this.openingBracketBlock(e,o[1],a,g);var d=e.getCommentFoldRange(a,g+o[0].length,1);return d&&!d.isMultiLine()&&(l?d=this.getSectionRange(e,a):t!="all"&&(d=null)),d}if(t!=="markbegin"){var o=i.match(this.foldingStopMarker);if(o){var g=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],a,g):e.getCommentFoldRange(a,g,-1)}}},this.getSectionRange=function(e,t){var a=e.getLine(t),l=a.search(/\S/),i=t,g=a.length;t=t+1;for(var d=t,o=e.getLength();++t<o;){a=e.getLine(t);var p=a.search(/\S/);if(p!==-1){if(l>p)break;var h=this.getFoldWidgetRange(e,"all",t);if(h){if(h.start.row<=i)break;if(h.isMultiLine())t=h.end.row;else if(l==p)break}d=t}}return new f(i,g,d,e.getLine(d).length)},this.getCommentRegionBlock=function(e,t,a){for(var l=t.search(/\s*$/),i=e.getLength(),g=a,d=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++a<i;){t=e.getLine(a);var p=d.exec(t);if(p&&(p[1]?o--:o++,!o))break}var h=a;if(h>g)return new f(g,l,h,t.length)}}).call(k.prototype)}),ace.define("ace/mode/alda",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/alda_highlight_rules","ace/mode/folding/cstyle"],function(n,r,s){var c=n("../lib/oop"),f=n("./text").Mode,u=n("./alda_highlight_rules").AldaHighlightRules,k=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=u,this.foldingRules=new k};c.inherits(e,f),(function(){this.$id="ace/mode/alda"}).call(e.prototype),r.Mode=e}),function(){ace.require(["ace/mode/alda"],function(n){m&&(m.exports=n)})}()}(v)),v.exports}var b=_();const A=M(b),S=y({__proto__:null,default:A},[b]);export{S as m};
