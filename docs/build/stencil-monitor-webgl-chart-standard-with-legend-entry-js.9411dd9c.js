(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1034:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_standard_with_legend",(function(){return d}));var i=n(108),r=n(1072),o=n(1071),c=new Date(1998,0,0),a=new Date(2e3,0,1),u={x:new Date((c.getTime()+a.getTime())/2).getTime(),y:2500},d=function(){function t(t){Object(i.h)(this,t)}return t.prototype.render=function(){return Object(i.g)("div",null,Object(i.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[u],resolution:0,dataType:o.a.NUMBER}],size:{height:500,width:500},viewPort:{start:c,end:a,yMin:0,yMax:5e3},legend:{position:r.c.BOTTOM,width:300}}),Object(i.g)("monitor-webgl-context",null))},t}()},1071:function(t,e,n){"use strict";var i,r,o,c;n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(i||(i={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(r||(r={})),function(t){t.LINEAR="linear-regression"}(o||(o={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(c||(c={}))},1072:function(t,e,n){"use strict";var i,r,o,c,a;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return c})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(i||(i={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(r||(r={})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(o||(o={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(c||(c={})),c.ERROR,c.ACTIVE,c.NORMAL,c.ACKNOWLEDGED,c.SNOOZED,c.DISABLED,c.LATCHED,function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(a||(a={}))},929:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_chart_standard_with_legend",(function(){return d}));var i=n(107),r=n(53),o=n(68),c=new Date(1998,0,0),a=new Date(2e3,0,1),u={x:new Date((c.getTime()+a.getTime())/2).getTime(),y:2500},d=function(){function t(t){Object(i.h)(this,t)}return t.prototype.render=function(){return Object(i.g)("div",null,Object(i.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[u],resolution:0,dataType:o.b.NUMBER}],size:{height:500,width:500},viewPort:{start:c,end:a,yMin:0,yMax:5e3},legend:{position:r.c.BOTTOM,width:300}}),Object(i.g)("monitor-webgl-context",null))},t}()}}]);