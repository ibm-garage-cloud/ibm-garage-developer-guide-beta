(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Punm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return m}));var n,i=a("wx14"),r=a("zLVn"),l=(a("q1tI"),a("7ljp")),b=a("XbGe"),o=(a("T0C+"),a("qKvR"),{}),c=(n="PageDescription",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(l.b)("div",e)}),p={_frontmatter:o},s=b.a;function m(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)(s,Object(i.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)(c,{mdxType:"PageDescription"},Object(l.b)("p",null,"Promote an Application using CD with GitOps and ArgoCD")),Object(l.b)("div",{className:"gatsby-resp-iframe-wrapper",style:{paddingBottom:"56.25%",position:"relative",height:"0",overflow:"hidden"}}," ",Object(l.b)("iframe",{parentName:"div",src:"https://www.youtube.com/embed/Fr85xbcM_es",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}})," "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Prerequisites"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Complete lab ",Object(l.b)("a",{parentName:"li",href:"./ci"},"Deploy an Application using CI Pipelines with Tekton"),"."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Set ",Object(l.b)("inlineCode",{parentName:"p"},"TOOLKIT_USERNAME")," environment variable replace ",Object(l.b)("inlineCode",{parentName:"p"},"user1")," with assigned usernames"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_USERNAME=user1\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Set ",Object(l.b)("inlineCode",{parentName:"p"},"TOOLKIT_PROJECT")," environment variable replace ",Object(l.b)("inlineCode",{parentName:"p"},"project1")," or ",Object(l.b)("inlineCode",{parentName:"p"},"projectx")," based on user id assigned"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"TOOLKIT_PROJECT=project1\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify Application is deployed in ",Object(l.b)("strong",{parentName:"p"},"QA")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select ArgoCD from the Console Link and login using OpenShift login"),Object(l.b)("li",{parentName:"ul"},"Filter Applications by name ",Object(l.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," (ie project1-qa)"),Object(l.b)("li",{parentName:"ul"},"Select the application ",Object(l.b)("inlineCode",{parentName:"li"},"master-qa-${TOOLKIT_PROJECT}-app")," (ie master-qa-project1-app)"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify Application is running in the QA namespace corresponding to your username ",Object(l.b)("inlineCode",{parentName:"p"},"${TOOLKIT_PROJECT}-qa")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Developer")," perspective, select project ",Object(l.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-qa")," and then select ",Object(l.b)("strong",{parentName:"li"},"Topology")," from the Console and see the application running"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Setup environment variable ",Object(l.b)("inlineCode",{parentName:"p"},"GIT_OPS_URL")," for the git url using the value from previous step or as following"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"GIT_OPS_URL=http://${TOOLKIT_USERNAME}:password@$(oc get route -n tools gogs --template='{{.spec.host}}')/toolkit/gitops\necho GIT_OPS_URL=${GIT_OPS_URL}\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Clone the git repository and change directory"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone $GIT_OPS_URL\ncd gitops\n\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Review the ",Object(l.b)("inlineCode",{parentName:"p"},"qa")," and ",Object(l.b)("inlineCode",{parentName:"p"},"staging")," directory in the git repository"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},"ls -l qa/\nls -l staging/\n"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Promote the application from ",Object(l.b)("strong",{parentName:"p"},"QA")," to ",Object(l.b)("strong",{parentName:"p"},"STAGING")," by copying the app manifest files using git"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email "${TOOLKIT_USERNAME}@example.com"\ngit config --local user.name "${TOOLKIT_USERNAME}"\n\ncp -a qa/${TOOLKIT_PROJECT}/ staging/${TOOLKIT_PROJECT}/\n\ngit add .\ngit commit -m "Promote Application from QA to STAGING environment for $TOOLKIT_PROJECT"\ngit push -u origin master\n\n'))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify Application is deployed in ",Object(l.b)("strong",{parentName:"p"},"STAGING")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select ArgoCD from the Console Link and login using OpenShift login"),Object(l.b)("li",{parentName:"ul"},"Filter Applications by namespace ",Object(l.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-staging")," (ie project1-staging)"),Object(l.b)("li",{parentName:"ul"},"Select the application ",Object(l.b)("inlineCode",{parentName:"li"},"master-staging-${TOOLKIT_PROJECT}-app")," (ie master-staging-project1-app)"),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"Refresh")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Verify Application is running in the ",Object(l.b)("strong",{parentName:"p"},"STAGING")," namespace corresponding to your username ",Object(l.b)("inlineCode",{parentName:"p"},"${TOOLKIT_PROJECT}-qa")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Select ",Object(l.b)("strong",{parentName:"li"},"Developer")," perspective, select project ",Object(l.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-staging")," and then select ",Object(l.b)("strong",{parentName:"li"},"Topology")," from the Console and see the application running"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Propose a change for the Application in ",Object(l.b)("strong",{parentName:"p"},"STAGING")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Update the replica count and create a new git branch in remote repo")),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre",className:"language-bash"},'cat > staging/${TOOLKIT_PROJECT}/app/values.yaml <<EOF\nglobal: {}\napp:\n  replicaCount: 2\nEOF\n\ngit diff\n\ngit add .\ngit checkout -b ${TOOLKIT_PROJECT}-pr1\ngit commit -m "Update Application in ${TOOLKIT_PROJECT}-staging namespace"\ngit push -u origin ${TOOLKIT_PROJECT}-pr1\n\n')),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Open Git Ops from Console Link"),Object(l.b)("li",{parentName:"ul"},"Select toolkit/gitops git repository"),Object(l.b)("li",{parentName:"ul"},"Create a Pull Request"),Object(l.b)("li",{parentName:"ul"},"Select Pull Request"),Object(l.b)("li",{parentName:"ul"},"Click ",Object(l.b)("strong",{parentName:"li"},"New Pull Request")),Object(l.b)("li",{parentName:"ul"},"Select from ",Object(l.b)("inlineCode",{parentName:"li"},"compare")," dropdown the branch ",Object(l.b)("inlineCode",{parentName:"li"},"${TOOLKIT_PROJECT}-pr1")),Object(l.b)("li",{parentName:"ul"},"Enter a title like ",Object(l.b)("inlineCode",{parentName:"li"},"Update replica count for app in namespace $TOOLKIT_PROJECT")),Object(l.b)("li",{parentName:"ul"},"Enter a Comment like ",Object(l.b)("inlineCode",{parentName:"li"},"We need more instances business is growing Yay!")),Object(l.b)("li",{parentName:"ul"},"click ",Object(l.b)("strong",{parentName:"li"},"Create Pull Request")))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Review the PR follow the change management process established by your team."),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Click Merge Pull Request"),Object(l.b)("li",{parentName:"ul"},"Click Delete Branch"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Review that application is scales out"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Review in ArgoCD UI, it takes about 4 minutes to sync, you can click ",Object(l.b)("strong",{parentName:"li"},"Refresh")),Object(l.b)("li",{parentName:"ul"},"Review in OpenShift Console, click the Deployment circle details shows 2 Pods."))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},"Congratulations you finished this activity, continue with the lab ",Object(l.b)("a",{parentName:"p",href:"./inventory"},"Deploy a 3 tier Microservice using React, Node.js, and Java")))))}m.isMDXComponent=!0},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),l=a.n(r),b=a("Wbzz"),o=a("Xrax"),c=a("k4MR"),p=a("TSYQ"),s=a.n(p),m=a("QH2O"),O=a.n(m),u=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:s()(O.a.pageHeader,(t={},t[O.a.withTabs]=r.length,t[O.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:O.a.text},a)))))},j=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,l=i.subDirectory,o=r+"/edit/"+i.branch+l+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+j.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:j.link,href:o},"Edit this page on GitHub"))):null},N=a("dI71"),T=a("I8xM"),h=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=l()(e,{lower:!0,strict:!0}),r=i===n,o=new RegExp(n+"/?(#.*)?$"),c=a.replace(o,i);return Object(u.b)("li",{key:e,className:s()((t={},t[T.selectedItem]=r,t),T.listItem)},Object(u.b)(b.Link,{className:T.link,to:""+c},e))}));return Object(u.b)("div",{className:T.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:T.list},i))))))},t}(i.a.Component),C=a("MjG9"),f=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,p=void 0===r?{}:r,s=t.relativePagePath,m=t.titleType,O=p.tabs,j=p.title,N=p.theme,T=p.description,P=p.keywords,v=Object(f.a)().interiorTheme,x=Object(b.useStaticQuery)("223705900").site.pathPrefix,y=x?n.pathname.replace(x,""):n.pathname,w=O?y.split("/").filter(Boolean).slice(-1)[0]||l()(O[0],{lower:!0}):"",I=N||v;return Object(u.b)(c.a,{tabs:O,homepage:!1,theme:I,pageTitle:j,pageDescription:T,pageKeywords:P,titleType:m},Object(u.b)(d,{title:i?Object(u.b)(i,null):j,label:"label",tabs:O,theme:I}),O&&Object(u.b)(h,{slug:y,tabs:O,currentTab:w}),Object(u.b)(C.a,{padded:!0},a,Object(u.b)(g,{relativePagePath:s})),Object(u.b)(o.a,null))}}}]);
//# sourceMappingURL=component---src-pages-workshop-cd-index-mdx-7275d4043a3950dca42b.js.map