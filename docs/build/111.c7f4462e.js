(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1100:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return m}));var n=r(53),o=r(1077),i=r(1075),a=r(1087),s=function(e){return"\nvarying vec3 vColor;\n"+(e?"varying float positionY;":"")+"\nattribute vec3 pointColor;\nuniform float pointDiameter;\nuniform float devicePixelRatio;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, 0.0, 1.0);\n  gl_PointSize = pointDiameter * devicePixelRatio;\n  vColor = pointColor;\n  "+(e?"positionY = position.y;":"")+"\n}\n"},l=12,c=function(e){if(0===e.length)return[];var t=Object(i.g)(e),r=Object(i.s)(t).reverse(),o=[],s=new Set;r.forEach((function(e,t){var l=e.value;if(r[t].comparisonOperator!==n.a.EQUAL)if(0!==t){var c=r[t-1],u=c.value,d=(u+l)/2,h=Object(i.a)(d,r);if(null!=h&&!s.has(c.value)){var f=Object(a.d)(h.color);O=f[0],w=f[1],E=f[2],c.comparisonOperator===n.a.EQUAL&&(c.value,r[t].value),o.push({upper:u,lower:l,color:[O,w,E]}),s.add(c.value)}if(t!==r.length-1){var p=r[t+1].value;if(d=(l+p)/2,null!=(h=Object(i.a)(d,r))&&!s.has(l)){var v=Object(a.d)(h.color);O=v[0],w=v[1],E=v[2],o.push({upper:l,lower:p,color:[O,w,E]}),s.add(e.value)}}else if(d=(l+Number.MIN_SAFE_INTEGER)/2,null!=(h=Object(i.a)(d,r))&&!s.has(l)){var m=Object(a.d)(h.color);O=m[0],w=m[1],E=m[2],o.push({lower:Number.MIN_SAFE_INTEGER,upper:l,color:[O,w,E]})}}else{var g=(Number.MAX_SAFE_INTEGER+l)/2,b=Object(i.a)(g,r);if(null!=b){var S=Object(a.d)(b.color),O=S[0],w=S[1],E=S[2];o.push({upper:Number.MAX_SAFE_INTEGER,lower:l,color:[O,w,E]})}}else{var _=Object(a.d)(r[t].color);O=_[0],w=_[1],E=_[2];o.push({upper:l,lower:l,color:[O,w,E]})}}));for(var c=o[o.length-1];o.length<l;){var u=r[r.length-1].value,d=Number.MIN_SAFE_INTEGER+u/2,h=Object(i.a)(d,r);if(null==h)o.push(c);else{var f=Object(a.d)(h.color),p=f[0],v=f[1],m=f[2];c={lower:Number.MIN_SAFE_INTEGER,upper:u,color:[p,v,m]},o.push(c)}}return o},u="\n#define MAX_NUM_TOTAL_THRESHOLD_BAND "+l+"\n\nstruct Band {\n  float upper;\n  float lower;\n  vec3 color;\n};\n\nvarying vec3 vColor;\nvarying float positionY;\n\nuniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];\nuniform float yPixelDensity;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n\n  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {\n    bool isRangeBreached = positionY >= thresholdBands[i].lower && positionY <= thresholdBands[i].upper;\n    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;\n    bool isEqualsThresholdBreached = positionY == thresholdBands[i].upper;\n\n    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {\n       gl_FragColor = vec4(thresholdBands[i].color /255.0, alpha);\n       break;\n    } else {\n       gl_FragColor = vec4(vColor, alpha);\n    }\n  }\n}\n",d=0,h=function(e){return 0===(null!=e[0]?e[0].resolution:null)?4:6.25},f=2,p=function(e,t,r){var n=t.filter(i.b).map((function(e){return Object(a.f)(e,e.resolution)})).flat(),o=e.attributes,s=o.position,l=o.pointColor;n.forEach((function(e,t){var n=e[0],o=e[1],i=e[2],a=e[3],c=e[4];s.array[t*f]=r(n),s.array[t*f+1]=o,l.array[3*t]=i,l.array[3*t+1]=a,l.array[3*t+2]=c})),e.setDrawRange(0,n.length),s.needsUpdate=!0,l.needsUpdate=!0},v=function(e){var t=e.toClipSpace,r=e.dataStreams,n=e.minBufferSize,i=e.bufferFactor,l=e.thresholdOptions,d=e.thresholds,v=Math.max(n,Object(a.e)(r)*i),m=new o.a;!function(e,t){e.setAttribute("position",new o.i(new Float32Array(t*f),f)),e.setAttribute("pointColor",new o.i(new Uint8Array(3*t),3,!0))}(m,v),p(m,r,t);var g=l.showColor,b=void 0===g||g,S=new o.g({vertexShader:s(b&&d.length>0),fragmentShader:b&&0!==d.length?u:"\nvarying vec3 vColor;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n  gl_FragColor = vec4(vColor, alpha);\n}\n",transparent:!0,uniforms:{pointDiameter:{value:h(r)},devicePixelRatio:{value:window.devicePixelRatio},thresholdBands:{value:c(d)}}}),O=new o.e(m,S);return O.frustumCulled=!1,O},m=function(e,t,r,n){void 0===n&&(n=!0),t.material.uniforms.pointDiameter.value=h(e),t.material.uniforms.devicePixelRatio.value=window.devicePixelRatio,n&&p(t.geometry,e,r)}},1103:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"c",(function(){return d})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return c})),r.d(t,"f",(function(){return m}));var n=r(1072),o=r(1078),i=r(1076),a=r(1088),s=function(e){return"\nvarying vec3 vColor;\n"+(e?"varying float positionY;":"")+"\nattribute vec3 pointColor;\nuniform float pointDiameter;\nuniform float devicePixelRatio;\n\nvoid main() {\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, 0.0, 1.0);\n  gl_PointSize = pointDiameter * devicePixelRatio;\n  vColor = pointColor;\n  "+(e?"positionY = position.y;":"")+"\n}\n"},l=12,c=function(e){if(0===e.length)return[];var t=Object(i.g)(e),r=Object(i.s)(t).reverse(),o=[],s=new Set;r.forEach((function(e,t){var l=e.value;if(r[t].comparisonOperator!==n.a.EQUAL)if(0!==t){var c=r[t-1],u=c.value,d=(u+l)/2,h=Object(i.a)(d,r);if(null!=h&&!s.has(c.value)){var f=Object(a.d)(h.color);O=f[0],w=f[1],E=f[2],c.comparisonOperator===n.a.EQUAL&&(c.value,r[t].value),o.push({upper:u,lower:l,color:[O,w,E]}),s.add(c.value)}if(t!==r.length-1){var p=r[t+1].value;if(d=(l+p)/2,null!=(h=Object(i.a)(d,r))&&!s.has(l)){var v=Object(a.d)(h.color);O=v[0],w=v[1],E=v[2],o.push({upper:l,lower:p,color:[O,w,E]}),s.add(e.value)}}else if(d=(l+Number.MIN_SAFE_INTEGER)/2,null!=(h=Object(i.a)(d,r))&&!s.has(l)){var m=Object(a.d)(h.color);O=m[0],w=m[1],E=m[2],o.push({lower:Number.MIN_SAFE_INTEGER,upper:l,color:[O,w,E]})}}else{var g=(Number.MAX_SAFE_INTEGER+l)/2,b=Object(i.a)(g,r);if(null!=b){var S=Object(a.d)(b.color),O=S[0],w=S[1],E=S[2];o.push({upper:Number.MAX_SAFE_INTEGER,lower:l,color:[O,w,E]})}}else{var _=Object(a.d)(r[t].color);O=_[0],w=_[1],E=_[2];o.push({upper:l,lower:l,color:[O,w,E]})}}));for(var c=o[o.length-1];o.length<l;){var u=r[r.length-1].value,d=Number.MIN_SAFE_INTEGER+u/2,h=Object(i.a)(d,r);if(null==h)o.push(c);else{var f=Object(a.d)(h.color),p=f[0],v=f[1],m=f[2];c={lower:Number.MIN_SAFE_INTEGER,upper:u,color:[p,v,m]},o.push(c)}}return o},u="\n#define MAX_NUM_TOTAL_THRESHOLD_BAND "+l+"\n\nstruct Band {\n  float upper;\n  float lower;\n  vec3 color;\n};\n\nvarying vec3 vColor;\nvarying float positionY;\n\nuniform Band thresholdBands[MAX_NUM_TOTAL_THRESHOLD_BAND];\nuniform float yPixelDensity;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n\n  for(int i = 0; i < MAX_NUM_TOTAL_THRESHOLD_BAND; i++) {\n    bool isRangeBreached = positionY >= thresholdBands[i].lower && positionY <= thresholdBands[i].upper;\n    bool isEqualsThreshold = thresholdBands[i].lower == thresholdBands[i].upper;\n    bool isEqualsThresholdBreached = positionY == thresholdBands[i].upper;\n\n    if (isRangeBreached || (isEqualsThreshold && isEqualsThresholdBreached)) {\n       gl_FragColor = vec4(thresholdBands[i].color /255.0, alpha);\n       break;\n    } else {\n       gl_FragColor = vec4(vColor, alpha);\n    }\n  }\n}\n",d=0,h=function(e){return 0===(null!=e[0]?e[0].resolution:null)?4:6.25},f=2,p=function(e,t,r){var n=t.filter(i.b).map((function(e){return Object(a.f)(e,e.resolution)})).flat(),o=e.attributes,s=o.position,l=o.pointColor;n.forEach((function(e,t){var n=e[0],o=e[1],i=e[2],a=e[3],c=e[4];s.array[t*f]=r(n),s.array[t*f+1]=o,l.array[3*t]=i,l.array[3*t+1]=a,l.array[3*t+2]=c})),e.setDrawRange(0,n.length),s.needsUpdate=!0,l.needsUpdate=!0},v=function(e){var t=e.toClipSpace,r=e.dataStreams,n=e.minBufferSize,i=e.bufferFactor,l=e.thresholdOptions,d=e.thresholds,v=Math.max(n,Object(a.e)(r)*i),m=new o.a;!function(e,t){e.setAttribute("position",new o.i(new Float32Array(t*f),f)),e.setAttribute("pointColor",new o.i(new Uint8Array(3*t),3,!0))}(m,v),p(m,r,t);var g=l.showColor,b=void 0===g||g,S=new o.g({vertexShader:s(b&&d.length>0),fragmentShader:b&&0!==d.length?u:"\nvarying vec3 vColor;\n\nvoid main() {\n  // calculate position such that the center is (0, 0) in a region of [-1, 1] x [-1, 1]\n  vec2 pos = 2.0 * gl_PointCoord.xy - 1.0;\n  // r = distance squared from the origin of the point being rendered\n  float r = dot(pos, pos);\n  if (r > 1.0) {\n    discard;\n  }\n  float alpha = 1.0 - smoothstep(0.5, 1.0, sqrt(r));\n  gl_FragColor = vec4(vColor, alpha);\n}\n",transparent:!0,uniforms:{pointDiameter:{value:h(r)},devicePixelRatio:{value:window.devicePixelRatio},thresholdBands:{value:c(d)}}}),O=new o.e(m,S);return O.frustumCulled=!1,O},m=function(e,t,r,n){void 0===n&&(n=!0),t.material.uniforms.pointDiameter.value=h(e),t.material.uniforms.devicePixelRatio.value=window.devicePixelRatio,n&&p(t.geometry,e,r)}},1104:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));var n=r(53),o={widgetId:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:40,marginTop:24,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:n.d.TimeSeries,yScaleType:n.d.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreams:[],legend:{position:n.c.BOTTOM,width:170}},i={showColor:!0},a={showColor:!1}},1105:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return i})),r.d(t,"c",(function(){return a}));var n=r(1072),o={widgetId:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:40,marginTop:24,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:n.d.TimeSeries,yScaleType:n.d.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreams:[],legend:{position:n.c.BOTTOM,width:170}},i={showColor:!0},a={showColor:!1}},893:function(e,t,r){"use strict";r.r(t),r.d(t,"monitor_scatter_chart",(function(){return f}));var n=r(107),o=r(53),i=(r(68),r(76),r(1077)),a=r(1075),s=r(1100),l=(r(1083),r(1094),r(1095),r(1087)),c=(r(1079),r(1104)),u=function(e){var t=e.dataStreams,r=e.container,n=e.viewPort,o=e.minBufferSize,c=e.bufferFactor,u=e.onUpdate,d=e.thresholdOptions,h=e.thresholds,f=new i.l,p=Object(l.a)(n),v=Object(a.g)(h),m=[];return m[s.c]=Object(s.d)({dataStreams:t,minBufferSize:o,bufferFactor:c,toClipSpace:p,thresholdOptions:d,thresholds:v}),m.forEach((function(e){return f.add(e)})),Object(l.c)({scene:f,viewPort:n,container:r,toClipSpace:p,onUpdate:u})},d=function(e){var t=e.scene,r=e.dataStreams,n=e.chartSize,o=e.container,i=e.viewPort,a=e.hasDataChanged,c=e.bufferFactor,d=e.minBufferSize,h=e.onUpdate,f=e.thresholdOptions,p=e.thresholds,v=e.hasAnnotationChanged,m=t.scene.children[s.c];return function(e){return e.geometry.attributes.position.array.length/s.b}(m)<Object(l.e)(r)||Object(l.b)(i,t.toClipSpace)||v?u({dataStreams:r,chartSize:n,container:o,viewPort:i,minBufferSize:d,bufferFactor:c,onUpdate:h,thresholdOptions:f,thresholds:p}):(a&&Object(s.f)(r,m,t.toClipSpace),t)},h=function(e){return Object(n.g)("monitor-tooltip",Object.assign({},e,{visualizesAlarms:!1,supportString:!1,dataAlignment:o.b.EITHER}))},f=function(){function e(e){Object(n.h)(this,e),this.gestures=!0,this.isEditing=!1,this.bufferFactor=2,this.minBufferSize=1e3}return e.prototype.render=function(){var e=this;return Object(n.g)("monitor-size-provider",{size:this.size,renderFunc:function(t){return Object(n.g)("monitor-webgl-base-chart",{axis:e.axis,gestures:e.gestures,configId:e.widgetId,requestData:e.requestData,legend:e.legend,annotations:e.annotations,trends:e.trends,updateChartScene:d,createChartScene:u,size:Object.assign(Object.assign(Object.assign({},c.a.size),e.size),t),dataStreams:e.dataStreams,alarms:e.alarms,viewPort:e.viewPort,minBufferSize:e.minBufferSize,bufferFactor:e.bufferFactor,isEditing:e.isEditing,tooltip:h,supportString:!1,visualizesAlarms:!1,messageOverrides:e.messageOverrides})}})},e}()},998:function(e,t,r){"use strict";r.r(t),r.d(t,"monitor_scatter_chart",(function(){return f}));var n=r(108),o=r(1072),i=(r(1071),r(1073),r(1078)),a=r(1076),s=r(1103),l=(r(1084),r(1096),r(1097),r(1088)),c=(r(1080),r(1105)),u=function(e){var t=e.dataStreams,r=e.container,n=e.viewPort,o=e.minBufferSize,c=e.bufferFactor,u=e.onUpdate,d=e.thresholdOptions,h=e.thresholds,f=new i.l,p=Object(l.a)(n),v=Object(a.g)(h),m=[];return m[s.c]=Object(s.d)({dataStreams:t,minBufferSize:o,bufferFactor:c,toClipSpace:p,thresholdOptions:d,thresholds:v}),m.forEach((function(e){return f.add(e)})),Object(l.c)({scene:f,viewPort:n,container:r,toClipSpace:p,onUpdate:u})},d=function(e){var t=e.scene,r=e.dataStreams,n=e.chartSize,o=e.container,i=e.viewPort,a=e.hasDataChanged,c=e.bufferFactor,d=e.minBufferSize,h=e.onUpdate,f=e.thresholdOptions,p=e.thresholds,v=e.hasAnnotationChanged,m=t.scene.children[s.c];return function(e){return e.geometry.attributes.position.array.length/s.b}(m)<Object(l.e)(r)||Object(l.b)(i,t.toClipSpace)||v?u({dataStreams:r,chartSize:n,container:o,viewPort:i,minBufferSize:d,bufferFactor:c,onUpdate:h,thresholdOptions:f,thresholds:p}):(a&&Object(s.f)(r,m,t.toClipSpace),t)},h=function(e){return Object(n.g)("monitor-tooltip",Object.assign({},e,{visualizesAlarms:!1,supportString:!1,dataAlignment:o.b.EITHER}))},f=function(){function e(e){Object(n.h)(this,e),this.gestures=!0,this.isEditing=!1,this.bufferFactor=2,this.minBufferSize=1e3}return e.prototype.render=function(){var e=this;return Object(n.g)("monitor-size-provider",{size:this.size,renderFunc:function(t){return Object(n.g)("monitor-webgl-base-chart",{axis:e.axis,gestures:e.gestures,configId:e.widgetId,requestData:e.requestData,legend:e.legend,annotations:e.annotations,trends:e.trends,updateChartScene:d,createChartScene:u,size:Object.assign(Object.assign(Object.assign({},c.a.size),e.size),t),dataStreams:e.dataStreams,alarms:e.alarms,viewPort:e.viewPort,minBufferSize:e.minBufferSize,bufferFactor:e.bufferFactor,isEditing:e.isEditing,tooltip:h,supportString:!1,visualizesAlarms:!1,messageOverrides:e.messageOverrides})}})},e}()}}]);