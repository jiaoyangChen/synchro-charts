(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1010:function(n,t,e){"use strict";var i,r,c,o;e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return r})),e.d(t,"c",(function(){return c})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(i||(i={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY",n.ALARM_THRESHOLD="ALARM_THRESHOLD"}(r||(r={})),function(n){n.LINEAR="linear-regression"}(c||(c={})),function(n){n.BarChart="bar-chart",n.LineChart="line-chart"}(o||(o={}))},1011:function(n,t,e){"use strict";var i,r,c,o,u;e.d(t,"a",(function(){return c})),e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return r})),e.d(t,"d",(function(){return i})),e.d(t,"e",(function(){return o})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(i||(i={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(r||(r={})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(c||(c={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(o||(o={})),o.ERROR,o.ACTIVE,o.NORMAL,o.ACKNOWLEDGED,o.SNOOZED,o.DISABLED,o.LATCHED,function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(u||(u={}))},970:function(n,t,e){"use strict";e.r(t),e.d(t,"sc_webgl_chart_standard_with_legend_on_right",(function(){return E}));var i=e(13),r=e(1011),c=e(1010),o=new Date(1998,0,0),u=new Date(2e3,0,1),a={x:new Date((o.getTime()+u.getTime())/2).getTime(),y:2500},E=function(){function n(n){Object(i.l)(this,n)}return n.prototype.render=function(){return Object(i.j)("div",null,Object(i.j)("sc-line-chart",{dataStreams:[{id:"test",color:"black",name:"test stream",data:[a],resolution:0,dataType:c.a.NUMBER}],widgetId:"widget-id",size:{height:500,width:500},legend:{width:100,position:r.c.RIGHT},viewport:{start:o,end:u,yMin:0,yMax:5e3}}),Object(i.j)("sc-webgl-context",null))},n}()}}]);