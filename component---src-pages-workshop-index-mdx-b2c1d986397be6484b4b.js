(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{BAC9:function(A,e,a){A.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(A,e,a){A.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(A,e,a){A.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(A,e,a){"use strict";var t=a("q1tI"),i=a.n(t),o=a("NmYn"),c=a.n(o),b=a("Wbzz"),s=a("Xrax"),n=a("k4MR"),r=a("TSYQ"),d=a.n(r),g=a("QH2O"),l=a.n(g),p=a("qKvR"),E=function(A){var e,a=A.title,t=A.theme,i=A.tabs,o=void 0===i?[]:i;return Object(p.b)("div",{className:d()(l.a.pageHeader,(e={},e[l.a.withTabs]=o.length,e[l.a.darkMode]="dark"===t,e))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:l.a.text},a)))))},j=a("BAC9"),m=function(A){var e=A.relativePagePath,a=A.repository,t=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||t,o=i.baseUrl,c=i.subDirectory,s=o+"/edit/"+i.branch+c+"/src/pages"+e;return o?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:s},"Edit this page on GitHub"))):null},B=a("dI71"),Q=a("I8xM"),w=function(A){function e(){return A.apply(this,arguments)||this}return Object(B.a)(e,A),e.prototype.render=function(){var A=this.props,e=A.tabs,a=A.slug,t=a.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(A){var e,i=c()(A,{lower:!0,strict:!0}),o=i===t,s=new RegExp(t+"/?(#.*)?$"),n=a.replace(s,i);return Object(p.b)("li",{key:A,className:d()((e={},e[Q.selectedItem]=o,e),Q.listItem)},Object(p.b)(b.Link,{className:Q.link,to:""+n},A))}));return Object(p.b)("div",{className:Q.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:Q.list},i))))))},e}(i.a.Component),x=a("MjG9"),u=a("CzIb");e.a=function(A){var e=A.pageContext,a=A.children,t=A.location,i=A.Title,o=e.frontmatter,r=void 0===o?{}:o,d=e.relativePagePath,g=e.titleType,l=r.tabs,j=r.title,B=r.theme,Q=r.description,f=r.keywords,h=Object(u.a)().interiorTheme,N=Object(b.useStaticQuery)("223705900").site.pathPrefix,Y=N?t.pathname.replace(N,""):t.pathname,k=l?Y.split("/").filter(Boolean).slice(-1)[0]||c()(l[0],{lower:!0}):"",y=B||h;return Object(p.b)(n.a,{tabs:l,homepage:!1,theme:y,pageTitle:j,pageDescription:Q,pageKeywords:f,titleType:g},Object(p.b)(E,{title:i?Object(p.b)(i,null):j,label:"label",tabs:l,theme:y}),l&&Object(p.b)(w,{slug:Y,tabs:l,currentTab:k}),Object(p.b)(x.a,{padded:!0},a,Object(p.b)(m,{relativePagePath:d})),Object(p.b)(s.a,null))}},dtLM:function(A,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return s})),a.d(e,"default",(function(){return j}));var t=a("wx14"),i=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("XbGe"),b=a("T0C+"),s=(a("qKvR"),{}),n=function(A){return function(e){return console.warn("Component "+A+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}},r=n("PageDescription"),d=n("Row"),g=n("Column"),l=n("ArticleCard"),p={_frontmatter:s},E=c.a;function j(A){var e=A.components,a=Object(i.a)(A,["components"]);return Object(o.b)(E,Object(t.a)({},p,a,{components:e,mdxType:"MDXLayout"}),Object(o.b)(r,{mdxType:"PageDescription"},Object(o.b)("p",null,"The Workshop is design to provide a quick way to try the methodology leveraging the tools that the ",Object(o.b)(b.a,{name:"tinyName",mdxType:"Globals"})," integrates.")),Object(o.b)(d,{mdxType:"Row"},Object(o.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(l,{color:"dark",title:"Setup Workshop Environment",href:"/workshop/setup",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAIAAf/aAAwDAQACEAMQAAABlo1CnJzL/8QAGRABAQEBAQEAAAAAAAAAAAAAAQMCACEy/9oACAEBAAEFAqDlKAtZvXOl7jX1/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8Bh//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/Aaf/xAAbEAADAAIDAAAAAAAAAAAAAAAAARECgSEiMf/aAAgBAQAGPwKXwuM2dnWaOUM//8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFRQf/aAAgBAQABPyGgrwbglYCKTMiUOzAt+4AkF9m6UOHf/9oADAMBAAIAAwAAABBQL//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QVWmI/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQEA/9oACAECAQE/EKAxbv/EABsQAQACAgMAAAAAAAAAAAAAAAEAESExQVFx/9oACAEBAAE/EFKAnofPYcS/aDM8b2kNCaKNSwTBo31LYkCwvUJhBQAVwT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"workshop",title:"workshop",src:"/static/f752eeaa6494ba4a6abe6030f544620a/2e753/workshop.jpg",srcSet:["/static/f752eeaa6494ba4a6abe6030f544620a/69549/workshop.jpg 288w","/static/f752eeaa6494ba4a6abe6030f544620a/473e3/workshop.jpg 576w","/static/f752eeaa6494ba4a6abe6030f544620a/2e753/workshop.jpg 1152w","/static/f752eeaa6494ba4a6abe6030f544620a/74f4b/workshop.jpg 1728w","/static/f752eeaa6494ba4a6abe6030f544620a/de5bb/workshop.jpg 2304w","/static/f752eeaa6494ba4a6abe6030f544620a/c4108/workshop.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(l,{color:"dark",title:"Deploy an Application using CI Pipelines with Tekton",href:"/workshop/ci",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABAACA//EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAWL13CyI/8QAGRABAAIDAAAAAAAAAAAAAAAAAwATAhAz/9oACAEBAAEFAixGUlKCg8df/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAHRAAAQMFAQAAAAAAAAAAAAAAAgABEQMQEjORcv/aAAgBAQAGPwIAek0uMzitQ8WseIPLX//EABwQAAIBBQEAAAAAAAAAAAAAAAABURAxQeHw8f/aAAgBAQABPyFhMCmBaTyQ9GOJFGf/2gAMAwEAAgADAAAAECDP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAHhAAAgEDBQAAAAAAAAAAAAAAAAExEBHwIWFxwdH/2gAIAQEAAT8QYIbMrbdZJl3Qw4OPIW2RopI//9k=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"ci tekton",title:"ci tekton",src:"/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg",srcSet:["/static/2bc0d80116900ec52da0b88a714ce5f3/69549/ci-tekton.jpg 288w","/static/2bc0d80116900ec52da0b88a714ce5f3/473e3/ci-tekton.jpg 576w","/static/2bc0d80116900ec52da0b88a714ce5f3/2e753/ci-tekton.jpg 1152w","/static/2bc0d80116900ec52da0b88a714ce5f3/74f4b/ci-tekton.jpg 1728w","/static/2bc0d80116900ec52da0b88a714ce5f3/de5bb/ci-tekton.jpg 2304w","/static/2bc0d80116900ec52da0b88a714ce5f3/c4108/ci-tekton.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(l,{color:"dark",title:"Promote an Application using CD with GitOps and ArgoCD",href:"/workshop/cd",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgADBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHsPNIo1f/EABgQAAMBAQAAAAAAAAAAAAAAAAACETIQ/9oACAEBAAEFAkxSi45//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhAAAwAAAAAAAAAAAAAAAAAAAhBx/9oACAEBAAY/AhjGP//EABwQAAEDBQAAAAAAAAAAAAAAAAEAECERMUFxgf/aAAgBAQABPyGNIGzK6ZPQf//aAAwDAQACAAMAAAAQyA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAdEAEAAgEFAQAAAAAAAAAAAAABABEhEDFBYZGB/9oACAEBAAE/ECtRd3wRYpWHcA5bH2YJ4o8Jvp//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cd argocd",title:"cd argocd",src:"/static/cc401817836267d940fce34038ba8192/2e753/cd-argocd.jpg",srcSet:["/static/cc401817836267d940fce34038ba8192/69549/cd-argocd.jpg 288w","/static/cc401817836267d940fce34038ba8192/473e3/cd-argocd.jpg 576w","/static/cc401817836267d940fce34038ba8192/2e753/cd-argocd.jpg 1152w","/static/cc401817836267d940fce34038ba8192/74f4b/cd-argocd.jpg 1728w","/static/cc401817836267d940fce34038ba8192/de5bb/cd-argocd.jpg 2304w","/static/cc401817836267d940fce34038ba8192/c4108/cd-argocd.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(o.b)(d,{mdxType:"Row"},Object(o.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(l,{color:"dark",title:"Deploy a 3 tier Microservice using React, Node.js, and Java",href:"/workshop/inventory",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHtanSgL//EABgQAAIDAAAAAAAAAAAAAAAAAAABAhMg/9oACAEBAAEFAsKTuP/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAEFAAAAAAAAAAAAAAAAAAECEBEgQf/aAAgBAQAGPwKhTkN//8QAGRABAQADAQAAAAAAAAAAAAAAAREAECEx/9oACAEBAAE/Ie0bw9xSW6fMQt5oNf/aAAwDAQACAAMAAAAQBA//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/ED//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/ED//xAAbEAEAAgIDAAAAAAAAAAAAAAABACEQETFR0f/aAAgBAQABPxBOElTuDrBiymzgLQKa9x//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"inventory",title:"inventory",src:"/static/8486a659711f7bb958b5ee674b5c7e70/2e753/inventory.jpg",srcSet:["/static/8486a659711f7bb958b5ee674b5c7e70/69549/inventory.jpg 288w","/static/8486a659711f7bb958b5ee674b5c7e70/473e3/inventory.jpg 576w","/static/8486a659711f7bb958b5ee674b5c7e70/2e753/inventory.jpg 1152w","/static/8486a659711f7bb958b5ee674b5c7e70/74f4b/inventory.jpg 1728w","/static/8486a659711f7bb958b5ee674b5c7e70/de5bb/inventory.jpg 2304w","/static/8486a659711f7bb958b5ee674b5c7e70/c4108/inventory.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(o.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(o.b)(l,{color:"dark",title:"App Modernization with modern DevOps",href:"/workshop/appmod",mdxType:"ArticleCard"},Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHWa8xS5L//xAAYEAEBAQEBAAAAAAAAAAAAAAABAhAAE//aAAgBAQABBQJ9DmqUKyM//8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BV//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EAB0QAAECBwAAAAAAAAAAAAAAAAEAEQISICExUWH/2gAIAQEABj8CcCbjpoBbazR//8QAHBAAAgICAwAAAAAAAAAAAAAAAREAECExQXGh/9oACAEBAAE/IW0geyYgozyM66gwyntAnX//2gAMAwEAAgADAAAAEPsv/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oACAEDAQE/EK25e//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBukP/EAB0QAQEAAgEFAAAAAAAAAAAAAAERAEEhEDFRYYH/2gAIAQEAAT8Qb2rlY9h7UwiKDJPht3oxJWng048uJSOCEW3avT//2Q==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"appmod",title:"appmod",src:"/static/99db9f632bd6b6a551fd5e268149bcfe/2e753/appmod.jpg",srcSet:["/static/99db9f632bd6b6a551fd5e268149bcfe/69549/appmod.jpg 288w","/static/99db9f632bd6b6a551fd5e268149bcfe/473e3/appmod.jpg 576w","/static/99db9f632bd6b6a551fd5e268149bcfe/2e753/appmod.jpg 1152w","/static/99db9f632bd6b6a551fd5e268149bcfe/74f4b/appmod.jpg 1728w","/static/99db9f632bd6b6a551fd5e268149bcfe/de5bb/appmod.jpg 2304w","/static/99db9f632bd6b6a551fd5e268149bcfe/c4108/appmod.jpg 2738w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-workshop-index-mdx-b2c1d986397be6484b4b.js.map