(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[2927],{"./source/02-uswds/navbar/navbar.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NavBar:function(){return NavBar},__namedExportsOrder:function(){return __namedExportsOrder}});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/html-react-parser/index.mjs"),_navbar_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/02-uswds/navbar/navbar.twig"),_navbar_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_navbar_twig__WEBPACK_IMPORTED_MODULE_1__);__webpack_require__("./source/02-uswds/uswds.es6.js");const NavBar=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_navbar_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args}));__webpack_exports__.default={title:"USWDS/Nav Bar",parameters:{docs:{description:{component:"Part of the USWDS Header component."}}}};const __namedExportsOrder=["NavBar"]},"./source/02-uswds/uswds.es6.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var _uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-accordion/src/index.js"),_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-header/src/index.js"),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-banner/src/index.js"),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-tooltip/src/index.js"),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-table/src/index.js"),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__),drupal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("drupal");__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_5__)().behaviors.uswds={attach(context){const initialElem=context===document?document.body:context;_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default().on(initialElem),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default().on(initialElem),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default().on(initialElem),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default().on(document.body),function gessoUswdsNavigation(context){context.querySelectorAll(".c-menu__subnav").forEach(((menu,index)=>{const button=menu.previousElementSibling;if(button.classList.contains("usa-nav__link")){const id=`extended-nav-section-${index}`;menu.id=id,button.setAttribute("aria-controls",id)}})),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default().on(context===document?document.body:context)}(context),window.uswdsPresent=!0}}},"./source/02-uswds/logo/logo.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"9c4fec0e82489f13f65d374248d6c8de6a1db57a97f52dec75858d2820f527b0945617a8519f19655ae157a2570361f73fa959da48f5dc607924bb39cc387d60",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-logo"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'>\n  <em class="usa-logo__text">\n    <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" title="'},{type:"output",stack:[{type:"Twig.expression.type.string",value:"Home"},{type:"Twig.expression.type.filter",value:"t",match:["|t","t"]}]},{type:"raw",value:'" aria-label="'},{type:"output",stack:[{type:"Twig.expression.type.string",value:"Home"},{type:"Twig.expression.type.filter",value:"t",match:["|t","t"]}]},{type:"raw",value:'">\n      '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"site_name",match:["site_name"]}]},{type:"raw",value:"\n    </a>\n  </em>\n</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/02-uswds/navbar/navbar.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/02-uswds/logo/logo.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"f92a07a62c798c1778e4083eda51e720293c88ba7180f6a0e067a9811291f354f048edf371191739b4f9b42bf318e585aa89b44e7542cc9a567f4df1c64a211b",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-navbar"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content",output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"9c4fec0e82489f13f65d374248d6c8de6a1db57a97f52dec75858d2820f527b0945617a8519f19655ae157a2570361f73fa959da48f5dc607924bb39cc387d60"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"site_name"},{type:"Twig.expression.type.string",value:"Project Title"},{type:"Twig.expression.type.filter",value:"t",match:["|t","t"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.string",value:"/"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:'  <button class="usa-menu-btn">'},{type:"output",stack:[{type:"Twig.expression.type.string",value:"Menu"},{type:"Twig.expression.type.filter",value:"t",match:["|t","t"]}]},{type:"raw",value:"</button>\n</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);