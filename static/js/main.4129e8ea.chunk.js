(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/add-button.5360a889.svg"},function(e,t,a){e.exports=a.p+"static/media/delete.c7e6fe43.svg"},function(e,t,a){e.exports=a.p+"static/media/edit.014be509.svg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(9),d=a.n(i),s=(a(19),a(20),a(7)),c=a(2),l=a(3),r=a(1),m=a(5),u=a(6),h=a(10),v=a(4),p=a(26),b=(a(21),a(11)),f=a.n(b),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:""},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleChange",value:function(e){e.target.value.length>=50||this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.name&&(this.props.addNewTodo(Object(h.a)({},this.state,{id:Object(p.a)(),completed:!1})),this.setState({name:""}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{className:"NewTodoForm",onClick:this.handleSubmit},o.a.createElement("input",{name:"name",onChange:this.handleChange,value:this.state.name,type:"text"}),o.a.createElement("div",{className:"addBtn"},o.a.createElement("button",null,o.a.createElement("img",{src:f.a})))))}}]),a}(n.Component),k=(a(22),a(12)),j=a.n(k),O=a(13),E=a.n(O),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:n.props.name,id:n.props.id,completed:n.props.completed},n.handleRemove=n.handleRemove.bind(Object(r.a)(n)),n.handleEdit=n.handleEdit.bind(Object(r.a)(n)),n.handleSave=n.handleSave.bind(Object(r.a)(n)),n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleSave=n.handleSave.bind(Object(r.a)(n)),n.handleTaskClick=n.handleTaskClick.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"handleRemove",value:function(){this.props.remove()}},{key:"handleEdit",value:function(){this.props.edit()}},{key:"handleSave",value:function(){this.state.name&&this.props.save(this.props.id,this.state.name)}},{key:"handleChange",value:function(e){e.target.value.length>=50||this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleTaskClick",value:function(e,t){e||this.props.toggleCompleted(t)}},{key:"render",value:function(){var e=this,t=this.props.editMode?o.a.createElement("input",{name:"name",onChange:this.handleChange,value:this.state.name,type:"text"}):o.a.createElement("p",{className:""},this.props.name),a=this.props.editMode?o.a.createElement("div",{className:"btn",onClick:this.handleSave},"SAVE"):o.a.createElement("img",{src:E.a,onClick:this.handleEdit});return o.a.createElement("div",{id:this.props.id,className:this.props.completed?"completed Todo":"Todo"},o.a.createElement("div",{className:"task",onClick:function(){e.handleTaskClick(e.props.editMode,e.props.id)}},t),o.a.createElement("div",{className:"btns"},o.a.createElement("div",{className:"btn"},a),o.a.createElement("div",{className:"btn"},o.a.createElement("img",{src:j.a,onClick:this.handleRemove}))))}}]),a}(n.Component),T=(a(23),function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={todos:[]},n.addTodo=n.addTodo.bind(Object(r.a)(n)),n.removeTodo=n.removeTodo.bind(Object(r.a)(n)),n.editTodo=n.editTodo.bind(Object(r.a)(n)),n.saveTodo=n.saveTodo.bind(Object(r.a)(n)),n.toggleCompleted=n.toggleCompleted.bind(Object(r.a)(n)),n}return Object(l.a)(a,[{key:"addTodo",value:function(e){this.setState({todos:[].concat(Object(s.a)(this.state.todos),[e])})}},{key:"removeTodo",value:function(e){var t=this.state.todos.filter((function(t){return t.id!==e}));this.setState({todos:t})}},{key:"editTodo",value:function(e){var t=this.state.todos.findIndex((function(t){return t.id===e})),a=Object(s.a)(this.state.todos);a[t].editMode=!0,console.log(a),this.setState({todos:a},(function(){var t=document.getElementById(e);console.log(t.querySelector("input")),t.querySelector("input").focus()}))}},{key:"saveTodo",value:function(e,t){var a=this.state.todos.findIndex((function(t){return t.id===e})),n=Object(s.a)(this.state.todos);n[a].editMode=!1,n[a].name=t,console.log(e),console.log(t),this.setState({todos:n})}},{key:"toggleCompleted",value:function(e){var t=this.state.todos.findIndex((function(t){return t.id===e})),a=Object(s.a)(this.state.todos);a[t].completed=!a[t].completed,this.setState({todos:a})}},{key:"render",value:function(){var e=this,t=this.state.todos.map((function(t){return o.a.createElement(C,{name:t.name,key:t.id,id:t.id,toggleCompleted:e.toggleCompleted,completed:t.completed,editMode:t.editMode,edit:function(){e.editTodo(t.id)},save:e.saveTodo,remove:function(){e.removeTodo(t.id)}})}));return o.a.createElement("div",{className:"Todolist"},o.a.createElement("h1",null,"Todo List!"),o.a.createElement(g,{addNewTodo:this.addTodo}),t)}}]),a}(n.Component));var y=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(T,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.4129e8ea.chunk.js.map