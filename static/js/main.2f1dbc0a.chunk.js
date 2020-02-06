(this["webpackJsonpgoit-react-phonebook"]=this["webpackJsonpgoit-react-phonebook"]||[]).push([[0],{13:function(e,t,n){e.exports=n(26)},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),i=n(2),u=n(3),o=n(6),m=n(7),d=n(8),s=n(11),b=n(9),f=n(12),h=function(e){var t=e.title,n=e.children;return r.a.createElement("section",null,r.a.createElement("h3",null,t),n)},E=function(e){var t=e.handleSubmit,n=e.handleChange,a=e.number,l=e.name;return r.a.createElement("form",{onSubmit:t},r.a.createElement("div",null,r.a.createElement("label",null,"Name")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"name",onChange:n,value:l})),r.a.createElement("div",null,r.a.createElement("label",null,"Number")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"number",onChange:n,value:a})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"},"Add contact")))},p=function(e){var t=e.data,n=e.deleteContact;return r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},e.name," ",e.number," ",r.a.createElement("button",{type:"button",onClick:function(){return n(e.id)}},"delete"))})))},v=function(e){var t=e.findContact,n=e.filterValue;return r.a.createElement("div",null,"Find contacts by name ",r.a.createElement("input",{type:"text",onChange:t,value:n}))},C=n(10),g=n.n(C),y={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],name:"",filter:"",number:"",filteredArr:[]},S=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state=Object(o.a)({},y),n.addContactWithId=function(){var e=n.state;return{name:e.name,number:e.number,id:g()()}},n.preventDublication=function(){var e=n.state,t=e.contacts,a=e.name;return t.some((function(e){return e.name===a}))},n.handleSubmit=function(e){e.preventDefault(),n.preventDublication()?alert("Dublication Alert"):n.setState((function(e){return{contacts:[].concat(Object(u.a)(e.contacts),[n.addContactWithId()]),name:"",number:""}}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(i.a)({},a,r))},n.findContact=function(e){var t=e.target.value;n.setState({filter:t.toLowerCase(),filteredArr:Object(u.a)(n.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)})))})},n.deleteContact=function(e){n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e})),filteredArr:t.filteredArr.filter((function(t){return t.id!==e}))}}))},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,a=e.filteredArr;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{title:"Phonebook"},r.a.createElement(E,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,name:this.state.name,number:this.state.number})),r.a.createElement(h,{title:"Contacts"},r.a.createElement(v,{findContact:this.findContact,filterValue:n}),n?r.a.createElement(p,{data:a,deleteContact:this.deleteContact}):r.a.createElement(p,{data:t,deleteContact:this.deleteContact})))}}]),t}(a.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2f1dbc0a.chunk.js.map