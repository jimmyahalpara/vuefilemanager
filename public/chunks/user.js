(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"+Pqb":function(e,t,a){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(a("8L2t"),a("KHd+")),s=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"progress-bar"},[t("span",{staticClass:"bg-theme",style:{width:this.progress+"%"}})])}),[],!1,null,"6ec2be7a",null);t.a=s.exports},"+v8A":function(e,t,a){var n=a("hw5j");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"0rhn":function(e,t,a){var n=a("MWZw");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},"2Sb1":function(e,t,a){"use strict";var n={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:a("CjXH").g}},i=(a("JOXf"),a("KHd+")),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-header"},[e.canBack?a("div",{staticClass:"go-back",on:{click:function(t){return e.$router.back()}}},[a("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),a("div",{staticClass:"content"},[a("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"9fd0a424",null);t.a=s.exports},"3OWm":function(e,t,a){"use strict";a.r(t);var n=a("CjXH"),i=a("xnZf"),s=a("D62o"),r=a("THmQ"),o=a("2Sb1"),d=a("kPoH"),l=a("zTYo"),c=a("L2JU"),m=a("vDqi"),v=a.n(m);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var u={name:"Profile",components:{StorageItemDetail:i.a,CreditCardIcon:n.n,HardDriveIcon:n.B,SectionTitle:r.a,FileTextIcon:n.w,MobileHeader:s.a,PageHeader:o.a,ColorLabel:d.a,Trash2Icon:n.ab,UserIcon:n.eb,LockIcon:n.I,Spinner:l.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(c.b)(["config"]),{admin:function(){return this.$store.getters.user?this.$store.getters.user:void 0}}),data:function(){return{isLoading:!0,user:void 0}},methods:{fetchUser:function(){var e=this;v.a.get("/api/admin/users/"+this.$route.params.id+"/detail").then((function(t){e.user=t.data,e.isLoading=!1}))}},created:function(){this.fetchUser()}},b=(a("T+jz"),a("KHd+")),h=Object(b.a)(u,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"single-page"}},[e.isLoading?e._e():a("div",{attrs:{id:"page-content"}},[a("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("PageHeader",{attrs:{"can-back":!0,title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),a("div",{staticClass:"content-page"},[a("div",{staticClass:"user-thumbnail"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:e.user.data.relationships.settings.data.attributes.avatar,alt:e.user.data.relationships.settings.data.attributes.name}})]),e._v(" "),a("div",{staticClass:"info"},[a("b",{staticClass:"name"},[e._v("\n                        "+e._s(e.user.data.relationships.settings.data.attributes.name)+"\n                        "),a("ColorLabel",{attrs:{color:"purple"}},[e._v("\n                            "+e._s(e.user.data.attributes.role)+"\n                        ")])],1),e._v(" "),a("span",{staticClass:"email"},[e._v(e._s(e.user.data.attributes.email))])])]),e._v(" "),a("div",{staticClass:"menu-list-wrapper horizontal"},[a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserDetail"}}},[a("div",{staticClass:"icon text-theme"},[a("user-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.detail"))+"\n                    ")])]),e._v(" "),a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserStorage"}}},[a("div",{staticClass:"icon text-theme"},[a("hard-drive-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.storage"))+"\n                    ")])]),e._v(" "),e.config.isSaaS?a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserSubscription"}}},[a("div",{staticClass:"icon text-theme"},[a("credit-card-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.subscription"))+"\n                    ")])]):e._e(),e._v(" "),e.config.isSaaS?a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserInvoices"}}},[a("div",{staticClass:"icon text-theme"},[a("file-text-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.invoices"))+"\n                    ")])]):e._e(),e._v(" "),a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserPassword"}}},[a("div",{staticClass:"icon text-theme"},[a("lock-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.password"))+"\n                    ")])]),e._v(" "),e.admin&&e.user.data.relationships.settings.data.attributes.name!==e.admin.data.relationships.settings.data.attributes.name?a("router-link",{staticClass:"menu-list-item link border-bottom-theme",attrs:{replace:"",to:{name:"UserDelete"}}},[a("div",{staticClass:"icon text-theme"},[a("trash2-icon",{attrs:{size:"17"}})],1),e._v(" "),a("div",{staticClass:"label text-theme"},[e._v("\n                        "+e._s(e.$t("admin_page_user.tabs.delete"))+"\n                    ")])]):e._e()],1),e._v(" "),a("router-view",{attrs:{user:e.user},on:{"reload-user":e.fetchUser}})],1)],1),e._v(" "),e.isLoading?a("div",{attrs:{id:"loader"}},[a("Spinner")],1):e._e()])}),[],!1,null,"cbea643a",null);t.default=h.exports},"3eeM":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".page-header[data-v-9fd0a424] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-9fd0a424] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-9fd0a424] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-9fd0a424] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-9fd0a424] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-9fd0a424] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-9fd0a424] {\n    background: #131414;\n}\n.page-header .title[data-v-9fd0a424] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-9fd0a424] {\n    fill: #00BC7E;\n}\n}\n",""])},"46da":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".user-thumbnail[data-v-cbea643a] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding-bottom: 10px;\n  padding-top: 15px;\n}\n.user-thumbnail .avatar[data-v-cbea643a] {\n  margin-right: 20px;\n  position: relative;\n}\n.user-thumbnail .avatar img[data-v-cbea643a] {\n  line-height: 0;\n  width: 62px;\n  height: 62px;\n  border-radius: 12px;\n  z-index: 1;\n  position: relative;\n}\n.user-thumbnail .avatar img.blurred[data-v-cbea643a] {\n  position: absolute;\n  left: 0;\n  top: 2px;\n  z-index: 0;\n  -webkit-filter: blur(8px);\n          filter: blur(8px);\n  opacity: 0.5;\n  top: 0;\n}\n.user-thumbnail .info .name[data-v-cbea643a] {\n  display: block;\n  font-size: 1.0625em;\n  line-height: 1;\n}\n.user-thumbnail .info .email[data-v-cbea643a] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.875em;\n}\n@media (prefers-color-scheme: dark) {\n.user-thumbnail .info .email[data-v-cbea643a] {\n    color: #7d858c;\n}\n}\n",""])},"8L2t":function(e,t,a){"use strict";var n=a("YQqd");a.n(n).a},JOXf:function(e,t,a){"use strict";var n=a("nr4+");a.n(n).a},MWZw:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".color-label[data-v-5c508dbf] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-5c508dbf] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-5c508dbf] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-5c508dbf] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-5c508dbf] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},"T+jz":function(e,t,a){"use strict";var n=a("cQjd");a.n(n).a},THmQ:function(e,t,a){"use strict";var n={name:"SectionTitle"},i=(a("UHE7"),a("KHd+")),s=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);t.a=s.exports},UHE7:function(e,t,a){"use strict";var n=a("UmJ6");a.n(n).a},UmJ6:function(e,t,a){var n=a("vFyo");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},YQqd:function(e,t,a){var n=a("gvpH");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},cQjd:function(e,t,a){var n=a("46da");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},gvpH:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".progress-bar[data-v-6ec2be7a] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-6ec2be7a] {\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-6ec2be7a] {\n    background: #1e2024;\n}\n}\n",""])},hw5j:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".detail-storage-item[data-v-d9e0536e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-d9e0536e], .detail-storage-item.images .icon line[data-v-d9e0536e], .detail-storage-item.images .icon polyline[data-v-d9e0536e], .detail-storage-item.images .icon rect[data-v-d9e0536e], .detail-storage-item.images .icon circle[data-v-d9e0536e], .detail-storage-item.images .icon polygon[data-v-d9e0536e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-d9e0536e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-d9e0536e], .detail-storage-item.videos .icon line[data-v-d9e0536e], .detail-storage-item.videos .icon polyline[data-v-d9e0536e], .detail-storage-item.videos .icon rect[data-v-d9e0536e], .detail-storage-item.videos .icon circle[data-v-d9e0536e], .detail-storage-item.videos .icon polygon[data-v-d9e0536e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-d9e0536e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-d9e0536e], .detail-storage-item.audios .icon line[data-v-d9e0536e], .detail-storage-item.audios .icon polyline[data-v-d9e0536e], .detail-storage-item.audios .icon rect[data-v-d9e0536e], .detail-storage-item.audios .icon circle[data-v-d9e0536e], .detail-storage-item.audios .icon polygon[data-v-d9e0536e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-d9e0536e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-d9e0536e], .detail-storage-item.documents .icon line[data-v-d9e0536e], .detail-storage-item.documents .icon polyline[data-v-d9e0536e], .detail-storage-item.documents .icon rect[data-v-d9e0536e], .detail-storage-item.documents .icon circle[data-v-d9e0536e], .detail-storage-item.documents .icon polygon[data-v-d9e0536e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-d9e0536e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-d9e0536e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-d9e0536e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-d9e0536e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-d9e0536e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-d9e0536e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-d9e0536e], .detail-storage-item.others .icon line[data-v-d9e0536e], .detail-storage-item.others .icon polyline[data-v-d9e0536e], .detail-storage-item.others .icon rect[data-v-d9e0536e], .detail-storage-item.others .icon circle[data-v-d9e0536e], .detail-storage-item.others .icon polygon[data-v-d9e0536e], .detail-storage-item.disk .icon path[data-v-d9e0536e], .detail-storage-item.disk .icon line[data-v-d9e0536e], .detail-storage-item.disk .icon polyline[data-v-d9e0536e], .detail-storage-item.disk .icon rect[data-v-d9e0536e], .detail-storage-item.disk .icon circle[data-v-d9e0536e], .detail-storage-item.disk .icon polygon[data-v-d9e0536e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-d9e0536e] span, .detail-storage-item.disk .storage-progress[data-v-d9e0536e] span {\n    background: #41454e;\n}\n}\n",""])},jCWY:function(e,t,a){"use strict";var n=a("+v8A");a.n(n).a},kPoH:function(e,t,a){"use strict";var n={name:"ColorLabel",props:["color"]},i=(a("m6y/"),a("KHd+")),s=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"5c508dbf",null);t.a=s.exports},"m6y/":function(e,t,a){"use strict";var n=a("0rhn");a.n(n).a},"nr4+":function(e,t,a){var n=a("3eeM");"string"==typeof n&&(n=[[e.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(n,i);n.locals&&(e.exports=n.locals)},vFyo:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".text-label[data-v-6d799cf2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-6d799cf2] {\n    color: #00BC7E;\n}\n}\n",""])},xnZf:function(e,t,a){"use strict";var n=a("+Pqb"),i=a("CjXH"),s={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.B,FileTextIcon:i.w,ProgressBar:n.a,MusicIcon:i.O,VideoIcon:i.hb,ImageIcon:i.D,FileIcon:i.v}},r=(a("jCWY"),a("KHd+")),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("article",{staticClass:"detail-storage-item",class:e.type},[a("div",{staticClass:"header-storage-item"},[a("div",{staticClass:"icon"},["images"==e.type?a("image-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"videos"==e.type?a("video-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"audios"==e.type?a("music-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"documents"==e.type?a("file-text-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"others"==e.type?a("file-icon",{attrs:{size:"23"}}):e._e(),e._v(" "),"disk"==e.type?a("hard-drive-icon",{attrs:{size:"23"}}):e._e()],1),e._v(" "),a("div",{staticClass:"title"},[a("b",{staticClass:"type"},[e._v(e._s(e.title))]),e._v(" "),a("span",{staticClass:"total-size"},[e._v(e._s(e.used))])])]),e._v(" "),a("ProgressBar",{staticClass:"storage-progress",attrs:{progress:e.percentage}})],1)}),[],!1,null,"d9e0536e",null);t.a=o.exports}}]);