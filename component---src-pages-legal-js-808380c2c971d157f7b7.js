(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+qB+":function(e,t,a){"use strict";a("YbXK"),a("cFtU"),a("rzGZ"),a("Dq+y"),a("8npG"),a("q1tI");"undefined"!=typeof window&&(window.onload=function(){var e=document.getElementById("send-button"),t=function(e){var t=e.entries(),a=Array.from(t).reduce((function(e,t){var a=t[0],o=t[1];return e[a]=o,"email"===a&&(e._replyTo=o),e}),{});return JSON.stringify(a)},a=document.getElementById("contactForm");a&&a.addEventListener("submit",(function(a){var o=this;a.preventDefault(),e.value="Sending...",function(e){return fetch("https://formspree.io/mnbblykm",{method:"POST",body:t(e),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()}))}(new FormData(this)).then((function(t){e.value="Thank you!",o.reset()}))}))})},BAUC:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAzNTAuNSAzNi42IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNTAuNSAzNi42OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZEQTA4NTt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE1LjUsMzYuMkgwVjAuOGgxMy44YzIuNCwwLDQuNSwwLjMsNi4yLDAuOFMyMy4xLDMsMjMuOSw0YzEuNSwxLjgsMi40LDMuOSwyLjQsNi4yYzAsMi44LTAuOCw0LjgtMi43LDYuMgoJCWMtMC42LDAuNC0xLDAuNy0xLjMsMC44cy0wLjcsMC4zLTEuMywwLjZjMi4zLDAuNCwzLjksMS40LDUuMiwzYzEuMywxLjUsMiwzLjQsMiw1LjZjMCwyLjUtMC44LDQuNi0yLjUsNi41CgkJQzIzLjgsMzUuMSwyMC40LDM2LjIsMTUuNSwzNi4yeiBNNy45LDE1LjFoMy44YzIuMywwLDMuOC0wLjMsNC45LTAuN2MxLjEtMC40LDEuNS0xLjUsMS41LTMuMXMtMC40LTIuNy0xLjQtMy4xCgkJYy0xLTAuNi0yLjctMC43LTQuOS0wLjdIOEw3LjksMTUuMUw3LjksMTUuMXogTTcuOSwyOS40aDUuNWMyLjMsMCwzLjktMC4zLDUuMS0wLjhjMS4xLTAuNiwxLjctMS43LDEuNy0zLjJjMC0xLjctMC42LTIuNy0xLjgtMy4yCgkJYy0xLjMtMC42LTMuMS0wLjgtNS44LTAuOEg4TDcuOSwyOS40eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTM0LjksMC44aDcuOXYzNS40aC03LjlWMC44eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTU5LjgsNy45Yy0wLjcsMC42LTEuMSwxLjQtMS4xLDIuNXMwLjQsMS44LDEuNCwyLjRzMy4xLDEuMyw2LjUsMi4xYzMuNCwwLjgsNS45LDIuMSw3LjksMy43CgkJYzEuOCwxLjcsMi44LDQuMSwyLjgsNy4yYzAsMy4yLTEuMSw1LjgtMy41LDcuN2MtMi40LDItNS41LDMtOS40LDNjLTUuNiwwLTEwLjctMi4xLTE1LjItNi4ybDQuNi01LjhjMy44LDMuNCw3LjMsNS4xLDEwLjUsNS4xCgkJYzEuNCwwLDIuNS0wLjMsMy40LTFjMC44LTAuNiwxLjMtMS40LDEuMy0yLjVzLTAuNC0yLTEuMy0yLjVjLTAuOC0wLjYtMi43LTEuMy01LjItMS44Yy00LjEtMS03LjItMi4zLTktMy44CgkJYy0yLTEuNS0yLjgtNC4xLTIuOC03LjVzMS4zLTUuOSwzLjctNy43YzIuNC0xLjgsNS41LTIuNyw5LTIuN2MyLjQsMCw0LjgsMC40LDcsMS4zYzIuNCwwLjgsNC40LDIsNi4yLDMuNGwtMy45LDUuOAoJCWMtMy4xLTIuNC02LjItMy41LTkuNi0zLjVDNjEuNiw2LjksNjAuNiw3LjIsNTkuOCw3Ljl6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMTAwLjEsMjkuMmMzLjksMCw3LTEuNSw5LjYtNC42bDUuMSw1LjJjLTQuMSw0LjUtOC43LDYuOC0xNC4yLDYuOHMtMTAtMS43LTEzLjUtNS4yCgkJYy0zLjUtMy40LTUuMy03LjctNS4zLTEzLjFjMC01LjIsMS44LTkuNiw1LjMtMTMuMXM4LTUuMiwxMy4yLTUuMmM1LjgsMCwxMC43LDIuMywxNC42LDYuNmwtNC45LDUuNmMtMi41LTMuMS01LjYtNC42LTkuMy00LjYKCQljLTMsMC01LjUsMS03LjYsM1M5MCwxNS4xLDkwLDE4LjVjMCwzLjQsMSw1LjksMyw3LjlDOTQuOSwyOC4yLDk3LjMsMjkuMiwxMDAuMSwyOS4yeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE0NS44LDM2LjJsLTMuMi03LjZoLTE0LjhsLTMuMiw3LjZoLTguNGwxNS4zLTM1LjRoNy42bDE1LjIsMzUuNEgxNDUuOHogTTEzNS4xLDExLjNsLTQuNSwxMC4zaDguOQoJCUwxMzUuMSwxMS4zeiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3MS4xLDM2LjJoLTcuOVYyMi4zTDE1MC44LDAuOGg4LjZMMTY3LDE0bDcuNi0xMy4yaDguNkwxNzEsMjIuMkwxNzEuMSwzNi4yTDE3MS4xLDM2LjJ6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjI0LjksNGMyLjUsMi4xLDMuNyw1LjMsMy43LDkuN3MtMS4zLDcuNi0zLjgsOS42cy02LjUsMy4xLTExLjcsMy4xaC00LjZ2OS44aC03LjlWMC44aDEyLjUKCQlDMjE4LjQsMC44LDIyMi41LDEuOSwyMjQuOSw0eiBNMjE5LjEsMTcuOWMxLTEuMSwxLjQtMi43LDEuNC00LjZjMC0yLTAuNi0zLjUtMS44LTQuNHMtMy4xLTEuMy01LjgtMS4zaC00LjV2MTJoNS4zCgkJQzIxNi40LDE5LjUsMjE4LjEsMTguOSwyMTkuMSwxNy45eiIvPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTIzNC44LDM2LjJWMC44aDcuOXYyOC40aDE1djdIMjM0Ljh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjg4LjcsMzYuMmwtMy4yLTcuNmgtMTQuOGwtMy4yLDcuNmgtOC40bDE1LjMtMzUuNGg3LjZsMTUuMiwzNS40SDI4OC43eiBNMjc4LDExLjNsLTQuNSwxMC4zaDguOUwyNzgsMTEuM3oiCgkJLz4KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zMDEuMiwwLjhoNy45djM1LjRoLTcuOVYwLjh6Ii8+Cgk8cGF0aCBjbGFzcz0ic3QwIiBkPSJNMzQyLjYsMC44aDcuOXYzNS40aC03LjlMMzI1LjcsMTR2MjIuMmgtNy45VjAuOGg3LjVsMTcuMywyMi44VjAuOHoiLz4KPC9nPgo8L3N2Zz4K"},LbRr:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("Wbzz"),r=a("WXbE"),s=a.n(r);t.a=function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"small-12"},n.a.createElement(i.a,{to:"/"},n.a.createElement("img",{className:"logo_bp",src:a("BAUC"),alt:"biscay plain logo"}))),n.a.createElement("img",{src:s.a,className:"topo_img",alt:"topo"}))}},"W/9C":function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("Wbzz");a("nEz2");t.a=function(){return n.a.createElement("footer",null,n.a.createElement("div",{className:"row align-left mtxl mbl"},n.a.createElement("div",{className:"small-11 column"},n.a.createElement(i.a,{to:"/"},n.a.createElement("img",{src:a("BAUC"),alt:"biscay plain logo"}))),n.a.createElement("div",{className:"small-11 column ptm"},n.a.createElement("h2",null,"Monthly picks for people interested in creativity"))),n.a.createElement("div",{className:"row align-center mbl"},n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(i.a,{className:"menu__item",to:"/contact/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Get in touch")))),n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(i.a,{className:"menu__item",to:"/contact/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Suggest your article")))),n.a.createElement("div",{className:"column small-3"},n.a.createElement("small",null,n.a.createElement(i.a,{className:"menu__item",to:"/legal/"},n.a.createElement("span",{className:"menu__item-name text-align-center"},"Privacy policy"))))))}},WXbE:function(e,t,a){e.exports=a.p+"static/animated_topography-66297f627ef2ede75af6e087d63d2824.svg"},Wbzz:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("+ZDr"),r=a.n(i);a.d(t,"a",(function(){return r.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},gBnD:function(e,t,a){"use strict";a.r(t);var o=a("q1tI"),n=a.n(o),i=(a("Wbzz"),a("FWHX")),r=a.n(i),s=a("LbRr"),l=a("W/9C");t.default=function(){return n.a.createElement(r.a,null,n.a.createElement("div",{className:"Container"},n.a.createElement(s.a,null),n.a.createElement("div",{className:"row align-center padding10_bottom",id:"content"},n.a.createElement("div",{className:"small-11 medium-8"},n.a.createElement("h1",null,"Data Privacy"),n.a.createElement("h4",null,"Effective: March 7, 2020"),n.a.createElement("h4",null,"Last update: April 25, 2020"),n.a.createElement("p",{className:"padding10_top"},"biscaypla.in takes the security of its systems and the protection of clients information seriously. biscaypla.in (“we”, “us” or “biscaypla.in”) is registered to collect and process personal data under the Commission Nationale de l’Informatique et des Libertés (CNIL, France). biscaypla.in is the data controller of personal information collected by us. We respect and safeguard the privacy of the clients we are contractually working with, the users of convy.io (“website”), biscaypla.in App and readers of our blog which include convy.io/read."),n.a.createElement("p",null,"This Privacy Policy outlines how we will collect and use your personal information (such as your name, your email address or other contact details and any financial payment information), how you can limit our use of this data and how we will safeguard your data. Please read this Privacy Policy carefully which should be read together with our website Terms and conditions."),n.a.createElement("h3",null,"1. What information do we gather?"),n.a.createElement("p",null,"1.1 We gather information that relates to, and can identify you (e.g. your name and address) and information that does not identify you (e.g. a visitor’s behaviour patterns when they visit our website)."),n.a.createElement("p",null,"We collect information that does not identify you to in order to evaluate our site performance/usability and ensure that our site and services run properly."),n.a.createElement("p",null,"We might also collect IP addresses through the placement of cookies which means your numerical address is automatically collected when you access the website and is placed in our Internet access logs."),n.a.createElement("p",null,"Personal Data collected for the following purposes and using the following services: Analytics (Google Analytics and Clicky - Personal Data: Cookies; Usage Data); Managing contacts and sending messages (Mailchimp - Personal Data: email address; first name); RSS feed management (FeedPress - Personal Data: Usage Data)"),n.a.createElement("h3",null,"2. How do we gather Information"),n.a.createElement("h4",null,"2.1 Information is gathered in 2 ways:"),n.a.createElement("p",null,"(1) indirectly (for example, through our website’s technology or use of an App); and"),n.a.createElement("p",null,"(2) directly (for example, when you provide information on various pages of the website or when you return any completed form)."),n.a.createElement("p",null,"2.2 We collect information directly from you when you sign up to our services or through the use of cookies. We also collect information when you voluntarily submit it to us."),n.a.createElement("p",null,"2.3 When we collect your information in this way, we will notify you as to how this information will be used and where it will be processed. We will also provide you with the opportunity to indicate your preferences as to the use of your information."),n.a.createElement("p",null,"2.4 The analytics information is collected and stored in our servers. This information is gathered internally with the consultants in charge of the optimization. No information is shared with external third parties."),n.a.createElement("p",null,"2.5 Users are responsible for any third-party Personal Data obtained, published or shared through this Website and confirm that they have the third party's consent to provide the Data to the Owner."),n.a.createElement("h3",null,"3. Cookies and how we use them"),n.a.createElement("p",null,"3.1 A cookie is a small piece of information sent by a web server to the web browser, which enables the web server to collect information from the browser. Find out more about the use of cookies on http://www.cookiecentral.com."),n.a.createElement("p",null,"3.2 We use the following types of cookie:"),n.a.createElement("p",null,"(1a) Personal Analytics cookies that anonymously remember your computer or mobile device when you visit our website. They keep track of browsing patterns and build up a profile of how our readers use the website. We might use that information to target advertisements to you on our and other websites."),n.a.createElement("p",null,"(1b) Users Analytics cookies. biscaypla.in uses cookies to run tests and analyze the customer’s website visitor data. The cookies keep track of the variation a visitor has viewed and serve the same variation to the visitor consistently, track goals completed by a visitor, and determine whether a user is part of a test."),n.a.createElement("p",null,"(2) Service cookies that help us to make our website work as efficiently as possible; remember your registration and login details; remember your settings preferences; and meter the number of pages you view for the purpose of administering subscriptions to Magazines and website."),n.a.createElement("p",null,"(3) Third party advertising and analytics cookies, which are placed by or on behalf of independent advertisers who are advertising on our site. These cookies may be placed within the advertisement and elsewhere on our site. They are anonymous – they cannot identify individuals. They are used for statistical analysis by allowing the advertiser to count how many people have seen their advertisement or have seen it more than once. They might also allow the advertiser to tailor advertising to you when you visit other websites."),n.a.createElement("p",null,"3.3 We have no access to third party cookies and third party organisations have no access to ours. Other than allowing the third party cookies to be served we have no part to play in the use of these cookies although we may obtain statistical information from them about advertising on our site. The third party organisations that place cookies have their own strict privacy policies."),n.a.createElement("p",null,"3.4 Most browsers allow you to turn off cookies (see below in section 6). However, switching off cookies may restrict your use of the website and/or delay or affect the way in which the website operates."),n.a.createElement("h3",null,"4. How do you decide how you want to hear from us?"),n.a.createElement("p",null,"4.1 We always explain why and how we might contact you at the point you give your information to us. We also provide the means for you to grant or withhold your permission for us to contact you. We do this by using opt out or opt-in tick boxes. If the boxes aren’t there, it’s because we will not use your information for any other purpose than that for which you give it (e.g. to administer a subscription)."),n.a.createElement("p",null,"4.2 You may modify your preferences or get further information by:"),n.a.createElement("p",null,"– email to: hello@convy.io"),n.a.createElement("p",null,"and your wishes will be honoured."),n.a.createElement("h3",null,"5. How we use your information"),n.a.createElement("p",null,"Any personal information gathered by or supplied to us via the website will be used in accordance with this Privacy Policy, and in accordance with your wishes as indicated to us and in accordance with the Act."),n.a.createElement("h4",null,"5.1 Methods of processing"),n.a.createElement("p",null,"The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data."),n.a.createElement("p",null,"The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Website (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time."),n.a.createElement("h4",null,"5.2 Legal basis of processing"),n.a.createElement("p",null,"The Owner may process Personal Data relating to Users if one of the following applies:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law;"),n.a.createElement("li",null,"provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;"),n.a.createElement("li",null,"processing is necessary for compliance with a legal obligation to which the Owner is subject;"),n.a.createElement("li",null,"processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;"),n.a.createElement("li",null,"processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.")),n.a.createElement("p",null,"In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract."),n.a.createElement("h4",null,"5.3 Place"),n.a.createElement("p",null,"The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located."),n.a.createElement("p",null,"Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data."),n.a.createElement("p",null,"Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data."),n.a.createElement("p",null,"If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section."),n.a.createElement("h4",null,"5.4 Retention time"),n.a.createElement("p",null,"Personal Data shall be processed and stored for as long as required by the purpose they have been collected for."),n.a.createElement("p",null,"Therefore:"),n.a.createElement("p",null,"Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed."),n.a.createElement("p",null,"Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner."),n.a.createElement("p",null,"The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority."),n.a.createElement("p",null,"Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period."),n.a.createElement("h4",null,"5.5 We might use your personnal information to:"),n.a.createElement("p",null,"(1) remember you when you visit our website and track your browsing patterns by using cookies. You can prevent this; section 6 deals with this in more detail;"),n.a.createElement("p",null,"(2) place your anonymised information into audience segments to identify your interests so that we might serve you with offers that will interest you;"),n.a.createElement("p",null,"(3) ensure any products or services you receive are correctly administered;"),n.a.createElement("p",null,"(4) contact you by email, mail, telephone or sms text message to let you know about any of our products, services or promotions (which, in some cases may be provided by third parties) but only according to the permissions you give us;"),n.a.createElement("p",null,"(5) ensure materials on the website or in apps are presented in the most effective manner for you and your computer or mobile device;"),n.a.createElement("p",null,"(6) collate and log numeric internet addresses to improve the website and to monitor website usage;"),n.a.createElement("p",null,"(7) assess and understand customer feedback and identify usage hotspots."),n.a.createElement("p",null,"(8) The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Managing contacts and sending messages, Analytics and RSS feed management."),n.a.createElement("p",null,"(9) Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document."),n.a.createElement("h4",null,"5.6 We might use your business information to:"),n.a.createElement("p",null,"(1) run optimization test;"),n.a.createElement("p",null,"(2) make comparison table based on the analytics provided for a specific funnel or part of a website/app;"),n.a.createElement("p",null,"(3) run any consulting activity according to the permissions you give us;"),n.a.createElement("p",null,"5.3 If you have subscribed to any of our services, we will use the information you provide to keep you updated on those services unless you have told us otherwise."),n.a.createElement("h3",null,"6. Managing Cookie Preferences"),n.a.createElement("p",null,"6.1 Most browsers allow you to turn off cookies. To do this look at the “help” menu on your browser. Switching off cookies may restrict your use of the website and/or delay or affect the way in which it operates."),n.a.createElement("p",null,"6.2 If you would prefer to just restrict third party cookies, visit www.youronlinechoices.com or click on the AdChoices logo that you will see in the corner of advertisements that carry behavioural targeting cookies."),n.a.createElement("h3",null,"7. Security"),n.a.createElement("p",null,"7.1 The password you provide when registering with the website is encrypted to ensure protection against unauthorised access of your personal information."),n.a.createElement("p",null,"7.2 We invest in high-quality security and do our utmost to protect user privacy. No data transmission over the Internet can be entirely secure, and therefore we cannot guarantee the security of your personal and business information and/or use of the website. Any information that you send is at your own risk and may be read by others. However once we have received your personal and business information we use strict procedures both ourselves and with our suppliers to protect the security of your personal and business information. "),n.a.createElement("p",null,"7.3 We (biscaypla.in) commit to perform research only within the scope set out and contractually agreed with our clients. biscaypla.in makes every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction of data during testing"),n.a.createElement("p",null,"7.4 We save data in a server provided by OVH and located in Paris, France. Server details are : FS-MAX, Intel  2x Xeon E5-2620v3, 12c/24t - 2.4GHz /3.2GHz, 64GB DDR4 ECC 1866 MHz - Up to 36 disks, 500 Mbps bandwidth vRack: 40 Gbps. Not a big performance beast but a safe device in a safe environment. We backup the information in OVH Data Center spread across different locations. We do not store any customer data locally. The variation configurations required to run the tests for visitors can also be self-hosted on the customer’s servers for added security control. Physical access to the OVH data centers is restricted by OVH. No physical access is allowed to any of the employees of biscaypla.in."),n.a.createElement("p",null,"7.5 Master & Optimization codes are stored in in OVH Data Center spread across different locations.  biscaypla.in employs strict role-based security / passwords for access to the code. If your servers are used to run tests, commits to production code are strictly reviewed and approval is restricted to client validation, after passing Unit Testing and QA in Test and Staging. When running tests using clients structure, commits to production code are under client policy and process."),n.a.createElement("h3",null,"8. Disclosing your information"),n.a.createElement("p",null,"8.1 We may disclose your personal information if required to do i) in order to fulfil any request you have made through us , ii) by law or iii) in good-faith believing such action is necessary to comply with the law or contract e.g. for a bank or card company to process your payment for purchase of goods."),n.a.createElement("p",null,"8.2 We will not sell or otherwise share your personal information with third parties without your consent except in the case of our data service providers (who are used for example to manage your subscription)."),n.a.createElement("p",null," 8.3 The consultants working for biscaypla.in agree and sign a confidentiality agreement (“Confidential Information Agreement”). The consultants or any individual involved in a project in biscaypla.in shall not use, disclose, publish, or distribute any such Confidential Information or the vulnerability details, including without limitation any information regarding the optimization process / results / business information for your company."),n.a.createElement("h3",null,"9. Accessing and Updating your personal information"),n.a.createElement("p",null,"We want to ensure that we provide you with the best possible service. Please therefore always keep us updated of any changes to your personal information, for example, if your email address changes."),n.a.createElement("h4",null,"9.1 How do I change my personal details?"),n.a.createElement("p",null,"You can update your details and marketing preferences by accessing your account pages on the website by emailing contact@mekacreative.io"),n.a.createElement("h4",null,"9.2 What information do you hold on me?"),n.a.createElement("p",null,"You have the right to access the personal information we hold about you. To obtain a copy of the personal information we hold about you, please send an email to hello@convy.io"),n.a.createElement("h4",null,"9.3 What information do you hold on my company?"),n.a.createElement("p",null,"You have the right to access the business information we hold about your company (analytics, testing/optimization details & results). To obtain a copy of the business information we hold about your company, please send an email to hello@convy.io"),n.a.createElement("p",null,"There will be an administrative charge of €10 for providing a copy of this information."),n.a.createElement("h3",null,"10. What does providing us with business & personal information mean?"),n.a.createElement("p",null,"By giving us personal information about you and business information about your company, you agree that your personal information and business information can be used as set out in this Privacy Policy. If we change the Privacy Policy, we will post the changes on this page. Please check the website regularly for any changes to this Privacy Policy."),n.a.createElement("h3",null,"11. information on the processing of Personal Data with Associates Program / third parties"),n.a.createElement("p",null,"biscaypla.in uses Google Analytics Solutions. Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Website, to prepare reports on its activities and share them with other Google services. Google may use the Data collected to contextualize and personalize the ads of its own advertising network. Personal Data collected: Cookies; Usage Data. Please refer to https://www.google.com/intl/en/policies/privacy/ and https://support.google.com/360suite/optimize#topic=6314903 for more details about Google data privacy. Place of processing: United States"),n.a.createElement("p",null,"biscaypla.in uses Mailchimp (The Rocket Science Group LLC) for contacts and group email management. These services may also collect data concerning the date and time when the message was viewed by the User, as well as when the User interacted with it, such as by clicking on links included in the message. Personal Data collected: email address; first name. Place of processing: United States. Privacy Shield participant."),n.a.createElement("p",null,"biscaypla.in uses RSS feed management. FeedPress (Beta Et Compagnie Sarl). This type of service allows this Website to manage RSS feeds and the distribution of their content. Depending on the characteristics of the service used, these services may be used to insert ads within the content and to gather statistics data from them. FeedPress is a service to manage RSS feeds provided by Beta Et Compagnie Sarl. It allows the collection of statistics on what content is consumed. Personal Data collected: Usage Data. Place of processing: France."),n.a.createElement("h3",null,"12. If you don’t feel we’re adhering to this Privacy Policy, what should you do?"),n.a.createElement("p",null,"If at any time you believe that we have not adhered to the terms of this Privacy Policy, please notify us by email to hello@convy.io. and we will make any efforts we can to determine and solve the problem promptly."),n.a.createElement("h3",null,"13. In particular, Users have the right to do the following:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data."),n.a.createElement("li",null,"Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below."),n.a.createElement("li",null,"Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing."),n.a.createElement("li",null,"Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected."),n.a.createElement("li",null,"Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it."),n.a.createElement("li",null,"Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner."),n.a.createElement("li",null,"Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof."),n.a.createElement("li",null,"Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.")),n.a.createElement("h3",null,"14. Additional information about Data collection and processing"),n.a.createElement("h4",null,"14.1 Legal action"),n.a.createElement("p",null,"The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Website or the related Services. The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities."),n.a.createElement("h4",null,"14.2 Additional information about User's Personal Data"),n.a.createElement("p",null,"In addition to the information contained in this privacy policy, this Website may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request."),"System logs and maintenance For operation and maintenance purposes, this Website and any third-party services may collect files that record interaction with this Website (System logs) use other Personal Data (such as the IP Address) for this purpose. Information not contained in this policy More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document. How “Do Not Track” requests are handled This Website does not support “Do Not Track” requests. To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies. Changes to this privacy policy The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Website and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.",n.a.createElement("h3",null,"15. Support"),n.a.createElement("p",null,"For any questions regarding these Terms Of Service, feel free to contact us by email to hello@convy.io."))),n.a.createElement(l.a,null)))}},lw3w:function(e,t,a){var o;e.exports=(o=a("rzlk"))&&o.default||o},nEz2:function(e,t,a){"use strict";var o=a("q1tI"),n=a.n(o),i=a("Wbzz");a("+qB+");t.a=function(){return n.a.createElement("form",{action:"https://formspree.io/mnbblykm",name:"contactForm",id:"contactForm",method:"post",className:" row topBefore padding5_top"},n.a.createElement("div",{className:"small-7 medium-4 columns textfield_submit"},n.a.createElement("input",{id:"email",className:"unsent",type:"email",name:"Email",placeholder:"Leave your e-mail...",required:!0})),n.a.createElement("div",{className:"small-5 medium-3 columns btn_submit"},n.a.createElement("input",{id:"send-button",className:"submitBtn",type:"submit",value:"Subscribe"})),n.a.createElement("div",{className:"small-12 columns no-spam"},n.a.createElement("small",null,"No spam, no fuss. Unsubscribe anytime. ",n.a.createElement(i.a,{to:"/legal/"},"Privacy policy"))))}},rzlk:function(e,t,a){"use strict";a.r(t);a("E5k/");var o=a("q1tI"),n=a.n(o),i=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-legal-js-808380c2c971d157f7b7.js.map