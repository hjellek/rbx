(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./src/__docs__/customize.mdx":function(e,n,a){"use strict";a.r(n),a.d(n,"default",function(){return u});var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js");function m(e){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}function l(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function c(e,n){return!n||"object"!==m(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function i(e,n){return(i=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var u=function(e){function n(e){var a;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(a=c(this,s(n).call(this,e))).layout=null,a}var a,t,m;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&i(e,n)}(n,o.a.Component),a=n,(t=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"customize-rbx"}},"Customize rbx"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Sometimes the default ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://bulma.io"}},"Bulma")," styles aren't enough.\nThat's a feature and not a bug, and the Bulma docs are quick to demonstrate ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://bulma.io/documentation/customize/"}},"how to customize the SASS")," to your liking."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"modifying-sass-variables"}},"Modifying SASS variables"),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you're modifying SASS values without introducing anything new, you don't have to keep reading. If you are ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"adding")," or ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"removing")," variables (or ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"adding")," to or ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"removing")," from SASS arrays), the following docs ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"are")," relevant."),o.a.createElement(r.MDXTag,{name:"p",components:n},"There are many places in ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"rbx")," that leverage these variable overrides: the global modifier helpers (located at ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"/base/helpers"),") as well as components like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button>")," (and more than 20 others)."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"overview"}},"Overview"),o.a.createElement(r.MDXTag,{name:"p",components:n},"Before we get on to an example, here's an overview of how we use ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"TypeScript")," to customize what props are supported."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Take a look at the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dfee/rbx/blob/master/src/base/helpers/variables.ts"}},"source code for the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"a"},"helpers variables")),", or the ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/dfee/rbx/blob/master/src/elements/button/button.tsx"}},"source code for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"a"},"<Button>")),", and you'll notice two very important expressions:"),o.a.createElement(r.MDXTag,{name:"ol",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"DEFAULTS")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<COMPONOENT>_DEFAULTS")," variable that defines the defaults in a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"tuple()")),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ol"},"a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Variables")," or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<Component>Variables")," ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"type")," that uses those defaults to construct a ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"li"},"TypeScript")," type.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Looking deeper at the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"DEFFAULTS"),", that's where the ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Bulma")," defaults are defined in code.\nFor example, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"colors")," on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DEFAULTS"),", and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"sizes")," on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BUTTON_DEFAULTS"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Looking deeper at the ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Variables"),", you'll realize that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Variables")," is actually just a merge of ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"VariablesDefaults")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"VariablesOverrides"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Below we'll talk more about how to override these."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"an-example-introducing-a-new-color"}},"An example: introducing a new color"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To add the color ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"react"')," (the React logo-color) so that all components can use it (across props like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"textColor")," and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"backgroundColor")," as well as with component-specific props like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"color")," on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button>"),"), you'll need to extend the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"$colors")," variable before import Bulma's SASS."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Your new SASS file (imported somewhere in your App) will look something like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'# App.sass\n\n@charset \'utf-8\';\n\n@import "~bulma/sass/utilities/functions"\n\n// add new colors\n$react: #00d8ff !default\n$react-invert: findColorInvert($react) !default\n$custom-colors: ("react": ($react, $react-invert))\n\n// Import Bulma styles\n@import "~bulma/bulma"\n\n// Import rbx style fixes (**very simple**)\n@import "~rbx/rbx"\n')),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"update-the-theme"}},"Update the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"<Theme>")),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you've altered a ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://bulma.io/documentation/modifiers/"}},"Bulma modifier"),", you'll need to update the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Theme>")," at the root of your App, so that ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/prop-types"}},"PropTypes")," uses the proper values for prop type-checking."),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"Note:")," ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://www.npmjs.com/package/prop-types"}},o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"a"},"PropTypes"))," only provides literal type-checks on the global helpers \u2013\xa0those located in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"base/helpers"),". I.e. ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"PropTypes")," will check that your new ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"react"')," color is in fact a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"textColor"),", but it will ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"not")," check that ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},'"react"')," is a valid ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"color")," for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button>"),", due to limitations on ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"PropTypes"),".\nHowever, ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"TypeScript")," can perform this extended validation (as described in the next section).")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'// App.js\n\nimport { makeRootValidatingTransform } from "rbx/base/helpers";\nimport { DEFAULTS } from "rbx/base/helpers/variables";\nimport { tuple } from "rbx/utils";\n\nimport { MyAppNavbar } from "./components";\nimport "./App.sass";\n\nconst COLORS = tuple(...DEFAULTS.colors, "react");\n\nconst themeValue = {\n  transform: makeRootValidatingTransform({ colors: COLORS })\n};\n\nconst App = () => (\n  <ThemeContext.Provider value={themeValue}>\n    {/* supply your children components as you normally would */}\n    <MyAppNavbar />\n    <Button color="react">Hello world</Button>\n  </ThemeContext.Provider>\n);\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you're not modifying a ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Bulma modifier"),", but instead are extending a component's ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"_","DEFAULTS")," (e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"BUTTON_DEFAULTS"),"), you don't need to explicitly set the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Theme>"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you're not using ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"TypeScript"),", then ",o.a.createElement(r.MDXTag,{name:"strong",components:n,parentName:"p"},"you're done"),". Otherwise..."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"updating-the-typescript-types"}},"Updating the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"h3"},"TypeScript")," types"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To continue providing type-safety and prop auto-completion with this new configuration, you'll need to add an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rbx.d.ts")," file to your project.\nFor adding a color (as demonstrated above), this file will look like:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},'// rbx.d.ts\n\nimport "rbx/base/helpers/variables";\nimport { VariablesDefaults } from "rbx/base/helpers/variables";\n\ndeclare module "rbx/base/helpers/variables" {\n  interface VariablesOverrides {\n    colors: VariablesDefaults["colors"] | "react"; // we added `react`!\n  }\n}\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"If you instead modify a component's defaults, and not a ",o.a.createElement(r.MDXTag,{name:"em",components:n,parentName:"p"},"Bulma modifier"),", simply use the template above, but with the appropriate ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<COMPONENT>_DEFAULTS"),"."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now, you'll continue to have auto-complete support, and type-safety while you develop."))}}])&&l(a.prototype,t),m&&l(a,m),n}()}}]);
//# sourceMappingURL=src-docs-customize.cf696350bf57be32043c.js.map