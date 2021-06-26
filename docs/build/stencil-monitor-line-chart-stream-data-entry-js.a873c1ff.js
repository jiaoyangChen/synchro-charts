(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1071:function(t,e,n){"use strict";var r,i,o,a;n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(r||(r={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY"}(i||(i={})),function(t){t.LINEAR="linear-regression"}(o||(o={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(a||(a={}))},1073:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return s})),n.d(e,"h",(function(){return d}));var r=1e3,i=60*r,o=60*i,a=24*o,c=30*a,u=12*c,s=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},d=function(t,e,n){var r=n.start,u=n.end.getTime()-r.getTime();return e<o?u<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):u<=10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):u<=o?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}):u<=a?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",month:"numeric",minute:"numeric",day:"numeric"}):u<=c?t.toLocaleString("en-US",{hour12:!0,hour:"numeric",year:"numeric",month:"numeric",day:"numeric"}):t.toLocaleString("en-US",{day:"numeric",month:"numeric",year:"numeric"}):e<=o?t.toLocaleString("en-US",{hour:"numeric",day:"numeric",month:"numeric",hour12:!0}):e<a?t.toLocaleString("en-US",{day:"numeric",month:"numeric"}):t.toLocaleString("en-US",{year:"numeric",month:"numeric",day:"numeric"})}},878:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_line_chart_stream_data",(function(){return g}));var r=n(107),i=n(68),o=n(76),a=new Date(1998,0,0),c=new Date(2e3,0,1),u={x:(a.getTime()+c.getTime())/2,y:2500},s=new URLSearchParams(window.location.search),d=s.get("dataPerRound"),h=s.get("roundFrequency"),m=s.get("viewPortSpeed"),w=d?Number.parseInt(d,10):1,l=h?Number.parseInt(h,10):o.d,f=m?Number.parseInt(m,10):0,g=function(){function t(t){var e=this;Object(r.h)(this,t),this.dataPoints=[u],this.viewPort={start:a,end:c,yMin:0,yMax:5e3},this.viewPortLoop=function(){return window.requestAnimationFrame((function(){e.viewPort=Object.assign(Object.assign({},e.viewPort),{start:new Date(e.viewPort.start.getTime()+f),end:new Date(e.viewPort.end.getTime()+f)}),e.viewPortShifter=e.viewPortLoop()}))}}return t.prototype.componentWillLoad=function(){var t=this;f>0&&(this.viewPortShifter=this.viewPortLoop()),this.dataLoop=window.setInterval((function(){t.dataPoints=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r}(t.dataPoints,function(t){return new Array(w).fill(0).map((function(e,n){return{x:t.x,y:t.y+n}}))}({x:(t.dataPoints[t.dataPoints.length-1].x+c.getTime())/2,y:u.y}))}),l)},t.prototype.disconnectedCallback=function(){clearInterval(this.dataLoop),null!=this.viewPortShifter&&window.cancelAnimationFrame(this.viewPortShifter)},t.prototype.render=function(){return Object(r.g)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.dataPoints,resolution:0,dataType:i.b.NUMBER}],size:{height:500,width:500},viewPort:this.viewPort}),Object(r.g)("monitor-webgl-context",null))},t}()},983:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_line_chart_stream_data",(function(){return g}));var r=n(108),i=n(1071),o=n(1073),a=new Date(1998,0,0),c=new Date(2e3,0,1),u={x:(a.getTime()+c.getTime())/2,y:2500},s=new URLSearchParams(window.location.search),d=s.get("dataPerRound"),h=s.get("roundFrequency"),m=s.get("viewPortSpeed"),w=d?Number.parseInt(d,10):1,l=h?Number.parseInt(h,10):o.d,f=m?Number.parseInt(m,10):0,g=function(){function t(t){var e=this;Object(r.h)(this,t),this.dataPoints=[u],this.viewPort={start:a,end:c,yMin:0,yMax:5e3},this.viewPortLoop=function(){return window.requestAnimationFrame((function(){e.viewPort=Object.assign(Object.assign({},e.viewPort),{start:new Date(e.viewPort.start.getTime()+f),end:new Date(e.viewPort.end.getTime()+f)}),e.viewPortShifter=e.viewPortLoop()}))}}return t.prototype.componentWillLoad=function(){var t=this;f>0&&(this.viewPortShifter=this.viewPortLoop()),this.dataLoop=window.setInterval((function(){t.dataPoints=function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var o=arguments[e],a=0,c=o.length;a<c;a++,i++)r[i]=o[a];return r}(t.dataPoints,function(t){return new Array(w).fill(0).map((function(e,n){return{x:t.x,y:t.y+n}}))}({x:(t.dataPoints[t.dataPoints.length-1].x+c.getTime())/2,y:u.y}))}),l)},t.prototype.disconnectedCallback=function(){clearInterval(this.dataLoop),null!=this.viewPortShifter&&window.cancelAnimationFrame(this.viewPortShifter)},t.prototype.render=function(){return Object(r.g)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.g)("monitor-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:this.dataPoints,resolution:0,dataType:i.a.NUMBER}],size:{height:500,width:500},viewPort:this.viewPort}),Object(r.g)("monitor-webgl-context",null))},t}()}}]);