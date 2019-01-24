(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"./src/__docs__/components/index.ts":function(e,n,t){"use strict";var o=t("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),a=t("./node_modules/react/index.js"),r=t.n(a),l=t("./src/elements/index.ts"),i=t("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var n=e.primaryName,t=e.primaryColor,o=e.secondaryName,a=e.secondaryColor,c=e.url,p=void 0===c?{}:/^\/[a-z]/.test(c)?{as:i.c,to:c}:{as:"a",href:c,target:"_blank"};return r.a.createElement(l.g,null,r.a.createElement(l.s.Group,Object.assign({gapless:!0},p),r.a.createElement(l.s,{color:t},n),r.a.createElement(l.s,{color:a},o)))},{Group:function(e){var n=e.children;return r.a.createElement(l.i,{kind:"group",children:n})}}),p=function(e){var n=e.asType;return r.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:n,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},m=function(e){var n=e.docPath,t=void 0!==n?"https://bulma.io/documentation".concat(n):void 0,o=void 0!==n?"Bulma":"n/a",a=void 0!==n?"primary":"dark";return r.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:o,secondaryColor:a,url:t})},s=function(e){var n=e.customize,t=!0===n?"yes":"no",o=!0===n?"success":"danger";return r.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:t,secondaryColor:o,url:"/architecture/customize"})},u=function(e){var n=e.asType,t=e.docPath,o=e.customize;return r.a.createElement(c.Group,null,r.a.createElement(p,{asType:n}),r.a.createElement(s,{customize:o}),r.a.createElement(m,{docPath:t}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){return(h=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g=function(e){return Object.keys(e).sort(function(e,n){return e<n?-1:e===n?0:1}).map(function(n){return{key:n,value:e[n]}})},C=function(e){function n(){var e,t,o,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var i=arguments.length,c=new Array(i),p=0;p<i;p++)c[p]=arguments[p];return o=this,a=(e=b(n)).call.apply(e,[this].concat(c)),t=!a||"object"!==d(a)&&"function"!==typeof a?y(o):a,E(y(y(t)),"renderBody",function(){var e=t.props.props;if(void 0!==e)return r.a.createElement("tbody",null,g(e).map(function(e){var n=e.key,o=e.value;return t.renderRow(n,o)}))}),E(y(y(t)),"renderCellName",function(e){return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,e))}),E(y(y(t)),"renderCellRequired",function(e){var n={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return r.a.createElement(l.r.Cell,n)}),E(y(y(t)),"renderCellType",function(e,n){var o=t.props.components.tooltip,a=void 0===n?e:r.a.createElement(o,{text:n},e);return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,a))}),E(y(y(t)),"renderCellDescription",function(e){if(t.hasDescription)return void 0===e?r.a.createElement(l.r.Cell,null):r.a.createElement(l.r.Cell,null,e)}),E(y(y(t)),"renderCellDefaultValue",function(e){if(void 0===e)return r.a.createElement(l.r.Cell,{textColor:"grey-light"},r.a.createElement("em",null,"-"));var n="''"===e?"[Empty String]":e.replace(/\'/g,"");return r.a.createElement(l.r.Cell,null,r.a.createElement("code",null,n))}),E(y(y(t)),"renderRow",function(e,n){return r.a.createElement(l.r.Row,{key:e},t.renderCellName(e),t.renderCellType(n.typeName,n.typeTip),t.renderCellRequired(n.required),t.renderCellDefaultValue(n.defaultValue),t.renderCellDescription(n.description))}),t}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&h(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?r.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return r.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Property"),r.a.createElement("th",null,"Type"),r.a.createElement("th",null,"Required"),r.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(n){return void 0!==e[n].description})}}])&&f(t.prototype,o),a&&f(t,a),n}(),v=Object(o.withMDXComponents)(C);function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var T={description:r.a.createElement("span",null,"the React Component or JSX Element (e.g. ",r.a.createElement("code",null,'"div"')," or"," ",r.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},D={description:r.a.createElement("span",null,"a handle to the underlying ",r.a.createElement("code",null,"React Component")," or"," ",r.a.createElement("code",null,"JSX Element")),typeName:"Ref"},I=function(e){var n=e.asType,t=e.components,o=e.customize,a=e.docPath,i=e.name,c=e.props,p={asType:n,customize:o,docPath:a};return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.u,{as:"h4",size:4},i),r.a.createElement(u,p),r.a.createElement(C,{components:t,props:c}))},w=(Object(o.withMDXComponents)(I),Object(o.withMDXComponents)(function(e){for(var n=e.component,t=e.components,o=e.customize,a=e.docPath,l=e.props,i=n.defaultProps.as,c="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),p=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){_(e,n,t[n])})}return e}({as:T,ref:D},l),m=Object.keys(p),s=0;s<m.length;s++){var u=m[s],d=n.defaultProps[u];void 0!==d&&(p[u].defaultValue=JSON.stringify(d))}return r.a.createElement(I,{asType:c,components:t,customize:o,docPath:a,name:n.displayName,props:p})})),F=t("./node_modules/react-dom/index.js"),O=t.n(F);function k(e){return(k="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){S(e,n,t[n])})}return e}function z(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function N(e,n){return(N=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var P=function(e){function n(){var e,t,o,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return o=this,a=(e=L(n)).call.apply(e,[this].concat(i)),t=!a||"object"!==k(a)&&"function"!==typeof a?j(o):a,S(j(j(t)),"ref",r.a.createRef()),S(j(j(t)),"updateHeightEnabled",!1),S(j(j(t)),"updateHeightTimeout",void 0),S(j(j(t)),"iframeRoot",void 0),S(j(j(t)),"cloneStyles",function(){if(null!==t.ref.current&&null!==t.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),n=0;n<e.length;n++){var o=e[n];"stylesheet"===o.rel&&t.ref.current.contentDocument.head.appendChild(o.cloneNode(!0))}for(var a=Array.from(document.head.getElementsByTagName("style")),r=0;r<a.length;r++){var l=a[r];t.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),S(j(j(t)),"handleLoad",function(){null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.iframeRoot=t.ref.current.contentDocument.body,t.cloneStyles(),t.forceUpdate(),t.doUpdateHeight())}),S(j(j(t)),"doUpdateHeight",function(){!0!==t.props.forceHeight&&null!==t.ref.current&&null!==t.ref.current.contentDocument&&null!==t.ref.current.contentDocument.body&&(t.ref.current.style.height="".concat(t.ref.current.contentDocument.body.scrollHeight,"px")),t.updateHeight()}),S(j(j(t)),"updateHeight",function(){var e=t.props.updateHeightDelay;0!==e&&void 0!==e?(t.updateHeightEnabled=!0,t.updateHeightTimeout=setTimeout(t.doUpdateHeight,e)):t.updateHeightEnabled=!1}),t}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&N(e,n)}(n,r.a.Component),t=n,(o=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return r.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:x({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?O.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):O.a.createPortal(e,this.iframeRoot):void 0)}}])&&z(t.prototype,o),a&&z(t,a),n}();function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function X(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function U(e,n){return(U=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function R(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}S(P,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var B={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},H=function(e){function n(){var e,t,o,a,l,i,c;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var p=arguments.length,m=new Array(p),s=0;s<p;s++)m[s]=arguments[s];return o=this,t=!(a=(e=M(n)).call.apply(e,[this].concat(m)))||"object"!==A(a)&&"function"!==typeof a?R(o):a,l=R(R(t)),c=function(e,n){var t;switch(A(n)){case"boolean":t=!0===n?void 0:"{false}";break;case"number":t="{".concat(n,"}");break;case"undefined":t="{undefined}";break;default:t=JSON.stringify(n)}var o="".concat(e).concat(void 0!==t?"=".concat(t):"");return r.a.createElement("code",{key:e,style:{marginRight:"10px"}},o)},(i="renderProp")in l?Object.defineProperty(l,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[i]=c,t}var t,o,a;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&U(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this,n=this.props,t=n.children,o=n.index,a=n.props,i=void 0!==o&&0!==o?r.a.createElement("hr",{style:B}):void 0;return r.a.createElement(l.a,null,i,r.a.createElement(l.u,{as:"h6",size:6},Object.keys(a).map(function(n){return e.renderProp(n,a[n])})),t)}}])&&X(t.prototype,o),a&&X(t,a),n}(),J=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};t.d(n,"b",function(){return w}),t.d(n,"f",function(){return T}),t.d(n,"h",function(){return D}),t.d(n,"a",function(){return u}),t.d(n,"c",function(){return P}),t.d(n,"d",function(){return H}),t.d(n,"e",function(){return v}),t.d(n,"g",function(){return J})},"./src/elements/form/__docs__/input.docs.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",function(){return _});var o=t("./node_modules/react/index.js"),a=t.n(o),r=t("./node_modules/@mdx-js/tag/dist/index.js"),l=t("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),i=t("./node_modules/@fortawesome/react-fontawesome/index.es.js"),c=t("./node_modules/docz/dist/index.m.js"),p=t("./src/__docs__/components/index.ts"),m=t("./src/base/helpers/variables.ts"),s=t("./src/elements/index.ts"),u=t("./src/elements/form/control.tsx"),d=t("./src/elements/form/field.tsx"),f=t("./src/elements/form/label.tsx"),b=t("./src/elements/form/input.tsx");function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function E(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function g(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var _=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=g(this,C(n).call(this,e))).layout=null,t}var t,o,h;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,a.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components,t=y(e,["components"]);return a.a.createElement(r.MDXTag,{name:"wrapper",components:n},a.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"input"}},"Input"),a.a.createElement(r.MDXTag,{name:"p",components:n},"The text ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"input")," and its variations."),a.a.createElement(c.e,{__position:0,__code:'<Input type="text" placeholder="Text input" />',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(b.b,{type:"text",placeholder:"Text input"})),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"colors"}},"Colors"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"color")," prop to change the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),"'s color."),a.a.createElement(c.e,{__position:1,__code:'() =>\n  DEFAULTS.colors.map((color, i) => (\n    <OptionBlock props={{ color }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Input type="text" color={color} placeholder={`${color} input`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},function(){return m.a.colors.map(function(e,n){return a.a.createElement(p.d,{props:{color:e},index:n,key:n},a.a.createElement(d.b,null,a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"text",color:e,placeholder:"".concat(e," input")}))))})}),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"sizes"}},"Sizes"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size")," prop to change the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),"'s size."),a.a.createElement(c.e,{__position:2,__code:"() => {\n  const sizes = INPUT_DEFAULTS.sizes.map(size => ({ name: size, size }))\n  sizes.splice(1, 0, { name: 'normal', size: undefined })\n  return sizes.map(({ name, size }, i) => (\n    <OptionBlock props={{ size }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Input type=\"text\" size={size} placeholder={`${name} input`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},function(){var e=b.a.sizes.map(function(e){return{name:e,size:e}});return e.splice(1,0,{name:"normal",size:void 0}),e.map(function(e,n){var t=e.name,o=e.size;return a.a.createElement(p.d,{props:{size:o},index:n,key:n},a.a.createElement(d.b,null,a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"text",size:o,placeholder:"".concat(t," input")}))))})}),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"styles"}},"Styles"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rounded")," prop to round the edges of the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),"."),a.a.createElement(c.e,{__position:3,__code:'<Input type="text" rounded placeholder="rounded input" />',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(b.b,{type:"text",rounded:!0,placeholder:"rounded input"})),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"states"}},"States"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"state")," prop to change the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),"'s state."),a.a.createElement(c.e,{__position:4,__code:"() => {\n  const states = INPUT_DEFAULTS.states.map(state => ({ name: state, state }))\n  states.splice(0, 0, { name: 'normal', size: undefined })\n  return states.map(({ name, state }, i) => (\n    <OptionBlock props={{ state }} index={i} key={i}>\n      <Field>\n        <Control>\n          <Input type=\"text\" state={state} placeholder={`${name} input`} />\n        </Control>\n      </Field>\n    </OptionBlock>\n  ))\n}",__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},function(){var e=b.a.states.map(function(e){return{name:e,state:e}});return e.splice(0,0,{name:"normal",size:void 0}),e.map(function(e,n){var t=e.name,o=e.state;return a.a.createElement(p.d,{props:{state:o},index:n,key:n},a.a.createElement(d.b,null,a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"text",state:o,placeholder:"".concat(t," input")}))))})}),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"loading")," prop on the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Control>")," that contains the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," to get a loading spinner.\nIt's size can be adjusted by passing an appropriate ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"size")," prop to the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Control>")," and ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>"),"."),a.a.createElement(c.e,{__position:5,__code:'<Field>\n  <Control size="small" loading>\n    <Input type="text" size="small" placeholder="small loading input" />\n  </Control>\n</Field>\n<Field>\n  <Control loading>\n    <Input type="text" placeholder="normal loading input" />\n  </Control>\n</Field>\n<Field>\n  <Control size="medium" loading>\n    <Input type="text" size="medium" placeholder="medium loading input" />\n  </Control>\n</Field>\n<Field>\n  <Control size="large" loading>\n    <Input type="text" size="large" placeholder="large loading input" />\n  </Control>\n</Field>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(d.b,null,a.a.createElement(u.b,{size:"small",loading:!0},a.a.createElement(b.b,{type:"text",size:"small",placeholder:"small loading input"}))),a.a.createElement(d.b,null,a.a.createElement(u.b,{loading:!0},a.a.createElement(b.b,{type:"text",placeholder:"normal loading input"}))),a.a.createElement(d.b,null,a.a.createElement(u.b,{size:"medium",loading:!0},a.a.createElement(b.b,{type:"text",size:"medium",placeholder:"medium loading input"}))),a.a.createElement(d.b,null,a.a.createElement(u.b,{size:"large",loading:!0},a.a.createElement(b.b,{type:"text",size:"large",placeholder:"large loading input"})))),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"disabled"}},"Disabled"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the standard ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"disabled")," prop on the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," to disable it."),a.a.createElement(c.e,{__position:6,__code:'<Control>\n  <Input type="text" placeholder="Disabled" disabled />\n</Control>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"text",placeholder:"Disabled",disabled:!0}))),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"read-only"}},"Read-only"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"readOnly")," prop to mark an ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," as read-only.\nIt's not editable, and has no shadow."),a.a.createElement(c.e,{__position:7,__code:'<Control>\n  <Input type="text" placeholder="This text is read-only" readOnly />\n</Control>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"text",placeholder:"This text is read-only",readOnly:!0}))),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"static"}},"Static"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"static")," prop along with ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"readOnly")," to mark an ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," to remove the background, border, shadow and horizontal padding.\nThe vertical spacing will be maintained, so you can align the input in any context \u2013\xa0like a horizontal form."),a.a.createElement(c.e,{__position:8,__code:'<Field horizontal>\n  <Field.Label size="normal">\n    <Label>From</Label>\n  </Field.Label>\n  <Field.Body>\n    <Control>\n      <Input type="email" value="me@example.com" readOnly static />\n    </Control>\n  </Field.Body>\n</Field>\n<Field horizontal>\n  <Field.Label>\n    <Label>To</Label>\n  </Field.Label>\n  <Field.Body>\n    <Control>\n      <Input type="email" placeholder="Recipient email" />\n    </Control>\n  </Field.Body>\n</Field>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(d.b,{horizontal:!0},a.a.createElement(d.b.Label,{size:"normal"},a.a.createElement(f.b,null,"From")),a.a.createElement(d.b.Body,null,a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"email",value:"me@example.com",readOnly:!0,static:!0})))),a.a.createElement(d.b,{horizontal:!0},a.a.createElement(d.b.Label,null,a.a.createElement(f.b,null,"To")),a.a.createElement(d.b.Body,null,a.a.createElement(u.b,null,a.a.createElement(b.b,{type:"email",placeholder:"Recipient email"}))))),a.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"with-icons"}},"With icons"),a.a.createElement(r.MDXTag,{name:"p",components:n},"Use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"iconLeft")," or ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"iconRight")," prop on the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Control>")," that contains an ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," to add icons.\nYou'll also need to use the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"align")," property on the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Icon>"),"."),a.a.createElement(c.e,{__position:9,__code:'<Field>\n  <Control iconLeft iconRight>\n    <Input type="email" placeholder="Email" />\n    <Icon align="left">\n      <FontAwesomeIcon icon={faEnvelope} />\n    </Icon>\n    <Icon align="right">\n      <FontAwesomeIcon icon={faCheck} />\n    </Icon>\n  </Control>\n</Field>\n<Field>\n  <Control iconLeft>\n    <Input type="password" placeholder="Password" />\n    <Icon align="left">\n      <FontAwesomeIcon icon={faLock} />\n    </Icon>\n  </Control>\n</Field>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0,iconRight:!0},a.a.createElement(b.b,{type:"email",placeholder:"Email"}),a.a.createElement(s.m,{align:"left"},a.a.createElement(i.a,{icon:l.n})),a.a.createElement(s.m,{align:"right"},a.a.createElement(i.a,{icon:l.k})))),a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0},a.a.createElement(b.b,{type:"password",placeholder:"Password"}),a.a.createElement(s.m,{align:"left"},a.a.createElement(i.a,{icon:l.y}))))),a.a.createElement(r.MDXTag,{name:"p",components:n},"If the control contains an icon, it will remain ",a.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"centered")," regardless of the size foo the ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Input>")," or ",a.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Icon>"),"."),a.a.createElement(c.e,{__position:10,__code:'<Field>\n  <Control iconLeft iconRight>\n    <Input type="email" size="small" placeholder="Email" />\n    <Icon align="left" size="small">\n      <FontAwesomeIcon icon={faEnvelope} />\n    </Icon>\n    <Icon align="right" size="small">\n      <FontAwesomeIcon icon={faCheck} />\n    </Icon>\n  </Control>\n</Field>\n<Field>\n  <Control iconLeft iconRight>\n    <Input type="email" placeholder="Email" />\n    <Icon align="left">\n      <FontAwesomeIcon icon={faEnvelope} />\n    </Icon>\n    <Icon align="right">\n      <FontAwesomeIcon icon={faCheck} />\n    </Icon>\n  </Control>\n</Field>\n<Field>\n  <Control iconLeft iconRight>\n    <Input type="email" size="medium" placeholder="Email" />\n    <Icon align="left">\n      <FontAwesomeIcon icon={faEnvelope} />\n    </Icon>\n    <Icon align="right">\n      <FontAwesomeIcon icon={faCheck} />\n    </Icon>\n  </Control>\n</Field>\n<Field>\n  <Control iconLeft iconRight>\n    <Input type="email" size="large" placeholder="Email" />\n    <Icon align="left" size="medium">\n      <FontAwesomeIcon icon={faEnvelope} />\n    </Icon>\n    <Icon align="right" size="medium">\n      <FontAwesomeIcon icon={faCheck} />\n    </Icon>\n  </Control>\n</Field>',__scope:{props:this?this.props:t,faCheck:l.k,faEnvelope:l.n,faLock:l.y,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:p.b,mapEnumerable:p.g,OptionBlock:p.d,DEFAULTS:m.a,Icon:s.m,Control:u.b,Field:d.b,Label:f.b,Input:b.b,INPUT_DEFAULTS:b.a}},a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0,iconRight:!0},a.a.createElement(b.b,{type:"email",size:"small",placeholder:"Email"}),a.a.createElement(s.m,{align:"left",size:"small"},a.a.createElement(i.a,{icon:l.n})),a.a.createElement(s.m,{align:"right",size:"small"},a.a.createElement(i.a,{icon:l.k})))),a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0,iconRight:!0},a.a.createElement(b.b,{type:"email",placeholder:"Email"}),a.a.createElement(s.m,{align:"left"},a.a.createElement(i.a,{icon:l.n})),a.a.createElement(s.m,{align:"right"},a.a.createElement(i.a,{icon:l.k})))),a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0,iconRight:!0},a.a.createElement(b.b,{type:"email",size:"medium",placeholder:"Email"}),a.a.createElement(s.m,{align:"left"},a.a.createElement(i.a,{icon:l.n})),a.a.createElement(s.m,{align:"right"},a.a.createElement(i.a,{icon:l.k})))),a.a.createElement(d.b,null,a.a.createElement(u.b,{iconLeft:!0,iconRight:!0},a.a.createElement(b.b,{type:"email",size:"large",placeholder:"Email"}),a.a.createElement(s.m,{align:"left",size:"medium"},a.a.createElement(i.a,{icon:l.n})),a.a.createElement(s.m,{align:"right",size:"medium"},a.a.createElement(i.a,{icon:l.k}))))),a.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"api"}},"API"),a.a.createElement(p.b,{component:b.b,customize:!0,docPath:"/form/input",props:{color:{description:"change the input's color",typeName:"string",typeTip:Object(p.g)(m.a.colors)},readOnly:{description:"make the input read-only",typeName:"boolean"},rounded:{description:"round the edges of the input",typeName:"boolean"},size:{description:"change the input's size",typeName:"string",typeTip:Object(p.g)(b.a.sizes)},state:{description:"change the input's state",typeName:"string",typeTip:Object(p.g)(b.a.states)},static:{description:"remove the background, border, shadow and horizontal padding",typeName:"boolean"},type:{description:"set the input's type",typeName:"string",typeTip:Object(p.g)(b.a.types)}}}))}}])&&E(t.prototype,o),h&&E(t,h),n}()}}]);
//# sourceMappingURL=src-elements-form-docs-input-docs.cf696350bf57be32043c.js.map