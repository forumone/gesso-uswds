(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[5849,8593],{"./source/02-uswds/footer/footer.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Footer:function(){return Footer},__namedExportsOrder:function(){return __namedExportsOrder}});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/html-react-parser/index.mjs"),_footer_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/02-uswds/footer/footer.twig"),_footer_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_footer_twig__WEBPACK_IMPORTED_MODULE_1__),_footer_yml__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./source/02-uswds/footer/footer.yml"),_footer_yml__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_footer_yml__WEBPACK_IMPORTED_MODULE_2__);__webpack_require__("./source/02-uswds/uswds.es6.js");const Footer=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_footer_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args}));Footer.args={..._footer_yml__WEBPACK_IMPORTED_MODULE_2___default()},__webpack_exports__.default={title:"USWDS/Footer",parameters:{docs:{description:{component:"See https://designsystem.digital.gov/components/footer/ and https://components.designsystem.digital.gov/components/detail/footer--default.html."}}}};const __namedExportsOrder=["Footer"]},"./source/02-uswds/uswds.es6.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var _uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-accordion/src/index.js"),_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-header/src/index.js"),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-banner/src/index.js"),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-tooltip/src/index.js"),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-table/src/index.js"),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__),drupal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("drupal");__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_5__)().behaviors.uswds={attach(context){const initialElem=context===document?document.body:context;_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default().on(initialElem),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default().on(initialElem),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default().on(initialElem),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default().on(document.body),function gessoUswdsNavigation(context){context.querySelectorAll(".c-menu__subnav").forEach(((menu,index)=>{const button=menu.previousElementSibling;if(button.classList.contains("usa-nav__link")){const id=`extended-nav-section-${index}`;menu.id=id,button.setAttribute("aria-controls",id)}})),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default().on(context===document?document.body:context)}(context),window.uswdsPresent=!0}}},"./source/02-uswds/footer/footer.yml":function(module){const doc=[{is_demo:!0,has_back_to_top:!0}];module.exports=doc.length<=1?doc[0]:doc},"./source/01-global/gesso.macro.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/04-components/tag-link/tag-link.twig"),__webpack_require__("./source/04-components/read-more-link/read-more-link.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"d15268241fb15dc7e3069c6ce9bff5f58b599347da53bdc499bb81cb02236e56c56d5dd19e58b79d718bf8734785074def09c1e31ee678ae0f63f7a026e962a3",data:[{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"read_more",parameters:["url","title","label","hide_description","description_prefix","image_path"],defaults:{label:[{type:"Twig.expression.type.string",value:"Read more"}],hide_description:[{type:"Twig.expression.type.bool",value:!0}],description_prefix:[{type:"Twig.expression.type.string",value:"about"}],image_path:[{type:"Twig.expression.type.string",value:"images"}]},output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"dd66f49c6b2b1be8eebaa0a9fada2ab010e86a05f87c4ce6e1c38f2cbe09d0e26ee15f59fcc0fcc3784fbec047e3e128e6b24ceef00cdee9d64de4019be3cf9b"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"hide_description"},{type:"Twig.expression.type.variable",value:"hide_description",match:["hide_description"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"description_prefix"},{type:"Twig.expression.type.variable",value:"description_prefix",match:["description_prefix"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"image_path"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"image_path",match:["image_path"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"tagLink",parameters:["url","title"],defaults:{},output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"cb2ac1e5923cbd64199b2a8a29311b14766dac253607def51c81092783dad5ce46a5ae8c387581165a0000045cc51409ca235e880723cf98d37b719bf4e0ccdf"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"sample_content",parameters:["content"],defaults:{content:[{type:"Twig.expression.type.string",value:"Example Content"}]},output:[{type:"raw",value:'  <div style="background:#333;border:1px solid #fff;color:#fff;padding:1em;">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n  </div>\n"}]}}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/02-uswds/footer/footer.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/01-global/gesso.macro.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"f4b409dc0030ad407ed194e98e845de2a04d0dc6785dd8ec6e453b89dfc0ac209150d034e1c396e071b552e6f900c1f96aeee247bd3cc88eba1bbff547fa4858",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-footer"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"usa-footer--slim"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.variable",value:"primary_content",match:["primary_content"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.import",expression:"'@global/gesso.macro.twig'",contextName:"macros",stack:[{type:"Twig.expression.type.string",value:"d15268241fb15dc7e3069c6ce9bff5f58b599347da53bdc499bb81cb02236e56c56d5dd19e58b79d718bf8734785074def09c1e31ee678ae0f63f7a026e962a3"}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"primary_content",expression:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Primary Content"}]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.variable",value:"secondary_content",match:["secondary_content"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.import",expression:"'@global/gesso.macro.twig'",contextName:"macros",stack:[{type:"Twig.expression.type.string",value:"d15268241fb15dc7e3069c6ce9bff5f58b599347da53bdc499bb81cb02236e56c56d5dd19e58b79d718bf8734785074def09c1e31ee678ae0f63f7a026e962a3"}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.set",key:"secondary_content",expression:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Secondary Content"}]}]}}]}},{type:"raw",value:"\n<footer "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:' role="contentinfo">\n  '},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"has_back_to_top",match:["has_back_to_top"]}],output:[{type:"raw",value:'    <div class="usa-footer__return-to-top grid-container">\n      <a href="#">'},{type:"output",stack:[{type:"Twig.expression.type.string",value:"Return to top"},{type:"Twig.expression.type.filter",value:"t",match:["|t","t"]}]},{type:"raw",value:"</a>\n    </div>\n  "}]}},{type:"raw",value:'  <div class="usa-footer__primary-section">\n    <div class="usa-footer__primary-container grid-row">\n      <div class="mobile-lg:grid-col-8">\n        <nav class="usa-footer__nav">\n          '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"primary",output:[{type:"raw",value:"            "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"primary_content",match:["primary_content"]}]},{type:"raw",value:"\n          "}]}},{type:"raw",value:'        </nav>\n      </div>\n    </div>\n  </div>\n  <div class="usa-footer__secondary-section">\n    <div class="grid-container">\n      <div class="grid-row grid-gap-2">\n        '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"secondary",output:[{type:"raw",value:"          "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"secondary_content",match:["secondary_content"]}]},{type:"raw",value:"\n        "}]}},{type:"raw",value:"      </div>\n    </div>\n  </div>\n</footer>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/02-uswds/tag/tag.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"17b2d60545f0728fd90d6ac9ed3eac788af04841bf37c05e4ed1cc3308b788ceff29afcedcfc445990ce00b4ea0d647882ebd8523552c7eec1c12da455c1bd7c",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-tag"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<span "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</span>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/tag-link/tag-link.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/02-uswds/tag/tag.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"cb2ac1e5923cbd64199b2a8a29311b14766dac253607def51c81092783dad5ce46a5ae8c387581165a0000045cc51409ca235e880723cf98d37b719bf4e0ccdf",data:[{type:"output",stack:[{type:"Twig.expression.type._function",fn:"attach_library",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"guswds/tag_link"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:"\n\n"},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"tag-link"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:'\n<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]}]},{type:"raw",value:'" rel="tag">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"17b2d60545f0728fd90d6ac9ed3eac788af04841bf37c05e4ed1cc3308b788ceff29afcedcfc445990ce00b4ea0d647882ebd8523552c7eec1c12da455c1bd7c"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</a>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);