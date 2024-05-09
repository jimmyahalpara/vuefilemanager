"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5893],{4276:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(6798),n=s.n(a)()((function(e){return e[1]}));n.push([e.id,".input-wrapper[data-v-1e835bde]{display:flex;width:100%}.input-wrapper .input-label[data-v-1e835bde]{color:#1b2539}.input-wrapper .switch-content[data-v-1e835bde]{width:100%}.input-wrapper .switch-content[data-v-1e835bde]:last-child{width:80px}.switch[data-v-1e835bde]{background:#f1f1f5;height:28px;position:relative;width:50px}.switch[data-v-1e835bde],.switch .switch-button[data-v-1e835bde]{border-radius:50px;display:block;transition:all .3s ease}.switch .switch-button[data-v-1e835bde]{background:#fff;box-shadow:0 2px 4px rgba(37,38,94,.1);cursor:pointer;height:22px;left:3px;position:absolute;top:3px;width:22px}.switch.active .switch-button[data-v-1e835bde]{left:25px}.dark .switch[data-v-1e835bde]{background:#1e2024}.dark .popup-wrapper .switch[data-v-1e835bde]{background:#25272c}",""]);const i=n},1772:(e,t,s)=>{s.d(t,{A:()=>n});const a={name:"AppInputButton",props:["description","isLast","title","error"]};const n=(0,s(4486).A)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"w-full justify-between space-y-4 sm:flex sm:space-x-8 sm:space-x-2 sm:space-y-0",class:{"mb-6 sm:mb-7":!e.isLast}},[t("div",{staticClass:"leading-5"},[t("label",{staticClass:"mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"},[e._v(" "+e._s(e.title)+": ")]),e._v(" "),e.description?t("span",{staticClass:"block text-xs leading-4 dark:text-gray-500 text-gray-500",domProps:{innerHTML:e._s(e.description)}}):e._e(),e._v(" "),e.error?t("span",{staticClass:"text-left text-xs text-red-600"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e()]),e._v(" "),t("div",[e._t("default")],2)])}),[],!1,null,null,null).exports},4703:(e,t,s)=>{s.d(t,{A:()=>n});const a={name:"AppInputSwitch",props:["description","isLast","title","error"]};const n=(0,s(4486).A)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"flex w-full items-center justify-between space-x-2 sm:space-x-8",class:{"mb-6 sm:mb-7":!e.isLast}},[t("div",{staticClass:"leading-5"},[t("label",{staticClass:"mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"},[e._v(" "+e._s(e.title)+": ")]),e._v(" "),e.description?t("span",{staticClass:"block text-xs leading-4 dark:text-gray-500 text-gray-500",domProps:{innerHTML:e._s(e.description)}}):e._e(),e._v(" "),e.error?t("span",{staticClass:"pt-2 text-xs dark:text-rose-600 text-rose-600"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e()]),e._v(" "),t("div",[e._t("default")],2)])}),[],!1,null,null,null).exports},338:(e,t,s)=>{s.d(t,{A:()=>n});const a={name:"AppInputText",props:["description","isLast","title","error"]};const n=(0,s(4486).A)(a,(function(){var e=this,t=e._self._c;return t("div",{class:{"mb-6 sm:mb-7":!e.isLast}},[e.title?t("label",{staticClass:"mb-1.5 block text-sm font-bold text-gray-700 dark:text-gray-200"},[e._v("\n        "+e._s(e.title)+":\n    ")]):e._e(),e._v(" "),e._t("default"),e._v(" "),e.error?t("span",{staticClass:"pt-2 text-xs dark:text-rose-600 text-rose-600"},[e._v("\n        "+e._s(e.error)+"\n    ")]):e._e(),e._v(" "),e.description?t("small",{staticClass:"block pt-2 text-xs leading-4 dark:text-gray-500 text-gray-500",domProps:{innerHTML:e._s(e.description)}}):e._e()],2)}),[],!1,null,null,null).exports},9630:(e,t,s)=>{s.d(t,{A:()=>c});const a={name:"SwitchInput",props:["label","name","state","info","input","isDisabled"],data:function(){return{isSwitched:void 0}},methods:{changeState:function(){this.isDisabled||(this.isSwitched=!this.isSwitched,this.$emit("input",this.isSwitched))}},mounted:function(){this.isSwitched=this.state}};var n=s(5072),i=s.n(n),r=s(4276),o={insert:"head",singleton:!1};i()(r.A,o);r.A.locals;const c=(0,s(4486).A)(a,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"switch-content"},[e.label?t("label",{staticClass:"input-label"},[e._v(" "+e._s(e.label)+": ")]):e._e(),e._v(" "),e.info?t("small",{staticClass:"input-info"},[e._v("\n            "+e._s(e.info)+"\n        ")]):e._e()]),e._v(" "),t("div",{staticClass:"switch-content text-right"},[t("div",{staticClass:"switch",class:{active:e.state},on:{click:e.changeState}},[t("div",{staticClass:"switch-button"})])])])}),[],!1,null,"1e835bde",null).exports},6357:(e,t,s)=>{s.d(t,{A:()=>n});const a={name:"PageTab",props:["isLoading"],components:{Spinner:s(4789).A}};const n=(0,s(4486).A)(a,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-tab"},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[t("Spinner")],1),e._v(" "),e._t("default")],2)}),[],!1,null,null,null).exports},6584:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(6986);const n={name:"FormLabel",props:["icon"],components:{TrendingUpIcon:a.Mx0,WifiIcon:a.$r_,ListIcon:a.kpM,MailIcon:a.r4D,InfoIcon:a.mo0,DatabaseIcon:a.bN0,UsersIcon:a.c2u,CreditCardIcon:a.BFk,DollarSignIcon:a.zIM,SmartphoneIcon:a.fK0,HardDriveIcon:a.jjT,BarChartIcon:a.R5L,SettingsIcon:a.Zes,FileTextIcon:a.dsF,ShieldIcon:a.lmn,FrownIcon:a.Ao9,Edit2Icon:a.cFO,BellIcon:a.XFE,KeyIcon:a.RYV}};const i=(0,s(4486).A)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"mb-8 flex items-center"},[e.icon?e._e():t("edit-2-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}),e._v(" "),"frown"===e.icon?t("frown-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"list"===e.icon?t("list-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"info"===e.icon?t("info-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"database"===e.icon?t("database-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"file-text"===e.icon?t("file-text-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"dollar"===e.icon?t("dollar-sign-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"credit-card"===e.icon?t("credit-card-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"bar-chart"===e.icon?t("bar-chart-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"settings"===e.icon?t("settings-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"hard-drive"===e.icon?t("hard-drive-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"mail"===e.icon?t("mail-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"smartphone"===e.icon?t("smartphone-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"shield"===e.icon?t("shield-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"bell"===e.icon?t("bell-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"key"===e.icon?t("key-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"users"===e.icon?t("users-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"wifi"===e.icon?t("wifi-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),"trending-up"===e.icon?t("trending-up-icon",{staticClass:"vue-feather text-theme dark-text-theme mr-3",attrs:{size:"22"}}):e._e(),e._v(" "),t("b",{staticClass:"text-md font-bold dark:text-gray-200 sm:text-lg"},[e._t("default")],2)],1)}),[],!1,null,null,null).exports},2066:(e,t,s)=>{s.r(t),s.d(t,{default:()=>h});var a=s(9630),n=s(1772),i=s(4703),r=s(6584),o=s(338),c=s(6357),l=s(5353);function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,a)}return s}function u(e,t,s){var a;return a=function(e,t){if("object"!=d(e)||!e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var a=s.call(e,t||"default");if("object"!=d(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==d(a)?a:a+"")in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const m={name:"Adsense",components:{AppInputButton:n.A,AppInputSwitch:i.A,AppInputText:o.A,SwitchInput:a.A,FormLabel:r.A,PageTab:c.A},computed:function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach((function(t){u(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}({},(0,l.L8)(["config"])),data:function(){return{adsense:{allowedService:void 0,clientId:void 0,banner01:void 0}}},created:function(){this.adsense={allowedService:this.config.allowedAdsense,clientId:this.config.adsenseClientId,banner01:this.config.adsenseBanner01,banner02:this.config.adsenseBanner02,banner03:this.config.adsenseBanner03}}};const h=(0,s(4486).A)(m,(function(){var e=this,t=e._self._c;return t("PageTab",[e.adsense?t("div",{staticClass:"card shadow-card"},[t("FormLabel",[e._v("\n            "+e._s(e.$t("Basic Setup"))+"\n        ")]),e._v(" "),t("AppInputSwitch",{attrs:{title:e.$t("Allow Google Adsense"),description:e.$t("Allow ads on app pages.")}},[t("SwitchInput",{staticClass:"switch",attrs:{state:e.adsense.allowedService},on:{input:function(t){return e.$updateText("/admin/settings","allowed_adsense",e.adsense.allowedService)}},model:{value:e.adsense.allowedService,callback:function(t){e.$set(e.adsense,"allowedService",t)},expression:"adsense.allowedService"}})],1),e._v(" "),t("AppInputText",{attrs:{title:e.$t("Client Id"),description:e.$t("Paste your Adsense Client ID e.g. ca-pub-XXXXXXXXXXXXXXXXX"),"is-last":!0}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.adsense.clientId,expression:"adsense.clientId"}],staticClass:"focus-border-theme input-dark",attrs:{placeholder:e.$t("Client Id..."),type:"text"},domProps:{value:e.adsense.clientId},on:{input:[function(t){t.target.composing||e.$set(e.adsense,"clientId",t.target.value)},function(t){return e.$updateText("/admin/settings","adsense_client_id",e.adsense.clientId,!0)}]}})])],1):e._e(),e._v(" "),e.adsense?t("div",{staticClass:"card shadow-card"},[t("FormLabel",[e._v("\n            "+e._s(e.$t("Ads"))+"\n        ")]),e._v(" "),t("AppInputText",{attrs:{title:e.$t("File Viewport Banner"),description:e.$t("This banner will be showed above user files")}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.adsense.banner01,expression:"adsense.banner01"}],staticClass:"focus-border-theme input-dark",attrs:{rows:"3",placeholder:e.$t("Paste the <ins></ins> tag here..."),type:"text"},domProps:{value:e.adsense.banner01},on:{input:[function(t){t.target.composing||e.$set(e.adsense,"banner01",t.target.value)},function(t){return e.$updateText("/admin/settings","adsense_banner_01",e.adsense.banner01,!0)}]}})]),e._v(" "),t("AppInputText",{attrs:{title:e.$t("Download Page Banner"),description:e.$t("This banner will be showed below file download page")}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.adsense.banner02,expression:"adsense.banner02"}],staticClass:"focus-border-theme input-dark",attrs:{rows:"3",placeholder:e.$t("Paste the <ins></ins> tag here..."),type:"text"},domProps:{value:e.adsense.banner02},on:{input:[function(t){t.target.composing||e.$set(e.adsense,"banner02",t.target.value)},function(t){return e.$updateText("/admin/settings","adsense_banner_02",e.adsense.banner02,!0)}]}})]),e._v(" "),t("AppInputText",{attrs:{title:e.$t("Homepage Banner"),description:e.$t("This banner will be showed on the homepage"),"is-last":!0}},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.adsense.banner03,expression:"adsense.banner03"}],staticClass:"focus-border-theme input-dark",attrs:{rows:"3",placeholder:e.$t("Paste the <ins></ins> tag here..."),type:"text"},domProps:{value:e.adsense.banner03},on:{input:[function(t){t.target.composing||e.$set(e.adsense,"banner03",t.target.value)},function(t){return e.$updateText("/admin/settings","adsense_banner_03",e.adsense.banner03,!0)}]}})])],1):e._e()])}),[],!1,null,null,null).exports}}]);