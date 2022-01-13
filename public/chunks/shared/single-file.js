/*! For license information please see single-file.js.LICENSE.txt?id=64224a6ffe423735ebe8 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"S/43":function(d,u,e){"use strict";var f=e("JkMM"),c=e("CjXH"),t=e("w3jG"),a=e("wdhT"),r=e("dqA1"),n=e("LvDl"),i=e("L2JU"),s=e("xCqy");function o(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);u&&(f=f.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,f)}return e}function b(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?o(Object(e),!0).forEach((function(u){l(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}function l(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}var m={name:"ItemList",components:{FileIconThumbnail:t.a,MoreHorizontalIcon:c.ab,MemberAvatar:a.a,FolderIcon:f.a,CheckBox:r.a,LinkIcon:c.S,EyeIcon:c.z},props:["mobileHandler","entry"],data:function(){return{mobileMultiSelect:!1,itemName:void 0}},computed:b(b({},Object(i.b)(["isMultiSelectMode","clipboard","user"])),{},{isClicked:function(){var d=this;return this.clipboard.some((function(u){return u.data.id===d.entry.data.id}))},isAudio:function(){return"audio"===this.entry.data.type},isVideo:function(){return"video"===this.entry.data.type},isFile:function(){return"file"===this.entry.data.type},isImage:function(){return"image"===this.entry.data.type},isFolder:function(){return"folder"===this.entry.data.type},timeStamp:function(){return this.entry.data.attributes.deleted_at?this.$t("entry_thumbnail.deleted_at",{time:this.entry.data.attributes.deleted_at}):this.entry.data.attributes.created_at},canEditName:function(){return!(this.$isMobile()||this.$isThisRoute(this.$route,["Trash"])||this.$checkPermission("visitor")||this.sharedDetail&&"file"===this.sharedDetail.attributes.type)},folderItems:function(){return this.entry.data.attributes.deleted_at?this.entry.data.attributes.trashed_items:this.entry.data.attributes.items},canShowAuthor:function(){return this.$isThisRoute(this.$route,["SharedWithMe","TeamFolders"])&&!this.isFolder&&this.user.data.id!==this.entry.data.relationships.owner.data.id},canDrag:function(){return!this.isDeleted&&this.$checkPermission(["master","editor"])}}),methods:{showItemActions:function(){this.$store.commit("CLIPBOARD_CLEAR"),this.$store.commit("ADD_ITEM_TO_CLIPBOARD",this.entry),this.$showMobileMenu("file-menu"),s.a.$emit("mobile-context-menu:show",this.entry)},renameItem:Object(n.debounce)((function(d){""!==d.target.innerText.trim()&&this.$store.dispatch("renameItem",{id:this.entry.data.id,type:this.entry.data.type,name:d.target.innerText})}),300)},created:function(){var d=this;this.itemName=this.entry.data.attributes.name,s.a.$on("change:name",(function(u){d.entry.data.id===u.id&&(d.itemName=u.name)})),s.a.$on("newFolder:focus",(function(u){d.$isMobile()||d.entry.data.id!==u||(d.$refs.name.focus(),document.execCommand("selectAll"))}))}},h=e("KHd+"),p=Object(h.a)(m,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",{staticClass:"flex flex-wrap items-center justify-center relative z-0 text-center lg:h-60 sm:h-56 h-48 px-1 pt-2 rounded-lg select-none border-2 border-transparent border-dashed dark:hover:bg-dark-foreground lg:hover:bg-light-background",class:{"dark:bg-dark-foreground bg-light-background":d.isClicked},attrs:{draggable:d.canDrag,spellcheck:"false"}},[d.isMultiSelectMode?e("CheckBox",{staticClass:"mr-5",attrs:{"is-clicked":d.isClicked}}):d._e(),d._v(" "),e("div",{staticClass:"w-full"},[e("div",{staticClass:"relative mx-auto"},[d.isFolder?e("FolderIcon",{staticClass:"inline-block transform scale-150 lg:mt-2 lg:mb-8 mt-3 mb-5",attrs:{item:d.entry,location:"file-item-list"}}):d._e(),d._v(" "),d.isFile||d.isVideo||d.isAudio||d.isImage&&!d.entry.data.attributes.thumbnail?e("div",{staticClass:"relative w-24 mx-auto"},[d.user&&d.canShowAuthor?e("MemberAvatar",{staticClass:"absolute lg:-bottom-7 right-2 -bottom-5 z-10 transform lg:scale-100 scale-75 z-10",attrs:{size:38,"is-border":!0,member:d.entry.data.relationships.owner}}):d._e(),d._v(" "),e("FileIconThumbnail",{staticClass:"transform lg:scale-150 scale-125 lg:mb-12 lg:mt-6 mt-5 mb-10 z-0",attrs:{entry:d.entry}})],1):d._e(),d._v(" "),d.isImage&&d.entry.data.attributes.thumbnail?e("div",{staticClass:"relative inline-block lg:w-36 lg:h-28 w-28 h-24 mb-4"},[d.user&&d.canShowAuthor?e("MemberAvatar",{staticClass:"absolute -right-3 -bottom-2.5 transform lg:scale-100 scale-75 z-10",attrs:{size:38,"is-border":!0,member:d.entry.data.relationships.owner}}):d._e(),d._v(" "),e("img",{staticClass:"object-cover w-full h-full rounded-lg shadow-lg",attrs:{src:d.entry.data.attributes.thumbnail.sm,alt:d.entry.data.attributes.name,loading:"lazy"}})],1):d._e()],1),d._v(" "),e("div",{staticClass:"text-center"},[e("b",{ref:"name",staticClass:"inline-block leading-3 text-sm hover:underline w-full overflow-ellipsis overflow-hidden whitespace-nowrap md:px-6 tracking-tigh",attrs:{contenteditable:d.canEditName},on:{input:d.renameItem,keydown:function(u){if(!u.type.indexOf("key")&&d._k(u.keyCode,"delete",[8,46],u.key,["Backspace","Delete","Del"]))return null;u.stopPropagation()},click:function(d){d.stopPropagation()}}},[d._v("\n\t\t\t\t"+d._s(d.itemName)+"\n\t\t\t")]),d._v(" "),e("div",{staticClass:"flex items-center justify-center"},[d.$checkPermission("master")&&d.entry.data.relationships.shared?e("div",[e("link-icon",{staticClass:"mr-1.5 text-theme dark-text-theme vue-feather",attrs:{size:"12"}})],1):d._e(),d._v(" "),d.isFolder?d._e():e("small",{staticClass:"block text-xs text-gray-500"},[d._v("\n\t\t\t\t\t"+d._s(d.entry.data.attributes.filesize)),e("span",{staticClass:"lg:inline-block hidden text-xs text-gray-500"},[d._v(", "+d._s(d.timeStamp))])]),d._v(" "),d.isFolder?e("small",{staticClass:"block text-xs text-gray-500"},[d._v("\n\t\t\t\t\t"+d._s(0===d.folderItems?d.$t("folder.empty"):d.$tc("folder.item_counts",d.folderItems))),e("span",{staticClass:"lg:inline-block hidden text-xs text-gray-500"},[d._v(", "+d._s(d.timeStamp))])]):d._e()])]),d._v(" "),d.mobileHandler&&!d.isMultiSelectMode&&d.$isMobile()?e("div",{staticClass:"flex items-center justify-center py-0.5 px-2 relative"},[e("div",{staticClass:"p-2.5 sm:block hidden",on:{mouseup:function(u){return u.stopPropagation(),d.$openInDetailPanel(d.entry)}}},[e("eye-icon",{staticClass:"vue-feather opacity-30 inline-block",attrs:{size:"18"}})],1),d._v(" "),e("div",{staticClass:"p-2.5",on:{mouseup:function(u){return u.stopPropagation(),d.showItemActions.apply(null,arguments)}}},[e("MoreHorizontalIcon",{staticClass:"vue-feather text-theme dark-text-theme inline-block",attrs:{size:"18"}})],1)]):d._e()])],1)}),[],!1,null,null,null);u.a=p.exports},VymR:function(d,u,e){"use strict";var f=function(){var d={base:"https://twemoji.maxcdn.com/v/13.1.0/",ext:".png",size:"72x72",className:"emoji",convert:{fromCodePoint:function(d){var u="string"==typeof d?parseInt(d,16):d;if(u<65536)return r(u);return r(55296+((u-=65536)>>10),56320+(1023&u))},toCodePoint:p},onerror:function(){this.parentNode&&this.parentNode.replaceChild(n(this.alt,!1),this)},parse:function(u,e){e&&"function"!=typeof e||(e={callback:e});return("string"==typeof u?b:o)(u,{callback:e.callback||i,attributes:"function"==typeof e.attributes?e.attributes:m,base:"string"==typeof e.base?e.base:d.base,ext:e.ext||d.ext,size:e.folder||(f=e.size||d.size,"number"==typeof f?f+"x"+f:f),className:e.className||d.className,onerror:e.onerror||d.onerror});var f},replace:h,test:function(d){e.lastIndex=0;var u=e.test(d);return e.lastIndex=0,u}},u={"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},e=/(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,f=/\uFE0F/g,c=String.fromCharCode(8205),t=/[&<>'"]/g,a=/^(?:iframe|noframes|noscript|script|select|style|textarea)$/,r=String.fromCharCode;return d;function n(d,u){return document.createTextNode(u?d.replace(f,""):d)}function i(d,u){return"".concat(u.base,u.size,"/",d,u.ext)}function s(d){return p(d.indexOf(c)<0?d.replace(f,""):d)}function o(d,u){for(var f,c,t,r,i,o,b,l,m,h,p,g,y,v=function d(u,e){for(var f,c,t=u.childNodes,r=t.length;r--;)3===(c=(f=t[r]).nodeType)?e.push(f):1!==c||"ownerSVGElement"in f||a.test(f.nodeName.toLowerCase())||d(f,e);return e}(d,[]),x=v.length;x--;){for(t=!1,r=document.createDocumentFragment(),o=(i=v[x]).nodeValue,l=0;b=e.exec(o);){if((m=b.index)!==l&&r.appendChild(n(o.slice(l,m),!0)),g=s(p=b[0]),l=m+p.length,y=u.callback(g,u),g&&y){for(c in(h=new Image).onerror=u.onerror,h.setAttribute("draggable","false"),f=u.attributes(p,g))f.hasOwnProperty(c)&&0!==c.indexOf("on")&&!h.hasAttribute(c)&&h.setAttribute(c,f[c]);h.className=u.className,h.alt=p,h.src=y,t=!0,r.appendChild(h)}h||r.appendChild(n(p,!1)),h=null}t&&(l<o.length&&r.appendChild(n(o.slice(l),!0)),i.parentNode.replaceChild(r,i))}return d}function b(d,u){return h(d,(function(d){var e,f,c=d,a=s(d),r=u.callback(a,u);if(a&&r){for(f in c="<img ".concat('class="',u.className,'" ','draggable="false" ','alt="',d,'"',' src="',r,'"'),e=u.attributes(d,a))e.hasOwnProperty(f)&&0!==f.indexOf("on")&&-1===c.indexOf(" "+f+"=")&&(c=c.concat(" ",f,'="',e[f].replace(t,l),'"'));c=c.concat("/>")}return c}))}function l(d){return u[d]}function m(){return null}function h(d,u){return String(d).replace(e,u)}function p(d,u){for(var e=[],f=0,c=0,t=0;t<d.length;)f=d.charCodeAt(t++),c?(e.push((65536+(c-55296<<10)+(f-56320)).toString(16)),c=0):55296<=f&&f<=56319?c=f:e.push(f.toString(16));return e.join(u||"-")}}();u.a=f},oIrH:function(d,u,e){"use strict";e.r(u);var f=e("Nv84"),c=e("S/43"),t=e("L2JU");function a(d,u){var e=Object.keys(d);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(d);u&&(f=f.filter((function(u){return Object.getOwnPropertyDescriptor(d,u).enumerable}))),e.push.apply(e,f)}return e}function r(d,u,e){return u in d?Object.defineProperty(d,u,{value:e,enumerable:!0,configurable:!0,writable:!0}):d[u]=e,d}var n={name:"SharedSingleItem",components:{ButtonBase:f.a,ItemGrid:c.a},computed:function(d){for(var u=1;u<arguments.length;u++){var e=null!=arguments[u]?arguments[u]:{};u%2?a(Object(e),!0).forEach((function(u){r(d,u,e[u])})):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(u){Object.defineProperty(d,u,Object.getOwnPropertyDescriptor(e,u))}))}return d}({},Object(t.b)(["sharedDetail","sharedFile"])),methods:{download:function(){this.$downloadFile(this.sharedFile.data.attributes.file_url,this.sharedFile.data.attributes.name+"."+this.sharedFile.data.attributes.mimetype)}},mounted:function(){var d=this;this.sharedDetail?this.$store.dispatch("getSingleFile"):this.$store.dispatch("getShareDetail",this.$route.params.token).then((function(){d.$store.dispatch("getSingleFile")}))}},i=e("KHd+"),s=Object(i.a)(n,(function(){var d=this,u=d.$createElement,e=d._self._c||u;return e("div",{staticClass:"h-screen flex justify-center items-center"},[e("div",[d.sharedFile?e("ItemGrid",{attrs:{entry:d.sharedFile,highlight:!0,"mobile-handler":!0}}):d._e(),d._v(" "),e("ButtonBase",{attrs:{"button-style":"theme"},nativeOn:{click:function(u){return d.download.apply(null,arguments)}}},[d._v("\n                "+d._s(d.$t("page_shared.download_file"))+"\n            ")])],1)])}),[],!1,null,null,null);u.default=s.exports}}]);