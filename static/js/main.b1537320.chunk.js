(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(28)},28:function(e,t,n){"use strict";n.r(t);var r,o=n(0),a=n.n(o),c=n(14),i=n.n(c),l=n(3),d=n(11),u=n(7),m=function(e){var t=e.id,n=e.index,r=e.moveCard,a=e.parentIndex,c=(e.color,e.children),i=e.type,d=Object(o.useRef)(null),m=Object(u.c)({accept:"".concat(i,"-").concat(a),hover:function(e,t){if(d.current){var o=e.index,a=n;if(o!==a){var c=d.current.getBoundingClientRect(),i=(c.bottom-c.top)/2,l=t.getClientOffset().y-c.top;o<a&&l<i||o>a&&l>i||(r(o,a),e.index=a)}}}}),s=Object(l.a)(m,2)[1],b=Object(u.b)({item:{type:"".concat(i,"-").concat(a),id:t,index:n},collect:function(e){return{isDragging:e.isDragging()}}}),g=Object(l.a)(b,2),p=g[0].isDragging;return(0,g[1])(s(d)),"function"===typeof c?c(d,p):null},s=n(8),b=n.n(s);!function(e){e.BODY="BODY",e.ROW="ROW"}(r||(r={}));var g={width:400},p={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},f=function(e){var t=Object(o.useState)([{id:1,text:"Write a cool JS library"},{id:2,text:"Make it generic enough"},{id:3,text:"Write README"},{id:4,text:"Create some examples"},{id:5,text:"Spam in Twitter and IRC to promote it \n(note that this element is taller than the others)"},{id:6,text:"???"},{id:7,text:"PROFIT"}]),n=Object(l.a)(t,2),c=n[0],i=n[1],u=Object(o.useCallback)(function(e,t){var n=c[e];i(b()(c,{$splice:[[e,1],[t,0,n]]}))},[c]);return a.a.createElement(m,{index:e.index,id:e.id,moveCard:e.moveCard,parentIndex:-1,color:e.color,type:r.BODY},function(t,n){var o=n?0:1;return a.a.createElement("tbody",{ref:t,style:Object(d.a)({backgroundColor:e.color},g,{opacity:o})},a.a.createElement("tr",null,a.a.createElement("td",{style:{fontWeight:"bold"}},"Header ",e.index+1),a.a.createElement("td",null,"some"),a.a.createElement("td",null,"extra"),a.a.createElement("td",null,"columns")),c.map(function(t,n){return a.a.createElement(m,{key:t.id,index:n,id:t.id,moveCard:u,parentIndex:e.index,color:e.color,type:r.ROW},function(n,r){var o=r?0:1;return a.a.createElement("tr",{ref:n,style:Object(d.a)({backgroundColor:e.color},p,{opacity:o})},a.a.createElement("td",{style:{backgroundColor:e.color}},t.text.split("\n").map(function(e){return a.a.createElement("div",{key:e},e)})),a.a.createElement("td",{style:{backgroundColor:e.color}},"111"),a.a.createElement("td",{style:{backgroundColor:e.color}},"222"),a.a.createElement("td",{style:{backgroundColor:e.color}},"333"))})}))})};var v=function(){var e=Object(o.useState)([{id:1,color:"lightgray"},{id:2,color:"skyblue"}]),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(o.useCallback)(function(e,t){var o=n[e];r(b()(n,{$splice:[[e,1],[t,0,o]]}))},[n]);return a.a.createElement("table",null,n.map(function(e,t){return a.a.createElement(f,{key:e.id,color:e.color,index:t,id:e.id,moveCard:c})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(16);i.a.render(a.a.createElement(u.a,{backend:x.a},a.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.b1537320.chunk.js.map