(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[56],{109:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"f",(function(){return o}));var a=0,i=5e3,r=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),c=2500,d={x:new Date((r.getTime()+o.getTime())/2),y:c}},80:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_scatter_chart_dynamic_data",(function(){return u}));var a=n(2),i=(n(88),n(91),n(90),n(96)),r=n(109),o=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var a=Array(t),i=0;for(e=0;e<n;e++)for(var r=arguments[e],o=0,c=r.length;o<c;o++,i++)a[i]=r[o];return a},c=i.a.viewPort,d=c.start,s=c.end.getTime()-d.getTime(),u=function(){function t(t){var e=this;Object(a.i)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(d.getTime()+s/(2+e.data.length)),y:r.c};e.data=o([t],e.data)},this.removeDataPoint=function(){var t=e.data,n=(t[0],t.slice(1));e.data=n}}return t.prototype.render=function(){return Object(a.h)("div",null,Object(a.h)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(a.h)("button",{id:"remove-data-point",onClick:this.removeDataPoint},"Remove Data Point"),Object(a.h)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(a.h)("monitor-scatter-chart",{data:[{id:"test",data:this.data,resolution:0}],config:Object.assign(Object.assign({},i.a),{legend:void 0,size:{height:500,width:500},dataStreamInfo:[{id:"test",color:"red",name:"test stream"}],viewPort:Object.assign(Object.assign({},i.a.viewPort),{yMin:0,yMax:5e3})})}),Object(a.h)("monitor-webgl-context",null)))},t}()},88:function(t,e,n){"use strict";var a,i;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return a})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(a||(a={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={}))},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var a=n(88),i={id:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:8,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:a.b.TimeSeries,yScaleType:a.b.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreamInfo:[],legend:{position:a.a.BOTTOM,width:180}}},91:function(t,e,n){"use strict";var a;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o}));var i;!function(t){t.BLUE_MUTED="blue-MUTED",t.QUALITATIVE_MUTED="qualitative-muted"}(i||(i={}));var r=((a={})[i.BLUE_MUTED]=[["#5e87b5"],["#5e87b5","#b8c6df"],["#5e87b5","#9cb1d2","#d4dced"],["#5e87b5","#88a2c8","#aebfda","#d4dced"],["#5e87b5","#7e9bc3","#9cb1d2","#b8c6df","#d4dced"],["#5e87b5","#769dd2","#96b2dd","#b4c7e9","#d4dced","#eff2fb"]],a[i.QUALITATIVE_MUTED]=[["#5e87b5"],["#5e87b5","#e6ac8c"],["#5e87b5","#e6ac8c","#7fc6b1"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c","#f9da95"]],a),o=function(t,e){var n=r[t][e-1];if(null==n)throw new Error("Cannot add more than 6 data streams");return n}},96:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var a=n(91),i=n(90),r=[{id:"some-id",name:"high",detailedName:"/amazon/stocks/high",color:Object(a.b)(a.a.QUALITATIVE_MUTED,5)[0],unit:"USD"}],o={id:"fake-id",legend:i.a.legend,viewPort:{start:new Date(1998,0,0),end:new Date(2e3,0,1)},dataStreamInfo:r}}}]);
//# sourceMappingURL=stencil-monitor-webgl-scatter-chart-dynamic-data-entry-js.b4d7020a.chunk.js.map