(window["webpackJsonpdev-front"]=window["webpackJsonpdev-front"]||[]).push([[0],{143:function(e,t,a){e.exports=a(247)},149:function(e,t){},151:function(e,t){},185:function(e,t){},186:function(e,t){},237:function(e,t,a){},242:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){},247:function(e,t,a){"use strict";a.r(t);a(144);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(237),a(16)),l=a(132),s=a(49),m=a(34),u=a(269),d=a(270),w=a(272),p=a(59),f=a(275),g=a(273),E=a(124),h=a.n(E),b=a(125),v=a.n(b),y=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function O(e){var t=y();return r.a.createElement("div",{className:t.root},r.a.createElement(d.a,{position:"static"},r.a.createElement(w.a,null,r.a.createElement(g.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:e.toggleDrawer("left",!0)},r.a.createElement(h.a,null)),r.a.createElement(p.a,{variant:"h6",className:t.title},"Camera App"),r.a.createElement(f.a,{color:"inherit",onClick:e.toggleDrawer("right",!0)},r.a.createElement(v.a,null)))))}var j=a(281),D=a(276),k=a(280),P=a(277),x=a(278),F=a(279),C=a(128),N=a.n(C),S=a(127),R=a.n(S),A=(a(242),Object(u.a)({list:{width:250}})),B=function(e){var t=A(),a=e.side,n=e.toggleDrawer;return r.a.createElement("div",{id:"DrawerListLeft",className:t.list,role:"presentation",onClick:n(a,!1),onKeyDown:n(a,!1)},r.a.createElement(D.a,null,r.a.createElement(s.b,{to:"/"},r.a.createElement(P.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(R.a,null)),r.a.createElement(F.a,{primary:"Accueil"}))),r.a.createElement(k.a,null),r.a.createElement(s.b,{to:"/expressions-recognition"},r.a.createElement(P.a,{button:!0},r.a.createElement(x.a,null,r.a.createElement(N.a,null)),r.a.createElement(F.a,{primary:"Reconnaissance des \xe9motions"})))))},I=a(80),L=a.n(I),U=a(58),T=a.n(U),M=Object(u.a)({list:{width:250}}),G=function(e){var t=M();return r.a.createElement("div",{className:t.list,role:"presentation",onClick:e.toggleDrawer(e.side,!1),onKeyDown:e.toggleDrawer(e.side,!1)},r.a.createElement(D.a,null,r.a.createElement(P.a,{button:!0,key:"Inbox"},r.a.createElement(x.a,null,r.a.createElement(L.a,null)),r.a.createElement(F.a,{primary:"Inbox"})),r.a.createElement(P.a,{button:!0,key:"Starred"},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(F.a,{primary:"Starred"}))),r.a.createElement(k.a,null),r.a.createElement(D.a,null,r.a.createElement(P.a,{button:!0,key:"All mail"},r.a.createElement(x.a,null,r.a.createElement(L.a,null)),r.a.createElement(F.a,{primary:"All mail"})),r.a.createElement(P.a,{button:!0,key:"Trash"},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(F.a,{primary:"Trash"})),r.a.createElement(P.a,{button:!0,key:"Spam"},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(F.a,{primary:"Spam narusite"}))))};function H(e){return r.a.createElement("div",null,r.a.createElement(j.a,{open:e.open.left,onClose:e.toggleDrawer("left",!1),onOpen:e.toggleDrawer("left",!0)},r.a.createElement(B,{side:"left",toggleDrawer:e.toggleDrawer})),r.a.createElement(j.a,{anchor:"right",open:e.open.right,onClose:e.toggleDrawer("right",!1),onOpen:e.toggleDrawer("right",!0)},r.a.createElement(G,{side:"left",toggleDrawer:e.toggleDrawer})))}var J=a(81),K=a.n(J),V=a(129),W=a(57),z=a(32),$=a(130),q=a(131),Q=a(133);a(245);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var Y=function(e){function t(){var e;return Object(W.a)(this,t),(e=Object($.a)(this,Object(q.a)(t).call(this))).startVideo=function(){window.navigator.getUserMedia({video:{}},(function(t){return e.state.video.srcObject=t}),(function(e){return console.log(e)}))},e.state={video:null},e}return Object(Q.a)(t,e),Object(z.a)(t,[{key:"componentDidMount",value:function(){var e=document.getElementById("video");this.setState(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},this.state,{video:e})),Promise.all([window.faceapi.nets.tinyFaceDetector.loadFromUri("/weights"),window.faceapi.nets.faceLandmark68Net.loadFromUri("/weights"),window.faceapi.nets.faceRecognitionNet.loadFromUri("/weights"),window.faceapi.nets.faceExpressionNet.loadFromUri("/weights")]).then(this.startVideo()),e.addEventListener("play",(function(){var t=window.faceapi.createCanvasFromMedia(e);document.getElementById("camera").append(t);var a={width:e.width,height:e.height};window.faceapi.matchDimensions(t,a),window.setInterval(Object(V.a)(K.a.mark((function n(){var r,o;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,window.faceapi.detectAllFaces(e,new window.faceapi.TinyFaceDetectorOptions).withFaceLandmarks().withFaceExpressions();case 2:r=n.sent,o=window.faceapi.resizeResults(r,a),t.getContext("2d").clearRect(0,0,t.width,t.height),window.faceapi.draw.drawDetections(t,o),window.faceapi.draw.drawFaceLandmarks(t,o),window.faceapi.draw.drawFaceExpressions(t,o);case 8:case"end":return n.stop()}}),n)}))),1e3)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"ExpressionsRecognition"},r.a.createElement("h1",null,"Reconnaissance des \xe9motions"),r.a.createElement("div",{id:"camera",style:{margin:"0",padding:"0",width:"100vw",height:"100vh",display:"flex",justifyContent:"center"}},r.a.createElement("video",{id:"video",width:350,height:270,autoPlay:!0,muded:"true"})))}}]),t}(n.Component),Z=function(e){return r.a.createElement("div",{className:"Home"},r.a.createElement("h1",null,"Home"))};a(246);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var ee=function(){var e=r.a.useState({left:!1,right:!1}),t=Object(l.a)(e,2),a=t[0],n=t[1],o=function(e,t){return function(r){(!r||"keydown"!==r.type||"Tab"!==r.key&&"Shift"!==r.key)&&n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach((function(t){Object(i.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,Object(i.a)({},e,t)))}};return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,null,r.a.createElement(O,{toggleDrawer:o}),r.a.createElement(H,{toggleDrawer:o,open:a}),r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/expressions-recognition",component:Y}),r.a.createElement(m.a,{exact:!0,path:"/",component:Z}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[143,1,2]]]);
//# sourceMappingURL=main.e9b238c5.chunk.js.map