(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"+SgC":function(a,n,t){"use strict";t.r(n);var e=t("o0o1"),o=t.n(e),r=t("A5+z"),i=t("bDRN"),d=t("4TWA"),s=t("xxrA"),p=t("D+dh"),l=t("eZ9V"),c=t("KnjL"),m=t("j8qy"),u=t("ASoH"),b=t("CjXH"),v=t("TJPC"),f=t("xCqy"),h=t("vDqi"),g=t.n(h);function x(a,n,t,e,o,r,i){try{var d=a[r](i),s=d.value}catch(a){return void t(a)}d.done?n(s):Promise.resolve(s).then(e,o)}var w={name:"EnvironmentSetup",components:{AuthContentWrapper:i.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:b.N,SelectInput:d.a,SwitchInput:s.a,AuthContent:m.a,ImageInput:p.a,AuthButton:u.a,FormLabel:l.a,required:v.a,InfoBox:c.a},data:function(){return{isLoading:!1,admin:{name:"",email:"",avatar:void 0,password:"",password_confirmation:""}}},methods:{adminAccountSubmit:function(){var a,n=this;return(a=o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,n.$refs.adminAccount.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:n.isLoading=!0,(t=new FormData).append("name",n.admin.name),t.append("email",n.admin.email),t.append("password",n.admin.password),t.append("password_confirmation",n.admin.password_confirmation),t.append("license",localStorage.getItem("license")),t.append("purchase_code",localStorage.getItem("purchase_code")),n.admin.avatar&&t.append("avatar",n.admin.avatar),g.a.post("/api/setup/admin-setup",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){n.isLoading=!1,n.$store.commit("SET_AUTHORIZED",!0),"Extended"===localStorage.getItem("license")&&n.$store.commit("SET_SAAS",!0),n.$router.push({name:"Dashboard"}),localStorage.removeItem("purchase_code"),localStorage.removeItem("license")})).catch((function(a){401==a.response.status&&"invalid_client"===a.response.data.error&&f.a.$emit("alert:open",{emoji:"🤔",title:n.$t("popup_passport_error.title"),message:n.$t("popup_passport_error.message")}),500==a.response.status&&f.a.$emit("alert:open",{emoji:"🤔",title:n.$t("popup_signup_error.title"),message:n.$t("popup_signup_error.message")}),422==a.response.status&&(a.response.data.errors.email&&n.$refs.adminAccount.setErrors({Email:a.response.data.errors.email}),a.response.data.errors.password&&n.$refs.adminAccount.setErrors({Password:a.response.data.errors.password})),n.isLoading=!1}));case 15:case"end":return a.stop()}}),a)})),function(){var n=this,t=arguments;return new Promise((function(e,o){var r=a.apply(n,t);function i(a){x(r,e,o,i,d,"next",a)}function d(a){x(r,e,o,i,d,"throw",a)}i(void 0)}))})()}},created:function(){this.$scrollTop()}},y=(t("NZTt"),t("KHd+")),k=Object(y.a)(w,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),t("h1",[a._v("Setup Wizard")]),a._v(" "),t("h2",[a._v("Create your admin account.")])],1),a._v(" "),t("ValidationObserver",{ref:"adminAccount",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(n){return n.preventDefault(),a.adminAccountSubmit(n)}},scopedSlots:a._u([{key:"default",fn:function(n){n.invalid;return[t("FormLabel",[a._v("Create Admin Account")]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Avatar (optional):")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Avatar"},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("ImageInput",{attrs:{error:e[0]},model:{value:a.admin.avatar,callback:function(n){a.$set(a.admin,"avatar",n)},expression:"admin.avatar"}})]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Full Name:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Full Name",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.name,expression:"admin.name"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your full name",type:"text"},domProps:{value:a.admin.name},on:{input:function(n){n.target.composing||a.$set(a.admin,"name",n.target.value)}}}),a._v(" "),e[0]?t("span",{staticClass:"error-message"},[a._v(a._s(e[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Email:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Email",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.email,expression:"admin.email"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your email",type:"email"},domProps:{value:a.admin.email},on:{input:function(n){n.target.composing||a.$set(a.admin,"email",n.target.value)}}}),a._v(" "),e[0]?t("span",{staticClass:"error-message"},[a._v(a._s(e[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Password:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Password",rules:"required|confirmed:confirmation"},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.password,expression:"admin.password"}],class:{"is-error":e[0]},attrs:{placeholder:"Type your password",type:"password"},domProps:{value:a.admin.password},on:{input:function(n){n.target.composing||a.$set(a.admin,"password",n.target.value)}}}),a._v(" "),e[0]?t("span",{staticClass:"error-message"},[a._v(a._s(e[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v("Password Confirmation:")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",name:"confirmation",rules:"required",vid:"confirmation"},scopedSlots:a._u([{key:"default",fn:function(n){var e=n.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.admin.password_confirmation,expression:"admin.password_confirmation"}],class:{"is-error":e[0]},attrs:{placeholder:"Confirm your password",type:"password"},domProps:{value:a.admin.password_confirmation},on:{input:function(n){n.target.composing||a.$set(a.admin,"password_confirmation",n.target.value)}}}),a._v(" "),e[0]?t("span",{staticClass:"error-message"},[a._v(a._s(e[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Create Admin and Login",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"71a9d2b0",null);n.default=k.exports},"6gqG":function(a,n,t){var e=t("ydEr");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},"7OGm":function(a,n,t){"use strict";var e=t("6gqG");t.n(e).a},ASoH:function(a,n,t){"use strict";var e={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(t("s/ZW"),t("KHd+")),r=Object(o.a)(e,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("button",{staticClass:"button outline"},[t("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"59e2dfc0",null);n.a=r.exports},"D+dh":function(a,n,t){"use strict";var e=t("kvrn"),o=t.n(e),r={name:"ImageInput",props:["image","error"],components:{ImageIcon:{name:"ImageIcon",props:{size:{type:String,default:"24",validator:function(a){return!isNaN(a)||a.length>=2&&!isNaN(a.slice(0,a.length-1))&&"x"===a.slice(-1)}}},functional:!0,render:function(a,n){var t="x"===n.props.size.slice(-1)?n.props.size.slice(0,n.props.size.length-1)+"em":parseInt(n.props.size)+"px",e=n.data.attrs||{};return e.width=e.width||t,e.height=e.height||t,n.data.attrs=e,a("svg",o()([{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},class:"feather feather-image"},n.data]),[a("rect",{attrs:{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}}),a("circle",{attrs:{cx:"8.5",cy:"8.5",r:"1.5"}}),a("polyline",{attrs:{points:"21 15 16 10 5 21"}})])}}},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{showImagePreview:function(a){var n=this,t=a.target.files[0].name,e=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(e)){var o=a.target.files[0],r=new FileReader;r.onload=function(){return n.imagePreview=r.result},r.readAsDataURL(o),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},i=(t("cO+9"),t("KHd+")),d=Object(i.a)(r,(function(){var a=this,n=a.$createElement,t=a._self._c||n;return t("div",{staticClass:"dropzone",class:{"is-error":a.error}},[t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(n){return a.showImagePreview(n)}}}),a._v(" "),a.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),a._v(" "),t("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),t("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"24846626",null);n.a=d.exports},GwTe:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,".button[data-v-59e2dfc0] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-59e2dfc0] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-59e2dfc0] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-59e2dfc0] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-59e2dfc0] {\n  color: white;\n}\n.button.outline[data-v-59e2dfc0] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-59e2dfc0] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-59e2dfc0]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-59e2dfc0] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-59e2dfc0] {\n    background: #111314;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-59e2dfc0] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-59e2dfc0] {\n  -webkit-animation: spin-data-v-59e2dfc0 1s linear infinite;\n          animation: spin-data-v-59e2dfc0 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-59e2dfc0 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n",""])},Idvm:function(a,n,t){var e=t("lig4");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},Jx8r:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372] {\n  height: 100%;\n  width: 100%;\n  display: table;\n}\n",""])},KnjL:function(a,n,t){"use strict";var e={name:"InfoBox",props:["type"]},o=(t("7OGm"),t("KHd+")),r=Object(o.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"bf43be5e",null);n.a=r.exports},NZTt:function(a,n,t){"use strict";var e=t("RN6i");t.n(e).a},NbAf:function(a,n,t){var e=t("GwTe");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},RN6i:function(a,n,t){var e=t("rOG4");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},Xk6H:function(a,n,t){"use strict";var e=t("Idvm");t.n(e).a},bDRN:function(a,n,t){"use strict";var e={name:"AuthContentWrapper"},o=(t("iYAH"),t("KHd+")),r=Object(o.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);n.a=r.exports},"cO+9":function(a,n,t){"use strict";var e=t("gZrO");t.n(e).a},eZ9V:function(a,n,t){"use strict";var e={name:"FormLabel",components:{Edit2Icon:t("CjXH").m}},o=(t("Xk6H"),t("KHd+")),r=Object(o.a)(e,(function(){var a=this.$createElement,n=this._self._c||a;return n("div",{staticClass:"form-label"},[n("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),n("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);n.a=r.exports},gZrO:function(a,n,t){var e=t("yORL");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},iYAH:function(a,n,t){"use strict";var e=t("lh0Q");t.n(e).a},j8qy:function(a,n,t){"use strict";var e={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=t("KHd+"),r=Object(o.a)(e,(function(){var a=this.$createElement,n=this._self._c||a;return this.isVisible?n("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);n.a=r.exports},lh0Q:function(a,n,t){var e=t("Jx8r");"string"==typeof e&&(e=[[a.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(e,o);e.locals&&(a.exports=e.locals)},lig4:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},rOG4:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,'.form[data-v-71a9d2b0] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-71a9d2b0] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-71a9d2b0] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-71a9d2b0] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-71a9d2b0] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-71a9d2b0] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-71a9d2b0] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-71a9d2b0] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-71a9d2b0]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-71a9d2b0] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-71a9d2b0] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-71a9d2b0] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-71a9d2b0] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-71a9d2b0] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-71a9d2b0] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-71a9d2b0] {\n  margin-left: 20px;\n}\n.error-message[data-v-71a9d2b0] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-71a9d2b0] {\n  width: 100%;\n}\ntextarea[data-v-71a9d2b0],\ninput[type="password"][data-v-71a9d2b0],\ninput[type="text"][data-v-71a9d2b0],\ninput[type="number"][data-v-71a9d2b0],\ninput[type="email"][data-v-71a9d2b0] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-71a9d2b0],\ninput[type="password"].is-error[data-v-71a9d2b0],\ninput[type="text"].is-error[data-v-71a9d2b0],\ninput[type="number"].is-error[data-v-71a9d2b0],\ninput[type="email"].is-error[data-v-71a9d2b0] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-71a9d2b0]::-webkit-input-placeholder, input[type="password"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="text"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="number"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="email"][data-v-71a9d2b0]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-71a9d2b0]::-moz-placeholder, input[type="password"][data-v-71a9d2b0]::-moz-placeholder, input[type="text"][data-v-71a9d2b0]::-moz-placeholder, input[type="number"][data-v-71a9d2b0]::-moz-placeholder, input[type="email"][data-v-71a9d2b0]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-71a9d2b0]:-ms-input-placeholder, input[type="password"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="text"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="number"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="email"][data-v-71a9d2b0]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-71a9d2b0]::-ms-input-placeholder, input[type="password"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="text"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="number"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="email"][data-v-71a9d2b0]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-71a9d2b0]::placeholder,\ninput[type="password"][data-v-71a9d2b0]::placeholder,\ninput[type="text"][data-v-71a9d2b0]::placeholder,\ninput[type="number"][data-v-71a9d2b0]::placeholder,\ninput[type="email"][data-v-71a9d2b0]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-71a9d2b0]:focus,\ninput[type="password"][data-v-71a9d2b0]:focus,\ninput[type="text"][data-v-71a9d2b0]:focus,\ninput[type="number"][data-v-71a9d2b0]:focus,\ninput[type="email"][data-v-71a9d2b0]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-71a9d2b0],\ninput[type="password"][disabled][data-v-71a9d2b0],\ninput[type="text"][disabled][data-v-71a9d2b0],\ninput[type="number"][disabled][data-v-71a9d2b0],\ninput[type="email"][disabled][data-v-71a9d2b0] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-71a9d2b0] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-71a9d2b0], .additional-link a[data-v-71a9d2b0] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-71a9d2b0]:hover, .additional-link a[data-v-71a9d2b0]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-71a9d2b0] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-71a9d2b0] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-71a9d2b0], .form textarea[data-v-71a9d2b0] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-71a9d2b0] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-71a9d2b0] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-71a9d2b0] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-71a9d2b0] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-71a9d2b0] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-71a9d2b0] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-71a9d2b0] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-71a9d2b0] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-71a9d2b0],\n  input[type="password"][data-v-71a9d2b0],\n  input[type="number"][data-v-71a9d2b0],\n  input[type="text"][data-v-71a9d2b0],\n  input[type="email"][data-v-71a9d2b0] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-71a9d2b0] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-71a9d2b0] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-71a9d2b0] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-71a9d2b0] {\n    color: #bec6cf;\n}\ntextarea[data-v-71a9d2b0],\n  input[type="password"][data-v-71a9d2b0],\n  input[type="text"][data-v-71a9d2b0],\n  input[type="number"][data-v-71a9d2b0],\n  input[type="email"][data-v-71a9d2b0] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-71a9d2b0]::-webkit-input-placeholder, input[type="password"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="text"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="number"][data-v-71a9d2b0]::-webkit-input-placeholder, input[type="email"][data-v-71a9d2b0]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-71a9d2b0]::-moz-placeholder, input[type="password"][data-v-71a9d2b0]::-moz-placeholder, input[type="text"][data-v-71a9d2b0]::-moz-placeholder, input[type="number"][data-v-71a9d2b0]::-moz-placeholder, input[type="email"][data-v-71a9d2b0]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-71a9d2b0]:-ms-input-placeholder, input[type="password"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="text"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="number"][data-v-71a9d2b0]:-ms-input-placeholder, input[type="email"][data-v-71a9d2b0]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-71a9d2b0]::-ms-input-placeholder, input[type="password"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="text"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="number"][data-v-71a9d2b0]::-ms-input-placeholder, input[type="email"][data-v-71a9d2b0]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-71a9d2b0]::placeholder,\n  input[type="password"][data-v-71a9d2b0]::placeholder,\n  input[type="text"][data-v-71a9d2b0]::placeholder,\n  input[type="number"][data-v-71a9d2b0]::placeholder,\n  input[type="email"][data-v-71a9d2b0]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-71a9d2b0],\n  input[type="password"][disabled][data-v-71a9d2b0],\n  input[type="text"][disabled][data-v-71a9d2b0],\n  input[type="number"][disabled][data-v-71a9d2b0],\n  input[type="email"][disabled][data-v-71a9d2b0] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-71a9d2b0] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-71a9d2b0] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-71a9d2b0] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-71a9d2b0] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-71a9d2b0] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-71a9d2b0] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-71a9d2b0] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-71a9d2b0] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-71a9d2b0] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-71a9d2b0] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-71a9d2b0] {\n    width: 100%;\n}\n.auth-form h1[data-v-71a9d2b0] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-71a9d2b0] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-71a9d2b0] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-71a9d2b0] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-71a9d2b0] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-71a9d2b0] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-71a9d2b0], .auth-form h2[data-v-71a9d2b0], .auth-form .additional-link[data-v-71a9d2b0] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-71a9d2b0] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-71a9d2b0] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-71a9d2b0] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-71a9d2b0] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-71a9d2b0] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-71a9d2b0] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-71a9d2b0] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-71a9d2b0],\n.duplicator .duplicator-item textarea[data-v-71a9d2b0] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-71a9d2b0] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-71a9d2b0] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-71a9d2b0] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-71a9d2b0] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-71a9d2b0 5s linear infinite;\n          animation: spinner-data-v-71a9d2b0 5s linear infinite;\n}\n.title-icon circle[data-v-71a9d2b0], .title-icon path[data-v-71a9d2b0] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-71a9d2b0 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-71a9d2b0 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-71a9d2b0] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-71a9d2b0],\n  .duplicator .duplicator-item textarea[data-v-71a9d2b0] {\n    background: #111314;\n}\n}\n',""])},"s/ZW":function(a,n,t){"use strict";var e=t("NbAf");t.n(e).a},yORL:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,".dropzone[data-v-24846626] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-24846626] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-24846626] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-24846626], .dropzone.is-error .icon-upload circle[data-v-24846626], .dropzone.is-error .icon-upload polyline[data-v-24846626] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-24846626] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-24846626] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-24846626] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-24846626] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-24846626], .dropzone .dropzone-message .icon-upload circle[data-v-24846626], .dropzone .dropzone-message .icon-upload polyline[data-v-24846626] {\n  stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-24846626] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-24846626] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-24846626] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-24846626], .dropzone .dropzone-message .icon-upload polyline[data-v-24846626], .dropzone .dropzone-message .icon-upload line[data-v-24846626] {\n    stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-24846626] {\n    color: #7d858c;\n}\n}\n",""])},ydEr:function(a,n,t){(a.exports=t("I1BE")(!1)).push([a.i,".info-box[data-v-bf43be5e] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 32px;\n  background: #f4f5f6;\n  text-align: left;\n}\n.info-box.error[data-v-bf43be5e] {\n  background: rgba(253, 57, 122, 0.1);\n}\n.info-box.error p[data-v-bf43be5e], .info-box.error a[data-v-bf43be5e] {\n  color: #fd397a;\n}\n.info-box.error a[data-v-bf43be5e] {\n  text-decoration: underline;\n}\n.info-box p[data-v-bf43be5e] {\n  font-size: 0.9375em;\n  line-height: 1.6;\n  word-break: break-word;\n  font-weight: 600;\n}\n.info-box p[data-v-bf43be5e] a {\n  color: #00BC7E;\n}\n.info-box b[data-v-bf43be5e] {\n  font-weight: 700;\n  color: #00BC7E;\n}\n.info-box a[data-v-bf43be5e] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.9375em;\n  line-height: 1.6;\n}\n.info-box ul[data-v-bf43be5e] {\n  margin-top: 15px;\n  display: block;\n}\n.info-box ul li[data-v-bf43be5e] {\n  display: block;\n}\n.info-box ul li a[data-v-bf43be5e] {\n  display: block;\n}\n@media only screen and (max-width: 690px) {\n.info-box[data-v-bf43be5e] {\n    padding: 15px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.info-box[data-v-bf43be5e] {\n    background: #1e2024;\n}\n.info-box p[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n.info-box ul li[data-v-bf43be5e] {\n    color: #bec6cf;\n}\n}\n",""])}}]);