(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[7449,8593],{"./source/03-layouts/grid/grid.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},FourColumn:function(){return FourColumn},SixColumn:function(){return SixColumn},ThreeColumn:function(){return ThreeColumn},TwoColumn:function(){return TwoColumn},__namedExportsOrder:function(){return __namedExportsOrder}});var html_react_parser__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/html-react-parser/index.mjs"),_grid_twig__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./source/03-layouts/grid/grid.twig"),_grid_twig__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_grid_twig__WEBPACK_IMPORTED_MODULE_1__),_grid_yml__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./source/03-layouts/grid/grid.yml"),_grid_yml__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_grid_yml__WEBPACK_IMPORTED_MODULE_2__);const Default=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_grid_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args}));Default.args={..._grid_yml__WEBPACK_IMPORTED_MODULE_2___default()};const TwoColumn=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_grid_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args,num_of_cols:"2"}));TwoColumn.args={..._grid_yml__WEBPACK_IMPORTED_MODULE_2___default()};const ThreeColumn=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_grid_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args,num_of_cols:"3"}));ThreeColumn.args={..._grid_yml__WEBPACK_IMPORTED_MODULE_2___default()};const FourColumn=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_grid_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args,num_of_cols:"4"}));FourColumn.args={..._grid_yml__WEBPACK_IMPORTED_MODULE_2___default()};const SixColumn=args=>(0,html_react_parser__WEBPACK_IMPORTED_MODULE_0__.ZP)(_grid_twig__WEBPACK_IMPORTED_MODULE_1___default()({...args,num_of_cols:"6"}));SixColumn.args={..._grid_yml__WEBPACK_IMPORTED_MODULE_2___default()},__webpack_exports__.default={title:"Layouts/Grid",argTypes:{is_demo:{table:{disable:!0}}}};const __namedExportsOrder=["Default","TwoColumn","ThreeColumn","FourColumn","SixColumn"]},"./source/03-layouts/grid/grid.yml":function(module){const doc=[{is_demo:!0,num_of_cols:"",modifier_classes:"",grid_content:""}];module.exports=doc.length<=1?doc[0]:doc},"./source/01-global/gesso.macro.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/04-components/tag-link/tag-link.twig"),__webpack_require__("./source/04-components/read-more-link/read-more-link.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"d15268241fb15dc7e3069c6ce9bff5f58b599347da53bdc499bb81cb02236e56c56d5dd19e58b79d718bf8734785074def09c1e31ee678ae0f63f7a026e962a3",data:[{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"read_more",parameters:["url","title","label","hide_description","description_prefix","image_path"],defaults:{label:[{type:"Twig.expression.type.string",value:"Read more"}],hide_description:[{type:"Twig.expression.type.bool",value:!0}],description_prefix:[{type:"Twig.expression.type.string",value:"about"}],image_path:[{type:"Twig.expression.type.string",value:"images"}]},output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"dd66f49c6b2b1be8eebaa0a9fada2ab010e86a05f87c4ce6e1c38f2cbe09d0e26ee15f59fcc0fcc3784fbec047e3e128e6b24ceef00cdee9d64de4019be3cf9b"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"label"},{type:"Twig.expression.type.variable",value:"label",match:["label"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"hide_description"},{type:"Twig.expression.type.variable",value:"hide_description",match:["hide_description"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"description_prefix"},{type:"Twig.expression.type.variable",value:"description_prefix",match:["description_prefix"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.string",value:"image_path"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"image_path",match:["image_path"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"tagLink",parameters:["url","title"],defaults:{},output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"cb2ac1e5923cbd64199b2a8a29311b14766dac253607def51c81092783dad5ce46a5ae8c387581165a0000045cc51409ca235e880723cf98d37b719bf4e0ccdf"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"url"},{type:"Twig.expression.type.variable",value:"url",match:["url"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.macro",macroName:"sample_content",parameters:["content"],defaults:{content:[{type:"Twig.expression.type.string",value:"Example Content"}]},output:[{type:"raw",value:'  <div style="background:#333;border:1px solid #fff;color:#fff;padding:1em;">\n    '},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n  </div>\n"}]}}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/02-uswds/tag/tag.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"17b2d60545f0728fd90d6ac9ed3eac788af04841bf37c05e4ed1cc3308b788ceff29afcedcfc445990ce00b4ea0d647882ebd8523552c7eec1c12da455c1bd7c",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"usa-tag"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<span "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"text",match:["text"]}]},{type:"raw",value:"</span>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/03-layouts/grid/grid.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/01-global/gesso.macro.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"01f85839707ba6e6b9c73726a3cbfce3ebfce213cd8026bd2eacffa3079f343ae9f2dcbbfb3db5130d35ed4f1bae4f9a434a39d330a2db133fffba00ef873efa",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"l-grid"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"num_of_cols",match:["num_of_cols"]},{type:"Twig.expression.type.subexpression.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"l-grid--"},{type:"Twig.expression.type.variable",value:"num_of_cols",match:["num_of_cols"]},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"},{type:"Twig.expression.type.string",value:"-col"},{type:"Twig.expression.type.operator.binary",value:"~",precidence:6,associativity:"leftToRight",operator:"~"}]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n"},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"is_demo",match:["is_demo"]},{type:"Twig.expression.type.variable",value:"grid_content",match:["grid_content"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"},{type:"Twig.expression.type.operator.binary",value:"and",precidence:13,associativity:"leftToRight",operator:"and"}],output:[{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.import",expression:"'@global/gesso.macro.twig'",contextName:"macros",stack:[{type:"Twig.expression.type.string",value:"d15268241fb15dc7e3069c6ce9bff5f58b599347da53bdc499bb81cb02236e56c56d5dd19e58b79d718bf8734785074def09c1e31ee678ae0f63f7a026e962a3"}]}},{type:"raw",value:"  "},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"grid_content",output:[{type:"raw",value:"    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 1"}]}]},{type:"raw",value:"\n    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 2"}]}]},{type:"raw",value:"\n    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 3"}]}]},{type:"raw",value:"\n    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 4"}]}]},{type:"raw",value:"\n    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 5"}]}]},{type:"raw",value:"\n    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"macros",match:["macros"]},{type:"Twig.expression.type.key.period",key:"sample_content"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!0,params:[{type:"Twig.expression.type.string",value:"Grid Item 6"}]}]},{type:"raw",value:"\n  "}]}}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content",output:[{type:"raw",value:"    "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"grid_content",match:["grid_content"]}]},{type:"raw",value:"\n  "}]}},{type:"raw",value:"</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/tag-link/tag-link.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/02-uswds/tag/tag.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"cb2ac1e5923cbd64199b2a8a29311b14766dac253607def51c81092783dad5ce46a5ae8c387581165a0000045cc51409ca235e880723cf98d37b719bf4e0ccdf",data:[{type:"output",stack:[{type:"Twig.expression.type._function",fn:"attach_library",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:"guswds/tag_link"},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:"\n\n"},{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"tag-link"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:'\n<a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'" class="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"classes",match:["classes"]}]},{type:"raw",value:'" rel="tag">\n  '},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"17b2d60545f0728fd90d6ac9ed3eac788af04841bf37c05e4ed1cc3308b788ceff29afcedcfc445990ce00b4ea0d647882ebd8523552c7eec1c12da455c1bd7c"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"</a>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);