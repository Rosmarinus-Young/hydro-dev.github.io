(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{542:function(t,o,r){"use strict";r.r(o);var e=r(1),a=Object(e.a)({},(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"数据备份和恢复"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据备份和恢复"}},[t._v("#")]),t._v(" 数据备份和恢复")]),t._v(" "),r("h2",{attrs:{id:"备份"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#备份"}},[t._v("#")]),t._v(" 备份")]),t._v(" "),r("p",[t._v("为了保证数据安全，请定期备份。"),r("br"),t._v("\n可使用 MongoDB 自带的 "),r("a",{attrs:{href:"https://docs.mongodb.com/database-tools/mongodump/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongodump"),r("OutboundLink")],1),t._v(" 进行数据库备份。并将 "),r("code",[t._v("/data/file")]),t._v(" 文件夹备份即可。"),r("br"),t._v("\n对于数据库，请不要使用复制数据库数据文件的方法。请每次备份后检查生成的备份文件的大小和内容，确保备份成功。"),r("br"),t._v("\n请不要把备份数据和 Hydro 系统放在同一台机器上，这样数据丢失的风险仍然较高。")]),t._v(" "),r("h2",{attrs:{id:"恢复备份"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#恢复备份"}},[t._v("#")]),t._v(" 恢复备份")]),t._v(" "),r("p",[t._v("使用 MongoDB 自带的 "),r("a",{attrs:{href:"https://docs.mongodb.com/database-tools/mongorestore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("mongorestore"),r("OutboundLink")],1),t._v(" 导入备份的数据库文件，并还原 "),r("code",[t._v("/data/file")]),t._v(" 目录文件。"),r("br"),t._v("\n如果只是想不同机器之间迁移部署，只需要在"),r("strong",[t._v("停止 Hydro 和 MongoDB MinIO 服务后")]),t._v("将相关文件夹（通常为 "),r("code",[t._v("/data/db")]),t._v(" 与 "),r("code",[t._v("/data/file")]),t._v("）复制即可。")])])}),[],!1,null,null,null);o.default=a.exports}}]);