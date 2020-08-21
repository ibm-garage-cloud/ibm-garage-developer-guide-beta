(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{Vx0U:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return h}));var a=n("k1TG"),i=n("8o2o"),o=(n("q1tI"),n("7ljp")),r=n("013z"),s=n("T0C+"),l=(n("qKvR"),{}),p=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},c=p("PageDescription"),b=p("AnchorLinks"),d=p("AnchorLink"),u={_frontmatter:l},m=r.a;function h(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(m,Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(c,{mdxType:"PageDescription"},Object(o.b)("p",null,"Use Jenkins to automate your continuous integration process")),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jenkins.io/"}),"Jenkins")," is a self-contained, open source automation server that can be used to automate all sorts of tasks related to building, testing, and delivering or deploying software.\nIt is a perfect tool for helping manage continuous integration tasks for a wide range of software components."),Object(o.b)("p",null,"Jenkins Pipeline (or simply “Pipeline”) is a suite of plugins that supports implementing and integrating continuous delivery pipelines into Jenkins."),Object(o.b)("p",null,"A continuous delivery pipeline is an automated expression of your process for getting software from version control right through to your users and customers."),Object(o.b)("p",null,"Jenkins Pipeline provides an extensible set of tools for modeling simple-to-complex delivery pipelines “as code.” The definition of a Jenkins Pipeline is typically written into a text file (called a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jenkins.io/doc/pipeline/tour/hello-world/"}),"Jenkinsfile"),") that in turn is checked into a project’s source control repository."),Object(o.b)("h3",null,"Pipelines"),Object(o.b)("p",null,"Pipelines offer a set of stages or steps that can be chained together to allow a level of software\nautomation. This automation can be tailored to the specific project requirements."),Object(o.b)("p",null,"You can read more information about Jenkins Pipelines ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://jenkins.io/doc/book/pipeline/"}),"here")),Object(o.b)("h3",null,"Stages"),Object(o.b)("p",null,"Pipelines are defined in a ",Object(o.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that sits in the root of your application code. It defines a number of stages. Each of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/codepatterns/overview"}),Object(o.b)(s.a,{name:"templates",mdxType:"Globals"}))," includes a ",Object(o.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," that offers a number of stages. The stages have been configured to complete the build, test, package, and deploy of the application code. Each stage can use the defined defined ",Object(o.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(o.b)("inlineCode",{parentName:"p"},"config maps")," that were previously configured during the installation of Development cluster setup."),Object(o.b)("h2",null,"Developer Tools Pipeline"),Object(o.b)("p",null,"To enable application compatibility between Kubernetes and OpenShift, the ",Object(o.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," is consistent between pipeline registration with\nboth platforms. Also, the Docker images are built from\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.redhat.com/en/blog/introducing-red-hat-universal-base-image"}),"UBI images"),"\nso that their containers can run on both platforms."),Object(o.b)("p",null,"These are the stages in the pipeline and a description of what each stage does. The ",Object(o.b)("strong",{parentName:"p"},"bold stage names")," indicate\nthe stages that are required; the ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"italics stage names"))," indicate optional stages that can be deleted or will be ignored if the tool\nsupporting the stage is not installed. These stages represent a typical production pipeline flow for a cloud-native application."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Setup"),": Clones the code into the pipeline"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build"),": Runs the build commands for the code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Test"),":\tValidates the unit tests for the code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Publish pacts")),":\tPublishes any pact contracts that have been defined"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Sonar scan")),": Runs a sonar code scan of the source code and publishes the results to SonarQube"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Verify environment"),": Validates the OpenShift or IKS environment configuration is valid"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Build image"),": Builds the code into a Docker images and stores it in the IBM Cloud Image registry"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Deploy to DEV env"),":\tDeploys the Docker image tagged version to ",Object(o.b)("inlineCode",{parentName:"li"},"dev")," namespace using Helm Chart"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Health Check"),": Validates the Health Endpoint of the deployed application"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Package Helm Chart")),": Stores the tagged version of the Helm chart in Artifactory"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},Object(o.b)("em",{parentName:"strong"},"Trigger CD Pipeline")),": This is a GitOps stage that will update the build number in designated git repo and trigger ArgoCD for deployment to ",Object(o.b)("strong",{parentName:"li"},"test"))),Object(o.b)("h2",null,"Registering Pipelines"),Object(o.b)("p",null,"The ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/codepatterns/overview"}),Object(o.b)(s.a,{name:"templates",mdxType:"Globals"}))," are a good place to start to see how ",Object(o.b)("inlineCode",{parentName:"p"},"Jenkinsfile")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Dockerfile")," should be configured for use in a Jenkins CI pipeline. To register your git repo, use the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/getting-started/cli"}),"IGC CLI"),". This command automates a number of manual steps you would have to do with Jenkins, including: managing secrets, webhooks, and pipeline registration in the Jenkins tools."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"igc pipeline\n")),Object(o.b)("p",null,"By default, the pipeline will register into the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," namespace and will copy all the ",Object(o.b)("inlineCode",{parentName:"p"},"configMaps")," and ",Object(o.b)("inlineCode",{parentName:"p"},"secrets")," from the ",Object(o.b)("inlineCode",{parentName:"p"},"tools")," namespace to the ",Object(o.b)("inlineCode",{parentName:"p"},"dev")," namespace. This means the pipeline can execute, knowing it has access to the key information that enables it to integrate with both the cloud platform and the various development tools. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/guides/cluster-configuration"}),"Cluster Configuration")," for more detailed information."),Object(o.b)("h3",null,"Registering Pipeline in new namespace"),Object(o.b)("p",null,"You can use any namespace you want to register a pipeline. If you add ",Object(o.b)("inlineCode",{parentName:"p"},"-n")," or ",Object(o.b)("inlineCode",{parentName:"p"},"namespace")," to your ",Object(o.b)("inlineCode",{parentName:"p"},"igc pipeline")," command, it will create a new namespace if it doesn’t already exist. It will copy the necessary ",Object(o.b)("inlineCode",{parentName:"p"},"secrets")," and ",Object(o.b)("inlineCode",{parentName:"p"},"configMaps")," into that namespace and configure the build agents pods to run in that namespace."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"igc pipeline -n team-one\n")),Object(o.b)("p",null,"This is good if you have various squads, teams, pairs or students working in the same Development Tools environment."),Object(o.b)("h2",null,"Continuous deployment"),Object(o.b)("p",null,"In addition to continuous integration, the ",Object(o.b)(s.a,{name:"env",mdxType:"Globals"})," also supports continuous delivery\nusing Artifactory and ArgoCD:"),Object(o.b)(b,{small:!0,mdxType:"AnchorLinks"},Object(o.b)(d,{to:"../../guides/artifactory",mdxType:"AnchorLink"},"Artifact Management with Artifactory"),Object(o.b)(d,{to:"../../guides/argocd",mdxType:"AnchorLink"},"Continuous Delivery with ArgoCD")))}h.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-guides-jenkins-index-mdx-3ed807b52785a05ba604.js.map