(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[47],{71:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_webgl_chart_large_viewport",(function(){return o}));var i=n(2),a=(n(88),n(91),n(90),n(96)),c={yMin:0,yMax:5e3,start:new Date(2e3,0,0),end:new Date(2001,0,0)},r={x:new Date((c.start.getTime()+c.end.getTime())/2),y:(c.yMin+c.yMax)/2},o=function(){function e(e){Object(i.i)(this,e)}return e.prototype.render=function(){return Object(i.h)("div",null,Object(i.h)("monitor-line-chart",{data:[{id:"test",data:[r],resolution:0}],config:Object.assign(Object.assign({},a.a),{legend:void 0,size:{height:500,width:500},dataStreamInfo:[{id:"test",color:"black",name:"test stream"}],viewPort:c})}),Object(i.h)("monitor-webgl-context",null))},e}()},88:function(e,t,n){"use strict";var i,a;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(i||(i={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(a||(a={}))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(88),a={id:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:8,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:i.b.TimeSeries,yScaleType:i.b.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreamInfo:[],legend:{position:i.a.BOTTOM,width:180}}},91:function(e,t,n){"use strict";var i;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a;!function(e){e.BLUE_MUTED="blue-MUTED",e.QUALITATIVE_MUTED="qualitative-muted"}(a||(a={}));var c=((i={})[a.BLUE_MUTED]=[["#5e87b5"],["#5e87b5","#b8c6df"],["#5e87b5","#9cb1d2","#d4dced"],["#5e87b5","#88a2c8","#aebfda","#d4dced"],["#5e87b5","#7e9bc3","#9cb1d2","#b8c6df","#d4dced"],["#5e87b5","#769dd2","#96b2dd","#b4c7e9","#d4dced","#eff2fb"]],i[a.QUALITATIVE_MUTED]=[["#5e87b5"],["#5e87b5","#e6ac8c"],["#5e87b5","#e6ac8c","#7fc6b1"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c","#f9da95"]],i),r=function(e,t){var n=c[e][t-1];if(null==n)throw new Error("Cannot add more than 6 data streams");return n}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var i=n(91),a=n(90),c=[{id:"some-id",name:"high",detailedName:"/amazon/stocks/high",color:Object(i.b)(i.a.QUALITATIVE_MUTED,5)[0],unit:"USD"}],r={id:"fake-id",legend:a.a.legend,viewPort:{start:new Date(1998,0,0),end:new Date(2e3,0,1)},dataStreamInfo:c}}}]);
//# sourceMappingURL=stencil-monitor-webgl-chart-large-viewport-entry-js.7ec155f6.chunk.js.map