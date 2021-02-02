(this["webpackJsonptymphany-bidding"]=this["webpackJsonptymphany-bidding"]||[]).push([[0],{235:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(5),c=n(0),i=n.n(c),r=n(65),s=n.n(r),o=(n(234),n(235),n(39)),d=n.n(o),l=n(88),j=n(61),b=n(347),u=n(343),h=n(216),m=n(212),p=n.n(m);var x=function(){return Object(a.jsx)(b.a,{inverted:!0,children:Object(a.jsxs)(u.a,{children:[Object(a.jsxs)(b.a.Item,{as:"a",header:!0,children:[Object(a.jsx)(h.a,{size:"mini",src:"/tymphany-bidding-demo/img/tymphany-logo.png",style:{marginRight:"1.5em"}}),"Tymphany Bidding Activity"]}),Object(a.jsxs)(b.a.Item,{position:"right",className:"countdown",children:[Object(a.jsx)("span",{style:{whiteSpace:"pre"},children:"\u8ddd\u96e2\u622a\u6b62\u5269   "}),Object(a.jsx)(p.a,{givenDate:new Date(2021,1,5,12,0)})]})]})})},O=n(161),g=n(101),f=n.n(g),v=n(215),y=n.n(v),N=n(351),w=n(346),k=n(349),C=n(344),I=n(348),S=n(58),_=function(e){var t=i.a.useState({name:"",number:"",email:"",price:""}),n=Object(j.a)(t,2),c=n[0],r=n[1],s=function(e,t){var n=t.name,a=t.value,i=c;i[n]=a,r(i)},o=function(){var t=Object(l.a)(d.a.mark((function t(){var n,a,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=!0,a=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,/./.test(c.name)&&/[0-9]{7}/.test(c.number)&&a.test(c.email)&&/^\d*[05]{1}0$/.test(c.price)||(n=!1),i={_no:e._no,updateContent:{bidding:Object(O.a)(Object(O.a)({},c),{},{time:Date.now()})}},n?b(i):console.log("not complete");case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(l.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.post("https://tymphany-bidding-server.herokuapp.com/api/bidding/append",n,{"Content-Type":"application/json"}).then((function(t){e.submitFinish(),console.log(t)})).catch((function(e){console.log(e)}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.jsx)(N.a,{horizontal:!0,children:Object(a.jsxs)(w.a,{success:!0,style:{margin:"30px auto"},children:[Object(a.jsxs)(w.a.Field,{children:[Object(a.jsx)("label",{id:"movie",children:"\u59d3\u540d (Name)"}),Object(a.jsx)(w.a.Input,{required:!0,placeholder:"Tong Wang",name:"name",onChange:s})]}),Object(a.jsxs)(w.a.Field,{children:[Object(a.jsx)("label",{children:"\u5de5\u865f (EmployeeID)"}),Object(a.jsx)(w.a.Input,{required:!0,pattern:"[0-9]{7}",placeholder:"2000xxx",name:"number",onChange:s})]}),Object(a.jsxs)(w.a.Field,{children:[Object(a.jsx)("label",{children:"Email "}),Object(a.jsx)(w.a.Input,{required:!0,type:"email",placeholder:"tong.wang@tymphany.com",name:"email",onChange:s})]}),Object(a.jsxs)(w.a.Field,{children:[Object(a.jsx)("label",{children:"\u51fa\u50f9 (Bidding Price) "}),Object(a.jsx)(w.a.Input,{required:!0,pattern:"^\\d*[05]{1}0$",placeholder:"\u8acb\u8f38\u516550\u7684\u500d\u6578 ",title:"\u8acb\u8f38\u516550\u7684\u500d\u6578\u3002 This number must be in multiples of 50",name:"price",onChange:s}),Object(a.jsx)("span",{className:"caption",children:"*This number must be in multiples of 50"})]}),Object(a.jsx)(k.a,{type:"submit",onClick:o,children:"Submit"})]})})},z=function(e){var t=i.a.useState(e.biddingData),n=Object(j.a)(t,2),r=n[0],s=n[1],o=function(){var t=Object(l.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://tymphany-bidding-server.herokuapp.com/api/bidding?_no=".concat(e.data._no));case 2:n=t.sent,s(n.data.content[0].bidding);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"detail",children:[Object(a.jsxs)("span",{className:"conditions",children:[Object(a.jsx)("strong",{children:" Check: "}),e.data.conditions]}),Object(a.jsxs)("p",{className:"shortage",children:[Object(a.jsx)("strong",{children:" Shortage: "})," ",e.data.shortage]})]}),Object(a.jsx)(C.a,{horizontal:!0,children:"History"}),Object(a.jsx)(I.a,{divided:!0,relaxed:!0,className:"bidding",children:r.length>0&&r.map((function(e,t){return Object(a.jsxs)(I.a.Item,{children:[Object(a.jsx)(I.a.Content,{floated:"right",children:Object(a.jsxs)("h5",{className:"bidding-name",children:["$",e.price]})}),Object(a.jsx)(I.a.Icon,{name:"dollar",size:"large",verticalAlign:"middle"}),Object(a.jsxs)(I.a.Content,{children:[Object(a.jsx)("h5",{className:"bidding-name",children:e.name}),Object(a.jsx)("p",{className:"bidding-time",children:y()(e.time).format("MMMM Do YYYY, h:mm:ss a")})]})]})}))})]})};var D=function(e){e.data.length&&e.data.length;var t=i.a.useState(-1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=i.a.useState(-1),o=Object(j.a)(s,2),d=o[0],l=o[1],b=function(e){r(e.target.name),l(-1)},u=function(e){l(e.target.name),r(-1)},m=function(){l(-1),r(-1)},p=function(){l(-1)},x=function(e){var t=e.data,n=e.index,i=t.bidding;i.sort((function(e,t){return t.price-e.price}));var r=i.length>0?"\u5373\u6642\u51fa\u50f9 $ ".concat(i[0].price):"\u5c1a\u672a\u6709\u4eba\u51fa\u50f9";return Object(a.jsxs)("div",{className:"tg_card",children:[Object(a.jsx)("div",{className:"img-content",children:Object(a.jsx)(h.a,{className:"img",centered:!0,src:"/tymphany-bidding-demo"+"/img/".concat(t._no,".jpg")})}),Object(a.jsxs)("div",{style:{height:"fit-content"},children:[Object(a.jsxs)("h5",{className:"brand",children:[" ","#".concat(t._no," ").concat(t.module)]}),Object(a.jsx)("p",{children:t.brand}),t.set.length>0&&Object(a.jsxs)("p",{className:"set",children:["set with: ",t.set]})]}),Object(a.jsx)(C.a,{}),Object(a.jsx)("div",{children:Object(a.jsxs)("p",{className:"price-title",children:[" ",r]})}),Object(a.jsxs)("div",{className:"operations-buttons",children:[Object(a.jsx)(k.a,{inverted:!0,color:"blue",className:"operation-button",name:n,onClick:b,children:" Detail "}),Object(a.jsx)(k.a,{inverted:!0,color:"red",className:"operation-button",name:n,onClick:u,children:" Bid "}),(n==c||n==d)&&Object(a.jsx)(S.a,{name:"chevron up",bordered:!0,style:{minWidth:"30px",margin:"auto",borderRadius:"3px"},onClick:m})]}),n==c&&Object(a.jsx)(z,{data:t,biddingData:i}),n==d&&Object(a.jsx)(_,{_no:t._no,submitFinish:p})]})};return Object(a.jsx)(a.Fragment,{children:e.data.map((function(e,t){return Object(a.jsx)(x,{data:e,index:t})}))})},F=n(352),A=n(345);var E=function(e){var t=i.a.useState({}),n=Object(j.a)(t,2),r=n[0],s=n[1],o=i.a.useState({name:"",number:""}),b=Object(j.a)(o,2),u=(b[0],b[1],function(){var e=Object(l.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://tymphany-bidding-server.herokuapp.com/api/bidding");case 2:t=e.sent,console.log("fetchResource",t),s(t.data.content);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(c.useEffect)((function(){u()}),[]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(x,{}),r.length>0?Object(a.jsx)(F.a.Group,{horizontal:!0,textAlign:"center",style:{flexWrap:"wrap",justifyContent:"space-around"},children:Object(a.jsx)(D,{data:r})}):Object(a.jsx)("div",{className:"loader-container",children:Object(a.jsx)(A.a,{active:!0,inline:"centered",className:"loader"})})]})};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(E,{})}),document.getElementById("root"))}},[[331,1,2]]]);
//# sourceMappingURL=main.fb33d4fe.chunk.js.map