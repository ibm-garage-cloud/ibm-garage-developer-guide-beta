(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},RSIL:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("XbGe"),c=a("T0C+"),s=(a("qKvR"),{}),l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=l("PageDescription"),u=l("InlineNotification"),p={_frontmatter:s},m=i.a;function h(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"PageDescription"},Object(o.b)("p",null,"Overall process for installing a ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}))),Object(o.b)("h2",null,"Background"),Object(o.b)("p",null,"To understand how the process is performed, keep these concepts in mind."),Object(o.b)("h3",null,"Roles"),Object(o.b)("p",null,"A ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"})," is installed and used by users acting in four roles:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Account owner"),": The user who owns the account"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Account managers"),": Account owner or other users with ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"},"account management permissions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Environment administrators"),": Users in the account with ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#platformroles"},"permissions to create services in the environment’s resource group")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Environment users"),": Users in the account with ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-userroles#service_access_roles"},"permissions to use existing services in the environment’s resource group")," (e.g. developers, data scientists, etc.)")),Object(o.b)("p",null,"The account owner must create the access group for account managers (see below). The account owner will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create an ",Object(o.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," access group using the ",Object(o.b)("inlineCode",{parentName:"li"},"acp-mgr")," script"),Object(o.b)("li",{parentName:"ul"},"Add a functional ID, configured using the ",Object(o.b)("inlineCode",{parentName:"li"},"acp-iaas")," script, with API keys for the account managers")),Object(o.b)("p",null,"Then, as described in ",Object(o.b)("a",{parentName:"p",href:"/admin/config-account"},"Configure Account"),", the account managers can set up the resource groups and access groups needed to install and use the environments. For each environment, the account managers will:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a resource group"),Object(o.b)("li",{parentName:"ul"},"Create an access group named ",Object(o.b)("inlineCode",{parentName:"li"},"<resource_group>-ADMIN")," using the script ",Object(o.b)("inlineCode",{parentName:"li"},"acp-admin")),Object(o.b)("li",{parentName:"ul"},"Create an access group named ",Object(o.b)("inlineCode",{parentName:"li"},"<resource_group>-USER")," using the script ",Object(o.b)("inlineCode",{parentName:"li"},"acp-user"))),Object(o.b)("p",null,"This diagram from ",Object(o.b)("a",{parentName:"p",href:"http://localhost:8000/toolkit-resources/resource-mgmt#access-group-example"},"Resource Access Management")," shows the relationship of these access groups to a pair of development environments:"),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"89.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVQ4y11UDWxTVRS+ZXODDUoMwYWIoqCgREhQMw0oIApDmIMNGG7DZAiLMRsEBorAAEFwBmGEDVHkd4BRYBJimJFJ4qZjbN3WwrrN9e+9tq+0Xdv32/fX3+N9ZSSGm3w5uTn3fjnnfN+9CAB0GCigwKjCg90o/8vOJ+evrZifV/j2jBXlxS8sLy2Yvn5bxZSKmspJRZUf5qzZXJazelPpYyjLWbOpBMd1TyGNDK9RWpxbVonW7D4/5vmZKEvb/x+EH0cr0iUKEaLOI53v3EN4zyLd/e+RDiFAlRtQNvL7vAtvX7vwAcfQs15/bxXmfjW9pa35NZ7na202+7GBgcHjvCAcU5TIkkfkPzYE0an6ELp6jkXHa23oykVAh/YdRRWfZGajWCwG1sF+iEQivSPVov5/TR95HzyAoaGhFGiaBkVRTmv5Eyc8WUePQPbefZB15iRkHcSx8TJkX7gImeXlaCxSItFqiha3Soq6Ni2/JtX+3Z7WhYFAoMXhcDTb7fabFEW14v1GjdBgCGxzUyHK46HNBBkaZNhYfygokiSh/pJfMFePYgI9Ux52bcCHJ/SRfsw3Oa2to2Wey+W8YrVaL6uqejEej1+XZblMI7Rao4c5Jgk8nQSfLwaSlARB4sDjE42lhfl6JIliA8uEQJKVlSMtp/Xe61wnyxLgOUI4HMaXJBBF6YyWHzDDIQPZAs3Wo3Kfpy0iCaBwggBer9peVpKnR0YioCckmNx93zx6xY56zLfgieY/m+ZEI+peVY3swhXuxDjAcfziFGEf1PW6/4Y/7KdgwNsDgggQDzLAkaJ53qerxyMhSE4y3P4pFx8ee/hqu1ahrsPQmoeHYiUIwoxb7RMEwclx3HaN0GhMFFNOaPK6odFJwCWPJ9FIs3CFdMG+pYufG4c4gat3OB0QFuVlIy2nG3rvlFgsFjAajWA2m8HtdgMmbtDyd7oYxLCAxDB+DMEEUiPxlJUCQRpVVmEf8krsGS4CC0IMq99e/3PKNgZj+/skQVAk6bT7/X5rKBQKYFvt1C7e7RLWWRzMLRvJNVkd7HX/cOJXmk78TpLwTV7ei+OQQvsmBi3Gl/Hh7Gs9Hkz3bHpL62+5FOVuwJY5hgWpwzP8gWPZlGiEhatTaQ6koACC0wNxLBrLMUBRfF9x8arxSJXF7wQ2BGo09kjl9G5TRylNh7ByXsCzwwqLgN1wUst7++hDBNkOXfbrso3ojCRpXqFlGSh/5J/yFYv0yDXMzPAwSoF3ODjx23PXUqJ09rQtjsdj5ng80YM92I1fkyUs8NUa4fCAcMTsvwE3qVqwMa0AShSigRBwhGBatKVkPGICrumGthtFiSRMGOJTFerudrctt9ttPiyME3uRYFmWxnPckzL2vfAmmvBZA44H3bTDZwwHlR6RTwx6qWTjO0tn6xEv8HWE2wlCWFr6qOWu3o6UyiaTaURlCqus1Gv54zcgo+hzyNxYDRn52yDj6QWQMf1dyBydC2kfbxw3FolKLEeNwxxBkrKXVe1PWcB0768lLtLucLvIQYYO9HMsTcWjcrWb134bhN76CtASjDcOAJpS9RC5VUn0WTkag3hRQbwUe/gvLmxCb26+lVW84+tXDp69MGv/6Uuzak6e1TB7/d7al/I3fzF15daaaUXVe6YVPo6tu6cVbNk19T/tRroIlsTlVgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Access groups example",title:"Access groups example",src:"/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png",srcSet:["/static/97670ac0e688220fa7f8e2810d92d96b/7fc1e/access-example.png 288w","/static/97670ac0e688220fa7f8e2810d92d96b/a5df1/access-example.png 576w","/static/97670ac0e688220fa7f8e2810d92d96b/3cbba/access-example.png 1152w","/static/97670ac0e688220fa7f8e2810d92d96b/58488/access-example.png 1604w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The steps below help the account owner start configuring the account in this manner."),Object(o.b)("h3",null,"Architecture"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/arch/environment"},"Environment Architecture")," shows the structure of the ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"})," that will be installed. Typically, each ",Object(o.b)("a",{parentName:"p",href:"/arch/teams"},"development team")," gets its own environment. However, multiple teams can share a single environment. The environment structure is designed to support best practices for a ",Object(o.b)("a",{parentName:"p",href:"/arch/application"},"cloud-native application architecture"),", including designing applications that are ",Object(o.b)("a",{parentName:"p",href:"/arch/manageable"},"built to manage"),"."),Object(o.b)("h2",null,"Set up account managers"),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": The ",Object(o.b)("strong",{parentName:"p"},"account owner")," creates this access group for account managers and adds the functional ID for managing API keys. See ",Object(o.b)("a",{parentName:"p",href:"/admin/plan-installation#roles"},"Plan Installation > Roles")," for the overview of the roles involved.")),Object(o.b)("p",null,"The account owner may want to delegate the responsibilities for configuring the account for all of the development teams that want environments. Those users who are delegated to will need account management permissions. An easy way to manage who has these permissions is to create an access group with those policies and add those users to the group. An account only needs one of these account manager access groups, which will be used to support all environments in the account."),Object(o.b)("p",null,"In a new account, the account owner is the only user. Even after inviting other users, the account owner is initially the only user with the account management permissions needed to grant those permissions to other users. Therefore it is the account owner who must create the access group for account managers."),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": The video in ",Object(o.b)("a",{parentName:"p",href:"/toolkit-resources/resource-mgmt#configuration-process"},"Resource Access Management > Configuration Process")," shows how to perform the steps in this process.")),Object(o.b)("h3",null,"Prepare to run scripts"),Object(o.b)("p",null,"We’ll use some scripts in the steps below to help create access groups. Here, we’ll download the scripts and prepare to run them. (If you want to use the console to manually configure the access groups, you can skip this step.)"),Object(o.b)("p",null,"Clone the Git repository with the scripts. (This repo also has the scripts for installing the ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}),".)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Clone the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-garage-cloud/ibm-garage-iteration-zero"},"ibm-garage-iteration-zero")," Git repository to your local filesystem"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:ibm-garage-cloud/ibm-garage-iteration-zero.git\n"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Switch to the cloned directory"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"cd ibm-garage-iteration-zero\n")))),Object(o.b)("p",null,"The scripts need you to log into IBM Cloud first. In the terminal you’ll use to run the scripts, log in to IBM Cloud."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Log in to the IBM Cloud CLI",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"ibmcloud login -a cloud.ibm.com -r <region>\n")))),Object(o.b)("h3",null,"Access group for account managers"),Object(o.b)("p",null,"The account owner must create an access group to grant the necessary permissions for managing the account. Do this by running a script, or by using the console to manually perform the steps in the script. Also, add the account manager(s) to this group."),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": IBM Cloud has multiple ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-account-services"},"account management services"),", in addition to IAM: Billing, License and entitlement, Support center, etc. An easy way to grant access to these individually is to create an access group for administering each: ACCT-MGR-BILLING-ADMIN, ACCT-MGR-LICENSE-ADMIN, ACCT-MGR-SUPPORT-ADMIN. The group created below only has IAM capabilities, so a good name for it is ACCT-MGR-IAM-ADMIN.")),Object(o.b)("p",null,"To create the access group for the account managers:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a new ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-account_setup"},"access group"),", name it something like ",Object(o.b)("inlineCode",{parentName:"li"},"ACCT-MGR-IAM-ADMIN")," (all capital letters) (or name it after your account)"),Object(o.b)("li",{parentName:"ul"},"Run the script ",Object(o.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-mgr.sh"),", which adds the necessary policies to the access group"),Object(o.b)("li",{parentName:"ul"},"Add the account managers to the group")),Object(o.b)("p",null,"The script adds policies that allow the user to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create resource groups"),Object(o.b)("li",{parentName:"ul"},"Invite users to the account"),Object(o.b)("li",{parentName:"ul"},"Create access groups")),Object(o.b)("p",null,"The script also adds the same policies that an environment administrator has. But whereas an environment administrator can only manage the resources in one resource group, an account manager can manage the resources in all resource groups. This gives the account manager the ability in any resource group to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create clusters"),Object(o.b)("li",{parentName:"ul"},"Manage the IBM Cloud Container Registry (used as the environment’s ",Object(o.b)("a",{parentName:"li",href:"/tools/image-registry"},"image registry"),")"),Object(o.b)("li",{parentName:"ul"},"Create service instances")),Object(o.b)("h3",null,"Functional ID for infrastructure permissions"),Object(o.b)("p",null,"Account managers need the permissions to create and manage IaaS resources required by a ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}),". Permissions for classic infrastructure (fka SoftLayer) cannot be added to an access group, only to a user. Rather than add these permissions to each account manager, create a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/iam?topic=iam-manapikey#ibm-cloud-api-keys"},"functional ID")," and grant it the infrastructure permissions. The functional ID will ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-users#api_key_most_cases"},"own the API keys")," that the Kubernetes service needs to create clusters. As account managers are added to and removed from the account, the functional ID will always remain and always have the necessary infrastructure permissions."),Object(o.b)("p",null,"Set up the functional ID in the account:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create the functional ID, sign it up for an IBM Cloud account, and ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-iamuserinv"},"invite the user")," to this account"),Object(o.b)("li",{parentName:"ul"},"Run the script ",Object(o.b)("inlineCode",{parentName:"li"},"./terraform/scripts/acp-iaas.sh")," for the functional ID’s user, which adds the necessary permissions to the user")),Object(o.b)("p",null,"The script adds the ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/containers?topic=containers-access_reference#infra"},"classic infrastructure permissions")," needed to create and manage clusters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create VLANs"),Object(o.b)("li",{parentName:"ul"},"Create Kubernetes Service clusters (e.g. create virtual servers, storage, and networking)"),Object(o.b)("li",{parentName:"ul"},"Manage Kubernetes Service clusters (e.g. add nodes)")),Object(o.b)("p",null,"The script also adds the IAM permissions to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Run the command to reset the API key that the Kubernetes service will use")),Object(o.b)("p",null,"By granting these infrastructure permissions to the functional ID and using it to create API keys, the account managers and environment administrators can create Kubernetes and OpenShift clusters without needing infrastructure permissions."),Object(o.b)("p",null,"Next, each account manager will need to use the functional ID to reset the API key that the Kubernetes service will use. By using the functional ID, the API key will be owned by the functional ID instead of by the account manager. The account managers need a way to log in as the functional ID without all of them sharing the ID’s password or a single API key. Thus each account manager needs their own API key for the functional ID’s account."),Object(o.b)("p",null,"Create API keys for the functional ID:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Log into IBM Cloud as the functional ID (not as the account owner)"),Object(o.b)("li",{parentName:"ul"},"Switch to this account that you’re configuring"),Object(o.b)("li",{parentName:"ul"},"For each account manager, ",Object(o.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/iam?topic=iam-userapikey#create_user_key"},"create an API key"),", downloading each key to a file"),Object(o.b)("li",{parentName:"ul"},"Give each account manager their API key file for the functional ID")),Object(o.b)("p",null,"Users should not share these API key files with each other. When a user is no longer an account manager, remove them from the access group and delete their API key. To make a user an account manager, add them to the access group and create an API key for them."),Object(o.b)("h2",null,"Process"),Object(o.b)("p",null,"The overall process:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Configure account — An account manager configures the account so that ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}),"s can be installed"),Object(o.b)("li",{parentName:"ol"},"Install environment — An environment administrator runs the ",Object(o.b)(c.a,{name:"shortName",mdxType:"Globals"})," scripts to create a ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"})),Object(o.b)("li",{parentName:"ol"},"Configure environment — The environment administrator finishes setting up the newly installed ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}))),Object(o.b)("p",null,"Once the environment is set up, the environment users can start using it to develop applications."),Object(o.b)("h3",null,"Configure account"),Object(o.b)("p",null,"First, before installing an environment, an account manager needs to configure the IBM Cloud account for the\nenvironment. See ",Object(o.b)("a",{parentName:"p",href:"/admin/config-account"},"Configure Account")," for detailed instructions, which accomplish this:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Upgrade the image registry"),Object(o.b)("li",{parentName:"ol"},"Prepare to run scripts"),Object(o.b)("li",{parentName:"ol"},"Select a region and zone"),Object(o.b)("li",{parentName:"ol"},"Select a pair of public/private VLANs"),Object(o.b)("li",{parentName:"ol"},"Create a resource group"),Object(o.b)("li",{parentName:"ol"},"Set the Kubernetes service API key"),Object(o.b)("li",{parentName:"ol"},"Create an access group for environment administrators"),Object(o.b)("li",{parentName:"ol"},"Create an access group for environment users"),Object(o.b)("li",{parentName:"ol"},"Optionally, create a cluster for the environment")),Object(o.b)("h3",null,"Install environment"),Object(o.b)("p",null,"Second, once the account manager has configured the account for installing an environment, the account manager and the environment administrator need to jointly decide how the environment administrator is going to install the environment. There are two options:"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/admin/installation-ibm-cloud"},Object(o.b)("strong",{parentName:"a"},"Install including creating a new cluster")),": The environment administrator who performs this install needs permissions to create clusters as well as service instances. The script will run as this user to create the cluster, create the service instances, and install the CI/CD tools in the cluster."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/admin/installation-existing"},Object(o.b)("strong",{parentName:"a"},"Install into an existing cluster")),": The account manager creates the cluster and then grants the environment administrator access to it. The environment administrator who performs this install needs permissions to create service instances but not to create clusters. The script will run as the environment administrator to create the service instances and install the CI/CD tools in the existing cluster."),Object(o.b)(u,{mdxType:"InlineNotification"},Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note"),": A third option is to ",Object(o.b)("a",{parentName:"p",href:"/admin/installation-crc"},"install an environment in Red Hat CodeReady Containers"),". For this option, you’re not installing in IBM Cloud, so you don’t have to configure your IBM Cloud account. However, you do have to install CRC.")),Object(o.b)("h3",null,"Configure environment"),Object(o.b)("p",null,"Third, after installing the environment, before giving the users access to the environment, the environment administrator needs to finish configuring it. See ",Object(o.b)("a",{parentName:"p",href:"/admin/config-install"},"Configure Environment")," for detailed instructions, which accomplish this:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Configure RBAC security in the cluster"),Object(o.b)("li",{parentName:"ul"},"Test opening the ",Object(o.b)(c.a,{name:"dashboard",mdxType:"Globals"})),Object(o.b)("li",{parentName:"ul"},"Complete setup of LogDNA"),Object(o.b)("li",{parentName:"ul"},"Complete setup of SysDig"),Object(o.b)("li",{parentName:"ul"},"Test the pipeline by deploying a first app"),Object(o.b)("li",{parentName:"ul"},"Complete setup of Artifactory"),Object(o.b)("li",{parentName:"ul"},"Complete setup of Argo CD"),Object(o.b)("li",{parentName:"ul"},"Rerun pipeline and confirm that the app’s Helm chart is added to Artifactory"),Object(o.b)("li",{parentName:"ul"},"Set up a GitOps repo to validate ArgoCD setup and configuration")),Object(o.b)("h2",null,"Conclusion"),Object(o.b)("p",null,"Having configured the account, installed the environment, and configured the environment, the administrators have now completed an end-to-end installation of a ",Object(o.b)(c.a,{name:"env",mdxType:"Globals"}),". It is ready for a development team to begin using for application development."))}h.isMDXComponent=!0},XbGe:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),c=a("Wbzz"),s=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),u=a.n(b),p=a("QH2O"),m=a.n(p),h=a("qKvR"),d=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(h.b)("div",{className:u()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12"},Object(h.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,s=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(h.b)("div",{className:"bx--row "+g.row},Object(h.b)("div",{className:"bx--col"},Object(h.b)("a",{className:g.link,href:s},"Edit this page on GitHub"))):null},O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,n=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((function(e){var t,r=i()(e,{lower:!0,strict:!0}),o=r===n,s=new RegExp(n+"/?(#.*)?$"),l=a.replace(s,r);return Object(h.b)("li",{key:e,className:u()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(h.b)(c.Link,{className:f.link,to:""+l},e))}));return Object(h.b)("div",{className:f.tabsContainer},Object(h.b)("div",{className:"bx--grid"},Object(h.b)("div",{className:"bx--row"},Object(h.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(h.b)("nav",null,Object(h.b)("ul",{className:f.list},r))))))},t}(r.a.Component),v=a("MjG9"),w=a("CzIb");t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,b=void 0===o?{}:o,u=t.relativePagePath,p=t.titleType,m=b.tabs,g=b.title,O=b.theme,f=b.description,y=b.keywords,A=Object(w.a)().interiorTheme,C=Object(c.useStaticQuery)("223705900").site.pathPrefix,x=C?n.pathname.replace(C,""):n.pathname,I=m?x.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",T=O||A;return Object(h.b)(l.a,{tabs:m,homepage:!1,theme:T,pageTitle:g,pageDescription:f,pageKeywords:y,titleType:p},Object(h.b)(d,{title:r?Object(h.b)(r,null):g,label:"label",tabs:m,theme:T}),m&&Object(h.b)(N,{slug:x,tabs:m,currentTab:I}),Object(h.b)(v.a,{padded:!0},a,Object(h.b)(j,{relativePagePath:u})),Object(h.b)(s.a,null))}}}]);
//# sourceMappingURL=component---src-pages-admin-plan-installation-index-mdx-dd495294e96ae8d8760b.js.map