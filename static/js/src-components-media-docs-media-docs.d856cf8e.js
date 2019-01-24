(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./src/__docs__/components/index.ts":function(e,t,n){"use strict";var a=n("./node_modules/@mdx-js/tag/dist/mdx-provider.js"),r=n("./node_modules/react/index.js"),o=n.n(r),l=n("./src/elements/index.ts"),i=n("./node_modules/docz/dist/index.m.js"),c=Object.assign(function(e){var t=e.primaryName,n=e.primaryColor,a=e.secondaryName,r=e.secondaryColor,c=e.url,s=void 0===c?{}:/^\/[a-z]/.test(c)?{as:i.c,to:c}:{as:"a",href:c,target:"_blank"};return o.a.createElement(l.g,null,o.a.createElement(l.s.Group,Object.assign({gapless:!0},s),o.a.createElement(l.s,{color:n},t),o.a.createElement(l.s,{color:r},a)))},{Group:function(e){var t=e.children;return o.a.createElement(l.i,{kind:"group",children:t})}}),s=function(e){var t=e.asType;return o.a.createElement(c,{primaryName:"as",primaryColor:"light",secondaryName:t,secondaryColor:"warning",url:"/architecture/inversion-of-control"})},m=function(e){var t=e.docPath,n=void 0!==t?"https://bulma.io/documentation".concat(t):void 0,a=void 0!==t?"Bulma":"n/a",r=void 0!==t?"primary":"dark";return o.a.createElement(c,{primaryName:"docs",primaryColor:"light",secondaryName:a,secondaryColor:r,url:n})},u=function(e){var t=e.customize,n=!0===t?"yes":"no",a=!0===t?"success":"danger";return o.a.createElement(c,{primaryName:"customize",primaryColor:"light",secondaryName:n,secondaryColor:a,url:"/architecture/customize"})},p=function(e){var t=e.asType,n=e.docPath,a=e.customize;return o.a.createElement(c.Group,null,o.a.createElement(s,{asType:t}),o.a.createElement(u,{customize:a}),o.a.createElement(m,{docPath:n}))};function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var E=function(e){return Object.keys(e).sort(function(e,t){return e<t?-1:e===t?0:1}).map(function(t){return{key:t,value:e[t]}})},v=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return a=this,r=(e=b(t)).call.apply(e,[this].concat(c)),n=!r||"object"!==d(r)&&"function"!==typeof r?h(a):r,y(h(h(n)),"renderBody",function(){var e=n.props.props;if(void 0!==e)return o.a.createElement("tbody",null,E(e).map(function(e){var t=e.key,a=e.value;return n.renderRow(t,a)}))}),y(h(h(n)),"renderCellName",function(e){return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,e))}),y(h(h(n)),"renderCellRequired",function(e){var t={children:!0===e?"true":"false",textColor:!0===e?"danger":"grey-light"};return o.a.createElement(l.r.Cell,t)}),y(h(h(n)),"renderCellType",function(e,t){var a=n.props.components.tooltip,r=void 0===t?e:o.a.createElement(a,{text:t},e);return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,r))}),y(h(h(n)),"renderCellDescription",function(e){if(n.hasDescription)return void 0===e?o.a.createElement(l.r.Cell,null):o.a.createElement(l.r.Cell,null,e)}),y(h(h(n)),"renderCellDefaultValue",function(e){if(void 0===e)return o.a.createElement(l.r.Cell,{textColor:"grey-light"},o.a.createElement("em",null,"-"));var t="''"===e?"[Empty String]":e.replace(/\'/g,"");return o.a.createElement(l.r.Cell,null,o.a.createElement("code",null,t))}),y(h(h(n)),"renderRow",function(e,t){return o.a.createElement(l.r.Row,{key:e},n.renderCellName(e),n.renderCellType(t.typeName,t.typeTip),n.renderCellRequired(t.required),n.renderCellDefaultValue(t.defaultValue),n.renderCellDescription(t.description))}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){if(void 0!==this.props.props){var e=this.hasDescription?o.a.createElement("th",{style:{width:"40%"}},"Description"):void 0;return o.a.createElement(l.r,{bordered:!0,narrow:!0,hoverable:!0,fullwidth:!0},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Property"),o.a.createElement("th",null,"Type"),o.a.createElement("th",null,"Required"),o.a.createElement("th",null,"Default"),e)),this.renderBody())}}},{key:"hasDescription",get:function(){var e=this.props.props;return void 0!==e&&Object.keys(e).some(function(t){return void 0!==e[t].description})}}])&&f(n.prototype,a),r&&f(n,r),t}(),I=Object(a.withMDXComponents)(v);function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M={description:o.a.createElement("span",null,"the React Component or JSX Element (e.g. ",o.a.createElement("code",null,'"div"')," or"," ",o.a.createElement("code",null,"span"),") to render as"),typeName:"ReactType"},w={description:o.a.createElement("span",null,"a handle to the underlying ",o.a.createElement("code",null,"React Component")," or"," ",o.a.createElement("code",null,"JSX Element")),typeName:"Ref"},_=function(e){var t=e.asType,n=e.components,a=e.customize,r=e.docPath,i=e.name,c=e.props,s={asType:t,customize:a,docPath:r};return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.u,{as:"h4",size:4},i),o.a.createElement(p,s),o.a.createElement(v,{components:n,props:c}))},O=(Object(a.withMDXComponents)(_),Object(a.withMDXComponents)(function(e){for(var t=e.component,n=e.components,a=e.customize,r=e.docPath,l=e.props,i=t.defaultProps.as,c="string"===typeof i?i:void 0!==i.displayName?i.displayName:JSON.stringify(i),s=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){C(e,t,n[t])})}return e}({as:M,ref:w},l),m=Object.keys(s),u=0;u<m.length;u++){var p=m[u],d=t.defaultProps[p];void 0!==d&&(s[p].defaultValue=JSON.stringify(d))}return o.a.createElement(_,{asType:c,components:n,customize:a,docPath:r,name:t.displayName,props:s})})),x=n("./node_modules/react-dom/index.js"),D=n.n(x);function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),a.forEach(function(t){N(e,t,n[t])})}return e}function P(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var R=function(e){function t(){var e,n,a,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,i=new Array(l),c=0;c<l;c++)i[c]=arguments[c];return a=this,r=(e=S(t)).call.apply(e,[this].concat(i)),n=!r||"object"!==j(r)&&"function"!==typeof r?L(a):r,N(L(L(n)),"ref",o.a.createRef()),N(L(L(n)),"updateHeightEnabled",!1),N(L(L(n)),"updateHeightTimeout",void 0),N(L(L(n)),"iframeRoot",void 0),N(L(L(n)),"cloneStyles",function(){if(null!==n.ref.current&&null!==n.ref.current.contentDocument){for(var e=Array.from(document.getElementsByTagName("link")),t=0;t<e.length;t++){var a=e[t];"stylesheet"===a.rel&&n.ref.current.contentDocument.head.appendChild(a.cloneNode(!0))}for(var r=Array.from(document.head.getElementsByTagName("style")),o=0;o<r.length;o++){var l=r[o];n.ref.current.contentDocument.head.appendChild(l.cloneNode(!0))}}}),N(L(L(n)),"handleLoad",function(){null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.iframeRoot=n.ref.current.contentDocument.body,n.cloneStyles(),n.forceUpdate(),n.doUpdateHeight())}),N(L(L(n)),"doUpdateHeight",function(){!0!==n.props.forceHeight&&null!==n.ref.current&&null!==n.ref.current.contentDocument&&null!==n.ref.current.contentDocument.body&&(n.ref.current.style.height="".concat(n.ref.current.contentDocument.body.scrollHeight,"px")),n.updateHeight()}),N(L(L(n)),"updateHeight",function(){var e=n.props.updateHeightDelay;0!==e&&void 0!==e?(n.updateHeightEnabled=!0,n.updateHeightTimeout=setTimeout(n.doUpdateHeight,e)):n.updateHeightEnabled=!1}),n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,o.a.Component),n=t,(a=[{key:"componentDidMount",value:function(){null!==this.ref.current&&this.ref.current.addEventListener("load",this.handleLoad)}},{key:"componentWillUnmount",value:function(){null!==this.ref.current&&(this.ref.current.removeEventListener("load",this.handleLoad),this.updateHeightEnabled&&(this.updateHeightEnabled=!1),void 0!==this.updateHeightTimeout&&clearTimeout(this.updateHeightTimeout))}},{key:"render",value:function(){var e=this.props.children;return o.a.createElement("iframe",{ref:this.ref,sandbox:"allow-same-origin",srcDoc:"<!DOCTYPE html>",style:T({height:"0px",width:"100%"},this.props.style)},void 0!==this.iframeRoot&&null!==this.ref.current&&null!==this.ref.current.contentDocument?"function"===typeof e?D.a.createPortal(e({document:this.ref.current.contentDocument}),this.iframeRoot):D.a.createPortal(e,this.iframeRoot):void 0)}}])&&P(n.prototype,a),r&&P(n,r),t}();function A(e){return(A="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function z(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function F(e){return(F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t){return(X=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}N(R,"defaultProps",{forceHeight:!1,updateHeightDelay:200});var H={backgroundColor:"transparent",borderColor:"#ddd",borderStyle:"dashed",borderWidth:"1px 0 0 0"},q=function(e){function t(){var e,n,a,r,l,i,c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var s=arguments.length,m=new Array(s),u=0;u<s;u++)m[u]=arguments[u];return a=this,n=!(r=(e=F(t)).call.apply(e,[this].concat(m)))||"object"!==A(r)&&"function"!==typeof r?B(a):r,l=B(B(n)),c=function(e,t){var n;switch(A(t)){case"boolean":n=!0===t?void 0:"{false}";break;case"number":n="{".concat(t,"}");break;case"undefined":n="{undefined}";break;default:n=JSON.stringify(t)}var a="".concat(e).concat(void 0!==n?"=".concat(n):"");return o.a.createElement("code",{key:e,style:{marginRight:"10px"}},a)},(i="renderProp")in l?Object.defineProperty(l,i,{value:c,enumerable:!0,configurable:!0,writable:!0}):l[i]=c,n}var n,a,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&X(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){var e=this,t=this.props,n=t.children,a=t.index,r=t.props,i=void 0!==a&&0!==a?o.a.createElement("hr",{style:H}):void 0;return o.a.createElement(l.a,null,i,o.a.createElement(l.u,{as:"h6",size:6},Object.keys(r).map(function(t){return e.renderProp(t,r[t])})),n)}}])&&z(n.prototype,a),r&&z(n,r),t}(),U=function(e){return e.map(function(e){return"string"===typeof e?'"'.concat(e,'"'):"".concat(e)}).join(" \u2502 ")};n.d(t,"b",function(){return O}),n.d(t,"f",function(){return M}),n.d(t,"h",function(){return w}),n.d(t,"a",function(){return p}),n.d(t,"c",function(){return R}),n.d(t,"d",function(){return q}),n.d(t,"e",function(){return I}),n.d(t,"g",function(){return U})},"./src/components/media/__docs__/media.docs.mdx":function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return I});var a=n("./node_modules/react/index.js"),r=n.n(a),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./node_modules/@fortawesome/free-solid-svg-icons/index.es.js"),i=n("./node_modules/@fortawesome/react-fontawesome/index.es.js"),c=n("./node_modules/docz/dist/index.m.js"),s=n("./src/__docs__/components/index.ts"),m=n("./src/base/helpers/variables.ts"),u=n("./src/components/index.ts"),p=n("./src/elements/index.ts"),d=n("./src/components/media/media.tsx"),f=n("./src/components/media/media-item.tsx");function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var I=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=y(this,E(t).call(this,e))).layout=null,n}var n,a,b;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),n=t,(a=[{key:"render",value:function(){var e=this.props,t=e.components,n=g(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:t},r.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"media-object"}},"Media Object"),r.a.createElement(o.MDXTag,{name:"p",components:t},"The famous ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"media object")," prevalent in social media interfaces, but useful in any context."),r.a.createElement(o.MDXTag,{name:"p",components:t},"The example below adds a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"1px solid black")," border to each ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Media.Item>")," and a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"1px dotted red")," border to the ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Media>"),", to depict the placement of the components."),r.a.createElement(c.e,{__position:0,__code:"<Media style={{ border: '1px dotted red' }}>\n  <Media.Item align=\"left\" style={{ border: '1px solid black' }}>\n    <code>left</code>\n  </Media.Item>\n  <Media.Item align=\"content\" style={{ border: '1px solid black' }}>\n    <code>content</code>\n  </Media.Item>\n  <Media.Item align=\"right\" style={{ border: '1px solid black' }}>\n    <code>right</code>\n  </Media.Item>\n</Media>",__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,DEFAULTS:m.a,Level:u.a,Button:p.c,Checkbox:p.d,Content:p.f,Control:p.g,Delete:p.h,Field:p.i,Icon:p.m,Image:p.n,Label:p.p,Textarea:p.t,Media:d.a,MEDIA_ITEM_DEFAULTS:f.a}},r.a.createElement(d.a,{style:{border:"1px dotted red"}},r.a.createElement(d.a.Item,{align:"left",style:{border:"1px solid black"}},r.a.createElement("code",null,"left")),r.a.createElement(d.a.Item,{align:"content",style:{border:"1px solid black"}},r.a.createElement("code",null,"content")),r.a.createElement(d.a.Item,{align:"right",style:{border:"1px solid black"}},r.a.createElement("code",null,"right")))),r.a.createElement(c.e,{__position:1,__code:'<Media>\n  <Media.Item as="figure" align="left">\n    <Image.Container as="p" size={64}>\n      <Image\n        alt="64x64"\n        src="https://bulma.io/images/placeholders/128x128.png"\n      />\n    </Image.Container>\n  </Media.Item>\n  <Media.Item align="content">\n    <Content>\n      <p>\n        <strong>John Smith</strong> <small>@johnsmith</small>{\' \'}\n        <small>31m</small>\n        <br />\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare\n        magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa\n        sem. Etiam finibus odio quis feugiat facilisis.\n      </p>\n    </Content>\n    <Level breakpoint="mobile">\n      <Level.Item align="left">\n        <Level.Item as="a">\n          <Icon size="small">\n            <FontAwesomeIcon icon={faReply} />\n          </Icon>\n        </Level.Item>\n        <Level.Item as="a">\n          <Icon size="small">\n            <FontAwesomeIcon icon={faRetweet} />\n          </Icon>\n        </Level.Item>\n        <Level.Item as="a">\n          <Icon size="small">\n            <FontAwesomeIcon icon={faHeart} />\n          </Icon>\n        </Level.Item>\n      </Level.Item>\n    </Level>\n  </Media.Item>\n  <Media.Item align="right">\n    <Delete />\n  </Media.Item>\n</Media>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,DEFAULTS:m.a,Level:u.a,Button:p.c,Checkbox:p.d,Content:p.f,Control:p.g,Delete:p.h,Field:p.i,Icon:p.m,Image:p.n,Label:p.p,Textarea:p.t,Media:d.a,MEDIA_ITEM_DEFAULTS:f.a}},r.a.createElement(d.a,null,r.a.createElement(d.a.Item,{as:"figure",align:"left"},r.a.createElement(p.n.Container,{as:"p",size:64},r.a.createElement(p.n,{alt:"64x64",src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.f,null,r.a.createElement("p",null,r.a.createElement("strong",null,"John Smith")," ",r.a.createElement("small",null,"@johnsmith")," ",r.a.createElement("small",null,"31m"),r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.")),r.a.createElement(u.a,{breakpoint:"mobile"},r.a.createElement(u.a.Item,{align:"left"},r.a.createElement(u.a.Item,{as:"a"},r.a.createElement(p.m,{size:"small"},r.a.createElement(i.a,{icon:l.B}))),r.a.createElement(u.a.Item,{as:"a"},r.a.createElement(p.m,{size:"small"},r.a.createElement(i.a,{icon:l.C}))),r.a.createElement(u.a.Item,{as:"a"},r.a.createElement(p.m,{size:"small"},r.a.createElement(i.a,{icon:l.t})))))),r.a.createElement(d.a.Item,{align:"right"},r.a.createElement(p.h,null)))),r.a.createElement(o.MDXTag,{name:"p",components:t},"You can include ",r.a.createElement(o.MDXTag,{name:"em",components:t,parentName:"p"},"any")," other ",r.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"rbx")," component, like ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Input>"),"s, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Textarea>"),"s, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Icon>"),"s, ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Button>"),"s ... or even a ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Navbar>"),"."),r.a.createElement(c.e,{__position:2,__code:'<Media>\n  <Media.Item as="figure" align="left">\n    <Image.Container as="p" size={64}>\n      <Image src="https://bulma.io/images/placeholders/128x128.png" />\n    </Image.Container>\n  </Media.Item>\n  <Media.Item align="content">\n    <Field>\n      <Control>\n        <Textarea placeholder="Add a comment..." />\n      </Control>\n    </Field>\n    <Level>\n      <Level.Item align="left">\n        <Level.Item>\n          <Button color="info" type="submit">\n            Submit\n          </Button>\n        </Level.Item>\n      </Level.Item>\n      <Level.Item align="right">\n        <Level.Item>\n          <Label>\n            <Checkbox /> Press enter to submit\n          </Label>\n        </Level.Item>\n      </Level.Item>\n    </Level>\n  </Media.Item>\n</Media>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,DEFAULTS:m.a,Level:u.a,Button:p.c,Checkbox:p.d,Content:p.f,Control:p.g,Delete:p.h,Field:p.i,Icon:p.m,Image:p.n,Label:p.p,Textarea:p.t,Media:d.a,MEDIA_ITEM_DEFAULTS:f.a}},r.a.createElement(d.a,null,r.a.createElement(d.a.Item,{as:"figure",align:"left"},r.a.createElement(p.n.Container,{as:"p",size:64},r.a.createElement(p.n,{src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.i,null,r.a.createElement(p.g,null,r.a.createElement(p.t,{placeholder:"Add a comment..."}))),r.a.createElement(u.a,null,r.a.createElement(u.a.Item,{align:"left"},r.a.createElement(u.a.Item,null,r.a.createElement(p.c,{color:"info",type:"submit"},"Submit"))),r.a.createElement(u.a.Item,{align:"right"},r.a.createElement(u.a.Item,null,r.a.createElement(p.p,null,r.a.createElement(p.d,null)," Press enter to submit"))))))),r.a.createElement(o.MDXTag,{name:"h3",components:t,props:{id:"nesting"}},"Nesting"),r.a.createElement(o.MDXTag,{name:"p",components:t},"You can nest ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<Media>")," objects up to 3 levels deep (without extending Bulma's SASS)."),r.a.createElement(c.e,{__position:3,__code:'<Media as="article">\n  <Media.Item align="left">\n    <Image.Container as="p" size={64}>\n      <Image src="https://bulma.io/images/placeholders/128x128.png" />\n    </Image.Container>\n  </Media.Item>\n  <Media.Item align="content">\n    <Content>\n      <p>\n        <strong>Barbara Middleton</strong>\n        <br />\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta\n        eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque\n        mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.\n        <br />\n        <small>\n          <a href="#like">Like</a> \xb7 <a href="#reply">Reply</a> \xb7 3 hrs\n        </small>\n      </p>\n    </Content>\n    <Media>\n      <Media.Item align="left">\n        <Image.Container as="p" size={48}>\n          <Image src="https://bulma.io/images/placeholders/128x128.png" />\n        </Image.Container>\n      </Media.Item>\n      <Media.Item align="content">\n        <Content>\n          <p>\n            <strong>Sean Brown</strong>\n            <br />\n            Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque\n            habitant morbi tristique senectus et netus et malesuada fames ac\n            turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis\n            leo feugiat.\n            <br />\n            <small>\n              <a href="#like">Like</a> \xb7 <a href="#reply">Reply</a> \xb7 2 hrs\n            </small>\n          </p>\n        </Content>\n        <Media>\n          Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu\n          lorem cursus ullamcorper sit amet nec massa.\n        </Media>\n        <Media>\n          Morbi vitae diam et purus tincidunt porttitor vel vitae augue.\n          Praesent malesuada metus sed pharetra euismod. Cras tellus odio,\n          tincidunt iaculis diam non, porta aliquet tortor.\n        </Media>\n      </Media.Item>\n    </Media>\n\n    <Media>\n      <Media.Item align="left">\n        <Image.Container as="p" size={48}>\n          <Image src="https://bulma.io/images/placeholders/96x96.png" />\n        </Image.Container>\n      </Media.Item>\n      <Media.Item align="content">\n        <Content>\n          <p>\n            <strong>Kayli Eunice </strong>\n            <br />\n            Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.\n            Maecenas varius felis sit amet magna vestibulum euismod malesuada\n            cursus libero. Vestibulum ante ipsum primis in faucibus orci\n            luctus et ultrices posuere cubilia Curae; Phasellus lacinia non\n            nisl id feugiat.\n            <br />\n            <small>\n              <a href="#like">Like</a> \xb7 <a href="#reply">Reply</a> \xb7 2 hrs\n            </small>\n          </p>\n        </Content>\n      </Media.Item>\n    </Media>\n  </Media.Item>\n</Media>\n<Media as="article">\n  <Media.Item align="left">\n    <Image.Container as="p" size={64}>\n      <Image src="https://bulma.io/images/placeholders/128x128.png" />\n    </Image.Container>\n  </Media.Item>\n  <Media.Item align="content">\n    <Field>\n      <Control as="p">\n        <Textarea placeholder="Add a comment..." />\n      </Control>\n    </Field>\n    <Field>\n      <Control as="p">\n        <Button>Post comment</Button>\n      </Control>\n    </Field>\n  </Media.Item>\n</Media>',__scope:{props:this?this.props:n,faHeart:l.t,faReply:l.B,faRetweet:l.C,FontAwesomeIcon:i.a,ForwardRefAsExoticComponentDoc:s.b,mapEnumerable:s.g,DEFAULTS:m.a,Level:u.a,Button:p.c,Checkbox:p.d,Content:p.f,Control:p.g,Delete:p.h,Field:p.i,Icon:p.m,Image:p.n,Label:p.p,Textarea:p.t,Media:d.a,MEDIA_ITEM_DEFAULTS:f.a}},r.a.createElement(d.a,{as:"article"},r.a.createElement(d.a.Item,{align:"left"},r.a.createElement(p.n.Container,{as:"p",size:64},r.a.createElement(p.n,{src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.f,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Barbara Middleton"),r.a.createElement("br",null),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.",r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"#like"},"Like")," \xb7 ",r.a.createElement("a",{href:"#reply"},"Reply")," \xb7 3 hrs"))),r.a.createElement(d.a,null,r.a.createElement(d.a.Item,{align:"left"},r.a.createElement(p.n.Container,{as:"p",size:48},r.a.createElement(p.n,{src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.f,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Sean Brown"),r.a.createElement("br",null),"Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.",r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"#like"},"Like")," \xb7 ",r.a.createElement("a",{href:"#reply"},"Reply")," \xb7 2 hrs"))),r.a.createElement(d.a,null,"Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa."),r.a.createElement(d.a,null,"Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor."))),r.a.createElement(d.a,null,r.a.createElement(d.a.Item,{align:"left"},r.a.createElement(p.n.Container,{as:"p",size:48},r.a.createElement(p.n,{src:"https://bulma.io/images/placeholders/96x96.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.f,null,r.a.createElement("p",null,r.a.createElement("strong",null,"Kayli Eunice "),r.a.createElement("br",null),"Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.",r.a.createElement("br",null),r.a.createElement("small",null,r.a.createElement("a",{href:"#like"},"Like")," \xb7 ",r.a.createElement("a",{href:"#reply"},"Reply")," \xb7 2 hrs"))))))),r.a.createElement(d.a,{as:"article"},r.a.createElement(d.a.Item,{align:"left"},r.a.createElement(p.n.Container,{as:"p",size:64},r.a.createElement(p.n,{src:"https://bulma.io/images/placeholders/128x128.png"}))),r.a.createElement(d.a.Item,{align:"content"},r.a.createElement(p.i,null,r.a.createElement(p.g,{as:"p"},r.a.createElement(p.t,{placeholder:"Add a comment..."}))),r.a.createElement(p.i,null,r.a.createElement(p.g,{as:"p"},r.a.createElement(p.c,null,"Post comment")))))),r.a.createElement(o.MDXTag,{name:"h2",components:t,props:{id:"api"}},"API"),r.a.createElement(s.b,{component:d.a,docPath:"/components/media-object"}),r.a.createElement(s.b,{component:d.a.Item,customize:!0,docPath:"/components/media-object",props:{align:{description:"change the position of the item inside the media container",typeName:"string",typeTip:Object(s.g)(f.a.alignments)}}}))}}])&&h(n.prototype,a),b&&h(n,b),t}()}}]);
//# sourceMappingURL=src-components-media-docs-media-docs.cf696350bf57be32043c.js.map