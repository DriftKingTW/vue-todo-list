(function(t){function e(e){for(var n,i,l=e[0],u=e[1],a=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&p.push(c[i][0]),c[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);s&&s(e);while(p.length)p.shift()();return r.push.apply(r,a||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],n=!0,l=1;l<o.length;l++){var u=o[l];0!==c[u]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},c={app:0},r=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-todo-list/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var s=u;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),c=o("cf05"),r=o.n(c),i={class:"todo-wrapper"},l=Object(n["e"])("img",{alt:"Vue logo",src:r.a},null,-1),u=Object(n["e"])("h1",null,"Todo List",-1),a=Object(n["e"])("span",{class:"hint"},"Hint: Click text to edit!",-1);function s(t,e,o,c,r,s){var d=Object(n["j"])("fork-me"),p=Object(n["j"])("todo-input"),b=Object(n["j"])("control-bar"),m=Object(n["j"])("todo-list");return Object(n["h"])(),Object(n["c"])("div",i,[Object(n["e"])(d),l,u,Object(n["e"])(p,{onTodoSubmitted:s.createTodo},null,8,["onTodoSubmitted"]),Object(n["e"])(b,{onCustomizeFilter:s.customizeFilter,onClearCompleted:s.clearCompleted},null,8,["onCustomizeFilter","onClearCompleted"]),a,r.todos.length?(Object(n["h"])(),Object(n["c"])(m,{key:0,todos:r.todos,onRemove:s.removeTodo,onComplete:s.toggleTodo},null,8,["todos","onRemove","onComplete"])):Object(n["d"])("",!0)])}var d=o("5530"),p=o("2909"),b=(o("99af"),o("d81d"),o("4de4"),{class:"todo-item-wrapper grid-container-input"});function m(t,e,o,c,r,i){var l=Object(n["j"])("font-awesome-icon");return Object(n["h"])(),Object(n["c"])("ul",null,[Object(n["e"])("div",b,[Object(n["m"])(Object(n["e"])("input",{type:"text",name:"todoContent",class:"input-text","onUpdate:modelValue":e[1]||(e[1]=function(t){return r.todoContent=t}),onKeyup:e[2]||(e[2]=Object(n["n"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["enter"])),placeholder:"Do Something! =)"},null,544),[[n["k"],r.todoContent,void 0,{trim:!0}]]),Object(n["e"])("button",{type:"submit",class:"btn-add",onClick:e[3]||(e[3]=Object(n["o"])((function(){return i.onSubmit&&i.onSubmit.apply(i,arguments)}),["prevent"]))},[Object(n["e"])("span",null,[Object(n["e"])(l,{icon:["fas","plus"]})])])])])}var f={name:"todo-input",data:function(){return{todoContent:""}},methods:{onSubmit:function(){this.$emit("todo-submitted",this.todoContent),this.todoContent=""}}};f.render=m;var j=f,O={class:"todo-list-container"};function h(t,e,o,c,r,i){var l=Object(n["j"])("font-awesome-icon");return Object(n["h"])(),Object(n["c"])("div",O,[(Object(n["h"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(o.todos,(function(e,o){return Object(n["m"])((Object(n["h"])(),Object(n["c"])("div",{key:o,class:["todo-item-wrapper grid-container",{"todo-item-complete":e.completed}]},[Object(n["e"])("button",{class:"completed",name:"complete-btn",onClick:Object(n["o"])((function(o){return t.$emit("complete",e)}),["prevent"])},[Object(n["e"])("span",null,[Object(n["e"])(l,{icon:["fas","check"]})])],8,["onClick"]),Object(n["m"])((Object(n["h"])(),Object(n["c"])("input",{type:"text",class:"todo-text",name:"content","onUpdate:modelValue":function(t){return e.content=t},key:e.id,onKeyup:[Object(n["n"])(Object(n["o"])((function(o){return t.$emit("remove",e)}),["ctrl"]),["delete"]),Object(n["n"])((function(o){return t.$emit("complete",e)}),["enter"])]},null,40,["onUpdate:modelValue","onKeyup"])),[[n["k"],e.content]]),Object(n["e"])("button",{class:"remove-btn",name:"remove-btn",onClick:Object(n["o"])((function(o){return t.$emit("remove",e)}),["prevent"])},[Object(n["e"])("span",null,[Object(n["e"])(l,{icon:["fas","times-circle"]})])],8,["onClick"])],2)),[[n["l"],e.show]])})),128))])}var v={name:"todo-list",props:{todos:{type:Array,required:!0}}};v.render=h;var C=v,y={class:"control-bar"};function g(t,e,o,c,r,i){return Object(n["h"])(),Object(n["c"])("div",y,[Object(n["e"])("input",{type:"button",class:"ctrl-btn complete-only",value:"Completed Only",onClick:e[1]||(e[1]=function(e){return t.$emit("customizeFilter","Completed")})}),Object(n["e"])("input",{type:"button",class:"ctrl-btn uncomplete-only",value:"Uncompleted Only",onClick:e[2]||(e[2]=function(e){return t.$emit("customizeFilter","Uncompleted")})}),Object(n["e"])("input",{type:"button",class:"ctrl-btn show-all",value:"Show All Todos",onClick:e[3]||(e[3]=function(e){return t.$emit("customizeFilter","ShowAll")})}),Object(n["e"])("input",{type:"button",class:"ctrl-btn clear-complete",value:"Clear Completed",onClick:e[4]||(e[4]=function(e){return t.$emit("clearCompleted")})})])}var w={name:"control-bar"};w.render=g;var k=w,S={href:"https://github.com/DriftKingTW/vue-todo-list",class:"github-corner","aria-label":"View source on GitHub",target:"_blank"},T=Object(n["e"])("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},"aria-hidden":"true"},[Object(n["e"])("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),Object(n["e"])("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{"transform-origin":"130px 106px"},class:"octo-arm"}),Object(n["e"])("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"})],-1);function x(t,e,o,c,r,i){return Object(n["h"])(),Object(n["c"])("a",S,[T])}var L={name:"fork-me"};o("f7c7");L.render=x;var $=L,F=o("11c1"),M=(o("73ec"),{name:"App",components:{TodoInput:j,TodoList:C,ControlBar:k,ForkMe:$},data:function(){return{todos:[]}},mounted:function(){if(localStorage.getItem("todos"))try{this.todos=JSON.parse(localStorage.getItem("todos"))}catch(t){localStorage.removeItem("todos")}},methods:{createTodo:function(t){if(""!==t){var e={id:Object(F["v4"])(),content:t,completed:!1,show:!0};this.todos=[].concat(Object(p["a"])(this.todos),[e])}},toggleTodo:function(t){var e=t.completed;this.todos=this.todos.map((function(o){return o===t?Object(d["a"])(Object(d["a"])({},o),{},{completed:!e}):o}))},removeTodo:function(t){this.todos=this.todos.filter((function(e){return e!==t}))},saveTodos:function(){var t=JSON.stringify(this.todos);localStorage.setItem("todos",t)},clearCompleted:function(){this.todos=this.todos.filter((function(t){return!0!==t.completed}))},customizeFilter:function(t){"Completed"===t&&(this.todos=this.todos.map((function(t){return!1===t.completed?Object(d["a"])(Object(d["a"])({},t),{},{show:!1}):Object(d["a"])(Object(d["a"])({},t),{},{show:!0})}))),"Uncompleted"===t&&(this.todos=this.todos.map((function(t){return!0===t.completed?Object(d["a"])(Object(d["a"])({},t),{},{show:!1}):Object(d["a"])(Object(d["a"])({},t),{},{show:!0})}))),"ShowAll"===t&&(this.todos=this.todos.map((function(t){return!1===t.show?Object(d["a"])(Object(d["a"])({},t),{},{show:!0}):t})))}},watch:{todos:function(){this.saveTodos()}}});M.render=s;var z=M,P=o("ecee"),_=o("c074"),U=o("ad3d");P["c"].add(_["c"],_["a"],_["b"]),Object(n["b"])(z).component("font-awesome-icon",U["a"]).mount("#app")},"73ec":function(t,e,o){},cf05:function(t,e,o){t.exports=o.p+"img/logo.82b9c7a5.png"},e87d:function(t,e,o){},f7c7:function(t,e,o){"use strict";o("e87d")}});
//# sourceMappingURL=app.a9e45b3f.js.map