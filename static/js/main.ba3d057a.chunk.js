(this.webpackJsonpblog=this.webpackJsonpblog||[]).push([[0],{19:function(e,t,a){e.exports={Row:"Blog_Row__2uXom",Column:"Blog_Column__3W-eZ",Leftcolumn:"Blog_Leftcolumn__2pjB_",Rightcolumn:"Blog_Rightcolumn__2JsJa"}},33:function(e,t,a){e.exports={Header:"Header_Header__3w3i_"}},34:function(e,t,a){e.exports={Card:"Card_Card__2v91Y"}},35:function(e,t,a){e.exports={Spinner:"Spinner_Spinner__24ERy",load8:"Spinner_load8__1FLaS"}},36:function(e,t,a){e.exports={CardLink:"Posts_CardLink__11PGE"}},37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(30),r=a.n(o),c=(a(42),a(43),a(6)),i=a(7),s=(a(44),function(e){return l.a.createElement("nav",{className:"Nav"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.c,{to:"/",exact:!0},"HOME")),l.a.createElement("li",null,l.a.createElement(c.c,{to:"/about"},"ABOUT THIS"))))}),u=a(33),m=a.n(u),d=function(e){return l.a.createElement("header",null,l.a.createElement("div",{className:m.a.Header},l.a.createElement("h1",null,"React Blog"),l.a.createElement("p",null,"This is a dummy blog used to learn and practise some React concepts")),l.a.createElement(s,null))},h=a(14),p=a(10),E=a(11),f=a(13),g=a(15),b=a(12),v=a.n(b),y=a(34),_=a.n(y),w=function(e){return l.a.createElement("div",{className:_.a.Card},e.children)},C=function(e){return l.a.createElement(w,null,l.a.createElement("h2",null,e.title),l.a.createElement("h5",null,"Created: ",e.createdAt," by ",e.author),l.a.createElement("p",null,e.content))},S=a(35),j=a.n(S),A=function(e){return l.a.createElement("div",{className:j.a.Spinner},"Loading...")},x=a(36),k=a.n(x),M=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).randomDate=function(){return new Date("2019",Math.floor(10*Math.random()),Math.floor(10*Math.random())).toDateString()},n.randomAuthor=function(){return["Gladwyn Faron Beasley","Edweena Vic Derricks","Kermit Capricia Shelby","Frederica Madelyn Stephens","Theodore Lemoine Jerome"][Math.floor(4*Math.random())+0]},n.state={posts:[],loading:!0},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){var a=Math.floor(10*Math.random()),n=a+10,l=t.data.slice(a,n).map((function(t){return Object(h.a)({},t,{createdAt:e.randomDate(),author:e.randomAuthor()})}));e.setState({posts:l,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log("Something wrong happened",t)}))}},{key:"render",value:function(){var e=l.a.createElement(w,null,l.a.createElement(A,null));return this.state.loading||(e=this.state.posts.length?this.state.posts.map((function(e,t){return l.a.createElement(c.b,{key:t,to:"/posts/"+e.id,className:k.a.CardLink},l.a.createElement(C,{title:e.title,content:e.body,author:e.author,createdAt:e.createdAt}))})):l.a.createElement(w,null,l.a.createElement("p",null,"No posts available"))),l.a.createElement(n.Fragment,null,e)}}]),a}(n.Component),B=function(e){Object(g.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(p.a)(this,a),(n=t.call(this,e)).state={post:null,loading:!0},n}return Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;v.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then((function(t){for(var a="",n=0;n<20;n++)a+=t.data.body;var l=Object(h.a)({},t.data,{body:a,createdAt:new Date(2019,5,17).toDateString(),author:"Lorem Ipsum"});e.setState({post:l,loading:!1})})).catch((function(t){e.setState({loading:!1}),console.log("Something wrong happened",t)}))}},{key:"render",value:function(){var e=l.a.createElement(A,null);return this.state.loading||(e=this.state.post?l.a.createElement("div",null,l.a.createElement("h1",null,this.state.post.title),l.a.createElement("h3",{style:{textAlign:"left",color:"grey"}},"Created: ",this.state.post.createdAt," | Author:"," ",this.state.post.author),l.a.createElement("p",{style:{textAlign:"left"}},this.state.post.body)):l.a.createElement("p",{style:{color:"red"}},"Something went wrong")),l.a.createElement(w,null,e)}}]),a}(n.Component),O=function(e){return l.a.createElement(w,null,l.a.createElement("h1",null,"About this project"),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("p",null,"The focus of this project was to learn and put in practise some basic concepts about React. As you can see the blog contains dummy content."),l.a.createElement("p",null,"This project was created by create-react-app CLI. Below you can find the concepts used for this project:"),l.a.createElement("ul",null,l.a.createElement("li",null,"Functional and Class Components"),l.a.createElement("li",null,"Class Components life cycles"),l.a.createElement("li",null,"CSS Modules"),l.a.createElement("li",null,"Inline styles"),l.a.createElement("li",null,"React Router"),l.a.createElement("li",null,"Fetch data from external API with axios")),l.a.createElement("p",null,"This project is published using Github Pages."," ",l.a.createElement("a",{href:"https://praton90.github.io/crl-flexbox-challenge/index.html"},"You can take a look here")),l.a.createElement("p",null,"Blog's content is fetched from"," ",l.a.createElement("a",{href:"https://jsonplaceholder.typicode.com"}," ","JsonPlaceHolder API"))))},R=a(19),L=a.n(R),N=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(d,null),l.a.createElement("div",{className:L.a.Row},l.a.createElement("div",{className:L.a.Column},l.a.createElement(i.a,{path:"/",exact:!0,component:M}),l.a.createElement(i.a,{path:"/about",component:O}),l.a.createElement(i.a,{path:"/posts/:id",component:B}))))};var D=function(){return l.a.createElement(c.a,{basename:"/"},l.a.createElement("div",{className:"App"},l.a.createElement(N,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.ba3d057a.chunk.js.map