(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(29)},22:function(e,t,a){},23:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),c=a(14),r=a.n(c),m=(a(22),a(23),a(24),a(5));function s(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar bg"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement(m.b,{className:"navbar-brand",to:"/"},"TASK MANAGEMENT APPLICATION"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})))),n.a.createElement(m.b,{className:"btn btn-outline-primary",to:"/addtask"},"Add Task"))}var o=a(30),i=a(3);function d(){const[e,t]=Object(l.useState)([]),{id:a}=Object(i.g)();Object(l.useEffect)(()=>{c()},[]);const c=async()=>{const e=await o.a.get("http://localhost:8080/api/tasks");t(e.data)};return n.a.createElement("div",{className:"container-primary"},n.a.createElement("div",{className:"py-4"},n.a.createElement("table",{className:"table border"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",{scope:"col"},"ID"),n.a.createElement("th",{scope:"col"},"Title"),n.a.createElement("th",{scope:"col"},"Description"),n.a.createElement("th",{scope:"col"},"Status"),n.a.createElement("th",{scope:"col"},"CreatedAt"),n.a.createElement("th",{scope:"col"},"UpdatedAt"),n.a.createElement("th",{scope:"col"},"Action"))),n.a.createElement("tbody",null,e.map((e,t)=>n.a.createElement("tr",null,n.a.createElement("th",{scope:"row",key:t},t+1),n.a.createElement("td",null,e.title),n.a.createElement("td",null,e.description),n.a.createElement("td",null,e.status),n.a.createElement("td",null,e.createdAt),n.a.createElement("td",null,e.updatedAt),n.a.createElement("td",null,n.a.createElement(m.b,{className:"btn btn-outline-primary mx-2",to:"/viewtask/".concat(e.id)},"View"),n.a.createElement(m.b,{className:"btn btn-outline-primary mx-2",to:"/edittask/".concat(e.id)},"Edit"),n.a.createElement("button",{className:"btn btn-danger mx-2",onClick:()=>(async e=>{await o.a.delete("http://localhost:8080/api/tasks/".concat(e)),c()})(e.id)},"Delete"))))))))}var p=a(6);function u(){let e=Object(i.f)();const[t,a]=Object(l.useState)({title:"",description:"",status:"",createdAt:"",updatedAt:""}),{title:c,description:r,status:s,createdAt:d,updatedAt:u}=t,E=e=>{a(Object(p.a)(Object(p.a)({},t),{},{[e.target.name]:e.target.value}))};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"},n.a.createElement("h2",{className:"text-center m-4"},"Add New Task"),n.a.createElement("form",{onSubmit:a=>(async a=>{a.preventDefault(),await o.a.post("https://nikhilbharat-v7-back-end-production.up.railway.app/api/tasks",t),e("/")})(a)},n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"Name",className:"form-label"},"TITLE"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter TITLE",name:"title",value:c,onChange:e=>E(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"description",className:"form-label"},"DESCRIPTION"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter DESCRIPTION",name:"description",value:r,onChange:e=>E(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"Email",className:"form-label"},"STATUS"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter STATUS",name:"status",value:s,onChange:e=>E(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"Email",className:"form-label"},"CreatedAt"),n.a.createElement("input",{type:"date",className:"form-control",placeholder:"Enter CreatedAt",name:"createdAt",value:d,onChange:e=>E(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"updatedAt",className:"form-label"},"UpdatedAt"),n.a.createElement("input",{type:"date",className:"form-control",placeholder:"Enter UpdatedAt",name:"updatedAt",value:u,onChange:e=>E(e)})),n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Submit"),n.a.createElement(m.b,{className:"btn btn-outline-danger mx-2",to:"/"},"Cancel")))))}function E(){let e=Object(i.f)();const{id:t}=Object(i.g)(),[a,c]=Object(l.useState)({title:"",description:"",status:"",createdAt:"",updatedAt:""}),{title:r,description:s,status:d,createdAt:u,updatedAt:E}=a,b=e=>{c(Object(p.a)(Object(p.a)({},a),{},{[e.target.name]:e.target.value}))};Object(l.useEffect)(()=>{N()},[]);const N=async()=>{const e=await o.a.get("https://nikhilbharat-v7-back-end-production.up.railway.app/api/tasks/".concat(t));c(e.data)};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"},n.a.createElement("h2",{className:"text-center m-4"},"Edit User"),n.a.createElement("form",{onSubmit:l=>(async l=>{l.preventDefault(),await o.a.put("https://nikhilbharat-v7-back-end-production.up.railway.app//api/tasks/".concat(t),a),e("/")})(l)},n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"TITLE",className:"form-label"},"TITLE"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter TITLE",name:"title",value:r,onChange:e=>b(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"DESCRIPTION",className:"form-label"},"DESCRIPTION"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter your DESCRIPTION",name:"description",value:s,onChange:e=>b(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"STATUS",className:"form-label"},"STATUS"),n.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter STATUS",name:"status",value:d,onChange:e=>b(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"createdAt",className:"form-label"},"CreatedAt"),n.a.createElement("input",{type:"date",className:"form-control",placeholder:"Enter CreatedAt",name:"createdAt",value:u,onChange:e=>b(e)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"UpdatedAt",className:"form-label"},"UpdatedAt"),n.a.createElement("input",{type:"date",className:"form-control",placeholder:"Enter UpdatedAt",name:"updatedAt",value:E,onChange:e=>b(e)})),n.a.createElement("button",{type:"submit",className:"btn btn-outline-primary"},"Submit"),n.a.createElement(m.b,{className:"btn btn-outline-danger mx-2",to:"/"},"Cancel")))))}function b(){const[e,t]=Object(l.useState)({title:"",description:"",status:"",createdAt:"",updatedAt:""}),{id:a}=Object(i.g)();Object(l.useEffect)(()=>{c()},[]);const c=async()=>{const e=await o.a.get("https://nikhilbharat-v7-back-end-production.up.railway.app/api/tasks/".concat(a));t(e.data)};return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-6 offset-md-3 border rounded p-4 mt-2 shadow"},n.a.createElement("h2",{className:"text-center m-4"},"Task Details"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"Task id : ",e.id,n.a.createElement("ul",{className:"list-group list-group-flush"},n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"TITLE : "),e.title),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"DESCRIPTION : "),e.description),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"STATUS : "),e.status),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"CreatedAt : "),e.createdAt),n.a.createElement("li",{className:"list-group-item"},n.a.createElement("b",null,"UpdatedAt : "),e.updatedAt)))),n.a.createElement(m.b,{className:"btn btn-primary my-2",to:"/"},"Back to Home"))))}var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(m.a,null,n.a.createElement(s,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/",element:n.a.createElement(d,null)}),n.a.createElement(i.a,{exact:!0,path:"/addtask",element:n.a.createElement(u,null)}),n.a.createElement(i.a,{exact:!0,path:"/edittask/:id",element:n.a.createElement(E,null)}),n.a.createElement(i.a,{exact:!0,path:"/viewtask/:id",element:n.a.createElement(b,null)}))))};var h=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:c,getTTFB:r}=t;a(e),l(e),n(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null))),h()}},[[15,1,2]]]);
//# sourceMappingURL=main.4bf0311b.chunk.js.map