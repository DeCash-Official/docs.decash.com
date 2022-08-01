"use strict";(self.webpackChunkdocs_decash_com=self.webpackChunkdocs_decash_com||[]).push([[7763],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(l,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5327:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.src,n=e.alt,r=e.width;return a.createElement("p",{style:{textAlign:"center",marginTop:20,marginBottom:20}},a.createElement("img",{alt:n,src:t,style:{width:r}}))}},118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return h},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(5327),s=["components"],l={sidebar_position:2},c="Merchandise store",d={unversionedId:"guides/merchant",id:"guides/merchant",title:"Merchandise store",description:"This page will guide you through the example of building the merchandise store using DeCash tokens.",source:"@site/docs/guides/merchant.mdx",sourceDirName:"guides",slug:"/guides/merchant",permalink:"/docs/guides/merchant",editUrl:"https://github.com/DeCash-Official/docs.decash.com/edit/main/docs/guides/merchant.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docs",previous:{title:"Signing transactions",permalink:"/docs/guides/signing-transactions"}},h=[{value:"The concept",id:"the-concept",children:[],level:2}],p={toc:h};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"merchandise-store"},"Merchandise store"),(0,o.kt)("p",null,'This page will guide you through the example of building the merchandise store using DeCash tokens.\nIn this article, we call a store which sells goods the "merchant", and a "customer" is one who makes a\npurchase in this store.'),(0,o.kt)("h2",{id:"the-concept"},"The concept"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/delegated-wallets"},"Delegated Wallets")," allow merchants to create multiple multi-purpose\nwallets, primarily to accept DeCash tokens and distinct users who make payments."),(0,o.kt)("p",null,"The following sequence of actions happen in order for customers to pay for their purchases in ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/tokens"},"DeCash tokens"),",\nrepresented by the following sequence diagram:"),(0,o.kt)(i.Z,{alt:"Customer-to-merchant payment diagram",src:"/img/merchant-customer-payment-sequence-diagram.png",mdxType:"CenteredImage"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The customer finally lands on the payment page, where they have to pay for their purchases in DeCash tokens."),(0,o.kt)("li",{parentName:"ol"},"The merchant generates a new ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/delegated-wallets"},"Delegated Wallet")," by invoking\n",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/create-delegated-wallet"},"CreateDelegatedWallet")," in ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/overview"},"DeCash API"),".\nThey receive an address like ",(0,o.kt)("inlineCode",{parentName:"li"},"6E63EKJYUPLL4SKM5FNX3PD7HSWZ26XPS7BXYLVWJAPDEK3VA7DERTFV4E"),", which is then\noptionally displayed to the customer.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"When deciding who is an owner of ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/create-delegated-wallet"},"CreateDelegatedWallet"),", note that it would\nbe the hot wallet you generate or store on your back end and later use to ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/signing-transactions"},"sign"),(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/many-to-one-transfer"},"ManyToOneTransfer")," transactions from it, thus being able to collect DeCash tokens\nfrom multiple Delegated Wallets."),(0,o.kt)("li",{parentName:"ul"},"If you don't want all Delegated Wallets to be associated with a single owner (which is visible in blockchain),\nyou can generate new owner wallets for each Delegated Wallet, and then use ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/close-delegated-wallet"},"CloseDelegatedWallet"),"\nto collect funds from each individual wallet, as ManyToOneTransfer works only for a single owner."))),(0,o.kt)("li",{parentName:"ol"},"The customer is then asked to make a payment to this address.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Effectively, the merchant invokes ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/transfer-tokens"},"TransferTokens"),"\nand asks the customer to sign the returned ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/transfer-tokens#regular-response"},"toSign"),"\ntransaction with their Algorand wallet. When signing the transaction, a transaction fee in DeCash tokens\nis displayed to the user."))),(0,o.kt)("li",{parentName:"ol"},"The customer signs the transaction. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/guides/signing-transactions"},"signing transactions"),"\nto learn more how they can do it for different wallets."),(0,o.kt)("li",{parentName:"ol"},"The signed transaction is sent back to DeCash API via the ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/submit-transaction"},"SubmitTransaction"),"\nendpoint."),(0,o.kt)("li",{parentName:"ol"},"Once the submitted transaction is mined in the blockchain (takes around 5 seconds), it is considered final\nand the merchant can release the goods to the customer. Merchants can check the transaction status using\n",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/transaction-status"},"TransactionStatus")," API endpoint."),(0,o.kt)("li",{parentName:"ol"},"When needed, the merchant collects DeCash tokens from many Delegated Wallets to a single wallet using\n",(0,o.kt)("a",{parentName:"li",href:"/docs/api/algorand/many-to-one-transfer"},"ManyToOneTransfer"),".")),(0,o.kt)("p",null,"Thus, every customer goes through the same procedure of making payments to different Delegated Wallets, whereas\nthe merchant can keep a mapping of which purchase corresponds to which delegated wallet."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The private keys from the wallet managing multiple Delegated Wallets should be stored on the merchant's side.\nIt will be used to collect tokens from Delegated Wallets by using, for example, ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/algorand/many-to-one-transfer"},"ManyToOneTransfer"),"."))))}m.isMDXComponent=!0}}]);