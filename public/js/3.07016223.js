(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"32ee":function(t,e,s){"use strict";s("8545")},8545:function(t,e,s){},"8b24":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"row q-pa-lg"},[s("div",{staticClass:"col-12 text-h5 text-center"},[t._v("Latest News")]),s("div",{staticClass:"col-10"},[s("q-list",{attrs:{padding:""}},t._l(t.posts,(function(e,i){return s("q-item",{key:i},[s("q-item-section",{staticClass:"q-ml-none q-pa-md",attrs:{thumbnail:""}},[s("img",{staticStyle:{height:"170px",width:"300px"},attrs:{src:"http://localhost:3000/img/users/"+e.photo}})]),s("q-item-section",[s("q-item-label",{staticClass:"text-h6"},[t._v(t._s(e.title))]),s("q-item-label",{attrs:{caption:""}},[s("p",{staticClass:"link",on:{click:function(s){return t.preview(e)}}},[t._v(t._s(e.preview)+"...")]),s("div",[t._v("Categories: "+t._s(e.tags))])])],1)],1)})),1)],1)])])},a=[],n=s("ded3"),c=s.n(n),o=s("2f62"),l={computed:c()({},Object(o["c"])("admin",["posts"])),methods:c()(c()({},Object(o["b"])("admin",["edit"])),{},{preview(t){this.edit(t),this.$router.push(`/posts/${t.slug}`)}})},r=l,p=(s("32ee"),s("2877")),d=s("9989"),u=s("1c1c"),m=s("66e5"),h=s("4074"),b=s("0170"),v=s("eebe"),w=s.n(v),g=Object(p["a"])(r,i,a,!1,null,"1d8ef4eb",null);e["default"]=g.exports;w()(g,"components",{QPage:d["a"],QList:u["a"],QItem:m["a"],QItemSection:h["a"],QItemLabel:b["a"]})}}]);