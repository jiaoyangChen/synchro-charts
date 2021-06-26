(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1056:function(t,n,e){"use strict";e.r(n),e.d(n,"status_chart_threshold_coloration_band",(function(){return f}));var r=e(108),o=e(1072),i=e(1071),u=e(1073),c=e(1082),a=new URLSearchParams(window.location.search),s=a.get("isDiscreteNumericData"),d=a.get("isStringData"),l=c.a,m="1"===s?i.a.STRING:i.a.NUMBER;l.y=2e3,"1"===s&&(l.y=2e3),"1"===d&&(l.y="test");var f=function(){function t(t){Object(r.h)(this,t)}return t.prototype.render=function(){var t;return Object(r.g)("div",null,Object(r.g)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(t={},t[u.c]=[l],t),data:[],resolution:u.c,dataType:m}],annotations:{y:[{value:d?"test":2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:o.a.EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:c.d,yMax:c.e,start:c.b,end:c.f}}),Object(r.g)("monitor-webgl-context",null))},t}()},1071:function(t,n,e){"use strict";var r,o,i,u;e.d(n,"a",(function(){return r})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return i})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(o||(o={})),function(t){t.LINEAR="linear-regression"}(i||(i={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(u||(u={}))},1072:function(t,n,e){"use strict";var r,o,i,u,c;e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return c})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return u})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(r||(r={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(o||(o={})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(i||(i={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(u||(u={})),u.ERROR,u.ACTIVE,u.NORMAL,u.ACKNOWLEDGED,u.SNOOZED,u.DISABLED,u.LATCHED,function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(c||(c={}))},1073:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return o})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return a})),e.d(n,"f",(function(){return c})),e.d(n,"g",(function(){return s})),e.d(n,"h",(function(){return d}));var r=1e3,o=60*r,i=60*o,u=24*i,c=30*u,a=12*c,s=function(t){if(t<0)throw new Error("Time cannot be negative!");var n=Math.floor(t/1e3),e=Math.floor(n/60),r=Math.floor(e/60);return{day:Math.floor(r/24),hour:r%=24,minute:e%=60,seconds:n%=60}},d=function(t,n,e){var r=e.start,a=e.end.getTime()-r.getTime();return n<i?a<o?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):a<=10*o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):a<=i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):a<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):a<=c?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):n<=i?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):n<u?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1081:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),c=2500,a={x:(i.getTime()+u.getTime())/2,y:c}},1082:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return c})),e.d(n,"d",(function(){return r})),e.d(n,"e",(function(){return o})),e.d(n,"f",(function(){return u}));var r=0,o=5e3,i=new Date(2e3,0,0,0,0),u=new Date(2e3,0,0,0,10),c=2500,a={x:(i.getTime()+u.getTime())/2,y:c}},951:function(t,n,e){"use strict";e.r(n),e.d(n,"status_chart_threshold_coloration_band",(function(){return f}));var r=e(107),o=e(53),i=e(68),u=e(76),c=e(1081),a=new URLSearchParams(window.location.search),s=a.get("isDiscreteNumericData"),d=a.get("isStringData"),l=c.a,m="1"===s?i.b.STRING:i.b.NUMBER;l.y=2e3,"1"===s&&(l.y=2e3),"1"===d&&(l.y="test");var f=function(){function t(t){Object(r.h)(this,t)}return t.prototype.render=function(){var t;return Object(r.g)("div",null,Object(r.g)("monitor-status-chart",{alarms:{expires:u.c},dataStreams:[{id:"test",color:"black",name:"test stream",aggregates:(t={},t[u.c]=[l],t),data:[],resolution:u.c,dataType:m}],annotations:{y:[{value:d?"test":2e3,label:{text:"y label",show:!0},showValue:!0,color:"blue",comparisonOperator:o.a.EQUAL}],thresholdOptions:{showColor:!0}},widgetId:"test-id",size:{width:500,height:500},viewPort:{yMin:c.d,yMax:c.e,start:c.b,end:c.f}}),Object(r.g)("monitor-webgl-context",null))},t}()}}]);