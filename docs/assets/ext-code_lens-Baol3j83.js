import{g as D}from"./index-CU2Byj_S.js";function I(m,y){for(var r=0;r<y.length;r++){const i=y[r];if(typeof i!="string"&&!Array.isArray(i)){for(const v in i)if(v!=="default"&&!(v in m)){const h=Object.getOwnPropertyDescriptor(i,v);h&&Object.defineProperty(m,v,h.get?h:{enumerable:!0,get:()=>i[v]})}}}return Object.freeze(Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}))}var w={exports:{}},O;function F(){return O||(O=1,function(m,y){ace.define("ace/ext/code_lens",["require","exports","module","ace/lib/event","ace/lib/lang","ace/lib/dom","ace/editor","ace/config"],function(r,i,v){var h=r("../lib/event"),k=r("../lib/lang"),_=r("../lib/dom");function N(e){var t=e.$textLayer,n=t.$lenses;n&&n.forEach(function(a){a.remove()}),t.$lenses=null}function H(e,t){var n=e&t.CHANGE_LINES||e&t.CHANGE_FULL||e&t.CHANGE_SCROLL||e&t.CHANGE_TEXT;if(n){var a=t.session,s=t.session.lineWidgets,p=t.$textLayer,o=p.$lenses;if(!s){o&&N(t);return}var g=t.$textLayer.$lines.cells,l=t.layerConfig,x=t.$padding;o||(o=p.$lenses=[]);for(var d=0,$=0;$<g.length;$++){var f=g[$].row,L=s[f],C=L&&L.lenses;if(!(!C||!C.length)){var c=o[d];c||(c=o[d]=_.buildDom(["div",{class:"ace_codeLens"}],t.container)),c.style.height=l.lineHeight+"px",d++;for(var u=0;u<C.length;u++){var E=c.childNodes[2*u];E||(u!=0&&c.appendChild(_.createTextNode(" | ")),E=_.buildDom(["a"],c)),E.textContent=C[u].title,E.lensCommand=C[u]}for(;c.childNodes.length>2*u-1;)c.lastChild.remove();var M=t.$cursorLayer.getPixelPosition({row:f,column:0},!0).top-l.lineHeight*L.rowsAbove-l.offset;c.style.top=M+"px";var W=t.gutterWidth,b=a.getLine(f).search(/\S|$/);b==-1&&(b=0),W+=b*l.characterWidth,c.style.paddingLeft=x+W+"px"}}for(;d<o.length;)o.pop().remove()}}function S(e){if(e.lineWidgets){var t=e.widgetManager;e.lineWidgets.forEach(function(n){n&&n.lenses&&t.removeLineWidget(n)})}}i.setLenses=function(e,t){var n=Number.MAX_VALUE;return S(e),t&&t.forEach(function(a){var s=a.start.row,p=a.start.column,o=e.lineWidgets&&e.lineWidgets[s];(!o||!o.lenses)&&(o=e.widgetManager.$registerLineWidget({rowCount:1,rowsAbove:1,row:s,column:p,lenses:[]})),o.lenses.push(a.command),s<n&&(n=s)}),e._emit("changeFold",{data:{start:{row:n}}}),n};function A(e){e.codeLensProviders=[],e.renderer.on("afterRender",H),e.$codeLensClickHandler||(e.$codeLensClickHandler=function(n){var a=n.target.lensCommand;a&&(e.execCommand(a.id,a.arguments),e._emit("codeLensClick",n))},h.addListener(e.container,"click",e.$codeLensClickHandler,e)),e.$updateLenses=function(){var n=e.session;if(!n)return;var a=e.codeLensProviders.length,s=[];e.codeLensProviders.forEach(function(o){o.provideCodeLenses(n,function(g,l){g||(l.forEach(function(x){s.push(x)}),a--,a==0&&p())})});function p(){var o=n.selection.cursor,g=n.documentToScreenRow(o),l=n.getScrollTop(),x=i.setLenses(n,s),d=n.$undoManager&&n.$undoManager.$lastDelta;if(!(d&&d.action=="remove"&&d.lines.length>1)){var $=n.documentToScreenRow(o),f=e.renderer.layerConfig.lineHeight,L=n.getScrollTop()+($-g)*f;x==0&&l<f/4&&l>-f/4&&(L=-f),n.setScrollTop(L)}}};var t=k.delayedCall(e.$updateLenses);e.$updateLensesOnInput=function(){t.delay(250)},e.on("input",e.$updateLensesOnInput)}function P(e){e.off("input",e.$updateLensesOnInput),e.renderer.off("afterRender",H),e.$codeLensClickHandler&&e.container.removeEventListener("click",e.$codeLensClickHandler)}i.registerCodeLensProvider=function(e,t){e.setOption("enableCodeLens",!0),e.codeLensProviders.push(t),e.$updateLensesOnInput()},i.clear=function(e){i.setLenses(e,null)};var R=r("../editor").Editor;r("../config").defineOptions(R.prototype,"editor",{enableCodeLens:{set:function(e){e?A(this):P(this)}}}),_.importCssString(`
.ace_codeLens {
    position: absolute;
    color: #aaa;
    font-size: 88%;
    background: inherit;
    width: 100%;
    display: flex;
    align-items: flex-end;
    pointer-events: none;
}
.ace_codeLens > a {
    cursor: pointer;
    pointer-events: auto;
}
.ace_codeLens > a:hover {
    color: #0000ff;
    text-decoration: underline;
}
.ace_dark > .ace_codeLens > a:hover {
    color: #4e94ce;
}
`,"codelense.css",!1)}),function(){ace.require(["ace/ext/code_lens"],function(r){m.exports=r})}()}(w)),w.exports}var T=F();const G=D(T),U=I({__proto__:null,default:G},[T]);export{U as e};
