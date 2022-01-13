(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{"4X4q":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},"7LC9":function(t,e,a){"use strict";var r={name:"BarChart",props:["color","data"],computed:{ghostLength:function(){return 45-this.data.length}}},s=a("KHd+"),o=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-end justify-between sm:h-28 h-20"},[t._l(t.data,(function(t,e){return a("span",{key:e,staticClass:"2xl:w-3 md:w-2 w-1 block rounded-lg lg:mr-2 mr-1.5 bg-theme",style:{height:t.amount+"%"}})})),t._v(" "),t._l(t.ghostLength,(function(e,r){return t.ghostLength>0?a("span",{key:r,staticClass:"2xl:w-3 md:w-2 w-1 block rounded-lg lg:mr-2 mr-1.5 dark:bg-gray-800 bg-gray-100",style:{height:"5%"}}):t._e()}))],2)}),[],!1,null,null,null);e.a=o.exports},Nvvg:function(t,e,a){"use strict";a("gJIj")},RW8C:function(t,e,a){"use strict";a.r(e);var r=a("h6vl"),s=a("eZ9V"),o=a("qefO"),n=a("vDqi"),i=a.n(n),l=a("7LC9"),c=a("L2JU");function d(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function b(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var u={name:"Storage",components:{BarChart:l.a,ProgressLine:r.a,FormLabel:s.a,PageTab:o.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?d(Object(a),!0).forEach((function(e){b(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(c.b)(["config"])),data:function(){return{isLoading:!0,distribution:void 0,storage:void 0}},created:function(){var t=this;i.a.get("/api/user/storage").then((function(e){t.distribution=t.$mapStorageUsage(e.data),t.storage=e.data,t.isLoading=!1}))}},h=a("KHd+"),g=Object(h.a)(u,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("PageTab",[t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n                "+t._s(t.$t("Storage Usage"))+"\n            ")]),t._v(" "),a("b",{staticClass:"text-3xl font-extrabold -mt-3 block"},[t._v("\n\t\t\t\t"+t._s(t.storage.data.attributes.used)+"\n\t\t\t")]),t._v(" "),"fixed"===t.config.subscriptionType||"none"===t.config.subscriptionType&&t.config.storageLimit?a("b",{staticClass:"mt-0.5 block text-sm text-gray-400"},[t._v("\n\t\t\t\t"+t._s(t.$t("Total of"))+" "+t._s(t.storage.data.attributes.capacity)+" "+t._s(t.$t("Used"))+"\n\t\t\t")]):t._e(),t._v(" "),a("ProgressLine",{staticClass:"mt-5",attrs:{data:t.distribution}})],1):t._e(),t._v(" "),t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n                "+t._s(t.$t("Upload"))+"\n            ")]),t._v(" "),a("b",{staticClass:"text-3xl font-extrabold -mt-3 block mb-0.5"},[t._v("\n\t\t\t\t"+t._s(t.storage.data.meta.traffic.upload)+"\n\t\t\t")]),t._v(" "),a("b",{staticClass:"mb-3 block text-sm text-gray-400 mb-5"},[t._v("\n\t\t\t\t"+t._s(t.$t("In last 45 days"))+"\n\t\t\t")]),t._v(" "),a("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.upload,color:"#FFBD2D"}})],1):t._e(),t._v(" "),t.distribution?a("div",{staticClass:"card shadow-card"},[a("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n                "+t._s(t.$t("Download"))+"\n            ")]),t._v(" "),a("b",{staticClass:"text-3xl font-extrabold -mt-3 block mb-0.5"},[t._v("\n\t\t\t\t"+t._s(t.storage.data.meta.traffic.download)+"\n\t\t\t")]),t._v(" "),a("b",{staticClass:"mb-3 block text-sm text-gray-400 mb-5"},[t._v("\n\t\t\t\t"+t._s(t.$t("In last 45 days"))+"\n\t\t\t")]),t._v(" "),a("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.download,color:"#9d66fe"}})],1):t._e()])}),[],!1,null,null,null);e.default=g.exports},cJdj:function(t,e,a){"use strict";a("kRqW")},eZ9V:function(t,e,a){"use strict";var r=a("CjXH"),s={name:"FormLabel",props:["icon"],components:{UsersIcon:r.zb,CreditCardIcon:r.t,DollarSignIcon:r.v,SmartphoneIcon:r.mb,HardDriveIcon:r.L,BarChartIcon:r.c,SettingsIcon:r.jb,FileTextIcon:r.D,ShieldIcon:r.lb,FrownIcon:r.H,Edit2Icon:r.y,BellIcon:r.d,KeyIcon:r.Q}},o=a("KHd+"),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center mb-8"},[t.icon?t._e():a("edit-2-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}),t._v(" "),"frown"===t.icon?a("frown-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"file-text"===t.icon?a("file-text-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"dollar"===t.icon?a("dollar-sign-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"credit-card"===t.icon?a("credit-card-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"bar-chart"===t.icon?a("bar-chart-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?a("settings-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"hard-drive"===t.icon?a("hard-drive-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?a("smartphone-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"shield"===t.icon?a("shield-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"bell"===t.icon?a("bell-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?a("key-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"users"===t.icon?a("users-icon",{staticClass:"mr-3 vue-feather text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),a("b",{staticClass:"font-bold dark:text-gray-200 text-lg"},[t._t("default")],2)],1)}),[],!1,null,null,null);e.a=n.exports},gJIj:function(t,e,a){var r=a("lkHs");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},h6vl:function(t,e,a){"use strict";var r={name:"DotLabel",props:["color","title"]},s=(a("Nvvg"),a("KHd+")),o={name:"ProgressLine",props:["data"],components:{DotLabel:Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"label"},[e("span",{class:["label-dot",this.color]}),this._v(" "),e("b",{staticClass:"label-title"},[this._v("\n        "+this._s(this.title)+"\n    ")])])}),[],!1,null,"65eb31b6",null).exports}},n=(a("kika"),Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex items-center mb-4 rounded dark:bg-2x-dark-foreground bg-light-300 h-2.5"},t._l(t.data,(function(e,r){return a("div",{key:r,staticClass:"chart-wrapper",style:{width:(e.progress>1?e.progress:0)+"%"}},[1===t.data.length?a("span",{staticClass:"chart-progress w-full h-2.5 block",class:[{"border-r-2 dark:border-gray-800 border-white rounded-tl-lg rounded-bl-lg":e.progress<100,"border-none rounded-lg":e.progress>=100},e.color]}):t._e(),t._v(" "),t.data.length>1&&e.progress>0?a("span",{staticClass:"chart-progress w-full h-2.5 block",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 dark:border-gray-800 border-white":0===r,"border-r-2 dark:border-gray-800 border-white":r<t.data.length-1,"rounded-tr-lg rounded-br-lg":r===t.data.length-1},e.color]}):t._e()])})),0),t._v(" "),a("footer",{staticClass:"flex items-center w-full overflow-x-auto"},t._l(t.data,(function(t,e){return a("DotLabel",{key:e,staticClass:"mr-5",attrs:{color:t.color,title:t.title}})})),1)])}),[],!1,null,"1996acd4",null));e.a=n.exports},kRqW:function(t,e,a){var r=a("4X4q");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},kika:function(t,e,a){"use strict";a("oqEP")},lkHs:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".label[data-v-65eb31b6]{display:flex;align-items:center}.label .label-dot[data-v-65eb31b6]{margin-right:10px;width:8px;height:8px;display:block;border-radius:8px;flex:none}.label .label-dot.success[data-v-65eb31b6]{background:#0abb87}.label .label-dot.danger[data-v-65eb31b6]{background:#fd397a}.label .label-dot.warning[data-v-65eb31b6]{background:#ffb822}.label .label-dot.info[data-v-65eb31b6]{background:#5578eb}.label .label-dot.primary[data-v-65eb31b6]{background:red}.label .label-dot.purple[data-v-65eb31b6]{background:#9d66fe}.label .label-dot.secondary[data-v-65eb31b6]{background:#e1e1ef}.label .label-title[data-v-65eb31b6]{font-size:16px;font-weight:700}",""])},oqEP:function(t,e,a){var r=a("vIjS");"string"==typeof r&&(r=[[t.i,r,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(r,s);r.locals&&(t.exports=r.locals)},qefO:function(t,e,a){"use strict";var r={name:"PageTab",props:["isLoading"],components:{Spinner:a("zTYo").a}},s=(a("cJdj"),a("KHd+")),o=Object(s.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-tab"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[e("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"3dead278",null);e.a=o.exports},vIjS:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".chart-progress.success[data-v-1996acd4]{background:#0abb87;box-shadow:0 3px 10px rgba(10,187,135,.5)}.chart-progress.danger[data-v-1996acd4]{background:#fd397a;box-shadow:0 3px 10px rgba(253,57,122,.5)}.chart-progress.warning[data-v-1996acd4]{background:#ffb822;box-shadow:0 3px 10px rgba(255,184,34,.5)}.chart-progress.info[data-v-1996acd4]{background:#5578eb;box-shadow:0 3px 10px rgba(85,120,235,.5)}.chart-progress.purple[data-v-1996acd4]{background:#9d66fe;box-shadow:0 3px 10px rgba(157,102,254,.5)}.chart-progress.secondary[data-v-1996acd4]{background:#e1e1ef;box-shadow:0 3px 10px rgba(225,225,239,.5)}.dark .chart-progress.secondary[data-v-1996acd4]{background:#282a2f!important;box-shadow:0 3px 10px rgba(40,42,47,.5)!important}",""])}}]);