(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"+lJL":function(t,a,e){var i=e("CUCI");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},"4TWA":function(t,a,e){"use strict";var i=e("CjXH"),o=e("LvDl"),d={name:"SelectInput",props:["placeholder","options","isError","default"],components:{Edit2Icon:i.u,UserIcon:i.mb,ChevronDownIcon:i.g},watch:{query:Object(o.debounce)((function(t){this.searchedResults=Object(o.omitBy)(this.options,(function(a){return!a.label.toLowerCase().includes(t.toLowerCase())}))}),200)},computed:{isSearching:function(){return this.searchedResults&&""!==this.query},optionList:function(){return this.isSearching?this.searchedResults:this.options}},data:function(){return{searchedResults:void 0,selected:void 0,isOpen:!1,query:""}},methods:{selectOption:function(t){this.$emit("input",t.value),this.selected=t,this.isOpen=!1},openMenu:function(){var t=this;this.isOpen=!this.isOpen,this.isOpen&&this.$nextTick((function(){return t.$refs.search.focus()}))}},created:function(){var t=this;this.default&&(this.selected=this.options.find((function(a){return a.value===t.default})))}},n=(e("QlfT"),e("KHd+")),r=Object(n.a)(d,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"select"},[e("div",{staticClass:"input-area",class:{"is-active":t.isOpen,"is-error":t.isError},on:{click:t.openMenu}},[t.selected?e("div",{staticClass:"selected"},[t.selected.icon?e("div",{staticClass:"option-icon"},["user"===t.selected.icon?e("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===t.selected.icon?e("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),e("span",{staticClass:"option-value"},[t._v(t._s(t.selected.label))])]):t._e(),t._v(" "),t.selected?t._e():e("div",{staticClass:"not-selected"},[e("span",{staticClass:"option-value placehoder"},[t._v(t._s(t.placeholder))])]),t._v(" "),e("chevron-down-icon",{staticClass:"chevron",attrs:{size:"19"}})],1),t._v(" "),e("transition",{attrs:{name:"slide-in"}},[t.isOpen?e("div",{staticClass:"input-options"},[t.options.length>5?e("div",{staticClass:"select-search"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],ref:"search",staticClass:"search-input focus-border-theme",attrs:{type:"text",placeholder:t.$t("select_search_placeholder")},domProps:{value:t.query},on:{input:function(a){a.target.composing||(t.query=a.target.value)}}})]):t._e(),t._v(" "),e("ul",{staticClass:"option-list"},t._l(t.optionList,(function(a,i){return e("li",{key:i,staticClass:"option-item",on:{click:function(e){return t.selectOption(a)}}},[a.icon?e("div",{staticClass:"option-icon"},["user"===a.icon?e("user-icon",{attrs:{size:"14"}}):t._e(),t._v(" "),"user-edit"===a.icon?e("edit2-icon",{attrs:{size:"14"}}):t._e()],1):t._e(),t._v(" "),e("span",{staticClass:"option-value"},[t._v(t._s(a.label))])])})),0)]):t._e()])],1)}),[],!1,null,"3699bd6c",null);a.a=r.exports},"55Le":function(t,a,e){"use strict";e("Yg8N")},"7jil":function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".button[data-v-c3dbd394]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-c3dbd394]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-c3dbd394]{margin-left:12px;font-size:1em}.button.solid[data-v-c3dbd394]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-c3dbd394]{color:#fff}.button.outline[data-v-c3dbd394]{border:2px solid #1b2539}.button.outline .text-label[data-v-c3dbd394]{color:#1b2539}.button.outline .icon path[data-v-c3dbd394]{fill:inherit}.button.outline[data-v-c3dbd394]:hover{border-color:inherit}.button.outline:hover .text-label[data-v-c3dbd394]{color:inherit}.dark-mode .button.outline[data-v-c3dbd394]{background:#131414;border-color:#bec6cf}.dark-mode .button.outline .text-label[data-v-c3dbd394]{color:#bec6cf}.sync-alt[data-v-c3dbd394]{-webkit-animation:spin-data-v-c3dbd394 1s linear infinite;animation:spin-data-v-c3dbd394 1s linear infinite}@-webkit-keyframes spin-data-v-c3dbd394{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-c3dbd394{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},ASoH:function(t,a,e){"use strict";var i={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=(e("vub6"),e("KHd+")),d=Object(o.a)(i,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"button outline hover-text-theme hover-border-theme"},[e("span",{staticClass:"text-label"},[t._v(t._s(t.text))]),t._v(" "),t.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt svg-color-theme",attrs:{icon:"sync-alt"}})],1):t._e(),t._v(" "),!t.loading&&t.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"svg-color-theme",attrs:{icon:t.icon}})],1):t._e()])}),[],!1,null,"c3dbd394",null);a.a=d.exports},CUCI:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".info-box[data-v-9270269e]{padding:20px;border-radius:8px;margin-bottom:32px;background:#f4f5f6;text-align:left}.info-box.error[data-v-9270269e]{background:rgba(253,57,122,.1)}.info-box.error a[data-v-9270269e],.info-box.error p[data-v-9270269e]{color:#fd397a}.info-box.error a[data-v-9270269e]{text-decoration:underline}.info-box p[data-v-9270269e]{line-height:1.6;word-break:break-word;font-weight:600}.info-box p[data-v-9270269e],.info-box p[data-v-9270269e] a{font-size:15px}.info-box p[data-v-9270269e] b{font-size:15px;font-weight:700}.info-box a[data-v-9270269e],.info-box b[data-v-9270269e]{font-weight:700}.info-box a[data-v-9270269e]{font-size:.9375em;line-height:1.6}.info-box ul[data-v-9270269e]{margin-top:15px}.info-box ul[data-v-9270269e],.info-box ul li[data-v-9270269e],.info-box ul li a[data-v-9270269e]{display:block}@media only screen and (max-width:690px){.info-box[data-v-9270269e]{padding:15px}}.dark-mode .info-box[data-v-9270269e]{background:#1e2024}.dark-mode .info-box p[data-v-9270269e],.dark-mode .info-box ul li[data-v-9270269e]{color:#bec6cf}",""])},Jx8r:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},KF4P:function(t,a,e){var i=e("V765");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},KnjL:function(t,a,e){"use strict";var i={name:"InfoBox",props:["type"]},o=(e("lo+G"),e("KHd+")),d=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"info-box",class:this.type},[this._t("default")],2)}),[],!1,null,"9270269e",null);a.a=d.exports},QlfT:function(t,a,e){"use strict";e("fQ3+")},TJPC:function(t,a,e){"use strict";e.d(a,"a",(function(){return d}));function i(t){return null==t}function o(t){return Array.isArray(t)&&0===t.length}var d={validate:function(t,a){var e=(void 0===a?{allowFalse:!0}:a).allowFalse,d={valid:!1,required:!0};return i(t)||o(t)?d:!1!==t||e?(d.valid=!!String(t).trim().length,d):d},params:[{name:"allowFalse",default:!0}],computesRequired:!0}},Tmk1:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form-label[data-v-78e6a51e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-78e6a51e]{margin-right:10px}.form-label .icon circle[data-v-78e6a51e],.form-label .icon line[data-v-78e6a51e],.form-label .icon path[data-v-78e6a51e],.form-label .icon rect[data-v-78e6a51e]{color:inherit}.form-label .label[data-v-78e6a51e]{font-size:1.125em;font-weight:700}.dark-mode .form-label .label[data-v-78e6a51e]{color:#bec6cf}",""])},V765:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".form[data-v-33da6d46]{max-width:700px}.form.inline-form[data-v-33da6d46]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-33da6d46]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-33da6d46]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-33da6d46]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-33da6d46]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-33da6d46]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-33da6d46]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-33da6d46]:last-child{margin-bottom:0}.form.block-form .button[data-v-33da6d46]{margin-top:50px}.form .inline-wrapper[data-v-33da6d46]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-33da6d46]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-33da6d46]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-33da6d46]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-33da6d46]{display:flex}.single-line-form .submit-button[data-v-33da6d46]{margin-left:20px}.error-message[data-v-33da6d46]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-33da6d46]{width:100%}input[type=email][data-v-33da6d46],input[type=number][data-v-33da6d46],input[type=password][data-v-33da6d46],input[type=text][data-v-33da6d46],textarea[data-v-33da6d46]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-33da6d46],input[type=number].is-error[data-v-33da6d46],input[type=password].is-error[data-v-33da6d46],input[type=text].is-error[data-v-33da6d46],textarea.is-error[data-v-33da6d46]{border-color:#fd397a}input[type=email][data-v-33da6d46]::-moz-placeholder,input[type=number][data-v-33da6d46]::-moz-placeholder,input[type=password][data-v-33da6d46]::-moz-placeholder,input[type=text][data-v-33da6d46]::-moz-placeholder,textarea[data-v-33da6d46]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-33da6d46]:-ms-input-placeholder,input[type=number][data-v-33da6d46]:-ms-input-placeholder,input[type=password][data-v-33da6d46]:-ms-input-placeholder,input[type=text][data-v-33da6d46]:-ms-input-placeholder,textarea[data-v-33da6d46]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-33da6d46]::placeholder,input[type=number][data-v-33da6d46]::placeholder,input[type=password][data-v-33da6d46]::placeholder,input[type=text][data-v-33da6d46]::placeholder,textarea[data-v-33da6d46]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-33da6d46],input[type=number][disabled][data-v-33da6d46],input[type=password][disabled][data-v-33da6d46],input[type=text][disabled][data-v-33da6d46],textarea[disabled][data-v-33da6d46]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-33da6d46]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-33da6d46]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-33da6d46],.additional-link b[data-v-33da6d46]{cursor:pointer}.additional-link a[data-v-33da6d46]:hover,.additional-link b[data-v-33da6d46]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-33da6d46]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-33da6d46]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-33da6d46],.form textarea[data-v-33da6d46]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-33da6d46]{display:block}.form.block-form .block-wrapper label[data-v-33da6d46]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-33da6d46]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-33da6d46]{display:block}.form.inline-form .input-wrapper .error-message[data-v-33da6d46]{position:relative;bottom:0}.form .button[data-v-33da6d46]{padding:14px 32px}.single-line-form[data-v-33da6d46]{display:block}.single-line-form .submit-button[data-v-33da6d46]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-33da6d46],input[type=number][data-v-33da6d46],input[type=password][data-v-33da6d46],input[type=text][data-v-33da6d46],textarea[data-v-33da6d46]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-33da6d46]{display:block}}.dark-mode .form .input-help[data-v-33da6d46]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-33da6d46],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-33da6d46]{color:#bec6cf}.dark-mode input[type=email][data-v-33da6d46],.dark-mode input[type=number][data-v-33da6d46],.dark-mode input[type=password][data-v-33da6d46],.dark-mode input[type=text][data-v-33da6d46],.dark-mode textarea[data-v-33da6d46]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-33da6d46]::-moz-placeholder,.dark-mode input[type=number][data-v-33da6d46]::-moz-placeholder,.dark-mode input[type=password][data-v-33da6d46]::-moz-placeholder,.dark-mode input[type=text][data-v-33da6d46]::-moz-placeholder,.dark-mode textarea[data-v-33da6d46]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-33da6d46]:-ms-input-placeholder,.dark-mode input[type=number][data-v-33da6d46]:-ms-input-placeholder,.dark-mode input[type=password][data-v-33da6d46]:-ms-input-placeholder,.dark-mode input[type=text][data-v-33da6d46]:-ms-input-placeholder,.dark-mode textarea[data-v-33da6d46]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-33da6d46]::placeholder,.dark-mode input[type=number][data-v-33da6d46]::placeholder,.dark-mode input[type=password][data-v-33da6d46]::placeholder,.dark-mode input[type=text][data-v-33da6d46]::placeholder,.dark-mode textarea[data-v-33da6d46]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-33da6d46],.dark-mode input[type=number][disabled][data-v-33da6d46],.dark-mode input[type=password][disabled][data-v-33da6d46],.dark-mode input[type=text][disabled][data-v-33da6d46],.dark-mode textarea[disabled][data-v-33da6d46]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-33da6d46],.dark-mode .popup-wrapper input[type=number][data-v-33da6d46],.dark-mode .popup-wrapper input[type=password][data-v-33da6d46],.dark-mode .popup-wrapper input[type=text][data-v-33da6d46],.dark-mode .popup-wrapper textarea[data-v-33da6d46]{background:#25272c}.auth-logo-text[data-v-33da6d46]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-33da6d46]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-33da6d46]{min-width:310px}.auth-form .additional-link a[data-v-33da6d46]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-33da6d46]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-33da6d46]{width:120px;margin-bottom:20px}.auth-form h1[data-v-33da6d46]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-33da6d46]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-33da6d46]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-33da6d46]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-33da6d46]{width:100%}.auth-form h1[data-v-33da6d46]{font-size:1.875em}.auth-form h2[data-v-33da6d46]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-33da6d46]{font-size:1.375em}.auth-form h2[data-v-33da6d46]{font-size:1.125em}.auth-form input[data-v-33da6d46]{min-width:0}.auth-form .additional-link[data-v-33da6d46]{font-size:.9375em}}.dark-mode .auth-form .additional-link[data-v-33da6d46],.dark-mode .auth-form h1[data-v-33da6d46],.dark-mode .auth-form h2[data-v-33da6d46]{color:#bec6cf}.content-headline[data-v-33da6d46]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-33da6d46]{min-width:0}.duplicator .duplicator-add-button[data-v-33da6d46]{width:100%}.duplicator .duplicator-item[data-v-33da6d46]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-33da6d46]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-33da6d46]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-33da6d46]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-33da6d46],.duplicator .duplicator-item textarea[data-v-33da6d46]{box-shadow:none;background:#fafafa}.form[data-v-33da6d46]{max-width:580px;text-align:left}.submit-wrapper[data-v-33da6d46]{text-align:right}.submit-wrapper .button[data-v-33da6d46]{margin:58px 0 50px;width:100%}.title-icon[data-v-33da6d46]{margin-bottom:10px;-webkit-animation:spinner-data-v-33da6d46 5s linear infinite;animation:spinner-data-v-33da6d46 5s linear infinite}.title-icon circle[data-v-33da6d46],.title-icon path[data-v-33da6d46]{color:inherit}@-webkit-keyframes spinner-data-v-33da6d46{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-33da6d46{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.dark-mode .duplicator .duplicator-item[data-v-33da6d46]{background:#1e2024}.dark-mode .duplicator .duplicator-item input[data-v-33da6d46],.dark-mode .duplicator .duplicator-item textarea[data-v-33da6d46]{background:#131414}.check-list[data-v-33da6d46]{display:block;border-radius:8px;box-shadow:0 1px 5px rgba(0,0,0,.12);padding:5px 20px;margin-bottom:50px}.check-list .check-item[data-v-33da6d46]{padding:12px 0;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #f8f8f8}.check-list .check-item[data-v-33da6d46]:last-child{border-bottom:none}.check-list .status[data-v-33da6d46]{display:flex;align-items:center}.check-list .status .note[data-v-33da6d46]{margin-left:10px;font-size:.75em;font-weight:600;color:rgba(27,37,57,.7)}.check-list .status.success .note[data-v-33da6d46],.check-list .status.success polyline[data-v-33da6d46]{color:#00bc7e}.check-list .status.danger .note[data-v-33da6d46],.check-list .status.danger line[data-v-33da6d46]{color:#fd397a}.check-list .parameter[data-v-33da6d46]{font-size:.875em}.check-list .help[data-v-33da6d46]{font-size:.75em;color:rgba(27,37,57,.7);display:block}",""])},XNv9:function(t,a,e){(t.exports=e("I1BE")(!1)).push([t.i,".select[data-v-3699bd6c]{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%}.select-search[data-v-3699bd6c]{background:#fff;position:sticky;top:0;padding:13px}.select-search .search-input[data-v-3699bd6c]{border:1px solid transparent;background:#f4f5f6;transition:all .15s ease;font-size:.875em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%}.input-options[data-v-3699bd6c]{box-shadow:0 5px 15px rgba(0,0,0,.12);background:#fff;border-radius:8px;position:absolute;overflow:hidden;top:65px;left:0;right:0;z-index:9;max-height:295px;overflow-y:auto}.input-options .option-item[data-v-3699bd6c]{padding:13px 20px;display:block;cursor:pointer}.input-options .option-item[data-v-3699bd6c]:hover{color:#00bc7e;background:#f4f5f6}.input-options .option-item[data-v-3699bd6c]:last-child{border-bottom:none}.input-area[data-v-3699bd6c]{border:1px solid transparent;justify-content:space-between;box-shadow:0 1px 5px rgba(0,0,0,.12);align-items:center;border-radius:8px;padding:13px 20px;display:flex;outline:0;width:100%;cursor:pointer}.input-area[data-v-3699bd6c],.input-area .chevron[data-v-3699bd6c]{transition:all .15s ease}.input-area.is-active .chevron[data-v-3699bd6c]{transform:rotate(180deg)}.input-area.is-error[data-v-3699bd6c]{border-color:#fd397a;box-shadow:0 0 7px rgba(253,57,122,.3)}.option-icon[data-v-3699bd6c]{width:20px;display:inline-block;font-size:.625em}.option-icon svg[data-v-3699bd6c]{margin-top:-4px;vertical-align:middle}.option-value[data-v-3699bd6c]{font-size:.875em;font-weight:700;width:100%;vertical-align:middle}.option-value.placehoder[data-v-3699bd6c]{color:rgba(27,37,57,.5)}.slide-in-enter-active[data-v-3699bd6c]{transition:all .15s ease}.slide-in-enter[data-v-3699bd6c]{opacity:0;transform:translateY(-50px)}.dark-mode .select-search[data-v-3699bd6c]{background:#1e2024}.dark-mode .select-search .search-input[data-v-3699bd6c]{background:#131414}.dark-mode .input-area[data-v-3699bd6c]{background:#1e2024;border-color:#1e2024}.dark-mode .popup-wrapper .input-area[data-v-3699bd6c]{background:#25272c}.dark-mode .input-options[data-v-3699bd6c]{background:#1e2024}.dark-mode .input-options .option-item[data-v-3699bd6c]{border-bottom:none}.dark-mode .input-options .option-item[data-v-3699bd6c]:hover{background:#2a2c32}.dark-mode .input-options .option-item:hover .option-icon circle[data-v-3699bd6c],.dark-mode .input-options .option-item:hover .option-icon path[data-v-3699bd6c]{color:inherit}.dark-mode .input-options .option-item[data-v-3699bd6c]:last-child{border-bottom:none}.dark-mode .option-value.placehoder[data-v-3699bd6c]{color:#7d858c}",""])},Yg8N:function(t,a,e){var i=e("Tmk1");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},"ZT/s":function(t,a,e){"use strict";e.r(a);var i=e("A5+z"),o=e("bDRN"),d=e("4TWA"),n=e("eZ9V"),r=e("KnjL"),s=e("j8qy"),l=e("ASoH"),c=e("CjXH"),p=e("TJPC"),u=e("vDqi"),m=e.n(u),v={name:"StatusCheck",components:{AuthContentWrapper:o.a,ValidationProvider:i.ValidationProvider,ValidationObserver:i.ValidationObserver,SettingsIcon:c.cb,SelectInput:d.a,AuthContent:s.a,AuthButton:l.a,FormLabel:n.a,required:p.a,InfoBox:r.a,CheckIcon:c.e,XIcon:c.qb},computed:{modules:function(){return this.$root.$data.config.statusCheck.modules},ini:function(){return this.$root.$data.config.statusCheck.ini},phpVersion:function(){return this.$root.$data.config.statusCheck.php_version},isCheckedAPI:function(){return void 0!==this.apiRunning}},data:function(){return{isLoading:!1,isError:!1,apiRunning:void 0}},methods:{lastCheckBeforeNextPage:function(){var t=Object.values(this.$root.$data.config.statusCheck.modules).every((function(t){return!0===t})),a=Object.values(this.$root.$data.config.statusCheck.ini).every((function(t){return!0===t.status}));t&&a&&this.apiRunning&&this.phpVersion.acceptable?this.$router.push({name:"PurchaseCode"}):this.isError=!0},pingAPI:function(){var t=this;m.a.get("/api/setup/ping").then((function(a){"pong"===a.data?t.apiRunning=!0:t.apiRunning=!1})).catch((function(){t.apiRunning=!1}))}},created:function(){this.$scrollTop(),this.pingAPI()}},h=(e("jqQz"),e("KHd+")),b=Object(h.a)(v,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon text-theme",attrs:{size:"40"}}),t._v(" "),e("h1",[t._v("Server Check")]),t._v(" "),e("h2",[t._v("At first, we have to check if all modules and setup is ready for running VueFileManager.")])],1),t._v(" "),e("div",{staticClass:"form block-form"},[e("FormLabel",[t._v("Required PHP Extensions")]),t._v(" "),e("InfoBox",[e("p",[t._v("Those PHP modules are needed for accurate running VueFileManager on your server, please check and install if some is missing.")])]),t._v(" "),t.modules?e("ul",{staticClass:"check-list"},t._l(t.modules,(function(a,i,o){return e("li",{key:o,staticClass:"check-item"},[e("div",{staticClass:"content"},[e("b",{staticClass:"parameter capitalize"},[t._v(t._s(i))])]),t._v(" "),e("div",{staticClass:"status",class:a?"success":"danger"},[a?e("check-icon",{attrs:{size:"16"}}):t._e(),t._v(" "),a?t._e():e("x-icon",{attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"note"},[t._v(t._s(a?"Module Installed":"Missing Module"))])],1)])})),0):t._e(),t._v(" "),e("FormLabel",[t._v("PHP Version and php.ini")]),t._v(" "),e("InfoBox",[e("p",[t._v("Those PHP settings are needed for accurate running VueFileManager on your server, please check and tweak in your php.ini if needed.")])]),t._v(" "),e("ul",{staticClass:"check-list"},[e("li",{staticClass:"check-item"},[e("div",{staticClass:"content"},[e("b",{staticClass:"parameter"},[t._v("PHP Version")]),t._v(" "),t.phpVersion.acceptable?t._e():e("small",{staticClass:"help"},[t._v("You need PHP version at least "+t._s(t.phpVersion.minimal)+".")])]),t._v(" "),e("div",{staticClass:"status",class:t.phpVersion.acceptable?"success":"danger"},[t.phpVersion.acceptable?e("check-icon",{attrs:{size:"16"}}):t._e(),t._v(" "),t.phpVersion.acceptable?t._e():e("x-icon",{attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"note"},[t._v(t._s(t.phpVersion.current))])],1)]),t._v(" "),t._l(t.ini,(function(a,i,o){return e("li",{key:o,staticClass:"check-item"},[e("div",{staticClass:"content"},[e("b",{staticClass:"parameter"},[t._v(t._s(i))]),t._v(" "),a.status?t._e():e("small",{staticClass:"help"},[t._v("We recommend set this value at least "+t._s(a.minimal)+".")])]),t._v(" "),e("div",{staticClass:"status",class:a.status?"success":"danger"},[a.status?e("check-icon",{attrs:{size:"16"}}):t._e(),t._v(" "),a.status?t._e():e("x-icon",{attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"note"},[t._v(t._s(a.current)+t._s("max_execution_time"!==i?"M":""))])],1)])}))],2),t._v(" "),e("FormLabel",[t._v("API")]),t._v(" "),e("InfoBox",[e("p",[t._v("The check, if your domain is set correctly.")])]),t._v(" "),e("ul",{staticClass:"check-list"},[e("li",{staticClass:"check-item"},[e("div",{staticClass:"content"},[e("b",{staticClass:"parameter"},[t._v("API")]),t._v(" "),t.isCheckedAPI&&!t.apiRunning?e("small",{staticClass:"help"},[t._v("We detect, your domain root is not set correctly, please check it.")]):t._e()]),t._v(" "),t.isCheckedAPI?e("div",{staticClass:"status",class:t.apiRunning?"success":"danger"},[t.apiRunning?e("check-icon",{attrs:{size:"16"}}):t._e(),t._v(" "),t.apiRunning?t._e():e("x-icon",{attrs:{size:"16"}}),t._v(" "),e("span",{staticClass:"note"},[t._v(t._s(t.apiRunning?"Working correctly":"Doesn't work"))])],1):t._e(),t._v(" "),t.isCheckedAPI?t._e():e("div",{staticClass:"status"},[e("span",{staticClass:"note"},[t._v("Checking your API...")])])])]),t._v(" "),t.isError?e("InfoBox",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"error"}},[e("p",[t._v("We can't proceed to the next step because there are unresolved issues. Please solve it at first and next continue.")])]):t._e(),t._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Awesome, I'm done!",loading:t.isLoading,disabled:t.isLoading},nativeOn:{click:function(a){return t.lastCheckBeforeNextPage(a)}}})],1)],1)])],1)}),[],!1,null,"33da6d46",null);a.default=b.exports},bDRN:function(t,a,e){"use strict";var i={name:"AuthContentWrapper"},o=(e("iYAH"),e("KHd+")),d=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=d.exports},eZ9V:function(t,a,e){"use strict";var i=e("CjXH"),o={name:"FormLabel",props:["icon"],components:{KeyIcon:i.J,Edit2Icon:i.u,SettingsIcon:i.cb,SmartphoneIcon:i.eb}},d=(e("55Le"),e("KHd+")),n=Object(d.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-label"},[t.icon?t._e():e("edit-2-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}),t._v(" "),"settings"===t.icon?e("settings-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"smartphone"===t.icon?e("smartphone-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),"key"===t.icon?e("key-icon",{staticClass:"icon text-theme dark-text-theme",attrs:{size:"22"}}):t._e(),t._v(" "),e("b",{staticClass:"label"},[t._t("default")],2)],1)}),[],!1,null,"78e6a51e",null);a.a=n.exports},"fQ3+":function(t,a,e){var i=e("XNv9");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},iYAH:function(t,a,e){"use strict";e("lh0Q")},j8qy:function(t,a,e){"use strict";var i={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},o=e("KHd+"),d=Object(o.a)(i,(function(){var t=this.$createElement,a=this._self._c||t;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=d.exports},jqQz:function(t,a,e){"use strict";e("KF4P")},lh0Q:function(t,a,e){var i=e("Jx8r");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},"lo+G":function(t,a,e){"use strict";e("+lJL")},"tb+D":function(t,a,e){var i=e("7jil");"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(i,o);i.locals&&(t.exports=i.locals)},vub6:function(t,a,e){"use strict";e("tb+D")}}]);