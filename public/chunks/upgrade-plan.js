(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"2Sb1":function(e,a,t){"use strict";var i={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").h}},n=(t("JOXf"),t("KHd+")),o=Object(n.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header"},[e.canBack?t("div",{staticClass:"go-back",on:{click:function(a){return e.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"9fd0a424",null);a.a=o.exports},"3eeM":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".page-header[data-v-9fd0a424]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-9fd0a424]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-9fd0a424]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-9fd0a424]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-9fd0a424]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-9fd0a424]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-9fd0a424]{background:#131414}.page-header .title[data-v-9fd0a424]{color:#bec6cf}.page-header .icon path[data-v-9fd0a424]{fill:#00bc7e}}",""])},"4zU4":function(e,a,t){"use strict";t.r(a);var i=t("wz3J"),n=t("D62o"),o=t("2Sb1"),r=t("zTYo"),d=t("CjXH"),l=(t("vDqi"),{name:"UpgradePlan",components:{PlanPricingTables:i.a,MobileHeader:n.a,PageHeader:o.a,CloudIcon:d.k,Spinner:r.a},data:function(){return{isLoading:!0}},methods:{onLoadPricingTables:function(e){this.isLoading=e},onSelectTable:function(e){this.$store.commit("STORE_REQUESTED_PLAN",e)}},beforeMount:function(){var e=document.createElement("script");e.setAttribute("src","https://js.stripe.com/v3/"),document.head.appendChild(e)},mounted:function(){this.$store.dispatch("getAppData")}}),p=(t("O/KT"),t("KHd+")),s=Object(p.a)(l,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"single-page"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"! isLoading"}],staticClass:"large-width center-page",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),t("div",{staticClass:"content-page"},[t("div",{staticClass:"plan-title"},[t("cloud-icon",{staticClass:"title-icon text-theme",attrs:{size:"42"}}),e._v(" "),t("h1",[e._v(e._s(e.$t("page_pricing_tables.title")))]),e._v(" "),t("h2",[e._v(e._s(e.$t("page_pricing_tables.description")))])],1),e._v(" "),t("PlanPricingTables",{on:{load:e.onLoadPricingTables,"selected-plan":e.onSelectTable}})],1)],1),e._v(" "),e.isLoading?t("div",{attrs:{id:"loader"}},[t("Spinner")],1):e._e()])}),[],!1,null,"0e0d73f9",null);a.default=s.exports},"6KZ8":function(e,a,t){var i=t("ElKT");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},D62o:function(e,a,t){"use strict";var i=t("xCqy"),n=t("CjXH"),o={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:n.h,MenuIcon:n.P},methods:{showMobileNavigation:function(){i.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},r=(t("R6Y3"),t("KHd+")),d=Object(r.a)(o,(function(){var e=this.$createElement,a=this._self._c||e;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:this.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),a("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),a("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);a.a=d.exports},ElKT:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".plan[data-v-1057f6d0]{text-align:center;flex:0 0 33%;padding:0 25px;margin-bottom:45px}.plan .plan-wrapper[data-v-1057f6d0]{box-shadow:0 7px 20px 5px rgba(26,36,55,.03);padding:25px;border-radius:8px;transition:all .3s ease}.plan .plan-wrapper[data-v-1057f6d0]:hover{transform:translateY(-20px) scale(1.05);box-shadow:0 15px 25px 5px rgba(26,36,55,.08)}.plan .plan-header .icon circle[data-v-1057f6d0],.plan .plan-header .icon line[data-v-1057f6d0],.plan .plan-header .icon path[data-v-1057f6d0],.plan .plan-header .icon polyline[data-v-1057f6d0],.plan .plan-header .icon rect[data-v-1057f6d0]{color:inherit}.plan .plan-header .title[data-v-1057f6d0]{font-size:1.375em;font-weight:800}.plan .plan-header .description[data-v-1057f6d0]{font-size:.875em;font-weight:600}.plan .plan-features[data-v-1057f6d0]{margin:65px 0}.plan .plan-features .storage-size[data-v-1057f6d0]{font-size:3em;font-weight:900;line-height:1.1}.plan .plan-features .storage-description[data-v-1057f6d0]{display:block;font-size:.9375em;font-weight:800}.plan .plan-footer .sign-in-button[data-v-1057f6d0]{width:100%;text-align:center}.plan .plan-footer .price[data-v-1057f6d0]{font-size:1.125em;display:block;margin-bottom:20px}.plan .plan-footer .price .vat-disclaimer[data-v-1057f6d0]{font-size:.6875em;color:#1b2539;display:block;font-weight:300;opacity:.45;margin-top:5px}.plans-wrapper[data-v-1057f6d0]{display:flex;flex-wrap:wrap;margin:0 -25px;justify-content:center}@media only screen and (max-width:960px){.plans-wrapper[data-v-1057f6d0]{display:block;margin:0}}@media (prefers-color-scheme:dark){.plan .plan-wrapper[data-v-1057f6d0]{background:#1e2024}.plan .plan-header .title[data-v-1057f6d0]{color:#bec6cf}.plan .plan-header .description[data-v-1057f6d0]{color:#7d858c}.plan .plan-features .storage-description[data-v-1057f6d0],.plan .plan-features .storage-size[data-v-1057f6d0]{color:#bec6cf}.plan .plan-footer .sign-in-button[data-v-1057f6d0]{background:rgba(0,188,126,.1)}.plan .plan-footer .sign-in-button[data-v-1057f6d0] .content{color:#00bc7e}.plan .plan-footer .price .vat-disclaimer[data-v-1057f6d0]{color:#bec6cf}}",""])},"Hu+x":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form[data-v-0e0d73f9]{max-width:700px}.form.inline-form[data-v-0e0d73f9]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-0e0d73f9]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-0e0d73f9]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-0e0d73f9]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-0e0d73f9]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-0e0d73f9]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-0e0d73f9]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-0e0d73f9]:last-child{margin-bottom:0}.form.block-form .button[data-v-0e0d73f9]{margin-top:50px}.form .inline-wrapper[data-v-0e0d73f9]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-0e0d73f9]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-0e0d73f9]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-0e0d73f9]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-0e0d73f9]{display:flex}.single-line-form .submit-button[data-v-0e0d73f9]{margin-left:20px}.error-message[data-v-0e0d73f9]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-0e0d73f9]{width:100%}input[type=email][data-v-0e0d73f9],input[type=number][data-v-0e0d73f9],input[type=password][data-v-0e0d73f9],input[type=text][data-v-0e0d73f9],textarea[data-v-0e0d73f9]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-0e0d73f9],input[type=number].is-error[data-v-0e0d73f9],input[type=password].is-error[data-v-0e0d73f9],input[type=text].is-error[data-v-0e0d73f9],textarea.is-error[data-v-0e0d73f9]{border-color:#fd397a}input[type=email][data-v-0e0d73f9]::-moz-placeholder,input[type=number][data-v-0e0d73f9]::-moz-placeholder,input[type=password][data-v-0e0d73f9]::-moz-placeholder,input[type=text][data-v-0e0d73f9]::-moz-placeholder,textarea[data-v-0e0d73f9]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-0e0d73f9]:-ms-input-placeholder,input[type=number][data-v-0e0d73f9]:-ms-input-placeholder,input[type=password][data-v-0e0d73f9]:-ms-input-placeholder,input[type=text][data-v-0e0d73f9]:-ms-input-placeholder,textarea[data-v-0e0d73f9]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-0e0d73f9]::placeholder,input[type=number][data-v-0e0d73f9]::placeholder,input[type=password][data-v-0e0d73f9]::placeholder,input[type=text][data-v-0e0d73f9]::placeholder,textarea[data-v-0e0d73f9]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-0e0d73f9],input[type=number][disabled][data-v-0e0d73f9],input[type=password][disabled][data-v-0e0d73f9],input[type=text][disabled][data-v-0e0d73f9],textarea[disabled][data-v-0e0d73f9]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-0e0d73f9]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-0e0d73f9]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-0e0d73f9],.additional-link b[data-v-0e0d73f9]{cursor:pointer}.additional-link a[data-v-0e0d73f9]:hover,.additional-link b[data-v-0e0d73f9]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-0e0d73f9]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-0e0d73f9]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-0e0d73f9],.form textarea[data-v-0e0d73f9]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-0e0d73f9]{display:block}.form.block-form .block-wrapper label[data-v-0e0d73f9]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-0e0d73f9]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-0e0d73f9]{display:block}.form.inline-form .input-wrapper .error-message[data-v-0e0d73f9]{position:relative;bottom:0}.form .button[data-v-0e0d73f9]{padding:14px 32px}.single-line-form[data-v-0e0d73f9]{display:block}.single-line-form .submit-button[data-v-0e0d73f9]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-0e0d73f9],input[type=number][data-v-0e0d73f9],input[type=password][data-v-0e0d73f9],input[type=text][data-v-0e0d73f9],textarea[data-v-0e0d73f9]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-0e0d73f9]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-0e0d73f9]{color:#7d858c}.form.block-form .block-wrapper label[data-v-0e0d73f9],.form .inline-wrapper .switch-label .input-label[data-v-0e0d73f9]{color:#bec6cf}input[type=email][data-v-0e0d73f9],input[type=number][data-v-0e0d73f9],input[type=password][data-v-0e0d73f9],input[type=text][data-v-0e0d73f9],textarea[data-v-0e0d73f9]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-0e0d73f9]::-moz-placeholder,input[type=number][data-v-0e0d73f9]::-moz-placeholder,input[type=password][data-v-0e0d73f9]::-moz-placeholder,input[type=text][data-v-0e0d73f9]::-moz-placeholder,textarea[data-v-0e0d73f9]::-moz-placeholder{color:#7d858c}input[type=email][data-v-0e0d73f9]:-ms-input-placeholder,input[type=number][data-v-0e0d73f9]:-ms-input-placeholder,input[type=password][data-v-0e0d73f9]:-ms-input-placeholder,input[type=text][data-v-0e0d73f9]:-ms-input-placeholder,textarea[data-v-0e0d73f9]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-0e0d73f9]::placeholder,input[type=number][data-v-0e0d73f9]::placeholder,input[type=password][data-v-0e0d73f9]::placeholder,input[type=text][data-v-0e0d73f9]::placeholder,textarea[data-v-0e0d73f9]::placeholder{color:#7d858c}input[type=email][disabled][data-v-0e0d73f9],input[type=number][disabled][data-v-0e0d73f9],input[type=password][disabled][data-v-0e0d73f9],input[type=text][disabled][data-v-0e0d73f9],textarea[disabled][data-v-0e0d73f9]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.popup-wrapper input[type=email][data-v-0e0d73f9],.popup-wrapper input[type=number][data-v-0e0d73f9],.popup-wrapper input[type=password][data-v-0e0d73f9],.popup-wrapper input[type=text][data-v-0e0d73f9],.popup-wrapper textarea[data-v-0e0d73f9]{background:#25272c}}.plan-title[data-v-0e0d73f9]{text-align:center;max-width:600px;margin:0 auto 80px}.plan-title circle[data-v-0e0d73f9],.plan-title line[data-v-0e0d73f9],.plan-title path[data-v-0e0d73f9],.plan-title polyline[data-v-0e0d73f9],.plan-title rect[data-v-0e0d73f9]{color:inherit}.plan-title h1[data-v-0e0d73f9]{font-size:2.375em;font-weight:800;margin-bottom:5px}.plan-title h2[data-v-0e0d73f9]{font-size:1.25em;font-weight:500}@media (prefers-color-scheme:dark){.plan-title h1[data-v-0e0d73f9]{color:#bec6cf}.plan-title h2[data-v-0e0d73f9]{color:#7d858c}}",""])},JOXf:function(e,a,t){"use strict";t("nr4+")},NDil:function(e,a,t){var i=t("Hu+x");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},"O/KT":function(e,a,t){"use strict";t("NDil")},R6Y3:function(e,a,t){"use strict";t("Xm12")},Xm12:function(e,a,t){var i=t("q8nf");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},mUdl:function(e,a,t){"use strict";t("6KZ8")},"nr4+":function(e,a,t){var i=t("3eeM");"string"==typeof i&&(i=[[e.i,i,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,n);i.locals&&(e.exports=i.locals)},q8nf:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".mobile-header[data-v-699fe34a]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-699fe34a]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-699fe34a]{text-align:left}.mobile-header .location-name[data-v-699fe34a]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-699fe34a]{text-align:right}.mobile-header .icon[data-v-699fe34a]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-699fe34a]{display:flex;margin-bottom:15px}}@media (prefers-color-scheme:dark){.mobile-header[data-v-699fe34a]{background:#131414}.mobile-header .location-name[data-v-699fe34a]{color:#bec6cf}}",""])},wz3J:function(e,a,t){"use strict";var i=t("Nv84"),n=t("CjXH"),o=t("L2JU"),r=t("vDqi"),d=t.n(r);function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function p(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var s={name:"PlanPricingTables",components:{HardDriveIcon:n.F,ButtonBase:i.a},props:["customRoute"],data:function(){return{plans:void 0}},computed:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){p(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},Object(o.b)(["user"])),methods:{selectPlan:function(e){this.$emit("selected-plan",e);var a=this.customRoute?this.customRoute:"UpgradeBilling";this.$router.push({name:a})}},created:function(){var e=this;d.a.get("/api/pricing").then((function(a){e.plans=a.data.filter((function(a){return a.data.attributes.capacity>e.user.data.attributes.storage_capacity})),e.$emit("load",!1)}))}},c=(t("mUdl"),t("KHd+")),f=Object(c.a)(s,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return e.plans?t("div",{staticClass:"plans-wrapper"},e._l(e.plans,(function(a,i){return t("article",{key:i,staticClass:"plan"},[t("div",{staticClass:"plan-wrapper"},[t("header",{staticClass:"plan-header"},[t("div",{staticClass:"icon"},[t("hard-drive-icon",{staticClass:"text-theme",attrs:{size:"26"}})],1),e._v(" "),t("h1",{staticClass:"title"},[e._v(e._s(a.data.attributes.name))]),e._v(" "),t("h2",{staticClass:"description"},[e._v(e._s(a.data.attributes.description))])]),e._v(" "),t("section",{staticClass:"plan-features"},[t("b",{staticClass:"storage-size"},[e._v(e._s(a.data.attributes.capacity_formatted))]),e._v(" "),t("span",{staticClass:"storage-description"},[e._v(e._s(e.$t("page_pricing_tables.storage_capacity")))])]),e._v(" "),t("footer",{staticClass:"plan-footer"},[t("b",{staticClass:"price text-theme"},[e._v("\n                    "+e._s(a.data.attributes.price)+"/"+e._s(e.$t("global.monthly_ac"))+"\n                    "),a.data.attributes.tax_rates.length>0?t("small",{staticClass:"vat-disclaimer"},[e._v(e._s(e.$t("page_pricing_tables.vat_excluded")))]):e._e()]),e._v(" "),t("ButtonBase",{staticClass:"sign-in-button",attrs:{type:"submit","button-style":"secondary"},nativeOn:{click:function(t){return e.selectPlan(a)}}},[e._v("\n                    "+e._s(e.$t("global.get_it"))+"\n                ")])],1)])])})),0):e._e()}),[],!1,null,"1057f6d0",null);a.a=f.exports}}]);