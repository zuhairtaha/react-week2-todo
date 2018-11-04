(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),l=a.n(o),c=a(61),s=a(60),i=a(12),m=a(14),d=a(13),u=a(15),b=(a(67),a(69),a(50)),p=a.n(b),v=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark-blue shadow mb-3 p-3"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"/"},r.a.createElement(p.a,null,"AssignmentICon")," Todo list"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"}," ")),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup"},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link",rel:"noopener noreferrer",target:"_blank",href:"https://github.com/HackYourFuture-CPH/React/blob/master/documentation/homework/W2-homework.md"},"Homework question",r.a.createElement("span",{className:"sr-only"},"(current)")),r.a.createElement("a",{className:"nav-item nav-link",href:" "},"repository")))))},g=function(e){return r.a.createElement("div",{className:"card mb-3 shadow-sm"},r.a.createElement("div",{className:"card-body"},e.children))},E=a(53),f=a.n(E),h=a(54),N=a.n(h),w=a(52),y=a.n(w),k=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={textValue:""},a.submitHandler=function(e){e.preventDefault();var t=a.state.textValue.trim();t.length<1?y()("Error!","Please enter a description!","error"):(a.props.onSubmit({id:Date.now(),description:t,done:!1}),a.setState({textValue:""}))},a.handleChange=function(e){a.setState({textValue:e.target.value})},a.render=function(){return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement("form",{onSubmit:a.submitHandler},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-10 col-lg-11"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{value:a.state.textValue,type:"text",className:"form-control form-control-lg mt-2",onChange:a.handleChange,placeholder:"Enter todo..."}))),r.a.createElement("div",{className:"col-sm-2 col-lg-1"},r.a.createElement(f.a,{type:"submit",variant:"fab",color:"primary","aria-label":"Add"},r.a.createElement(N.a,null)))))))},a}return Object(u.a)(t,e),t}(r.a.Component),x=a(55),j=a.n(x),O=a(56),C=a.n(O),D=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).render=function(){return r.a.createElement("li",{onClick:a.props.toggleDone,className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"custom-control custom-checkbox"},r.a.createElement("input",{type:"checkbox",className:"custom-control-input",checked:a.props.done,onChange:a.props.toggleDone,id:a.props.id}),r.a.createElement("label",{className:"custom-control-label",style:{textDecoration:a.props.done&&"line-through"},htmlFor:a.props.id},a.props.children)),r.a.createElement(j.a,{onClick:a.props.deleteTodo,style:{color:"#b0b0b0"},"aria-label":"Delete"},r.a.createElement(C.a,null)))},a}return Object(u.a)(t,e),t}(r.a.Component),S=a(58),T=a.n(S),A=a(57),H=a.n(A),V=a(59),z=a.n(V),B=function(e){return r.a.createElement("div",{className:"card mb-3 shadow"},r.a.createElement("div",{className:"card-body text-center text-white "+e.bg},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},"Total"===e.text?r.a.createElement(H.a,{style:{fontSize:"3em"}}):"Done"===e.text?r.a.createElement(T.a,{style:{fontSize:"3em"}}):"Left"===e.text?r.a.createElement(z.a,{style:{fontSize:"3em"}}):""),r.a.createElement("div",{className:"col-md-6"},e.text," ",r.a.createElement("br",null),r.a.createElement("h1",null,e.number)))))},F=function(e){var t=e.todos.length,a=e.todos.filter(function(e){return e.done}).length,n=t-a;return r.a.createElement("div",{className:"row mt-3"},r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(B,{text:"Total",number:t,bg:"bg-danger"})),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(B,{text:"Done",number:a,bg:"bg-warning"})),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement(B,{text:"Left",number:n,bg:"bg-success"})))},M=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:1,description:"Get out of bed",done:!0},{id:2,description:"Brush teeth",done:!1},{id:3,description:"Eat breakfast",done:!1}]},a.addTodo=function(e){a.setState(function(t){return{todos:[e].concat(Object(s.a)(t.todos))}})},a.toggleDone=function(e){a.setState(function(t){return{todos:t.todos.map(function(t){return t.id===e?Object(c.a)({},t,{done:!t.done}):t})}})},a.deleteTodo=function(e){a.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},a.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,null),r.a.createElement("div",{className:"container"},r.a.createElement(k,{onSubmit:a.addTodo}),r.a.createElement("ul",{className:"list-group shadow-sm"},a.state.todos.map(function(e){return r.a.createElement(D,{toggleDone:function(){return a.toggleDone(e.id)},deleteTodo:function(){return a.deleteTodo(e.id)},key:e.id,id:e.id,done:e.done},e.description)})),r.a.createElement(F,{todos:a.state.todos})))},a}return Object(u.a)(t,e),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,t,a){e.exports=a(166)},67:function(e,t,a){},69:function(e,t,a){}},[[62,2,1]]]);
//# sourceMappingURL=main.ae5ade20.chunk.js.map