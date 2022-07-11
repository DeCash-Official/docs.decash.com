"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[8167],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1769:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return k}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=["components"],i={},s="AssetInfo",p={unversionedId:"api/algorand/asset-info",id:"api/algorand/asset-info",title:"AssetInfo",description:"Returns information about every supported token (or about the queried assetId token).",source:"@site/docs/api/algorand/asset-info.mdx",sourceDirName:"api/algorand",slug:"/api/algorand/asset-info",permalink:"/docs/api/algorand/asset-info",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/api/algorand/asset-info.mdx",tags:[],version:"current",frontMatter:{},sidebar:"api",previous:{title:"Fees",permalink:"/docs/api/fees"},next:{title:"CloseDelegatedWallet",permalink:"/docs/api/algorand/close-delegated-wallet"}},d=[{value:"Request Parameters",id:"request-parameters",children:[],level:2},{value:"Responses",id:"responses",children:[{value:"Regular response",id:"regular-response",children:[],level:3},{value:"Validation errors",id:"validation-errors",children:[],level:3}],level:2},{value:"Example Usage",id:"example-usage",children:[],level:2},{value:"Example Success Response",id:"example-success-response",children:[],level:2}],u=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},c=u("Tabs"),m=u("TabItem"),f={toc:d};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"assetinfo"},"AssetInfo"),(0,o.kt)("p",null,"Returns information about every supported token (or about the queried ",(0,o.kt)("inlineCode",{parentName:"p"},"assetId")," token)."),(0,o.kt)("h2",{id:"request-parameters"},"Request Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"assetId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"OPTIONAL.")," The ID of the DeCash asset of which informations will be returned. If not set, informations about all DeCash tokens will be returned.")))),(0,o.kt)("h2",{id:"responses"},"Responses"),(0,o.kt)("h3",{id:"regular-response"},"Regular response"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"info")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Array<{assetId:string, asaId:number, baseFee:number}>")),(0,o.kt)("td",{parentName:"tr",align:null},"The array of asset properties. The field ",(0,o.kt)("inlineCode",{parentName:"td"},"assetId")," contains the DeCash Asset ID (e.g. ",(0,o.kt)("inlineCode",{parentName:"td"},"USDD"),"); the field ",(0,o.kt)("inlineCode",{parentName:"td"},"asaId")," contains the ID of the actual ",(0,o.kt)("a",{parentName:"td",href:"../../concepts/tokens#token-addresses"},"algorand asset")," (e.g. 51987792); the field ",(0,o.kt)("inlineCode",{parentName:"td"},"baseFee")," contains the amount that must be paid (of this specific asset) by the sender for each sender-receiver pair.")))),(0,o.kt)("h3",{id:"validation-errors"},"Validation errors"),(0,o.kt)("p",null,"Returned when the parameters are invalid."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Content"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Status code"),(0,o.kt)("td",{parentName:"tr",align:null},"400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"errorId")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"INVALID_PARAMS"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Validation errors in AssetInfo request."))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"errors")),(0,o.kt)("td",{parentName:"tr",align:null},"Array of strings containing additional informations.")))),(0,o.kt)("h2",{id:"example-usage"},"Example Usage"),(0,o.kt)(c,{mdxType:"Tabs"},(0,o.kt)(m,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const response = await fetch('https://delegator-dev01b.arringo.co/api-test/AssetInfo', {\n  method: 'POST',\n  body: JSON.stringify({\n    'assetId': 'USDD',\n  })\n});\nconst data = await response.json();\n")))),(0,o.kt)("h2",{id:"example-success-response"},"Example Success Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "info": [{"assetId": "USDD", "asaId": 51987792, "baseFee": 0.01}]\n}\n')))}k.isMDXComponent=!0}}]);