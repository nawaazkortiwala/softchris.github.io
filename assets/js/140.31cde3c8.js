(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{374:function(e,t,a){"use strict";a.r(t);var s=a(0),o=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"learn-kubernetes-from-the-beginning-part-iii-scaling-my-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn-kubernetes-from-the-beginning-part-iii-scaling-my-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Learn Kubernetes - from the beginning, part III scaling my app")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/gbc8lilsj6icishim13r.jpg",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("This third part aims to show how you scale your application. We can easily set the number of Replicas we want of a certain application and let Kubernetes figure out how to do that. This is us defining a so-called "),a("em",[e._v("desired state")]),e._v(".")])]),e._v(" "),a("p",[e._v("When traffic increases, we will need to scale the application to keep up with user demand. We've talked about deployments and services, now lets talk scaling.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-one.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part I - from the beginning, Part I, Basics, Deployment and Minikube"),a("OutboundLink")],1),e._v("\nIn this part, we cover why Kubernetes, some history and some basic concepts like deploying, Nodes, Pods.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-two.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part II - introducing Services and Labeling"),a("OutboundLink")],1),e._v("\nIn this part, we deepen our knowledge of Pods and Nodes. We also introduce Services and labeling using labels to query our artifacts.")]),e._v(" "),a("li",[e._v("Part III - Scaling, "),a("strong",[e._v("we are here")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-four.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Part IV - Auto scaling"),a("OutboundLink")],1),e._v(" In this part we look at how to set up auto-scaling so we can handle sudden large increases of incoming requests")])]),e._v(" "),a("blockquote",[a("p",[e._v("What does scaling mean in the context of Kubernetes?")])]),e._v(" "),a("p",[e._v("We get more Pods. More Pods that are scheduled to nodes.")]),e._v(" "),a("p",[e._v("Now it's time to talk about "),a("em",[e._v("desired state")]),e._v(" again, that we mentioned in previous parts.")]),e._v(" "),a("p",[e._v("This is where we relinquish control to Kubernetes. All we need to do is tell Kubernetes how many Pods we want and Kubernetes does the rest.")]),e._v(" "),a("blockquote",[a("p",[e._v("So we tell Kubernetes about the number of Pods we want, what does that mean? What does Kubernetes do for us?")])]),e._v(" "),a("p",[e._v("It means we get multiple instances of our application. It also means traffic is being distributed to all of our Pods, ie. "),a("em",[e._v("load balancing")]),e._v(".")]),e._v(" "),a("p",[e._v("Furthermore, Kubernetes, or more specifically, services within Kubernetes will monitor which Pods are available and send traffic to those Pods.")]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/free/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Free Azure Account"),a("OutboundLink")],1),e._v(" If you want to try out AKS, Azure Kubernetes Service, you will need a free Azure account")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kubernetes.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes.io"),a("OutboundLink")],1),e._v("\nOne of the best resources to learn about Kubernetes is at this official Kubernetes site by Google.")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/topic/kubernetes/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes overview"),a("OutboundLink")],1),e._v(" An overview of Kubernetes, all its parts and how it works")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://azure.microsoft.com/en-gb/services/kubernetes-service/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kubernetes in the Cloud"),a("OutboundLink")],1),e._v(" Do you feel you know everything about Kubernetes already and just want to learn how to use a managed service? Then this link is for you")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/aks/?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Documentation on AKS, Azure Kubernetes Service"),a("OutboundLink")],1),e._v("\nAzure Kubernetes Service, a managed Kubernetes")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/best-practices?wt.mc_id=personal-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Best practices on AKS"),a("OutboundLink")],1),e._v(" You already know AKS and want to learn how to use it better?")])]),e._v(" "),a("h2",{attrs:{id:"scaling-demo-lab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-demo-lab","aria-hidden":"true"}},[e._v("#")]),e._v(" Scaling demo Lab")]),e._v(" "),a("p",[e._v("If you haven't followed the first two parts I do recommend you go back and have a read. What you need for the following to work is at least a deployment. So if you haven't created one, here is how:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run kubernetes-first-app --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8080\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Let's have a look at our deployments:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get deployments\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Let's look closer at the response we get:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4aaumkq7u6b7i4dmms1z.png",alt:""}})]),e._v(" "),a("p",[e._v("We have three pieces of information that are important to us. First, we have the "),a("code",[e._v("READY")]),e._v(" column in which we should read the value in the following way, "),a("code",[e._v("CURRENT STATE/DESIRED STATE")]),e._v(". Next up is the "),a("code",[e._v("UP_TO_DATE")]),e._v(" column which shows the number of replicas that were updated to match the desired state.\nLastly, we have the "),a("code",[e._v("AVAILABLE")]),e._v(" column that shows how many replicas we have available to do work.")]),e._v(" "),a("h3",{attrs:{id:"let-s-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#let-s-scale","aria-hidden":"true"}},[e._v("#")]),e._v(" Let's scale")]),e._v(" "),a("p",[e._v("Now, let's do some scaling. For that we will use the "),a("code",[e._v("scale")]),e._v(" command like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl scale deployments/kubernetes-first-app --replicas=4 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/jvvpqmon3r2ttqt5tc06.png",alt:""}})]),e._v(" "),a("p",[e._v("as we can see above the number of replicas was increased to "),a("code",[e._v("4")]),e._v(" and kubernetes is thereby ready to load balance any incoming requests.")]),e._v(" "),a("p",[e._v("Let's have a look at our Pods next:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/upzhxkfxlmbt23nr52z3.png",alt:""}})]),e._v(" "),a("p",[e._v("When we asked for "),a("code",[e._v("4")]),e._v(" replicas we got "),a("code",[e._v("4")]),e._v(" Pods.")]),e._v(" "),a("p",[e._v("We can see that this scaling operation took place by using the "),a("code",[e._v("describe")]),e._v(" command, like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe deployments/kubernetes-first-app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4q17yyfnkf7ahtfbzxn9.png",alt:""}})]),e._v(" "),a("p",[e._v("In the above image, we are given quite a lot of information on our "),a("code",[e._v("Replicas")]),e._v(" for example, but there is some other information in there that we will explain later on.")]),e._v(" "),a("h3",{attrs:{id:"does-it-load-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#does-it-load-balance","aria-hidden":"true"}},[e._v("#")]),e._v(" Does it load balance?")]),e._v(" "),a("p",[e._v("The whole point with the scaling was so that we could balance the load on incoming requests. That means that not the same Pod would handle all the requests but that different Pods would be hit.\nWe can easily try this out, now that we have scaled our app to contain "),a("code",[e._v("4")]),e._v(" replicas of itself.")]),e._v(" "),a("p",[e._v("So far we used the "),a("code",[e._v("describe")]),e._v(" command to describe the deployment but we can use it to describe the IP and port of. Once we have the IP and port we can then hit it with different HTTP requests.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl describe services/kubernetes-first-app\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ulqxs3mgl0pbjxozvtxo.png",alt:""}})]),e._v(" "),a("p",[e._v("Especially look at the "),a("code",[e._v("NodePort")]),e._v(" and the "),a("code",[e._v("Endpoints")]),e._v(". "),a("code",[e._v("NodePort")]),e._v(" is the port value that we want to hit with an HTTP request.")]),e._v(" "),a("p",[e._v("Now we will actually invoke the cURL command and ensure that it hits a different port each time and thereby prove our load balancing is working. Let's do the following:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("NODE_PORT=30450\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Next up the cURL call:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl $(minikube ip):$NODE_PORT\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/nl053zu36v7kjnhg2ou0.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see above we are doing the call 4 times. Judging by the output and the name of the instance we see that we are hitting a different Pod for each request. Thereby we see that the load balancing is working.")]),e._v(" "),a("h3",{attrs:{id:"scaling-down"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scaling-down","aria-hidden":"true"}},[e._v("#")]),e._v(" Scaling down")]),e._v(" "),a("p",[e._v("So far we have scaled up. We managed to go from one Pod to 4 Pods thanks to the "),a("code",[e._v("scale")]),e._v(" command. We can use the same command to "),a("em",[e._v("scale down")]),e._v(", like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl scale deployments/kubernetes-first-app --replicas=2 \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/vjg7bi5l1jr2c5uznmf3.png",alt:""}})]),e._v(" "),a("p",[e._v("Now if we are really fast adding the next command we can see how the Pods are being removed as Kubernetes is trying to adjust to "),a("em",[e._v("desired state")]),e._v(".")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/z2u4j326zqfv71d3dehx.png",alt:""}})]),e._v(" "),a("p",[e._v("2 out of 4 Pods are saying "),a("code",[e._v("Terminating")]),e._v(" as only 2 Pods are needed to maintain the new "),a("em",[e._v("desired state")]),e._v(".")]),e._v(" "),a("p",[e._v("Running our command again we see that only 2 Pods remain and thereby our new "),a("em",[e._v("desired state")]),e._v(" have been reached:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ezqizyogxg36qu4tux2r.png",alt:""}})]),e._v(" "),a("p",[e._v("We can also look at our deployment to see that our "),a("code",[e._v("scale")]),e._v(" instruction has been parsed correctly:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/cqdvsh1adbgbl82ntkfw.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"self-healing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#self-healing","aria-hidden":"true"}},[e._v("#")]),e._v(" Self-healing")]),e._v(" "),a("p",[a("em",[e._v("Self-healing")]),e._v(" is Kubernetes way of ensuring that the "),a("em",[e._v("desired state")]),e._v(" is maintained. Pods don't self heal cause Pods can die. What happens is that a new Pod appears in its place, thanks to Kubernetes.")]),e._v(" "),a("blockquote",[a("p",[e._v("So how do we test this?")])]),e._v(" "),a("p",[e._v("Glad you asked, we can delete a Pod and see what happens. So how do we do that? We use the "),a("code",[e._v("delete")]),e._v(" command. We need to know the name of our Pod though so we need to call "),a("code",[e._v("get pods")]),e._v(" for that. So let's start with that:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl get pods\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then lets pick one of our two Pods "),a("code",[e._v("kubernetes-first-app-669789f4f8-6glpx")]),e._v(" and assign it to a variable:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("POD_NAME=kubernetes-first-app-669789f4f8-6glpx\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now remove it:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl delete pods $POD_NAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Let's be quick about it and check our Pod status with "),a("code",[e._v("get pods")]),e._v(". It should say "),a("em",[e._v("Terminating")]),e._v(" like so:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/yh5unu9kijodhrvpnx91.png",alt:""}})]),e._v(" "),a("p",[e._v("Wait some time and then echo out our variable "),a("code",[e._v("$POD_NAME")]),e._v(" followed by "),a("code",[e._v("get pods")]),e._v(". That should give you a result similar to the below.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/qv87cbtz76bzkr2s0yfr.png",alt:""}})]),e._v(" "),a("p",[e._v("So what does the above image tell us? It tells us that the Pod we deleted is truly deleted but it also tells us that the "),a("em",[e._v("desired state")]),e._v(" of two replicas has been achieved by spinning up a new Pod. What we are seeing is * self-healing* at work.")]),e._v(" "),a("h2",{attrs:{id:"different-ways-to-scale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#different-ways-to-scale","aria-hidden":"true"}},[e._v("#")]),e._v(" Different ways to scale")]),e._v(" "),a("p",[e._v("Ok, we looked at a way to scale by explicitly saying how many replicas we want of a certain deployment. Sometimes, however, we might want a different way to scale namely "),a("em",[e._v("auto-scaling")]),e._v(". Auto-scaling is about you not having to set the exact number of replicas you want but rather rely on Kubernetes to create the number of replicas it thinks it needs. So how would Kubernetes know that? Well, it can look at more than one thing but a common metric is CPU utilization. So let's say you have a booking site and suddenly someone releases Bruce Springsteen tickets you are likely to want to rely on auto-scaling, cause the next day when the tickets are all sold out you want the number of Pods to go back to normal and you wouldn't want to do this manually.")]),e._v(" "),a("p",[e._v("Auto-scaling is a topic I plan to cover more in detail in a future article so if you are really curious how that is done I recommend you have a look "),a("a",{attrs:{href:"https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("Ok. So we did it. We managed to scale an app by creating replicas of it. It wasn't so hard to accomplish. We showed how we only needed to provide Kubernetes with a "),a("em",[e._v("desired state")]),e._v(" and it would do its utmost to preserve said state, also called * self-healing*. Furthermore, we mentioned that there was another way to scale, namely "),a("em",[e._v("auto-scaling")]),e._v(" but decided to leave that topic for another article. Hopefully, you are now more in awe of how amazing Kubernetes is and how easy it is to scale your app.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://softchris.github.io/pages/kubernetes-four.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("To part 4, auto scaling"),a("OutboundLink")],1)])])},[],!1,null,null,null);t.default=o.exports}}]);