(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/ORj":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".file-item-list.is-apple .emoji-icon[data-v-b908ad34]{font-size:50px;line-height:1.1}.file-item-grid.is-apple .emoji-icon[data-v-b908ad34]{font-size:80px;line-height:1.1}.thumbnail-item.is-apple .emoji-icon[data-v-b908ad34]{font-size:36px;line-height:1.1}.emoji-picker-preview.is-apple .emoji-icon[data-v-b908ad34]{font-size:22px;line-height:1.1}.folder-icon path[data-v-b908ad34]{fill:inherit}.folder-icon.is-deleted path[data-v-b908ad34]{fill:#ebebeb}.dark-mode .folder-icon.is-deleted path[data-v-b908ad34]{fill:#2a2c32}",""])},"7p/T":function(e,t,a){var i=a("eZ13");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},BLu3:function(e,t,a){"use strict";a("er7P")},CAPI:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".select-box[data-v-3665c865]{min-width:20px;min-height:20px;display:flex;justify-content:center;align-items:center;border-radius:5px}.select-box .icon[data-v-3665c865]{stroke:#fff}.is-deactive[data-v-3665c865]{background-color:#e6e8eb}.dark-mode .is-deactive[data-v-3665c865]{background-color:#353940}",""])},CYsC:function(e,t,a){"use strict";var i=a("VymR"),o={name:"Emoji",props:["emoji","location"],computed:{transferEmoji:function(){return i.a.parse(this.emoji.char,{folder:"svg",ext:".svg",attributes:function(){return{loading:"lazy"}}})}}},d=(a("GHGD"),a("KHd+")),r=Object(d.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[e.location,"emoji-container",{"is-apple":e.$isApple}]},[e.$isApple()?e._e():a("span",{staticClass:"twemoji-emoji emoji-icon",domProps:{innerHTML:e._s(e.transferEmoji)}}),e._v(" "),e.$isApple()?a("span",{staticClass:"apple-emoji emoji-icon"},[e._v(e._s(this.emoji.char))]):e._e()])}),[],!1,null,"1d581cb0",null);t.a=r.exports},D6BU:function(e,t,a){"use strict";a("KKKj")},F2L8:function(e,t,a){var i=a("VLyU");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},GHGD:function(e,t,a){"use strict";a("7p/T")},JkMM:function(e,t,a){"use strict";var i={name:"FolderIcon",props:["folderIcon","location","item"],components:{Emoji:a("CYsC").a},computed:{isDeleted:function(){return!!this.item.deleted_at},emoji:function(){return this.folderIcon?!!this.folderIcon.emoji&&this.folderIcon.emoji:!!this.item.emoji&&this.item.emoji},color:function(){return this.folderIcon?!!this.folderIcon.color&&this.folderIcon.color:!!this.item.color&&this.item.color}}},o=(a("BLu3"),a("KHd+")),d=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:[{"is-apple":e.$isApple()},e.location]},[e.emoji?a("Emoji",{staticClass:"emoji-icon",attrs:{emoji:e.emoji}}):e._e(),e._v(" "),e.emoji?e._e():a("FontAwesomeIcon",{class:[{"is-deleted":e.isDeleted},{"default-color":!e.color&&!e.isDeleted},"folder-icon"],style:{fill:e.color},attrs:{icon:"folder"}})],1)}),[],!1,null,"b908ad34",null);t.a=d.exports},KKKj:function(e,t,a){var i=a("CAPI");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},VLyU:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,"#single-file{position:absolute;bottom:0;right:0;left:0;top:0;display:grid;height:100%}#single-file .single-file-wrapper{margin:auto;text-align:center}#single-file .single-file-wrapper .download-button{margin-top:15px;margin-left:auto;margin-right:auto}#single-file /deep/ .file-wrapper .file-item{width:290px}#single-file /deep/ .file-wrapper .file-item.is-clicked,#single-file /deep/ .file-wrapper .file-item:hover{background:transparent}#single-file /deep/ .file-wrapper .file-item .item-shared{display:none}",""])},dqA1:function(e,t,a){"use strict";var i={name:"CheckBox",props:["isClicked"],components:{CheckIcon:a("CjXH").e}},o=(a("D6BU"),a("KHd+")),d=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"select-box",class:[this.isClicked?"bg-theme":"is-deactive"]},[this.isClicked?t("CheckIcon",{staticClass:"icon",attrs:{size:"17"}}):this._e()],1)}),[],!1,null,"3665c865",null);t.a=d.exports},eZ13:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".form-wrapper[data-v-1d581cb0]{padding:0 20px}.input-wrapper[data-v-1d581cb0]{margin-bottom:20px}.input-wrapper[data-v-1d581cb0]:last-child{margin-bottom:0}.input-wrapper input[data-v-1d581cb0]{width:100%;color:#1b2539}.input-wrapper input.is-error[data-v-1d581cb0]{border-color:#fd397a}.inline-wrapper[data-v-1d581cb0]{display:flex;align-items:center;justify-content:space-between}.inline-wrapper.icon-append .input-text[data-v-1d581cb0]{border-top-right-radius:0;border-bottom-right-radius:0}.inline-wrapper.icon-append .icon[data-v-1d581cb0]{background:#000;padding:15px 18px;border-top-right-radius:8px;border-bottom-right-radius:8px;text-align:center;line-height:0}.inline-wrapper.icon-append .icon path[data-v-1d581cb0],.inline-wrapper.icon-append .icon polyline[data-v-1d581cb0]{stroke:#fff}.input-label[data-v-1d581cb0]{font-size:.875em;color:#1b2539;font-weight:700;display:block;margin-bottom:8px}.dark-mode .inline-wrapper.icon-append .icon[data-v-1d581cb0]{background:rgba(0,188,126,.1)}.dark-mode .inline-wrapper.icon-append .icon path[data-v-1d581cb0],.dark-mode .inline-wrapper.icon-append .icon polyline[data-v-1d581cb0]{stroke:#00bc7e}.dark-mode .input-label[data-v-1d581cb0]{color:#bec6cf}.form[data-v-1d581cb0]{max-width:700px}.form.inline-form[data-v-1d581cb0]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-1d581cb0]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-1d581cb0]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-1d581cb0]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-1d581cb0]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-1d581cb0]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-1d581cb0]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-1d581cb0]:last-child{margin-bottom:0}.form.block-form .button[data-v-1d581cb0]{margin-top:50px}.form .inline-wrapper[data-v-1d581cb0]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-1d581cb0]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-1d581cb0]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-1d581cb0]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-1d581cb0]{display:flex}.single-line-form .submit-button[data-v-1d581cb0]{margin-left:20px}.error-message[data-v-1d581cb0]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-1d581cb0]{width:100%}input[type=email][data-v-1d581cb0],input[type=number][data-v-1d581cb0],input[type=password][data-v-1d581cb0],input[type=text][data-v-1d581cb0],textarea[data-v-1d581cb0]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-1d581cb0],input[type=number].is-error[data-v-1d581cb0],input[type=password].is-error[data-v-1d581cb0],input[type=text].is-error[data-v-1d581cb0],textarea.is-error[data-v-1d581cb0]{border-color:#fd397a}input[type=email][data-v-1d581cb0]::-moz-placeholder,input[type=number][data-v-1d581cb0]::-moz-placeholder,input[type=password][data-v-1d581cb0]::-moz-placeholder,input[type=text][data-v-1d581cb0]::-moz-placeholder,textarea[data-v-1d581cb0]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1d581cb0]:-ms-input-placeholder,input[type=number][data-v-1d581cb0]:-ms-input-placeholder,input[type=password][data-v-1d581cb0]:-ms-input-placeholder,input[type=text][data-v-1d581cb0]:-ms-input-placeholder,textarea[data-v-1d581cb0]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-1d581cb0]::placeholder,input[type=number][data-v-1d581cb0]::placeholder,input[type=password][data-v-1d581cb0]::placeholder,input[type=text][data-v-1d581cb0]::placeholder,textarea[data-v-1d581cb0]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][disabled][data-v-1d581cb0],input[type=number][disabled][data-v-1d581cb0],input[type=password][disabled][data-v-1d581cb0],input[type=text][disabled][data-v-1d581cb0],textarea[disabled][data-v-1d581cb0]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}input[type=color][data-v-1d581cb0]{width:38px!important;height:40px;border:none;outline:none;background:none;min-width:0!important}.additional-link[data-v-1d581cb0]{font-size:1em;margin-top:50px;display:block}.additional-link a[data-v-1d581cb0],.additional-link b[data-v-1d581cb0]{cursor:pointer}.additional-link a[data-v-1d581cb0]:hover,.additional-link b[data-v-1d581cb0]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-1d581cb0]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-1d581cb0]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-1d581cb0],.form textarea[data-v-1d581cb0]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-1d581cb0]{display:block}.form.block-form .block-wrapper label[data-v-1d581cb0]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-1d581cb0]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-1d581cb0]{display:block}.form.inline-form .input-wrapper .error-message[data-v-1d581cb0]{position:relative;bottom:0}.form .button[data-v-1d581cb0]{padding:14px 32px}.single-line-form[data-v-1d581cb0]{display:block}.single-line-form .submit-button[data-v-1d581cb0]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-1d581cb0],input[type=number][data-v-1d581cb0],input[type=password][data-v-1d581cb0],input[type=text][data-v-1d581cb0],textarea[data-v-1d581cb0]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-1d581cb0]{display:block}}.dark-mode .form .input-help[data-v-1d581cb0]{color:#7d858c}.dark-mode .form.block-form .block-wrapper label[data-v-1d581cb0],.dark-mode .form .inline-wrapper .switch-label .input-label[data-v-1d581cb0]{color:#bec6cf}.dark-mode input[type=email][data-v-1d581cb0],.dark-mode input[type=number][data-v-1d581cb0],.dark-mode input[type=password][data-v-1d581cb0],.dark-mode input[type=text][data-v-1d581cb0],.dark-mode textarea[data-v-1d581cb0]{border-color:#1e2024;background:#1e2024;color:#bec6cf}.dark-mode input[type=email][data-v-1d581cb0]::-moz-placeholder,.dark-mode input[type=number][data-v-1d581cb0]::-moz-placeholder,.dark-mode input[type=password][data-v-1d581cb0]::-moz-placeholder,.dark-mode input[type=text][data-v-1d581cb0]::-moz-placeholder,.dark-mode textarea[data-v-1d581cb0]::-moz-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-1d581cb0]:-ms-input-placeholder,.dark-mode input[type=number][data-v-1d581cb0]:-ms-input-placeholder,.dark-mode input[type=password][data-v-1d581cb0]:-ms-input-placeholder,.dark-mode input[type=text][data-v-1d581cb0]:-ms-input-placeholder,.dark-mode textarea[data-v-1d581cb0]:-ms-input-placeholder{color:#7d858c}.dark-mode input[type=email][data-v-1d581cb0]::placeholder,.dark-mode input[type=number][data-v-1d581cb0]::placeholder,.dark-mode input[type=password][data-v-1d581cb0]::placeholder,.dark-mode input[type=text][data-v-1d581cb0]::placeholder,.dark-mode textarea[data-v-1d581cb0]::placeholder{color:#7d858c}.dark-mode input[type=email][disabled][data-v-1d581cb0],.dark-mode input[type=number][disabled][data-v-1d581cb0],.dark-mode input[type=password][disabled][data-v-1d581cb0],.dark-mode input[type=text][disabled][data-v-1d581cb0],.dark-mode textarea[disabled][data-v-1d581cb0]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}.dark-mode .popup-wrapper input[type=email][data-v-1d581cb0],.dark-mode .popup-wrapper input[type=number][data-v-1d581cb0],.dark-mode .popup-wrapper input[type=password][data-v-1d581cb0],.dark-mode .popup-wrapper input[type=text][data-v-1d581cb0],.dark-mode .popup-wrapper textarea[data-v-1d581cb0]{background:#25272c}.emoji-container[data-v-1d581cb0],.emoji-container .emoji-icon[data-v-1d581cb0]{font-size:inherit}.emoji-picker .apple-emoji[data-v-1d581cb0]{font-size:34px;line-height:1.1;font-family:Apple Color Emoji}.emoji-picker-preview .apple-emoji[data-v-1d581cb0]{font-size:28px;line-height:.85;font-family:Apple Color Emoji}@media only screen and (max-width:690px){.groups-list .emoji-picker .apple-emoji[data-v-1d581cb0]{font-size:34px;line-height:1.1}}",""])},er7P:function(e,t,a){var i=a("/ORj");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},nT2V:function(e,t,a){"use strict";a("F2L8")},oIrH:function(e,t,a){"use strict";a.r(t);var i=a("25Ru"),o=a("Nv84"),d=a("L2JU");function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var p={name:"SharedSingleItem",components:{FileItemGrid:i.a,ButtonBase:o.a},computed:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},Object(d.b)(["sharedDetail","sharedFile"])),methods:{download:function(){this.$downloadFile(this.sharedFile.data.attributes.file_url,this.sharedFile.data.attributes.name+"."+this.sharedFile.data.attributes.mimetype)}},mounted:function(){var e=this;this.sharedDetail?this.$store.dispatch("getSingleFile"):this.$store.dispatch("getShareDetail",this.$route.params.token).then((function(){e.$store.dispatch("getSingleFile")}))}},l=(a("nT2V"),a("KHd+")),c=Object(l.a)(p,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"single-file"}},[a("div",{staticClass:"single-file-wrapper"},[e.sharedFile?a("FileItemGrid",{attrs:{item:e.sharedFile.data.attributes,"context-menu":!1}}):e._e(),e._v(" "),a("ButtonBase",{staticClass:"download-button",attrs:{"button-style":"theme"},nativeOn:{click:function(t){return e.download(t)}}},[e._v("\n            "+e._s(e.$t("page_shared.download_file"))+"\n        ")])],1)])}),[],!1,null,null,null);t.default=c.exports}}]);