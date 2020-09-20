(this["webpackJsonpgoit-react-hw-06-phonebook-toolkit-"]=this["webpackJsonpgoit-react-hw-06-phonebook-toolkit-"]||[]).push([[0],{22:function(e,t,a){},29:function(e,t,a){e.exports=a(42)},38:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),o=a.n(r),l=a(8),i=a(24),m=a(44),s=a(27);a(22);function u(e){var t=e.content;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"notification"},c.a.createElement("h3",null,t)))}var b=a(9),f=a(4),E=a(45),d=Object(f.b)("phonebook/ADD_NEW_CONTACT",(function(e){return{payload:Object(b.a)({id:Object(E.a)()},e)}})),p=Object(f.b)("phonebook/DELETE_CONTACT"),O=Object(f.b)("phonebook/FILTER_CONTACTS"),j=Object(f.b)("errors/ERROR_MESSAGE"),h=function(e){var t=e.getContacts,a=Object(l.c)((function(e){return e.contacts})).contacts,r=Object(l.b)(),o=Object(n.useState)(!1),i=Object(s.a)(o,2),b=i[0],f=i[1],E={},d=function(e){var t=e.target,a=t.name,n=t.value;E[a]=n};return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{in:b,classNames:"noti",timeout:750,onEntered:function(){return f(!1)},unmountOnExit:!0},c.a.createElement(u,{content:"You have not completed all the fields or the values \u200b\u200bare repeated"})),c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),e.target.reset(),function(e,t,a){var n=!0;return void 0===e.name||void 0===e.number?(a(j("not all fields are filled")),!1):(t.items.map((function(t){return t.name===e.name?n=!1:""})),!!n||(a(j("such contact already exists")),!1))}(E,a,r)?t(E):f(!0)}},c.a.createElement("label",{className:"text"},"Name",c.a.createElement("input",{className:"input",type:"text",placeholder:"Enter name",name:"name",onChange:d})),c.a.createElement("label",{className:"text"},"Number",c.a.createElement("input",{className:"input",type:"text",placeholder:"Enter number",name:"number",onChange:d})),c.a.createElement("button",{className:"btn",type:"submit"},"Add contact")))},N=a(46),v=function(e){var t=e.name,a=e.number,n=e.id,r=e.delItem;return c.a.createElement("li",{className:"list__item"},c.a.createElement("p",{className:"text"},t,": ",a),c.a.createElement("button",{className:"btn",onClick:function(){r(n)}},"delete"))},g=(a(38),function(e){var t=e.filteredItems,a=e.getIdForDelete,n=function(e){a(e)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.a,{component:"ul",className:"ContactList"},t.map((function(e){var t=e.name,a=e.number,r=e.id;return c.a.createElement(m.a,{key:r,timeout:250,classNames:"ContactItem"},c.a.createElement(v,{id:r,name:t,number:a,delItem:n}))}))))}),C=function(e){var t=e.getNamesByFilter;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",{className:"title"},"Find contacts by name"),c.a.createElement("input",{className:"input",onChange:t,type:"text",name:"filter",placeholder:"Enter name"}))};function y(){var e=Object(l.c)((function(e){return e.contacts})).contacts,t=Object(l.b)();return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"section"},c.a.createElement(m.a,{in:!0,appear:!0,timeout:500,classNames:"title-anim",unmountOnExit:!0},c.a.createElement("h1",{className:"title"},"Phonebook")),c.a.createElement(h,{getContacts:function(e){t(d(e))}}),c.a.createElement("h2",{className:"title"},"Contacts"),c.a.createElement(C,{getNamesByFilter:function(e){return function(e){t(O(e))}(e.target.value)}}),c.a.createElement(g,{filteredItems:e.filter?e.items.filter((function(t){return t.name.toLowerCase().includes(e.filter.toLowerCase())})):e.items,getIdForDelete:function(e){t(p(e))}})))}var k,F,x=a(12),I=a(1),T=a(25),w=a.n(T),A=a(6),_=a(26),D=a.n(_),L=a(5),S=Object(f.c)(Object(b.a)({},{contacts:{items:[],filter:""}}),(k={},Object(L.a)(k,d,(function(e,t){var a=t.payload;return{contacts:Object(b.a)(Object(b.a)({},e.contacts),{},{items:[a].concat(Object(x.a)(e.contacts.items))})}})),Object(L.a)(k,p,(function(e,t){var a=t.payload;return{contacts:Object(b.a)(Object(b.a)({},e.contacts),{},{items:Object(x.a)(e.contacts.items.filter((function(e){return e.id!==a})))})}})),Object(L.a)(k,O,(function(e,t){var a=t.payload;return{contacts:{items:Object(x.a)(e.contacts.items),filter:a}}})),k)),R=Object(f.c)("",(F={},Object(L.a)(F,j,(function(e,t){return t.payload})),Object(L.a)(F,d,(function(e){return""})),Object(L.a)(F,p,(function(e){return""})),Object(L.a)(F,O,(function(e){return""})),F)),B=[].concat(Object(x.a)(Object(f.d)({serializableCheck:{ignoredActions:[A.a,A.f,A.b,A.c,A.d,A.e]}})),[w.a]),J={key:"root",storage:D.a,blacklist:["errors"]},z=Object(I.c)({contacts:S,errors:R}),G=Object(A.g)(J,z),M=Object(f.a)({reducer:G,middleware:B,devTools:!1}),P={store:M,persistor:Object(A.h)(M)};a(41);o.a.render(c.a.createElement(l.a,{store:P.store},c.a.createElement(i.a,{loading:null,persistor:P.persistor},c.a.createElement(y,null))),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c096167a.chunk.js.map