(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1010:function(e,t,n){"use strict";var i,a,r,c;n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return r})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(i||(i={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY",e.ALARM_THRESHOLD="ALARM_THRESHOLD"}(a||(a={})),function(e){e.LINEAR="linear-regression"}(r||(r={})),function(e){e.BarChart="bar-chart",e.LineChart="line-chart"}(c||(c={}))},931:function(e,t,n){"use strict";n.r(t),n.d(t,"sc_scatter_chart_tooltip_with_multiple_data_streams_and_trends",(function(){return d}));var i=n(13),a=n(1010),r=new Date(1998,0,0),c=new Date(2e3,0,1),o=[{x:new Date((3*r.getTime()+c.getTime())/4).getTime(),y:2500},{x:new Date((r.getTime()+c.getTime())/2).getTime(),y:1e3},{x:new Date((r.getTime()+3*c.getTime())/4).getTime(),y:4500}],s=[{x:new Date((3*r.getTime()+c.getTime())/4).getTime(),y:2e3},{x:new Date((r.getTime()+c.getTime())/2).getTime(),y:2500},{x:new Date((r.getTime()+3*c.getTime())/4).getTime(),y:1500}],d=function(){function e(e){Object(i.l)(this,e)}return e.prototype.render=function(){return Object(i.j)("div",null,Object(i.j)("sc-scatter-chart",{dataStreams:[{id:"test",color:"black",name:"test stream 1",data:o,resolution:0,dataType:a.a.NUMBER},{id:"test2",color:"red",name:"test stream 2",data:s,resolution:0,dataType:a.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},viewport:{start:r,end:c,yMin:0,yMax:5e3},trends:[{type:a.c.LINEAR,dataStreamId:"test"},{type:a.c.LINEAR,dataStreamId:"test2"}]}),Object(i.j)("sc-webgl-context",null))},e}()}}]);