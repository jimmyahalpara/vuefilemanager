(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"2Sb1":function(t,e,a){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").e}},n=(a("qf9i"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header"},[t.canBack?a("div",{staticClass:"go-back",on:{click:function(e){return t.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):t._e(),t._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[t._v(t._s(t.title))])])])}),[],!1,null,"aafe7e24",null);e.a=s.exports},"3Idf":function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".page-header[data-v-aafe7e24]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:-webkit-sticky;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-aafe7e24]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-aafe7e24]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-aafe7e24]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-aafe7e24]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-aafe7e24]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-aafe7e24]{background:#111314}.page-header .title[data-v-aafe7e24]{color:#bec6cf}.page-header .icon path[data-v-aafe7e24]{fill:#00bc7e}}",""])},"92Jy":function(t,e,a){"use strict";var i=a("qphJ");a.n(i).a},KPNK:function(t,e,a){var i=a("3Idf");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},MOFO:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,"",""])},OLOt:function(t,e,a){"use strict";a.r(e);var i=a("CjXH"),n=a("D62o"),s=a("THmQ"),r=a("2Sb1"),o=a("L2JU");function c(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var p={name:"AppSettings",components:{HomeIcon:i.x,CreditCardIcon:i.k,CodeIcon:i.i,MailIcon:i.E,FileTextIcon:i.s,EyeIcon:i.p,UsersIcon:i.X,Trash2Icon:i.R,SettingsIcon:i.O,SectionTitle:s.a,MobileHeader:n.a,PageHeader:r.a},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?c(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(o.b)(["config"]))},d=(a("S7pX"),a("KHd+")),v=Object(d.a)(p,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"single-page"}},[a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:t.$router.currentRoute.meta.title}}),t._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:t.$router.currentRoute.meta.title}}),t._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppOthers"}}},[a("div",{staticClass:"icon"},[a("settings-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.others"))+"\n                    ")])]),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppAppearance"}}},[a("div",{staticClass:"icon"},[a("eye-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.appearance"))+"\n                    ")])]),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppBillings"}}},[a("div",{staticClass:"icon"},[a("file-text-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.billings"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppPayments"}}},[a("div",{staticClass:"icon"},[a("credit-card-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.payments"))+"\n                    ")])]):t._e(),t._v(" "),t.config.isSaaS?a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppIndex"}}},[a("div",{staticClass:"icon"},[a("home-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        Homepage\n                    ")])]):t._e(),t._v(" "),a("router-link",{staticClass:"menu-list-item link",attrs:{replace:"",to:{name:"AppEmail"}}},[a("div",{staticClass:"icon"},[a("mail-icon",{attrs:{size:"17"}})],1),t._v(" "),a("div",{staticClass:"label"},[t._v("\n                        "+t._s(t.$t("admin_settings.tabs.email"))+"\n                    ")])])],1),t._v(" "),a("router-view")],1)],1)])}),[],!1,null,"343f037e",null);e.default=v.exports},S7pX:function(t,e,a){"use strict";var i=a("wWlU");a.n(i).a},THmQ:function(t,e,a){"use strict";var i={name:"SectionTitle"},n=(a("92Jy"),a("KHd+")),s=Object(n.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);e.a=s.exports},lW02:function(t,e,a){(t.exports=a("I1BE")(!1)).push([t.i,".text-label[data-v-69d97df2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-69d97df2]{color:#00bc7e}}",""])},qf9i:function(t,e,a){"use strict";var i=a("KPNK");a.n(i).a},qphJ:function(t,e,a){var i=a("lW02");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)},wWlU:function(t,e,a){var i=a("MOFO");"string"==typeof i&&(i=[[t.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,n);i.locals&&(t.exports=i.locals)}}]);