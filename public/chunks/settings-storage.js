"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7839],{4733:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(6798),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".label[data-v-03d13328]{align-items:center;display:flex}.label .label-dot[data-v-03d13328]{border-radius:8px;display:block;flex:none;height:8px;margin-right:10px;width:8px}.label .label-dot.success[data-v-03d13328]{background:#0abb87}.label .label-dot.danger[data-v-03d13328]{background:#fd397a}.label .label-dot.warning[data-v-03d13328]{background:#ffb822}.label .label-dot.info[data-v-03d13328]{background:#5578eb}.label .label-dot.primary[data-v-03d13328]{background:red}.label .label-dot.purple[data-v-03d13328]{background:#9d66fe}.label .label-dot.secondary[data-v-03d13328]{background:#e1e1ef}.label .label-title[data-v-03d13328]{font-size:16px;font-weight:700}",""]);const o=s},4751:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(6798),s=a.n(r)()((function(t){return t[1]}));s.push([t.id,".chart-progress.success[data-v-596eaf42]{background:#0abb87;box-shadow:0 3px 10px rgba(10,187,135,.5)}.chart-progress.danger[data-v-596eaf42]{background:#fd397a;box-shadow:0 3px 10px rgba(253,57,122,.5)}.chart-progress.warning[data-v-596eaf42]{background:#ffb822;box-shadow:0 3px 10px rgba(255,184,34,.5)}.chart-progress.info[data-v-596eaf42]{background:#5578eb;box-shadow:0 3px 10px rgba(85,120,235,.5)}.chart-progress.purple[data-v-596eaf42]{background:#9d66fe;box-shadow:0 3px 10px rgba(157,102,254,.5)}.chart-progress.secondary[data-v-596eaf42]{background:#e1e1ef;box-shadow:0 3px 10px rgba(225,225,239,.5)}.dark .chart-progress.secondary[data-v-596eaf42]{background:#282a2f!important;box-shadow:0 3px 10px rgba(40,42,47,.5)!important}",""]);const o=s},6357:(t,e,a)=>{a.d(e,{A:()=>s});const r={name:"PageTab",props:["isLoading"],components:{Spinner:a(4789).A}};const s=(0,a(4486).A)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-tab"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[e("Spinner")],1),t._v(" "),t._t("default")],2)}),[],!1,null,null,null).exports},8426:(t,e,a)=>{a.d(e,{A:()=>n});const r={name:"Bar",props:["bar"],data:function(){return{isVisible:!1}}};var s=a(4486);const o={name:"BarChart",props:["color","data"],components:{Bar:(0,s.A)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative flex items-center justify-center block cursor-pointer lg:mx-1 lg:w-2 2xl:w-3",style:{height:t.bar.percentage>0?t.bar.percentage+"%":"8px"},on:{mouseover:function(e){t.isVisible=!0},mouseleave:function(e){t.isVisible=!1}}},[t.isVisible||85.5===t.bar.percentage?e("div",{staticClass:"absolute -top-4 z-10 -translate-y-full transform rounded-lg bg-gray-800 py-2 px-3 shadow-lg dark:bg-white"},[e("b",{staticClass:"mb-2 block whitespace-nowrap text-xs text-white dark:text-gray-800"},[t._v("\n                "+t._s(t.bar.created_at)+"\n            ")]),t._v(" "),e("div",{staticClass:"flex items-center pb-1"},[e("span",{staticClass:"bg-theme mr-2 block h-3 w-3 rounded"}),t._v(" "),e("b",{staticClass:"whitespace-nowrap text-xs text-white dark:text-gray-800"},[t._v("\n                    "+t._s(t.bar.amount)+"\n                ")])]),t._v(" "),t._m(0)]):t._e(),t._v(" "),e("span",{staticClass:"block h-full w-full rounded-lg",class:{"bg-theme":t.bar.percentage>0,"dark:bg-gray-700 bg-gray-200":0===t.bar.percentage}})])}),[function(){var t=this._self._c;return t("div",{staticClass:"absolute -bottom-2.5 left-0 right-0 mx-auto inline-block w-[17px] overflow-hidden"},[t("div",{staticClass:"h-3 w-3 origin-top-left -rotate-45 transform bg-gray-800 dark:bg-white"})])}],!1,null,null,null).exports}};const n=(0,s.A)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"grid h-20 grid-flow-col items-end gap-1 sm:h-28 sm:gap-2 lg:flex lg:items-end lg:justify-between lg:gap-0"},t._l(t.data,(function(t,a){return e("Bar",{key:a,attrs:{bar:t}})})),1)}),[],!1,null,null,null).exports},6584:(t,e,a)=>{a.d(e,{A:()=>o});var r=a(6986);const s={name:"FormLabel",props:["icon"],components:{TrendingUpIcon:r.Mx0,WifiIcon:r.$r_,ListIcon:r.kpM,MailIcon:r.r4D,InfoIcon:r.mo0,DatabaseIcon:r.bN0,UsersIcon:r.c2u,CreditCardIcon:r.BFk,DollarSignIcon:r.zIM,SmartphoneIcon:r.fK0,HardDriveIcon:r.jjT,BarChartIcon:r.R5L,SettingsIcon:r.Zes,FileTextIcon:r.dsF,ShieldIcon:r.lmn,FrownIcon:r.Ao9,Edit2Icon:r.cFO,BellIcon:r.XFE,KeyIcon:r.RYV}};const o=(0,a(4486).A)(s,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mb-8 flex items-center"},[t.icon?t._e():e("edit-2-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}),t._v(" "),"frown"===t.icon?e("frown-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"list"===t.icon?e("list-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"info"===t.icon?e("info-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"database"===t.icon?e("database-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"file-text"===t.icon?e("file-text-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"dollar"===t.icon?e("dollar-sign-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"credit-card"===t.icon?e("credit-card-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bar-chart"===t.icon?e("bar-chart-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"hard-drive"===t.icon?e("hard-drive-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"mail"===t.icon?e("mail-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?e("smartphone-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"shield"===t.icon?e("shield-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"bell"===t.icon?e("bell-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?e("key-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"users"===t.icon?e("users-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"wifi"===t.icon?e("wifi-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),"trending-up"===t.icon?e("trending-up-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):t._e(),t._v(" "),e("b",{staticClass:"text-md font-bold dark:text-gray-200 sm:text-lg"},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},5906:(t,e,a)=>{a.d(e,{A:()=>u});const r={name:"DotLabel",props:["color","title"]};var s=a(5072),o=a.n(s),n=a(4733),i={insert:"head",singleton:!1};o()(n.A,i);n.A.locals;var l=a(4486);const c={name:"ProgressLine",props:["data"],components:{DotLabel:(0,l.A)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"label"},[e("span",{class:["label-dot",t.color]}),t._v(" "),e("b",{staticClass:"label-title"},[t._v("\n        "+t._s(t.title)+"\n    ")])])}),[],!1,null,"03d13328",null).exports}};var d=a(4751),b={insert:"head",singleton:!1};o()(d.A,b);d.A.locals;const u=(0,l.A)(c,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mb-4 flex h-2.5 items-center rounded bg-light-300 dark:bg-2x-dark-foreground"},t._l(t.data,(function(a,r){return e("div",{key:r,staticClass:"chart-wrapper",style:{width:(a.progress>1?a.progress:0)+"%"}},[1===t.data.length?e("span",{staticClass:"chart-progress block h-2.5 w-full",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 border-white dark:border-gray-800":a.progress<100,"rounded-lg border-none":a.progress>=100},a.color]}):t._e(),t._v(" "),t.data.length>1&&a.progress>0?e("span",{staticClass:"chart-progress block h-2.5 w-full",class:[{"rounded-tl-lg rounded-bl-lg border-r-2 border-white dark:border-gray-800":0===r,"border-r-2 border-white dark:border-gray-800":r<t.data.length-1,"rounded-tr-lg rounded-br-lg":r===t.data.length-1},a.color]}):t._e()])})),0),t._v(" "),e("footer",{staticClass:"flex w-full items-center overflow-x-auto"},t._l(t.data,(function(t,a){return e("DotLabel",{key:a,staticClass:"mr-5",attrs:{color:t.color,title:t.title}})})),1)])}),[],!1,null,"596eaf42",null).exports},9929:(t,e,a)=>{a.r(e),a.d(e,{default:()=>f});var r=a(5906),s=a(6584),o=a(6357),n=a(2505),i=a.n(n),l=a(8426),c=a(5353);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function b(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t,e,a){var r;return r=function(t,e){if("object"!=d(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!=d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(e,"string"),(e="symbol"==d(r)?r:r+"")in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const g={name:"Storage",components:{BarChart:l.A,ProgressLine:r.A,FormLabel:s.A,PageTab:o.A},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?b(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,c.L8)(["config"])),data:function(){return{isLoading:!0,distribution:void 0,storage:void 0}},created:function(){var t=this;i().get("/api/user/storage").then((function(e){t.distribution=t.$mapStorageUsage(e.data),t.storage=e.data,t.isLoading=!1}))}};const f=(0,a(4486).A)(g,(function(){var t=this,e=t._self._c;return e("PageTab",[t.distribution?e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("storage_usage"))+"\n        ")]),t._v(" "),e("b",{staticClass:"-mt-3 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.attributes.used)+"\n        ")]),t._v(" "),"fixed"===t.config.subscriptionType||"none"===t.config.subscriptionType&&t.config.storageLimit?e("b",{staticClass:"mt-0.5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("total_of",{capacity:t.storage.data.attributes.capacity}))+"\n            "+t._s(t.$t("used"))+"\n        ")]):t._e(),t._v(" "),"0B"!==t.storage.data.attributes.used?e("ProgressLine",{staticClass:"mt-5",attrs:{data:t.distribution}}):t._e()],1):t._e(),t._v(" "),t.distribution?e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("upload"))+"\n        ")]),t._v(" "),e("b",{staticClass:"-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.meta.traffic.upload)+"\n        ")]),t._v(" "),e("b",{staticClass:"mb-3 mb-5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("in_last_x_days"))+"\n        ")]),t._v(" "),e("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.upload,color:"#FFBD2D"}})],1):t._e(),t._v(" "),t.distribution?e("div",{staticClass:"card shadow-card"},[e("FormLabel",{attrs:{icon:"hard-drive"}},[t._v("\n            "+t._s(t.$t("download"))+"\n        ")]),t._v(" "),e("b",{staticClass:"-mt-3 mb-0.5 block text-2xl font-extrabold sm:text-3xl"},[t._v("\n            "+t._s(t.storage.data.meta.traffic.download)+"\n        ")]),t._v(" "),e("b",{staticClass:"mb-3 mb-5 block text-sm dark:text-gray-500 text-gray-400"},[t._v("\n            "+t._s(t.$t("in_last_x_days"))+"\n        ")]),t._v(" "),e("BarChart",{attrs:{data:t.storage.data.meta.traffic.chart.download,color:"#9d66fe"}})],1):t._e()])}),[],!1,null,null,null).exports}}]);