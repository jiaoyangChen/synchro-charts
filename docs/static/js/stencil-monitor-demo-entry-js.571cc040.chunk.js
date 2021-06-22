(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[19],{107:function(t,e,n){"use strict";n(94),n(88),n(89)},38:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_demo",(function(){return b}));var i=n(2),o=(n(107),n(94),n(88)),a=n(89),r=n(91),c=n(90),s=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),o=0;for(e=0;e<n;e++)for(var a=arguments[e],r=0,c=a.length;r<c;r++,o++)i[o]=a[r];return i},d=[{id:"some-id",name:"high",detailedName:"/amazon/stocks/high",color:Object(r.b)(r.a.QUALITATIVE_MUTED,5)[0],unit:"USD"}],g={id:"fake-id",legend:c.a.legend,viewPort:{start:new Date(1998,0,0),end:new Date(2e3,0,1)},dataStreamInfo:d},u=7*a.a,h=["#0073bb","#dd6b10","#1d8102","#d13212"],f=30*a.c,b=function(){function t(t){var e=this;Object(i.i)(this,t),this.isEditing=!1,this.config=g,this.height=380,this.viewPortDuration=f,this.isBottomLegend=!0,this.numCharts=1,this.componentTag="monitor-line-chart",this.updateViewPortToNow=function(){e.config=Object.assign(Object.assign({},e.config),{viewPort:Object.assign(Object.assign({},e.config.viewPort),{lastUpdatedBy:void 0,end:new Date,start:new Date((new Date).getTime()-e.viewPortDuration)})})},this.toggleIsEditing=function(){e.isEditing=!e.isEditing},this.increaseYMax=function(){e.config=Object.assign(Object.assign({},e.config),{viewPort:Object.assign(Object.assign({},e.config.viewPort),{yMax:e.config.viewPort.yMax||50})})},this.addStream=function(){var t=e.config.dataStreamInfo.length,n=h[t%h.length],i=t.toString();e.config=null!=i?Object.assign(Object.assign({},e.config),{dataStreamInfo:s(e.config.dataStreamInfo,[{id:i,color:n,name:i,detailedName:"/amazon/stocks/"+i,unit:"USD"}])}):Object.assign(Object.assign({},e.config),{dataStreamInfo:s(e.config.dataStreamInfo,[{id:"non-existent-stream-"+(t+1),color:"black",name:"a pretty cool stream "+t,unit:"M"}])})},this.removeStream=function(){e.config=Object.assign(Object.assign({},e.config),{dataStreamInfo:e.config.dataStreamInfo.slice(0,-1)})},this.toggleLegendPosition=function(){e.isBottomLegend=!e.isBottomLegend,e.config=Object.assign(Object.assign({},e.config),{legend:Object.assign(Object.assign({width:200},e.config.legend),{position:e.isBottomLegend?o.a.BOTTOM:o.a.RIGHT})})},this.increaseEndDate=function(){e.config=Object.assign(Object.assign({},e.config),{viewPort:Object.assign(Object.assign({},e.config.viewPort),{start:e.config.viewPort.start,end:new Date(e.config.viewPort.end.getTime()+6*u),lastUpdatedBy:void 0})})},this.increaseStartDate=function(){var t=new Date(e.config.viewPort.start.getTime()+6*u);t<e.config.viewPort.end&&(e.config=Object.assign(Object.assign({},e.config),{viewPort:Object.assign(Object.assign({},e.config.viewPort),{end:e.config.viewPort.end,start:t,lastUpdatedBy:void 0})}))},this.addChart=function(){e.numCharts+=1},this.removeChart=function(){e.numCharts-=1},this.changeComponent=function(t){e.componentTag=t.target.value}}return t.prototype.dateRangeChangeHandler=function(t){var e=t.detail,n=e[0],i=e[1],o=e[2];this.config=Object.assign(Object.assign({},this.config),{viewPort:Object.assign(Object.assign({},this.config.viewPort),{start:n,end:i,lastUpdatedBy:o})})},t.prototype.onWidgetUpdated=function(t){var e=t.detail;this.config=Object.assign(Object.assign({},this.config),e)},t.prototype.render=function(){var t=this;return Object(i.h)("bp-data-store",null,Object(i.h)("div",null,Object(i.h)("button",{onClick:this.addChart},"Add Chart")," ",Object(i.h)("button",{onClick:this.removeChart,disabled:0===this.numCharts},"Remove Chart")," ","| ",Object(i.h)("button",{onClick:this.addStream},"Add Stream")," ",Object(i.h)("button",{disabled:!(this.config.dataStreamInfo.length>1),onClick:this.removeStream},"Remove Stream")," ",Object(i.h)("br",null),Object(i.h)("br",null),Object(i.h)("button",{onClick:this.toggleLegendPosition},"Show Legend on ",Object(i.h)("strong",null,this.isBottomLegend?"Right":"Bottom"))," ","| ",Object(i.h)("button",{onClick:this.toggleIsEditing},this.isEditing?"disable":"enable"," editing")," |"," ",Object(i.h)("button",{onClick:this.increaseEndDate},"Increase end date")," ",Object(i.h)("button",{onClick:this.increaseStartDate},"Increase start date"),Object(i.h)("br",null),Object(i.h)("br",null),Object(i.h)("strong",null,"Component Type: "),Object(i.h)("select",{onChange:this.changeComponent},Object(i.h)("option",{value:"monitor-line-chart"},"Line Chart"),Object(i.h)("option",{value:"monitor-scatter-chart"},"Scatter Chart"),Object(i.h)("option",{value:"monitor-bar-chart"},"Bar Chart"),Object(i.h)("option",{value:"monitor-kpi"},"KPI")),Object(i.h)("div",{style:{display:"flex",flexWrap:"wrap"}},new Array(this.numCharts).fill(0).map((function(){return Object(i.h)("div",{style:{border:"1px solid gray",margin:"10px 0",height:t.height+"px",width:"800px"}},Object(i.h)("bp-mocked-source-widget",{componentTag:t.componentTag,isEditing:t.isEditing,config:t.config}))})))))},t}();b.style="html{font-size:10px;font-family:'Amazon Ember', Helvetica, Arial, sans-serif}"},88:function(t,e,n){"use strict";var i,o;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return i})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(i||(i={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(o||(o={}))},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return s})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return d})),n.d(e,"h",(function(){return g}));var i=1e3,o=60*i,a=60*o,r=24*a,c=30*r,s=12*c,d=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),i=Math.floor(n/60);return{day:Math.floor(i/24),hour:i%=24,minute:n%=60,seconds:e%=60}},g=function(t,e,n){var i=n.start,c=n.end;if(e<r){var s=c.getTime()-i.getTime();return s<o?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):s<10*o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}return e<=a?t.toLocaleString("en-US",{hour:"numeric",day:"long",hour12:!0}):e<=r?t.toLocaleString("en-US",{day:"numeric",month:"long"}):t.toLocaleString("en-US",{year:"numeric",month:"long"})}},90:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(88),o={id:"fake-id",viewPort:{start:new Date(1995,0,0,0),end:new Date(2020,1,0,0),yMin:0,yMax:1e4},size:{width:475,height:350,marginLeft:50,marginRight:50,marginTop:8,marginBottom:30},movement:{enableXScroll:!0,enableYScroll:!1,zoomMax:1/0,zoomMin:1e-5},layout:{xGridVisible:!1,yGridVisible:!0,xTicksVisible:!0,yTicksVisible:!0},scale:{xScaleType:i.b.TimeSeries,yScaleType:i.b.Linear,xScaleSide:"bottom",yScaleSide:"left"},dataStreamInfo:[],legend:{position:i.a.BOTTOM,width:180}}},91:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o;!function(t){t.BLUE_MUTED="blue-MUTED",t.QUALITATIVE_MUTED="qualitative-muted"}(o||(o={}));var a=((i={})[o.BLUE_MUTED]=[["#5e87b5"],["#5e87b5","#b8c6df"],["#5e87b5","#9cb1d2","#d4dced"],["#5e87b5","#88a2c8","#aebfda","#d4dced"],["#5e87b5","#7e9bc3","#9cb1d2","#b8c6df","#d4dced"],["#5e87b5","#769dd2","#96b2dd","#b4c7e9","#d4dced","#eff2fb"]],i[o.QUALITATIVE_MUTED]=[["#5e87b5"],["#5e87b5","#e6ac8c"],["#5e87b5","#e6ac8c","#7fc6b1"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c"],["#5e87b5","#e6ac8c","#7fc6b1","#d99090","#ae779c","#f9da95"]],i),r=function(t,e){var n=a[t][e-1];if(null==n)throw new Error("Cannot add more than 6 data streams");return n}},94:function(t,e,n){"use strict";var i;n.d(e,"a",(function(){return i})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE"}(i||(i={}))}}]);
//# sourceMappingURL=stencil-monitor-demo-entry-js.571cc040.chunk.js.map