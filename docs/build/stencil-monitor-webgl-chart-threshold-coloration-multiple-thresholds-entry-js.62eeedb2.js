(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1039:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_webgl_chart_threshold_coloration_multiple_thresholds",(function(){return E}));var o=n(109),r=n(1072),a=n(1071),i=new Date(1998,0,0),l=new Date(2001,0,1),c={x:new Date(1999,0,0).getTime(),y:2e3},u={x:new Date(2e3,0,0).getTime(),y:4e3},s={x:new Date(1999,0,0).getTime(),y:4e3},d={x:new Date(2e3,0,0).getTime(),y:2e3},E=function(){function e(e){Object(o.h)(this,e)}return e.prototype.render=function(){return Object(o.g)("div",null,Object(o.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c,u],resolution:0,dataType:a.a.NUMBER},{id:"test2",color:"red",name:"test stream2",data:[s,d],resolution:0,dataType:a.a.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:r.a.GREATER_THAN_EQUAL},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:r.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:i,end:l,yMin:0,yMax:5e3}}),Object(o.g)("monitor-webgl-context",null))},e}()},1071:function(e,t,n){"use strict";var o,r,a,i;n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),function(e){e.NUMBER="NUMBER",e.STRING="STRING",e.BOOLEAN="BOOLEAN"}(o||(o={})),function(e){e.ALARM="ALARM",e.ANOMALY="ANOMALY"}(r||(r={})),function(e){e.LINEAR="linear-regression"}(a||(a={})),function(e){e.BarChart="bar-chart",e.LineChart="line-chart"}(i||(i={}))},1072:function(e,t,n){"use strict";var o,r,a,i,l;n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"e",(function(){return i})),function(e){e.TimeSeries="time-series",e.Log="log",e.Linear="linear"}(o||(o={})),function(e){e.RIGHT="RIGHT",e.BOTTOM="BOTTOM"}(r||(r={})),function(e){e.LESS_THAN="LT",e.GREATER_THAN="GT",e.LESS_THAN_EQUAL="LTE",e.GREATER_THAN_EQUAL="GTE",e.EQUAL="EQ"}(a||(a={})),function(e){e.ERROR="error",e.ACTIVE="active",e.NORMAL="normal",e.ACKNOWLEDGED="acknowledged",e.SNOOZED="snoozed",e.DISABLED="disabled",e.LATCHED="latched"}(i||(i={})),i.ERROR,i.ACTIVE,i.NORMAL,i.ACKNOWLEDGED,i.SNOOZED,i.DISABLED,i.LATCHED,function(e){e.EITHER="EITHER",e.RIGHT="RIGHT",e.LEFT="LEFT"}(l||(l={}))},934:function(e,t,n){"use strict";n.r(t),n.d(t,"monitor_webgl_chart_threshold_coloration_multiple_thresholds",(function(){return E}));var o=n(108),r=n(54),a=n(68),i=new Date(1998,0,0),l=new Date(2001,0,1),c={x:new Date(1999,0,0).getTime(),y:2e3},u={x:new Date(2e3,0,0).getTime(),y:4e3},s={x:new Date(1999,0,0).getTime(),y:4e3},d={x:new Date(2e3,0,0).getTime(),y:2e3},E=function(){function e(e){Object(o.h)(this,e)}return e.prototype.render=function(){return Object(o.g)("div",null,Object(o.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[c,u],resolution:0,dataType:a.b.NUMBER},{id:"test2",color:"red",name:"test stream2",data:[s,d],resolution:0,dataType:a.b.NUMBER}],annotations:{y:[{value:3500,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:r.a.GREATER_THAN_EQUAL},{value:2500,label:{text:"y label",show:!0},showValue:!0,color:"purple",comparisonOperator:r.a.GREATER_THAN_EQUAL}]},size:{height:500,width:500},viewPort:{start:i,end:l,yMin:0,yMax:5e3}}),Object(o.g)("monitor-webgl-context",null))},e}()}}]);