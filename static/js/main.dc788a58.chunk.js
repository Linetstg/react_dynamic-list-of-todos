(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var s=n(10),r=n.n(s),c=n(8),o=n.n(c),a=n(11),i=n(2),l=n(3),d=n(5),u=n(4),h=n(1),j=n.n(h),p=(n(17),n(18),n(6)),b=(n(19),n(9)),f=n.n(b),m=n(0),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={title:"",select:"all"},e.handleInput=function(t){e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{title:t.target.value})}))},e.handleSelect=function(t){e.setState((function(e){return Object(p.a)(Object(p.a)({},e),{},{select:t.target.value})}))},e.filterTodos=function(t){return t.filter((function(t){return t.title.toLowerCase().includes(e.state.title.toLowerCase())}))},e.readyTodos=function(){var t=e.state.select,n=e.props.todos;switch(t){case"all":return e.filterTodos(n);case"completed":return e.filterTodos(n.filter((function(e){return e.completed})));case"active":return e.filterTodos(n.filter((function(e){return!e.completed})));default:throw new Error("Error")}},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.title,n=e.select,s=this.props,r=s.selectUser,c=s.selectedUserId,o=this.readyTodos();return Object(m.jsxs)("div",{className:"TodoList",children:[Object(m.jsx)("h2",{children:"Todos:"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("label",{htmlFor:"search",children:["Search by title",Object(m.jsx)("input",{id:"search",type:"text",value:t,onChange:this.handleInput,placeholder:"Search"})]}),Object(m.jsx)("label",{htmlFor:"todoStatus",children:Object(m.jsxs)("select",{id:"todoStatus",value:n,onChange:this.handleSelect,children:[Object(m.jsx)("option",{value:"all",children:"all"}),Object(m.jsx)("option",{value:"completed",children:"completed"}),Object(m.jsx)("option",{value:"active",children:"active"})]})})]}),Object(m.jsx)("div",{className:"TodoList__list-container",children:Object(m.jsx)("ul",{className:"TodoList__list",children:o.map((function(e){return Object(m.jsxs)("li",{className:f()("TodoList__item",{"TodoList__item--unchecked":e.completed,"TodoList__item--checked":!e.completed}),children:[Object(m.jsxs)("label",{htmlFor:"unchecked",children:[Object(m.jsx)("input",{type:"checkbox",readOnly:!0,id:"unchecked",checked:e.completed}),Object(m.jsx)("p",{children:e.title})]}),Object(m.jsxs)("button",{className:f()("TodoList__user-button",{"TodoList__user-button--selected":c===e.userId}),type:"button",onClick:function(){return r(e.userId)},children:["User\xa0#",e.userId]})]},e.id)}))})})]})}}]),n}(j.a.Component),v=function(e){return fetch("".concat("https://mate.academy/students-api").concat(e)).then((function(e){if(!e.ok)throw new Error("Server is not response ".concat(e.status));return e.json()}))},x=(n(21),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={user:{}},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.userFromServer()}},{key:"componentDidUpdate",value:function(e){e.userId!==this.props.userId&&this.userFromServer()}},{key:"userFromServer",value:function(){var e,t=this;(e=this.props.userId,v("/users/".concat(e))).then((function(e){return t.setState({user:e})}))}},{key:"render",value:function(){var e=this.state.user;return e?Object(m.jsxs)("div",{className:"CurrentUser",children:[Object(m.jsx)("h2",{className:"CurrentUser__title",children:Object(m.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(m.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(m.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(m.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}):"No users download"}}]),n}(j.a.Component)),_=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedUserId:0,todos:[]},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUserId=function(){e.setState({selectedUserId:0})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=Object(a.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v("/todos");case 2:t=e.sent,this.setState({todos:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.selectedUserId,n=e.todos;return n?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(O,{todos:n,selectedUserId:t,selectUser:this.selectUser})}),Object(m.jsxs)("div",{className:"App__content",children:[Object(m.jsx)("div",{className:"App__content-container",children:t?Object(m.jsx)(x,{userId:t}):"No user selected"}),t&&Object(m.jsx)("button",{type:"button",onClick:this.clearUserId,children:"Clear"})]})]}):""}}]),n}(j.a.Component),y=_;r.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.dc788a58.chunk.js.map