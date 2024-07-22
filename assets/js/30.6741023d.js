(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{284:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"正则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#创建-两种方式"}},[t._v("创建 两种方式")]),s("ul",[s("li",[s("a",{attrs:{href:"#对比"}},[t._v("对比")])])])]),s("li",[s("a",{attrs:{href:"#修饰符"}},[t._v("修饰符")])]),s("li",[s("a",{attrs:{href:"#转义字符"}},[t._v("转义字符")])]),s("li",[s("a",{attrs:{href:"#量词"}},[t._v("量词")])]),s("li",[s("a",{attrs:{href:"#正则属性"}},[t._v("正则属性")])]),s("li",[s("a",{attrs:{href:"#正则方法"}},[t._v("正则方法")])]),s("li",[s("a",{attrs:{href:"#字符串方法使用正则"}},[t._v("字符串方法使用正则")])]),s("li",[s("a",{attrs:{href:"#中括号"}},[t._v("中括号")])]),s("li",[s("a",{attrs:{href:"#量词种类"}},[t._v("量词种类")]),s("ul",[s("li",[s("a",{attrs:{href:"#贪婪"}},[t._v("贪婪")])])])]),s("li",[s("a",{attrs:{href:"#非捕获组"}},[t._v("非捕获组")])]),s("li",[s("a",{attrs:{href:"#"}},[t._v("?=")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"创建-两种方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-两种方式","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建 两种方式")]),t._v(" "),s("ul",[s("li",[t._v("1、 直接量定义  /正则/修饰符")]),t._v(" "),s("li",[t._v("2、 对象定义    new RegExp(字符串,修饰符)\n"),s("ul",[s("li",[t._v("传递的是字符串,需要对特殊字符进行双重转义")])])])]),t._v(" "),s("h3",{attrs:{id:"对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对比","aria-hidden":"true"}},[t._v("#")]),t._v(" 对比")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  字面量模式         等价的字符串\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bc\\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("at"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\[bc\\\\]at"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\\d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\\d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\\\d.\\\\d{1,2}"')]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/user/:uid/:name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\:\\w+/g")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" \\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\\w"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n    \n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这里注意 \\\\w  我们要他的\\  里所有的第一个\\代表转义 最终我们要得到(\\w) 所以就是\\\\  ")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RegExp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\:\\\\w+'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'g'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"修饰符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修饰符","aria-hidden":"true"}},[t._v("#")]),t._v(" 修饰符")]),t._v(" "),s("ul",[s("li",[t._v("常用的就i忽略大小写,g全局匹配")])]),t._v(" "),s("h2",{attrs:{id:"转义字符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#转义字符","aria-hidden":"true"}},[t._v("#")]),t._v(" 转义字符")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  \\  转义符\n  \\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("换行")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newline"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \\s "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("空格")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("space"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \\"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" 非空格\n  \\' 单引号\n  \\\" 双引号\n  \\"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("d")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("digit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("数字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("正则中专门用来代表数字的"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("等级于 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \\"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" 非数字字符"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("等价于"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  \\w 数字、字母、下划线\n  \\"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),t._v(" 非数字、非字母、非下划线\n  \\b "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("单词的边界，独立的部分")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("起始位子、结束位子、空格"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("，它不匹配某个可见的字符，而是匹配位子")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("border"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \\"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("B")]),t._v(" 非边界的部分\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  任意一个字符\n  \\"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 真正的点  匹配除\\n换行以外的任意单字符  匹配包括\\n在内的所有字符  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("使用")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"量词"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量词","aria-hidden":"true"}},[t._v("#")]),t._v(" 量词")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("\n所有的量词都需要放在"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("里面\nn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m代表数字\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     前一项重复n次\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    前一项至少重复n次，最多不限\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   前一项至少重复n次"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("最多重复m次\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("      前一项至少重复"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("次，最多不限     等价"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n？     前一项至少重复"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("次，最多重复"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("次，也就是说前一项是可选的，等价于"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("      前一项至少重复"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("次，最多不限，也就是说前一项是可选的，等价"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("      它出现在中括号里代表排除的意思"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("在中括号的外面标示字符串开始的位子\n$      字符串结束的位子\n\n")])])]),s("h2",{attrs:{id:"正则属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则属性","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则属性")]),t._v(" "),s("ul",[s("li",[t._v("正则对象的属性\n"),s("ul",[s("li",[t._v("$n n代表()内匹配数据")]),t._v(" "),s("li",[t._v("RegExp 对象上的方法  RegExp.$n\n"),s("ul",[s("li",[t._v("在replace方法里用 RegExp.$1 匹配的都是最后一个 可以用 arguments[n] 获取,但是不要用箭头函数(无arguments)")]),t._v(" "),s("li",[t._v("当正则 匹配后就可以用(不匹配拿不到) RegExp.$n 匹配分组的数据  n代表数字 1代表第一个分组")])])]),t._v(" "),s("li")])]),t._v(" "),s("li",[t._v("正则原型上的属性")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  global 布尔值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("表示是否设置了g标志\n  ignoreCase 布尔值"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("表示是否设置了i标志\n  lastIndex 整数"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("表示开始搜索下一个匹配项的字符位置"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("从0开始")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("带g才有效果 不然每次都是从头开始"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  multiline 布尔值 表示是否设置了m表示\n  source 正则表达式的字符串表示\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pattern "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\[bc\\]at/i")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("global")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ignoreCase")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" \n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lastIndex")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("pattern"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\[bc\\]at"')]),t._v("\n")])])]),s("h2",{attrs:{id:"正则方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正则方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则方法")]),t._v(" "),s("ul",[s("li",[t._v("匹配规则:默认前一项的结束是下一项的开始"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  exec 匹配内容\n    不带g\n      功能和match 是一样 第一个是匹配的内容 第二个是分组内容\n    带g\n      match 带g　返回的数组　全是匹配的内容　和不带g返回的　完全不一样\n      exec　要执行一次　和　不带是一样的　只会匹配到第一个　\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("　　　再次　执行的时候　会匹配到第二个")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("索引和匹配的内容　跟着变化"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("，　他们返回的数据格式　和不带g是一样的\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/url1/:id/:name'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\:([^\\/]+)/g")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  test\n    正则"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    返回布尔值\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"字符串方法使用正则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串方法使用正则","aria-hidden":"true"}},[t._v("#")]),t._v(" 字符串方法使用正则")]),t._v(" "),s("ul",[s("li",[t._v("match 和 exec 主要是做匹配数据 replace 也可以匹配数据 但他主要是做替换")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("  match 匹配内容\n    不带g 返回数组 第一个是匹配的内容 第二个开始 "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("就是")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("内的匹配内容 index"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("input等 以文本下标显示不占数字的length \n          在使用数组方法的时候 文本下标 不会循环出来\n          小技巧"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 在多个分组的时候 索引从一开始到最后 全是分组内容\n      \n    带g   返回数组 里面全是匹配的内容\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/url1/:id/:name'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\:([^\\/]+)/")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" match "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("match"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  replace   \n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("函数接收的参数")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("返回替换后的内容"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("原来的不变"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n      第一个是匹配到的内容 \n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("第二个是分组匹配的内容")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("若多个分组 下面的索引往后靠"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("要是没有就往前挪"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      第三个是索引\n      第死个是原字符串\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/url1/:id/:name'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\:([^\\/]+)/")]),t._v("\n    str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  split \n    用来切割字符串 将字符串转换成数组\n    第一个可以是字符串 也可以是 正则\n")])])]),s("h2",{attrs:{id:"中括号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#中括号","aria-hidden":"true"}},[t._v("#")]),t._v(" 中括号")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("              匹配中括号里的任意一个字符"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("只代表一个字符\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           区间的写法，标示从"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("到"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v("之间的任意的一个字符\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z之间的任意一个小写字母\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),t._v("之间的任意一个大写字母 \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("zA"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("     匹配a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("匹配任何字母和数字"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("               "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("排除掉某个字符")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("仅仅用在中括号内表达这个意思"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\\u4e00"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("\\u9fa5"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" 中文的区间"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("包含所有的汉字\n\nred"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("green 标示red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("green "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("这三个单词中的任何一个")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("至少"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"量词种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#量词种类","aria-hidden":"true"}},[t._v("#")]),t._v(" 量词种类")]),t._v(" "),s("h3",{attrs:{id:"贪婪"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#贪婪","aria-hidden":"true"}},[t._v("#")]),t._v(" 贪婪")]),t._v(" "),s("ul",[s("li",[t._v("尽量多的匹配\n"),s("ul",[s("li",[t._v("?匹配0或者1个 贪婪模式先匹配1个 当1匹配不到的时候 在从上一次匹配的下一个位子开始 匹配0")]),t._v(" "),s("li",[t._v("*匹配0或者至多个 规律同上")]),t._v(" "),s("li",[t._v("+匹配1或者至多个 规律同上")]),t._v(" "),s("li",[t._v("x{n,m} 和 x{n,} 同上")])])]),t._v(" "),s("li",[t._v("x?"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   aaa  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" aa a\n")])])])]),t._v(" "),s("li",[t._v("x*"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   aaa  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   aaa1a  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  \n")])])])]),t._v(" "),s("li",[t._v("x+"),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("   aaa  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   aaa1a  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n   aaa1aa  a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aaa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'aa'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("- x{n,m}  x{n,}\n  -  同上 例子就写了\n### 懒惰\n- 尽量少匹配\n- x??\n  ```js\n    aaa  a??a =>  ['a','a','a']\n  ```\n- x*?\n  ```js\n    aaa a*?a => ['a','a','a']\n  ```\n- x+?\n  ```js\n    aaa a+?a => ['aa']\n  ```\n## 捕获组\n-  捕获组:使用括号作为单独的单元来对待的一种方式,可通过程序方便地拿到分组对应的匹配内容\n- (\\d\\d)\\1 == (\\d\\d)\\d\\d  也就是说是一个ABAB形式的\n```js\n// 1、匹配连续出现的数字\nlet str = 'aa1212ss'\nlet rs = str.match(/(\\d\\d)\\1/g)\nconsole.log(rs) => [1212]\n// 2、匹配html标签\nlet str = '<div id='ss'><a>123</a></div>'\nlet rs = str.match(/<([a-z]+).+?<\\/\\1>/)\nconsole.log(rs)\n")])])]),s("h2",{attrs:{id:"非捕获组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#非捕获组","aria-hidden":"true"}},[t._v("#")]),t._v(" 非捕获组")]),t._v(" "),s("ul",[s("li",[t._v("分组括号里第一个是?就是非捕获组(不计算在分组内)")]),t._v(" "),s("li",[t._v("好处 不会讲匹配到的字符存储在内存种 从而节省内存")]),t._v(" "),s("li",[t._v("一般常用的就是 (?:xxx)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ad123asd'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" rs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?:\\d)/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("rs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结果没有分组的内容 数组长度是1")]),t._v("\n")])])]),s("h2",{attrs:{id:""}},[s("a",{staticClass:"header-anchor",attrs:{href:"#","aria-hidden":"true"}},[t._v("#")]),t._v(" ?=")]),t._v(" "),s("ul",[s("li",[t._v("前瞻 exp1(?=exp2) 查找exp2前面的exp1")]),t._v(" "),s("li",[t._v("后顾 (?<=exp2)exp1 查找exp2前面的exp1(js不支持)")]),t._v(" "),s("li",[t._v("负前瞻 exp1(?exp2) 查找后面不是exp2的exp1")]),t._v(" "),s("li",[t._v("负后瞻 (?<!exp2)exp1 查找前面不是exp2的exp1(js不支持)")])])])}],!1,null,null,null);a.default=r.exports}}]);