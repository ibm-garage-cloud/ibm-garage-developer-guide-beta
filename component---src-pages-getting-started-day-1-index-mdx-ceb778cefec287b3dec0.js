(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),s=a("Xrax"),b=a("k4MR"),c=a("TSYQ"),p=a.n(c),m=a("QH2O"),d=a.n(m),u=a("qKvR"),A=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(u.b)("div",{className:p()(d.a.pageHeader,(t={},t[d.a.withTabs]=r.length,t[d.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:d.a.text},a)))))},g=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},j=a("dI71"),O=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((function(e){var t,i=o()(e,{lower:!0,strict:!0}),r=i===n,s=new RegExp(n+"/?(#.*)?$"),b=a.replace(s,i);return Object(u.b)("li",{key:e,className:p()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(l.Link,{className:O.link,to:""+b},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",null,Object(u.b)("ul",{className:O.list},i))))))},t}(i.a.Component),f=a("MjG9"),N=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,c=void 0===r?{}:r,p=t.relativePagePath,m=t.titleType,d=c.tabs,g=c.title,j=c.theme,O=c.description,w=c.keywords,v=Object(N.a)().interiorTheme,x=Object(l.useStaticQuery)("223705900").site.pathPrefix,T=x?n.pathname.replace(x,""):n.pathname,C=d?T.split("/").filter(Boolean).slice(-1)[0]||o()(d[0],{lower:!0}):"",E=j||v;return Object(u.b)(b.a,{tabs:d,homepage:!1,theme:E,pageTitle:g,pageDescription:O,pageKeywords:w,titleType:m},Object(u.b)(A,{title:i?Object(u.b)(i,null):g,label:"label",tabs:d,theme:E}),d&&Object(u.b)(y,{slug:T,tabs:d,currentTab:C}),Object(u.b)(f.a,{padded:!0},a,Object(u.b)(h,{relativePagePath:p})),Object(u.b)(s.a,null))}},s4rt:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return g}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("XbGe"),l=a("T0C+"),s=(a("qKvR"),{}),b=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=b("Row"),p=b("Column"),m=b("ArticleCard"),d=b("InlineNotification"),u={_frontmatter:s},A=o.a;function g(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(A,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Getting Started")),Object(r.b)("p",null,"If you already have access to a development cluster that has been set up with the Toolkit you can get started\ndeploying an application to the cluster with an Enterprise-grade devops pipeline. While you\nare there, you can also explore the ",Object(r.b)(l.a,{name:"shortName",mdxType:"Globals"})," Developer Dashboard and/or the OpenShift console\nto learn how to leverage those resources to increase productivity building cloud-native applications."),Object(r.b)(c,{mdxType:"Row"},Object(r.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(m,{color:"dark",title:"Deploying an app",subTitle:"Quickly get started deploying an application with an Enterprise-grade DevOps pipeline",href:"/getting-started-day-1/deploy-app",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"480px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAABq4VsTiQ//8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAwQREhT/2gAIAQEAAQUCUlJZpZW9bSgMzaq+R3Jn/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQMBAT8BR//EABURAQEAAAAAAAAAAAAAAAAAAAAR/9oACAECAQE/AVf/xAAdEAACAQQDAAAAAAAAAAAAAAAAAQIREiIxMmGB/9oACAEBAAY/AtqhaoHKhfPxCmtoyjGT7P/EAB0QAAIBBAMAAAAAAAAAAAAAAAERADFBUXEhgaH/2gAIAQEAAT8hF8gZKsJQiR35DdZhKE1k6I6BGGADeKp//9oADAMBAAIAAwAAABD/AD//xAAXEQEAAwAAAAAAAAAAAAAAAAAAESEx/9oACAEDAQE/EKxJ/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAh/9oACAECAQE/ENGF/8QAHxABAAICAQUBAAAAAAAAAAAAAQARIVExQWGBkaGx/9oACAEBAAE/ECW5Hlo7zO+G7smzqI1s0OWDxKEBQJwPyNj5FVLr7AiExXw9T//Z')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"pipeline3",title:"pipeline3",src:"/static/ed67d8a11eb3f58d4d32b81a050dfa68/ee01e/pipeline3.jpg",srcSet:["/static/ed67d8a11eb3f58d4d32b81a050dfa68/69549/pipeline3.jpg 288w","/static/ed67d8a11eb3f58d4d32b81a050dfa68/ee01e/pipeline3.jpg 480w"],sizes:"(max-width: 480px) 100vw, 480px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(r.b)(p,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(r.b)(m,{color:"dark",title:"Developer Dashboard",subTitle:"Explore the "+l.a.get("shortName")+" Developer Dashboard",href:"/getting-started-day-1/dashboard",mdxType:"ArticleCard"},Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.84722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzklEQVQ4y51TyY7bMAz1f84HtEDQZkFy77F/FvTWzGAOAwzQzpK4TuJ9kWRJfiXp2HEwl6IECFmPi8hHOlgul1itVpjNZqLr9RqMbTYbwVnn8/mNLhakci7oTvr1C+4+fcfn+TcEcRwjyzKkaYo8zzFI13WjTsU6B6VbeIKNMWK31iIvGzgCA07Stq0YWZVSaJpGvh0Fs/OgjtS0FrWylNRKHON8OtfbAw7mJEOi4Zsdh0o/SnfRCdL1SHA6nfAniiQZC1eVJslYJQtXwH6MsZ2Fbec4ocevGD8eqIdHeAL44pmPRqEKzzfVJcTz/W53wTw8P5wdYZ9+9HWSn7vkCE4vryjLsk/oPSxVc4yOKIpC2mZcG41DFI6VeCK/Jaw4R6jrRjrgWEkYxgcKvJbMhoKc+BzYcrWG+h3dEKZpOHHVjNCYMK9S4UMm5R217+nuZTBGa8I8nDZojjFq4pDtHGzIP6Z1q6pq5FYSHt7eZLd47Cy6rfH88pN2spBHWJSx+PUeoaAVG3jlXXwlLAwPssPXoRR5vwRMNnHT6Az7ZDdpxRGHHqW6dsxD1K1HZSYLf+E7eN/v5QVN7U137uNf0v0TFmy323EAzMNA7v/qXxHz2c+UQ0ZdAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"developer dashboard",title:"developer dashboard",src:"/static/e1119d58eaecb610979b4be7eb179cef/3cbba/developer-dashboard.png",srcSet:["/static/e1119d58eaecb610979b4be7eb179cef/7fc1e/developer-dashboard.png 288w","/static/e1119d58eaecb610979b4be7eb179cef/a5df1/developer-dashboard.png 576w","/static/e1119d58eaecb610979b4be7eb179cef/3cbba/developer-dashboard.png 1152w","/static/e1119d58eaecb610979b4be7eb179cef/5cbab/developer-dashboard.png 1449w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(r.b)("br",null),Object(r.b)("h2",null,Object(r.b)("strong",{parentName:"h2"},"Day 1 Concepts/Tools Explained")),Object(r.b)("h3",null,Object(r.b)("em",{parentName:"h3"},"Artifact Management")),Object(r.b)("p",null,"In the DevOps process, Artifact Management generally refers to the activities around storing and managing assets that are\nproduced during the continuous integration process. Depending upon the development language, an “asset” could be any number\nof things:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Library jar file"),Object(r.b)("li",{parentName:"ul"},"NPM package"),Object(r.b)("li",{parentName:"ul"},"Helm chart"),Object(r.b)("li",{parentName:"ul"},"etc")),Object(r.b)("p",null,"Besides the contents of the asset, many of those types of artifacts also involve a particular protocol for how they are shared\nand consumed (e.g. maven repository for jar libraries)."),Object(r.b)(d,{mdxType:"InlineNotification"},Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note:")," While container images are closely related to the other artifacts listed above, we feel the practices and tools\naround managing images is distinct enough that the ",Object(r.b)("a",{parentName:"p",href:"#image-registry"},"Image Registry")," warrents its own\ntreatment.  ")),Object(r.b)("p",null,"There are a number of tools available to handle manage artifacts, from roll-your-own file systems to enterprise-grade\nsoftware. Currently the ",Object(r.b)(l.a,{name:"shortName",mdxType:"Globals"})," supports provisioning the following Artifact Management tools:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/tools/artifactory"},"Artifactory")),Object(r.b)("li",{parentName:"ul"},"Nexus")),Object(r.b)("hr",null),Object(r.b)("h3",null,Object(r.b)("em",{parentName:"h3"},"Code Analysis")),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is to ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/"},"automate tests for continuous delivery"),", in part by using ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/practice_automated_testing/tool_lint"},"static source code analysis tools"),". ",Object(r.b)("a",{parentName:"p",href:"https://www.sonarqube.org/"},"SonarQube")," automates performing static code analysis and enables it to be added to a continuous integration pipeline. The ",Object(r.b)(l.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(r.b)("a",{parentName:"p",href:"/tools/continuous-integration"},"Jenkins"),", ",Object(r.b)("a",{parentName:"p",href:"/tools/continuous-integration-tekton"},"Tekton"),", etc.) includes a SonarQube stage. Simply by building your app using the pipeline, your code gets analyzed, just open the SonarQube UI to browse the findings."),Object(r.b)("h3",null,"What is Code Analysis?"),Object(r.b)("p",null,"Static code analysis (a.k.a. code analysis) is a method of debugging by performing automated evaluation of code\nwithout executing the program. The analysis is structured as a set of coding rules that evaluate the code’s quality.\nAnalysis can be performed on source code or compiled code. The analyzer must support the programming language\nthe code is written in so that it can parse the code like a compiler or simulate its execution."),Object(r.b)("p",null,"Static code analysis differs from dynamic analysis, which observes and evaluates a running program. Dynamic analysis\nrequires test inputs and can meansure user functionality as well as runtime qualities like execution time and resource consumption.\nA code review is static code analysis performed by a human."),Object(r.b)("p",null,"Static code analysis can evaluate several different aspects of code quality, such as:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reliability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Bug"),": Programming error that breaks functionality"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Security"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Vulnerability"),": A point in a program that can be attacked"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Hotspot"),": Code that uses a security-sensitive API"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Maintainability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coding standards"),": Practices that increase the human readability and undestandability of code"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code smell"),": Code that is confusing and difficult to maintain"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Technical debt"),": Estimated time required to fix all maintainability issues"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Complexity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Code complexity"),": Code’s control flow and number of paths through the code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplications"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Duplicated code"),": The same code sequence appearing more than once in the same program"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Manageability"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Testability"),": How easily tests can be developed and used to show the program meets requirements"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Portability"),": How easily the program can be reused in different environments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Reusability"),": The program’s modularity, loose coupling, and limited interdependencies")))),Object(r.b)("p",null,"Static code analysis collects several metrics that measure code quality:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Issues"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Type"),": Bug, Vunerability, Code Smell"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Sevarity"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Blocker"),": Bug with a high probability to impact the behavior of the application in production"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Critical"),": Bug with a low probability to impact the behavior of the application in production, or a security vulnerability"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Major"),": Code smell with high impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Minor"),": Code smell with slight impact to developer productivity"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Info"),": Neither a bug nor a code smell, just a finding"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Size"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Classes"),": Number of class definitions (concrete, abstract, nested, interfaces, enums, annotations)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Lines of code"),": Linespace seperated text that is not whitespace or comments"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Comment lines"),": Linespace seperated text containing significant commentary or commented-out code"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Coverage"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Test coverage"),": Code that was executed by a test suite")))),Object(r.b)("p",null,"A ",Object(r.b)("strong",{parentName:"p"},"Quality gate")," defines a policy that assesses pass/fail whether or not the number of issues and their severity is acceptable."),Object(r.b)("hr",null),Object(r.b)("h3",null,Object(r.b)("em",{parentName:"h3"},"Continuous Integration")),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/practice_continuous_integration/"},"continuous integration"),".\nThe ",Object(r.b)(l.a,{name:"env",mdxType:"Globals"})," uses a Jenkins pipeline to automate continuous integration."),Object(r.b)("h3",null,"What is Continuous Integration?"),Object(r.b)("p",null,"Continuous integration is a software development technique where software is built regularly by a team in an automated fashion.\nThis quote helps explain it:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Continuous Integration is a software development practice where members of a team integrate their work frequently,\nusually each person integrates at least daily - leading to multiple integrations per day.\nEach integration is verified by an automated build (including test) to\ndetect integration errors as quickly as possible. Many teams find that this approach leads to significantly\nreduced integration problems and allows a team to develop cohesive software more rapidly"),Object(r.b)("cite",null,"– Martin Fowler")),Object(r.b)("hr",null),Object(r.b)("h3",null,Object(r.b)("em",{parentName:"h3"},"Image Registry")),Object(r.b)("p",null,"An Image Registry is a repository of versioned container images. It is perhaps a subset of the larger ",Object(r.b)("a",{parentName:"p",href:"#artifact-management"},"Artifact Management")," topic\nbut has special considerations."),Object(r.b)("p",null,"A specific protocol has been defined around building, pushing, tagging and pulling container images to and from an Image Repository. Typically,\nthe ",Object(r.b)("a",{parentName:"p",href:"#continuous-integration"},"continuous integration")," process is responsible for verifying and building the application\nsource into an image and pushing it into the registry. At deployment time, the deployment descriptor (e.g. kubernetes resource definition) references\nthe image at its location within the image registry and the container platform pulls the image and manages the running image in the cluster. Tools\nlike ",Object(r.b)("inlineCode",{parentName:"p"},"skopeo")," can also be used within the process to copy images from one registry to another."),Object(r.b)("p",null,"There are a number of options available for the Image Registry, both running in-cluster and outside of the cluster. ",Object(r.b)(l.a,{name:"ocp",mdxType:"Globals"}),"\neven provides an image registry as part of the platform. While an intermediate image registry might be used during the CI process,\nin an enterprise environment it is ideal to have a centrally managed image registry from which vulnerability scans, certifications, and\nbackups can be performed. Some of the available options include:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/tools/ibm-cloud-container-registry"},"IBM Cloud Image Registry")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/tools/artifactory"},"Artifactory")),Object(r.b)("li",{parentName:"ul"},"Nexus"),Object(r.b)("li",{parentName:"ul"},Object(r.b)(l.a,{name:"ocp",mdxType:"Globals"})," image streams")),Object(r.b)("hr",null),Object(r.b)("h3",null,Object(r.b)("em",{parentName:"h3"},"Contract Testing")),Object(r.b)("p",null,"In IBM Garage Method, one of the Develop practices is ",Object(r.b)("a",{parentName:"p",href:"https://www.ibm.com/garage/method/practices/code/contract-driven-testing"},"contract-driven testing"),". ",Object(r.b)("a",{parentName:"p",href:"https://docs.pact.io/"},"Pact")," automates contract testing and enables it to be added to a continuous integration pipeline. The ",Object(r.b)(l.a,{name:"env",mdxType:"Globals"}),"’s CI pipeline (",Object(r.b)("a",{parentName:"p",href:"/tools/continuous-integration"},"Jenkins"),", ",Object(r.b)("a",{parentName:"p",href:"/tools/continuous-integration-tekton"},"Tekton"),", etc.) includes a Pact stage. Simply by building your app using the CI pipeline, your code’s contract gets tested, just open the Pact UI to browse the results."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Contract testing")," is a testing discipline that ensures two applications (a consumer and\na provider) have a shared understanding of the interactions or the ",Object(r.b)("em",{parentName:"p"},"contract")," between them."))}g.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-1-index-mdx-ceb778cefec287b3dec0.js.map