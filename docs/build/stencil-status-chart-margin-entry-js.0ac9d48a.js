(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1052:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_margin",(function(){return s}));var r,i=n(108),a=n(1071),o=n(1073),u=new Date(1998,1,0),c=new Date(1998,6,0),m={id:"test",color:"red",name:"test stream",resolution:o.f,aggregates:(r={},r[o.f]=[{x:new Date(1998,3,0,0).getTime(),y:1e3},{x:new Date(1998,4,0,0).getTime(),y:3}],r),data:[],dataType:a.a.NUMBER},d={id:"test2",color:"orange",name:"test stream2",resolution:o.f,data:[{x:new Date(1998,3,0,0).getTime(),y:2e3},{x:new Date(1998,4,0,0).getTime(),y:4}],dataType:a.a.NUMBER},s=function(){function t(t){Object(i.h)(this,t),this.data=[]}return t.prototype.render=function(){return Object(i.g)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(i.g)("monitor-status-chart",{alarms:{expires:o.f},widgetId:"widget-id",dataStreams:[m,d],viewPort:{yMin:0,yMax:5e3,start:u,end:c}}),Object(i.g)("monitor-webgl-context",null))},t}()},1071:function(t,e,n){"use strict";var r,i,a,o;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(i||(i={})),function(t){t.LINEAR="linear-regression"}(a||(a={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(o||(o={}))},1073:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return d}));var r=1e3,i=60*r,a=60*i,o=24*a,u=30*o,c=12*u,m=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},d=function(t,e,n){var r=n.start,c=n.end.getTime()-r.getTime();return e<a?c<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):c<=10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):c<=a?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):c<=o?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):c<=u?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=a?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<o?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},947:function(t,e,n){"use strict";n.r(e),n.d(e,"status_chart_margin",(function(){return s}));var r,i=n(107),a=n(68),o=n(76),u=new Date(1998,1,0),c=new Date(1998,6,0),m={id:"test",color:"red",name:"test stream",resolution:o.f,aggregates:(r={},r[o.f]=[{x:new Date(1998,3,0,0).getTime(),y:1e3},{x:new Date(1998,4,0,0).getTime(),y:3}],r),data:[],dataType:a.b.NUMBER},d={id:"test2",color:"orange",name:"test stream2",resolution:o.f,data:[{x:new Date(1998,3,0,0).getTime(),y:2e3},{x:new Date(1998,4,0,0).getTime(),y:4}],dataType:a.b.NUMBER},s=function(){function t(t){Object(i.h)(this,t),this.data=[]}return t.prototype.render=function(){return Object(i.g)("div",{id:"chart-container",style:{height:"500px",width:"500px",marginTop:"20px"}},Object(i.g)("monitor-status-chart",{alarms:{expires:o.f},widgetId:"widget-id",dataStreams:[m,d],viewPort:{yMin:0,yMax:5e3,start:u,end:c}}),Object(i.g)("monitor-webgl-context",null))},t}()}}]);