(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1010:function(t,n,e){"use strict";var a,i,r,c;e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(a||(a={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY",t.ALARM_THRESHOLD="ALARM_THRESHOLD"}(i||(i={})),function(t){t.LINEAR="linear-regression"}(r||(r={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(c||(c={}))},979:function(t,n,e){"use strict";e.r(n),e.d(n,"sc_webgl_line_chart_dynamic_buffer",(function(){return d}));var a=e(13),i=e(1010),r=new Date(1998,0,0),c=new Date(2e3,0,1),o=c.getTime()-r.getTime(),d=function(){function t(t){var n=this;Object(a.l)(this,t),this.data=[],this.addDataPoint=function(){var t={x:new Date(r.getTime()+o/(2+n.data.length)).getTime(),y:2500};n.data=function(){for(var t=0,n=0,e=arguments.length;n<e;n++)t+=arguments[n].length;var a=Array(t),i=0;for(n=0;n<e;n++)for(var r=arguments[n],c=0,o=r.length;c<o;c++,i++)a[i]=r[c];return a}([t],n.data)}}return t.prototype.render=function(){return Object(a.j)("div",{class:"synchro-chart-tests"},Object(a.j)("button",{id:"add-data-point",onClick:this.addDataPoint},"Add Data Point"),Object(a.j)("div",{id:"chart-container",style:{marginTop:"20px",width:"500px",height:"500px"}},Object(a.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.data,resolution:0,dataType:i.a.NUMBER}],size:{height:500,width:500},viewport:{start:r,end:c,yMin:0,yMax:5e3},bufferFactor:1,minBufferSize:1}),Object(a.j)("sc-webgl-context",null)))},t}()}}]);