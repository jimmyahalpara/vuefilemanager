(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"2Sb1":function(a,t,n){"use strict";var e={name:"PageHeader",props:["title","canBack"],components:{ChevronLeftIcon:n("CjXH").g}},i=(n("qf9i"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"page-header"},[a.canBack?n("div",{staticClass:"go-back",on:{click:function(t){return a.$router.back()}}},[n("chevron-left-icon",{attrs:{size:"17"}})],1):a._e(),a._v(" "),n("div",{staticClass:"content"},[n("h1",{staticClass:"title"},[a._v(a._s(a.title))])])])}),[],!1,null,"aafe7e24",null);t.a=o.exports},"3Idf":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".page-header[data-v-aafe7e24] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-aafe7e24] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-aafe7e24] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-aafe7e24] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-aafe7e24] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-aafe7e24] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-aafe7e24] {\n    background: #131414;\n}\n.page-header .title[data-v-aafe7e24] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-aafe7e24] {\n    fill: #00BC7E;\n}\n}\n",""])},"3YzQ":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".empty-page-content[data-v-2d45c340] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  text-align: center;\n}\n.empty-page-content .content[data-v-2d45c340] {\n  margin: 0 auto;\n  max-width: 360px;\n}\n.empty-page-content .content[data-v-2d45c340] .button-base {\n  margin: 0 auto;\n}\n.empty-page-content .icon path[data-v-2d45c340], .empty-page-content .icon polyline[data-v-2d45c340], .empty-page-content .icon line[data-v-2d45c340], .empty-page-content .icon circle[data-v-2d45c340] {\n  stroke: #00BC7E;\n}\n.empty-page-content .header[data-v-2d45c340] {\n  margin-top: 15px;\n  margin-bottom: 25px;\n}\n.empty-page-content .title[data-v-2d45c340] {\n  font-size: 1.4375em;\n  font-weight: 700;\n  padding-bottom: 5px;\n}\n.empty-page-content .description[data-v-2d45c340] {\n  font-size: 1em;\n  font-weight: 500;\n}\n",""])},"4BZo":function(a,t,n){"use strict";var e=n("a+T1");n.n(e).a},"5XA5":function(a,t,n){var e=n("aUEw");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},"6TPS":function(a,t,n){"use strict";var e=n("CjXH"),i={props:["data"],computed:{normalizedColumns:function(){return this.data.id&&delete this.data.id,Object.values(this.data)}}},o=(n("FNZF"),n("KHd+")),s=Object(o.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("tr",{staticClass:"table-row"},a._l(a.normalizedColumns,(function(t,e){return n("td",{key:e,staticClass:"table-cell"},[n("span",[a._v(a._s(t))])])})),0)}),[],!1,null,"15a1e318",null).exports,l=(n("LvDl"),n("vDqi")),r=n.n(l),c={name:"DatatableWrapper",props:["columns","scope","paginator","api","tableData"],components:{ChevronRightIcon:e.h,ChevronLeftIcon:e.g,DatatableCell:s,ChevronUpIcon:e.i},computed:{hasData:function(){return this.data&&this.data.data&&this.data.data.length>0},floatPages:function(){return[this.pageIndex-1,this.pageIndex,this.pageIndex+1]}},data:function(){return{data:void 0,isLoading:!0,pageIndex:1,filter:{sort:"DESC",field:void 0}}},methods:{goToPage:function(a){a>this.data.meta.last_page||0===a||(this.pageIndex=a,this.getPage(a))},sort:function(a,t){t&&(this.filter.field=a,"DESC"===this.filter.sort?this.filter.sort="ASC":"ASC"===this.filter.sort&&(this.filter.sort="DESC"),this.getPage(this.pageIndex))},getPage:function(a){var t=this;this.URI=this.api,this.paginator&&(this.URI=this.URI+"?page="+a),this.filter.field&&(this.URI=this.URI+(this.paginator?"&":"?")+"sort="+this.filter.field+"&direction="+this.filter.sort),this.isLoading=!0,r.a.get(this.URI).then((function(a){t.data=a.data,t.$emit("data",a.data)})).catch((function(){return t.$isSomethingWrong()})).finally((function(){t.$emit("init",!0),t.isLoading=!1}))}},created:function(){this.api&&this.getPage(this.pageIndex),this.tableData&&(this.data=this.tableData,this.isLoading=!1)}},d=(n("HMoj"),Object(o.a)(c,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"datatable"},[a.hasData?n("table",{staticClass:"table"},[n("thead",{staticClass:"table-header"},[n("tr",a._l(a.columns,(function(t,e){return t.hidden?a._e():n("th",{key:e,class:{sortable:t.sortable},on:{click:function(n){return a.sort(t.field,t.sortable)}}},[n("span",[a._v(a._s(t.label))]),a._v(" "),t.sortable?n("chevron-up-icon",{staticClass:"filter-arrow",class:{"arrow-down":"ASC"===a.filter.sort},attrs:{size:"14"}}):a._e()],1)})),0)]),a._v(" "),n("tbody",{staticClass:"table-body"},[a._l(a.data.data,(function(t){return a._t("default",[n("DatatableCell",{key:t.id,attrs:{data:t}})],{row:t})}))],2)]):a._e(),a._v(" "),a.isLoading||a.hasData?a._e():a._t("empty-page"),a._v(" "),a.paginator&&a.hasData?n("div",{staticClass:"paginator-wrapper"},[a.data.meta.total>20&&a.data.meta.last_page<=6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a._l(6,(function(t,e){return n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])])})),a._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),a.data.meta.total>20&&a.data.meta.last_page>6?n("ul",{staticClass:"pagination"},[n("li",{staticClass:"page-item previous"},[n("a",{staticClass:"page-link",class:{disabled:0==a.pageIndex},on:{click:function(t){return a.goToPage(a.pageIndex-1)}}},[n("chevron-left-icon",{staticClass:"icon",attrs:{size:"14"}})],1)]),a._v(" "),a.pageIndex>=5?n("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(1)}}},[n("a",{staticClass:"page-link"},[a._v("\n                    1\n                ")])]):a._e(),a._v(" "),a._l(5,(function(t,e){return a.pageIndex<5?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex>=5?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(a.floatPages,(function(t,e){return a.pageIndex>=5&&a.pageIndex<a.data.meta.last_page-3?n("li",{key:e,staticClass:"page-item",on:{click:function(n){return a.goToPage(t)}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===t}},[a._v("\n                    "+a._s(t)+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?n("li",{staticClass:"page-item"},[n("a",{staticClass:"page-link"},[a._v("...")])]):a._e(),a._v(" "),a._l(5,(function(t,e){return a.pageIndex>a.data.meta.last_page-4?n("li",{key:e,staticClass:"page-item",on:{click:function(t){a.goToPage(a.data.meta.last_page-(4-e))}}},[n("a",{staticClass:"page-link",class:{active:a.pageIndex===a.data.meta.last_page-(4-e)}},[a._v("\n                    "+a._s(a.data.meta.last_page-(4-e))+"\n                ")])]):a._e()})),a._v(" "),a.pageIndex<a.data.meta.last_page-3?n("li",{staticClass:"page-item",on:{click:function(t){return a.goToPage(a.data.meta.last_page)}}},[n("a",{staticClass:"page-link"},[a._v("\n                    "+a._s(a.data.meta.last_page)+"\n                ")])]):a._e(),a._v(" "),n("li",{staticClass:"page-item next"},[n("a",{staticClass:"page-link",class:{disabled:a.pageIndex+1==a.data.meta.last_page},on:{click:function(t){return a.goToPage(a.pageIndex+1)}}},[n("chevron-right-icon",{staticClass:"icon",attrs:{size:"14"}})],1)])],2):a._e(),a._v(" "),n("span",{staticClass:"paginator-info"},[a._v(a._s(a.$t("datatable.paginate_info",{visible:a.data.meta.per_page,total:a.data.meta.total})))])]):a._e()],2)}),[],!1,null,"56f3a787",null));t.a=d.exports},"92Jy":function(a,t,n){"use strict";var e=n("qphJ");n.n(e).a},F11w:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".color-label[data-v-ffcb2882] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-ffcb2882] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-ffcb2882] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-ffcb2882] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-ffcb2882] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n",""])},FNZF:function(a,t,n){"use strict";var e=n("Mrvf");n.n(e).a},GkQO:function(a,t,n){"use strict";var e=n("J5Z7");n.n(e).a},HMoj:function(a,t,n){"use strict";var e=n("5XA5");n.n(e).a},J5Z7:function(a,t,n){var e=n("F11w");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},KPNK:function(a,t,n){var e=n("3Idf");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},KbUq:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".table-row[data-v-15a1e318] {\n  border-radius: 8px;\n}\n.table-row[data-v-15a1e318]:hover {\n  background: #f4f5f6;\n}\n.table-row .table-cell[data-v-15a1e318] {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:first-child {\n  padding-left: 15px;\n}\n.table-row .table-cell[data-v-15a1e318]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table-row .table-cell span[data-v-15a1e318] {\n  font-size: 1em;\n  font-weight: bold;\n}\n",""])},KfIT:function(a,t,n){"use strict";var e=n("CjXH"),i={name:"EmptyPageContent",props:["icon","title","description"],components:{SettingsIcon:e.T,FileTextIcon:e.v,FileIcon:e.u}},o=(n("oeGM"),n("KHd+")),s=Object(o.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{staticClass:"empty-page-content"},[n("div",{staticClass:"content"},[n("div",{staticClass:"icon"},["file"===a.icon?n("file-icon",{attrs:{size:"38"}}):a._e(),a._v(" "),"file-text"===a.icon?n("file-text-icon",{attrs:{size:"38"}}):a._e(),a._v(" "),"settings"===a.icon?n("settings-icon",{attrs:{size:"38"}}):a._e()],1),a._v(" "),n("div",{staticClass:"header"},[n("h1",{staticClass:"title"},[a._v(a._s(a.title))]),a._v(" "),n("h2",{staticClass:"description"},[a._v(a._s(a.description))])]),a._v(" "),a._t("default")],2)])}),[],!1,null,"2d45c340",null);t.a=s.exports},Mrvf:function(a,t,n){var e=n("KbUq");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},THmQ:function(a,t,n){"use strict";var e={name:"SectionTitle"},i=(n("92Jy"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"text-label"},[this._t("default")],2)}),[],!1,null,"69d97df2",null);t.a=o.exports},"a+T1":function(a,t,n){var e=n("mw7W");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},aUEw:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".datatable[data-v-56f3a787] {\n  height: 100%;\n}\n.table-row[data-v-56f3a787] {\n  transition: 0.3s all ease;\n}\n.table-row-enter[data-v-56f3a787],\n.table-row-leave-to[data-v-56f3a787] {\n  opacity: 0;\n  transform: translateY(-100%);\n}\n.table-row-leave-active[data-v-56f3a787] {\n  position: absolute;\n}\n.table[data-v-56f3a787] {\n  width: 100%;\n  border-collapse: collapse;\n  overflow-x: auto;\n}\n.table tr[data-v-56f3a787] {\n  width: 100%;\n}\n.table tr td[data-v-56f3a787]:first-child, .table tr th[data-v-56f3a787]:first-child {\n  padding-left: 15px;\n}\n.table tr td[data-v-56f3a787]:last-child, .table tr th[data-v-56f3a787]:last-child {\n  padding-right: 15px;\n  text-align: right;\n}\n.table .table-header[data-v-56f3a787] {\n  margin-bottom: 10px;\n}\n.table .table-header tr td[data-v-56f3a787], .table .table-header tr th[data-v-56f3a787] {\n  padding: 12px;\n  text-align: left;\n}\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n  color: #00BC7E;\n  font-weight: 700;\n  font-size: 0.75em;\n  white-space: nowrap;\n}\n.table .table-header tr td.sortable[data-v-56f3a787], .table .table-header tr th.sortable[data-v-56f3a787] {\n  cursor: pointer;\n}\n.table .table-header tr td.sortable:hover .filter-arrow[data-v-56f3a787], .table .table-header tr th.sortable:hover .filter-arrow[data-v-56f3a787] {\n  opacity: 1;\n}\n.table .table-header tr td[data-v-56f3a787]:last-child, .table .table-header tr th[data-v-56f3a787]:last-child {\n  text-align: right;\n}\n.table .table-header .filter-arrow[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-left: 8px;\n  transition: 0.3s all ease;\n  opacity: 0;\n}\n.table .table-header .filter-arrow path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.table .table-header .filter-arrow.arrow-down[data-v-56f3a787] {\n  transform: rotate(180deg);\n}\n.table .table-header span[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n  font-weight: bold;\n}\n.table .table-body tr[data-v-56f3a787] {\n  border-radius: 8px;\n}\n.table .table-body tr[data-v-56f3a787]:hover {\n  background: #f4f5f6;\n}\n.table .table-body tr td[data-v-56f3a787], .table .table-body tr th[data-v-56f3a787] {\n  padding: 12px;\n}\n.table .table-body tr td:last-child button[data-v-56f3a787], .table .table-body tr th:last-child button[data-v-56f3a787] {\n  margin-right: 0;\n}\n.table .table-body span[data-v-56f3a787], .table .table-body a.page-link[data-v-56f3a787] {\n  font-size: 0.9375em;\n  font-weight: 700;\n  padding: 10px 35px 10px 0;\n  display: block;\n  white-space: nowrap;\n}\n.pagination .page-item[data-v-56f3a787] {\n  padding: 3px;\n  display: inline-block;\n}\n.pagination .page-link[data-v-56f3a787] {\n  width: 30px;\n  height: 30px;\n  display: block;\n  color: #1B2539;\n  border-radius: 6px;\n  text-align: center;\n  line-height: 2.4;\n  font-weight: bold;\n  font-size: 13px;\n  cursor: pointer;\n  transition: 0.15s all ease;\n}\n.pagination .page-link .icon[data-v-56f3a787] {\n  vertical-align: middle;\n  margin-top: -2px;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n  background: #f4f5f6;\n  color: #1B2539;\n}\n.pagination .page-link.active[data-v-56f3a787] {\n  color: #1B2539;\n  background: #f4f5f6;\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n  background: transparent;\n  cursor: default;\n}\n.pagination .page-link.disabled svg path[data-v-56f3a787] {\n  fill: rgba(27, 37, 57, 0.7);\n}\n.paginator-wrapper[data-v-56f3a787] {\n  margin-top: 30px;\n  margin-bottom: 40px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n  font-size: 13px;\n  color: rgba(27, 37, 57, 0.7);\n}\n.user-preview[data-v-56f3a787] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.user-preview img[data-v-56f3a787] {\n  width: 45px;\n  margin-right: 22px;\n}\n@media only screen and (max-width: 690px) {\n.paginator-wrapper[data-v-56f3a787] {\n    display: block;\n    text-align: center;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    margin-top: 10px;\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table .table-header tr td span[data-v-56f3a787], .table .table-header tr th span[data-v-56f3a787] {\n    color: #00BC7E;\n}\n.table .table-body tr[data-v-56f3a787]:hover, .table .table-body th[data-v-56f3a787]:hover {\n    background: #1e2024;\n}\n.paginator-wrapper .paginator-info[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link[data-v-56f3a787] {\n    color: #7d858c;\n}\n.pagination .page-link svg polyline[data-v-56f3a787] {\n    stroke: #bec6cf;\n}\n.pagination .page-link[data-v-56f3a787]:hover:not(.disabled) {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.active[data-v-56f3a787] {\n    color: #00BC7E;\n    background: rgba(0, 188, 126, 0.1);\n}\n.pagination .page-link.disabled[data-v-56f3a787] {\n    background: transparent;\n    cursor: default;\n}\n.pagination .page-link.disabled svg polyline[data-v-56f3a787] {\n    stroke: #7d858c;\n}\n}\n",""])},d6jx:function(a,t,n){"use strict";n.r(t);var e=n("6TPS"),i=n("t5U/"),o=n("KfIT"),s=n("xxrA"),l=n("D62o"),r=n("THmQ"),c=n("Nv84"),d=n("CjXH"),p=n("2Sb1"),g=n("kPoH"),f=n("zTYo"),v=(n("vDqi"),{name:"Pages",components:{MobileActionButton:i.a,EmptyPageContent:o.a,DatatableWrapper:e.a,SectionTitle:r.a,MobileHeader:l.a,SwitchInput:s.a,Trash2Icon:d.X,PageHeader:p.a,ButtonBase:c.a,ColorLabel:g.a,Edit2Icon:d.q,Spinner:f.a},data:function(){return{isLoading:!0,columns:[{label:this.$t("admin_pages.table.page"),field:"title",sortable:!0},{label:this.$t("admin_pages.table.slug"),field:"slug",sortable:!0},{label:this.$t("admin_pages.table.status"),field:"visibility",sortable:!0},{label:this.$t("admin_page_user.table.action"),sortable:!1}]}},methods:{changeStatus:function(a,t){this.$updateText("/pages/"+t,"visibility",a)}}}),b=(n("4BZo"),n("KHd+")),u=Object(b.a)(v,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",{attrs:{id:"single-page"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!a.isLoading,expression:"! isLoading"}],attrs:{id:"page-content"}},[n("MobileHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),n("PageHeader",{attrs:{title:a.$router.currentRoute.meta.title}}),a._v(" "),n("div",{staticClass:"content-page"},[n("DatatableWrapper",{staticClass:"table table-users",attrs:{api:"/api/pages",paginator:!1,columns:a.columns},on:{init:function(t){a.isLoading=!1}},scopedSlots:a._u([{key:"default",fn:function(t){var e=t.row;return[n("tr",[n("td",{staticClass:"name",staticStyle:{"min-width":"200px"}},[n("router-link",{staticClass:"cell-item",attrs:{to:{name:"PageEdit",params:{slug:e.data.attributes.slug}},tag:"div"}},[n("span",[a._v(a._s(e.data.attributes.title))])])],1),a._v(" "),n("td",[n("span",{staticClass:"cell-item"},[a._v("\n                                "+a._s(e.data.attributes.slug)+"\n                            ")])]),a._v(" "),n("td",[n("span",{staticClass:"cell-item"},[n("SwitchInput",{staticClass:"switch",attrs:{state:e.data.attributes.visibility},on:{input:function(t){return a.changeStatus(t,e.data.attributes.slug)}}})],1)]),a._v(" "),n("td",[n("div",{staticClass:"action-icons"},[n("router-link",{attrs:{to:{name:"PageEdit",params:{slug:e.data.attributes.slug}}}},[n("edit-2-icon",{staticClass:"icon icon-edit",attrs:{size:"15"}})],1)],1)])])]}}])})],1)],1),a._v(" "),a.isLoading?n("div",{attrs:{id:"loader"}},[n("Spinner")],1):a._e()])}),[],!1,null,"8908c160",null);t.default=u.exports},iD9g:function(a,t,n){var e=n("mE+g");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},jIdw:function(a,t,n){"use strict";var e=n("iD9g");n.n(e).a},kPoH:function(a,t,n){"use strict";var e={name:"ColorLabel",props:["color"]},i=(n("GkQO"),n("KHd+")),o=Object(i.a)(e,(function(){var a=this.$createElement;return(this._self._c||a)("b",{staticClass:"color-label",class:this.color},[this._t("default")],2)}),[],!1,null,"ffcb2882",null);t.a=o.exports},lW02:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".text-label[data-v-69d97df2] {\n  font-size: 0.75em;\n  color: #AFAFAF;\n  font-weight: 700;\n  display: block;\n  margin-bottom: 20px;\n}\n@media (prefers-color-scheme: dark) {\n.text-label[data-v-69d97df2] {\n    color: #00BC7E;\n}\n}\n",""])},"mE+g":function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".mobile-action-button[data-v-50a1066a] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n  /*&:hover {\n        background: rgba($theme, 0.1);\n\n        .icon {\n            path, line, polyline, rect, circle {\n                stroke: $theme;\n            }\n        }\n\n        .label {\n            color: $theme;\n        }\n    }*/\n}\n.mobile-action-button .flex[data-v-50a1066a] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-50a1066a] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-50a1066a], .mobile-action-button .icon line[data-v-50a1066a], .mobile-action-button .icon polyline[data-v-50a1066a], .mobile-action-button .icon rect[data-v-50a1066a], .mobile-action-button .icon circle[data-v-50a1066a] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-50a1066a] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-50a1066a]:active {\n  transform: scale(0.95);\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-50a1066a] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-50a1066a], .mobile-action-button line[data-v-50a1066a], .mobile-action-button polyline[data-v-50a1066a], .mobile-action-button rect[data-v-50a1066a], .mobile-action-button circle[data-v-50a1066a] {\n    stroke: #00BC7E;\n}\n.mobile-action-button .label[data-v-50a1066a] {\n    color: #bec6cf;\n}\n}\n",""])},mw7W:function(a,t,n){(a.exports=n("I1BE")(!1)).push([a.i,".table-tools[data-v-8908c160] {\n  background: white;\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0 10px;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 40px;\n  z-index: 9;\n}\n.table .cell-item[data-v-8908c160] {\n  font-size: 0.9375em;\n  white-space: nowrap;\n}\n.table .name[data-v-8908c160] {\n  font-weight: 700;\n  cursor: pointer;\n}\n@media only screen and (max-width: 690px) {\n.table-tools[data-v-8908c160] {\n    padding: 0 0 5px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.table-tools[data-v-8908c160] {\n    background: #131414;\n}\n.action-icons .icon[data-v-8908c160] {\n    cursor: pointer;\n}\n.action-icons .icon circle[data-v-8908c160], .action-icons .icon path[data-v-8908c160], .action-icons .icon line[data-v-8908c160], .action-icons .icon polyline[data-v-8908c160] {\n    stroke: #bec6cf;\n}\n.user-thumbnail .info .email[data-v-8908c160] {\n    color: #7d858c;\n}\n}\n",""])},oeGM:function(a,t,n){"use strict";var e=n("xjpg");n.n(e).a},qf9i:function(a,t,n){"use strict";var e=n("KPNK");n.n(e).a},qphJ:function(a,t,n){var e=n("lW02");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)},"t5U/":function(a,t,n){"use strict";var e=n("CjXH"),i={name:"MobileActionButton",props:["icon"],components:{SortingAndPreviewIcon:n("Fqzo").a,CheckSquareIcon:e.e,CreditCardIcon:e.n,FolderPlusIcon:e.x,UserPlusIcon:e.cb,XSquareIcon:e.gb,CheckIcon:e.d,TrashIcon:e.Y,PlusIcon:e.N,ListIcon:e.F,GridIcon:e.y}},o=(n("jIdw"),n("KHd+")),s=Object(o.a)(i,(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("button",{staticClass:"mobile-action-button"},[n("div",{staticClass:"flex"},["credit-card"===a.icon?n("credit-card-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"folder-plus"===a.icon?n("folder-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th-list"===a.icon?n("list-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"trash"===a.icon?n("trash-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"th"===a.icon?n("grid-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"user-plus"===a.icon?n("user-plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"plus"===a.icon?n("plus-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check-square"===a.icon?n("check-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"x-square"===a.icon?n("x-square-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"check"===a.icon?n("check-icon",{staticClass:"icon",attrs:{size:"15"}}):a._e(),a._v(" "),"preview-sorting"===a.icon?n("sorting-and-preview-icon",{staticClass:"icon preview-sorting",attrs:{size:"15"}}):a._e(),a._v(" "),n("span",{staticClass:"label"},[a._t("default")],2)],1)])}),[],!1,null,"50a1066a",null);t.a=s.exports},xjpg:function(a,t,n){var e=n("3YzQ");"string"==typeof e&&(e=[[a.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(e,i);e.locals&&(a.exports=e.locals)}}]);