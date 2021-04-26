(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{541:function(s,t,a){"use strict";a.r(t);var n=a(1),r=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"自动安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动安装"}},[s._v("#")]),s._v(" 自动安装")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("自动安装脚本将会在您的机器上安装 MongoDB、MinIO、NodeJS。如果您的机器上已经安装过上述软件，无法保证脚本一定能成功运行。此时建议采用 "),a("RouterLink",{attrs:{to:"/install/common.html"}},[s._v("常规安装")]),s._v("。"),a("br"),s._v(" "),a("strong",[s._v("建议您在不保证自己可以手动安装成功的情况下采用自动脚本安装。")]),a("br"),s._v("\n若您希望在另外位置运行 MongoDB、S3 服务，您也应该使用 "),a("RouterLink",{attrs:{to:"/install/common.html"}},[s._v("常规安装")]),s._v("。"),a("br"),s._v("\n部分情况下脚本安装后可能会出现 "),a("code",[s._v("node: command not found")]),s._v(" 的问题，可通过向 "),a("code",[s._v("~/.bashrc")]),s._v(" 文件末尾添加以下内容并重启bash来解决：")],1),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NVM_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -z "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME-}")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${"),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("HOME")]),s._v("}")]),s._v('/.nvm"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" %s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${XDG_CONFIG_HOME}")]),s._v('/nvm"')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(". "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$NVM_DIR")]),s._v('/nvm.sh"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("h2",{attrs:{id:"运行脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行脚本"}},[s._v("#")]),s._v(" 运行脚本")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("我们推荐在 Ubuntu 上安装 Hydro，所以这里只提供了 Ubuntu 版本的自动安装脚本。")])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("Note")]),s._v(" "),a("p",[s._v("Hydro 不推荐您使用宝塔面板。这可能导致自动安装脚本无法正常使用。请尽可能使用纯净的系统并保证：")]),s._v(" "),a("ul",[a("li",[s._v("8888 9000 27017 端口空闲")]),s._v(" "),a("li",[s._v("/data/file /data/db 目录为空")]),s._v(" "),a("li",[s._v("没有使用除 nvm 之外的工具安装过 NodeJS，没有安装过 MongoDB")])])]),s._v(" "),a("p",[s._v("请选择适合您的服务器系统的自动安装脚本安装。"),a("strong",[s._v("注意您不应该在中途关闭脚本或是多次运行脚本")]),s._v("，这可能会带来不可预料的后果。")]),s._v(" "),a("p",[s._v("如果脚本运行过程中报错，并确认不是网络问题（如 NodeJS、NVM 没有正常下载），请 "),a("RouterLink",{attrs:{to:"/#联系我们"}},[s._v("联系我们")]),s._v("。")],1),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1604.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu 16.04")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-1804.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu 18.04")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -sSL https://cdn.jsdelivr.net/gh/hydro-dev/Hydro@master/install/ubuntu-2004.sh "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ubuntu 20.04")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果您需要更改数据目录等设置，可以将自动安装脚本下载到本地并编辑后再运行。")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("Tips")]),s._v(" "),a("p",[s._v("请注意在您的服务器的防火墙/安全组中放通对应端口。安装后的操作均需要使用 root 用户执行。")])]),s._v(" "),a("p",[s._v("默认的数据目录在 "),a("code",[s._v("/data/db")]),s._v(" 与 "),a("code",[s._v("/data/file")]),s._v(" 下，Hydro 将会监听 8888 端口，将会使用 pm2 管理进程。")]),s._v(" "),a("h2",{attrs:{id:"使用-pm2-守护程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-pm2-守护程序"}},[s._v("#")]),s._v(" 使用 pm2 守护程序")]),s._v(" "),a("ul",[a("li",[s._v("重启Hydro： "),a("code",[s._v("pm2 restart hydrooj")])]),s._v(" "),a("li",[s._v("重启数据库："),a("code",[s._v("pm2 restart mongodb")])]),s._v(" "),a("li",[s._v("重启沙箱："),a("code",[s._v("pm2 restart sandbox")])]),s._v(" "),a("li",[s._v("设置开机自启："),a("code",[s._v("pm2 save && pm2 startup")])])]),s._v(" "),a("p",[s._v("完成后请前往 "),a("RouterLink",{attrs:{to:"/install/init.html"}},[s._v("初始化")]),s._v("。")],1)])}),[],!1,null,null,null);t.default=r.exports}}]);