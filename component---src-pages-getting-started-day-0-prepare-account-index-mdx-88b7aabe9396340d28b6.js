(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),c=a.n(o),i=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a.n(u),h=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(h.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(i.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,c=r.subDirectory,s=o+"/edit/"+r.branch+c+"/src/pages"+t;return o?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),f=a("dI71"),N=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=c()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,r);return Object(h.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=o,t),N.listItem)},Object(h.b)(i.Link,{className:N.link,to:""+l},e))}));return Object(h.b)("div",{className:N.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:N.list},r))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,m=b.tabs,g=b.title,f=b.theme,N=b.description,C=b.keywords,I=Object(w.a)().interiorTheme,T=Object(i.useStaticQuery)("2456312558").site.pathPrefix,A=T?n.pathname.replace(T,""):n.pathname,k=m?A.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",x=f||I;return Object(h.b)(l.a,{tabs:m,homepage:!1,theme:x,pageTitle:g,pageDescription:N,pageKeywords:C,titleType:u},Object(h.b)(d,{title:r?Object(h.b)(r,null):g,label:"label",tabs:m,theme:x}),m&&Object(h.b)(y,{slug:A,tabs:m,currentTab:k}),Object(h.b)(v.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:p})),Object(h.b)(O.a,{pageContext:t,location:n,slug:A,tabs:m,currentTab:k}),Object(h.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},gGxA:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),c=a("013z"),i=a("T0C+"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=l("PageDescription"),p=l("InlineNotification"),u={_frontmatter:s},m=c.a;function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Prepare the ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," account for an installation of ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you already have a cluster then you can jump to ",Object(o.b)("a",{parentName:"p",href:"install-toolkit/quick-install"},"install the toolkit"),". If you\nwill be provisioning a cluster outside of ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," then you can jump to ",Object(o.b)("a",{parentName:"p",href:"provision-cluster/multi-cloud"},"provision the cluster"),"."),Object(o.b)("h2",null,"1. Set up account managers access group"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"account owner")," creates this access group for account managers and adds the functional ID for managing\nAPI keys. See ",Object(o.b)("a",{parentName:"p",href:"getting-started-day-0#ibm-cloud-account"},"Plan Installation > Roles")," for the overview of\nthe roles involved. An account only needs one of these ",Object(o.b)("inlineCode",{parentName:"p"},"account manager")," access groups, which will be used to support all\nenvironments in the account."),Object(o.b)("p",null,"In a new account, the account owner is the only user. Even after inviting other users, the account owner is initially\nthe only user with the account management permissions needed to grant those permissions to other users. Therefore, it is\nthe account owner who must create the access group for account managers."),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,"The video in ",Object(o.b)("a",{parentName:"p",href:"/toolkit-resources/resource-mgmt#configuration-process"},"Resource Access Management > Configuration Process"),"\nshows how to perform the steps in this process.")),Object(o.b)("h3",null,"A. Prepare to run scripts"),Object(o.b)("p",null,"We’ll use some scripts in the steps below to help create access groups. Before using them, the scripts need to be\ndownloaded and the environment needs to be prepared before running them."),Object(o.b)("h4",null,"i. Clone the Iteration Zero git repository"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"},"ibm-garage-iteration-zero")," repository contains a\nnumber of scripts that support the administrative tasks. It also has contains the Terraform scripts for installing\nthe ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}),".)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\ncd ibm-garage-iteration-zero\n")),Object(o.b)("h4",null,"ii. Log in to ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," using the ",Object(o.b)(i.a,{name:"iccli",mdxType:"Globals"})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud login -a cloud.ibm.com -r <region>\n")),Object(o.b)("h3",null,"B. Create the access group for account managers"),Object(o.b)("p",null,"The account owner must create an access group to grant the necessary permissions for managing the account. A script has\nbeen provided to automate the configuration of the policies. "),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": IBM Cloud has multiple ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"},"account management services"),",\nin addition to IAM: Billing, License and entitlement, Support center, etc. An easy way to grant access to these\nindividually is to create an access group for administering each: ",Object(o.b)("inlineCode",{parentName:"p"},"ACCT-MGR-BILLING-ADMIN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ACCT-MGR-LICENSE-ADMIN"),",\n",Object(o.b)("inlineCode",{parentName:"p"},"ACCT-MGR-SUPPORT-ADMIN"),". The group created below only has IAM capabilities, so we suggest ",Object(o.b)("inlineCode",{parentName:"p"},"ACCT-MGR-IAM-ADMIN")," for\nits name.")),Object(o.b)("br",null),Object(o.b)("p",null,"To create the access group for the account managers:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"},"access group")," and name it something like ",Object(o.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," or name it after your account (use all capital letters)"),Object(o.b)("li",{parentName:"ol"},"Run ",Object(o.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-mgr.sh")," from the ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-garage-iteration-zero")," repository to add the necessary policies to the access group",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./terraform/scripts/acp-mgr.sh ACCT-MGR-IAM-ADMIN\n"))),Object(o.b)("li",{parentName:"ol"},"Add the users to the access group")),Object(o.b)("br",null),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"./terraform/scripts/acp-mgr.sh")," script adds policies that allow the user to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create resource groups"),Object(o.b)("li",{parentName:"ul"},"Invite users to the account"),Object(o.b)("li",{parentName:"ul"},"Create access groups and manage access group membership"),Object(o.b)("li",{parentName:"ul"},"Create clusters across all resources groups in the account"),Object(o.b)("li",{parentName:"ul"},"Create service instances across all resource groups in the account"),Object(o.b)("li",{parentName:"ul"},"Manage the IBM Cloud Container Registry (used as the environment’s ",Object(o.b)("a",{parentName:"li",href:"/tools/image-registry"},"image registry"),")")),Object(o.b)("h2",null,"2. Configure the account"),Object(o.b)("p",null,"The account must provide a few resources that will be needed to install and use the ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Upgrade the image registry"),Object(o.b)("li",{parentName:"ul"},"Create a resource group"),Object(o.b)("li",{parentName:"ul"},"Create a pair of access groups for the admin and users")),Object(o.b)("h3",null,"A. Prepare to run scripts"),Object(o.b)("p",null,"We’ll use some scripts in the steps below to help create access groups. Before using them, the scripts need to be\ndownloaded and the environment needs to be prepared before running them."),Object(o.b)("h4",null,"i. Clone the Iteration Zero git repository"),Object(o.b)("p",null,"The ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"},"ibm-garage-iteration-zero")," repository contains a\nnumber of scripts that support the administrative tasks. It also has contains the Terraform scripts for installing\nthe ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}),".)"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\ncd ibm-garage-iteration-zero\n")),Object(o.b)("h4",null,"ii. Log in to ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," using the ",Object(o.b)(i.a,{name:"iccli",mdxType:"Globals"})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud login -a cloud.ibm.com -r <region>\n")),Object(o.b)("h3",null,"B. Upgrade the image registry"),Object(o.b)("p",null,"Upgrade the service plan for the ",Object(o.b)("a",{parentName:"p",href:"/tools/image-registry"},"image registry")," so that is has unlimited capacity for images."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud cr plan-upgrade standard\n")),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": The steps below need to be repeated for each new ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}),":"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Each environment needs its own resource group and pair of access groups for administrators and users."),Object(o.b)("li",{parentName:"ul"},"Each environment will need its own cluster, whether it’s created by an account manager or an environment administrator."))),Object(o.b)("h3",null,"C. Create the resource group"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/account/resource-groups"},"Create or provide a resource group"),". The resource group\nshould be given a name that clearly identifies the purpose and usage of the collection\nof resources, such as the development team, the project, the environment, and/or the application(s) implemented. For\nexample, we give our resource groups names like ",Object(o.b)("inlineCode",{parentName:"p"},"mooc-team-one"),", ",Object(o.b)("inlineCode",{parentName:"p"},"garage-dev-tools"),", ",Object(o.b)("inlineCode",{parentName:"p"},"cntk-showcase"),", etc."),Object(o.b)(p,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Warning"),": ",Object(o.b)("strong",{parentName:"p"},"The resource group name should be 24 characters or fewer, and should conform to\n",Object(o.b)("a",{parentName:"strong",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names"},"Kubernetes resource naming conventions")),"\n— the name should be all lowercase letters, digits, and the separators should be dashes.\n(Unless otherwise specified, the installation scripts will name the cluster ",Object(o.b)("inlineCode",{parentName:"p"},"<resource-group>-cluster"),"\nand a cluster name is limited to 32 characters.)")),Object(o.b)("h3",null,"D. Create an ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," API Key"),Object(o.b)("p",null,"An API Key is used to authenticate to the ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," APIs. It is specific to a user within a particular\naccount, meaning you need a different API key for each account you will be accessing. "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," If you will be using classic\ninfrastructure and/or multiple ",Object(o.b)("inlineCode",{parentName:"p"},"account mangers")," follow these instructions instead to create a\n",Object(o.b)("a",{parentName:"p",href:"/admin/plan-installation#create-a-functional-id-for-classic-infrastructure-permissions"},"functional ID")," for the\naccount."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#create_user_key"},"Create an API key")," and\ndownload each key to a file. Be sure to include a descriptive name of the APIKey."),Object(o.b)("h3",null,"E. Attach the ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," API Key to the resource group"),Object(o.b)("p",null,"To create resources in the resource group, the account will need API keys for the container service\nto ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-access_reference#infra"},"create resources in the classic infrastructure"),".\nThe API key is needed for each region and resource group. Use the API key from the previous step for these steps:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log into the IBM Cloud CLI ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-federated_id#api_key"},"using the functional ID key")," created by the account owner",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud login --apikey @key_file_name\n"))),Object(o.b)("li",{parentName:"ol"},"Reset the API key for a given region for the container service: ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/containers?topic=containers-users#api_key"},"Setting up the API key to enable access to the infrastructure portfolio"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"ibmcloud ks api-key reset --region <region>\n"))),Object(o.b)("li",{parentName:"ol"},"The ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/iam/apikeys"},"list of existing API keys")," shows the new key named ",Object(o.b)("inlineCode",{parentName:"li"},"containers-kubernetes-key"),"; the description specifies the resource group and region")),Object(o.b)("h3",null,"F. Create access groups for the resource group"),Object(o.b)("p",null,"For each resource group, create an access group for ",Object(o.b)("inlineCode",{parentName:"p"},"environment administrators")," and ",Object(o.b)("inlineCode",{parentName:"p"},"environment users"),". The access\ngroup can be configured manually or with a script provided in the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-cloud-iteration-zero")," repository."),Object(o.b)("h4",null,"i. Create the access group for environment administrators"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"},"access group")," named something like ",Object(o.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," (use all capital letters)"),Object(o.b)("li",{parentName:"ol"},"Run the script ",Object(o.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-admin.sh")," from the ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-garage-iteration-zero")," repository to add the necessary policies to the access group",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./terraform/scripts/acp-admin.sh {ACCESS_GROUP} {resource group}\n"))),Object(o.b)("li",{parentName:"ol"},"Add the environment administrator(s) to the group")),Object(o.b)("br",null),Object(o.b)("p",null,"The script adds policies that allow the user to add resources to the resource group:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Permission to create clusters"),Object(o.b)("li",{parentName:"ul"},"Permission to manage the IBM Cloud Container Registry (used as the environment’s ",Object(o.b)("a",{parentName:"li",href:"/tools/image-registry"},"image registry"),")"),Object(o.b)("li",{parentName:"ul"},"Permission to create service instances")),Object(o.b)("h4",null,"ii. Create the access group for environment users"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"},"access group")," named something like ",Object(o.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," (use all capital letters)"),Object(o.b)("li",{parentName:"ol"},"Run the script ",Object(o.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-user.sh")," from the ",Object(o.b)("inlineCode",{parentName:"li"},"ibm-garage-iteration-zero")," repository to add the necessary policies to the access group",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./terraform/scripts/acp-user.sh {ACCESS_GROUP} {resource group}\n"))),Object(o.b)("li",{parentName:"ol"},"Add the users to the group")),Object(o.b)("br",null),Object(o.b)("p",null,"The script adds policies that allow the user to use resources to the resource group:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Access to the resource group"),Object(o.b)("li",{parentName:"ul"},"Access to the cluster"),Object(o.b)("li",{parentName:"ul"},"Access to the image registry"),Object(o.b)("li",{parentName:"ul"},"Access to each of the services in the resource group")),Object(o.b)("h2",null,"3. Create the Private Catalog"),Object(o.b)("h3",null,"A. Create the catalog"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log in to the ",Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," Console"),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Manage->Catalogs")," from the top menu"),Object(o.b)("li",{parentName:"ol"},"Click on ",Object(o.b)("strong",{parentName:"li"},"Create Catalog")),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"Create a catalog")," dialog, provide the following values:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"name:")," the name of the catalog, for example ",Object(o.b)("inlineCode",{parentName:"li"},"Team Catalog")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"description:")," (optional) a brief description of the purpose of the catalog"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"products:")," select ",Object(o.b)("strong",{parentName:"li"},"Start with no products")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"resource group:")," click ",Object(o.b)("strong",{parentName:"li"},"Update")," to change the default resource group for the catalog"))),Object(o.b)("li",{parentName:"ol"},"Click ",Object(o.b)("strong",{parentName:"li"},"Create")," to complete the catalog creation")),Object(o.b)("h3",null,"B. Register the ",Object(o.b)(i.a,{name:"shortName",mdxType:"Globals"})," tiles in the catalog"),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," The following instructions depend on the ",Object(o.b)("inlineCode",{parentName:"p"},"jq")," command. ",Object(o.b)("inlineCode",{parentName:"p"},"jq")," is included in the ",Object(o.b)("a",{parentName:"p",href:"../getting-started/dev-env-setup"},"development environment setup"),".")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Download ",Object(o.b)("inlineCode",{parentName:"p"},"create-catalog-offering.sh")," from the ",Object(o.b)("a",{href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest",target:"_blank"},"latest Iteration Zero release")," and make the file executable"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},"LATEST_RELEASE=$(curl -sL https://api.github.com/repos/ibm-garage-cloud/ibm-garage-iteration-zero/releases/latest | jq -r '.tag_name')\ncurl -OL \"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero/releases/download/${LATEST_RELEASE}/create-catalog-offering.sh\"\nchmod +x create-catalog-offering.sh\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the ",Object(o.b)("inlineCode",{parentName:"p"},"create-catalog-offering.sh")," scripts passing in the API Key and the name of the catalog that you created in the previous step"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell"},'./create-catalog-offering.sh {API_KEY} "Team Catalog"\n')))),Object(o.b)("h2",null,"4. (Optional) Set up Classic Infrastructure"),Object(o.b)("p",null,"Virtual Private Cloud infrastructure is recommended for use with clusters as it easier to manage with IAM and provides\na superior environment. However, there are some situations where classic infrastructure is still required, particularly\nwhen using Cloud Paks due to some current storage limitations with the VPC infrastructure. When classic infrastructure\nwill be used then the following additional configuration is required."),Object(o.b)("h3",null,"A. Create a functional ID for Classic Infrastructure permissions"),Object(o.b)("p",null,"Account managers need the permissions to create and manage IaaS resources required by a ",Object(o.b)(i.a,{name:"env",mdxType:"Globals"}),".\nPermissions for classic infrastructure (formerly known as SoftLayer) cannot be added to an access group, only to a user. Rather than\nadd these permissions to each account manager, create a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-manapikey#ibm-cloud-api-keys"},"functional ID"),"\nand grant it the infrastructure permissions. "),Object(o.b)("p",null,"The functional ID will ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-users#api_key_most_cases"},"own the API keys"),"\nthat the Kubernetes service needs to create clusters. As account managers are added to and removed from the account, the\nfunctional ID will always remain and always have the necessary infrastructure permissions."),Object(o.b)("h4",null,"i. Set up the functional ID in the account"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the email account for the functional ID, sign it up for an IBM Cloud account, and ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv"},"invite the functional ID")," to this account.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the script ",Object(o.b)("inlineCode",{parentName:"p"},"./terraform/scripts/acp-iaas.sh")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"ibm-garage-iteration-zero")," repository to grant the necessary permissions to the functional ID user."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./terraform/scripts/acp-iaas.sh {functional-id}\n")))),Object(o.b)("p",null,"The script adds the ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-access_reference#infra"},"classic infrastructure permissions"),"\nneeded to create and manage clusters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create VLANs"),Object(o.b)("li",{parentName:"ul"},"Create Kubernetes Service clusters (e.g. create virtual servers, storage, and networking)"),Object(o.b)("li",{parentName:"ul"},"Manage Kubernetes Service clusters (e.g. add nodes)")),Object(o.b)("br",null),Object(o.b)("p",null,"The script also adds the IAM permissions to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the command to reset the API key that the Kubernetes service will use")),Object(o.b)("br",null),Object(o.b)("p",null,"By granting these infrastructure permissions to the functional ID and using it to create API keys, the account managers\nand environment administrators can create Kubernetes and OpenShift clusters without needing infrastructure permissions."),Object(o.b)("h4",null,"ii. Create API keys for the functional ID"),Object(o.b)("p",null,"Each account manager will need to use an API Key owned by functional ID’s to have the necessary permissions to provision\nthe classic infrastructure for the cluster. For security reasons, each account manager needs their own API key for the\nfunctional ID’s account."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Log into IBM Cloud as the functional ID (not as the account owner) and switch to the appropriate account."),Object(o.b)("li",{parentName:"ol"},"For each account manager, ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#create_user_key"},"create an API key")," and\ndownload each key to a file. Be sure to include the account manager’s name in the name/description of the APIKey."),Object(o.b)("li",{parentName:"ol"},"Give each account manager their API key file for the functional ID")),Object(o.b)("br",null),Object(o.b)("p",null,"Users should not share these API key files with each other. When a user is no longer an account manager, remove them\nfrom the access group and delete their API key."),Object(o.b)("h3",null,"B. Public and private VLANs"),Object(o.b)("p",null,"Create or provide a pair of public and private VLANs for the selected region and zone. These VLANs will implement the\npublic and private networks in the Kubernetes or OpenShift cluster. Use following to find the available\n",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#ov_intro_reg",title:"Locations for resource deployment"},Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," locations"),"\nand the available ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/overview?topic=overview-zero-downtime#data_center"},"data centers"),"\nin each region, such as ",Object(o.b)("em",{parentName:"p"},"dal10")," or ",Object(o.b)("em",{parentName:"p"},"lon02")),Object(o.b)(p,{mdxType:"InlineNotification"},Object(o.b)("p",null,"Note: If your account already has a pair of VLANs for your desired region and zone, you can use those.")),Object(o.b)("h4",null,"Create and manage vlans"),Object(o.b)("p",null,"Visit the ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/classic/network/vlans"},"VLANs")," page to list and manage the VLANs. Select ",Object(o.b)("inlineCode",{parentName:"p"},"Order VLAN")," to\ncreate a new public or private VLAN for use with the cluster."),Object(o.b)("h4",null,"List the available vlans"),Object(o.b)("p",null,"Use the ",Object(o.b)("a",{parentName:"p",href:"/getting-started/cli"},"IGC CLI"),"’s ",Object(o.b)("inlineCode",{parentName:"p"},"igc vlan")," command to select two existing VLANs and generate the properties\nto use for the installation scripts"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"igc vlan\n")),Object(o.b)("br",null),Object(o.b)("p",null,"These links help explain how to find the VLANs an account has, create more, and how a cluster uses them to implement its\nnetwork:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/infrastructure/vlans"},"Getting started with VLANs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/containers?topic=containers-plan_clusters#plan_basics"},"Understanding network basics of classic clusters")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/containers?topic=containers-subnets#basics"},"Overview of classic networking in IBM Cloud Kubernetes Service")),Object(o.b)("li",{parentName:"ul"},"List and create VLANs: ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/classic/network/vlans"},"Resources > Classic Infrastructure > IP Management > VLANs"))),Object(o.b)("h2",null,"Next steps"),Object(o.b)("p",null,"With these steps completed, the account manager will have configured the account so that the environment administrator\ncan install the environment. As you move into the next step of installing into the environment that has just been\nprepared, be sure to record the following information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)(i.a,{name:"ic",mdxType:"Globals"})," API key"),Object(o.b)("li",{parentName:"ul"},"Resource group name"),Object(o.b)("li",{parentName:"ul"},"Region"),Object(o.b)("li",{parentName:"ul"},"Data center (classic infrastructure only)"),Object(o.b)("li",{parentName:"ul"},"Private VLAN id (classic infrastructure only)"),Object(o.b)("li",{parentName:"ul"},"Public VLAN id (classic infrastructure only)")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-getting-started-day-0-prepare-account-index-mdx-88b7aabe9396340d28b6.js.map