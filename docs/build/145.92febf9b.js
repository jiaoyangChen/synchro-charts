(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{1136:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}}).call(this,n(34))},1138:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i}));var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};function i(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function o(e,t){return e(t={exports:{}},t.exports),t.exports}}).call(this,n(34))},1188:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return x}));var r=n(1136),i=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r},o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,c="object"==typeof r.b&&r.b&&r.b.Object===Object&&r.b,u="object"==typeof self&&self&&self.Object===Object&&self,p=c||u||Function("return this")(),f=Object.prototype.toString,h=p.Symbol,b=Math.min,g=h?h.prototype:void 0,y=g?g.toString:void 0;function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}function w(e){if("number"==typeof e)return e;if(v(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):s.test(e)?NaN:+e}function k(e){return null==e?"":function(e){if("string"==typeof e)return e;if(v(e))return y?y.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}var O=function(e){var t=Math[e];return function(e,n){if(e=w(e),n=b(function(e){var t=function(e){return e?(e=w(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(n),292)){var r=(k(e)+"e").split("e");return+((r=(k(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}("round"),x=function(e){var t=e.toPrecision(5);return t.toString().length>6?Number.parseFloat(t).toExponential(3):O(Number(t),5)};function j(e,t){var n=function e(t,n,r){return r.reduce((function(r,o){var s=""+n+o.displayName,a=N(o.children),l=Object.assign(Object.assign({},o),{depth:t,path:s,children:a});r.push(l);var d=i(r);return l.children&&l.isOpen&&(d=d.concat(e(t+1,s+"/",l.children))),d}),[])}(0,"",N(e));return t?n.filter(E):n}function N(e){return i(e).sort((function(e,t){var n=e.displayName.toUpperCase(),r=t.displayName.toUpperCase();return n<r?-1:n>r?1:0}))}function E(e){return null!=e.data.status?"ACTIVE"===e.data.status.state:null!=e.data.assetStatus&&"ACTIVE"===e.data.assetStatus.state}},1200:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"b",(function(){return x}));var r=n(1138),i=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r},o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,c="object"==typeof r.b&&r.b&&r.b.Object===Object&&r.b,u="object"==typeof self&&self&&self.Object===Object&&self,p=c||u||Function("return this")(),f=Object.prototype.toString,h=p.Symbol,b=Math.min,g=h?h.prototype:void 0,y=g?g.toString:void 0;function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}function w(e){if("number"==typeof e)return e;if(v(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):s.test(e)?NaN:+e}function k(e){return null==e?"":function(e){if("string"==typeof e)return e;if(v(e))return y?y.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}(e)}var O=function(e){var t=Math[e];return function(e,n){if(e=w(e),n=b(function(e){var t=function(e){return e?(e=w(e))===1/0||e===-1/0?17976931348623157e292*(e<0?-1:1):e==e?e:0:0===e?e:0}(e),n=t%1;return t==t?n?t-n:t:0}(n),292)){var r=(k(e)+"e").split("e");return+((r=(k(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}("round"),x=function(e){var t=e.toPrecision(5);return t.toString().length>6?Number.parseFloat(t).toExponential(3):O(Number(t),5)};function j(e,t){var n=function e(t,n,r){return r.reduce((function(r,o){var s=""+n+o.displayName,a=N(o.children),l=Object.assign(Object.assign({},o),{depth:t,path:s,children:a});r.push(l);var d=i(r);return l.children&&l.isOpen&&(d=d.concat(e(t+1,s+"/",l.children))),d}),[])}(0,"",N(e));return t?n.filter(E):n}function N(e){return i(e).sort((function(e,t){var n=e.displayName.toUpperCase(),r=t.displayName.toUpperCase();return n<r?-1:n>r?1:0}))}function E(e){return null!=e.data.status?"ACTIVE"===e.data.status.state:null!=e.data.assetStatus&&"ACTIVE"===e.data.assetStatus.state}},848:function(e,t,n){"use strict";n.r(t),n.d(t,"asset_list_item",(function(){return l})),n.d(t,"bp_asset_explorer",(function(){return d}));var r,i=n(60),o=(n(1136),n(1188)),s=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};!function(e){e.ADD="add",e.REPLACE="replace"}(r||(r={}));var l=function(){function e(e){var t=this;Object(i.i)(this,e),this.depth=0,this.readonly=!1,this.handleSelectAsset=function(e){e.stopPropagation();var n=e.shiftKey?r.ADD:r.REPLACE;t.nodeSelected.emit({action:n,node:t.node})},this.handleNodeExpandedToggled=function(e){e.stopImmediatePropagation(),t.nodeExpandedToggled.emit({node:t.node,open:!t.node.isOpen})},this.nodeSelected=Object(i.f)(this,"nodeSelected",7),this.nodeExpandedToggled=Object(i.f)(this,"nodeExpandedToggled",7)}return Object.defineProperty(e.prototype,"rowIndent",{get:function(){return"calc(9px * "+this.node.depth+" + 6px)"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowClasses",{get:function(){return{"bp-row":!0,"bp-selected":this.node.isSelected,"bp-read-only":this.readonly}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"arrowClasses",{get:function(){return{"bp-arrow":!0,"bp-down":this.node.isOpen,"bp-visible":this.node.hasChildren}},enumerable:!0,configurable:!0}),e.prototype.render=function(){var e=this;return Object(i.h)("div",{"data-test-tag":"asset-list-item-row",onClick:function(t){return e.handleSelectAsset(t)},class:this.rowClasses,style:{paddingLeft:this.rowIndent}},Object(i.h)("span",{class:"bp-arrow-wrapper",onClick:this.handleNodeExpandedToggled},Object(i.h)("div",{class:this.arrowClasses})),Object(i.h)("span",{class:"bp-display-name"},this.node.displayName))},e}();l.style=".bp-row{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--primary-light, #eff1f1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px}.bp-row.bp-read-only{cursor:default}.bp-selected{background-color:rgba(41, 168, 221, 0.1)}.bp-arrow-wrapper{padding:1rem}.bp-arrow{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;visibility:hidden;position:relative;background-color:black;text-align:left;cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;-webkit-transform:rotate(-210deg) skewX(-30deg) scale(1, 0.866) translate(0.1rem, 0);transform:rotate(-210deg) skewX(-30deg) scale(1, 0.866) translate(0.1rem, 0)}.bp-arrow::before,.bp-arrow::after{content:'';position:absolute;background-color:inherit}.bp-arrow,.bp-arrow::before,.bp-arrow::after{width:5px;height:5px;border-top-right-radius:30%}.bp-arrow::before{-webkit-transform:rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);transform:rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%)}.bp-arrow::after{-webkit-transform:rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);transform:rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%)}.bp-arrow.bp-down{-webkit-transform:rotate(-120deg) skewX(-30deg) scale(1, 0.866) translate(0.2rem, 0.1rem);transform:rotate(-120deg) skewX(-30deg) scale(1, 0.866) translate(0.2rem, 0.1rem)}.bp-visible{visibility:visible}.bp-display-name{margin-left:0.4rem;font-size:1.2rem;color:var(--primary-dark, #2a4956);font-family:var(--primary-font-family, 'Amazon Ember', Helvetica 'Neue,Roboto', Arial, sans-serif)}";var d=function(){function e(e){var t=this;Object(i.i)(this,e),this.selectedNodes=[],this.initialized=!1,this.isLoading=!1,this.isError=!1,this.readonly=!1,this.singleSelect=!1,this.autoSelectFirstNode=!1,this.filterNonActive=!1,this.renderAssetListItem=function(e){return Object(i.h)("asset-list-item",{"data-test-tag":"asset-list-item",path:e.displayName,node:e,readonly:t.readonly,key:e.id})},this.selectNode=Object(i.f)(this,"selectNode",7),this.deselectNode=Object(i.f)(this,"deselectNode",7),this.overwriteSelected=Object(i.f)(this,"overwriteSelected",7),this.openChanged=Object(i.f)(this,"openChanged",7)}return e.prototype.componentDidRender=function(){if(!this.initialized&&this.nodes.length>0){var e=Object(o.a)(this.nodes,this.filterNonActive);if(this.autoSelectFirstNode&&e.length>0){var t=e[0];this.emitSelectionEvent(r.ADD,t),this.selectedNodes=[t.id],e[0].hasChildren&&!1===e[0].isOpen&&this.emitOpenChangedEvent(e[0],!0)}this.initialized=!0}},e.prototype.onNodeSelected=function(e){e.stopPropagation(),this.emitSelectionEvent(e.detail.action,e.detail.node)},e.prototype.onNodeExpandedToggled=function(e){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return e.stopPropagation(),[4,this.emitOpenChangedEvent(e.detail.node,e.detail.open)];case 1:return t.sent(),[2]}}))}))},e.prototype.emitSelectionEvent=function(e,t){e===r.ADD&&!1===this.singleSelect?this.selectedNodes.includes(t.id)?(this.selectedNodes=this.selectedNodes.filter((function(e){return e!==t.id})),this.readonly||this.deselectNode.emit(t)):(this.selectedNodes=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}(this.selectedNodes,[t.id]),this.readonly||this.selectNode.emit(t)):e!==r.REPLACE&&!0!==this.singleSelect||(this.selectedNodes=[t.id],this.readonly||this.overwriteSelected.emit(t))},e.prototype.emitOpenChangedEvent=function(e,t){return s(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return t?[4,this.onFetchChildren(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return this.openChanged.emit({id:e.id}),[2]}}))}))},e.prototype.render=function(){var e={"bp-loading-bar":this.isLoading},t={"bp-error-bar":this.isError},n=Object(o.a)(this.nodes,this.filterNonActive);return Object(i.h)("div",{"data-test-tag":"asset-explorer",class:"bp-asset-explorer"},Object(i.h)("div",{class:"bp-bar-wrapper"},Object(i.h)("div",{"data-test-tag":"error-bar",class:t}),Object(i.h)("div",{"data-test-tag":"loading-bar",class:e})),this.isError&&Object(i.h)("slot",{name:"error"}),!this.isLoading&&0===n.length&&Object(i.h)("slot",{name:"empty"}),this.isLoading&&0===n.length&&Object(i.h)("slot",{name:"loading"}),!this.isError&&Object(i.h)("virtual-scroll",{nodeHeight:40,renderAhead:20,data:n,renderNode:this.renderAssetListItem}))},e}();d.style="@-webkit-keyframes gradientBackground{0%{background-position:0% 50%}50%{background-position:100% 51%}100%{background-position:0% 50%}}@keyframes gradientBackground{0%{background-position:0% 50%}50%{background-position:100% 51%}100%{background-position:0% 50%}}.bp-asset-explorer{width:100%;height:100%}.bp-bar-wrapper{position:-webkit-sticky;position:sticky;top:0;left:0;right:0;height:5px;margin-top:-5px;z-index:1000}.bp-loading-bar{position:absolute;height:5px;width:100%;background:-webkit-gradient(linear, left top, right top, from(#0fa1c9), color-stop(#32e2e2), color-stop(#0fa1c9), to(#32e3e3));background:linear-gradient(90deg, #0fa1c9, #32e2e2, #0fa1c9, #32e3e3);background-size:800% 800%;-webkit-animation:gradientBackground 6s ease infinite;animation:gradientBackground 6s ease infinite}.bp-error-bar{position:absolute;height:5px;width:100%;background-color:#d13212}asset-list-item{display:block;height:40px}"},989:function(e,t,n){"use strict";n.r(t),n.d(t,"asset_list_item",(function(){return l})),n.d(t,"bp_asset_explorer",(function(){return d}));var r,i=n(61),o=(n(1138),n(1200)),s=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):function(e){return e instanceof n?e:new n((function(t){t(e)}))}(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!((i=(i=s.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};!function(e){e.ADD="add",e.REPLACE="replace"}(r||(r={}));var l=function(){function e(e){var t=this;Object(i.i)(this,e),this.depth=0,this.readonly=!1,this.handleSelectAsset=function(e){e.stopPropagation();var n=e.shiftKey?r.ADD:r.REPLACE;t.nodeSelected.emit({action:n,node:t.node})},this.handleNodeExpandedToggled=function(e){e.stopImmediatePropagation(),t.nodeExpandedToggled.emit({node:t.node,open:!t.node.isOpen})},this.nodeSelected=Object(i.f)(this,"nodeSelected",7),this.nodeExpandedToggled=Object(i.f)(this,"nodeExpandedToggled",7)}return Object.defineProperty(e.prototype,"rowIndent",{get:function(){return"calc(9px * "+this.node.depth+" + 6px)"},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"rowClasses",{get:function(){return{"bp-row":!0,"bp-selected":this.node.isSelected,"bp-read-only":this.readonly}},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"arrowClasses",{get:function(){return{"bp-arrow":!0,"bp-down":this.node.isOpen,"bp-visible":this.node.hasChildren}},enumerable:!0,configurable:!0}),e.prototype.render=function(){var e=this;return Object(i.h)("div",{"data-test-tag":"asset-list-item-row",onClick:function(t){return e.handleSelectAsset(t)},class:this.rowClasses,style:{paddingLeft:this.rowIndent}},Object(i.h)("span",{class:"bp-arrow-wrapper",onClick:this.handleNodeExpandedToggled},Object(i.h)("div",{class:this.arrowClasses})),Object(i.h)("span",{class:"bp-display-name"},this.node.displayName))},e}();l.style=".bp-row{cursor:pointer;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-bottom:1px solid var(--primary-light, #eff1f1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:40px}.bp-row.bp-read-only{cursor:default}.bp-selected{background-color:rgba(41, 168, 221, 0.1)}.bp-arrow-wrapper{padding:1rem}.bp-arrow{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;visibility:hidden;position:relative;background-color:black;text-align:left;cursor:pointer;-webkit-transition:all 0.2s ease;transition:all 0.2s ease;-webkit-transform:rotate(-210deg) skewX(-30deg) scale(1, 0.866) translate(0.1rem, 0);transform:rotate(-210deg) skewX(-30deg) scale(1, 0.866) translate(0.1rem, 0)}.bp-arrow::before,.bp-arrow::after{content:'';position:absolute;background-color:inherit}.bp-arrow,.bp-arrow::before,.bp-arrow::after{width:5px;height:5px;border-top-right-radius:30%}.bp-arrow::before{-webkit-transform:rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);transform:rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%)}.bp-arrow::after{-webkit-transform:rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);transform:rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%)}.bp-arrow.bp-down{-webkit-transform:rotate(-120deg) skewX(-30deg) scale(1, 0.866) translate(0.2rem, 0.1rem);transform:rotate(-120deg) skewX(-30deg) scale(1, 0.866) translate(0.2rem, 0.1rem)}.bp-visible{visibility:visible}.bp-display-name{margin-left:0.4rem;font-size:1.2rem;color:var(--primary-dark, #2a4956);font-family:var(--primary-font-family, 'Amazon Ember', Helvetica 'Neue,Roboto', Arial, sans-serif)}";var d=function(){function e(e){var t=this;Object(i.i)(this,e),this.selectedNodes=[],this.initialized=!1,this.isLoading=!1,this.isError=!1,this.readonly=!1,this.singleSelect=!1,this.autoSelectFirstNode=!1,this.filterNonActive=!1,this.renderAssetListItem=function(e){return Object(i.h)("asset-list-item",{"data-test-tag":"asset-list-item",path:e.displayName,node:e,readonly:t.readonly,key:e.id})},this.selectNode=Object(i.f)(this,"selectNode",7),this.deselectNode=Object(i.f)(this,"deselectNode",7),this.overwriteSelected=Object(i.f)(this,"overwriteSelected",7),this.openChanged=Object(i.f)(this,"openChanged",7)}return e.prototype.componentDidRender=function(){if(!this.initialized&&this.nodes.length>0){var e=Object(o.a)(this.nodes,this.filterNonActive);if(this.autoSelectFirstNode&&e.length>0){var t=e[0];this.emitSelectionEvent(r.ADD,t),this.selectedNodes=[t.id],e[0].hasChildren&&!1===e[0].isOpen&&this.emitOpenChangedEvent(e[0],!0)}this.initialized=!0}},e.prototype.onNodeSelected=function(e){e.stopPropagation(),this.emitSelectionEvent(e.detail.action,e.detail.node)},e.prototype.onNodeExpandedToggled=function(e){return s(this,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return e.stopPropagation(),[4,this.emitOpenChangedEvent(e.detail.node,e.detail.open)];case 1:return t.sent(),[2]}}))}))},e.prototype.emitSelectionEvent=function(e,t){e===r.ADD&&!1===this.singleSelect?this.selectedNodes.includes(t.id)?(this.selectedNodes=this.selectedNodes.filter((function(e){return e!==t.id})),this.readonly||this.deselectNode.emit(t)):(this.selectedNodes=function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}(this.selectedNodes,[t.id]),this.readonly||this.selectNode.emit(t)):e!==r.REPLACE&&!0!==this.singleSelect||(this.selectedNodes=[t.id],this.readonly||this.overwriteSelected.emit(t))},e.prototype.emitOpenChangedEvent=function(e,t){return s(this,void 0,void 0,(function(){return a(this,(function(n){switch(n.label){case 0:return t?[4,this.onFetchChildren(e)]:[3,2];case 1:n.sent(),n.label=2;case 2:return this.openChanged.emit({id:e.id}),[2]}}))}))},e.prototype.render=function(){var e={"bp-loading-bar":this.isLoading},t={"bp-error-bar":this.isError},n=Object(o.a)(this.nodes,this.filterNonActive);return Object(i.h)("div",{"data-test-tag":"asset-explorer",class:"bp-asset-explorer"},Object(i.h)("div",{class:"bp-bar-wrapper"},Object(i.h)("div",{"data-test-tag":"error-bar",class:t}),Object(i.h)("div",{"data-test-tag":"loading-bar",class:e})),this.isError&&Object(i.h)("slot",{name:"error"}),!this.isLoading&&0===n.length&&Object(i.h)("slot",{name:"empty"}),this.isLoading&&0===n.length&&Object(i.h)("slot",{name:"loading"}),!this.isError&&Object(i.h)("virtual-scroll",{nodeHeight:40,renderAhead:20,data:n,renderNode:this.renderAssetListItem}))},e}();d.style="@-webkit-keyframes gradientBackground{0%{background-position:0% 50%}50%{background-position:100% 51%}100%{background-position:0% 50%}}@keyframes gradientBackground{0%{background-position:0% 50%}50%{background-position:100% 51%}100%{background-position:0% 50%}}.bp-asset-explorer{width:100%;height:100%}.bp-bar-wrapper{position:-webkit-sticky;position:sticky;top:0;left:0;right:0;height:5px;margin-top:-5px;z-index:1000}.bp-loading-bar{position:absolute;height:5px;width:100%;background:-webkit-gradient(linear, left top, right top, from(#0fa1c9), color-stop(#32e2e2), color-stop(#0fa1c9), to(#32e3e3));background:linear-gradient(90deg, #0fa1c9, #32e2e2, #0fa1c9, #32e3e3);background-size:800% 800%;-webkit-animation:gradientBackground 6s ease infinite;animation:gradientBackground 6s ease infinite}.bp-error-bar{position:absolute;height:5px;width:100%;background-color:#d13212}asset-list-item{display:block;height:40px}"}}]);