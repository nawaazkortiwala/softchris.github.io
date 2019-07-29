(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{233:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-from-the-beginning-part-ii-pods-nodes-and-services"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-from-the-beginning-part-ii-pods-nodes-and-services","aria-hidden":"true"}},[e._v("#")]),e._v(" Kubernetes - from the beginning, part II, Pods, Nodes and Services")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/3ftzrfi7279p3ndiz14e.jpg",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("This second part aims to give additional context to Nodes, Pods and introduce the concept Service. There is some theory and some practice with Kubectl.")])]),e._v(" "),a("p",[e._v("Welcome back to this second part. By now concepts such "),a("code",[e._v("kubectl")]),e._v(", "),a("code",[e._v("nodes")]),e._v(" and "),a("code",[e._v("pods")]),e._v(" shouldn't be completely new to you but we will mention a little bit more what they are and of course, we will keep on learning about Kubernetes using our tool "),a("code",[e._v("kubectl")]),e._v(". We will also introduce the new concept of Services and how they are a better choice than a proxy to expose your apps.")]),e._v(" "),a("p",[e._v("This is part of a series of articles on Kubernetes:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-one.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part I - from the beginning, Part I, Basics, Deployment and Minikube"),a("OutboundLink")],1),e._v("\nIn this part, we cover why Kubernetes, some history and some basic concepts like deploying, Nodes, Pods.")]),e._v(" "),a("li",[e._v("Part II introducing Services and Labeling - "),a("strong",[e._v("we are here")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-three.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part III - scaling"),a("OutboundLink")],1),e._v("\nHere we cover how to scale and further show how "),a("em",[e._v("desired state")]),e._v(" is high-level instruction to Kubernetes. We also explain self-healing and briefly touch on auto-scaling.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-four.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part IV - Auto scaling"),a("OutboundLink")],1),e._v(" In this part we look at how to set up auto-scaling so we can handle sudden large increases of incoming requests")])]),e._v(" "),a("p",[e._v("In this part we will cover the following:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Deepen")]),e._v(" our knowledge on Pods and Nodes")]),e._v(" "),a("li",[a("strong",[e._v("Introduce")]),e._v(" Services and labeling")]),e._v(" "),a("li",[a("strong",[e._v("Perform")]),e._v(" an exercise, involving setting labels on Pods and use labels to query our artifacts")])]),e._v(" "),a("p",[e._v("## Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/free/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free Azure Account"),a("OutboundLink")],1),e._v(" If you want to try out AKS, Azure Kubernetes Service, you will need a free Azure account")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes.io"),a("OutboundLink")],1),e._v("\nOne of the best resources to learn about Kubernetes is at this official Kubernetes site by Google.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/topic/kubernetes/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes overview"),a("OutboundLink")],1),e._v(" An overview of Kubernetes, all its parts and how it works")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/kubernetes-service/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes in the Cloud"),a("OutboundLink")],1),e._v(" Do you feel you know everything about Kubernetes already and just want to learn how to use a managed service? Then this link is for you")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/aks/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation on AKS, Azure Kubernetes Service"),a("OutboundLink")],1),e._v("\nAzure Kubernetes Service, a managed Kubernetes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/best-practices?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Best practices on AKS"),a("OutboundLink")],1),e._v(" You already know AKS and want to learn how to use it better?")])]),e._v(" "),a("h2",{attrs:{id:"concepts-revisited"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts-revisited","aria-hidden":"true"}},[e._v("#")]),e._v(" Concepts revisited")]),e._v(" "),a("p",[e._v("When we create a Deployment on Kubernetes, that Deployment creates Pods with containers inside them. So Pods are tied to Nodes and will continue to exist until "),a("em",[e._v("terminated")]),e._v(" or "),a("em",[e._v("deleted")]),e._v(". Let's try to educate ourselves a bit more on Pods, Nodes and let's also introduce a new topic "),a("em",[e._v("Services")]),e._v(".")]),e._v(" "),a("p",[e._v("### Pods")]),e._v(" "),a("blockquote",[a("p",[e._v("Pods are the atomic unit on the Kubernetes platform, i.e smallest possible deployable unit")])]),e._v(" "),a("p",[e._v("We've stated the above before but it's worth mentioning again.")]),e._v(" "),a("blockquote",[a("p",[e._v("What else is there to know?")])]),e._v(" "),a("p",[e._v("A Pod is an abstraction that represents a group of one or more containers, for example, Docker or rkt, and some shared resources for those containers. Those resources include:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Shared storage")]),e._v(", as Volumes")]),e._v(" "),a("li",[a("strong",[e._v("Networking")]),e._v(", as a unique cluster IP address")]),e._v(" "),a("li",[a("strong",[e._v("Information")]),e._v(" about how to run each container, such as the container image version or specific ports to use")])]),e._v(" "),a("p",[e._v("A Pod can have more than one container. If it does contain more than one container it is so the other containers can support the primary application.\nTypical examples of helper applications are data pullers, data pushers, and proxies. You can read more on that use case "),a("a",{attrs:{href:"https://www.mirantis.com/blog/multi-container-pods-and-container-communication-in-kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("ol",[a("li",[e._v("The containers in a Pod share an IP Address and port space and are:")]),e._v(" "),a("li",[a("strong",[e._v("Always")]),e._v(" co-located")]),e._v(" "),a("li",[a("strong",[e._v("Co-scheduled")])])]),e._v(" "),a("p",[e._v("Let me show you an image to make it easier to visualize:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/rf5si3jtu812j9yfw3sa.png",alt:""}})]),e._v(" "),a("p",[e._v("As we can see above a Pod can have a lot of different artifacts in them that are able to communicate and support the app in some way.")]),e._v(" "),a("h3",{attrs:{id:"nodes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Nodes")]),e._v(" "),a("p",[e._v("A Pod always runs on a Node")]),e._v(" "),a("blockquote",[a("p",[e._v("So Node is the Pods parent?")])]),e._v(" "),a("p",[e._v("Yes.")]),e._v(" "),a("p",[e._v("A Node is a worker machine and may be either a virtual or a physical machine, depending on the cluster")]),e._v(" "),a("p",[e._v("Each Node is managed by the Master. A Node can have multiple pods.")]),e._v(" "),a("blockquote",[a("p",[e._v("So it's a one to many relationship")])]),e._v(" "),a("p",[e._v("The Kubernetes master automatically handles scheduling the pods across the Nodes in the cluster")]),e._v(" "),a("p",[e._v("Every Kubernetes Node runs at least a:")]),e._v(" "),a("ul",[a("li",[a("p",[a("strong",[e._v("Kubelet")]),e._v(", is responsible for the pod spec and talks to the cri interface")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("Kube proxy")]),e._v(", is the main interface for coms between nodes")])]),e._v(" "),a("li",[a("p",[a("strong",[e._v("A container runtime")]),e._v(", (like Docker, rkt) responsible for pulling the container image from a registry, unpacking the container, and running the application.")])])]),e._v(" "),a("blockquote",[a("p",[e._v("Ok so a Node contains a Kubelet and container runtime and one to many Pods. I think I got it.")])]),e._v(" "),a("p",[e._v("Let's show an image to make this info stick, cause it's quite important that we know what goes on, at least at a high level:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/rfvpt1fawgau4h35qju6.png",alt:""}})]),e._v(" "),a("p",[e._v("### Services")]),e._v(" "),a("p",[e._v("Pods are "),a("strong",[e._v("mortal")]),e._v(", they can die. Pods, in fact, have a "),a("em",[e._v("lifecycle")]),e._v(".")]),e._v(" "),a("p",[e._v("When a worker node dies, the Pods running on the Node are also lost.")]),e._v(" "),a("blockquote",[a("p",[e._v("What happens to our apps? 😦")])]),e._v(" "),a("p",[e._v("You might think them and their data are lost but not so. The whole point with Kubernetes is to not let that happen. We normally deploy something like a "),a("code",[e._v("ReplicaSet")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("A ReplicaSet, what do you mean?")])]),e._v(" "),a("p",[e._v("A "),a("code",[e._v("ReplicaSet")]),e._v(" is a high-level artifact that can drive the cluster back to "),a("em",[e._v("desired state")]),e._v(" via the creation of new Pods to keep your application running.")]),e._v(" "),a("blockquote",[a("p",[e._v("Ok so if a Pod goes down the ReplicaSet just creates a new Pod/s in its place?")])]),e._v(" "),a("p",[e._v("Yes, exactly that. If you focus on defining a "),a("em",[e._v("desired state")]),e._v(" the rest is up to Kubernetes.")]),e._v(" "),a("blockquote",[a("p",[e._v("Phew sounds really great then.")])]),e._v(" "),a("p",[e._v("This concept of "),a("em",[e._v("desired state")]),e._v(" is a very important one. You need to specify how many containers you want of each kind, at all times.")]),e._v(" "),a("blockquote",[a("p",[e._v("Oh so 4 database containers, 3 services etc?")])]),e._v(" "),a("p",[e._v("Yes exactly.")]),e._v(" "),a("p",[e._v("So you don't have to care about the details just tell Kubernetes what state you want and it does the rest. If something goes up, Kubernetes ensures it comes back up again to "),a("em",[e._v("desired state")]),e._v(".")]),e._v(" "),a("p",[e._v("Each Pod in a Kubernetes cluster has a unique IP address, even Pods on the same Node, so there needs to be a way of automatically reconciling changes among Pods so that your applications continue to function.")]),e._v(" "),a("blockquote",[a("p",[e._v("Ok?")])]),e._v(" "),a("p",[e._v("Yea, think like this. If a Pod containing your app goes down and another Pod is created in its place, running your app. Users should still be able to use your app after that.")]),e._v(" "),a("blockquote",[a("p",[e._v("Ok I got it. Makes me think...")])]),e._v(" "),a("h4",{attrs:{id:"the-motivation-for-a-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-motivation-for-a-service","aria-hidden":"true"}},[e._v("#")]),e._v(" The motivation for a Service")]),e._v(" "),a("p",[e._v("You should never refer to a Pod by it's IP address, just think what happens when a Pod goes down and comes back up again but this time with a different IP. It is for that reason a Service exists.")]),e._v(" "),a("p",[e._v("A Service in Kubernetes is an abstraction which defines a logical set of Pods and a policy by which to access them.")]),e._v(" "),a("blockquote",[a("p",[e._v("Makes me think of a routers and subnets")])]),e._v(" "),a("p",[e._v("Yea I guess you can say there is a resemblance in there somewhere.")]),e._v(" "),a("p",[e._v("Services enable a loose coupling between dependent Pods and are defined using YAML or JSON file, just like all Kubernetes objects.")]),e._v(" "),a("blockquote",[a("p",[e._v("That's handy, just JSON and YAML 😃")])]),e._v(" "),a("h4",{attrs:{id:"services-and-labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services-and-labels","aria-hidden":"true"}},[e._v("#")]),e._v(" Services and Labels")]),e._v(" "),a("p",[e._v("The set of Pods targeted by a Service is usually determined by a "),a("code",[e._v("LabelSelector")]),e._v(".")]),e._v(" "),a("p",[e._v("Although each Pod has a unique IP address, those IPs are not exposed outside the cluster without a Service. We can expose them through a proxy though as we showed in part I.")]),e._v(" "),a("blockquote",[a("p",[e._v("Wait, go back a second here, you said "),a("code",[e._v("LabelSelector")]),e._v(". I wasn't quite following?")])]),e._v(" "),a("p",[e._v("Remember how we couldn't refer to Pods by IP, cause Pods might go down and a new Pod could come back in its place?")]),e._v(" "),a("blockquote",[a("p",[e._v("Yes")])]),e._v(" "),a("p",[e._v("Well, labels are the answer to how Services and Pods are able to communicate. This is what we mean by loose coupling. By applying labels like for example "),a("em",[e._v("frontend")]),e._v(", "),a("em",[e._v("backend")]),e._v(", "),a("em",[e._v("release")]),e._v(" and so on to Pods, we are able to refer to Pods by their logical name rather than their specifics, i.e IP number.")]),e._v(" "),a("blockquote",[a("p",[e._v("Oh I get it, so it's a high-level domain language")])]),e._v(" "),a("p",[e._v("Mm, kind of.")]),e._v(" "),a("h4",{attrs:{id:"services-and-traffic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#services-and-traffic","aria-hidden":"true"}},[e._v("#")]),e._v(" Services and Traffic")]),e._v(" "),a("p",[e._v("Services allow your applications to receive traffic.")]),e._v(" "),a("p",[e._v("Services can be exposed in different ways by specifying a "),a("code",[e._v("type")]),e._v(" in "),a("code",[e._v("ServiceSpec")]),e._v(", service specification.")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("ClusterIP (default)")]),e._v(", Exposes the Service on an internal IP in the cluster. This type makes the Service only reachable from within the cluster.")]),e._v(" "),a("li",[a("strong",[e._v("NodePort")]),e._v(", Exposes the Service on the same port of each selected Node in the cluster using NAT. Makes a Service accessible from outside the cluster using "),a("code",[e._v("<NodeIP>:<NodePort>")]),e._v(". Superset of ClusterIP.")]),e._v(" "),a("li",[a("strong",[e._v("LoadBalancer")]),e._v(", Creates an external load balancer in the current cloud (if supported) and assigns a fixed, external IP to the Service. Superset of NodePort.")]),e._v(" "),a("li",[a("strong",[e._v("ExternalName")]),e._v(", Exposes the Service using an arbitrary name (specified by "),a("code",[e._v("externalName")]),e._v(" in the spec) by returning a CNAME record with the name. No proxy is used. This type requires v1.7 or higher of kube-dns.")])]),e._v(" "),a("blockquote",[a("p",[e._v("Ok I think I get it. Ensure I'm speaking externally to a Service instead of specific Pods. Depending on what I expose the Service as, that leads to different behavior?")])]),e._v(" "),a("p",[e._v("Yea that's correct.")]),e._v(" "),a("blockquote",[a("p",[e._v("You said something about labels though, how do we create and apply them to Pods?")])]),e._v(" "),a("p",[e._v("Yea lets talk about that next.")]),e._v(" "),a("h2",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels","aria-hidden":"true"}},[e._v("#")]),e._v(" Labels")]),e._v(" "),a("p",[e._v("As we just mentioned, Services are the abstraction that allows pods to die and replicate in Kubernetes without impacting your application.")]),e._v(" "),a("p",[e._v("Now, Services "),a("em",[e._v("match")]),e._v(" a set of Pods using "),a("em",[e._v("labels")]),e._v(" and "),a("em",[e._v("selectors")]),e._v(", it allows us to operate on Pods like a group.")]),e._v(" "),a("p",[e._v("Labels are key/value pairs attached to objects and can be used in any number of ways:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Designate")]),e._v(" objects for development, test, and production")]),e._v(" "),a("li",[a("strong",[e._v("Embed")]),e._v(" version tags")]),e._v(" "),a("li",[a("strong",[e._v("Classify")]),e._v(" an object using tags")])]),e._v(" "),a("p",[e._v("Labels can be attached to objects at creation time or later on. They can be modified at any time.")]),e._v(" "),a("h2",{attrs:{id:"lab-fun-with-labels-and-kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab-fun-with-labels-and-kubectl","aria-hidden":"true"}},[e._v("#")]),e._v(" Lab - Fun with Labels and kubectl")]),e._v(" "),a("p",[e._v("It's a good idea to have read the first part of this series where we create a deployment. If you haven't you need to first create a deployment like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run kubernetes-first-app --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now we should be good to go.")]),e._v(" "),a("p",[e._v("Ok. I know you are probably all tired from all theory by now.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/pvol1jg1836scxpca7ne.gif",alt:""}})]),e._v(" "),a("p",[e._v("I bet you are just itching to learn more hands on Kubernetes with "),a("code",[e._v("kubectl")]),e._v(".")]),e._v(" "),a("p",[e._v("Well, the time for that has come 😃. We will do two things:")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Create a Service")]),e._v(" and learn how we can expose our app using said Service")]),e._v(" "),a("li",[a("strong",[e._v("Learn about Labeling")]),e._v(" and how we can improve our querying game by having appropriate labels on our artifacts.")])]),e._v(" "),a("p",[e._v("Let's create a new service.")]),e._v(" "),a("p",[e._v("We will get acquainted with the "),a("code",[e._v("expose")]),e._v(" command.")]),e._v(" "),a("p",[e._v("Let's check for existing pods,")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/6v0mk886spo5st1vgs7b.png",alt:""}})]),e._v(" "),a("p",[e._v("Next let's see what services we have:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get services\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/6zvg4sn25ot4ujaejp4w.png",alt:""}})]),e._v(" "),a("p",[e._v("Next lets create a Service like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('kubectl expose deployment/kubernetes-first-app --type="NodePort" --port 8080\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("As you can see above we are just targeting one of our deployments "),a("code",[e._v("kubernetes-first-app")]),e._v(" and referring to it with "),a("code",[e._v("[type]/[deployment name]")]),e._v(" and type being "),a("code",[e._v("deployment")]),e._v(".")]),e._v(" "),a("p",[e._v("We expose it as service of type "),a("code",[e._v("NodePort")]),e._v(" and finally, we choose to expose it at port "),a("code",[e._v("8080")]),e._v(".\n"),a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/v7q6dgetxhl7dlridoj9.png",alt:""}})]),e._v(" "),a("p",[e._v("Now run "),a("code",[e._v("kubectl get services")]),e._v(" again and see the results:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ydyvfwcg5sggzqdvmczc.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see we now have two services in use, our basic "),a("code",[e._v("kubernetes")]),e._v(" service and our newly created "),a("code",[e._v("kubernetes-first-app")]),e._v(".")]),e._v(" "),a("p",[e._v("Next up we need to grab the port of our service and assign that to a variable:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("export NODE_PORT=$(kubectl get services/kubernetes-first-app -o go-template='{{(index .spec.ports 0).nodePort}}')\necho NODE_PORT=$NODE_PORT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("We now have a our port stored on environment variable "),a("code",[e._v("NODE_PORT")]),e._v(" and we are ready to start communicating with our service like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl $(minikube ip):$NODE_PORT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Which leads to the following output:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/b0ej25pbre67izc3e3uj.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"creating-and-applying-labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-applying-labels","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating and applying Labels")]),e._v(" "),a("p",[e._v("When we created our deployment and our Pod, it was automatically assigned with a label.")]),e._v(" "),a("p",[e._v("By typing")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe deployment\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("we can see the name of said label.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/5uw4u9afp6muxzg7h1wr.png",alt:""}})]),e._v(" "),a("p",[e._v("Next up we can query the pods by that same label")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods -l run=kubernetes-first-app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Above we are using "),a("code",[e._v("-l")]),e._v(" to query for a specific label and "),a("code",[e._v("kubernetes-bootcamp")]),e._v(" as the name of the label. This gives us the following result:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/hiq56f5xyflhh3g82mbl.png",alt:""}})]),e._v(" "),a("p",[e._v("You can do a similar query to your services:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get services -l run=kubernetes-first-app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("That just shows that you can query on different levels, for specific Pods or Services that have Pods with that label.")]),e._v(" "),a("p",[e._v("Next up we will look at how to change the label")]),e._v(" "),a("p",[e._v("First let's get the name of the pod, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POD_NAME=kubernetes-first-app-669789f4f8-6glpx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Above I'm just assigning what my Pod is called to a variable "),a("code",[e._v("POD_NAME")]),e._v(". Check with a "),a("code",[e._v("kubectl getpods")]),e._v(" what your Pod is called.")]),e._v(" "),a("p",[e._v("Then we can add/apply the new label like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl label pod $POD_NAME app=v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/lmyflbuurr07gg9gzw5f.png",alt:""}})]),e._v(" "),a("p",[e._v("Verify that the new label have been set, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe pod\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("or")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe pods $POD_NAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/6dv4nbveyzliw820plkm.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see from the result our new label "),a("code",[e._v("app=v1")]),e._v(" has been appended to existing labels.")]),e._v(" "),a("p",[e._v("Now we can query like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods -l app=v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("That's pretty much how labeling works, how to get available labels, apply them and use them in a query. Ensure to give them a descriptive name like an app version, a certain environment or a name like "),a("em",[e._v("frontend")]),e._v(" or "),a("em",[e._v("backend")]),e._v(", something that makes sense to your situation.")]),e._v(" "),a("h3",{attrs:{id:"clean-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clean-up","aria-hidden":"true"}},[e._v("#")]),e._v(" Clean up")]),e._v(" "),a("p",[e._v("Ok, so we created a service. We should learn how to clean up after ourselves. Run the following command to remove our service:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl delete service -l run=kubernetes-bootcamp\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Verify the service is no longer there with:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get services\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("also, ensure our exposed IP and port can no longer be reached:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl $(minikube ip):$NODE_PORT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Just because the service is gone doesn't mean the app is gone. The app should still be reachable on:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl exec -ti $POD_NAME curl localhost:8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("So what did we learn? We learned a bit more on Pods and Nodes. Furthermore, we learned that we shouldn't speak directly to Pods but rather use a high-level abstraction such as Services. Services use labels as a way to define a domain language and apply those to different Pods.")]),e._v(" "),a("p",[e._v("Ok, so we understand a bit more on Kubernetes and how different concepts relate. We mentioned something called "),a("em",[e._v("desired state")]),e._v(" a number of times but we didn't go into detail on how to set such a state. That's our next part in this series where we will cover how to set the "),a("em",[e._v("desired state")]),e._v(" and how Kubernetes maintains it, so stay tuned.")]),e._v(" "),a("p",[e._v("Click "),a("a",{attrs:{href:"https://dev.to/azure/kubernetes-part-iii-scaling-1mmi",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(" to go to the next part on Scaling.")])])},[],!1,null,null,null);t.default=r.exports}}]);