(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"./src/__docs__/components/index.ts":function(e,n,t){"use strict";var a=t("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),r=t("./node_modules/react/index.js"),o=t.n(r),i=t("./src/elements/index.ts"),l=t("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var n=e.primaryName,t=e.primaryColor,a=e.secondaryName,r=e.secondaryColor,c=e.url,s=void 0===c?{}:/^\/[a-z]/.test(c)?{as:l.c,to:c}:{as:"a",href:c,target:"_blank"};return o.a.createElement(i.g,null,o.a.createElement(i.s.Group,Object.assign({gapless:!0},s),o.a.createElement(i.s,{color:t},n),o.a.createElement(i.s,{color:r},a)))},{Group:function(e){var n=e.children;return o.a.createElement(i.i,{kind:"group",children:n})}}),s=function(e){var n=e.asType;return o.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:n,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},p=function(e){var n=e.docPath,t=void 0!==n?"https://bulma.io/documentation".concat(n):void 0,a=void 0!==n?"Bulma":"n/a",r=void 0!==n?"primary":"dark";return o.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:a,secondaryColor:r,url:t})},u=function(e){var n=e.customize,t=!0===n?"yes":"no",a=!0===n?"success":"danger";return o.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:t,secondaryColor:a,url:"/architecture/customize"})},m=function(e){var n=e.asType,t=e.docPath,a=e.customize;return o.a.createElement(c.Group,null,o.a.createElement(s,{asType:n}),o.a.createElement(u,{customize:a}),o.a.createElement(p,{docPath:t}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,n){return(b=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var h=function(e){return Object.keys(e).sort(function(e,n){return e<n?-1:e===n?0:1}).map(function(n){return{key:n,value:e[n]}})},P=function(e){function n(){var e,t,a,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var l=arguments.length,c=new Array(l),s=0;s<l;s++)c[s]=arguments[s];return a=this,r=(e=g(n)).call.apply(e,[this].concat(c)),t=!r||"object"!==d(r)&&"function"!==typeof r?y(a):r,E(y(y(t)),"renderBody",function(){var e=t.props.props;if(void 0!==e)return o.a.createElement("tbody",null,h(e).map(function(e){var n=e.key,a=e.value;return t.renderRow(n,a)}))}),E(y(y(t)),"renderCellName",function(e){return o.a.createElement(i.r.Cell,null,o.a.createElement("code",null,e))}),E(y(y(t)),"renderCellRequired",function(e){var n={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return o.a.createElement(i.r.Cell,n)}),E(y(y(t)),"renderCellType",function(e,n){var a=t.props.components.tooltip,r=void 0===n?e:o.a.createElement(a,{text:n},e);return o.a.createElement(i.r.Cell,null,o.a.createElement("code",null,r))}),E(y(y(t)),"renderCellDescription",function(e){if(t.hasDescription)return void 0===e?o.a.createElement(i.r.Cell,null):o.a.createElement(i.r.Cell,null,e)}),E(y(y(t)),"renderCellDefaultValue",function(e){if(void 0===e)return o.a.createElement(i.r.Cell,{textColor:"grey-light"},o.a.createElement("em",null,"-"));var n="''"===e?"[Empty String]":e.replace(/\'/g,"");return o.a.createElement(i.r.Cell,null,o.a.createElement("code",null,n))}),E(y(y(t)),"renderRow",function(e,n){return o.a.createElement(i.r.Row,{key:e},t.renderCellName(e),t.renderCellType(n.typeName,n.typeTip),t.renderCellRequired(n.required),t.renderCellDefaultValue(n.defaultValue),t.renderCellDescription(n.description))}),t}var t,a,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&b(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?o.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return o.a.createElement(i.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Property"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(n){return void 0!==e[n].description})}}])&&f(t.prototype,a),r&&f(t,r),n}(),v=Object(a.withMDXComponents)(P);function O(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var k={description:o.a.createElement("span",null,"the React Component or JSX Element (e.g. ",o.a.createElement("code",null,'"div"')," or"," ",o.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},L={description:o.a.createElement("span",null,"a handle to the underlying ",o.a.createElement("code",null,"React Component")," or"," ",o.a.createElement("code",null,"JSX Element")),typeName:"Ref"},T=function(e){var n=e.asType,t=e.components,a=e.customize,r=e.docPath,l=e.name,c=e.props,s={asType:n,customize:a,docPath:r};return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.u,{as:"h4",size:4},l),o.a.createElement(m,s),o.a.createElement(P,{components:t,props:c}))},S=(Object(a.withMDXComponents)(T),Object(a.withMDXComponents)(function(e){for(var n=e.component,t=e.components,a=e.customize,r=e.docPath,i=e.props,l=n.defaultProps.as,c="string"===typeof l?l:void 0!==l.displayName?l.displayName:JSON.stringify(l),s=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){O(e,n,t[n])})}return e}({as:k,ref:L},i),p=Object.keys(s),u=0;u<p.length;u++){var m=p[u],d=n.defaultProps[m];void 0!==d&&(s[m].defaultValue=JSON.stringify(d))}return o.a.createElement(T,{asType:c,components:t,customize:a,docPath:r,name:n.displayName,props:s})})),j=t("./node_modules/react-dom/index.js"),N=t.n(j);function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){z(e,n,t[n])})}return e}function D(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,n){return(C=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function A(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var X=function(e){function n(){var e,t,a,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return a=this,r=(e=x(n)).call.apply(e,[this].concat(l)),t=!r||"object"!==_(r)&&"function"!==typeof r?A(a):r,z(A(A(t)),"ref",o.a.createRef()),z(A(A(t)),"updateHeightEnabled",!1),z(A(A(t)),"updateHeightTimeout",void 0),z(A(A(t)),"iframeRoot",void 0),z(A(A(t)),"cloneStyles",function(){if(null!==t.ref.current&&null!==t.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),n=0;n<e.length;n++){var a=e[n];"stylesheet"===a.rel&&t.ref.current.contentDocument.head.appendChild(a.cloneNode(!0))}for(var r=Array.from(document.head.getElementsByTagName("style")),o=0;o<r.length;o++){var i=r[o];t.ref.current.contentDocument.head.appendChild(i.cloneNode(!0))}}}),z(A(A(t)),"handleLoad",function(){null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.iframeRoot=t.ref.current.contentDocument.body,t.cloneStyles(),t.forceUpdate(),t.doUpdateHeight())}),z(A(A(t)),"doUpdateHeight",function(){!0!==t.props.forceHeight&&null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.ref.current.style.height="".concat(t.ref.current.contentDocument.body.scrollHeight,"px")),t.updateHeight()}),z(A(A(t)),"updateHeight",function(){var e=t.props.updateHeightDelay;0!==e&&void 0!==e?(t.updateHeightEnabled=!0,t.updateHeightTimeout=setTimeout(t.doUpdateHeight,e)):t.updateHeightEnabled=!1}),t}var t,a,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&C(e,n)}(n,o.a.Component),t=n,(a=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:w({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?N.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):N.a.createPortal(e,this.iframeRoot):void 0)}}])&&D(t.prototype,a),r&&D(t,r),n}();function M(e){return(M="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function I(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}z(X,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var B={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},H=function(e){function n(){var e,t,a,r,i,l,c;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var s=arguments.length,p=new Array(s),u=0;u<s;u++)p[u]=arguments[u];return a=this,t=!(r=(e=R(n)).call.apply(e,[this].concat(p)))||"object"!==M(r)&&"function"!==typeof r?F(a):r,i=F(F(t)),c=function(e,n){var t;switch(M(n)){case"boolean":t=!0===n?void 0:"{false}";break;case"number":t="{".concat(n,"}");break;case"undefined":t="{undefined}";break;default:t=JSON.stringify(n)}var a="".concat(e).concat(void 0!==t?"=".concat(t):"");return o.a.createElement("code",{key:e,style:{marginRight:"10px"}},a)},(l="renderProp")in i?Object.defineProperty(i,l,{value:c,enumerable:!0,configurable:!0,writable:!0}):i[l]=c,t}var t,a,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(n,o.a.Component),t=n,(a=[{key:"render",value:function(){var e=this,n=this.props,t=n.children,a=n.index,r=n.props,l=void 0!==a&&0!==a?o.a.createElement("hr",{style:B}):void 0;return o.a.createElement(i.a,null,l,o.a.createElement(i.u,{as:"h6",size:6},Object.keys(r).map(function(n){return e.renderProp(n,r[n])})),t)}}])&&I(t.prototype,a),r&&I(t,r),n}(),G=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};t.d(n,"b",function(){return S}),t.d(n,"f",function(){return k}),t.d(n,"h",function(){return L}),t.d(n,"a",function(){return m}),t.d(n,"c",function(){return X}),t.d(n,"d",function(){return H}),t.d(n,"e",function(){return v}),t.d(n,"g",function(){return G})},"./src/components/pagination/__docs__/pagination.docs.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return E});var a=t("./node_modules/react/index.js"),r=t.n(a),o=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js"),l=t("./src/__docs__/components/index.ts"),c=t("./src/base/helpers/variables.ts"),s=t("./src/elements/index.ts"),p=t("./src/components/pagination/pagination.tsx"),u=t("./src/components/pagination/pagination-step.tsx");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var E=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,b(n).call(this,e))).layout=null,t}var t,a,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,r.a.Component),t=n,(a=[{key:"render",value:function(){var e=this.props,n=e.components,t=d(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:n},r.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"pagination"}},"Pagination"),r.a.createElement(o.MDXTag,{name:"p",components:n},"A responsive, usable, and flexible ",r.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"pagination"),"."),r.a.createElement(s.f,null,r.a.createElement("p",null,"The ",r.a.createElement("code",null,"<Pagination>")," component contains several other components:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"<Pagination.Step>")," for incremental navigation"),r.a.createElement("li",null,r.a.createElement("code",null,"<Pagination.List>")," which displays page items:",r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("code",null,"<Pagination.Link>")," for the page numbers"),r.a.createElement("li",null,r.a.createElement("code",null,"<Pagination.Ellipsis>")," for range separators")))),r.a.createElement("p",null,"All components are optional, so you can compose your"," ",r.a.createElement("code",null,"<Pagination>")," as you wish.")),r.a.createElement(i.e,{__position:1,__code:'<Pagination>\n  <Pagination.Step align="previous">Previous</Pagination.Step>\n  <Pagination.Step align="next">Next page</Pagination.Step>\n  <Pagination.List>\n    <Pagination.Link>1</Pagination.Link>\n    <Pagination.Ellipsis />\n    <Pagination.Link>45</Pagination.Link>\n    <Pagination.Link current>46</Pagination.Link>\n    <Pagination.Link>47</Pagination.Link>\n    <Pagination.Ellipsis />\n    <Pagination.Link>86</Pagination.Link>\n  </Pagination.List>\n</Pagination>',__scope:{props:this?this.props:t,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:c.a,Block:s.a,Content:s.f,Title:s.u,Pagination:p.b,PAGINATION_DEFAULTS:p.a,PAGINATION_STEP_DEFAULTS:u.a}},r.a.createElement(p.b,null,r.a.createElement(p.b.Step,{align:"previous"},"Previous"),r.a.createElement(p.b.Step,{align:"next"},"Next page"),r.a.createElement(p.b.List,null,r.a.createElement(p.b.Link,null,"1"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"45"),r.a.createElement(p.b.Link,{current:!0},"46"),r.a.createElement(p.b.Link,null,"47"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"86")))),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"anchor")," standard ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"disabled")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Step>")," to disable it if it's not active."),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"current")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Link>")," to set it as currently selected."),r.a.createElement(i.e,{__position:2,__code:'<Pagination>\n  <Pagination.Step align="previous" disabled>\n    Previous\n  </Pagination.Step>\n  <Pagination.Step align="next">Next page</Pagination.Step>\n  <Pagination.List>\n    <Pagination.Link current>1</Pagination.Link>\n    <Pagination.Link>2</Pagination.Link>\n    <Pagination.Link>3</Pagination.Link>\n  </Pagination.List>\n</Pagination>',__scope:{props:this?this.props:t,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:c.a,Block:s.a,Content:s.f,Title:s.u,Pagination:p.b,PAGINATION_DEFAULTS:p.a,PAGINATION_STEP_DEFAULTS:u.a}},r.a.createElement(p.b,null,r.a.createElement(p.b.Step,{align:"previous",disabled:!0},"Previous"),r.a.createElement(p.b.Step,{align:"next"},"Next page"),r.a.createElement(p.b.List,null,r.a.createElement(p.b.Link,{current:!0},"1"),r.a.createElement(p.b.Link,null,"2"),r.a.createElement(p.b.Link,null,"3")))),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"alignments"}},"Alignments"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"align")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination>")," to force the alignment of the pagination items: ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.List>")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Step>"),"."),r.a.createElement(o.MDXTag,{name:"p",components:n},"By default on ",r.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"touch")," devices ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<1024px"),", the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.List>")," is located on the ",r.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"left")," and the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Step>"),"s are located on the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"right"),"."),r.a.createElement(i.e,{__position:3,__code:'() => {\n  const alignments = PAGINATION_DEFAULTS.alignments.map(align => ({\n    align,\n    name: align,\n  }))\n  alignments.splice(0, 0, { align: undefined, name: \'left\' })\n  return alignments.map(({ align, name }, i) => (\n    <OptionBlock props={{ align }} index={i} key={i}>\n      <Pagination align={align}>\n        <Pagination.Step align="previous">Previous</Pagination.Step>\n        <Pagination.Step align="next">Next page</Pagination.Step>\n        <Pagination.List>\n          <Pagination.Link>1</Pagination.Link>\n          <Pagination.Ellipsis />\n          <Pagination.Link>45</Pagination.Link>\n          <Pagination.Link current>46</Pagination.Link>\n          <Pagination.Link>47</Pagination.Link>\n          <Pagination.Ellipsis />\n          <Pagination.Link>86</Pagination.Link>\n        </Pagination.List>\n      </Pagination>\n    </OptionBlock>\n  ))\n}',__scope:{props:this?this.props:t,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:c.a,Block:s.a,Content:s.f,Title:s.u,Pagination:p.b,PAGINATION_DEFAULTS:p.a,PAGINATION_STEP_DEFAULTS:u.a}},function(){var e=p.a.alignments.map(function(e){return{align:e,name:e}});return e.splice(0,0,{align:void 0,name:"left"}),e.map(function(e,n){var t=e.align;e.name;return r.a.createElement(l.d,{props:{align:t},index:n,key:n},r.a.createElement(p.b,{align:t},r.a.createElement(p.b.Step,{align:"previous"},"Previous"),r.a.createElement(p.b.Step,{align:"next"},"Next page"),r.a.createElement(p.b.List,null,r.a.createElement(p.b.Link,null,"1"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"45"),r.a.createElement(p.b.Link,{current:!0},"46"),r.a.createElement(p.b.Link,null,"47"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"86"))))})}),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"rounded"}},"Rounded"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rounded")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination>")," to have rounded ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Link>")," and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination.Step>")," items."),r.a.createElement(i.e,{__position:4,__code:'<Pagination rounded>\n  <Pagination.Step align="previous">Previous</Pagination.Step>\n  <Pagination.Step align="next">Next page</Pagination.Step>\n  <Pagination.List>\n    <Pagination.Link>1</Pagination.Link>\n    <Pagination.Ellipsis />\n    <Pagination.Link>45</Pagination.Link>\n    <Pagination.Link current>46</Pagination.Link>\n    <Pagination.Link>47</Pagination.Link>\n    <Pagination.Ellipsis />\n    <Pagination.Link>86</Pagination.Link>\n  </Pagination.List>\n</Pagination>',__scope:{props:this?this.props:t,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:c.a,Block:s.a,Content:s.f,Title:s.u,Pagination:p.b,PAGINATION_DEFAULTS:p.a,PAGINATION_STEP_DEFAULTS:u.a}},r.a.createElement(p.b,{rounded:!0},r.a.createElement(p.b.Step,{align:"previous"},"Previous"),r.a.createElement(p.b.Step,{align:"next"},"Next page"),r.a.createElement(p.b.List,null,r.a.createElement(p.b.Link,null,"1"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"45"),r.a.createElement(p.b.Link,{current:!0},"46"),r.a.createElement(p.b.Link,null,"47"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"86")))),r.a.createElement(o.MDXTag,{name:"h3",components:n,props:{id:"sizes"}},"Sizes"),r.a.createElement(o.MDXTag,{name:"p",components:n},"Use the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size")," prop on ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Pagination>")," to change the size."),r.a.createElement(i.e,{__position:5,__code:'() => {\n  const sizes = PAGINATION_DEFAULTS.sizes.map(size => ({ size, name: size }))\n  sizes.splice(1, 0, { size: undefined, name: \'normal\' })\n  return sizes.map(({ size, name }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Pagination size={size}>\n        <Pagination.Step align="previous">Previous</Pagination.Step>\n        <Pagination.Step align="next">Next page</Pagination.Step>\n        <Pagination.List>\n          <Pagination.Link>1</Pagination.Link>\n          <Pagination.Ellipsis />\n          <Pagination.Link>45</Pagination.Link>\n          <Pagination.Link current>46</Pagination.Link>\n          <Pagination.Link>47</Pagination.Link>\n          <Pagination.Ellipsis />\n          <Pagination.Link>86</Pagination.Link>\n        </Pagination.List>\n      </Pagination>\n    </OptionBlock>\n  ))\n}',__scope:{props:this?this.props:t,ForwardRefAsExoticComponentDoc:l.b,mapEnumerable:l.g,OptionBlock:l.d,DEFAULTS:c.a,Block:s.a,Content:s.f,Title:s.u,Pagination:p.b,PAGINATION_DEFAULTS:p.a,PAGINATION_STEP_DEFAULTS:u.a}},function(){var e=p.a.sizes.map(function(e){return{size:e,name:e}});return e.splice(1,0,{size:void 0,name:"normal"}),e.map(function(e,n){var t=e.size;e.name;return r.a.createElement(l.d,{props:{size:t},index:n,key:n},r.a.createElement(p.b,{size:t},r.a.createElement(p.b.Step,{align:"previous"},"Previous"),r.a.createElement(p.b.Step,{align:"next"},"Next page"),r.a.createElement(p.b.List,null,r.a.createElement(p.b.Link,null,"1"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"45"),r.a.createElement(p.b.Link,{current:!0},"46"),r.a.createElement(p.b.Link,null,"47"),r.a.createElement(p.b.Ellipsis,null),r.a.createElement(p.b.Link,null,"86"))))})}),r.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"api"}},"API"),r.a.createElement(l.b,{component:p.b,customize:!0,docPath:"/components/pagination",props:{align:{description:"change the pagination's alignment of pagination items",typeName:"string",typeTip:Object(l.g)(p.a.alignments)},rounded:{description:"round the pagination items",typeName:"boolean"},size:{description:"change the pagination's size",typeName:"string",typeTip:Object(l.g)(p.a.sizes)}}}),r.a.createElement(l.b,{component:p.b.Ellipsis,docPath:"/components/pagination",props:{children:{defaultValue:"the ellipsis: \u2026",description:"the component's children",typeName:"ReactNode"}}}),r.a.createElement(l.b,{component:p.b.Link,docPath:"/components/pagination",props:{current:{description:"set the pagination link as currently selected",typeName:"boolean"}}}),r.a.createElement(l.b,{component:p.b.List,docPath:"/components/pagination"}),r.a.createElement(l.b,{component:p.b.Step,customize:!0,docPath:"/components/pagination",props:{align:{description:"set the step as next or previous (positioning changes with pagination's align prop",required:!0,typeName:"string",typeTip:Object(l.g)(u.a.alignments)}}}))}}])&&f(t.prototype,a),m&&f(t,m),n}()},"./src/components/pagination/pagination-step.tsx":function(e,n,t){"use strict";t.d(n,"a",function(){return m}),t.d(n,"b",function(){return d});var a=t("./node_modules/classnames/index.js"),r=t.n(a),o=t("./node_modules/prop-types/index.js"),i=t.n(o),l=t("./node_modules/react/index.js"),c=t.n(l),s=t("./src/base/index.ts"),p=t("./src/utils.ts");function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={alignments:Object(p.d)("next","previous")},d=Object(s.b)(function(e,n){var t,a,o,i=e.align,l=e.className,p=u(e,["align","className"]);return c.a.createElement(s.a,Object.assign({className:r()((t={},a="pagination-".concat(i),o=i,a in t?Object.defineProperty(t,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[a]=o,t),l),ref:n},p))},{as:"a"});d.displayName="Pagination.Step",d.propTypes={align:i.a.oneOfType([i.a.string,i.a.number]).isRequired}},"./src/components/pagination/pagination.tsx":function(e,n,t){"use strict";var a=t("./node_modules/classnames/index.js"),r=t.n(a),o=t("./node_modules/prop-types/index.js"),i=t.n(o),l=t("./node_modules/react/index.js"),c=t.n(l),s=t("./src/base/index.ts"),p=t("./src/utils.ts");function u(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=Object(s.b)(function(e,n){var t=e.className,a=u(e,["className"]);return c.a.createElement("li",null,c.a.createElement(s.a,Object.assign({className:r()("pagination-ellipsis",t),ref:n},a)))},{as:"span",children:"\u2026"});function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}m.displayName="Pagination.Ellipsis";var f=Object(s.b)(function(e,n){var t=e.className,a=e.current,o=d(e,["className","current"]);return c.a.createElement("li",null,c.a.createElement(s.a,Object.assign({className:r()("pagination-link",{"is-current":a},t),ref:n},o)))},{as:"a"});function g(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}f.displayName="Pagination.Link",f.propTypes={current:i.a.bool};var b=Object(s.b)(function(e,n){var t=e.className,a=g(e,["className"]);return c.a.createElement(s.a,Object.assign({className:r()("pagination-list",t),ref:n},a))},{as:"ul"});b.displayName="Pagination.List";var y=t("./src/components/pagination/pagination-step.tsx");function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function h(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,"a",function(){return P}),t.d(n,"b",function(){return v});var P={alignments:Object(p.d)("centered","right"),sizes:Object(p.d)("small","medium","large")},v=Object.assign(Object(s.b)(function(e,n){var t,a=e.align,o=e.className,i=e.rounded,l=e.size,p=h(e,["align","className","rounded","size"]);return c.a.createElement(s.a,Object.assign({className:r()("pagination",(t={},E(t,"is-".concat(a),a),E(t,"is-rounded",i),E(t,"is-".concat(l),l),t),o),ref:n},p))},{as:"nav"}),{Ellipsis:m,Link:f,List:b,Step:y.b});v.displayName="Pagination",v.propTypes={align:i.a.oneOfType([i.a.string,i.a.number]),rounded:i.a.bool,size:i.a.oneOfType([i.a.string,i.a.number])}}}]);
//# sourceMappingURL=src-components-pagination-docs-pagination-docs.cf696350bf57be32043c.js.map