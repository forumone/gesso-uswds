(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[865],{"./source/02-uswds/fieldset/fieldset.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Fieldset:function(){return Fieldset},__namedExportsOrder:function(){return __namedExportsOrder}});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/html-react-parser/index.mjs"),_fieldset_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/02-uswds/fieldset/fieldset.twig"),_fieldset_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_fieldset_twig__WEBPACK_IMPORTED_MODULE_1__),_fieldset_yml__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./source/02-uswds/fieldset/fieldset.yml"),_fieldset_yml__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_fieldset_yml__WEBPACK_IMPORTED_MODULE_2__);__webpack_require__("./source/02-uswds/uswds.es6.js");const Fieldset=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_fieldset_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args}));Fieldset.args={..._fieldset_yml__WEBPACK_IMPORTED_MODULE_2___default()},__webpack_exports__.default={title:"USWDS/Fieldset"};const __namedExportsOrder=["Fieldset"]},"./source/02-uswds/uswds.es6.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var _uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-accordion/src/index.js"),_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0__),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-header/src/index.js"),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1__),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-banner/src/index.js"),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2__),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-tooltip/src/index.js"),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3__),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@uswds/uswds/packages/usa-table/src/index.js"),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4__),drupal__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("drupal");__webpack_require__.n(drupal__WEBPACK_IMPORTED_MODULE_5__)().behaviors.uswds={attach(context){const initialElem=context===document?document.body:context;_uswds_uswds_js_usa_accordion__WEBPACK_IMPORTED_MODULE_0___default().on(initialElem),_uswds_uswds_js_usa_banner__WEBPACK_IMPORTED_MODULE_2___default().on(initialElem),_uswds_uswds_js_usa_tooltip__WEBPACK_IMPORTED_MODULE_3___default().on(initialElem),_uswds_uswds_js_usa_table__WEBPACK_IMPORTED_MODULE_4___default().on(document.body),function gessoUswdsNavigation(context){context.querySelectorAll(".c-menu__subnav").forEach(((menu,index)=>{const button=menu.previousElementSibling;if(button.classList.contains("usa-nav__link")){const id=`extended-nav-section-${index}`;menu.id=id,button.setAttribute("aria-controls",id)}})),_uswds_uswds_js_usa_header__WEBPACK_IMPORTED_MODULE_1___default().on(context===document?document.body:context)}(context),window.uswdsPresent=!0}}},"./source/02-uswds/fieldset/fieldset.yml":function(module){const doc=[{legend:"Historical figures",description_id:"fieldset_desc",description:"<p>The description for this form field.</p>"}];module.exports=doc.length<=1?doc[0]:doc},"./source/02-uswds/fieldset/fieldset.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"389fe8b0787b69dc34fde6bb5975838018db3423eb00e55122082df9babbbed56e9d04070daf7476261a62fd9d8c3834a866d0b93ec9ebc2c3a4cea4f0313728",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-fieldset"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<fieldset "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"]},{type:"Twig.expression.type.variable",value:"description_id",match:["description_id"]},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:' aria-describedby="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"description_id",match:["description_id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:">\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"legend",match:["legend"]}],output:[{type:"raw",value:'    <legend class="usa-legend'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"legend_modifier_classes",match:["legend_modifier_classes"]}],output:[{type:"raw",value:" "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"legend_modifier_classes",match:["legend_modifier_classes"]}]}]}},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"legend",match:["legend"]}]},{type:"raw",value:"</legend>\n  "}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"]}],output:[{type:"raw",value:'    <div class="usa-hint"'},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"description_id",match:["description_id"]}],output:[{type:"raw",value:' id="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"description_id",match:["description_id"]}]},{type:"raw",value:'"'}]}},{type:"raw",value:">"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"description",match:["description"]}]},{type:"raw",value:"</div>\n  "}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"fieldset_content",output:[{type:"raw",value:"    Fieldset content.\n  "}]}},{type:"raw",value:"</fieldset>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);