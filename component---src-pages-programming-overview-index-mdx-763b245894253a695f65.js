(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),i=a.n(b),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),s=a("TSYQ"),d=a.n(s),u=a("QH2O"),m=a.n(u),p=a("qKvR"),x=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=b.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,i=r.subDirectory,c=b+"/edit/"+r.branch+i+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+g.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},O=a("dI71"),h=a("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),b=r===n,c=new RegExp(n+"/?(#.*)?$"),l=a.replace(c,r);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(p.b)(o.Link,{className:h.link,to:""+l},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",null,Object(p.b)("ul",{className:h.list},r))))))},t}(r.a.Component),T=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,s=void 0===b?{}:b,d=t.relativePagePath,u=t.titleType,m=s.tabs,g=s.title,O=s.theme,h=s.description,w=s.keywords,k=Object(f.a)().interiorTheme,P=Object(o.useStaticQuery)("223705900").site.pathPrefix,N=P?n.pathname.replace(P,""):n.pathname,y=m?N.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",I=O||k;return Object(p.b)(l.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:h,pageKeywords:w,titleType:u},Object(p.b)(x,{title:r?Object(p.b)(r,null):g,label:"label",tabs:m,theme:I}),m&&Object(p.b)(v,{slug:N,tabs:m,currentTab:y}),Object(p.b)(T.a,{padded:!0},a,Object(p.b)(j,{relativePagePath:d})),Object(p.b)(c.a,null))}},aHZU:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),i=a("XbGe"),o=(a("qKvR"),{}),c={_frontmatter:o},l=i.a;function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(l,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Overview"),Object(b.b)("p",null,"Coming soon …"))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-programming-overview-index-mdx-763b245894253a695f65.js.map