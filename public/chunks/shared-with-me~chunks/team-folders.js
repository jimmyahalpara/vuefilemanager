(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"0RFd":function(e,t,a){var i=a("f3j1");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},"2dE4":function(e,t,a){"use strict";var i={name:"TeamMembersPreview",props:["folder","limit","avatarSize"],components:{MemberAvatar:a("wdhT").a},computed:{membersCount:function(){return this.folder.data.relationships.members.data.length+this.folder.data.relationships.invitations.data.length},members:function(){var e=this.folder.data.relationships.members.data.concat(this.folder.data.relationships.invitations.data);return this.limit?e.slice(0,3):e}}},o=(a("QyxH"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-folder"},[e.limit&&e.membersCount>3?a("span",{staticClass:"member-count"},[e._v("\n\t\t+"+e._s(e.membersCount-3)+"\n\t")]):e._e(),e._v(" "),a("div",{staticClass:"members"},e._l(e.members,(function(e){return a("div",{key:e.data.id,staticClass:"member-preview z-10",attrs:{title:e.data.attributes.email}},[a("MemberAvatar",{attrs:{"is-border":!0,size:34,member:e}})],1)})),0)])}),[],!1,null,"16e0d9d5",null);t.a=n.exports},"3QIs":function(e,t,a){"use strict";a("0RFd")},"6RfX":function(e,t,a){"use strict";a("lxZf")},"7SOQ":function(e,t,a){"use strict";var i=a("2dE4"),o=a("L2JU");function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var l={name:"TeamFolderPreview",components:{TeamMembersPreview:i.a},computed:r(r({},Object(o.b)(["currentTeamFolder","clipboard"])),{},{teamFolder:function(){return this.currentTeamFolder?this.currentTeamFolder:this.clipboard[0]}})},c=(a("tZ/+"),a("KHd+")),d=Object(c.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"team-folder-preview text-left py-3 px-5"},[a("div",{staticClass:"info"},[a("b",{staticClass:"title text-sm"},[e._v("\n\t\t\t"+e._s(e.teamFolder.data.attributes.name)+"\n\t\t")]),e._v(" "),a("span",{staticClass:"subtitle text-tiny block mb-2 dark:text-gray-500 text-gray-600"},[e._v("\n\t\t\tCreated at "+e._s(e.teamFolder.data.attributes.created_at)+"\n\t\t")]),e._v(" "),a("TeamMembersPreview",{staticClass:"members",attrs:{folder:e.teamFolder,"avatar-size":32}})],1)])}),[],!1,null,"2d4ae768",null);t.a=d.exports},"7gkV":function(e,t,a){"use strict";a("Luh+")},"Luh+":function(e,t,a){var i=a("XpyM");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},MHtV:function(e,t,a){var i=a("n7nT");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},QyxH:function(e,t,a){"use strict";a("MHtV")},RXD1:function(e,t,a){"use strict";var i=a("CjXH"),o={name:"MobileActionButtonUpload",components:{CloudPlusIcon:a("gn/r").a,UploadCloudIcon:i.ub},methods:{emmitFiles:function(e){this.$uploadFiles(e.target.files)}}},n=(a("6RfX"),a("KHd+")),r=Object(n.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"mobile-action-button"},[t("div",{staticClass:"flex"},[t("cloud-plus-icon",{staticClass:"icon dark-text-theme",attrs:{size:"15"}}),this._v(" "),t("label",{staticClass:"label button file-input button-base",attrs:{label:"file"}},[this._t("default"),this._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})],2)],1)])}),[],!1,null,"a92eeb06",null);t.a=r.exports},XpyM:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".menu-option[data-v-533f0740]{white-space:nowrap;font-weight:700;font-size:.875em;padding:15px 20px;cursor:pointer;width:100%;color:#1b2539;display:flex;align-items:center}.menu-option .icon-left[data-v-533f0740]{margin-right:20px;line-height:0}.menu-option .icon-left circle[data-v-533f0740],.menu-option .icon-left line[data-v-533f0740],.menu-option .icon-left path[data-v-533f0740],.menu-option .icon-left polygon[data-v-533f0740],.menu-option .icon-left polyline[data-v-533f0740],.menu-option .icon-left rect[data-v-533f0740]{color:inherit}.menu-option .text-label[data-v-533f0740]{font-size:1em}.dark .menu-option[data-v-533f0740]{color:#bec6cf}",""])},YQUA:function(e,t,a){"use strict";var i=a("WHe5"),o=a("7SOQ"),n=a("6Z3Y"),r={name:"MobileTeamContextMenu",components:{TeamFolderPreview:o.a,MenuMobileGroup:i.a,MenuMobile:n.a}},s=a("KHd+"),l=Object(s.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("MenuMobile",{attrs:{name:"team-menu"}},[t("TeamFolderPreview"),this._v(" "),this.$slots.default?t("MenuMobileGroup",[this._t("default")],2):this._e()],1)}),[],!1,null,null,null);t.a=l.exports},bpVB:function(e,t,a){"use strict";var i={name:"ButtonBase",props:["buttonStyle"],data:function(){return{files:void 0}},methods:{emmitFiles:function(e){this.$uploadFiles(e.target.files)}}},o=(a("3QIs"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"button file-input button-base",class:this.buttonStyle,attrs:{label:"file"}},[this._t("default"),this._v(" "),t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{accept:"*",id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})],2)}),[],!1,null,"473134a0",null);t.a=n.exports},dH5z:function(e,t,a){"use strict";a("xCqy");var i={name:"Option",props:["title"],components:{UploadCloudIcon:a("CjXH").ub},methods:{emmitFiles:function(e){this.$uploadFiles(e.target.files)}}},o=(a("7gkV"),a("KHd+")),n=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"menu-option group",attrs:{for:"file"}},[t("div",{staticClass:"icon-left group-hover-text-theme"},[t("upload-cloud-icon",{staticClass:"group-hover-text-theme",attrs:{size:"17"}})],1),this._v(" "),t("div",{staticClass:"text-label group-hover-text-theme"},[this._v("\n            "+this._s(this.title)+"\n\t\t\t"),t("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{id:"file",type:"file",name:"files[]",multiple:""},on:{change:this.emmitFiles}})])])}),[],!1,null,"533f0740",null);t.a=n.exports},f3j1:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".button-base[data-v-473134a0]{font-size:.9375em;font-weight:700;cursor:pointer;transition:all .15s ease;border-radius:8px;border:0;padding:10px 28px;display:inline-block}.button-base[data-v-473134a0]:active{transform:scale(.95)}.button-base.secondary[data-v-473134a0]{color:#1b2539;background:#f4f5f6}",""])},lxZf:function(e,t,a){var i=a("o/0A");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},n7nT:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".team-folder[data-v-16e0d9d5]{display:flex;align-items:center}.team-folder .member-count[data-v-16e0d9d5]{font-size:.75em;color:rgba(27,37,57,.7);margin-right:3px;opacity:.7;min-width:14px;text-align:left}.team-folder .members[data-v-16e0d9d5]{display:flex}.team-folder .members .member-preview[data-v-16e0d9d5]{margin-left:-10px}.team-folder .members .member-preview[data-v-16e0d9d5]:first-child{margin-left:0}.team-folder .members .member[data-v-16e0d9d5]{width:32px;height:32px;-o-object-fit:cover;object-fit:cover;border-radius:10px;border:2px solid #fff;vertical-align:middle}.dark .team-folder .member-count[data-v-16e0d9d5]{color:#7d858c}.dark .team-folder .members .member[data-v-16e0d9d5]{border-color:#1e2024}",""])},"o/0A":function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".mobile-action-button[data-v-a92eeb06]{background:#f4f5f6;margin-right:8px;border-radius:8px;padding:7px 14px;cursor:pointer;border:none}.mobile-action-button .flex[data-v-a92eeb06]{display:flex;align-items:center}.mobile-action-button .icon[data-v-a92eeb06]{vertical-align:middle;margin-right:10px;font-size:.875em}.mobile-action-button .label[data-v-a92eeb06]{vertical-align:middle;font-size:.875em;font-weight:700;color:#1b2539}.dark .mobile-action-button[data-v-a92eeb06]{background:#1e2024}.dark .mobile-action-button circle[data-v-a92eeb06],.dark .mobile-action-button line[data-v-a92eeb06],.dark .mobile-action-button path[data-v-a92eeb06],.dark .mobile-action-button polyline[data-v-a92eeb06],.dark .mobile-action-button rect[data-v-a92eeb06]{color:inherit}.dark .mobile-action-button .label[data-v-a92eeb06]{color:#bec6cf}",""])},"tZ/+":function(e,t,a){"use strict";a("vVz/")},"vVz/":function(e,t,a){var i=a("zWDf");"string"==typeof i&&(i=[[e.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(i,o);i.locals&&(e.exports=i.locals)},xcnA:function(e,t,a){"use strict";var i=a("WHe5"),o=a("6Z3Y"),n=a("xCqy"),r={name:"MobileContextMenu",components:{MenuMobileGroup:i.a,MenuMobile:o.a},methods:{closeMenu:function(){n.a.$emit("mobile-menu:hide")}}},s=a("KHd+"),l=Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("MenuMobile",{attrs:{name:"create-list"},nativeOn:{"!click":function(t){return e.closeMenu.apply(null,arguments)}}},[a("MenuMobileGroup",[e._t("default")],2)],1)}),[],!1,null,null,null);t.a=l.exports},zWDf:function(e,t,a){(e.exports=a("I1BE")(!1)).push([e.i,".team-folder-preview[data-v-2d4ae768]{border-bottom:1px solid #f8f8f8}.dark .team-folder-preview[data-v-2d4ae768]{border-color:hsla(0,0%,100%,.02)}",""])}}]);