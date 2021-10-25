(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n(26),a=n.n(i),s=(n(32),n(33),n(9)),r=n(2),o=n(0);var l=function(){return Object(o.jsxs)("header",{children:[Object(o.jsx)(s.b,{to:"/",children:Object(o.jsx)("h1",{children:"RestCountries"})}),Object(o.jsx)(s.b,{to:"/usr/info",children:Object(o.jsx)("p",{className:"info",children:"\u24d8"})})]})};var d=function(){return Object(o.jsx)("footer",{children:"\xa9 Valtteri Haarahiltunen 2021"})};var h=function(){return Object(o.jsx)("section",{children:Object(o.jsxs)("div",{className:"my-info",children:[Object(o.jsxs)("p",{children:["This application uses the ",Object(o.jsx)("a",{href:"https://restcountries.com",target:"_blank",rel:"noreferrer",children:"restcountries.com"})," API."]}),Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Notice:"})," As of September 2021, restcountries has rolled out a new version of their API. This application uses the older version until I can get all the necessary features (along with some new ones) working with the new API."]}),Object(o.jsxs)("p",{children:["In March of 2021, I was enrolled in a full stack web development course, and applying for web developer intern positions. One of the companies I applied to wanted me to complete a test where I was to build an app with React, using the aforementioned API. Alas, back then I was not skilled enough to complete the assignment, even though I found instructional videos by people who had done a ",Object(o.jsx)("a",{href:"https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",target:"_blank",rel:"noreferrer",children:"challenge"})," using the same API by Frontend Mentor \u2013 the requested features were just different enough where I could not grasp how to solve certain issues I faced. I ended up sending the company an e-mail to let them know I was not able to complete the task."]}),Object(o.jsx)("p",{children:"In a matter of months, though, still during the training period of the course, I was able to build the application with all the requested features, and then some, after having learned to use React a whole lot better."}),Object(o.jsxs)("p",{children:["This was not the end of the story, however. You see, in the course for which the internship was a part of, we learned to use React with class components. During my internship, which I did at a different company, I learned that React developers are in the process of overhauling the entire React documentation in favor of functional components. So, after the internship was over, I re-wrote the code in functional components. This is the final result of my hard work and dedication. Even though this app is rather simple in the grand scheme of things in the web developer world, it has definitely been useful, not only in learning web development and especially developing web applications with React, but in learning the flags of countries \u2013 a skill that is very useful when playing ",Object(o.jsx)("a",{href:"https://www.geoguessr.com",target:"_blank",rel:"noreferrer",children:"Geoguessr"}),"!"]})]})})},j=n(8),u=n(12),b=n.n(u),p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"loading",children:Object(o.jsx)("div",{className:"loading-spinner"})})})},f=function(){var e,t=Object(c.useState)({name:"",flag:"",capital:"",languages:[],population:"",callingCodes:[],currencies:[],topLevelDomain:[],borderingCountries:[],isIndependent:""}),n=Object(j.a)(t,2),i=n[0],a=n[1],s=Object(r.f)();Object(c.useEffect)((function(){!function(){var e="https://restcountries.com/v2/alpha/".concat(s.alpha3Code);console.log(e),b.a.get(e).then((function(e){a({name:e.data.name,flag:e.data.flag,capital:e.data.capital,languages:e.data.languages,population:e.data.population,callingCodes:e.data.callingCodes,currencies:e.data.currencies,topLevelDomain:e.data.topLevelDomain,borderingCountries:e.data.borders,isIndependent:e.data.independent})})).catch((function(e){return console.log(e)}))}()}),[s]);var l=i.languages.map((function(e){return Object(o.jsx)("div",{children:e.name},e.nativeName)}));e=i.currencies?i.currencies.map((function(e){return Object(o.jsx)("div",{children:e.name},e.name)})):Object(o.jsx)("div",{children:"This country has no currency"});var d=i.callingCodes.map((function(e){return Object(o.jsxs)("div",{children:["+",e]},e)})),h=i.topLevelDomain.map((function(e){return Object(o.jsx)("div",{children:e},e)}));return Object(o.jsx)("main",{children:i.flag?Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("section",{className:"one-country-page",children:[Object(o.jsx)("h1",{children:i.name}),Object(o.jsx)("img",{className:"large-flag",src:i.flag,alt:"The flag of ".concat(i.name)}),Object(o.jsxs)("div",{className:"one-country-info",children:[Object(o.jsxs)("div",{className:"one-country-info-divide",children:[Object(o.jsxs)("div",{className:"one-country-info-snippet single-info",children:[Object(o.jsx)("h3",{children:"Capital city:"})," ",Object(o.jsx)("div",{children:i.capital})]}),Object(o.jsxs)("div",{className:"one-country-info-snippet single-info",children:[Object(o.jsx)("h3",{children:"Population:"})," ",Object(o.jsx)("div",{children:i.population.toLocaleString()})]})]}),Object(o.jsxs)("div",{className:"one-country-info-divide",children:[Object(o.jsxs)("div",{className:"one-country-info-snippet multi-info",children:[Object(o.jsx)("h3",{children:"Languages:"}),Object(o.jsx)("div",{children:l})]}),Object(o.jsxs)("div",{className:"one-country-info-snippet multi-info",children:[Object(o.jsx)("h3",{children:"Currencies:"}),Object(o.jsx)("div",{children:e})]}),Object(o.jsxs)("div",{className:"one-country-info-snippet multi-info",children:[Object(o.jsx)("h3",{children:"Calling codes:"}),Object(o.jsx)("div",{children:d})]}),Object(o.jsxs)("div",{className:"one-country-info-snippet multi-info",children:[Object(o.jsx)("h3",{children:"Domains:"}),Object(o.jsx)("div",{children:h})]})]})]})]})}):Object(o.jsx)("div",{className:"center",children:Object(o.jsx)(p,{})})})},m=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(j.a)(a,2),l=r[0],d=r[1],h=Object(c.useState)("name"),u=Object(j.a)(h,2),p=u[0],f=u[1],m=Object(c.useState)(""),O=Object(j.a)(m,2),g=O[0],x=O[1],v=Object(c.useState)(""),w=Object(j.a)(v,2),y=w[0],N=w[1],I=Object(c.useState)(!1),C=Object(j.a)(I,2),k=C[0],S=C[1];Object(c.useEffect)((function(){b.a.get("https://restcountries.com/v2/all").then((function(e){i(e.data),console.log(e.data),d(e.data.map((function(e){return e.subregion}))),S(!0)})).catch((function(e){console.log(e)}))}),[]);var L=Array.from(new Set(l));L.filter(Boolean);var A=L.map((function(e){return Object(o.jsx)("option",{children:e},e)})),P=n.filter((function(e){return e.name.toLowerCase().includes(g.toLowerCase())&&e.subregion.toLowerCase().includes(y.toLowerCase())}));"name"!==p&&"region"!==p||P.sort((function(e,t){return e[p].localeCompare(t[p])})),"population"===p&&P.sort((function(e,t){return e[p]-t[p]})),"population-higher"===p&&P.sort((function(e,t){return t.population-e.population}));var R=P.map((function(e){var t=e.population.toLocaleString();return Object(o.jsxs)("div",{className:"country-card",children:[Object(o.jsx)("picture",{children:Object(o.jsx)("img",{src:e.flag,alt:"The flag of ".concat(e.name)})}),Object(o.jsxs)("div",{className:"country-info-wrapper",children:[Object(o.jsxs)("div",{className:"country-info",children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsx)("h3",{children:e.region}),Object(o.jsx)("h3",{children:t})]}),Object(o.jsx)("div",{className:"learn-more-wrapper",children:Object(o.jsx)(s.b,{to:e.alpha3Code,children:Object(o.jsx)("div",{className:"learn-more",children:"Learn More"})})})]})]},e.alpha3Code)}));return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"country-filters",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("select",{name:"sortOrder",id:"sortOrder",className:"country-filter",value:p,onChange:function(e){return function(e){return f(e.target.value)}(e)},children:[Object(o.jsx)("option",{value:"name",children:"Name"}),Object(o.jsx)("option",{value:"population",children:"Population (lowest first)"}),Object(o.jsx)("option",{value:"population-higher",children:"Population (highest first)"}),Object(o.jsx)("option",{value:"region",children:"Region"})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("select",{name:"subr",id:"subr",className:"country-filter",value:y,onChange:function(e){return function(e){return N(e.target.value)}(e)},children:[Object(o.jsx)("option",{value:"",children:"Show all subregions"}),A]})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{htmlFor:"filter",className:"hide",children:"Filter by name"}),Object(o.jsx)("input",{id:"filter",className:"country-filter",value:g,onChange:function(e){return function(e){return x(e.target.value)}(e)},placeholder:"filter by name"})]})]}),Object(o.jsx)("section",{className:"main-page-listings",children:Object(o.jsx)("div",{className:"all-countries",children:k?Object(o.jsx)(o.Fragment,{children:R}):Object(o.jsx)("div",{className:"center"})})})]})})};a.a.render(Object(o.jsxs)(s.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{exact:!0,path:"/",children:Object(o.jsx)(m,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/:alpha3Code",children:Object(o.jsx)(f,{})}),Object(o.jsx)(r.a,{exact:!0,path:"/usr/info",children:Object(o.jsx)(h,{})})]}),Object(o.jsx)(d,{})]}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.6edf1f04.chunk.js.map