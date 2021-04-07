(this["webpackJsonpmy-react-web-site"]=this["webpackJsonpmy-react-web-site"]||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),s=n(39),i=n.n(s),r=n(17),o=(n(108),n(8)),l=n(9),j=n(11),d=n(10),b=n(5),u=(n(109),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={page:""},e.getPageName=function(e){return"#/"==e?"Home":e.charAt(2).toUpperCase()+e.slice(3)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({page:this.getPageName(window.location.hash)})}},{key:"render",value:function(){var e=this,t=this.state.page;return Object(a.jsx)("div",{className:"Header",children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsxs)("div",{className:"m-3",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"/",children:Object(a.jsx)("span",{className:"Name",children:"Jacob Atzori"})}),Object(a.jsx)("div",{className:"PageTitle",children:t})]}),Object(a.jsxs)("span",{className:"navbar-nav",children:[Object(a.jsx)("a",{className:"nav-link nav-item",onClick:function(){return e.setState({page:"Home"})},href:"/#/",children:"Home"}),Object(a.jsx)("a",{className:"nav-link nav-item",onClick:function(){return e.setState({page:"Projects"})},href:"/#/projects",children:"Projects"}),Object(a.jsx)("a",{className:"nav-link nav-item",onClick:function(){return e.setState({page:"About"})},href:"/#/about",children:"About"})]})]})})})}}]),n}(c.Component)),m=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Home PageContent",children:[Object(a.jsx)("div",{className:"p-5 pb-6 container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("div",{className:"KeyWordContainer align-middle",children:[Object(a.jsx)("span",{className:"KeyWord",children:"WHO"}),Object(a.jsx)("span",{className:"KeyWordContinued",children:" am I?"})]})}),Object(a.jsx)("div",{className:"col-md-2 col-lg-1"}),Object(a.jsx)("div",{className:"col-md-6 align-middle",children:Object(a.jsxs)("p",{children:["My name is Jacob Atzori.",Object(a.jsx)("br",{}),"I am a recent graduate from the University of Toronto where I completed a degree in computer science and mathematics.",Object(a.jsx)("br",{}),"I am a professional software developer and I make coding projects for fun."]})})]})}),Object(a.jsx)("div",{className:"p-5 pb-6 container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsx)("div",{className:"col-md-6 align-middle order-md-2",children:Object(a.jsxs)("div",{className:"KeyWordContainer",children:[Object(a.jsx)("span",{className:"KeyWord",children:"WHAT"}),Object(a.jsx)("span",{className:"KeyWordContinued",children:" do I do?"})]})}),Object(a.jsx)("div",{className:"col-md-5 align-middle order-md-1",children:Object(a.jsxs)("p",{children:["I make web apps!",Object(a.jsx)("br",{}),"More explanation to come!"]})})]})}),Object(a.jsx)("div",{className:"p-5 pb-6 container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsx)("div",{className:"col-md-4 align-middle",children:Object(a.jsxs)("div",{className:"KeyWordContainer",children:[Object(a.jsx)("span",{className:"KeyWord",children:"WHY"}),Object(a.jsx)("span",{className:"KeyWordContinued",children:" do I do it?"})]})}),Object(a.jsx)("div",{className:"col-md-2 col-lg-1"}),Object(a.jsx)("div",{className:"col-md-6 align-middle",children:Object(a.jsxs)("p",{children:["I do it mostly for fun!",Object(a.jsx)("br",{}),"But sometimes I do it to make something that can makes people's lives easier."]})})]})})]})}}]),n}(c.Component),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"Projects PageContent",children:[Object(a.jsx)("div",{className:"p-5",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsx)("div",{className:"col-md-4 pb-3",children:Object(a.jsx)(r.b,{to:"/snek",children:Object(a.jsx)("img",{src:"/snek.png",width:300,alt:"Snek"})})}),Object(a.jsx)("div",{className:"col-md-3 col-lg-2"}),Object(a.jsxs)("div",{className:"col-md-5",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"ProjectName",children:"Snek"}),Object(a.jsx)("br",{}),"The classic game of snek.",Object(a.jsx)("br",{}),"Created in javascript using setInterval."]}),Object(a.jsx)(r.b,{className:"btn btn-dark btn-lg",to:"/snek",children:"Check it out"})]})]})})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"p-5",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsxs)("div",{className:"col-md-4 pb-3",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"ProjectName",children:"Snek AI"}),Object(a.jsx)("br",{}),"The classic game of snek, but you let an AI play for you.",Object(a.jsx)("br",{}),"Created in javascript using an custom made algorithm. Avoids walls and itself, uses BFS to avoid trapping itself - to an extent."]}),Object(a.jsx)(r.b,{className:"btn btn-dark btn-lg",to:"/snek-ai",children:"Check it out"})]}),Object(a.jsx)("div",{className:"col-md-3 col-lg-2"}),Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)(r.b,{to:"/snek-ai",children:Object(a.jsx)("img",{src:"/snek-ai.png",width:300,alt:"Snek AI"})})})]})})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"p-5",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsx)("div",{className:"col-md-6 pb-3",children:Object(a.jsx)("a",{target:"_blank",href:"https://www.myeasyestimator.com",children:Object(a.jsx)("img",{src:"/EasyEstimator.png",width:360,alt:"Easy Estimator"})})}),Object(a.jsx)("div",{className:"col-md-2 col-lg-2"}),Object(a.jsxs)("div",{className:"col-md-4",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"ProjectName",children:"Easy Estimator"}),Object(a.jsx)("br",{}),"An online construction estimation and takeoff software.",Object(a.jsx)("br",{}),"This online SaaS application is used by estimators to price mechanical costruction projects from PDFs."]}),Object(a.jsx)("a",{className:"btn btn-dark btn-lg",target:"_blank",href:"https://www.myeasyestimator.com",children:"Check it out"})]})]})})}),Object(a.jsx)("hr",{}),Object(a.jsx)("div",{className:"p-5",children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsxs)("div",{className:"row justify-content-md-center",children:[Object(a.jsxs)("div",{className:"col-md-4 pb-3",children:[Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"ProjectName",children:"Room Layout"}),Object(a.jsx)("br",{}),"An online tool to help you layout a room.",Object(a.jsx)("br",{}),"Set your room size, and then create all the objects you plan to put in the room. Drag them around and see what layout works best for you."]}),Object(a.jsx)(r.b,{className:"btn btn-dark btn-lg",to:"/room-layout",children:"Check it out"})]}),Object(a.jsx)("div",{className:"col-md-3 col-lg-2"}),Object(a.jsx)("div",{className:"col-md-5",children:Object(a.jsx)(r.b,{to:"/room-layout",children:Object(a.jsx)("img",{src:"/RoomLayout.png",width:300,alt:"Room Layout"})})})]})})})]})}}]),n}(c.Component),O=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.link,n=e.text;return Object(a.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:n})}}]),n}(c.Component),x=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"About p-3 PageContent",children:Object(a.jsx)("div",{className:"AboutMe p-5",children:Object(a.jsx)("p",{children:Object(a.jsx)("h2",{children:"Coming Soon!"})})})})}}]),n}(c.Component),p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={time:Date.now()},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.setState({time:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getSecondsToday",value:function(){var e=this.state.time,t=new Date(e);return 3600*t.getHours()+60*t.getMinutes()+t.getSeconds()}},{key:"render",value:function(){var e=this.state.time/21474836480;return Object(a.jsxs)("div",{className:"Time",children:[Object(a.jsx)("h2",{children:"A 'better' way to talk about the time of the day"}),Object(a.jsxs)("div",{className:"TimeDescription",children:[Object(a.jsx)("div",{children:"Instead of keeping track of hours, minutes and whether it's AM or PM, we can just keep track of how much of the day has passed as a percentage. For example, at 2:30 PM we are 60.4% through the day, so we can just say the time is 60%"}),Object(a.jsxs)("div",{className:"TimeContainer",children:[Object(a.jsx)("span",{className:"TimeLabel",children:"Current Time:"}),Object(a.jsxs)("span",{className:"CurrentTime",children:[Math.floor(1e4*this.getSecondsToday()/86400)/100,"%"]})]}),Object(a.jsxs)("div",{children:["We can also keep track of the time and date all together in one number instead of using days, months and years. We can instead just say how far through ",Object(a.jsx)(O,{link:"https://en.wikipedia.org/wiki/Unix_time",text:"Unix Time"})," we currently are. Unix time started Jan 1 1970, and ends Jan 19 2038, and so the current overall time is just how far through that interval we are."]}),Object(a.jsxs)("div",{className:"TimeContainer",children:[Object(a.jsx)("span",{className:"TimeLabel",children:"Overall Time:"}),Object(a.jsxs)("span",{className:"CurrentTime",children:[(e-e%Math.pow(10,-7)).toFixed(7),"%"]})]})]})]})}}]),n}(c.Component),v=function(e){Object(c.useEffect)((function(){var t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),function(){document.body.removeChild(t)}}),[e])},f=function(e){return Object(a.jsxs)("div",{id:"Snek",tabIndex:"0",className:"Snek",children:[Object(a.jsx)("h1",{children:"Snek"}),Object(a.jsxs)("div",{className:"SnekInfoSection",children:[Object(a.jsxs)("span",{className:"SnekInfo",children:["Speed: ",Object(a.jsx)("input",{type:"text",id:"speed",defaultValue:"10",size:"6"})]}),Object(a.jsx)("span",{className:"SnekInfo",id:"score",children:"Score: 0"}),Object(a.jsx)("button",{className:"SnekInfo",id:"resetButton",children:"reset"}),Object(a.jsx)("span",{className:"SnekMsg",id:"msg"})]}),Object(a.jsx)("table",{className:"center",id:"table",style:{backgroundColor:" blue"}}),e.isBasic?Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{id:"classicButton",type:"button",children:"classic"}),Object(a.jsx)("button",{id:"facesButton",type:"button",children:"faces"})]}):Object(a.jsx)("div",{}),e.isBasic?v("/snek-basic.js"):v("/snek-ai.js")]})},N=n(6),g=n(95),y=n(29),k=n(102),C=n(96),w=n.n(C),S=n(101);var I=function(e){var t=Object(c.useState)(e.width||3),n=Object(N.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(e.height||3),o=Object(N.a)(r,2),l=o[0],j=o[1],d=Object(c.useState)(e.rotate||0),b=Object(N.a)(d,2),u=b[0],m=b[1],h=Object(c.useState)(e.name||"bed"),O=Object(N.a)(h,2),x=O[0],p=O[1],v=Object(c.useState)(e.color||"#f44336"),f=Object(N.a)(v,2),g=f[0],y=f[1],k=Object(c.useState)(e.layer||0),C=Object(N.a)(k,2),w=C[0],I=C[1],R=Object(c.useState)(e.isRound||!1),T=Object(N.a)(R,2),A=T[0],B=T[1],W=e.onClose,L=e.onCreate,M=e.isUpdate;return Object(a.jsxs)("div",{className:"createObject",children:[Object(a.jsx)("h5",{children:M?"Update object":"Create new object"}),Object(a.jsx)("input",{className:"closeButton",type:"button",value:"X",onClick:function(){return W()}}),Object(a.jsxs)("div",{className:"CreateInputContainer",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Name"}),Object(a.jsx)("input",{className:"textBox",type:"text",value:x,onChange:function(e){return p(e.target.value)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Width"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:s,onChange:function(e){return i(""===e.target.value?"":parseFloat(e.target.value))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Height"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:l,onChange:function(e){return j(""===e.target.value?"":parseFloat(e.target.value))}})]}),Object(a.jsxs)("div",{className:"colorChooser Center mt-2",children:[Object(a.jsx)("h3",{children:"Color"}),Object(a.jsx)(S.a,{width:"210px",circleSize:28,circleSpacing:7,color:g,onChangeComplete:function(e){return y(e.hex)}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Layer"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:w,onChange:function(e){return I(""===e.target.value?"":parseInt(e.target.value))}})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Rotate"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:u,onChange:function(e){return m(""===e.target.value?"":parseInt(e.target.value))}})]}),Object(a.jsxs)("div",{className:"Radio pt-2",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"isRoundRadio0",checked:!A,onChange:function(e){return B(!1)}}),Object(a.jsx)("label",{htmlFor:"isRoundRadio0",children:"square"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"radio",id:"isRoundRadio1",checked:A,onChange:function(e){return B(!0)}}),Object(a.jsx)("label",{htmlFor:"isRoundRadio1",children:"round"})]})]}),Object(a.jsx)("div",{className:"pt-3",children:Object(a.jsx)("input",{type:"button",value:M?"Update":"Create",onClick:function(){return L({name:x,width:s,height:l,color:g,layer:w,isRound:A,rotate:u})}})})]})]})};function R(e,t){var n=e.squareSize,a=e.width,c=e.height,s=e.color,i=e.isRound,r=e.rotate,o={width:t?50:a*n,height:t?50:c*n,backgroundColor:s,transform:"rotate(".concat(r||0,"deg)")};return i&&(o.borderRadius="50%"),o}function T(e){return{zIndex:10+e.layer}}function A(e){return{x:-150+e%3*60,y:50+60*Math.floor(e/3)}}var B=function(e){var t=Object(c.useState)(!0),n=Object(N.a)(t,2),s=n[0],i=n[1],r=Object(c.useState)(!0),o=Object(N.a)(r,2),l=o[0],j=o[1],d=Object(c.useState)(!1),b=Object(N.a)(d,2),u=b[0],m=b[1],h=e.name,O=e.width,x=e.height,p=e.index,v=e.onNavAdd,f=e.onNavRemove,g=e.navIndex,y=e.onUpdate,C=e.layer,S=e.color,B=e.isRound,W=e.rotate;return Object(a.jsxs)(a.Fragment,{children:[u?Object(a.jsx)(I,Object(k.a)({onCreate:function(e){y(p,e),m(!1)},onClose:function(){return m(!1)},isUpdate:!0},{name:h,width:O,height:x,layer:C,color:S,isRound:B,rotate:W})):null,Object(a.jsx)("div",{style:T(e),children:Object(a.jsx)(w.a,{onDrag:function(e,t){return function(e,t,n,a,c,s,i){window.innerWidth,!t&&e.x<=0?(n(!0),a(!0),c(i)):t&&e.x>=0&&(n(!1),s(i))}(t,s,i,j,v,f,p)},onMouseDown:function(){return j(!1)},position:l&&s?A(g):null,children:Object(a.jsxs)("div",{children:[s?Object(a.jsx)("input",{className:"editButton",type:"button",value:"?",onClick:function(){return m(!0)}}):null,Object(a.jsxs)("div",{className:"object",style:R(e,s),children:[h,Object(a.jsx)("div",{className:"bottomMiddle",children:"".concat(O,"x").concat(x)})]})]})})})]})};n(224);function W(e,t,n){if(0!=e&&0!=t&&0!=n){var a=document.getElementById("mainCanvas").getContext("2d"),c=window.innerWidth-280,s=window.innerHeight-240,i=Math.min(c/e,s/t)*n,r=e*i/n,o=t*i/n;a.canvas.width=r,a.canvas.height=o;for(var l=0;l<=e/n;l+=1)a.moveTo(l*i+.5,0),a.lineTo(l*i+.5,o);a.moveTo(r-.5,0),a.lineTo(r-.5,o-.5);for(var j=0;j<=t/n;j+=1)a.moveTo(0,j*i+.5),a.lineTo(r,j*i+.5);return a.moveTo(0,o-.5),a.lineTo(r,o-.5),a.strokeStyle="black",a.stroke(),i/n}}function L(e,t,n,a){var c=Object(y.a)(n);c[e]=t,a(c)}function M(e,t,n,c,s){var i,r=[],o=0,l=Object(g.a)(e);try{for(l.s();!(i=l.n()).done;){var j=i.value;r.push(Object(a.jsx)(B,{squareSize:t,width:j.width,height:j.height,layer:j.layer,color:j.color,name:j.name,isRound:j.isRound,index:o,rotate:j.rotate,onUpdate:function(t,n){return L(t,n,e,s)},navIndex:n.indexOf(o),onNavAdd:function(e){return c([].concat(Object(y.a)(n),[e]))},onNavRemove:function(e){var t=n.indexOf(e);t>-1&&n.splice(t,1),c(n)}},"ObjectQ".concat(o))),o++}}catch(d){l.e(d)}finally{l.f()}return r}var P=function(){var e=Object(c.useState)(10),t=Object(N.a)(e,2),n=t[0],s=t[1],i=Object(c.useState)(10),r=Object(N.a)(i,2),o=r[0],l=r[1],j=Object(c.useState)(1),d=Object(N.a)(j,2),b=d[0],u=d[1],m=Object(c.useState)(0),h=Object(N.a)(m,2),O=h[0],x=h[1],p=Object(c.useState)([]),v=Object(N.a)(p,2),f=v[0],g=v[1],k=Object(c.useState)(!1),C=Object(N.a)(k,2),w=C[0],S=C[1],R=Object(c.useState)([]),T=Object(N.a)(R,2),A=T[0],B=T[1];return Object(c.useEffect)((function(){x(W(n,o,b))}),[]),Object(a.jsxs)("div",{className:"RoomLayout",children:[w?Object(a.jsx)(I,{onCreate:function(e){g([].concat(Object(y.a)(f),[e])),B([].concat(Object(y.a)(A),[f.length]))},onClose:function(){return S(!1)}}):null,Object(a.jsx)("div",{className:"sidebar",children:Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("h2",{children:"Objects"}),Object(a.jsx)("div",{children:Object(a.jsx)("input",{className:"btn btn-secondary",disabled:w,type:"button",value:"Create new object",onClick:function(){return S(!0)}})}),M(f,O,A,B,g)]})}),Object(a.jsxs)("div",{className:"main",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:"Room Layout"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"Label",children:"Width"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:n,onChange:function(e){return s(""===e.target.value?"":parseFloat(e.target.value))}}),Object(a.jsx)("span",{className:"Label",children:"Height"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:o,onChange:function(e){return l(""===e.target.value?"":parseFloat(e.target.value))}}),Object(a.jsx)("span",{className:"Label",children:"Scale"}),Object(a.jsx)("input",{className:"numBox",type:"number",value:b,onChange:function(e){return u(""===e.target.value?"":parseFloat(e.target.value))}}),Object(a.jsx)("input",{className:"button",type:"button",value:"Resize Room",onClick:function(){return x(W(n,o,b))}})]})]}),Object(a.jsx)("div",{children:Object(a.jsx)("canvas",{id:"mainCanvas",className:"mainCanvas"})})]})]})},F=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(u,{}),Object(a.jsx)("div",{className:"Body",children:Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/",component:m,exact:!0}),Object(a.jsx)(b.a,{path:"/projects",component:h}),Object(a.jsx)(b.a,{path:"/about",component:x}),Object(a.jsx)(b.a,{path:"/absolute-time",component:p}),Object(a.jsx)(b.a,{path:"/snek",component:function(){return Object(a.jsx)(f,{isBasic:!0})}}),Object(a.jsx)(b.a,{path:"/snek-ai",component:f}),Object(a.jsx)(b.a,{path:"/room-layout",component:P})]})})]})}}]),n}(c.Component);i.a.render(Object(a.jsx)(r.a,{children:Object(a.jsx)(F,{})}),document.getElementById("root"))}},[[225,1,2]]]);
//# sourceMappingURL=main.032ceb26.chunk.js.map