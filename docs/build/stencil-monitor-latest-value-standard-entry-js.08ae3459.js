(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{1071:function(n,t,e){"use strict";var r,o,i,u;e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),function(n){n.NUMBER="NUMBER",n.STRING="STRING",n.BOOLEAN="BOOLEAN"}(r||(r={})),function(n){n.ALARM="ALARM",n.ANOMALY="ANOMALY"}(o||(o={})),function(n){n.LINEAR="linear-regression"}(i||(i={})),function(n){n.BarChart="bar-chart",n.LineChart="line-chart"}(u||(u={}))},1072:function(n,t,e){"use strict";var r,o,i,u,a;e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return u})),function(n){n.TimeSeries="time-series",n.Log="log",n.Linear="linear"}(r||(r={})),function(n){n.RIGHT="RIGHT",n.BOTTOM="BOTTOM"}(o||(o={})),function(n){n.LESS_THAN="LT",n.GREATER_THAN="GT",n.LESS_THAN_EQUAL="LTE",n.GREATER_THAN_EQUAL="GTE",n.EQUAL="EQ"}(i||(i={})),function(n){n.ERROR="error",n.ACTIVE="active",n.NORMAL="normal",n.ACKNOWLEDGED="acknowledged",n.SNOOZED="snoozed",n.DISABLED="disabled",n.LATCHED="latched"}(u||(u={})),u.ERROR,u.ACTIVE,u.NORMAL,u.ACKNOWLEDGED,u.SNOOZED,u.DISABLED,u.LATCHED,function(n){n.EITHER="EITHER",n.RIGHT="RIGHT",n.LEFT="LEFT"}(a||(a={}))},1073:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return o})),e.d(t,"d",(function(){return r})),e.d(t,"e",(function(){return c})),e.d(t,"f",(function(){return a})),e.d(t,"g",(function(){return d})),e.d(t,"h",(function(){return m}));var r=1e3,o=60*r,i=60*o,u=24*i,a=30*u,c=12*a,d=function(n){if(n<0)throw new Error("Time cannot be negative!");var t=Math.floor(n/1e3),e=Math.floor(t/60),r=Math.floor(e/60);return{day:Math.floor(r/24),hour:r%=24,minute:e%=60,seconds:t%=60}},m=function(n,t,e){var r=e.start,c=e.end.getTime()-r.getTime();return t<i?c<o?n.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*o?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=i?n.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=u?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=a?n.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):n.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):t<=i?n.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):t<u?n.toLocaleString("en-US",{day:"numeric",month:"numeric"}):n.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},1074:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"d",(function(){return u})),e.d(t,"e",(function(){return a}));var r="-",o="No properties or alarms",i="This widget doesn't have any properties or alarms.",u="No data",a="There's no data to display for this time range."},1093:function(n,t,e){"use strict";e(1072),e(1071),e(1074),e(1073)},875:function(n,t,e){"use strict";e.r(t),e.d(t,"monitor_latest_value_standard",(function(){return s}));var r=e(107),o=(e(53),e(68)),i=(e(59),e(147),e(76)),u=new URLSearchParams(window.location.search).get("numDataPoints")||"1",a=Number.parseInt(u,10),c=new Date(1998,0,0),d=new Date(2e3,0,1),m=new Array(a).fill(null).map((function(n,t){return{x:c.getTime()+i.f*(t+1),y:0+100*(t+1)}})),s=function(){function n(n){Object(r.h)(this,n)}return n.prototype.render=function(){return Object(r.g)("monitor-latest-value",{dataStreams:[{id:"test",color:"black",name:"test stream",data:m,resolution:0,dataType:o.b.NUMBER}],viewPort:{start:c,end:d,yMin:0,yMax:5e3,duration:i.f}})},n}()},980:function(n,t,e){"use strict";e.r(t),e.d(t,"monitor_latest_value_standard",(function(){return s}));var r=e(108),o=(e(1072),e(1071)),i=(e(1074),e(1093),e(1073)),u=new URLSearchParams(window.location.search).get("numDataPoints")||"1",a=Number.parseInt(u,10),c=new Date(1998,0,0),d=new Date(2e3,0,1),m=new Array(a).fill(null).map((function(n,t){return{x:c.getTime()+i.f*(t+1),y:0+100*(t+1)}})),s=function(){function n(n){Object(r.h)(this,n)}return n.prototype.render=function(){return Object(r.g)("monitor-latest-value",{dataStreams:[{id:"test",color:"black",name:"test stream",data:m,resolution:0,dataType:o.a.NUMBER}],viewPort:{start:c,end:d,yMin:0,yMax:5e3,duration:i.f}})},n}()}}]);