(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{529:function(t,s,a){t.exports=a.p+"assets/img/cookie-result-01.a2f8d237.png"},806:function(t,s,a){"use strict";a.r(s);var n=a(10),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"koa2使用cookie"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#koa2使用cookie"}},[t._v("#")]),t._v(" koa2使用cookie")]),t._v(" "),n("h2",{attrs:{id:"使用方法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),n("p",[t._v("koa提供了从上下文直接读取、写入cookie的方法")]),t._v(" "),n("ul",[n("li",[t._v("ctx.cookies.get(name, [options]) 读取上下文请求中的cookie")]),t._v(" "),n("li",[t._v("ctx.cookies.set(name, value, [options]) 在上下文中写入cookie")])]),t._v(" "),n("p",[t._v("koa2 中操作的cookies是使用了npm的cookies模块，源码在"),n("a",{attrs:{href:"https://github.com/pillarjs/cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/pillarjs/cookies"),n("OutboundLink")],1),t._v("，所以在读写cookie的使用参数与该模块的使用一致。")]),t._v(" "),n("h2",{attrs:{id:"例子代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#例子代码"}},[t._v("#")]),t._v(" 例子代码")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Koa "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'koa'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Koa")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ctx")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index'")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookies"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cid'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        domain"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写cookie所在的域名")]),t._v("\n        path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 写cookie所在的路径")]),t._v("\n        maxAge"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie有效时长")]),t._v("\n        expires"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017-02-15'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cookie失效时间")]),t._v("\n        httpOnly"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否只用于http请求中获取")]),t._v("\n        overwrite"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 是否允许重写")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cookie is ok'")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ctx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\napp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[demo] cookie is starting at port 3000'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n")])])]),n("h2",{attrs:{id:"运行例子"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行例子"}},[t._v("#")]),t._v(" 运行例子")]),t._v(" "),n("h3",{attrs:{id:"执行脚本"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#执行脚本"}},[t._v("#")]),t._v(" 执行脚本")]),t._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[t._v("node index.js\n")])])]),n("h3",{attrs:{id:"运行结果"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#运行结果"}},[t._v("#")]),t._v(" 运行结果")]),t._v(" "),n("h4",{attrs:{id:"访问http-localhost-3000-index"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#访问http-localhost-3000-index"}},[t._v("#")]),t._v(" 访问"),n("a",{attrs:{href:"http://localhost:3000/index",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:3000/index"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("可以在控制台的cookie列表中中看到写在页面上的cookie")]),t._v(" "),n("li",[t._v("在控制台的console中使用document.cookie可以打印出在页面的所有cookie（需要是httpOnly设置false才能显示）")])]),t._v(" "),n("p",[n("img",{attrs:{src:a(529),alt:"cookie-result-01"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);