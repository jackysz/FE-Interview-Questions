(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{189:function(t,s,a){"use strict";var n=a(22);t.exports=function(t,s){return!!t&&n((function(){s?t.call(null,(function(){}),1):t.call(null)}))}},190:function(t,s,a){"use strict";var n=a(100),e=a(101)(!1),r=[].indexOf,p=!!r&&1/[1].indexOf(1,-0)<0;n(n.P+n.F*(p||!a(189)(r)),"Array",{indexOf:function(t){return p?r.apply(this,arguments)||0:e(this,t,arguments[1])}})},682:function(t,s,a){"use strict";a.r(s);a(190);var n={mounted:function(){var t=-1!==location.href.indexOf("FE-Interview-Questions")?"59154049":"66575297",s=document.createElement("script");s.type="text/javascript",s.charset="UTF-8",s.src="http://tajs.qq.com/stats?sId=".concat(t),document.body.appendChild(s)}},e=a(10),r=Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"认识-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#认识-node-js"}},[t._v("#")]),t._v(" 认识 Node.js")]),t._v(" "),a("ul",[a("li",[t._v("Node 是一个服务器端 JavaScript 解释器")]),t._v(" "),a("li",[t._v("Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境")]),t._v(" "),a("li",[t._v("Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效")]),t._v(" "),a("li",[t._v("Node.js 的包管理器 npm，是全球最大的开源库生态系统")]),t._v(" "),a("li",[t._v("Node.js 是一门动态语言，运行在服务端的 Javascript")])]),t._v(" "),a("h2",{attrs:{id:"版本介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本介绍"}},[t._v("#")]),t._v(" 版本介绍")]),t._v(" "),a("ul",[a("li",[t._v("在命令窗口中输入 node -v 可以查看版本")]),t._v(" "),a("li",[t._v("0.x 完全不技术 ES6")]),t._v(" "),a("li",[t._v("4.x 部分支持 ES6 特性")]),t._v(" "),a("li",[t._v("5.x 部分支持ES6特性（比4.x多些），属于过渡产品，现在来说应该没有什么理由去用这个了")]),t._v(" "),a("li",[t._v("6.x 支持98%的 ES6 特性")]),t._v(" "),a("li",[t._v("8.x 支持 ES6 特性")])]),t._v(" "),a("h2",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://nodejs.org/en/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载安装文件"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("下载完后进行安装，建议安装到默认路径，注意不要有中文路径")]),t._v(" "),a("li",[t._v("配置环境变量")]),t._v(" "),a("li",[t._v("在命令窗口中输入 node -v，如果正常显示版本号则表示安装成功")])]),t._v(" "),a("h3",{attrs:{id:"nvm管理node版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nvm管理node版本"}},[t._v("#")]),t._v(" NVM管理Node版本")]),t._v(" "),a("blockquote",[a("p",[t._v("先安装一个 nvm（ https://github.com/creationix/nvm ）")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.2/install.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("bash")]),t._v("\n")])])]),a("p",[t._v("nvm 的全称是 "),a("strong",[t._v("Node Version Manager")]),t._v("，之所以需要这个工具，是因为 Node.js 的各种特性都没有稳定下来，所以我们经常由于老项目或尝新的原因，需要切换各种版本。")]),t._v(" "),a("p",[t._v("安装完成后，你的 shell 里面应该就有个 nvm 命令了，调用它试试")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nvm\n")])])]),a("p",[t._v("当看到有输出时，则 nvm 安装成功。")]),t._v(" "),a("p",[a("strong",[t._v("安装 Node.js")])]),t._v(" "),a("p",[t._v("使用 nvm 的命令安装 Node.js")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nvm install 0.12\n")])])]),a("p",[t._v("安装完成后，查看一下")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nvm ls\n")])])]),a("p",[t._v("这时候可以看到自己安装的所有 Node.js 版本，输出应如下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/alsotang/node-lessons/master/lesson0/1.png",alt:""}})]),t._v(" "),a("p",[t._v("（图1）")]),t._v(" "),a("p",[t._v("那个绿色小箭头的意思就是现在正在使用的版本，我这里是 "),a("code",[t._v("v0.10.29")]),t._v("。我还安装了 "),a("code",[t._v("v0.11.14")]),t._v("，但它并非我当前使用的版本。")]),t._v(" "),a("p",[t._v("如果你那里没有出现绿色小箭头的话，告诉 nvm 你要使用 "),a("code",[t._v("0.12.x")]),t._v(" 版本")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ nvm use 0.12\n")])])]),a("p",[t._v("然后再次查看，这时候小箭头应该出现了。")]),t._v(" "),a("p",[t._v("OK，我们在终端中输入")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("$ node\n")])])]),a("p",[t._v("REPL(read–eval–print loop) 应该就出来了，那我们就成功了。")]),t._v(" "),a("p",[t._v("随便敲两行命令玩玩吧。")]),t._v(" "),a("p",[t._v("比如 "),a("code",[t._v("> while (true) {}")]),t._v("，这时你的 CPU 应该会飚高。")]),t._v(" "),a("p",[a("strong",[t._v("完善安装")])]),t._v(" "),a("p",[t._v("上述过程完成后，有时会出现，当开启一个新的 shell 窗口时，找不到 node 命令的情况。")]),t._v(" "),a("p",[t._v("这种情况一般来自两个原因")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("shell 不知道 nvm 的存在")])]),t._v(" "),a("li",[a("p",[t._v("nvm 已经存在，但是没有 default 的 Node.js 版本可用。")])])]),t._v(" "),a("p",[a("strong",[t._v("解决方式：")])]),t._v(" "),a("p",[t._v("一、检查 "),a("code",[t._v("~/.profile")]),t._v(" 或者 "),a("code",[t._v("~/.bash_profile")]),t._v(" 中有没有这样两句")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('export NVM_DIR="/Users/YOURUSERNAME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm\n')])])]),a("p",[t._v("没有的话，加进去。这两句会在 bash 启动的时候被调用，然后注册 nvm 命令。")]),t._v(" "),a("p",[t._v("二、调用 "),a("code",[t._v("$ nvm ls")])]),t._v(" "),a("p",[t._v("看看像不像上述图1中一样，有 default 的指向。")]),t._v(" "),a("p",[t._v("如果没有的话，执行 "),a("code",[t._v("$ nvm alias default 0.12")]),t._v("再"),a("code",[t._v("$ nvm ls")])]),t._v(" "),a("h2",{attrs:{id:"node-js-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-模块"}},[t._v("#")]),t._v(" Node.js 模块")]),t._v(" "),a("p",[t._v("模块系统是 Node.js 最基本也是最常用的。一般情况模块可分为四类：")]),t._v(" "),a("ul",[a("li",[t._v("原生模块")]),t._v(" "),a("li",[t._v("文件模块")]),t._v(" "),a("li",[t._v("第三方模块")]),t._v(" "),a("li",[t._v("自定义模块")])]),t._v(" "),a("h3",{attrs:{id:"自定义模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义模块"}},[t._v("#")]),t._v(" 自定义模块")]),t._v(" "),a("ol",[a("li",[t._v("创建模块(b.js)")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//b.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//暴露方法 FunA")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("加载模块(a.js)")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//a.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FunA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./b.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//得到 b.js => FunA")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行 FunA，name = 'Tom'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 输出结果")]),t._v("\n")])])]),a("h3",{attrs:{id:"module-exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-exports"}},[t._v("#")]),t._v(" module.exports")]),t._v(" "),a("p",[t._v("module.exports 就 Node.js 用于对外暴露，或者说对外开放指定访问权限的一个对象。如上面的案例，如果没有这段代码")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("那么 "),a("code",[t._v("require('./b.js')")]),t._v(" 就会为 "),a("code",[t._v("undefined")]),t._v("。\n一个模块中有且仅有一个 "),a("code",[t._v("module.exports")]),t._v("，如果有多个那后面的则会覆盖前面的。")]),t._v(" "),a("h3",{attrs:{id:"exports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exports"}},[t._v("#")]),t._v(" exports")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("exports")]),t._v(" 是 "),a("code",[t._v("module")]),t._v(" 对象的一个属性，同时它也是一个对象。在很多时候一个 js 文件有多个需要暴露的方法或是对象，"),a("code",[t._v("module.exports")]),t._v(" 又只能暴露一个，那这个时候就要用到 "),a("code",[t._v("exports")]),t._v(":")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tom'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Sam'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nexports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("FunB "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FunA = exports,exports 是一个对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" FunA "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./b.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行 FunA，name = 'Tom'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行 FunB，name = 'Sam'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("当然在引入的时候也可以这样写")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//FunA = exports,exports 是一个对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("FunA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" FunB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./b.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行 FunA，name = 'Tom'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" name2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FunB")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 运行 FunB，name = 'Sam'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"npm-scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm-scripts"}},[t._v("#")]),t._v(" npm scripts")]),t._v(" "),a("h3",{attrs:{id:"npm版本管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm版本管理"}},[t._v("#")]),t._v(" NPM版本管理")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm -v\n")])])]),a("p",[a("strong",[t._v("使用nrm管理npm版本")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm install -g nrm\n")])])]),a("blockquote",[a("p",[t._v("执行命令"),a("code",[t._v("nrm ls")]),t._v("查看可选的源。")])]),t._v(" "),a("p"),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("*npm ---- https://registry.npmjs.org/\n\ncnpm --- http://r.cnpmjs.org/\n\ntaobao - http://registry.npm.taobao.org/\n\neu ----- http://registry.npmjs.eu/\n\nau ----- http://registry.npmjs.org.au/\n\nsl ----- http://npm.strongloop.com/\n\nnj ----- https://registry.nodejitsu.com/\n")])])]),a("p",[t._v("其中，带"),a("code",[t._v("*")]),t._v("的是当前使用的源，上面的输出表明当前源是官方源。")]),t._v(" "),a("ol",[a("li",[t._v("切换")])]),t._v(" "),a("p",[t._v("如果要切换到"),a("code",[t._v("taobao")]),t._v("源，执行命令 "),a("code",[t._v("nrm use taobao")]),t._v("。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("增加")])]),t._v(" "),a("p",[t._v("你可以增加定制的源，特别适用于添加企业内部的私有源，执行命令 "),a("code",[t._v("nrm add <registry> <url>")]),t._v("，其中"),a("code",[t._v("reigstry")]),t._v("为源名，"),a("code",[t._v("url")]),t._v("为源的路径。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nrm add registry http://registry.npm.frp.trmap.cn/\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("删除")])]),t._v(" "),a("p",[t._v("执行命令"),a("code",[t._v("nrm del <registry>")]),t._v("删除对应的源。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("测试速度")])]),t._v(" "),a("p",[t._v("你还可以通过 "),a("code",[t._v("nrm test")]),t._v(" 测试相应源的响应时间。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("nrm test npm             \n")])])]),a("h3",{attrs:{id:"什么是-npm-脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-npm-脚本"}},[t._v("#")]),t._v(" 什么是 npm 脚本")]),t._v(" "),a("blockquote",[a("p",[t._v("npm 允许在"),a("code",[t._v("package.json")]),t._v("文件里面，使用"),a("code",[t._v("scripts")]),t._v("字段定义脚本命令。"),a("code",[t._v("package.json")]),t._v(" 里面的"),a("code",[t._v("scripts")]),t._v(" 字段是一个对象。它的每一个属性，对应一段脚本。定义在"),a("code",[t._v("package.json")]),t._v("里面的脚本，就称为 "),a("code",[t._v("npm")]),t._v(" 脚本。")])]),t._v(" "),a("p",[t._v("查看当前项目的所有 npm 脚本命令，可以使用不带任何参数的"),a("code",[t._v("npm run")]),t._v("命令。")]),t._v(" "),a("h3",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("npm run")]),t._v(" 脚本名称")]),t._v(" "),a("li",[t._v("如果是并行执行（即同时的平行执行），可以使用&符号。\n"),a("code",[t._v("npm run script1.js & npm run script2.js")])]),t._v(" "),a("li",[t._v("如果是继发执行（即只有前一个任务成功，才执行下一个任务），可以使用&&符号。"),a("code",[t._v("npm run script1.js && npm run script2.js")])])]),t._v(" "),a("h3",{attrs:{id:"简写形式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简写形式"}},[t._v("#")]),t._v(" 简写形式")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("npm start")]),t._v(" 即 "),a("code",[t._v("npm run start")])]),t._v(" "),a("li",[a("code",[t._v("npm stop")]),t._v(" 即 "),a("code",[t._v("npm run stop")])]),t._v(" "),a("li",[a("code",[t._v("npm test")]),t._v(" 即 "),a("code",[t._v("npm run test")])]),t._v(" "),a("li",[a("code",[t._v("npm restart")]),t._v(" 即 "),a("code",[t._v("npm run stop && npm run restart && npm run start")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);