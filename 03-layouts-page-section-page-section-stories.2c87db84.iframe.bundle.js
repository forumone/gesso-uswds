(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[3583],{"./source/03-layouts/page-section/page-section.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PageSection:function(){return PageSection},__namedExportsOrder:function(){return __namedExportsOrder}});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/html-react-parser/index.mjs"),_page_section_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/03-layouts/page-section/page-section.twig"),_page_section_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_page_section_twig__WEBPACK_IMPORTED_MODULE_1__),_page_section_yml__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./source/03-layouts/page-section/page-section.yml"),_page_section_yml__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_page_section_yml__WEBPACK_IMPORTED_MODULE_2__);const PageSection=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_page_section_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args}));PageSection.args={..._page_section_yml__WEBPACK_IMPORTED_MODULE_2___default()},__webpack_exports__.default={title:"Layouts/Page Section",argTypes:{is_demo:{table:{disable:!0}}}};const __namedExportsOrder=["PageSection"]},"./source/03-layouts/page-section/page-section.yml":function(module){const doc=[{section_title_element:"h2",section_title:"Section title",section_content:'<p>Donec id elit non mi <a href="#">porta gravida</a> at eget metus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nulla vitae elit libero, a pharetra augue. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>',has_constrain:!0,constrain_modifier_classes:""}];module.exports=doc.length<=1?doc[0]:doc},"./source/03-layouts/page-section/page-section.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"9a094794f67e1f420399e42e55c1f4c58d534c91fbdb1d654382994da5b26487a1bf2074bca70a62a353fdecdb1344bfe904756bdcc341c6c444106e06c6e37e",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"l-page-section"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.set",key:"constrain_classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"l-constrain"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"constrain_modifier_classes",match:["constrain_modifier_classes"]},{type:"Twig.expression.type.variable",value:"constrain_modifier_classes",match:["constrain_modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"has_constrain",match:["has_constrain"]}],output:[{type:"raw",value:'    <div class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"constrain_classes",match:["constrain_classes"]}]},{type:"raw",value:'">\n  '}]}},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"section_title",match:["section_title"]}],output:[{type:"raw",value:"    <"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_title_element",match:["section_title_element"]},{type:"Twig.expression.type.string",value:"h2"},{type:"Twig.expression.type.operator.binary",value:"?:",precidence:16,associativity:"rightToLeft",operator:"?:"}]},{type:"raw",value:">"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_title",match:["section_title"]}]},{type:"raw",value:"</"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_title_element",match:["section_title_element"]},{type:"Twig.expression.type.string",value:"h2"},{type:"Twig.expression.type.operator.binary",value:"?:",precidence:16,associativity:"rightToLeft",operator:"?:"}]},{type:"raw",value:">\n  "}]}},{type:"raw",value:"\n  "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"section_content",match:["section_content"]}]},{type:"raw",value:"\n\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"has_constrain",match:["has_constrain"]}],output:[{type:"raw",value:"    </div>\n  "}]}},{type:"raw",value:"</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);