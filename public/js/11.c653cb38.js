(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"8b48":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-page",{attrs:{padding:""}},[i("q-form",{attrs:{autocorrect:"on",autocapitalize:"on",autocomplete:"on",spellcheck:"true"},on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[i("div",{staticClass:"row q-pa-lg"},[i("div",{staticClass:"col-12 text-center text-h5 text-grey-9 q-pa-lg"},[e._v("\n        Create New Feed\n      ")]),i("div",{staticClass:"col-6 q-pa-lg"},[i("q-input",{attrs:{filled:"",label:"News Title",rules:e.rules},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),i("div",{staticClass:"col-6 q-pa-lg"},[i("q-input",{attrs:{filled:"",label:"News Preview",rules:e.rules},model:{value:e.preview,callback:function(t){e.preview=t},expression:"preview"}})],1),i("div",{staticClass:"col-6 q-pa-lg"},[i("q-select",{attrs:{filled:"",options:e.options,label:"Category",rules:e.rules},model:{value:e.category,callback:function(t){e.category=t},expression:"category"}})],1),i("div",{staticClass:"col-6 q-pa-lg"},[i("q-file",{attrs:{filled:"","bottom-slots":"",label:"Cover Image",rules:e.rules,accept:"image/*"},scopedSlots:e._u([{key:"prepend",fn:function(){return[i("q-icon",{attrs:{name:"cloud_upload"},on:{click:function(e){e.stopPropagation()}}})]},proxy:!0},{key:"append",fn:function(){return[i("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){t.stopPropagation(),e.image=null}}})]},proxy:!0},{key:"hint",fn:function(){return[e._v(" Field hint ")]},proxy:!0}]),model:{value:e.image,callback:function(t){e.image=t},expression:"image"}})],1)]),i("div",{staticClass:"row q-pa-lg"},[i("div",{staticClass:"col-12 text-center text-h6 text-grey-9"},[e._v("Write")]),i("div",{staticClass:"col-12 q-pa-lg"},[i("q-editor",{attrs:{dense:e.$q.screen.lt.md,"max-height":"90vh",rules:e.rules,toolbar:[[{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,list:"only-icons",options:["left","center","right","justify"]},{label:e.$q.lang.editor.align,icon:e.$q.iconSet.editor.align,fixedLabel:!0,options:["left","center","right","justify"]}],["bold","italic","strike","underline","subscript","superscript"],["token","hr","link","custom_btn"],["print","fullscreen"],[{label:e.$q.lang.editor.formatting,icon:e.$q.iconSet.editor.formatting,list:"no-icons",options:["p","h1","h2","h3","h4","h5","h6","code"]},{label:e.$q.lang.editor.fontSize,icon:e.$q.iconSet.editor.fontSize,fixedLabel:!0,fixedIcon:!0,list:"no-icons",options:["size-1","size-2","size-3","size-4","size-5","size-6","size-7"]},{label:e.$q.lang.editor.defaultFont,icon:e.$q.iconSet.editor.font,fixedIcon:!0,list:"no-icons",options:["default_font","arial","arial_black","comic_sans","courier_new","impact","lucida_grande","times_new_roman","verdana"]},"removeFormat"],["quote","unordered","ordered","outdent","indent"],["undo","redo"],["viewsource"]],fonts:{arial:"Arial",arial_black:"Arial Black",comic_sans:"Comic Sans MS",courier_new:"Courier New",impact:"Impact",lucida_grande:"Lucida Grande",times_new_roman:"Times New Roman",verdana:"Verdana"}},model:{value:e.qeditor,callback:function(t){e.qeditor=t},expression:"qeditor"}})],1),i("div",{staticClass:"col-12 text-center"},[i("q-btn",{attrs:{label:"save",flat:"",type:"submit"}})],1)])])],1)},o=[],n=i("ded3"),l=i.n(n),s=i("2f62"),r={data(){return{title:"",preview:"",category:null,qeditor:"",image:null,options:["Sport","Politics","Entertainment","Technology","Art","Business","Fashion","Education"],rules:[e=>!!e||"required"]}},methods:l()(l()({},Object(s["b"])("admin",["createPost"])),{},{submit(){console.log(this.image);let e=new FormData;e.append("title",this.title),e.append("preview",this.preview),e.append("tags",this.category),e.append("post",this.qeditor),e.append("photo",this.image),this.createPost(e)}})},c=r,d=i("2877"),u=i("9989"),p=i("0378"),g=i("27f9"),m=i("ddd8"),f=i("7d53"),b=i("0016"),q=i("d66b"),v=i("9c40"),h=i("eebe"),w=i.n(h),x=Object(d["a"])(c,a,o,!1,null,null,null);t["default"]=x.exports;w()(x,"components",{QPage:u["a"],QForm:p["a"],QInput:g["a"],QSelect:m["a"],QFile:f["a"],QIcon:b["a"],QEditor:q["a"],QBtn:v["a"]})}}]);