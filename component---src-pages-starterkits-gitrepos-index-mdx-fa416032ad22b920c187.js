(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{"2sUx":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return A}));var i=a("wx14"),o=a("zLVn"),n=(a("q1tI"),a("7ljp")),c=a("XbGe"),b=(a("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(n.b)("div",t)}},r=s("AnchorLinks"),p=s("AnchorLink"),l=s("Row"),g=s("Column"),m=s("ResourceCard"),d={_frontmatter:b},u=c.a;function A(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)(u,Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",null,"Overview"),Object(n.b)("p",null,"In the ",Object(n.b)("a",{parentName:"p",href:"./#overview"},"Overview")," section we describe why ",Object(n.b)("em",{parentName:"p"},"Start Kits")," provide a perfect on ramp to help projects get started. The Developer Tools project is providing a set of seed templates that can be used to get projects moving quickly and focusing on use case business logic."),Object(n.b)("p",null,"Read up on why you should start with a ",Object(n.b)("strong",{parentName:"p"},"Starter Kit")," and if you have not\nalready tried to deploy your first app to show you how easy it is to get\nstarted"),Object(n.b)(r,{mdxType:"AnchorLinks"},Object(n.b)(p,{to:"/starterkits",mdxType:"AnchorLink"},"Starter Kits Overview"),Object(n.b)(p,{to:"/getting-started-day-1/deploy-app",mdxType:"AnchorLink"},"Deploying your first app")),Object(n.b)("p",null,"Here are links to the base set of ",Object(n.b)("strong",{parentName:"p"},"Starter Kits")," provided for the ",Object(n.b)("em",{parentName:"p"},"IBM Garage for Cloud Developer Tools"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"To use the Starter Kits, click on the link and then the ",Object(n.b)("strong",{parentName:"p"},"Template")," button to create a version in your own git organization.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Then clone it onto your local machine and then use ",Object(n.b)("inlineCode",{parentName:"p"},"igc pipeline")," to register it with your Jenkins server."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",{parentName:"pre",className:"language-bash"},"oc login\noc get pods\nnpm install -g @ibmgaragecloud/cloud-native-toolkit-cli\ngit clone <code pattern> | cd <code pattern>\noc sync <project> --dev\noc pipeline\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"If you are bringing your own code run the ",Object(n.b)("inlineCode",{parentName:"p"},"oc enable")," command to add a Helm chart and make sure you code exposes a ",Object(n.b)("inlineCode",{parentName:"p"},"/health")," endpoint and the ",Object(n.b)("inlineCode",{parentName:"p"},"values.yaml")," is exposing the correct port for your application."))),Object(n.b)("h3",null,"Git Repo Links"),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"React UI Patterns",subTitle:"Carbon based UI to help with common patterns using React framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-react",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Angular UI Patterns",subTitle:"Carbon based UI to help with common patterns using Angular framework",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-angular",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Typescript Microservice",subTitle:"Node.js TypeScript Microservice offering OpenAPI endpoints",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-node-typescript",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Typescript GraphQL",subTitle:"Node.js TypeScript GraphQL Backend for Frontend",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-graphql-typescript",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Spring Boot Microservice",subTitle:"Spring Boot Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-java-spring",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Go Gin Microservice",subTitle:"Go Gin Microservice/Bff/Edge",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-go-gin",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Quarkus Microservice",subTitle:"Quarkus Java Microservice",actionIcon:"launch",color:"dark",href:"https://github.com/IBM/template-quarkus",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"ArgoCD GitOps",subTitle:"Template configuration to help to set up GitOps with ArgoCD",actionIcon:"launch",color:"light",href:"https://github.com/IBM/template-argocd-gitops",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "))),Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Tekton Tasks",subTitle:"Contains a set of generic Tekton Tasks for use with Tekton Pipelines",actionIcon:"launch",color:"light",href:"https://github.com/IBM/ibm-garage-tekton-tasks",mdxType:"ResourceCard"},Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"200px"}},"\n      ",Object(n.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"98%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUUlEQVQ4y3WUP28TQRDF17FpQhH5bnePpIlAQAoKRJGCCoT4AigSSoFIoKIhkgsqFKUiXwIpEYVbhFI4JQUFTZoUUKUKHUFIMSgG/4M3e2/OIyux9NOtZ2ffvZ2dPReDd6QWfF6TcRHDZTzXwHtwDAbkmLG1InjJcVxTU51KLMYgkzJe58J/+H8uMsec9bQGa1W0EsuaczLeVaEY8j90NQQjIuNBwJwR3s2yucqYC3mmztp0MDbuxuc4HKuYGcvapKVirYkzvwMegg4dnIJv5JSxDnN2jNOWaInYAuiaiRWxn+dNmVsG12IIsyUy9ss+a+oWV4yRrmhJcCv4JHTGiY1k3+cN0wEgVGOZ4842uOaMGlsSPDC164E7XDhDara1TNwxt2dqeSDBE9MObbqbWbgS3UW/+SKmnKnDlPUnLrWBzwcMbNrtXvSb2vYmBVPzS2BkBLcpWK86f+pXTOpYp+C2ERw5nrDWYE8dvri36nKfJYEyVgrl6LVbSzetwz1zBl0JHJkayKHcoINLeFZOC5xyUZ50nXMyXgJ/zfqjqqh4/mYffgWLfLubCHq7XceePORavYptmbhPoY/gEe5wn3f2LXgSo28A+QKJoDh7Ct6JAYoM8RxS44G+7YM2Nbibur9M2Nc2Mm3SMTUTob6tv25pHvzgW66DjHd11jS03pwW8/pG7DuvcBLUwt8Gv6TI4CV4bG5NzeS94v3tUeynyavrljV5EXymA+EN4w3j8LX5kHwCV1UsbZk1qkQ9+oxfkUPwTJPNS5+DL2A1zzJnxYT/zjcNiDR70UMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(n.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Github icon",title:"Github icon",src:"/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png",srcSet:["/static/6c742b0dc481582b162691c2235e1672/59afc/github-icon.png 200w"],sizes:"(max-width: 200px) 100vw, 200px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")))),Object(n.b)(l,{mdxType:"Row"},Object(n.b)(g,{colLg:4,colMd:4,noGutterMdLeft:!0,mdxType:"Column"},Object(n.b)(m,{title:"Bring your own code",subTitle:"Enable an existing project or a custom code pattern with pipeline logic",actionIcon:"launch",color:"light",href:"../getting-started/cli#enable",mdxType:"ResourceCard"}))))}A.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},XbGe:function(e,t,a){"use strict";var i=a("q1tI"),o=a.n(i),n=a("NmYn"),c=a.n(n),b=a("Wbzz"),s=a("Xrax"),r=a("k4MR"),p=a("TSYQ"),l=a.n(p),g=a("QH2O"),m=a.n(g),d=a("qKvR"),u=function(e){var t,a=e.title,i=e.theme,o=e.tabs,n=void 0===o?[]:o;return Object(d.b)("div",{className:l()(m.a.pageHeader,(t={},t[m.a.withTabs]=n.length,t[m.a.darkMode]="dark"===i,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},A=a("BAC9"),h=function(e){var t=e.relativePagePath,a=e.repository,i=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||i,n=o.baseUrl,c=o.subDirectory,s=n+"/edit/"+o.branch+c+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+A.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:A.link,href:s},"Edit this page on GitHub"))):null},w=a("dI71"),y=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0,strict:!0}),n=o===i,s=new RegExp(i+"/?(#.*)?$"),r=a.replace(s,o);return Object(d.b)("li",{key:e,className:l()((t={},t[y.selectedItem]=n,t),y.listItem)},Object(d.b)(b.Link,{className:y.link,to:""+r},e))}));return Object(d.b)("div",{className:y.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:y.list},o))))))},t}(o.a.Component),v=a("MjG9"),U=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,o=e.Title,n=t.frontmatter,p=void 0===n?{}:n,l=t.relativePagePath,g=t.titleType,m=p.tabs,A=p.title,w=p.theme,y=p.description,T=p.keywords,x=Object(U.a)().interiorTheme,O=Object(b.useStaticQuery)("223705900").site.pathPrefix,f=O?i.pathname.replace(O,""):i.pathname,j=m?f.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",I=w||x;return Object(d.b)(r.a,{tabs:m,homepage:!1,theme:I,pageTitle:A,pageDescription:y,pageKeywords:T,titleType:g},Object(d.b)(u,{title:o?Object(d.b)(o,null):A,label:"label",tabs:m,theme:I}),m&&Object(d.b)(N,{slug:f,tabs:m,currentTab:j}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(h,{relativePagePath:l})),Object(d.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-starterkits-gitrepos-index-mdx-fa416032ad22b920c187.js.map