(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45],{7897:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Card",function(){return t(2652)}])},2652:function(e,n,t){"use strict";t.r(n);var r=t(797),a=t(5893),i=t(7294),l=t(2256),c=t(967),d=[{id:"Izdelek 1",value:"Opis izdelka 1",cena:4},{id:"Izdelek 2",value:"Opis izdelka 2",cena:2},{id:"Izdelek 3",value:"Opis izdelka 3",cena:4},{id:"Izdelek 4",value:"Opis izdelka 4",cena:12},{id:"Izdelek 5",value:"Opis izdelka 5",cena:6},{id:"Izdelek 6",value:"Opis izdelka 6",cena:3},{id:"Izdelek 7",value:"Opis izdelka 7",cena:6},{id:"Izdelek 8",value:"Opis izdelka 8",cena:3},{id:"Izdelek 9",value:"Opis izdelka 9",cena:3},{id:"Izdelek 10",value:"Opis izdelka 10",cena:3},{id:"Izdelek 11",value:"Opis izdelka 11",cena:3},{id:"Izdelek 12",value:"Opis izdelka 12",cena:3},{id:"Izdelek 13",value:"Opis izdelka 13",cena:3},{id:"Izdelek 14",value:"Opis izdelka 14",cena:3},{id:"Izdelek 15",value:"Opis izdelka 15",cena:3},{id:"Izdelek 16",value:"Opis izdelka 16",cena:3},{id:"Izdelek 17",value:"Opis izdelka 17",cena:3},{id:"Izdelek 18",value:"Opis izdelka 18",cena:3}];n.default=function(e){var n=e.childToParent,t=(0,i.useState)([]),s=t[0],o=t[1];return(0,i.useEffect)((function(){n(s)}),[n,s]),(0,a.jsx)("div",{style:{margin:10},children:(0,a.jsx)(l.Z.Group,{children:d.map((function(e){return(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(l.Z.Content,{children:[(0,a.jsx)(l.Z.Header,{children:e.id}),(0,a.jsx)(l.Z.Description,{children:e.value}),(0,a.jsxs)(l.Z.Meta,{children:[e.cena,"$"]}),(0,a.jsxs)("p",{className:"right floated",children:["Koli\u010dina: ",-1===s.findIndex((function(n){return n.product.id===e.id}))?0:s[s.findIndex((function(n){return n.product.id===e.id}))].st]})]}),(0,a.jsx)(l.Z.Content,{extra:!0,children:(0,a.jsxs)("div",{className:"ui two buttons",children:[(0,a.jsx)(c.Z,{primary:!0,color:"green",onClick:function(){return function(e){if(s.length>0){var n=s.findIndex((function(n){return n.product.id===e.id}));-1===n?o((0,r.Z)(s).concat([{product:e,st:1}])):(s[n].st=s[n].st+1,o((0,r.Z)(s)))}else o([{product:e,st:1}]);console.log("Added: ",s)}(e)},children:"Dodaj v ko\u0161arico"}),(0,a.jsx)(c.Z,{disabled:!s.some((function(n){return n.product===e})),color:"red",onClick:function(){return function(e){if(s.length>0){var n=s.findIndex((function(n){return n.product.id===e.id}));s[n].st=s[n].st-1,s[n].st<=0&&s.splice(n,1),o((0,r.Z)(s))}console.log("Removed: ",s)}(e)},children:"Odstrani"})]})})]},e.id)}))})})}},2256:function(e,n,t){"use strict";t.d(n,{Z:function(){return I}});var r=t(7462),a=t(5068),i=t(6010),l=t(7294),c=t(8459),d=t(8935),s=t(2519),o=t(2248),u=t(650),p=t(9591);function f(e){var n=e.children,t=e.className,a=e.content,u=e.textAlign,p=(0,i.Z)((0,c.X4)(u),"description",t),k=(0,d.Z)(f,e),m=(0,s.Z)(f,e);return l.createElement(m,(0,r.Z)({},k,{className:p}),o.kK(n)?a:n)}f.handledProps=["as","children","className","content","textAlign"],f.propTypes={};var k=f;function m(e){var n=e.children,t=e.className,a=e.content,u=e.textAlign,p=(0,i.Z)((0,c.X4)(u),"header",t),f=(0,d.Z)(m,e),k=(0,s.Z)(m,e);return l.createElement(k,(0,r.Z)({},f,{className:p}),o.kK(n)?a:n)}m.handledProps=["as","children","className","content","textAlign"],m.propTypes={};var h=m;function v(e){var n=e.children,t=e.className,a=e.content,u=e.textAlign,p=(0,i.Z)((0,c.X4)(u),"meta",t),f=(0,d.Z)(v,e),k=(0,s.Z)(v,e);return l.createElement(k,(0,r.Z)({},f,{className:p}),o.kK(n)?a:n)}v.handledProps=["as","children","className","content","textAlign"],v.propTypes={};var Z=v;function z(e){var n=e.children,t=e.className,a=e.content,u=e.description,f=e.extra,m=e.header,v=e.meta,x=e.textAlign,y=(0,i.Z)((0,c.lG)(f,"extra"),(0,c.X4)(x),"content",t),N=(0,d.Z)(z,e),g=(0,s.Z)(z,e);return o.kK(n)?o.kK(a)?l.createElement(g,(0,r.Z)({},N,{className:y}),(0,p.Go)(h,(function(e){return{content:e}}),m,{autoGenerateKey:!1}),(0,p.Go)(Z,(function(e){return{content:e}}),v,{autoGenerateKey:!1}),(0,p.Go)(k,(function(e){return{content:e}}),u,{autoGenerateKey:!1})):l.createElement(g,(0,r.Z)({},N,{className:y}),a):l.createElement(g,(0,r.Z)({},N,{className:y}),n)}z.handledProps=["as","children","className","content","description","extra","header","meta","textAlign"],z.propTypes={};var x=z,y=t(3871);function N(e){var n=e.centered,t=e.children,a=e.className,u=e.content,p=e.doubling,f=e.items,k=e.itemsPerRow,m=e.stackable,h=e.textAlign,v=(0,i.Z)("ui",(0,c.lG)(n,"centered"),(0,c.lG)(p,"doubling"),(0,c.lG)(m,"stackable"),(0,c.X4)(h),(0,c.H0)(k),"cards",a),Z=(0,d.Z)(N,e),z=(0,s.Z)(N,e);if(!o.kK(t))return l.createElement(z,(0,r.Z)({},Z,{className:v}),t);if(!o.kK(u))return l.createElement(z,(0,r.Z)({},Z,{className:v}),u);var x=(0,y.Z)(f,(function(e){var n,t=null!=(n=e.key)?n:[e.header,e.description].join("-");return l.createElement(I,(0,r.Z)({key:t},e))}));return l.createElement(z,(0,r.Z)({},Z,{className:v}),x)}N.handledProps=["as","centered","children","className","content","doubling","items","itemsPerRow","stackable","textAlign"],N.propTypes={};var g=N,I=function(e){function n(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).handleClick=function(e){var t=n.props.onClick;t&&t(e,n.props)},n}return(0,a.Z)(n,e),n.prototype.render=function(){var e=this.props,t=e.centered,a=e.children,p=e.className,f=e.color,k=e.content,m=e.description,h=e.extra,v=e.fluid,Z=e.header,z=e.href,y=e.image,N=e.link,g=e.meta,I=e.onClick,O=e.raised,E=(0,i.Z)("ui",f,(0,c.lG)(t,"centered"),(0,c.lG)(v,"fluid"),(0,c.lG)(N,"link"),(0,c.lG)(O,"raised"),"card",p),C=(0,d.Z)(n,this.props),b=(0,s.Z)(n,this.props,(function(){if(I)return"a"}));return o.kK(a)?o.kK(k)?l.createElement(b,(0,r.Z)({},C,{className:E,href:z,onClick:this.handleClick}),u.Z.create(y,{autoGenerateKey:!1,defaultProps:{ui:!1,wrapped:!0}}),(m||Z||g)&&l.createElement(x,{description:m,header:Z,meta:g}),h&&l.createElement(x,{extra:!0},h)):l.createElement(b,(0,r.Z)({},C,{className:E,href:z,onClick:this.handleClick}),k):l.createElement(b,(0,r.Z)({},C,{className:E,href:z,onClick:this.handleClick}),a)},n}(l.Component);I.handledProps=["as","centered","children","className","color","content","description","extra","fluid","header","href","image","link","meta","onClick","raised"],I.propTypes={},I.Content=x,I.Description=k,I.Group=g,I.Header=h,I.Meta=Z},797:function(e,n,t){"use strict";function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(n,{Z:function(){return a}})}},function(e){e.O(0,[774,967,888,179],(function(){return n=7897,e(e.s=n);var n}));var n=e.O();_N_E=n}]);