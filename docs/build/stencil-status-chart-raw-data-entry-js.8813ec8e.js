(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1054:function(n,e,t){"use strict";t.r(e),t.d(e,"status_chart_raw_data",(function(){return E}));var r=t(108),o=t(1072),i=t(1071),c=t(1073),u=new Date(2e3,0,0),a=new Date(2e3,0,0,0,10),m="STATUS_ZERO",d="STATUS_ONE",T="STATUS_TWO",s=[{x:u.getTime(),y:m},{x:u.getTime()+5*c.c,y:d},{x:u.getTime()+6*c.c,y:T},{x:u.getTime()+6.5*c.c,y:"STATUS_THREE"}],l={y:[{value:m,color:"red",comparisonOperator:o.a.EQUAL},{value:d,color:"blue",comparisonOperator:o.a.EQUAL},{value:T,color:"green",comparisonOperator:o.a.EQUAL}]},E=function(){function n(n){Object(r.h)(this,n)}return n.prototype.render=function(){return Object(r.g)("div",null,Object(r.g)("monitor-status-chart",{alarms:{expires:c.c},dataStreams:[{id:"test",data:s,color:"black",name:"test stream 1",resolution:0,dataType:i.a.STRING}],widgetId:"test-id",size:{width:500,height:500},annotations:l,viewPort:{yMin:0,yMax:100,start:u,end:a}}),Object(r.g)("monitor-webgl-context",null))},n}()},1071:function(n,e,t){"use strict";var r,o,i,c;t.d(e,"a",(function(){return r})),t.d(e,"b",(function(){return o})),t.d(e,"c",(function(){return i})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(o||(o={})),function(n){n.LINEAR="linear-regression"}(i||(i={})),function(n){n.BarChart="bar-chart",n.LineChart="line-chart"}(c||(c={}))},1072:function(n,e,t){"use strict";var r,o,i,c,u;t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return u})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return c})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(r||(r={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(o||(o={})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(i||(i={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(c||(c={})),c.ERROR,c.ACTIVE,c.NORMAL,c.ACKNOWLEDGED,c.SNOOZED,c.DISABLED,c.LATCHED,function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(u||(u={}))},1073:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return o})),t.d(e,"d",(function(){return r})),t.d(e,"e",(function(){return a})),t.d(e,"f",(function(){return u})),t.d(e,"g",(function(){return m})),t.d(e,"h",(function(){return d}));var r=1e3,o=60*r,i=60*o,c=24*i,u=30*c,a=12*u,m=function(n){if(n<0)throw new Error("Time cannot be negative!");var e=Math.floor(n/1e3),t=Math.floor(e/60),r=Math.floor(t/60);return{day:Math.floor(r/24),hour:r%=24,minute:t%=60,seconds:e%=60}},d=function(n,e,t){var r=t.start,a=t.end.getTime()-r.getTime();return e<i?a<o?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):a<=10*o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):a<=i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):a<=c?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):a<=u?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=i?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<c?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},949:function(n,e,t){"use strict";t.r(e),t.d(e,"status_chart_raw_data",(function(){return E}));var r=t(107),o=t(53),i=t(68),c=t(76),u=new Date(2e3,0,0),a=new Date(2e3,0,0,0,10),m="STATUS_ZERO",d="STATUS_ONE",T="STATUS_TWO",s=[{x:u.getTime(),y:m},{x:u.getTime()+5*c.c,y:d},{x:u.getTime()+6*c.c,y:T},{x:u.getTime()+6.5*c.c,y:"STATUS_THREE"}],l={y:[{value:m,color:"red",comparisonOperator:o.a.EQUAL},{value:d,color:"blue",comparisonOperator:o.a.EQUAL},{value:T,color:"green",comparisonOperator:o.a.EQUAL}]},E=function(){function n(n){Object(r.h)(this,n)}return n.prototype.render=function(){return Object(r.g)("div",null,Object(r.g)("monitor-status-chart",{alarms:{expires:c.c},dataStreams:[{id:"test",data:s,color:"black",name:"test stream 1",resolution:0,dataType:i.b.STRING}],widgetId:"test-id",size:{width:500,height:500},annotations:l,viewPort:{yMin:0,yMax:100,start:u,end:a}}),Object(r.g)("monitor-webgl-context",null))},n}()}}]);