(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{1062:function(t,n,e){"use strict";e.r(n),e.d(n,"stencil_async_content",(function(){return c}));var o=e(108),c=function(){function t(t){Object(o.h)(this,t),this.content=""}return t.prototype.componentWillLoad=function(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)},t.prototype.fetchNewContent=function(t){var n=this;return fetch(t).then((function(t){return t.text()})).then((function(t){n.content=t}))},t.prototype.render=function(){return Object(o.g)("div",{innerHTML:this.content})},Object.defineProperty(t,"watchers",{get:function(){return{documentLocation:["fetchNewContent"]}},enumerable:!0,configurable:!0}),t}()},957:function(t,n,e){"use strict";e.r(n),e.d(n,"stencil_async_content",(function(){return c}));var o=e(107),c=function(){function t(t){Object(o.h)(this,t),this.content=""}return t.prototype.componentWillLoad=function(){if(null!=this.documentLocation)return this.fetchNewContent(this.documentLocation)},t.prototype.fetchNewContent=function(t){var n=this;return fetch(t).then((function(t){return t.text()})).then((function(t){n.content=t}))},t.prototype.render=function(){return Object(o.g)("div",{innerHTML:this.content})},Object.defineProperty(t,"watchers",{get:function(){return{documentLocation:["fetchNewContent"]}},enumerable:!0,configurable:!0}),t}()}}]);