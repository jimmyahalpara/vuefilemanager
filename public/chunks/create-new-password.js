(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"/MrX":function(a,t,e){var r=e("tT1R");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(a.exports=r.locals)},"7jil":function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-c3dbd394]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-c3dbd394]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-c3dbd394]{margin-left:12px;font-size:1em}.button.solid[data-v-c3dbd394]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-c3dbd394]{color:#fff}.button.outline[data-v-c3dbd394]{border:2px solid #1b2539}.button.outline .text-label[data-v-c3dbd394]{color:#1b2539}.button.outline .icon path[data-v-c3dbd394]{fill:inherit}.button.outline[data-v-c3dbd394]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-c3dbd394]{color:inherit}.dark-mode .button.outline[data-v-c3dbd394]{background:#131414;border-color:#bec6cf}.dark-mode .button.outline .text-label[data-v-c3dbd394]{color:#bec6cf}.sync-alt[data-v-c3dbd394]{-webkit-animation:spin-data-v-c3dbd394 1s linear infinite;animation:spin-data-v-c3dbd394 1s linear infinite}@-webkit-keyframes spin-data-v-c3dbd394{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-c3dbd394{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},ASoH:function(a,t,e){"use strict";var r={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(e("vub6"),e("KHd+")),n=Object(o.a)(r,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"c3dbd394",null);t.a=n.exports},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},TJPC:function(a,t,e){"use strict";e.d(t,"a",(function(){return n}));function r(a){return null==a}function o(a){return Array.isArray(a)&&0===a.length}var n={validate:function(a,t){var e=(void 0===t?{allowFalse:!0}:t).allowFalse,n={valid:!1,required:!0};return r(a)||o(a)?n:!1!==a||e?(n.valid=!!String(a).trim().length,n):n},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},bDRN:function(a,t,e){"use strict";var r={name:"AuthContentWrapper"},o=(e("iYAH"),e("KHd+")),n=Object(o.a)(r,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=n.exports},iYAH:function(a,t,e){"use strict";e("lh0Q")},j8qy:function(a,t,e){"use strict";var r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=e("KHd+"),n=Object(o.a)(r,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=n.exports},lh0Q:function(a,t,e){var r=e("Jx8r");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(a.exports=r.locals)},tT1R:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form.inline-form[data-v-791a35b7]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-791a35b7]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-791a35b7]{position:absolute;left:0}.form.block-form.create-new-password .block-wrapper label[data-v-791a35b7]{width:280px}.form.block-form .block-wrapper[data-v-791a35b7]{display:flex;align-items:center;margin-top:25px;justify-content:center}.form.block-form .block-wrapper[data-v-791a35b7]:first-child{margin-top:0}.form.block-form .block-wrapper label[data-v-791a35b7]{white-space:nowrap;font-size:1.125em;font-weight:700;padding-right:20px;width:200px;text-align:right!important;color:#1b2539;text-align:right}.form.block-form .button[data-v-791a35b7]{margin-top:50px}.input-wrapper .error-message[data-v-791a35b7]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-791a35b7]{width:100%}input[type=email][data-v-791a35b7],input[type=password][data-v-791a35b7],input[type=text][data-v-791a35b7],textarea[data-v-791a35b7]{background:#f4f5f6;border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}input[type=email].is-error[data-v-791a35b7],input[type=password].is-error[data-v-791a35b7],input[type=text].is-error[data-v-791a35b7],textarea.is-error[data-v-791a35b7]{border-color:#fd397a}input[type=email][data-v-791a35b7]::-moz-placeholder,input[type=password][data-v-791a35b7]::-moz-placeholder,input[type=text][data-v-791a35b7]::-moz-placeholder,textarea[data-v-791a35b7]::-moz-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-791a35b7]:-ms-input-placeholder,input[type=password][data-v-791a35b7]:-ms-input-placeholder,input[type=text][data-v-791a35b7]:-ms-input-placeholder,textarea[data-v-791a35b7]:-ms-input-placeholder{color:#a4adb6;font-size:1em}input[type=email][data-v-791a35b7]::placeholder,input[type=password][data-v-791a35b7]::placeholder,input[type=text][data-v-791a35b7]::placeholder,textarea[data-v-791a35b7]::placeholder{color:#a4adb6;font-size:1em}input[type=email][disabled][data-v-791a35b7],input[type=password][disabled][data-v-791a35b7],input[type=text][disabled][data-v-791a35b7],textarea[disabled][data-v-791a35b7]{color:#a4adb6;cursor:not-allowed}.additional-link[data-v-791a35b7]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-791a35b7],.additional-link b[data-v-791a35b7]{cursor:pointer}.additional-link a[data-v-791a35b7]:hover,.additional-link b[data-v-791a35b7]:hover{text-decoration:underline}@media only screen and (max-width:960px){.form .button[data-v-791a35b7]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-791a35b7],.form textarea[data-v-791a35b7]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-791a35b7]{display:block}.form.block-form .block-wrapper label[data-v-791a35b7]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-791a35b7]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-791a35b7]{display:block}.form.inline-form .input-wrapper .error-message[data-v-791a35b7]{position:relative;bottom:0}.form .button[data-v-791a35b7]{padding:14px 32px}input[type=email][data-v-791a35b7],input[type=password][data-v-791a35b7],input[type=text][data-v-791a35b7],textarea[data-v-791a35b7]{padding:14px 20px}}.dark-mode .form.block-form .block-wrapper label[data-v-791a35b7]{color:#bec6cf}.dark-mode input[type=email][data-v-791a35b7],.dark-mode input[type=password][data-v-791a35b7],.dark-mode input[type=text][data-v-791a35b7],.dark-mode textarea[data-v-791a35b7]{background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-791a35b7]::-moz-placeholder,.dark-mode input[type=password][data-v-791a35b7]::-moz-placeholder,.dark-mode input[type=text][data-v-791a35b7]::-moz-placeholder,.dark-mode textarea[data-v-791a35b7]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-791a35b7]:-ms-input-placeholder,.dark-mode input[type=password][data-v-791a35b7]:-ms-input-placeholder,.dark-mode input[type=text][data-v-791a35b7]:-ms-input-placeholder,.dark-mode textarea[data-v-791a35b7]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-791a35b7]::placeholder,.dark-mode input[type=password][data-v-791a35b7]::placeholder,.dark-mode input[type=text][data-v-791a35b7]::placeholder,.dark-mode textarea[data-v-791a35b7]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-791a35b7],.dark-mode input[type=password][disabled][data-v-791a35b7],.dark-mode input[type=text][disabled][data-v-791a35b7],.dark-mode textarea[disabled][data-v-791a35b7]{color:#7d858c}.auth-logo-text[data-v-791a35b7]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-791a35b7]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-791a35b7]{min-width:310px}.auth-form .additional-link a[data-v-791a35b7]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-791a35b7]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-791a35b7]{width:120px;margin-bottom:20px}.auth-form h1[data-v-791a35b7]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-791a35b7]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-791a35b7]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-791a35b7]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-791a35b7]{width:100%}.auth-form h1[data-v-791a35b7]{font-size:1.875em}.auth-form h2[data-v-791a35b7]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-791a35b7]{font-size:1.375em}.auth-form h2[data-v-791a35b7]{font-size:1.125em}.auth-form input[data-v-791a35b7]{min-width:0}.auth-form .additional-link[data-v-791a35b7]{font-size:.9375em}}.dark-mode .auth-form .additional-link[data-v-791a35b7],.dark-mode .auth-form h1[data-v-791a35b7],.dark-mode .auth-form h2[data-v-791a35b7]{color:#bec6cf}",""])},"tb+D":function(a,t,e){var r=e("7jil");"string"==typeof r&&(r=[[a.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(r,o);r.locals&&(a.exports=r.locals)},vub6:function(a,t,e){"use strict";e("tb+D")},x5Cv:function(a,t,e){"use strict";e.r(t);var r=e("o0o1"),o=e.n(r),n=e("bDRN"),i=e("A5+z"),s=e("j8qy"),d=e("ASoH"),l=e("TJPC"),p=e("L2JU"),c=e("vDqi"),u=e.n(c);function b(a,t,e,r,o,n,i){try{var s=a[n](i),d=s.value}catch(a){return void e(a)}s.done?t(d):Promise.resolve(d).then(r,o)}function m(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,r)}return e}function v(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var f={name:"CreateNewPassword",components:{AuthContentWrapper:n.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,AuthContent:s.a,AuthButton:d.a,required:l.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?m(Object(e),!0).forEach((function(t){v(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):m(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(p.b)(["config"])),data:function(){return{isLoading:!1,recoverPassword:{token:void 0,email:"",newPassword:"",newPasswordConfirm:""}}},methods:{goToAuthPage:function(a){this.$refs.auth.$children.forEach((function(t){t.isVisible=!1,t.$props.name===a&&(t.isVisible=!0)}))},createNewPassword:function(){var a,t=this;return(a=o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.create_new_password.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,u.a.post(t.$store.getters.api+"/password/reset",{email:t.recoverPassword.email,token:t.recoverPassword.token,password:t.recoverPassword.newPassword,password_confirmation:t.recoverPassword.newPasswordConfirm}).then((function(){t.isLoading=!1,t.goToAuthPage("password-reset-successfully")})).catch((function(a){422==a.response.status&&(a.response.data.error&&t.$refs.create_new_password.setErrors({"E-Mail":a.response.data.error}),a.response.data.errors.password&&t.$refs.create_new_password.setErrors({"New Password":a.response.data.errors.password})),t.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(r,o){var n=a.apply(t,e);function i(a){b(n,r,o,i,s,"next",a)}function s(a){b(n,r,o,i,s,"throw",a)}i(void 0)}))})()}},created:function(){this.recoverPassword.token=this.$route.query.token}},h=(e("yEd3"),e("KHd+")),w=Object(h.a)(f,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"create-new-password",visible:!0}},[a.config.app_logo?e("img",{staticClass:"logo",attrs:{src:a.$getImage(a.config.app_logo),alt:a.config.app_name}}):a._e(),a._v(" "),a.config.app_logo?a._e():e("b",{staticClass:"auth-logo-text"},[a._v(a._s(a.config.app_name))]),a._v(" "),e("h1",[a._v(a._s(a.$t("page_create_password.title")))]),a._v(" "),e("h2",[a._v(a._s(a.$t("page_create_password.subtitle"))+":")]),a._v(" "),e("ValidationObserver",{ref:"create_new_password",staticClass:"form block-form create-new-password",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.createNewPassword(t)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("page_create_password.label_email"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"E-Mail",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.recoverPassword.email,expression:"recoverPassword.email"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("page_login.placeholder_email"),type:"email"},domProps:{value:a.recoverPassword.email},on:{input:function(t){t.target.composing||a.$set(a.recoverPassword,"email",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("page_create_password.label_new_pass"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"New Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.recoverPassword.newPassword,expression:"recoverPassword.newPassword"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("page_create_password.label_new_pass"),type:"password"},domProps:{value:a.recoverPassword.newPassword},on:{input:function(t){t.target.composing||a.$set(a.recoverPassword,"newPassword",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v(a._s(a.$t("page_create_password.label_confirm_pass"))+":")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Confirm Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var r=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.recoverPassword.newPasswordConfirm,expression:"recoverPassword.newPasswordConfirm"}],class:{"is-error":r[0]},attrs:{placeholder:a.$t("page_create_password.label_confirm_pass"),type:"password"},domProps:{value:a.recoverPassword.newPasswordConfirm},on:{input:function(t){t.target.composing||a.$set(a.recoverPassword,"newPasswordConfirm",t.target.value)}}}),a._v(" "),r[0]?e("span",{staticClass:"error-message"},[a._v(a._s(r[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",[e("AuthButton",{attrs:{icon:"chevron-right",text:a.$t("page_create_password.button_update"),loading:a.isLoading,disabled:a.isLoading}})],1)]}}])}),a._v(" "),e("span",{staticClass:"additional-link"},[a._v(a._s(a.$t("page_forgotten_password.password_remember_text"))+"\n            "),e("router-link",{attrs:{to:{name:"SignIn"}}},[a._v("\n                "+a._s(a.$t("page_forgotten_password.password_remember_button"))+"\n            ")])],1)],1),a._v(" "),e("AuthContent",{attrs:{name:"password-reset-successfully",visible:!1}},[a.config.app_logo?e("img",{staticClass:"logo",attrs:{src:a.$getImage(a.config.app_logo),alt:a.config.app_name}}):a._e(),a._v(" "),a.config.app_logo?a._e():e("b",{staticClass:"auth-logo-text"},[a._v(a._s(a.config.app_name))]),a._v(" "),e("h1",[a._v(a._s(a.$t("page_forgotten_password.pass_reseted_title")))]),a._v(" "),e("h2",[a._v(a._s(a.$t("page_forgotten_password.pass_reseted_subtitle")))]),a._v(" "),e("router-link",{attrs:{to:{name:"SignIn"}}},[e("AuthButton",{attrs:{icon:"chevron-right",text:a.$t("page_forgotten_password.pass_reseted_signin")}})],1)],1)],1)}),[],!1,null,"791a35b7",null);t.default=w.exports},yEd3:function(a,t,e){"use strict";e("/MrX")}}]);