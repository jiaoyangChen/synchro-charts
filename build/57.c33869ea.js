(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{1010:function(t,n,e){"use strict";var i,r,a,o;e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return a})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(i||(i={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY",t.ALARM_THRESHOLD="ALARM_THRESHOLD"}(r||(r={})),function(t){t.LINEAR="linear-regression"}(a||(a={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(o||(o={}))},1011:function(t,n,e){"use strict";var i,r,a,o,c;e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return i})),e.d(n,"e",(function(){return o})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(i||(i={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(r||(r={})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(a||(a={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(o||(o={})),o.ERROR,o.ACTIVE,o.NORMAL,o.ACKNOWLEDGED,o.SNOOZED,o.DISABLED,o.LATCHED,function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(c||(c={}))},1019:function(t,n,e){"use strict";e.d(n,"a",(function(){return d})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return i})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return o})),e(1011);var i=0,r=5e3,a=new Date(2e3,0,0,0,0),o=new Date(2e3,0,0,0,10),c=2500,d=(new Date(a.getTime()+1/3*(o.getTime()-a.getTime())),{x:(a.getTime()+o.getTime())/2,y:c})},981:function(t,n,e){"use strict";e.r(n),e.d(n,"sc_webgl_line_chart_dynamic_data",(function(){return u}));var i=e(13),r=(e(1011),e(1010)),a=e(1019),o=new Date(1998,0,0),c=new Date(2e3,0,1),d=c.getTime()-o.getTime(),u=function(){function t(t){var n=this;Object(i.l)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(o.getTime()+d/(2+n.data.length)).getTime(),y:a.c};n.data=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var i=Array(t),r=0;for(n=0;n<e;n++)for(var a=arguments[n],o=0,c=a.length;o<c;o++,r++)i[r]=a[o];return i}([t],n.data)},this.removeDataPoint=function(){var t=n.data,e=(t[0],t.slice(1));n.data=e}}return t.prototype.render=function(){return Object(i.j)("div",{class:"synchro-chart-tests"},Object(i.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(i.j)("button",{id:"remove-data-point",onClick:this.removeDataPoint},"Remove Data Point"),Object(i.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(i.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"red",name:"test stream",data:this.data,resolution:0,dataType:r.a.NUMBER}],size:{height:500,width:500},viewport:{start:o,end:c,yMin:0,yMax:5e3}}),Object(i.j)("sc-webgl-context",null)))},t}()}}]);