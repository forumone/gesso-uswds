(self.webpackChunkguswds=self.webpackChunkguswds||[]).push([[7056],{"./source/04-components/article/article.twig":function(module,__unused_webpack_exports,__webpack_require__){__webpack_require__("./source/04-components/wysiwyg/wysiwyg.twig"),__webpack_require__("./source/04-components/list/list.twig"),__webpack_require__("./source/04-components/author/author.twig"),__webpack_require__("./source/04-components/date/date.twig"),__webpack_require__("./source/04-components/button-group/button-group.twig"),__webpack_require__("./source/02-uswds/alert/alert.twig"),__webpack_require__("./source/04-components/page-title/page-title.twig");var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"5db3b6401b2fc85d20fdfa3cde46ee400b28dcd1f7fdc35ac7359fa84a0aad9a13a5bb86b6023be70acb3befee3f7a1466bf0a745511bdfeca214a007ac914eb",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"c-article"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<article "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"title_prefix",match:["title_prefix"]}]},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"title",output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"c8c185c734f2b3b420c8e2772326a8f33042f051032b94ce7bea8e72555d81d1852910bcfb449abdbea51895b13cdc4a22dfd6a423863198668771eb84eb8c40"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"page_title"},{type:"Twig.expression.type.variable",value:"title",match:["title"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"  "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"title_suffix",match:["title_suffix"]}]},{type:"raw",value:"\n\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"show_admin_info",match:["show_admin_info"]}],output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"admin_info",match:["admin_info"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"}],output:[{type:"raw",value:"      "},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"admin_info",output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"495b14daed3d2cccab2fab0c2652b1648f1afceb477c6599794d3542f180056152c3a330319856f65cebc1ed0d64b7957ad86cd1d4430dbee9d2fbd0fabbac52"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier_classes"},{type:"Twig.expression.type.string",value:"usa-alert--success"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"title"},{type:"Twig.expression.type.string",value:"Status message"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"content"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:'This is a status message about <em class="placeholder">something</em> that has been updated. <a href="#">This is a link</a>.'},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"a44ada4f72a320dc1939cb0fd2e32137dad2fd0a45f65cb214002a2afabae93efa52a8c865833b62714786d62d5c9d43e79123b7c214fd9b70c5e6f404c170ff"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"heading"},{type:"Twig.expression.type.string",value:"Primary tabs"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"element"},{type:"Twig.expression.type.string",value:"nav"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"button_modifier_classes"},{type:"Twig.expression.type.string",value:"c-button--base"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"buttons"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"View"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"active"},{type:"Twig.expression.type.bool",value:!0},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"Edit"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"Delete"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"text"},{type:"Twig.expression.type.string",value:"Revisions"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"      "}]}},{type:"raw",value:"    "}]}},{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"admin_info",output:[{type:"raw",value:"      "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"admin_info",match:["admin_info"]}]},{type:"raw",value:"\n    "}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"show_footer",match:["show_footer"]}],output:[{type:"raw",value:'    <footer class="c-article__footer">\n      '},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"footer",output:[{type:"raw",value:"        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"date",match:["date"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"}],output:[{type:"raw",value:"          "},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"date",output:[{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"4d73fed02fca28c3bb3121abf6034a60a616a855983f3de675653b23f20f3d741166af6647685c2bf9a55f011ebde9ba4484360daf728759e9331c7ea4f9cc9e"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"date_format"},{type:"Twig.expression.type.variable",value:"date_format",match:["date_format"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"          "}]}},{type:"raw",value:"        "}]}},{type:"raw",value:"\n        "},{type:"logic",token:{type:"Twig.logic.type.if",stack:[{type:"Twig.expression.type.variable",value:"author",match:["author"]},{type:"Twig.expression.type.operator.unary",value:"not",precidence:3,associativity:"rightToLeft",operator:"not"}],output:[{type:"raw",value:"          "},{type:"logic",token:{type:"Twig.logic.type.setcapture",key:"author",output:[{type:"raw",value:"            "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"40446538a9cbbdc28eb2aa5f0988e25a41317bfee0f19d01d19a5587406cbd7dc89c598c268c619745363271accd54291d0f6f9949e9a1341a6e0553bfb84fec"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"author"},{type:"Twig.expression.type.variable",value:"author_name",match:["author_name"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"          "}]}},{type:"raw",value:"        "}]}},{type:"raw",value:"\n        "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"5748ecaaa34e1c8fbb038bc5722c89a9a466c121b919785e1308e0630f38d0461cccae535d7fd173f74264622fe1f2d6dcf94d5dde258ee77d2f4bded5187e77"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"modifier_classes"},{type:"Twig.expression.type.string",value:"c-list--pipeline"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"list"},{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"content"},{type:"Twig.expression.type.variable",value:"date",match:["date"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"content"},{type:"Twig.expression.type.variable",value:"author",match:["author"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"\n        "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"author_picture",match:["author_picture"]}]},{type:"raw",value:"\n        "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"rdf_metadata",match:["rdf_metadata"]}]},{type:"raw",value:"\n      "}]}},{type:"raw",value:"    </footer>\n  "}]}},{type:"raw",value:"\n  "},{type:"logic",token:{type:"Twig.logic.type.block",blockName:"content",output:[{type:"raw",value:"    "},{type:"logic",token:{type:"Twig.logic.type.include",only:!1,ignoreMissing:!1,stack:[{type:"Twig.expression.type.string",value:"b80405ce930c7904b080c16c85c730b5e44decd48017743e3070e89fd1c20e375d805ba4032d941a3da3ee4166dd8283e7943388643145d9377550f44d0038a8"}],withStack:[{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"content"},{type:"Twig.expression.type.variable",value:"content",match:["content"]},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.object.end",value:"}",match:["}"]}]}},{type:"raw",value:"  "}]}},{type:"raw",value:"</article>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/author/author.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"40446538a9cbbdc28eb2aa5f0988e25a41317bfee0f19d01d19a5587406cbd7dc89c598c268c619745363271accd54291d0f6f9949e9a1341a6e0553bfb84fec",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"c-author"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:'>\n  <a href="'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"url",match:["url"]}]},{type:"raw",value:'">'},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"author",match:["author"]}]},{type:"raw",value:"</a>\n</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/list/list.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"5748ecaaa34e1c8fbb038bc5722c89a9a466c121b919785e1308e0630f38d0461cccae535d7fd173f74264622fe1f2d6dcf94d5dde258ee77d2f4bded5187e77",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"c-list"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<ul "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"logic",token:{type:"Twig.logic.type.for",keyVar:null,valueVar:"item",expression:[{type:"Twig.expression.type.variable",value:"list",match:["list"]}],output:[{type:"raw",value:"    <li>"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"item",match:["item"]},{type:"Twig.expression.type.key.period",key:"content"}]},{type:"raw",value:"</li>\n  "}]}},{type:"raw",value:"</ul>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/page-title/page-title.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"c8c185c734f2b3b420c8e2772326a8f33042f051032b94ce7bea8e72555d81d1852910bcfb449abdbea51895b13cdc4a22dfd6a423863198668771eb84eb8c40",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"c-page-title"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<h1 "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">"},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"page_title",match:["page_title"]}]},{type:"raw",value:"</h1>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}},"./source/04-components/wysiwyg/wysiwyg.twig":function(module,__unused_webpack_exports,__webpack_require__){var template=(0,__webpack_require__("./node_modules/twig/src/twig.js").twig)({namespaces:{global:"/home/runner/work/gesso-uswds/gesso-uswds/source/01-global",uswds:"/home/runner/work/gesso-uswds/gesso-uswds/source/02-uswds",layouts:"/home/runner/work/gesso-uswds/gesso-uswds/source/03-layouts",components:"/home/runner/work/gesso-uswds/gesso-uswds/source/04-components",templates:"/home/runner/work/gesso-uswds/gesso-uswds/source/05-templates",pages:"/home/runner/work/gesso-uswds/gesso-uswds/source/06-pages"},id:"b80405ce930c7904b080c16c85c730b5e44decd48017743e3070e89fd1c20e375d805ba4032d941a3da3ee4166dd8283e7943388643145d9377550f44d0038a8",data:[{type:"logic",token:{type:"Twig.logic.type.set",key:"classes",expression:[{type:"Twig.expression.type.array.start",value:"[",match:["["]},{type:"Twig.expression.type.string",value:"c-wysiwyg"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.variable",value:"modifier_classes",match:["modifier_classes"]},{type:"Twig.expression.type.string",value:""},{type:"Twig.expression.type.operator.binary",value:"?",precidence:16,associativity:"rightToLeft",operator:"?"},{type:"Twig.expression.type.comma"},{type:"Twig.expression.type.array.end",value:"]",match:["]"]},{type:"Twig.expression.type.filter",value:"join",match:["|join","join"],params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.string",value:" "},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]},{type:"Twig.expression.type.filter",value:"trim",match:["|trim","trim"]}]}},{type:"raw",value:"\n<div "},{type:"output",stack:[{type:"Twig.expression.type._function",fn:"add_attributes",params:[{type:"Twig.expression.type.parameter.start",value:"(",match:["("]},{type:"Twig.expression.type.object.start",value:"{",match:["{"]},{type:"Twig.expression.type.operator.binary",value:":",precidence:16,associativity:"rightToLeft",operator:":",key:"class"},{type:"Twig.expression.type.variable",value:"classes",match:["classes"]},{type:"Twig.expression.type.object.end",value:"}",match:["}"]},{type:"Twig.expression.type.parameter.end",value:")",match:[")"],expression:!1}]}]},{type:"raw",value:">\n  "},{type:"output",stack:[{type:"Twig.expression.type.variable",value:"content",match:["content"]}]},{type:"raw",value:"\n</div>\n"}],allowInlineIncludes:!0,rethrow:!0});module.exports=function(context){return template.render(context)}}}]);