(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+Pqb":function(a,e,t){"use strict";var n={name:"ProgressBar",props:["progress"]},i=(t("woIv"),t("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"progress-bar"},[e("span",{style:{width:this.progress+"%"}})])}),[],!1,null,"f372b280",null);e.a=o.exports},"+t0u":function(a,e,t){var n=t("QO4y");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},"13Td":function(a,e,t){"use strict";var n={name:"SetupBox",props:["title","description","theme"]},i=(t("jS71"),t("KHd+")),o=Object(i.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"setup-box",class:a.theme},[t("b",{staticClass:"title"},[a._v(a._s(a.title))]),a._v(" "),t("p",{staticClass:"description"},[a._v(a._s(a.description))]),a._v(" "),a._t("default")],2)}),[],!1,null,"664a78dc",null);e.a=o.exports},"5pbA":function(a,e,t){"use strict";var n=t("+t0u");t.n(n).a},"D+dh":function(a,e,t){"use strict";var n=t("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:n.B,XIcon:n.fb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var e=this,t=a.target.files[0].name,n=t.substring(t.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(n)){var i=a.target.files[0],o=new FileReader;o.onload=function(){return e.imagePreview=o.result},o.readAsDataURL(i),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},o=(t("w9z4"),t("KHd+")),r=Object(o.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?t("div",{staticClass:"reset-image",on:{click:a.resetImage}},[t("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):a._e(),a._v(" "),t("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(e){return a.showImagePreview(e)}}}),a._v(" "),a.imagePreview?t("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[t("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),a._v(" "),t("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),t("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);e.a=r.exports},"F12+":function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".progress-bar[data-v-f372b280] {\n  width: 100%;\n  height: 5px;\n  background: #f4f5f6;\n  margin-top: 6px;\n  border-radius: 10px;\n}\n.progress-bar span[data-v-f372b280] {\n  background: #00BC7E;\n  display: block;\n  height: 100%;\n  border-radius: 10px;\n  max-width: 100%;\n}\n@media (prefers-color-scheme: dark) {\n.progress-bar[data-v-f372b280] {\n    background: #1e2024;\n}\n}\n@media only screen and (min-width: 680px) and (prefers-color-scheme: dark) {\n.progress-bar[data-v-f372b280] {\n    background: #1e2024;\n}\n}\n",""])},FEcZ:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".setup-box[data-v-664a78dc] {\n  padding: 20px;\n  border-radius: 8px;\n  margin-bottom: 30px;\n}\n.setup-box .title[data-v-664a78dc] {\n  font-size: 1.3125em;\n  margin-bottom: 5px;\n  display: block;\n  font-weight: 700;\n}\n.setup-box .description[data-v-664a78dc] {\n  font-size: 0.9375em;\n  line-height: 1.5;\n  margin-bottom: 20px;\n}\n.setup-box.base[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger[data-v-664a78dc] {\n  background: #f4f5f6;\n}\n.setup-box.danger .title[data-v-664a78dc] {\n  color: #fd397a;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n.setup-box[data-v-664a78dc] input .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .input-area {\n  background: white;\n}\n.setup-box[data-v-664a78dc] .form {\n  margin-top: 20px;\n}\n.setup-box[data-v-664a78dc] .form.block-form {\n  max-width: 450px;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n  display: flex;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n  margin-left: 20px;\n}\n@media only screen and (max-width: 960px) {\n.setup-box[data-v-664a78dc] .form.block-form {\n    max-width: 100%;\n}\n.setup-box[data-v-664a78dc] .form input {\n    min-width: initial;\n}\n}\n@media only screen and (max-width: 690px) {\n.setup-box[data-v-664a78dc] {\n    padding: 15px;\n}\n.setup-box .title[data-v-664a78dc] {\n    font-size: 1.0625em;\n    margin-bottom: 10px;\n}\n.setup-box .description[data-v-664a78dc] {\n    font-size: 0.875em;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form {\n    display: block;\n}\n.setup-box[data-v-664a78dc] .form.block-form .single-line-form .submit-button {\n    margin-left: 0;\n    margin-top: 10px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.setup-box.base[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box.danger[data-v-664a78dc] {\n    background: #1e2024;\n}\n.setup-box[data-v-664a78dc] input[type='text'], .setup-box[data-v-664a78dc] input[type='number'],\n  .setup-box[data-v-664a78dc] input .input-area {\n    background: #131414;\n}\n.setup-box[data-v-664a78dc] .input-area {\n    background: #131414;\n}\n}\n",""])},GEeg:function(a,e,t){"use strict";t.r(e);var n=t("o0o1"),i=t.n(n),o=t("A5+z"),r=t("xnZf"),s=t("gahf"),d=t("4TWA"),l=t("D+dh"),p=t("eZ9V"),c=t("Nv84"),m=t("13Td"),u=t("qefO"),v=t("KnjL"),f=t("TJPC"),b=t("xCqy"),g=t("vDqi"),h=t.n(g);function x(a,e,t,n,i,o,r){try{var s=a[o](r),d=s.value}catch(a){return void t(a)}s.done?e(d):Promise.resolve(d).then(n,i)}var y={name:"AppAppearance",components:{ValidationObserver:o.ValidationObserver,ValidationProvider:o.ValidationProvider,StorageItemDetail:r.a,PageTabGroup:s.a,SelectInput:d.a,ImageInput:l.a,ButtonBase:c.a,FormLabel:p.a,SetupBox:m.a,required:f.a,PageTab:u.a,InfoBox:v.a},data:function(){return{isLoading:!1,isSendingRequest:!1,encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mail:{driver:"",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EmailSetupSubmit:function(){var a,e=this;return(a=i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,e.$refs.EmailSetup.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:e.isSendingRequest=!0,h.a.post("/api/settings/email",e.mail).then((function(){b.a.$emit("toaster",{type:"success",message:e.$t("toaster.email_set")})})).catch((function(){b.a.$emit("alert:open",{title:e.$t("popup_error.title"),message:e.$t("popup_error.message")})})).finally((function(){e.isSendingRequest=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var e=this,t=arguments;return new Promise((function(n,i){var o=a.apply(e,t);function r(a){x(o,n,i,r,s,"next",a)}function s(a){x(o,n,i,r,s,"throw",a)}r(void 0)}))})()}}},w=(t("hItZ"),t("KHd+")),_=Object(w.a)(y,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("PageTab",{staticClass:"form-fixed-width",attrs:{"is-loading":a.isLoading}},[t("PageTabGroup",[t("ValidationObserver",{ref:"EmailSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(e){return e.preventDefault(),a.EmailSetupSubmit(e)}},scopedSlots:a._u([{key:"default",fn:function(e){e.invalid;return[t("FormLabel",[a._v(a._s(a.$t("admin_settings.email.section_email")))]),a._v(" "),t("InfoBox",[t("p",{domProps:{innerHTML:a._s(a.$t("admin_settings.email.email_disclaimer"))}})]),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.driver"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.driver,expression:"mail.driver"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_settings.email.driver_plac"),type:"text"},domProps:{value:a.mail.driver},on:{input:function(e){e.target.composing||a.$set(a.mail,"driver",e.target.value)}}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.host"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.host,expression:"mail.host"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_settings.email.host_plac"),type:"text"},domProps:{value:a.mail.host},on:{input:function(e){e.target.composing||a.$set(a.mail,"host",e.target.value)}}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.port"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.port,expression:"mail.port"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_settings.email.port_plac"),type:"text"},domProps:{value:a.mail.port},on:{input:function(e){e.target.composing||a.$set(a.mail,"port",e.target.value)}}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.username"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.username,expression:"mail.username"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_settings.email.username_plac"),type:"text"},domProps:{value:a.mail.username},on:{input:function(e){e.target.composing||a.$set(a.mail,"username",e.target.value)}}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.password"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:a.mail.password,expression:"mail.password"}],class:{"is-error":n[0]},attrs:{placeholder:a.$t("admin_settings.email.password_plac"),type:"text"},domProps:{value:a.mail.password},on:{input:function(e){e.target.composing||a.$set(a.mail,"password",e.target.value)}}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[a._v(a._s(a.$t("admin_settings.email.encryption"))+":")]),a._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(e){var n=e.errors;return[t("SelectInput",{attrs:{options:a.encryptionList,placeholder:a.$t("admin_settings.email.encryption_plac"),isError:n[0]},model:{value:a.mail.encryption,callback:function(e){a.$set(a.mail,"encryption",e)},expression:"mail.encryption"}}),a._v(" "),n[0]?t("span",{staticClass:"error-message"},[a._v(a._s(n[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),t("ButtonBase",{staticClass:"submit-button",attrs:{loading:a.isSendingRequest,disabled:a.isSendingRequest,type:"submit","button-style":"theme"}},[a._v("\n                "+a._s(a.$t("admin_settings.email.save_button"))+"\n            ")])]}}])})],1)],1)}),[],!1,null,"faa45d90",null);e.default=_.exports},IS7u:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".dropzone[data-v-eb0cae00] {\n  border: 1px dashed #a1abc2;\n  border-radius: 8px;\n  position: relative;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  min-height: 175px;\n}\n.dropzone.is-error[data-v-eb0cae00] {\n  border: 2px dashed rgba(253, 57, 122, 0.3);\n}\n.dropzone.is-error .dropzone-title[data-v-eb0cae00] {\n  color: #fd397a;\n}\n.dropzone.is-error .icon-upload rect[data-v-eb0cae00], .dropzone.is-error .icon-upload circle[data-v-eb0cae00], .dropzone.is-error .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #fd397a;\n}\n.dropzone input[type='file'][data-v-eb0cae00] {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  width: 100%;\n  cursor: pointer;\n}\n.dropzone .image-preview[data-v-eb0cae00] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n  left: 0;\n  padding: 25px;\n  display: block;\n}\n.dropzone .image-preview.fit-image[data-v-eb0cae00] {\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.dropzone .dropzone-message[data-v-eb0cae00] {\n  padding: 50px 0;\n  width: 100%;\n}\n.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00] {\n  stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00] {\n  font-size: 1em;\n  font-weight: 700;\n  display: block;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.dropzone .reset-image[data-v-eb0cae00] {\n  z-index: 2;\n  background: white;\n  border-radius: 50px;\n  display: block;\n  position: absolute;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  transform: translateY(-50%) translateX(50%);\n  padding: 0px 4px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\n.dropzone .reset-image .close-icon[data-v-eb0cae00] {\n  vertical-align: middle;\n}\n.dropzone .reset-image .close-icon line path[data-v-eb0cae00] {\n  fill: #1B2539;\n}\n@media (prefers-color-scheme: dark) {\n.dropzone[data-v-eb0cae00] {\n    border-color: rgba(255, 255, 255, 0.2);\n}\n.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00], .dropzone .dropzone-message .icon-upload line[data-v-eb0cae00] {\n    stroke: #00BC7E;\n}\n.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00] {\n    color: #7d858c;\n}\n}\n",""])},Idvm:function(a,e,t){var n=t("lig4");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},LE5O:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".detail-storage-item[data-v-56af1b6e] {\n  margin-bottom: 35px;\n}\n.detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.detail-storage-item.images .icon path[data-v-56af1b6e], .detail-storage-item.images .icon line[data-v-56af1b6e], .detail-storage-item.images .icon polyline[data-v-56af1b6e], .detail-storage-item.images .icon rect[data-v-56af1b6e], .detail-storage-item.images .icon circle[data-v-56af1b6e], .detail-storage-item.images .icon polygon[data-v-56af1b6e] {\n  stroke: #9D66FE;\n}\n.detail-storage-item.images .storage-progress[data-v-56af1b6e] span {\n  background: #9D66FE;\n}\n.detail-storage-item.videos .icon path[data-v-56af1b6e], .detail-storage-item.videos .icon line[data-v-56af1b6e], .detail-storage-item.videos .icon polyline[data-v-56af1b6e], .detail-storage-item.videos .icon rect[data-v-56af1b6e], .detail-storage-item.videos .icon circle[data-v-56af1b6e], .detail-storage-item.videos .icon polygon[data-v-56af1b6e] {\n  stroke: #FFBD2D;\n}\n.detail-storage-item.videos .storage-progress[data-v-56af1b6e] span {\n  background: #FFBD2D;\n}\n.detail-storage-item.audios .icon path[data-v-56af1b6e], .detail-storage-item.audios .icon line[data-v-56af1b6e], .detail-storage-item.audios .icon polyline[data-v-56af1b6e], .detail-storage-item.audios .icon rect[data-v-56af1b6e], .detail-storage-item.audios .icon circle[data-v-56af1b6e], .detail-storage-item.audios .icon polygon[data-v-56af1b6e] {\n  stroke: #FE66A1;\n}\n.detail-storage-item.audios .storage-progress[data-v-56af1b6e] span {\n  background: #FE66A1;\n}\n.detail-storage-item.documents .icon path[data-v-56af1b6e], .detail-storage-item.documents .icon line[data-v-56af1b6e], .detail-storage-item.documents .icon polyline[data-v-56af1b6e], .detail-storage-item.documents .icon rect[data-v-56af1b6e], .detail-storage-item.documents .icon circle[data-v-56af1b6e], .detail-storage-item.documents .icon polygon[data-v-56af1b6e] {\n  stroke: #FE6057;\n}\n.detail-storage-item.documents .storage-progress[data-v-56af1b6e] span {\n  background: #FE6057;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e] {\n  stroke: #1B2539;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span {\n  background: #1B2539;\n}\n.header-storage-item[data-v-56af1b6e] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 10px;\n}\n.header-storage-item .icon[data-v-56af1b6e] {\n  width: 35px;\n}\n.header-storage-item .type[data-v-56af1b6e] {\n  font-size: 0.9375em;\n  color: #1B2539;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n  font-size: 0.625em;\n  display: block;\n  color: rgba(27, 37, 57, 0.7);\n}\n@media (prefers-color-scheme: dark) {\n.header-storage-item .type[data-v-56af1b6e] {\n    color: #bec6cf;\n}\n.header-storage-item .total-size[data-v-56af1b6e] {\n    color: #7d858c;\n}\n.detail-storage-item.others .icon path[data-v-56af1b6e], .detail-storage-item.others .icon line[data-v-56af1b6e], .detail-storage-item.others .icon polyline[data-v-56af1b6e], .detail-storage-item.others .icon rect[data-v-56af1b6e], .detail-storage-item.others .icon circle[data-v-56af1b6e], .detail-storage-item.others .icon polygon[data-v-56af1b6e], .detail-storage-item.disk .icon path[data-v-56af1b6e], .detail-storage-item.disk .icon line[data-v-56af1b6e], .detail-storage-item.disk .icon polyline[data-v-56af1b6e], .detail-storage-item.disk .icon rect[data-v-56af1b6e], .detail-storage-item.disk .icon circle[data-v-56af1b6e], .detail-storage-item.disk .icon polygon[data-v-56af1b6e] {\n    stroke: #41454e;\n}\n.detail-storage-item.others .storage-progress[data-v-56af1b6e] span, .detail-storage-item.disk .storage-progress[data-v-56af1b6e] span {\n    background: #41454e;\n}\n}\n",""])},QO4y:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,"",""])},VA79:function(a,e,t){var n=t("F12+");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},XYKF:function(a,e,t){var n=t("hLJt");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},Xk6H:function(a,e,t){"use strict";var n=t("Idvm");t.n(n).a},b0xl:function(a,e,t){"use strict";var n=t("oyp5");t.n(n).a},"bN/l":function(a,e,t){var n=t("IS7u");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},eZ9V:function(a,e,t){"use strict";var n={name:"FormLabel",components:{Edit2Icon:t("CjXH").q}},i=(t("Xk6H"),t("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"form-label"},[e("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),e("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);e.a=o.exports},gahf:function(a,e,t){"use strict";var n={name:"PageTabGroup"},i=(t("yI2c"),t("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement;return(this._self._c||a)("div",{staticClass:"page-tab-group"},[this._t("default")],2)}),[],!1,null,"1bb470e4",null);e.a=o.exports},hItZ:function(a,e,t){"use strict";var n=t("XYKF");t.n(n).a},hLJt:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,'.form[data-v-faa45d90] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-faa45d90] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-faa45d90] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-faa45d90] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-faa45d90] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-faa45d90] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-faa45d90] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-faa45d90] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-faa45d90]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-faa45d90] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-faa45d90] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-faa45d90] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-faa45d90] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-faa45d90] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-faa45d90] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-faa45d90] {\n  margin-left: 20px;\n}\n.error-message[data-v-faa45d90] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-faa45d90] {\n  width: 100%;\n}\ntextarea[data-v-faa45d90],\ninput[type="password"][data-v-faa45d90],\ninput[type="text"][data-v-faa45d90],\ninput[type="number"][data-v-faa45d90],\ninput[type="email"][data-v-faa45d90] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-faa45d90],\ninput[type="password"].is-error[data-v-faa45d90],\ninput[type="text"].is-error[data-v-faa45d90],\ninput[type="number"].is-error[data-v-faa45d90],\ninput[type="email"].is-error[data-v-faa45d90] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-faa45d90]::-webkit-input-placeholder, input[type="password"][data-v-faa45d90]::-webkit-input-placeholder, input[type="text"][data-v-faa45d90]::-webkit-input-placeholder, input[type="number"][data-v-faa45d90]::-webkit-input-placeholder, input[type="email"][data-v-faa45d90]::-webkit-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-faa45d90]::-moz-placeholder, input[type="password"][data-v-faa45d90]::-moz-placeholder, input[type="text"][data-v-faa45d90]::-moz-placeholder, input[type="number"][data-v-faa45d90]::-moz-placeholder, input[type="email"][data-v-faa45d90]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-faa45d90]:-ms-input-placeholder, input[type="password"][data-v-faa45d90]:-ms-input-placeholder, input[type="text"][data-v-faa45d90]:-ms-input-placeholder, input[type="number"][data-v-faa45d90]:-ms-input-placeholder, input[type="email"][data-v-faa45d90]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-faa45d90]::-ms-input-placeholder, input[type="password"][data-v-faa45d90]::-ms-input-placeholder, input[type="text"][data-v-faa45d90]::-ms-input-placeholder, input[type="number"][data-v-faa45d90]::-ms-input-placeholder, input[type="email"][data-v-faa45d90]::-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-faa45d90]::placeholder,\ninput[type="password"][data-v-faa45d90]::placeholder,\ninput[type="text"][data-v-faa45d90]::placeholder,\ninput[type="number"][data-v-faa45d90]::placeholder,\ninput[type="email"][data-v-faa45d90]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-faa45d90]:focus,\ninput[type="password"][data-v-faa45d90]:focus,\ninput[type="text"][data-v-faa45d90]:focus,\ninput[type="number"][data-v-faa45d90]:focus,\ninput[type="email"][data-v-faa45d90]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-faa45d90],\ninput[type="password"][disabled][data-v-faa45d90],\ninput[type="text"][disabled][data-v-faa45d90],\ninput[type="number"][disabled][data-v-faa45d90],\ninput[type="email"][disabled][data-v-faa45d90] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-faa45d90] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-faa45d90], .additional-link a[data-v-faa45d90] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-faa45d90]:hover, .additional-link a[data-v-faa45d90]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-faa45d90] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-faa45d90] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-faa45d90], .form textarea[data-v-faa45d90] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-faa45d90] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-faa45d90] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-faa45d90] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-faa45d90] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-faa45d90] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-faa45d90] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-faa45d90] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-faa45d90] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-faa45d90],\n  input[type="password"][data-v-faa45d90],\n  input[type="number"][data-v-faa45d90],\n  input[type="text"][data-v-faa45d90],\n  input[type="email"][data-v-faa45d90] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-faa45d90] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-faa45d90] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-faa45d90] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-faa45d90] {\n    color: #bec6cf;\n}\ntextarea[data-v-faa45d90],\n  input[type="password"][data-v-faa45d90],\n  input[type="text"][data-v-faa45d90],\n  input[type="number"][data-v-faa45d90],\n  input[type="email"][data-v-faa45d90] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-faa45d90]::-webkit-input-placeholder, input[type="password"][data-v-faa45d90]::-webkit-input-placeholder, input[type="text"][data-v-faa45d90]::-webkit-input-placeholder, input[type="number"][data-v-faa45d90]::-webkit-input-placeholder, input[type="email"][data-v-faa45d90]::-webkit-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-faa45d90]::-moz-placeholder, input[type="password"][data-v-faa45d90]::-moz-placeholder, input[type="text"][data-v-faa45d90]::-moz-placeholder, input[type="number"][data-v-faa45d90]::-moz-placeholder, input[type="email"][data-v-faa45d90]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-faa45d90]:-ms-input-placeholder, input[type="password"][data-v-faa45d90]:-ms-input-placeholder, input[type="text"][data-v-faa45d90]:-ms-input-placeholder, input[type="number"][data-v-faa45d90]:-ms-input-placeholder, input[type="email"][data-v-faa45d90]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-faa45d90]::-ms-input-placeholder, input[type="password"][data-v-faa45d90]::-ms-input-placeholder, input[type="text"][data-v-faa45d90]::-ms-input-placeholder, input[type="number"][data-v-faa45d90]::-ms-input-placeholder, input[type="email"][data-v-faa45d90]::-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-faa45d90]::placeholder,\n  input[type="password"][data-v-faa45d90]::placeholder,\n  input[type="text"][data-v-faa45d90]::placeholder,\n  input[type="number"][data-v-faa45d90]::placeholder,\n  input[type="email"][data-v-faa45d90]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-faa45d90],\n  input[type="password"][disabled][data-v-faa45d90],\n  input[type="text"][disabled][data-v-faa45d90],\n  input[type="number"][disabled][data-v-faa45d90],\n  input[type="email"][disabled][data-v-faa45d90] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-faa45d90] {\n  max-width: 100%;\n}\n',""])},jS71:function(a,e,t){"use strict";var n=t("wsaA");t.n(n).a},lig4:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-c1157a8e] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-c1157a8e] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-c1157a8e] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-c1157a8e] {\n    color: #bec6cf;\n}\n}\n",""])},oDxr:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,".page-tab-group[data-v-1bb470e4] {\n  margin-bottom: 65px;\n}\n",""])},oyp5:function(a,e,t){var n=t("LE5O");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},qefO:function(a,e,t){"use strict";var n={name:"PageTab",props:["isLoading"],components:{Spinner:t("zTYo").a}},i=(t("5pbA"),t("KHd+")),o=Object(i.a)(n,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",{staticClass:"page-tab"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.isLoading,expression:"isLoading"}],attrs:{id:"loader"}},[e("Spinner")],1),this._v(" "),this._t("default")],2)}),[],!1,null,"4339da66",null);e.a=o.exports},w9z4:function(a,e,t){"use strict";var n=t("bN/l");t.n(n).a},woIv:function(a,e,t){"use strict";var n=t("VA79");t.n(n).a},wsaA:function(a,e,t){var n=t("FEcZ");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)},xnZf:function(a,e,t){"use strict";var n=t("+Pqb"),i=t("CjXH"),o={name:"StorageItemDetail",props:["percentage","title","type","used"],components:{HardDriveIcon:i.z,FileTextIcon:i.v,ProgressBar:n.a,MusicIcon:i.L,VideoIcon:i.eb,ImageIcon:i.B,FileIcon:i.u}},r=(t("b0xl"),t("KHd+")),s=Object(r.a)(o,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("article",{staticClass:"detail-storage-item",class:a.type},[t("div",{staticClass:"header-storage-item"},[t("div",{staticClass:"icon"},["images"==a.type?t("image-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"videos"==a.type?t("video-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"audios"==a.type?t("music-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"documents"==a.type?t("file-text-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"others"==a.type?t("file-icon",{attrs:{size:"23"}}):a._e(),a._v(" "),"disk"==a.type?t("hard-drive-icon",{attrs:{size:"23"}}):a._e()],1),a._v(" "),t("div",{staticClass:"title"},[t("b",{staticClass:"type"},[a._v(a._s(a.title))]),a._v(" "),t("span",{staticClass:"total-size"},[a._v(a._s(a.used))])])]),a._v(" "),t("ProgressBar",{staticClass:"storage-progress",attrs:{progress:a.percentage}})],1)}),[],!1,null,"56af1b6e",null);e.a=s.exports},yI2c:function(a,e,t){"use strict";var n=t("zlQ3");t.n(n).a},zlQ3:function(a,e,t){var n=t("oDxr");"string"==typeof n&&(n=[[a.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(n,i);n.locals&&(a.exports=n.locals)}}]);