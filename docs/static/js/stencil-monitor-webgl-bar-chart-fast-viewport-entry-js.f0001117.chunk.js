(this["webpackJsonpmonitor-components-doc-site"]=this["webpackJsonpmonitor-components-doc-site"]||[]).push([[38],{62:function(t,e,n){"use strict";n.r(e),n.d(e,"monitor_webgl_bar_chart_fast_viewport",(function(){return u}));var r=n(2),i=n(89),o=new Date(1999,9,0,0,0),a=new Date(2e3,2,0,0,10),c=Array.from({length:50},(function(t,e){return{x:new Date(2e3,0,e,0,0),y:2500}})),u=function(){function t(t){var e=this;Object(r.i)(this,t),this.dataStreams=[],this.dataStreamInfo=[],this.colorIndex=0,this.start=o,this.end=a,this.idx=0,this.timeRange=[[new Date(2e3,2,0,0,0),new Date(2e3,3,0,0,0)],[new Date(2010,4,0,0,0),new Date(2020,5,0,0,0)],[new Date(2030,6,0,0,0),new Date(2040,7,0,0,0)],[o,a]],this.changeViewport=function(){var t=e.timeRange[e.idx%e.timeRange.length],n=t[0],r=t[1];e.start=n,e.end=r,e.idx+=1}}return t.prototype.render=function(){return Object(r.h)("div",null,Object(r.h)("button",{id:"change-viewport",onClick:this.changeViewport},"Change Viewport"),Object(r.h)("br",null),Object(r.h)("br",null),Object(r.h)("div",{id:"chart-container",style:{border:"1px solid lightgray",height:"500px",width:"500px"}},Object(r.h)("monitor-bar-chart",{data:[{id:"test",data:c,resolution:i.b}],config:{id:"test-id",size:{height:500,width:500},dataStreamInfo:[{id:"test",color:"#264653",name:"test stream"}],viewPort:{yMin:0,yMax:5e3,start:this.start,end:this.end}}}),Object(r.h)("monitor-webgl-context",null)))},t}()},89:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return s}));var r=1e3,i=60*r,o=60*i,a=24*o,c=30*a,u=12*c,h=function(t){if(t<0)throw new Error("Time cannot be negative!");var e=Math.floor(t/1e3),n=Math.floor(e/60),r=Math.floor(n/60);return{day:Math.floor(r/24),hour:r%=24,minute:n%=60,seconds:e%=60}},s=function(t,e,n){var r=n.start,c=n.end;if(e<a){var u=c.getTime()-r.getTime();return u<i?t.toLocaleString("en-US",{minute:"numeric",second:"numeric"}):u<10*i?t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",second:"numeric",hour12:!0}):t.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}return e<=o?t.toLocaleString("en-US",{hour:"numeric",day:"long",hour12:!0}):e<=a?t.toLocaleString("en-US",{day:"numeric",month:"long"}):t.toLocaleString("en-US",{year:"numeric",month:"long"})}}}]);
//# sourceMappingURL=stencil-monitor-webgl-bar-chart-fast-viewport-entry-js.f0001117.chunk.js.map