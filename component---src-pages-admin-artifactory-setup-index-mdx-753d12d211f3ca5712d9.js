(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),n=a.n(i),r=a("NmYn"),s=a.n(r),o=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),p=a("TSYQ"),l=a.n(p),d=a("QH2O"),m=a.n(d),g=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,n=e.tabs,r=void 0===n?[]:n;return Object(g.b)("div",{className:l()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===i,t))},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12"},Object(g.b)("h1",{id:"page-title",className:m.a.text},a)))))},u=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||i,r=n.baseUrl,s=n.subDirectory,c=r+"/edit/"+n.branch+s+"/src/pages"+t;return r?Object(g.b)("div",{className:"bx--row "+u.row},Object(g.b)("div",{className:"bx--col"},Object(g.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),y=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(y.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=s()(e,{lower:!0,strict:!0}),r=n===i,c=new RegExp(i+"/?(#.*)?$"),b=a.replace(c,n);return Object(g.b)("li",{key:e,className:l()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(g.b)(o.Link,{className:O.link,to:""+b},e))}));return Object(g.b)("div",{className:O.tabsContainer},Object(g.b)("div",{className:"bx--grid"},Object(g.b)("div",{className:"bx--row"},Object(g.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(g.b)("nav",null,Object(g.b)("ul",{className:O.list},n))))))},t}(n.a.Component),w=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,n=e.Title,r=t.frontmatter,p=void 0===r?{}:r,l=t.relativePagePath,d=t.titleType,m=p.tabs,u=p.title,y=p.theme,O=p.description,k=p.keywords,x=Object(N.a)().interiorTheme,C=Object(o.useStaticQuery)("2456312558").site.pathPrefix,v=C?i.pathname.replace(C,""):i.pathname,S=m?v.split("/").filter(Boolean).slice(-1)[0]||s()(m[0],{lower:!0}):"",B=y||x;return Object(g.b)(b.a,{tabs:m,homepage:!1,theme:B,pageTitle:u,pageDescription:O,pageKeywords:k,titleType:d},Object(g.b)(A,{title:n?Object(g.b)(n,null):u,label:"label",tabs:m,theme:B}),m&&Object(g.b)(j,{slug:v,tabs:m,currentTab:S}),Object(g.b)(w.a,{padded:!0},a,Object(g.b)(h,{relativePagePath:l})),Object(g.b)(f.a,{pageContext:t,location:i,slug:v,tabs:m,currentTab:S}),Object(g.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WnB4:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return A}));var i=a("wx14"),n=a("zLVn"),r=(a("q1tI"),a("7ljp")),s=a("013z"),o=a("T0C+"),c=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},p=b("PageDescription"),l=b("InlineNotification"),d=b("ArtDirection"),m={_frontmatter:c},g=s.a;function A(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)(g,Object(i.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(p,{mdxType:"PageDescription"},Object(r.b)("p",null,"Complete the steps for setting up the Artifactory tool")),Object(r.b)(l,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note"),": As of v1.9.0 of the Artifactory module, these steps have been automated and should not be required after a ",Object(r.b)(o.a,{name:"tinyName",mdxType:"Globals"})," install. The\ninstructions are provided here to understand what steps are required to manually integrate the Artifactory instance into the pipelines.")),Object(r.b)("h2",null,"Overview"),Object(r.b)("p",null,"Artifactory is the ",Object(r.b)("a",{parentName:"p",href:"/tools/artifact-management"},Object(r.b)(o.a,{name:"env",mdxType:"Globals"}),"’s artifact repository manager"),".\nBefore you can use it as part of the ",Object(r.b)("a",{parentName:"p",href:"/tools/continuous-integration"},"continuous integration pipeline"),",\nit first must be configured as part of the environment."),Object(r.b)("h2",null,"Configuration"),Object(r.b)("p",null,"Set up Artifactory in the ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," with a Helm repository.\nAlso, set up the ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," to access Artifactory."),Object(r.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Warning:")," The version of Artifactory that is installed into the cluster is\nnot configured for high availability. It is limited to the\nstorage size of your cluster. It is highly recommended you integrate your\npipelines with an enterprise grade Helm repository or artifact\nmanagement\nsystem.  ")),Object(r.b)("h3",null,"Set up Artifactory"),Object(r.b)("p",null,"Create a repository in Artifactory for storing Helm charts."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(r.b)("a",{parentName:"p",href:"/getting-started/dashboard"},Object(r.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Log into Artifactory using the default userid and password, ",Object(r.b)("inlineCode",{parentName:"p"},"igc credentials")," can show these values. The first time\nyou log in the Welcome Page will prompt you to configure Artifactory using the Onboarding Wizard.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Get Started")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2UlEQVQoz52SS2tTQRiG84dciDurzb1ii00lzaURTVPFW42b6MKFmJUiVBSKLlwJCm6kS3+CghuxSmMrqFRNChpzPJdkcjLnPM6cpgmoodQPXr6ZYeb5bhOKHc2jFZ+cI3Iky7H0AqZlo833ffZqod2Ae9EQqGDxqT4wX8K0/y9DfT8UwJI5EhN5IlNZpksaaPUvgOu5dGQHIQXtXjvY6/XOmfaOOh9mOF0gfOE0kYsLRLMZUovzmI41iFp36qw237JubAT+k/mZWus9a60aaz9rbBgf2LQ2t4G+BqYKjC2VObRcJnomy0yliNm2B0BDGAHkm10P9MX6SsPeouFsqWANmqL5x1DSBaKLRaLXSsQuZzh+/ZQC9kvWIbtq4Si1QZgSo+Xg2AJXSGTPx+1KRLeLEC5SeoQSszmSJzNMlHPEr6ZJ3VFTFsMMX39/w5P1pzxWWv3xLiir50k8z0MqL5X3PD/YB0OJn1NDuVIgWT1B7GaemfvzWJ1hD3Xfnn1cCaR7p83zvdH/MHz3PJFbqtylEonlOWYf5LGENfLhztmovxg6/PAS4XtnGX9U5uDzCpNKpusMHmnAdmnyL9g/MxyvFjmwUmH/yyr7Xtxg7NVtfql/NSqL3ew3aGY7WTU/PIMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png",srcSet:["/static/172c192d1918479d1859274b4c7f78fe/7fc1e/1-jfrog.png 288w","/static/172c192d1918479d1859274b4c7f78fe/a5df1/1-jfrog.png 576w","/static/172c192d1918479d1859274b4c7f78fe/3cbba/1-jfrog.png 1152w","/static/172c192d1918479d1859274b4c7f78fe/0b124/1-jfrog.png 1728w","/static/172c192d1918479d1859274b4c7f78fe/ee6ee/1-jfrog.png 2088w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The first step of the setup wizard is to change the default password. It is\nrecommend you use a password generated by a password manager. ",Object(r.b)("a",{parentName:"p",href:"https://1password.com"},"1Password\n")," is the tool IBM recommends to its employees."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1005px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.888888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVQ4y51TzU7CQBjsY0FiYvmRYitQogFbhOiBaEz0ATh58GlMfBE1njxKDEW8cbCl0NJtx90tLQRpUTaZzGbbbzrz7VehrJ1BVBoQ5QbyFQ3ZnIqrmx4IIUhbQRD8AltCVe+iWNM5CjUNGSZ424PnEQyHnxiNvjAYGJRHMIyQfZ8kfkRQjruQKh2OotxCZj8UZA6tiQ3TnOCbwrJs2PYM0+kMrjuHO/dCXuxjh3X9GqVKG1K1A7l+gb3CSRzZcVwqMqWO/K1xl5Gbl7GYrJ4jK9Zjh4T4NLoX76OitL4KqsYc0rhKC/lD2kNxGdlxHExsm/Oqi1SHB0dtLlaQdS6YXRFkL7G460VpTgWxREdGanKsO9xUvC22kCufIkKS4H/wJ8HNF7B85gc+SEA47+wwqQWpgpsuJTpjIOyPoXp96wMPxiPezf5ukdkZm0uyGPiX8Svu3u7xNH7GD7QwZYQ7UOT3AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Reset Password",title:"Reset Password",src:"/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png",srcSet:["/static/144cf83a48b366e08a6c246d0bf918ec/7fc1e/2-resetpassword.png 288w","/static/144cf83a48b366e08a6c246d0bf918ec/a5df1/2-resetpassword.png 576w","/static/144cf83a48b366e08a6c246d0bf918ec/0ba0f/2-resetpassword.png 1005w"],sizes:"(max-width: 1005px) 100vw, 1005px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Save the password somewhere safe or in your password manager; you will need to\nmanually update the password in the  ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," that is stored in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace/project\ncalled ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),". There are more detailed instructions after you\nhave completed the setup wizard."))),Object(r.b)("p",null,"The next step is to define the base url that will be used by the server. "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"From the browser you are currently using copy the ",Object(r.b)("inlineCode",{parentName:"p"},"URL")," from the address bar."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABI0lEQVQoz62SW07CQBiFZ1VeXkzFWiq9IqFQBBGNcQ/EaHys2zBxQW7ANyD0RXnpbabHmcEWjEm1xj85+SeT+b+cMzNEOz2H5oyg22O02hfYV1xM7wKISpIEaZoiyzJUVZ7nZSdq30fD7UExPBy1fOwc2JjeP8oD88UCs9kcy2XIoRSUrrVZM9kLoChieBNo7SFUx0fTHmFPcThw7TCKYsRxIgcF5Js+4QJYiFjdGx51AoPL7Fxy4CaygInI2wM/iZjda2jcmWoMoFlDHtkqHRZJagGNzhV0d4xj8wyNkz525R0GX0B1iihND0KHem/rUYLazkqHAiQkoP8KrHJYK3IVkDH2K1dvyTvCKATL2d+AYl9+cJqBphRPr8+4fXnAKl3hAxTQ44zhUP0JAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png",srcSet:["/static/57b6570fd198faa11ab380c6dfada830/7fc1e/3-baseurl.png 288w","/static/57b6570fd198faa11ab380c6dfada830/a5df1/3-baseurl.png 576w","/static/57b6570fd198faa11ab380c6dfada830/3cbba/3-baseurl.png 1152w","/static/57b6570fd198faa11ab380c6dfada830/0b124/3-baseurl.png 1728w","/static/57b6570fd198faa11ab380c6dfada830/9ae98/3-baseurl.png 2082w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Paste the URL into the ",Object(r.b)("strong",{parentName:"p"},"Select Base URL")," form and remove any trailing\ncontext roots, similar to the one in this view."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABOUlEQVQoz62Sy0rDQBSG56mqGy+tjU0Tk6YgTdOrggg+gwuXVqhLC76WW9d1YySYNo3tzOR3ZpIUCyVa8ISPs8jwz3eYQ7TmAKd2H7o9gNG8wP5RA/fjJ8haLpdgjIJzjqJK5Jck6hzRPA8V20XZdFE1OygdWHh4nKiD0+mbwvc/RDDfCheIvHURo30Jzemg6nio2T3sCcNRZjiLIiy+YqwoLYQnXBnKYNJwb6A3hqgL8pFH49TwPfARhAHCKFR8ztM+W8zWhFFKvIrV6MQ8v4Jm9YRdXyFHzg0pZ+p2JvoGyY+ekVsSq3UN3RlCO+uiUm+jdGivH0U9RoKdihzXWijrruLE8ESgtREob90Fkof9e6A03Ra4axUaMsb+ZIVsZX4dWS7utgBpLv9RuYOUY/L6jNuXO8zpHN8VHuOcJOx5CwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png",srcSet:["/static/7b0f9f8ea40e638e35b4fd8d256d3598/7fc1e/3-baseurl-complete.png 288w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/a5df1/3-baseurl-complete.png 576w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/3cbba/3-baseurl-complete.png 1152w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/0b124/3-baseurl-complete.png 1728w","/static/7b0f9f8ea40e638e35b4fd8d256d3598/d33b7/3-baseurl-complete.png 2076w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Configure a Proxy Server page. This is to\nsetup a proxy for external resources. You can click ",Object(r.b)("strong",{parentName:"p"},"Next")," to skip this\nstep."),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.29166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABZklEQVQoz42Sy07CQBSG+1ToRhGkXJQWvASsFDDR+A4u3OhCt7ox8a1cu0RwYRNjBcowM/2dCyMV2+hpTk6n0/79v3PGsve7sF0fZcdHrdnHer6Bq5s7yJjP52CMqeScq0opRRzHal9WnfpevmPZhz2U3S4qThfluo+1TRfXt/fqg8HgBaPRCMPhUNRXBEGg1lLUCK6Gtds5gb3Xgd04RtFpI5d3hKB2+Ba8IwwnKj/CMcLPCQihwrlOSpmqhGgSJej6pyg1PBScFkpNTwsukKMoAhMY0gljXLVAo8UJ3GVqhwdnAreHqtsX2UNuYylIxV9NfwzdqkAy5DPLaZ2jKoZh1zso1o6Qkz1MDCXNRVYowUK1DZPbO54SNFPmC9ykWBrqD+Q0QeNwMp2qZpsjEc1m3+s/BbcqrV+CRCAnXcqpJtcJWHVlOsxCznQW/7OH8qikYcmDTQhRlVOOh+dHXDxdYkzH+AIHLuKznJuOzQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Base URL",title:"Base URL",src:"/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png",srcSet:["/static/b568c150189a10c0137c612fdeb67ed8/7fc1e/4-proxy.png 288w","/static/b568c150189a10c0137c612fdeb67ed8/a5df1/4-proxy.png 576w","/static/b568c150189a10c0137c612fdeb67ed8/3cbba/4-proxy.png 1152w","/static/b568c150189a10c0137c612fdeb67ed8/0b124/4-proxy.png 1728w","/static/b568c150189a10c0137c612fdeb67ed8/87d20/4-proxy.png 2078w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Create Repositories page. Since the open source release of\nArtifactory doesn’t provide a package for Helm repositories, we will use a generic repository to hold the helm\nartifacts.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Generic"),", then press ",Object(r.b)("strong",{parentName:"p"},"Next")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABmElEQVQoz32TS1PCMBSF+88EBApVBnREHiriyo2/wYU/TLfO6M6lLpXhKY+2NG3THm/SpAJW7syZm3amX849SY3Dow4K1TYOrQ5yZkv2yWSG/yqO47RvShTnHIZ52oPV6KN60kfxqCvh0+k3bHuFwWCA4XBEGsq14zhb0KzNjHLjCpV6DwWrjYNyM3E4ncF1PYzHMwmfCJFrd+1lutt0mQBrPVTr1+TwgoDtdGQxQhhyRDySz1EUKcWya7h+J5hGqUnZ1ZooNFrIVc63MpzP51iQlo6LUAEkRPW17yOkTTddG9bZDYq1LvJWCwdmMvJYAd8/PuDYNp6G3xh5DCtnDM9fw14uJfbx+RWflK92L4Gl40sJyVcIWP7rkDGGhe3Q6CEpAI+4XAsAo0w5rWMJVA5z5CpnnmcCGfMl8De7Han8OI/STA0B0toFimuypPGEo30lDyZWI+8DCneigiBIRlRufTqM5AaEqTNdmUB9KBqkP9RdvBeny5VG3gif7pfMd6/D//4IARTidEdZwHD/9oDblzvM/QV+ABnzMDsICRrEAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Select Repo Type",title:"Select Repo Type",src:"/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png",srcSet:["/static/25b90936408bd8860843b8c66e9b253e/7fc1e/5-selectrepotype.png 288w","/static/25b90936408bd8860843b8c66e9b253e/a5df1/5-selectrepotype.png 576w","/static/25b90936408bd8860843b8c66e9b253e/3cbba/5-selectrepotype.png 1152w","/static/25b90936408bd8860843b8c66e9b253e/0b124/5-selectrepotype.png 1728w","/static/25b90936408bd8860843b8c66e9b253e/671e2/5-selectrepotype.png 2072w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"The next page in the wizard is the Onboarding Complete page. ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press ",Object(r.b)("strong",{parentName:"p"},"Finish")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.638888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABXklEQVQoz6WS226CQBCGeTNPraLVqGmU1nq67U0ve9Fn7EWfgXgAiy2JILDL8nd3QKIp1jadZEhI4Ntv/h2t1h6h1rrH1c0IFd1AtXmH5crC+UrSZ5KctKo4jqE1bqdodmfQezMJHkmgQcD9fg/TNLHZbGDbNizLAuc8h307JgNr9f4EendKhqX6IDcMIyZhDrZbF47ziXfnA7udD88PEASRhMeIGIPneWR2gBKw3hkT9Lr9kAOVRBCEiCIOxngKkIfEsaAfhVAtyPpgnAJ7Exq51Z9nGRpYrW35cwTXdRGGoQSyLLukMLvjd003xqi0DRq53Bimhsv12Yx+alVatWOgpA9Q1ocyw+HJLauRjj++VGRYlpBKw6Bxc8MC4K8NCSTt/gMUiaAmQwU6dBHwr1UIXGSXcs5Q7Z3qRK4OFzEW/hKmZ4IJdtmwKCe1Uowz2iSP+Xh+e8Hj6xOswMYXB4UzJ6wO0FwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Setup Complete",title:"Setup Complete",src:"/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png",srcSet:["/static/a77a04de8b5f3da43762e4473f31c591/7fc1e/5-createcomplete.png 288w","/static/a77a04de8b5f3da43762e4473f31c591/a5df1/5-createcomplete.png 576w","/static/a77a04de8b5f3da43762e4473f31c591/3cbba/5-createcomplete.png 1152w","/static/a77a04de8b5f3da43762e4473f31c591/0b124/5-createcomplete.png 1728w","/static/a77a04de8b5f3da43762e4473f31c591/c0f60/5-createcomplete.png 2074w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("h3",null,"Allow Anonymous Access to Artifactory"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Open the Artifactory dashboard from the ",Object(r.b)("a",{parentName:"p",href:"/getting-started-day-1/dashboard"},Object(r.b)(o.a,{name:"dashboard",mdxType:"Globals"}))," and login")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click on the ",Object(r.b)("strong",{parentName:"p"},"Settings")," tab on the left menu (the one with the gear icon), and then select\n",Object(r.b)("strong",{parentName:"p"},"Security"),"\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.555555555555554%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsTAAALEwEAmpwYAAABGElEQVQY05WPXytDcRzGDzeuFZELOsvVOpg1a4yJacQLIFdrceFSK4XlYne8HbHZiVyQN8LihvO/nT87H/ttasokn3oufk/f36ceKSLPEJ1KIo9Ps7NdQL295/KqynWlRk2946ZHKlWVh8cnTkpllNg86cw6mZVNUuk1pOTBMom9JeScQvGihKFbPL/Uqb++oRkmhmmh94joNd3kXdO7+dCQYrtpFvJZIlsKh+fHCGzHxrZtfN/jv0jx2CqJeBZ5YpZi8axdOo6DZVktqUOj0cB1XcIw/DO+HyClMhvMLeaYjCY5Oi23haaQOR1ZEAQ0m832B8FvMoG4lQaHRhgeHaOvf4B8Yb8zuTXX8/wvUXdO+P3Bz14IPwGAV5DQFx04eAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Security Configuration",title:"Security Configuration",src:"/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png",srcSet:["/static/b732ce47a32934a5207a5e33dcb5b15a/7fc1e/securitysettings.png 288w","/static/b732ce47a32934a5207a5e33dcb5b15a/a5df1/securitysettings.png 576w","/static/b732ce47a32934a5207a5e33dcb5b15a/3cbba/securitysettings.png 1152w","/static/b732ce47a32934a5207a5e33dcb5b15a/a3d24/securitysettings.png 1241w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Check the ",Object(r.b)("inlineCode",{parentName:"p"},"Allow Anonymous Access")," check box and press ",Object(r.b)("strong",{parentName:"p"},"Save")))),Object(r.b)("h3",null,"Obtain the encrypted password"),Object(r.b)("p",null,"To enable the CI pipelines (",Object(r.b)("a",{parentName:"p",href:"/tools/jenkins"},"Jenkins"),", ",Object(r.b)("a",{parentName:"p",href:"/tools/tekton"},"Tekton"),", etc.)\nto store the Helm artifacts in the Artifactory repository, we need to obtain\nArtifactory’s encrypted password and save it where the pipeline can access the password — in the ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nKubernetes secret in the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace in the Development Tools environment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, press the ",Object(r.b)("strong",{parentName:"p"},"Welcome, admin")," menu button in the top right corner of the console and select ",Object(r.b)("strong",{parentName:"p"},"Edit profile"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the User Profile: admin page, enter you Artifactory password and press ",Object(r.b)("strong",{parentName:"p"},"Unlock")),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"601px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"37.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVQoz6WRv04DMQzG7+mYEBMTE++GkFAlRsSMGHiIdkClpQzQuySXJnHifDi5BnVqQVj6yX8Sf5bsbr35QGO5WmM7KHiKcIFOsjug1TptRjSUNtg5D4pJiCdISJGRUq6UPEi9yznDe48QApxzICKU2m8gJvgkvRzAmVGsYy5TGJNP1R8TSZxq41wvcPF8iauXa5w9nePh/XESxB9NZKvfUo+75Qyzt3vcvN5ibhaTYG8DtCMEOYSXpfr9cv0RynskRtU+oO5w1VtsBgtjHQZtoYxFr8Ya/2D2SNzrsf4p+afS+CpoLZcOMkwEE7cR/7O242/TyGwhsoD5MAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"API Key",title:"API Key",src:"/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png",srcSet:["/static/13e529470af59505b57fc76d0586f5ab/7fc1e/jfrogapikey.png 288w","/static/13e529470af59505b57fc76d0586f5ab/a5df1/jfrogapikey.png 576w","/static/13e529470af59505b57fc76d0586f5ab/577a7/jfrogapikey.png 601w"],sizes:"(max-width: 601px) 100vw, 601px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("p",null,"Below, in the ",Object(r.b)("strong",{parentName:"p"},"Authentication Settings")," section, is the ",Object(r.b)("strong",{parentName:"p"},"Encrypted Password")," field."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press the ",Object(r.b)("strong",{parentName:"p"},"Eye")," icon to view the encrypted password and press the ",Object(r.b)("strong",{parentName:"p"},"Cut & Paste")," icon to copy it"),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"550px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAArklEQVQoz62R2QqEMAxF+///6YNQbSsuLS4ZTiBFnfHJCRzahpLk3rht22QcR5nnWdn3XdZ1VSyO4/iCfxbcLe949H0v3ns9IcaokEsp1WbGNE3akL9t29amhOPChMMwKBSiCGcIQXPLslwwJTRsmuaiwt2lvAktiIdM03WdToQMJsw5SynlESSbl9SokkmYVMOk4hV2nLEcDc1PpNsS3a8Nnjf5xN2mOqH8MSj6Aa+xc3mJ6Sf8AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png",srcSet:["/static/a9126a60fc81ab00711dd5e2212845b5/7fc1e/viewapikey.png 288w","/static/a9126a60fc81ab00711dd5e2212845b5/50322/viewapikey.png 550w"],sizes:"(max-width: 550px) 100vw, 550px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Now we have obtained the ",Object(r.b)("strong",{parentName:"p"},"Encrypt")," key and had kept a copy of the\nPassword we changed on the initial setup wizard. We need to update the\nsecrets that stores these inside the cluster."))),Object(r.b)("h3",null,"Update the secret - OpenShift 4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the OpenShift 4 console, go to ",Object(r.b)("strong",{parentName:"p"},"Administrator")," > ",Object(r.b)("strong",{parentName:"p"},"Workloads")," > ",Object(r.b)("strong",{parentName:"p"},"Secrets"),". At the top, select the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," project and filter for ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory"),". Select ",Object(r.b)("strong",{parentName:"p"},"Edit Secret")," on ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),". (You do not need to base encode these values the OpenShift console does this for you.)\n",Object(r.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1006px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.09722222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsTAAALEwEAmpwYAAACbUlEQVQ4y52Sa08TURCGt0jSpIkBryUNqC29UCilBYSYVFEUCUjBGoVo/AteY7zED4pojEm/kpDS/2aCWpLe977b7u7LnLPYGCl+8CRP5uRk9p2Zd1YIhkJI+f24mskgGo1iaGgQgUAAXq8XPT09x+PxwHOiF72+k+jv60Mf4fP5IIQjMcTjY0imJhGOxjAQGER2dQ3FYhH5fB7b29vY2dk5nsIudnddCoUChInJy5i5kkFiYhKhyAhOnxvAq9dv8b9HiCeSiMRGcSEYRpgiE3zy7AVsy0K5XEaj0YAoijBNEwZhdqWFVstFSCTTYF0GwzEueOqsnwuyI8uyK2QY0HW9g6ZpHHZXVZUXrNVqPFcYS6YQiydwMRTpCD59/pILlkolVCqVDtVqtRNZMUmSqJjJO2NFLZqKBNOIjY7j0nD0iGCz2eQdKIpyiHtnb7/fmTXuceA4DoSRsSSitGXm4TAtpf/M+c7I7XabJ/0L1WhDI3SzDdu2IVy7cQvXby4gmZ5GenqWb/rNu/dckHnCkhjdxFhXomZB0i3IhuV2uJzbwFI2h8zcPAnfRmpqFptbX+CQCPOKjV2vN2D9JWozbFcUf7wLC4vLWFpZw9z8Ali349Tph80tSrLJdJHM1jm6rnE0VSFU6JpKm3aRZYk23SSL6LdZXM4id38dLLIOx1NTXJBswfe9fez9KuNHqczjz/0KyjURlTptWDFdVBNNWUdNVLmXwoONR1h/+JgL3lm9y0f/+i0P3QZ9KFGygYakcUTF4IW6oROi5rgdrqzd4yO7Hs7g46fPfCk1uUVJ9iEOjw3VOkKTqCsWbdzGAalJU8Em8E8fAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Initial JFrog",title:"Initial JFrog",src:"/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png",srcSet:["/static/baf099ff7e1e093f55729f5d7260fd22/7fc1e/settingskeys.png 288w","/static/baf099ff7e1e093f55729f5d7260fd22/a5df1/settingskeys.png 576w","/static/baf099ff7e1e093f55729f5d7260fd22/72da9/settingskeys.png 1006w"],sizes:"(max-width: 1006px) 100vw, 1006px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update the values that you retrieved for the encrypt key and updated the admin password"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Add a key/value for ",Object(r.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_ENCRYPT")," and set the value to your encrypt key value"),Object(r.b)("li",{parentName:"ul"},"Update the ",Object(r.b)("inlineCode",{parentName:"li"},"ARTIFACTORY_PASSWORD")," value with thew new admin password"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Save")," in OpenShift console ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"View the secret in the console and confirm that the visible value of ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," matches the encrypted password shown in the Artifactory console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On the command line, run ",Object(r.b)("inlineCode",{parentName:"p"},"igc credentials")," and verify that the Artifactory details have been updated"))),Object(r.b)("h3",null,"Update the secret - Kubernetes and OpenShift 3"),Object(r.b)("p",null,"To update the secret in Kuberentes or Openshift 3, navigate to the ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," called ",Object(r.b)("inlineCode",{parentName:"p"},"artifactory-access"),"\nin the ",Object(r.b)("inlineCode",{parentName:"p"},"tools")," namespace and update the following values. You will need encode these value in base64 key before\nediting the secret."),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/secret/#creating-a-secret-manually"},"Kubernetes secrets"),"\nstore data in base64 format. So to store Artifactory’s encrypted password in a secret, it needs to be encoded into\nbase64."),Object(r.b)("p",null,"Any base64 encoding tool will work. For example:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Go to the ",Object(r.b)("a",{parentName:"p",href:"https://www.base64encode.org/"},"Base64 Encode")," website")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Paste the encrypted password into the online tool and press the ",Object(r.b)("strong",{parentName:"p"},"Encode")," button")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the field below, copy the encoded value into you clipboard or store it somewhere safe")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," value (under ",Object(r.b)("inlineCode",{parentName:"p"},"data"),") and paste in the Artifactory base64 key into the field")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Find the ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_PASSWORD")," value (under ",Object(r.b)("inlineCode",{parentName:"p"},"data"),") and paste in the"))),Object(r.b)("h2",null,"Rerun the Pipeline"),Object(r.b)("p",null,"Previously, when you deployed you first app, the pipeline’s Package Helm Chart stage didn’t store the chart because\nthe ",Object(r.b)("inlineCode",{parentName:"p"},"ARTIFACTORY_ENCRYPT")," property was not set. Now that it has been set, rerun your pipeline and check that the Helm\nchart for your app is stored correctly in Artifactory with matching semantic version information."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In the Artifactory console, select the Artifacts page and expand the ",Object(r.b)("inlineCode",{parentName:"p"},"generic-local")," repository"),Object(r.b)(d,{mdxType:"ArtDirection"},Object(r.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVElEQVQoz3VRS0oDQRCdo7lx5QV0YUIQwR8iKGqMqAjizpUHEDdB8BDJJDHoGTyAOAmZf39mpp9VnZk4Qnzw6KrqqtdV1c7K6hr2Do+x2dzGzv4JDo46eHruYjgao+cO4Q7e0B+M0Hf/stcfYjR+R/flFc3WLjYaW1hvtODcPzyCEcQxVJZbOzMGQmmkQiKOE2R5gYJi/7EOp3N9B0UFX94EMQkInSElCq0RqQiBCpAXeZluYExBNAsWBflEvpNKwWlf3trUKIrsZQW2hRDI87mYomQpJZZBUkOfYQJJjTjnFzc2GIbhonj+skGaplBSzVcSBJjNZjaWJMnvmcT4JrGPiQ+dkeAZCbLAdDq1XdRHYZ/JsOJk86MZFVbU1JUpJ9P0BwtBz/PoA+IySduTR+ZVsM1C9ZXUYcrPsYKn7SsbrIp5DCbvi33f963PolXxMqIU/AF6ulPe3PrqxgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Artifact Repository Browser",title:"Artifact Repository Browser",src:"/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png",srcSet:["/static/198eae5ba5dc1fb394205d3f2167cd39/7fc1e/artifact-repo-browser.png 288w","/static/198eae5ba5dc1fb394205d3f2167cd39/a5df1/artifact-repo-browser.png 576w","/static/198eae5ba5dc1fb394205d3f2167cd39/3cbba/artifact-repo-browser.png 1152w","/static/198eae5ba5dc1fb394205d3f2167cd39/46052/artifact-repo-browser.png 1382w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("p",null,"You will see a folder named after your resource group containing the tar file for a Helm chart."),Object(r.b)("h2",null,"Conclusion"),Object(r.b)("p",null,"Artifactory is now set up in your ",Object(r.b)(o.a,{name:"env",mdxType:"Globals"})," and CI pipelines can\nstore Helm charts in Artifactory repository. Artifactory can now be used as a\nHelm repository for CD tools like ArgoCD and IBM Cloud Pak for Multi\nCloud\nManagement."))}A.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-artifactory-setup-index-mdx-753d12d211f3ca5712d9.js.map