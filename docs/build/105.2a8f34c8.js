(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1085:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return d}));var n=r(1077),o=r(1075),i=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n},a=function(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,left:e.left+window.scrollX,right:e.right+window.scrollX,bottom:e.bottom+window.scrollY,top:e.top+window.scrollY,x:e.x+window.scrollX,y:e.y+window.scrollY,density:window.devicePixelRatio}},s=function(){function t(t){this.rectMap={},this.canvas=t,this.updateCanvas()}return t.prototype.updateCanvas=function(){this.canvasRect=this.canvas.getBoundingClientRect()},t.prototype.updateChartScene=function(t,e){this.rectMap[t]=e},t.prototype.clipRect=function(t){return this.rectMap[t]?function(t,e){var r=window.devicePixelRatio,n=t.left,o=t.bottom,i=t.width,a=t.height,s=e.height-(o-window.scrollY);return{left:(n-window.scrollX)*r,bottom:s*r,width:i*r,height:a*r}}(this.rectMap[t],this.canvasRect):void 0},t.prototype.removeChartScene=function(t){delete this.rectMap[t]},t}(),c=function(){var t=this;this.viewPortManagers=[],this.viewPortMap={},this.managers=function(){return i(t.viewPortManagers)},this.dispose=function(){t.viewPortManagers.forEach((function(e){var r=e.id;return t.remove(r)}))},this.add=function(e,r){void 0===r&&(r=!0),t.viewPortManagers=i(t.viewPortManagers,[e]),e.viewPortGroup&&t.viewPortMap[e.viewPortGroup]&&r&&e.updateViewPort(t.viewPortMap[e.viewPortGroup])},this.remove=function(e){var r=t.viewPortManagers.find((function(t){return t.id===e}));r&&r.dispose(),t.viewPortManagers=t.viewPortManagers.filter((function(t){return t.id!==e}))},this.syncViewPortGroup=function(e){var r=e.start,n=e.end,o=e.manager,i=e.preventPropagation,a=void 0!==i&&i;if(o.viewPortGroup&&(t.viewPortMap[o.viewPortGroup]={start:r,end:n}),!a){var s=function(t){t.updateViewPort({start:r,end:n})};o.viewPortGroup?t.viewPortManagers.filter((function(t){var e=t.viewPortGroup;return o.viewPortGroup===e})).forEach(s):s(o)}}},u=Object(o.i)((function(t){return null!=t.camera})),d=function(){var t,e,r,o=new c,i=function(){e&&(e.setScissorTest(!1),e.setClearColor(16777215,0),e.clear(),e.setScissorTest(!0),o.managers().filter(u).forEach(h))},a=function(){if(e&&r){var n="translate("+window.scrollX+"px, "+window.scrollY+"px)";e.domElement.style.transform=n,t.updateCanvas(),i()}},d=function(){e&&r&&(function(t){var e=t.domElement,r=Math.floor(e.clientWidth*window.devicePixelRatio)||0,n=Math.floor(e.clientHeight*window.devicePixelRatio)||0,o=e.width!==r||e.height!==n;o&&t.setSize(r,n,!1)}(e),t.updateCanvas(),i())},h=function(n){var o=t.clipRect(n.id);e&&r&&o&&function(t,e,r){var n=e.scene,o=e.camera,i=r.left,a=r.bottom,s=r.width,c=r.height;t.setScissor(i,a,s,c),t.setViewport(i,a,s,c),t.render(n,o)}(e,n,o)};return{initRendering:function(o){t=new s(o),r=o,(e=new n.h({canvas:r,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})).setScissorTest(!0),e.setClearColor(0,0),a(),d(),window.addEventListener("scroll",a),window.addEventListener("resize",d)},dispose:function(){e&&e.dispose(),o.dispose(),window.removeEventListener("scroll",a),window.removeEventListener("resize",d)},render:h,addChartScene:function(t,e){void 0===e&&(e=!0),o.add(t,e)},removeChartScene:function(e){o.remove(e),t.removeChartScene(e),i()},setChartRect:function(e,r){t.updateChartScene(e,r),i()},updateViewPorts:o.syncViewPortGroup,onResolutionChange:function(){d()}}}()},1086:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return d}));var n=r(1078),o=r(1076),i=function(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;var n=Array(t),o=0;for(e=0;e<r;e++)for(var i=arguments[e],a=0,s=i.length;a<s;a++,o++)n[o]=i[a];return n},a=function(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,left:e.left+window.scrollX,right:e.right+window.scrollX,bottom:e.bottom+window.scrollY,top:e.top+window.scrollY,x:e.x+window.scrollX,y:e.y+window.scrollY,density:window.devicePixelRatio}},s=function(){function t(t){this.rectMap={},this.canvas=t,this.updateCanvas()}return t.prototype.updateCanvas=function(){this.canvasRect=this.canvas.getBoundingClientRect()},t.prototype.updateChartScene=function(t,e){this.rectMap[t]=e},t.prototype.clipRect=function(t){return this.rectMap[t]?function(t,e){var r=window.devicePixelRatio,n=t.left,o=t.bottom,i=t.width,a=t.height,s=e.height-(o-window.scrollY);return{left:(n-window.scrollX)*r,bottom:s*r,width:i*r,height:a*r}}(this.rectMap[t],this.canvasRect):void 0},t.prototype.removeChartScene=function(t){delete this.rectMap[t]},t}(),c=function(){var t=this;this.viewPortManagers=[],this.viewPortMap={},this.managers=function(){return i(t.viewPortManagers)},this.dispose=function(){t.viewPortManagers.forEach((function(e){var r=e.id;return t.remove(r)}))},this.add=function(e,r){void 0===r&&(r=!0),t.viewPortManagers=i(t.viewPortManagers,[e]),e.viewPortGroup&&t.viewPortMap[e.viewPortGroup]&&r&&e.updateViewPort(t.viewPortMap[e.viewPortGroup])},this.remove=function(e){var r=t.viewPortManagers.find((function(t){return t.id===e}));r&&r.dispose(),t.viewPortManagers=t.viewPortManagers.filter((function(t){return t.id!==e}))},this.syncViewPortGroup=function(e){var r=e.start,n=e.end,o=e.manager,i=e.preventPropagation,a=void 0!==i&&i;if(o.viewPortGroup&&(t.viewPortMap[o.viewPortGroup]={start:r,end:n}),!a){var s=function(t){t.updateViewPort({start:r,end:n})};o.viewPortGroup?t.viewPortManagers.filter((function(t){var e=t.viewPortGroup;return o.viewPortGroup===e})).forEach(s):s(o)}}},u=Object(o.i)((function(t){return null!=t.camera})),d=function(){var t,e,r,o=new c,i=function(){e&&(e.setScissorTest(!1),e.setClearColor(16777215,0),e.clear(),e.setScissorTest(!0),o.managers().filter(u).forEach(h))},a=function(){if(e&&r){var n="translate("+window.scrollX+"px, "+window.scrollY+"px)";e.domElement.style.transform=n,t.updateCanvas(),i()}},d=function(){e&&r&&(function(t){var e=t.domElement,r=Math.floor(e.clientWidth*window.devicePixelRatio)||0,n=Math.floor(e.clientHeight*window.devicePixelRatio)||0,o=e.width!==r||e.height!==n;o&&t.setSize(r,n,!1)}(e),t.updateCanvas(),i())},h=function(n){var o=t.clipRect(n.id);e&&r&&o&&function(t,e,r){var n=e.scene,o=e.camera,i=r.left,a=r.bottom,s=r.width,c=r.height;t.setScissor(i,a,s,c),t.setViewport(i,a,s,c),t.render(n,o)}(e,n,o)};return{initRendering:function(o){t=new s(o),r=o,(e=new n.h({canvas:r,alpha:!0,antialias:!0,preserveDrawingBuffer:!0})).setScissorTest(!0),e.setClearColor(0,0),a(),d(),window.addEventListener("scroll",a),window.addEventListener("resize",d)},dispose:function(){e&&e.dispose(),o.dispose(),window.removeEventListener("scroll",a),window.removeEventListener("resize",d)},render:h,addChartScene:function(t,e){void 0===e&&(e=!0),o.add(t,e)},removeChartScene:function(e){o.remove(e),t.removeChartScene(e),i()},setChartRect:function(e,r){t.updateChartScene(e,r),i()},updateViewPorts:o.syncViewPortGroup,onResolutionChange:function(){d()}}}()},1089:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={width:100,height:100}},1090:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={width:100,height:100}},1091:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return Math.abs(t(new Date(e).getTime())-t(new Date(0).getTime()))}},1092:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n=function(t,e){return Math.abs(t(new Date(e).getTime())-t(new Date(0).getTime()))}},1110:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return l}));var n=r(1077),o=r(1075),i=r(1087),a=r(1091),s=function(t,e){if(0===t.length)return 0;var r=t[0].resolution;return function(t){var e=t.toClipSpace,r=t.resolution,n=t.numDataStreams;return(Object(a.a)(e,r)-function(t,e){return Object(a.a)(t,.16666666666666666*e)}(e,r))/n}({toClipSpace:e,numDataStreams:t.length,resolution:r})},c=function(t){var e=t.dataStreams,r=t.mesh,n=t.toClipSpace,a=t.thresholds,c=t.thresholdOptions,u=e.filter(o.b).map((function(t){return Object(i.f)(t,t.resolution)}));r.count=function(t){return t.reduce((function(t,e){return t+e.length}),0)}(u);var d=r.geometry.attributes,h=d.color,l=d.bar,f=0,p=0;u.forEach((function(t,r){t.forEach((function(t){var u=t[0],d=t[1],v=t[2],w=t[3],m=t[4];l.array[f]=n(u)-r*s(e,n),l.array[f+1]=d;var g=Object(o.a)(d,a);if(null!=g&&c.showColor){var b=Object(i.d)(g.color),S=b[0],C=b[1],y=b[2];h.array[p]=S,h.array[p+1]=C,h.array[p+2]=y}else h.array[p]=v,h.array[p+1]=w,h.array[p+2]=m;p+=3,f+=2}))})),l.needsUpdate=!0,h.needsUpdate=!0},u=[0,0,0,1,1,0,0,1,1,0,1,1],d=function(t){var e=t.dataStreams,r=t.toClipSpace,o=t.bufferFactor,a=t.minBufferSize,d=t.thresholdOptions,h=t.thresholds,l=new n.c,f=Math.max(a,Object(i.e)(e)*o);!function(t,e){t.setAttribute("position",new n.i(new Float32Array(u),2)),t.setAttribute("bar",new n.k(new Float32Array(2*e),2,!1)),t.setAttribute("color",new n.k(new Uint8Array(3*e),3,!0))}(l,f);var p=new n.f({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float width;\nattribute vec2 bar;\nattribute vec2 position;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main() {\n  // Negative width here because we want to render the bars' width to the left side starting from its x position.\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * -width + bar.x, position.y * bar.y, 0.0, 1.0);\n  vColor = color;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:n.b,transparent:!1,uniforms:{width:{value:s(e,r)}}}),v=new n.j(l,p,f);return c({dataStreams:e,mesh:v,toClipSpace:r,thresholds:h,thresholdOptions:d}),v.frustumCulled=!1,v},h=function(t){var e=t.dataStreams,r=t.container,o=t.viewPort,a=t.bufferFactor,s=t.minBufferSize,c=t.onUpdate,u=t.thresholdOptions,h=t.thresholds,l=new n.l,f=Object(i.a)(o);return l.add(d({dataStreams:e,toClipSpace:f,bufferFactor:a,minBufferSize:s,thresholdOptions:u,thresholds:h})),Object(i.c)({scene:l,viewPort:o,container:r,toClipSpace:f,onUpdate:c})},l=function(t){var e=t.scene,r=t.dataStreams,n=t.hasDataChanged,o=t.minBufferSize,a=t.bufferFactor,u=t.viewPort,d=t.container,l=t.onUpdate,f=t.chartSize,p=t.thresholdOptions,v=t.thresholds,w=t.hasAnnotationChanged,m=e.scene.children[0];return function(t){return t.geometry.attributes.bar.array.length/2}(m)<Object(i.e)(r)||Object(i.b)(u,e.toClipSpace)||w?h({onUpdate:l,dataStreams:r,container:d,viewPort:u,minBufferSize:o,bufferFactor:a,chartSize:f,thresholdOptions:p,thresholds:v}):(function(t){var e=t.bars,r=t.dataStreams,n=t.toClipSpace,o=t.hasDataChanged,i=t.thresholdOptions,a=t.thresholds;o&&(e.material.uniforms.width.value=s(r,n),c({dataStreams:r,mesh:e,toClipSpace:n,thresholds:a,thresholdOptions:i}))}({bars:m,dataStreams:r,toClipSpace:e.toClipSpace,hasDataChanged:n,thresholdOptions:p,thresholds:v}),e)}},1112:function(t,e,r){"use strict";r.d(e,"a",(function(){return h})),r.d(e,"b",(function(){return l}));var n=r(1078),o=r(1076),i=r(1088),a=r(1092),s=function(t,e){if(0===t.length)return 0;var r=t[0].resolution;return function(t){var e=t.toClipSpace,r=t.resolution,n=t.numDataStreams;return(Object(a.a)(e,r)-function(t,e){return Object(a.a)(t,.16666666666666666*e)}(e,r))/n}({toClipSpace:e,numDataStreams:t.length,resolution:r})},c=function(t){var e=t.dataStreams,r=t.mesh,n=t.toClipSpace,a=t.thresholds,c=t.thresholdOptions,u=e.filter(o.b).map((function(t){return Object(i.f)(t,t.resolution)}));r.count=function(t){return t.reduce((function(t,e){return t+e.length}),0)}(u);var d=r.geometry.attributes,h=d.color,l=d.bar,f=0,p=0;u.forEach((function(t,r){t.forEach((function(t){var u=t[0],d=t[1],v=t[2],w=t[3],m=t[4];l.array[f]=n(u)-r*s(e,n),l.array[f+1]=d;var g=Object(o.a)(d,a);if(null!=g&&c.showColor){var b=Object(i.d)(g.color),S=b[0],C=b[1],y=b[2];h.array[p]=S,h.array[p+1]=C,h.array[p+2]=y}else h.array[p]=v,h.array[p+1]=w,h.array[p+2]=m;p+=3,f+=2}))})),l.needsUpdate=!0,h.needsUpdate=!0},u=[0,0,0,1,1,0,0,1,1,0,1,1],d=function(t){var e=t.dataStreams,r=t.toClipSpace,o=t.bufferFactor,a=t.minBufferSize,d=t.thresholdOptions,h=t.thresholds,l=new n.c,f=Math.max(a,Object(i.e)(e)*o);!function(t,e){t.setAttribute("position",new n.i(new Float32Array(u),2)),t.setAttribute("bar",new n.k(new Float32Array(2*e),2,!1)),t.setAttribute("color",new n.k(new Uint8Array(3*e),3,!0))}(l,f);var p=new n.f({vertexShader:"\nprecision highp float;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float width;\nattribute vec2 bar;\nattribute vec2 position;\nattribute vec3 color;\nvarying vec3 vColor;\n\nvoid main() {\n  // Negative width here because we want to render the bars' width to the left side starting from its x position.\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x * -width + bar.x, position.y * bar.y, 0.0, 1.0);\n  vColor = color;\n}\n",fragmentShader:"\nprecision highp float;\nvarying vec3 vColor;\n\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n",side:n.b,transparent:!1,uniforms:{width:{value:s(e,r)}}}),v=new n.j(l,p,f);return c({dataStreams:e,mesh:v,toClipSpace:r,thresholds:h,thresholdOptions:d}),v.frustumCulled=!1,v},h=function(t){var e=t.dataStreams,r=t.container,o=t.viewPort,a=t.bufferFactor,s=t.minBufferSize,c=t.onUpdate,u=t.thresholdOptions,h=t.thresholds,l=new n.l,f=Object(i.a)(o);return l.add(d({dataStreams:e,toClipSpace:f,bufferFactor:a,minBufferSize:s,thresholdOptions:u,thresholds:h})),Object(i.c)({scene:l,viewPort:o,container:r,toClipSpace:f,onUpdate:c})},l=function(t){var e=t.scene,r=t.dataStreams,n=t.hasDataChanged,o=t.minBufferSize,a=t.bufferFactor,u=t.viewPort,d=t.container,l=t.onUpdate,f=t.chartSize,p=t.thresholdOptions,v=t.thresholds,w=t.hasAnnotationChanged,m=e.scene.children[0];return function(t){return t.geometry.attributes.bar.array.length/2}(m)<Object(i.e)(r)||Object(i.b)(u,e.toClipSpace)||w?h({onUpdate:l,dataStreams:r,container:d,viewPort:u,minBufferSize:o,bufferFactor:a,chartSize:f,thresholdOptions:p,thresholds:v}):(function(t){var e=t.bars,r=t.dataStreams,n=t.toClipSpace,o=t.hasDataChanged,i=t.thresholdOptions,a=t.thresholds;o&&(e.material.uniforms.width.value=s(r,n),c({dataStreams:r,mesh:e,toClipSpace:n,thresholds:a,thresholdOptions:i}))}({bars:m,dataStreams:r,toClipSpace:e.toClipSpace,hasDataChanged:n,thresholdOptions:p,thresholds:v}),e)}},880:function(t,e,r){"use strict";r.r(e),r.d(e,"monitor_multiple_bars",(function(){return p}));var n=r(107),o=(r(53),r(68)),i=r(76),a=(r(1077),r(1085)),s=(r(1075),r(1083),r(1094),r(1095),r(1087),r(1079),r(1089)),c=r(1110),u=(r(1091),new Date(2e3,0,0)),d=new Date(2e3,0,1),h=d.getTime()-u.getTime(),l={x:u.getTime()+h/3,y:25},f={x:u.getTime()+h*(2/3),y:50},p=function(){function t(t){Object(n.h)(this,t)}return t.prototype.componentDidLoad=function(){var t,e,r=this.el.querySelector("#test-container"),n=Object(c.a)({viewPort:{start:u,end:d,yMin:0,yMax:100},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",aggregates:(t={},t[5*i.b]=[l],t),data:[],resolution:5*i.b,dataType:o.b.NUMBER},{id:"test-stream-2",name:"test-stream-name-2",color:"red",aggregates:(e={},e[5*i.b]=[f],e),data:[],resolution:5*i.b,dataType:o.b.NUMBER}],container:r,chartSize:s.a,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});a.b.addChartScene(n);var h=r.getBoundingClientRect();a.b.setChartRect(n.id,Object.assign({density:1},h.toJSON()))},t.prototype.render=function(){return Object(n.g)("monitor-webgl-context",null,Object(n.g)("div",{id:"test-container",style:{width:s.a.width+"px",height:s.a.height+"px"}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),t}()},985:function(t,e,r){"use strict";r.r(e),r.d(e,"monitor_multiple_bars",(function(){return p}));var n=r(108),o=(r(1072),r(1071)),i=r(1073),a=(r(1078),r(1086)),s=(r(1076),r(1084),r(1096),r(1097),r(1088),r(1080),r(1090)),c=r(1112),u=(r(1092),new Date(2e3,0,0)),d=new Date(2e3,0,1),h=d.getTime()-u.getTime(),l={x:u.getTime()+h/3,y:25},f={x:u.getTime()+h*(2/3),y:50},p=function(){function t(t){Object(n.h)(this,t)}return t.prototype.componentDidLoad=function(){var t,e,r=this.el.querySelector("#test-container"),n=Object(c.a)({viewPort:{start:u,end:d,yMin:0,yMax:100},dataStreams:[{id:"test-stream",name:"test-stream-name",color:"black",aggregates:(t={},t[5*i.b]=[l],t),data:[],resolution:5*i.b,dataType:o.a.NUMBER},{id:"test-stream-2",name:"test-stream-name-2",color:"red",aggregates:(e={},e[5*i.b]=[f],e),data:[],resolution:5*i.b,dataType:o.a.NUMBER}],container:r,chartSize:s.a,minBufferSize:100,bufferFactor:2,thresholdOptions:{showColor:!1},thresholds:[]});a.b.addChartScene(n);var h=r.getBoundingClientRect();a.b.setChartRect(n.id,Object.assign({density:1},h.toJSON()))},t.prototype.render=function(){return Object(n.g)("monitor-webgl-context",null,Object(n.g)("div",{id:"test-container",style:{width:s.a.width+"px",height:s.a.height+"px"}}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),t}()}}]);