(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{273:function(e,t,s){"use strict";s.r(t);var a=s(1),o=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"status-codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#status-codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Status codes")]),e._v(" "),s("p",[e._v("Follow me on "),s("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),s("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),s("p",[e._v("HTTP Status codes are an important topic. They convey to a client what's going on. A status code can tell you many things such as:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("2xx")]),e._v(", everything is fine")]),e._v(" "),s("li",[s("code",[e._v("4xx")]),e._v(", there's something wrong with how the client calls the server")]),e._v(" "),s("li",[s("code",[e._v("5xx")]),e._v(", something went wrong on the server")])]),e._v(" "),s("p",[e._v("You should know what certain status codes mean, both as a developer of a server application and as a consumer of it. Building a server application you should also learn how to apply the correct status codes in the right situations.")]),e._v(" "),s("h2",{attrs:{id:"setting-a-status-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setting-a-status-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Setting a status code")]),e._v(" "),s("p",[e._v("Let's revisit this piece of code we used as part of constructing a response.")]),e._v(" "),s("div",{staticClass:"language-javascript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[e._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("writeHead")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v("'text/plain'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Above our first parameter is "),s("code",[e._v("200")]),e._v(". "),s("code",[e._v("200")]),e._v(" means a signal back to the client stating that everything was ok. Ok in the sense that it was able to find and returned the resource asked for.")]),e._v(" "),s("p",[e._v("For a complete specification of all the code available, have a look at this page "),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes",target:"_blank",rel:"noopener noreferrer"}},[e._v("Status codes"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"codes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#codes","aria-hidden":"true"}},[e._v("#")]),e._v(" Codes")]),e._v(" "),s("p",[e._v("There's no way you can remember all of the available status code but let's divide them up into categories:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("1xx")]),e._v(", Informational response. "),s("code",[e._v("1xx")]),e._v(" signals that the request was received and understood. You are most likely not going to see this code so often")]),e._v(" "),s("li",[s("code",[e._v("2xx")]),e._v(", Success. "),s("code",[e._v("2xx")]),e._v(" means everything is ok response. There are a few codes starting with "),s("code",[e._v("2xx")]),e._v(" that you will see often so let's talk about them.\n"),s("ul",[s("li",[s("code",[e._v("200")]),e._v(", when this code is given you expect certain things depending on what method was used to access the resource. If you are using the method GET, you expect a resource to be returned. If the method was POST you expect either a resource back or something indicating the result of the action.")]),e._v(" "),s("li",[s("code",[e._v("201")]),e._v(", the code "),s("code",[e._v("201")]),e._v(" clearly indicates that a new resource has been created")]),e._v(" "),s("li",[s("code",[e._v("204")]),e._v(", the code "),s("code",[e._v("204")]),e._v(" means the request was processes successfully but that you got no content back. If you get this code back and you don't expect it, you might either have misunderstood the backend API as a client or it might indicate that something is wrong")])])]),e._v(" "),s("li",[s("code",[e._v("3xx")]),e._v(",  Redirection. This group of codes indicates you should take additional actions to complete the request. It can indicate things like that a resource has been moved or it is not ready to be returned yet. This other resource gives me a status back that I can poll to check if my first resource is ready.\n"),s("ul",[s("li",[s("code",[e._v("301")]),e._v(", moved permanently. If you get this as a client, this is a clear indication that the resource is no longer there. You should give up any future attempts to access this resource.")]),e._v(" "),s("li",[s("code",[e._v("303")]),e._v("/ "),s("code",[e._v("307")]),e._v(". Both these codes signal the same thing namely that the resource can be found under a new URI. It also says this redirect is temporary. Some clients even automatically make a new request to this indicated URI. The codes replace "),s("code",[e._v("302")]),e._v(".")]),e._v(" "),s("li",[s("code",[e._v("308")]),e._v(", permanent redirect. The move of the resource is permanent. There should be a URI in the response indicating where the URI can be found instead.")])])]),e._v(" "),s("li",[s("code",[e._v("4xx")]),e._v(", client error. This status code generally indicates that the client did something wrong when accessing the resource. There are quite a few codes here that are important but some are more frequent than others.\n"),s("ul",[s("li",[s("code",[e._v("401")]),e._v(", unauthorized. The client has failed to present valid authentication credentials.")]),e._v(" "),s("li",[s("code",[e._v("403")]),e._v(", forbidden. This status code signals that the resource can't be accessed. The reason is either an authorization problem or something is wrong with the authentication.")]),e._v(" "),s("li",[s("code",[e._v("404")]),e._v(", not found. This status code means the resource isn't there.")]),e._v(" "),s("li",[s("code",[e._v("405")]),e._v(", method not allowed. This status code means the resource is there but the way you are trying to access it is wrong. It might be that the resource expects a PUT and you are accessing it via a GET.")])])]),e._v(" "),s("li",[s("code",[e._v("5xx")]),e._v(", Server errors. The server has encountered an error and is unable to fulfill the request.\n"),s("ul",[s("li",[s("code",[e._v("500")]),e._v(", internal server error. This is a generic error. This usually happens when the code breaks on the server, for example,  an exception is being raised.")]),e._v(" "),s("li",[s("code",[e._v("501")]),e._v(", not implemented. It's a work in progress. It indicates it will work in the future.")]),e._v(" "),s("li",[s("code",[e._v("502")]),e._v(", bad gateway. This means the server was acting as a proxy or gateway for another service and received an error upstream.")]),e._v(" "),s("li",[s("code",[e._v("503")]),e._v(", service unavailable. This usually means the server is overloaded or down for maintenance. It's a temporary state.")])])])]),e._v(" "),s("p",[e._v("This was quite a few codes. However, if you mean to build server applications and/or APIs you should know the difference between the codes and apply them where appropriate.")])])},[],!1,null,null,null);t.default=o.exports}}]);