(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{1010:function(t,e,n){"use strict";var a,i,o,s;n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),function(t){t.NUMBER="NUMBER",t.STRING="STRING",t.BOOLEAN="BOOLEAN"}(a||(a={})),function(t){t.ALARM="ALARM",t.ANOMALY="ANOMALY",t.ALARM_THRESHOLD="ALARM_THRESHOLD"}(i||(i={})),function(t){t.LINEAR="linear-regression"}(o||(o={})),function(t){t.BarChart="bar-chart",t.LineChart="line-chart"}(s||(s={}))},1011:function(t,e,n){"use strict";var a,i,o,s,c;n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return s})),function(t){t.TimeSeries="time-series",t.Log="log",t.Linear="linear"}(a||(a={})),function(t){t.RIGHT="RIGHT",t.BOTTOM="BOTTOM"}(i||(i={})),function(t){t.LESS_THAN="LT",t.GREATER_THAN="GT",t.LESS_THAN_EQUAL="LTE",t.GREATER_THAN_EQUAL="GTE",t.EQUAL="EQ"}(o||(o={})),function(t){t.ERROR="error",t.ACTIVE="active",t.NORMAL="normal",t.ACKNOWLEDGED="acknowledged",t.SNOOZED="snoozed",t.DISABLED="disabled",t.LATCHED="latched"}(s||(s={})),s.ERROR,s.ACTIVE,s.NORMAL,s.ACKNOWLEDGED,s.SNOOZED,s.DISABLED,s.LATCHED,function(t){t.EITHER="EITHER",t.RIGHT="RIGHT",t.LEFT="LEFT"}(c||(c={}))},962:function(t,e,n){"use strict";n.r(e),n.d(e,"sc_webgl_chart_annotation_editable",(function(){return O}));var a,i=n(13),o=n(1011),s=n(1010),c=new Date(1998,0,0),l=new Date(2001,0,1),r={x:new Date(1999,0,0).getTime(),y:2e3},u={x:new Date(2e3,0,0).getTime(),y:4e3},h={x:new Date(1999,0,0).getTime(),y:4e3},d={x:new Date(2e3,0,0).getTime(),y:2e3},b={isEditable:!0,comparisonOperator:o.a.GREATER_THAN,value:3800,label:{text:"here is a y label",show:!0},showValue:!0,color:"blue",id:"blue-threshold"},E={isEditable:!0,value:3200,label:{text:"another y label",show:!0},showValue:!0,color:"green",id:"green-anotation"},O=function(){function t(t){var e=this;Object(i.l)(this,t),this.isEditableValue=!1,this.isShowValue=!0,this.annotations={x:[{value:new Date((l.getTime()+c.getTime())/2),label:{text:"here is a x label",show:!0},showValue:!0,color:"purple"}],y:[Object.assign(Object.assign({},E),{isEditable:!this.isEditableValue,showValue:this.isShowValue}),Object.assign(Object.assign({},b),{isEditable:!this.isEditableValue,showValue:!this.isShowValue}),Object.assign(Object.assign({},E),{isEditable:this.isEditableValue,value:2300,color:"red",showValue:this.isShowValue,id:"red-annotation"})]},this.changeValue=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{value:a.y.find((function(e){return e.id===t.id})).value})}))})},this.onEditableChange=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{isEditable:!t.isEditable})}))})},this.onShowValueChange=function(){var t=e.annotations.y;e.annotations=Object.assign(Object.assign({},e.annotations),{y:t.map((function(t){return Object.assign(Object.assign({},t),{showValue:!t.showValue})}))})}}return t.prototype.onWidgetUpdated=function(t){var e=t.detail;this.annotations=e.annotations,a=this.annotations},t.prototype.componentDidLoad=function(){a=this.annotations,setInterval(this.changeValue,1e3)},t.prototype.render=function(){return Object(i.j)("div",{class:"synchro-chart-tests",style:{width:"1000px",height:"1000px"}},Object(i.j)("div",null,Object(i.j)("button",{id:"change-editable",onClick:this.onEditableChange},"Change Editable")),Object(i.j)("div",null,Object(i.j)("button",{id:"change-showvalue",onClick:this.onShowValueChange},"Change Show Value")),Object(i.j)("div",null,Object(i.j)("sc-line-chart",{widgetId:"widget-id",dataStreams:[{id:"test",color:"black",name:"test stream",data:[r,u],resolution:0,dataType:s.a.NUMBER},{id:"test2",color:"orange",name:"test stream2",data:[h,d],resolution:0,dataType:s.a.NUMBER}],annotations:this.annotations,viewport:{start:c,end:l},size:{height:1e3,width:1e3}}),Object(i.j)("sc-webgl-context",null)))},t}()}}]);