(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{"0OA4":function(e,a,t){var r=t("8K6n");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},"1L+q":function(e,a,t){"use strict";t("4EzG")},"2Sb1":function(e,a,t){"use strict";var r={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:t("CjXH").h}},o=(t("JOXf"),t("KHd+")),i=Object(o.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"page-header"},[e.canBack?t("div",{staticClass:"go-back",on:{click:function(a){return e.$router.back()}}},[t("chevron-left-icon",{attrs:{size:"17"}})],1):e._e(),e._v(" "),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[e._v(e._s(e.title))])])])}),[],!1,null,"9fd0a424",null);a.a=i.exports},"2jUW":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".dropzone[data-v-5d141a68]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-5d141a68]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-5d141a68]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-5d141a68],.dropzone.is-error .icon-upload polyline[data-v-5d141a68],.dropzone.is-error .icon-upload rect[data-v-5d141a68]{stroke:#fd397a}.dropzone input[type=file][data-v-5d141a68]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-5d141a68]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-5d141a68]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-5d141a68]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-5d141a68],.dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68],.dropzone .dropzone-message .icon-upload rect[data-v-5d141a68]{color:inherit}.dropzone .dropzone-message .dropzone-title[data-v-5d141a68]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-5d141a68]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-5d141a68]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-5d141a68]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-5d141a68]{fill:#1b2539}@media (prefers-color-scheme:dark){.dropzone[data-v-5d141a68]{border-color:hsla(0,0%,100%,.2)}.dropzone .dropzone-message .icon-upload line[data-v-5d141a68],.dropzone .dropzone-message .icon-upload path[data-v-5d141a68],.dropzone .dropzone-message .icon-upload polyline[data-v-5d141a68]{color:inherit}.dropzone .dropzone-message .dropzone-description[data-v-5d141a68]{color:#7d858c}}",""])},"3eeM":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".page-header[data-v-9fd0a424]{display:flex;align-items:center;background:#fff;z-index:9;width:100%;position:sticky;top:0;padding-top:20px;padding-bottom:20px}.page-header .title[data-v-9fd0a424]{font-size:1.125em;font-weight:700;color:#1b2539}.page-header .go-back[data-v-9fd0a424]{margin-right:10px;cursor:pointer}.page-header .go-back svg[data-v-9fd0a424]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:960px){.page-header .title[data-v-9fd0a424]{font-size:1.125em}}@media only screen and (max-width:690px){.page-header[data-v-9fd0a424]{display:none}}@media (prefers-color-scheme:dark){.page-header[data-v-9fd0a424]{background:#131414}.page-header .title[data-v-9fd0a424]{color:#bec6cf}.page-header .icon path[data-v-9fd0a424]{fill:#00bc7e}}",""])},"4EzG":function(e,a,t){var r=t("jexE");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},"4TWA":function(e,a,t){"use strict";var r=t("CjXH"),o=t("LvDl"),i={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:r.u,UserIcon:r.jb,ChevronDownIcon:r.g},watch:{query:Object(o.debounce)((function(e){this.searchedResults=Object(o.omitBy)(this.options,(function(a){return!a.label.toLowerCase().includes(e.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(e){this.$emit("input",e.value),this.selected=e,this.isOpen=!1},openMenu:function(){var e=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return e.$refs.search.focus()}))}},created:function(){var e=this;this.default&&(this.selected=this.options.find((function(a){return a.value===e.default})))}},d=(t("7y9c"),t("KHd+")),s=Object(d.a)(i,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"select"},[t("div",{staticClass:"input-area",class:{"is-active":e.isOpen,"is-error":e.isError},on:{click:e.openMenu}},[e.selected?t("div",{staticClass:"selected"},[e.selected.icon?t("div",{staticClass:"option-icon"},["user"===e.selected.icon?t("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===e.selected.icon?t("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(e.selected.label))])]):e._e(),e._v(" "),e.selected?e._e():t("div",{staticClass:"not-selected"},[t("span",{staticClass:"option-value placehoder"},[e._v(e._s(e.placeholder))])]),e._v(" "),t("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),e._v(" "),t("transition",{attrs:{name:"slide-in"}},[e.isOpen?t("div",{staticClass:"input-options"},[e.options.length>5?t("div",{staticClass:"select-search"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:e.$t("select_search_placeholder")},domProps:{value:e.query},on:{input:function(a){a.target.composing||(e.query=a.target.value)}}})]):e._e(),e._v(" "),t("ul",{staticClass:"option-list"},e._l(e.optionList,(function(a,r){return t("li",{key:r,staticClass:"option-item",on:{click:function(t){return e.selectOption(a)}}},[a.icon?t("div",{staticClass:"option-icon"},["user"===a.icon?t("user-icon",{attrs:{size:"14"}}):e._e(),e._v(" "),"user-edit"===a.icon?t("edit2-icon",{attrs:{size:"14"}}):e._e()],1):e._e(),e._v(" "),t("span",{staticClass:"option-value"},[e._v(e._s(a.label))])])})),0)]):e._e()])],1)}),[],!1,null,"5fb2ed60",null);a.a=s.exports},"7y9c":function(e,a,t){"use strict";t("0OA4")},"8K6n":function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".select[data-v-5fb2ed60]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-5fb2ed60]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-5fb2ed60]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-5fb2ed60]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-5fb2ed60]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-5fb2ed60]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-5fb2ed60]:last-child{border-bottom:none}.input-area[data-v-5fb2ed60]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-5fb2ed60],.input-area .chevron[data-v-5fb2ed60]{transition:all .15s ease}.input-area.is-active .chevron[data-v-5fb2ed60]{transform:rotate(180deg)}.input-area.is-error[data-v-5fb2ed60]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-5fb2ed60]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-5fb2ed60]{margin-top:-4px;vertical-align:middle}.option-value[data-v-5fb2ed60]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-5fb2ed60]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-5fb2ed60]{transition:all .15s ease}.slide-in-enter[data-v-5fb2ed60]{opacity:0;transform:translateY(-50px)}@media (prefers-color-scheme:dark){.select-search[data-v-5fb2ed60]{background:#1e2024}.select-search .search-input[data-v-5fb2ed60]{background:#131414}.input-area[data-v-5fb2ed60]{background:#1e2024;border-color:#1e2024}.popup-wrapper .input-area[data-v-5fb2ed60]{background:#25272c}.input-options[data-v-5fb2ed60]{background:#1e2024}.input-options .option-item[data-v-5fb2ed60]{border-bottom:none}.input-options .option-item[data-v-5fb2ed60]:hover{background:#2a2c32}.input-options .option-item:hover .option-icon circle[data-v-5fb2ed60],.input-options .option-item:hover .option-icon path[data-v-5fb2ed60]{color:inherit}.input-options .option-item[data-v-5fb2ed60]:last-child{border-bottom:none}.option-value.placehoder[data-v-5fb2ed60]{color:#7d858c}}",""])},A9vf:function(e,a,t){var r=t("WWZj");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},BelR:function(e,a,t){var r=t("2jUW");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},"D+dh":function(e,a,t){"use strict";var r=t("CjXH"),o={name:"ImageInput",props:["image","error"],components:{ImageIcon:r.H,XIcon:r.nb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(e){var a=this,t=e.target.files[0].name,r=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(r)){var o=e.target.files[0],i=new FileReader;i.onload=function(){return a.imagePreview=i.result},i.readAsDataURL(o),this.$emit("input",e.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},i=(t("Obrk"),t("KHd+")),d=Object(i.a)(o,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"dropzone",class:{"is-error":e.error}},[e.imagePreview?t("div",{staticClass:"reset-image",on:{click:e.resetImage}},[t("x-icon",{staticClass:"close-icon text-theme",attrs:{size:"14"}})],1):e._e(),e._v(" "),t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(a){return e.showImagePreview(a)}}}),e._v(" "),e.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:e.imagePreview}}):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload text-theme",attrs:{size:"28"}}),e._v(" "),t("span",{staticClass:"dropzone-title"},[e._v("\n            "+e._s(e.$t("input_image.title"))+"\n        ")]),e._v(" "),t("span",{staticClass:"dropzone-description"},[e._v("\n            "+e._s(e.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"5d141a68",null);a.a=d.exports},D62o:function(e,a,t){"use strict";var r=t("xCqy"),o=t("CjXH"),i={name:"MobileHeader",props:["title"],components:{ChevronLeftIcon:o.h,MenuIcon:o.P},methods:{showMobileNavigation:function(){r.a.$emit("mobile-menu:show","user-navigation")},goBack:function(){this.$router.back()}}},d=(t("R6Y3"),t("KHd+")),s=Object(d.a)(i,(function(){var e=this.$createElement,a=this._self._c||e;return a("header",{staticClass:"mobile-header"},[a("div",{staticClass:"go-back",on:{click:this.goBack}},[a("chevron-left-icon",{staticClass:"icon",attrs:{size:"17"}})],1),this._v(" "),a("div",{staticClass:"location-name"},[this._v(this._s(this.title))]),this._v(" "),a("div",{staticClass:"mobile-menu",on:{click:this.showMobileNavigation}},[a("menu-icon",{staticClass:"icon",attrs:{size:"17"}})],1)])}),[],!1,null,"699fe34a",null);a.a=s.exports},JOXf:function(e,a,t){"use strict";t("nr4+")},Obrk:function(e,a,t){"use strict";t("BelR")},R6Y3:function(e,a,t){"use strict";t("Xm12")},"T3V+":function(e,a,t){"use strict";t.r(a);var r=t("o0o1"),o=t.n(r),i=t("A5+z"),d=t("4TWA"),s=t("D+dh"),n=t("eZ9V"),c=t("D62o"),l=t("THmQ"),p=t("Nv84"),u=t("2Sb1"),v=t("TJPC"),m=t("L2JU"),f=t("xCqy"),b=t("vDqi"),g=t.n(b);function h(e,a,t,r,o,i,d){try{var s=e[i](d),n=s.value}catch(e){return void t(e)}s.done?a(n):Promise.resolve(n).then(r,o)}function _(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}var w={name:"Profile",components:{ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SectionTitle:l.a,MobileHeader:c.a,SelectInput:d.a,ButtonBase:p.a,ImageInput:s.a,PageHeader:u.a,FormLabel:n.a,required:v.a},computed:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?_(Object(t),!0).forEach((function(a){x(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},Object(m.b)(["roles"])),data:function(){return{isLoading:!1,user:{role:"",avatar:void 0,name:"",email:"",password:"",password_confirmation:"",storage_capacity:5}}},methods:{createUser:function(){var e,a=this;return(e=o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.createUser.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isLoading=!0,(t=new FormData).append("name",a.user.name),t.append("role",a.user.role),t.append("email",a.user.email),t.append("password",a.user.password),t.append("storage_capacity",a.user.storage_capacity),t.append("password_confirmation",a.user.password_confirmation),a.user.avatar&&t.append("avatar",a.user.avatar),g.a.post("/api/admin/users/create",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){a.isLoading=!1,f.a.$emit("toaster",{type:"success",message:a.$t("toaster.created_user")}),a.$router.push({name:"UserDetail",params:{id:e.data.data.id}})})).catch((function(e){422==e.response.status?(e.response.data.errors.email&&a.$refs.createUser.setErrors({email:e.response.data.errors.email}),e.response.data.errors.password&&a.$refs.createUser.setErrors({password:e.response.data.errors.password}),e.response.data.errors.storage_capacity&&a.$refs.createUser.setErrors({"storage capacity":a.$t("errors.capacity_digit")})):f.a.$emit("alert:open",{title:a.$t("popup_error.title"),message:a.$t("popup_error.message")}),a.isLoading=!1}));case 15:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(r,o){var i=e.apply(a,t);function d(e){h(i,r,o,d,s,"next",e)}function s(e){h(i,r,o,d,s,"throw",e)}d(void 0)}))})()}}},y=(t("uVvF"),t("KHd+")),k=Object(y.a)(w,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"single-page"}},[t("div",{staticClass:"small-width",attrs:{id:"page-content"}},[t("MobileHeader",{attrs:{title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),t("PageHeader",{attrs:{"can-back":!0,title:e.$t(e.$router.currentRoute.meta.title)}}),e._v(" "),t("div",{staticClass:"content-page"},[t("ValidationObserver",{ref:"createUser",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.createUser(a)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("div",{staticClass:"form-group"},[t("FormLabel",[e._v(e._s(e.$t("admin_page_user.create_user.group_details")))]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_page_user.create_user.avatar")))]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"avatar"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("ImageInput",{attrs:{error:r[0]},model:{value:e.user.avatar,callback:function(a){e.$set(e.user,"avatar",a)},expression:"user.avatar"}})]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_registration.label_email"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"email",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.email,expression:"user.email"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_email"),type:"email"},domProps:{value:e.user.email},on:{input:function(a){a.target.composing||e.$set(e.user,"email",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_registration.label_name"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"user name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.name,expression:"user.name"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_name"),type:"text"},domProps:{value:e.user.name},on:{input:function(a){a.target.composing||e.$set(e.user,"name",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"wrapper-inline"},[t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_registration.label_pass"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password,expression:"user.password"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("page_registration.placeholder_pass"),type:"password"},domProps:{value:e.user.password},on:{input:function(a){a.target.composing||e.$set(e.user,"password",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("page_registration.label_confirm_pass"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"password confirm",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.password_confirmation,expression:"user.password_confirmation"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{placeholder:e.$t("admin_page_user.create_user.label_conf_pass"),type:"password"},domProps:{value:e.user.password_confirmation},on:{input:function(a){a.target.composing||e.$set(e.user,"password_confirmation",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1)])],1),e._v(" "),t("div",{staticClass:"form-group"},[t("FormLabel",[e._v(e._s(e.$t("admin_page_user.create_user.group_settings")))]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_page_user.select_role"))+":")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"permission",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("SelectInput",{attrs:{options:e.$translateSelectOptions(e.roles),placeholder:e.$t("admin_page_user.select_role"),isError:r[0]},model:{value:e.user.role,callback:function(a){e.$set(e.user,"role",a)},expression:"user.role"}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v(e._s(e.$t("admin_page_user.label_change_capacity")))]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"storage capacity",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.user.storage_capacity,expression:"user.storage_capacity"}],staticClass:"focus-border-theme",class:{"is-error":r[0]},attrs:{min:"1",max:"999999999",placeholder:e.$t("admin_page_user.label_change_capacity"),type:"number"},domProps:{value:e.user.storage_capacity},on:{input:function(a){a.target.composing||e.$set(e.user,"storage_capacity",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1)],1),e._v(" "),t("div",{staticClass:"form-group"},[t("ButtonBase",{attrs:{disabled:e.isLoading,loading:e.isLoading,"button-style":"theme",type:"submit"}},[e._v("\n                        "+e._s(e.$t("admin_page_user.create_user.submit"))+"\n                    ")])],1)]}}])})],1)],1)])}),[],!1,null,"adcddc16",null);a.default=k.exports},THmQ:function(e,a,t){"use strict";var r={name:"SectionTitle"},o=(t("UHE7"),t("KHd+")),i=Object(o.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"6d799cf2",null);a.a=i.exports},TJPC:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));function r(e){return null==e}function o(e){return Array.isArray(e)&&0===e.length}var i={validate:function(e,a){var t=(void 0===a?{allowFalse:!0}:a).allowFalse,i={valid:!1,required:!0};return r(e)||o(e)?i:!1!==e||t?(i.valid=!!String(e).trim().length,i):i},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},UHE7:function(e,a,t){"use strict";t("UmJ6")},UmJ6:function(e,a,t){var r=t("vFyo");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},WWZj:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form[data-v-adcddc16]{max-width:700px}.form.inline-form[data-v-adcddc16]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-adcddc16]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-adcddc16]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-adcddc16]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-adcddc16]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-adcddc16]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-adcddc16]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-adcddc16]:last-child{margin-bottom:0}.form.block-form .button[data-v-adcddc16]{margin-top:50px}.form .inline-wrapper[data-v-adcddc16]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-adcddc16]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-adcddc16]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-adcddc16]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-adcddc16]{display:flex}.single-line-form .submit-button[data-v-adcddc16]{margin-left:20px}.error-message[data-v-adcddc16]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-adcddc16]{width:100%}input[type=email][data-v-adcddc16],input[type=number][data-v-adcddc16],input[type=password][data-v-adcddc16],input[type=text][data-v-adcddc16],textarea[data-v-adcddc16]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-adcddc16],input[type=number].is-error[data-v-adcddc16],input[type=password].is-error[data-v-adcddc16],input[type=text].is-error[data-v-adcddc16],textarea.is-error[data-v-adcddc16]{border-color:#fd397a}input[type=email][data-v-adcddc16]::-moz-placeholder,input[type=number][data-v-adcddc16]::-moz-placeholder,input[type=password][data-v-adcddc16]::-moz-placeholder,input[type=text][data-v-adcddc16]::-moz-placeholder,textarea[data-v-adcddc16]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-adcddc16]:-ms-input-placeholder,input[type=number][data-v-adcddc16]:-ms-input-placeholder,input[type=password][data-v-adcddc16]:-ms-input-placeholder,input[type=text][data-v-adcddc16]:-ms-input-placeholder,textarea[data-v-adcddc16]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-adcddc16]::placeholder,input[type=number][data-v-adcddc16]::placeholder,input[type=password][data-v-adcddc16]::placeholder,input[type=text][data-v-adcddc16]::placeholder,textarea[data-v-adcddc16]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-adcddc16],input[type=number][disabled][data-v-adcddc16],input[type=password][disabled][data-v-adcddc16],input[type=text][disabled][data-v-adcddc16],textarea[disabled][data-v-adcddc16]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-adcddc16]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-adcddc16]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-adcddc16],.additional-link b[data-v-adcddc16]{cursor:pointer}.additional-link a[data-v-adcddc16]:hover,.additional-link b[data-v-adcddc16]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-adcddc16]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-adcddc16]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-adcddc16],.form textarea[data-v-adcddc16]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-adcddc16]{display:block}.form.block-form .block-wrapper label[data-v-adcddc16]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-adcddc16]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-adcddc16]{display:block}.form.inline-form .input-wrapper .error-message[data-v-adcddc16]{position:relative;bottom:0}.form .button[data-v-adcddc16]{padding:14px 32px}.single-line-form[data-v-adcddc16]{display:block}.single-line-form .submit-button[data-v-adcddc16]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-adcddc16],input[type=number][data-v-adcddc16],input[type=password][data-v-adcddc16],input[type=text][data-v-adcddc16],textarea[data-v-adcddc16]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-adcddc16]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-adcddc16]{color:#7d858c}.form.block-form .block-wrapper label[data-v-adcddc16],.form .inline-wrapper .switch-label .input-label[data-v-adcddc16]{color:#bec6cf}input[type=email][data-v-adcddc16],input[type=number][data-v-adcddc16],input[type=password][data-v-adcddc16],input[type=text][data-v-adcddc16],textarea[data-v-adcddc16]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-adcddc16]::-moz-placeholder,input[type=number][data-v-adcddc16]::-moz-placeholder,input[type=password][data-v-adcddc16]::-moz-placeholder,input[type=text][data-v-adcddc16]::-moz-placeholder,textarea[data-v-adcddc16]::-moz-placeholder{color:#7d858c}input[type=email][data-v-adcddc16]:-ms-input-placeholder,input[type=number][data-v-adcddc16]:-ms-input-placeholder,input[type=password][data-v-adcddc16]:-ms-input-placeholder,input[type=text][data-v-adcddc16]:-ms-input-placeholder,textarea[data-v-adcddc16]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-adcddc16]::placeholder,input[type=number][data-v-adcddc16]::placeholder,input[type=password][data-v-adcddc16]::placeholder,input[type=text][data-v-adcddc16]::placeholder,textarea[data-v-adcddc16]::placeholder{color:#7d858c}input[type=email][disabled][data-v-adcddc16],input[type=number][disabled][data-v-adcddc16],input[type=password][disabled][data-v-adcddc16],input[type=text][disabled][data-v-adcddc16],textarea[disabled][data-v-adcddc16]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.popup-wrapper input[type=email][data-v-adcddc16],.popup-wrapper input[type=number][data-v-adcddc16],.popup-wrapper input[type=password][data-v-adcddc16],.popup-wrapper input[type=text][data-v-adcddc16],.popup-wrapper textarea[data-v-adcddc16]{background:#25272c}}",""])},Xm12:function(e,a,t){var r=t("q8nf");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},eZ9V:function(e,a,t){"use strict";var r=t("CjXH"),o={name:"FormLabel",props:["icon"],components:{Edit2Icon:r.u,SettingsIcon:r.bb}},i=(t("1L+q"),t("KHd+")),d=Object(i.a)(o,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[this.icon?this._e():a("edit-2-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}),this._v(" "),"settings"===this.icon?a("settings-icon",{staticClass:"icon text-theme",attrs:{size:"22"}}):this._e(),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"10bcab7e",null);a.a=d.exports},jexE:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form-label[data-v-10bcab7e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-10bcab7e]{margin-right:10px}.form-label .icon circle[data-v-10bcab7e],.form-label .icon path[data-v-10bcab7e]{color:inherit}.form-label .label[data-v-10bcab7e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-10bcab7e]{color:#bec6cf}}",""])},"nr4+":function(e,a,t){var r=t("3eeM");"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,o);r.locals&&(e.exports=r.locals)},q8nf:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".mobile-header[data-v-699fe34a]{padding:10px 0;text-align:center;background:#fff;position:sticky;display:none;z-index:6;top:0}.mobile-header>div[data-v-699fe34a]{flex-grow:1;align-self:center;white-space:nowrap}.mobile-header .go-back[data-v-699fe34a]{text-align:left}.mobile-header .location-name[data-v-699fe34a]{line-height:1;text-align:center;width:100%;vertical-align:middle;font-size:.9375em;color:#1b2539;font-weight:700;max-width:220px;overflow:hidden;text-overflow:ellipsis;display:inline-block}.mobile-header .mobile-menu[data-v-699fe34a]{text-align:right}.mobile-header .icon[data-v-699fe34a]{vertical-align:middle;margin-top:-4px}@media only screen and (max-width:690px){.mobile-header[data-v-699fe34a]{display:flex;margin-bottom:15px}}@media (prefers-color-scheme:dark){.mobile-header[data-v-699fe34a]{background:#131414}.mobile-header .location-name[data-v-699fe34a]{color:#bec6cf}}",""])},uVvF:function(e,a,t){"use strict";t("A9vf")},vFyo:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".text-label[data-v-6d799cf2]{font-size:.75em;color:#afafaf;font-weight:700;display:block;margin-bottom:20px}@media (prefers-color-scheme:dark){.text-label[data-v-6d799cf2]{color:#00bc7e}}",""])}}]);