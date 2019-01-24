(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var r=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),o=n("./node_modules/react/index.js"),a=n.n(o),i=n("./src/elements/index.ts"),l=n("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,r=e.secondaryName,o=e.secondaryColor,c=e.url,s=void 0===c?{}:/^\/[a-z]/.test(c)?{as:l.c,to:c}:{as:"a",href:c,target:"_blank"};return a.a.createElement(i.g,null,a.a.createElement(i.s.Group,Object.assign({gapless:!0},s),a.a.createElement(i.s,{color:n},t),a.a.createElement(i.s,{color:o},r)))},{Group:function(e){var t=e.children;return a.a.createElement(i.i,{kind:"group",children:t})}}),s=function(e){var t=e.asType;return a.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},p=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,r=void 0!==t?"Bulma":"n/a",o=void 0!==t?"primary":"dark";return a.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:r,secondaryColor:o,url:n})},u=function(e){var t=e.customize,n=!0===t?"yes":"no",r=!0===t?"success":"danger";return a.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:r,url:"/architecture/customize"})},m=function(e){var t=e.asType,n=e.docPath,r=e.customize;return a.a.createElement(c.Group,null,a.a.createElement(s,{asType:t}),a.a.createElement(u,{customize:r}),a.a.createElement(p,{docPath:n}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},v=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return r=this,o=(e=y(t)).call.apply(e,[this].concat(c)),n=!o||"object"!==d(o)&&"function"!==typeof o?h(r):o,g(h(h(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return a.a.createElement("tbody",null,E(e).map(function(e){var t=e.key,r=e.value;return n.renderRow(t,r)}))}),g(h(h(n)),"renderCellName",function(e){return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,e))}),g(h(h(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return a.a.createElement(i.r.Cell,t)}),g(h(h(n)),"renderCellType",function(e,t){var r=n.props.components.tooltip,o=void 0===t?e:a.a.createElement(r,{text:t},e);return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,o))}),g(h(h(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?a.a.createElement(i.r.Cell,null):a.a.createElement(i.r.Cell,null,e)}),g(h(h(n)),"renderCellDefaultValue",function(e){if(void 0===e)return a.a.createElement(i.r.Cell,{textColor:"grey-light"},a.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return a.a.createElement(i.r.Cell,null,a.a.createElement("code",null,t))}),g(h(h(n)),"renderRow",function(e,t){return a.a.createElement(i.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?a.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return a.a.createElement(i.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null,"Property"),a.a.createElement("th",null,"Type"),a.a.createElement("th",null,"Required"),a.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,r),o&&f(n,o),t}(),O=Object(r.withMDXComponents)(v);function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w={description:a.a.createElement("span",null,"the React Component or JSX Element (e.g. ",a.a.createElement("code",null,'"div"')," or"," ",a.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},x={description:a.a.createElement("span",null,"a handle to the underlying ",a.a.createElement("code",null,"React Component")," or"," ",a.a.createElement("code",null,"JSX Element")),typeName:"Ref"},_=function(e){var t=e.asType,n=e.components,r=e.customize,o=e.docPath,l=e.name,c=e.props,s={asType:t,customize:r,docPath:o};return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.u,{as:"h4",size:4},l),a.a.createElement(m,s),a.a.createElement(v,{components:n,props:c}))},T=(Object(r.withMDXComponents)(_),Object(r.withMDXComponents)(function(e){for(var t=e.component,n=e.components,r=e.customize,o=e.docPath,i=e.props,l=t.defaultProps.as,c="string"===typeof l?l:void 0!==l.displayName?l.displayName:JSON.stringify(l),s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){j(e,t,n[t])})}return e}({as:w,ref:x},i),p=Object.keys(s),u=0;u<p.length;u++){var m=p[u],d=t.defaultProps[m];void 0!==d&&(s[m].defaultValue=JSON.stringify(d))}return a.a.createElement(_,{asType:c,components:n,customize:r,docPath:o,name:t.displayName,props:s})})),P=n("./node_modules/react-dom/index.js"),S=n.n(P);function N(e){return(N="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){H(e,t,n[t])})}return e}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=function(e){function t(){var e,n,r,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return r=this,o=(e=k(t)).call.apply(e,[this].concat(l)),n=!o||"object"!==N(o)&&"function"!==typeof o?z(r):o,H(z(z(n)),"ref",a.a.createRef()),H(z(z(n)),"updateHeightEnabled",!1),H(z(z(n)),"updateHeightTimeout",void 0),H(z(z(n)),"iframeRoot",void 0),H(z(z(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var r=e[t];"stylesheet"===r.rel&&n.ref.current.contentDocument.head.appendChild(r.cloneNode(!0))}for(var o=Array.from(document.head.getElementsByTagName("style")),a=0;a<o.length;a++){var i=o[a];n.ref.current.contentDocument.head.appendChild(i.cloneNode(!0))}}}),H(z(z(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),H(z(z(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),H(z(z(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(t,a.a.Component),n=t,(r=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return a.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:D({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?S.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):S.a.createPortal(e,this.iframeRoot):void 0)}}])&&C(n.prototype,r),o&&C(n,o),t}();function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}H(X,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var L={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},J=function(e){function t(){var e,n,r,o,i,l,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,p=new Array(s),u=0;u<s;u++)p[u]=arguments[u];return r=this,n=!(o=(e=M(t)).call.apply(e,[this].concat(p)))||"object"!==A(o)&&"function"!==typeof o?q(r):o,i=q(q(n)),c=function(e,t){var n;switch(A(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var r="".concat(e).concat(void 0!==n?"=".concat(n):"");return a.a.createElement("code",{key:e,style:{marginRight:"10px"}},r)},(l="renderProp")in i?Object.defineProperty(i,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[l]=c,n}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&I(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,r=t.index,o=t.props,l=void 0!==r&&0!==r?a.a.createElement("hr",{style:L}):void 0;return a.a.createElement(i.a,null,l,a.a.createElement(i.u,{as:"h6",size:6},Object.keys(o).map(function(t){return e.renderProp(t,o[t])})),n)}}])&&G(n.prototype,r),o&&G(n,o),t}(),W=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return T}),n.d(t,"f",function(){return w}),n.d(t,"h",function(){return x}),n.d(t,"a",function(){return m}),n.d(t,"c",function(){return X}),n.d(t,"d",function(){return J}),n.d(t,"e",function(){return O}),n.d(t,"g",function(){return W})},"./src/base/__docs__/generic.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return v});var r=n("./node_modules/react/index.js"),o=n.n(r),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),l=n("./src/__docs__/components/index.ts"),c=n("./src/base/generic.tsx"),s=n("./src/base/helpers/variables.ts"),p=n("./src/elements/index.ts");function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e,t){return(E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,g(t).call(this,e))).layout=null,n}var n,r,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&E(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props,t=e.components,n=y(e,["components"]);return o.a.createElement(a.MDXTag,{name:"wrapper",components:t},o.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"generic"}},"Generic"),o.a.createElement(a.MDXTag,{name:"p",components:t},"This component apples standard ",o.a.createElement(a.MDXTag,{name:"em",components:t,parentName:"p"},"Bulma")," theming to any element or component."),o.a.createElement(i.e,{__position:0,__code:"<Generic>\n  <h2>\n    Hello World, I'm a <code>{Generic.defaultProps.as}</code>\n  </h2>\n  <span>\n    I'm a <code>{'<Generic>'}</code>, and by default I render as a{' '}\n    <code>{Generic.defaultProps.as}</code>.\n  </span>\n</Generic>",__scope:{props:this?this.props:n,ComponentFeatures:l.a,SimplePropsTable:l.e,asDoc:l.f,mapEnumerable:l.g,refDoc:l.h,Generic:c.a,DEFAULTS:s.a,Notification:p.q,Title:p.u}},o.a.createElement(c.a,null,o.a.createElement("h2",null,"Hello World, I'm a ",o.a.createElement("code",null,c.a.defaultProps.as)),o.a.createElement("span",null,"I'm a ",o.a.createElement("code",null,"<Generic>"),", and by default I render as a"," ",o.a.createElement("code",null,c.a.defaultProps.as),"."))),o.a.createElement(a.MDXTag,{name:"p",components:t},"By changing the ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"as")," prop (described in greater detail below), you can render a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Generic>")," component as any other component or JSX Element, as well as forward its props and a ref."),o.a.createElement(i.e,{__position:1,__code:"<Generic as=\"nav\">\n  <h2>\n    Hello World, I'm a <code>nav</code>\n  </h2>\n  <span>\n    I'm a <code>{'<Generic>'}</code>, and I render as the JSX Element{' '}\n    <code>p</code>.\n  </span>\n</Generic>",__scope:{props:this?this.props:n,ComponentFeatures:l.a,SimplePropsTable:l.e,asDoc:l.f,mapEnumerable:l.g,refDoc:l.h,Generic:c.a,DEFAULTS:s.a,Notification:p.q,Title:p.u}},o.a.createElement(c.a,{as:"nav"},o.a.createElement("h2",null,"Hello World, I'm a ",o.a.createElement("code",null,"nav")),o.a.createElement("span",null,"I'm a ",o.a.createElement("code",null,"<Generic>"),", and I render as the JSX Element"," ",o.a.createElement("code",null,"p"),"."))),o.a.createElement(a.MDXTag,{name:"p",components:t},"Here is an example of rendering as a ",o.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Notification>")," component, and passing through its props:"),o.a.createElement(i.e,{__position:2,__code:"<Generic as={Notification} color=\"primary\">\n  <h2>Hello World</h2>\n  <p>\n    I'm a <code>{'<Generic>'}</code>, and I render as a{' '}\n    <code>{'<Notification>'}</code>.\n  </p>\n</Generic>",__scope:{props:this?this.props:n,ComponentFeatures:l.a,SimplePropsTable:l.e,asDoc:l.f,mapEnumerable:l.g,refDoc:l.h,Generic:c.a,DEFAULTS:s.a,Notification:p.q,Title:p.u}},o.a.createElement(c.a,{as:p.q,color:"primary"},o.a.createElement("h2",null,"Hello World"),o.a.createElement("p",null,"I'm a ",o.a.createElement("code",null,"<Generic>"),", and I render as a"," ",o.a.createElement("code",null,"<Notification>"),"."))),o.a.createElement(a.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),o.a.createElement(l.a,{asType:c.a.defaultProps.as}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"core-properties"}},"Core properties"),o.a.createElement(l.e,{props:{as:d({},l.f,{defaultValue:c.a.defaultProps.as}),ref:l.h}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"float-properties"}},"Float properties"),o.a.createElement(l.e,{props:{clearfix:{description:"fixes an element's floating children",typeName:"boolean"},pull:{description:"moves an element to the left or right",typeName:"string",typeTip:Object(l.g)(s.a.floatPulledAlignments)}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"overflow-properties"}},"Overflow properties"),o.a.createElement(l.e,{props:{clipped:{description:"adds overflow hidden",typeName:"boolean"}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"overlay-properties"}},"Overlay properties"),o.a.createElement(l.e,{props:{overlay:{description:"completely covers the first positioned parent",typeName:"boolean"}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"typography-properties"}},"Typography properties"),o.a.createElement(l.e,{props:{backgroundColor:{description:"sets the background color",typeName:"string",typeTip:Object(l.g)([].concat(m(s.a.colors),m(s.a.shades)))},italic:{description:"makes the text italic",typeName:"boolean"},textAlign:{description:"sets the alignment of the text",typeName:"string",typeTip:Object(l.g)(s.a.textAlignments)},textColor:{description:"sets the text color",typeName:"string",typeTip:Object(l.g)([].concat(m(s.a.colors),m(s.a.shades)))},textSize:{description:"sets the text size",typeName:"string",typeTip:Object(l.g)(s.a.textSizes)},textTransform:{description:"alters the text capitalization",typeName:"string",typeTip:Object(l.g)(s.a.textSizes)},textWeight:{description:"sets the text weight",typeName:"string",typeTip:Object(l.g)(s.a.textWeights)}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"visibility-properties"}},"Visibility properties"),o.a.createElement(l.e,{props:{hidden:{description:"hides the element",typeName:"boolean"},invisible:{description:"adds visibility hidden",typeName:"boolean"},srOnly:{description:"Hide elements visually but keeps the element available to be announced by a screen reader",typeName:"boolean"}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"other-properties"}},"Other properties"),o.a.createElement(l.e,{props:{marginless:{description:"removes any margin",typeName:"boolean"},paddingless:{description:"removes any padding",typeName:"boolean"},radiusless:{description:"removes any radius",typeName:"boolean"},shadowless:{description:"removes any shadow",typeName:"boolean"},unselectable:{description:"prevents the text from being selectable",typeName:"boolean"}}}),o.a.createElement(a.MDXTag,{name:"h3",components:t,props:{id:"responsive-properties"}},"Responsive properties"),o.a.createElement(l.e,{props:{mobile:{description:"up to 768px",typeName:"LimitedResponsive Object"},tablet:{description:"between 769px and 1023px",typeName:"Responsive Object"},desktop:{description:"between 1024px and 1215px",typeName:"Responsive Object"},widescreen:{description:"between 1216px and 1407px",typeName:"Responsive Object"},fullhd:{description:"1408px and above",typeName:"LimitedResponsive Object"},touch:{description:"up to 1023px",typeName:"LimitedResponsive Object"}}}),o.a.createElement(p.q,null,o.a.createElement(p.u,{as:"h5",size:5},"Responsive Object & LimitedResponsive Object"),o.a.createElement("div",null,o.a.createElement("p",null,"The ",o.a.createElement("strong",null,"Rsponsive Object")," has the following structure:"),o.a.createElement("pre",{children:JSON.stringify({display:{only:"boolean",value:Object(l.g)(s.a.displays).replace(/["]/g,"'")},hide:{only:"boolean",value:"boolean"},textAlign:{only:"boolean",value:Object(l.g)(s.a.textAlignments).replace(/["]/g,"'")},textSize:{only:"boolean",value:Object(l.g)(s.a.textSizes).replace(/["]/g,"'")}},null,2).replace(/["]/g,"")}),o.a.createElement("br",null)),o.a.createElement(p.u,{as:"h5",size:5},"display"),o.a.createElement("p",null,o.a.createElement("code",null,"display.value")," specifies \u2013 for a specific breakpoint \u2013\xa0the display style of the text and is ",o.a.createElement("strong",null,"required"),".",o.a.createElement("code",null,"display.only")," specifies if it should also be applied to bigger breakpoints."),o.a.createElement("br",null),o.a.createElement(p.u,{as:"h5",size:5},"hide"),o.a.createElement("p",null,o.a.createElement("code",null,"hide.value")," specifies \u2013 for a specific breakpoint \u2013\xa0whether the element should be hidden and is ",o.a.createElement("strong",null,"required"),".",o.a.createElement("code",null,"hide.only")," specifies if it should also be applied to bigger breakpoints."),o.a.createElement("br",null),o.a.createElement(p.u,{as:"h5",size:5},"textAlign"),o.a.createElement("p",null,o.a.createElement("code",null,"textAlign.value")," specifies \u2013 for a specific breakpoint \u2013\xa0the alignment of the text and is ",o.a.createElement("strong",null,"required"),". ",o.a.createElement("code",null,"textAlign.only")," specifies if it should also be applied to bigger breakpoints."),o.a.createElement("br",null),o.a.createElement(p.u,{as:"h5",size:5},"textSize"),o.a.createElement("p",null,o.a.createElement("code",null,"textSize.value")," specifies \u2013 for a specific breakpoint \u2013\xa0the size of the text and is ",o.a.createElement("strong",null,"required"),". ",o.a.createElement("code",null,"textSize.only")," specifies if it should also be applied to bigger breakpoints."),o.a.createElement("br",null),o.a.createElement(c.a,{as:"p",textColor:"info"},"The only difference between the ",o.a.createElement("strong",null,"Responsive Object")," and the"," ",o.a.createElement("strong",null,"LimitedResponsive Object"),", is that the latter does not permit the ",o.a.createElement("code",null,"only")," property, as it semantically does not apply.")))}}])&&b(n.prototype,r),u&&b(n,u),t}()}}]);
//# sourceMappingURL=src-base-docs-generic-docs.cf696350bf57be32043c.js.map