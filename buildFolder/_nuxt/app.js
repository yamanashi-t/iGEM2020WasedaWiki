(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,o){var content=o(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("932a8f60",content,!0,{sourceMap:!1})},264:function(t,e,o){"use strict";var n={data:function(){return{fab:!1,scrollY:0,clipped:!1,drawer:!1,fixed:!1,items:[{title:"Model",icon:"mdi-cogs",img:"https://2020.igem.org/wiki/images/1/11/T--Waseda--HeaderModel.png",lists:[{title:"Model",to:"Model"},{title:"Zombie Model",to:"Zombiemodel"},{title:"IFFL",to:"IFFL"}]},{title:"Experiment",icon:"mdi-vuetify",img:"https://2020.igem.org/wiki/images/2/24/T--Waseda--button_experiment.png",lists:[{title:"Gene Circuit",to:"QS"},{title:"Monoterpene",to:"Monoterpene"},{title:"Racemase",to:"Racemase"},{title:"Protocol",to:"Protocol"}]},{title:"HP",icon:"mdi-view-dashboard",img:"https://2020.igem.org/wiki/images/7/73/T--Waseda--HeaderHp.png",lists:[{title:"Human_Practices",to:"Human_Practices"},{title:"Implementation",to:"Implementation"},{title:"Entrepreneurship",to:"Entrepreneurship"},{title:"Education",to:"Education"},{title:"Excellence_in_Another_Area",to:"Excellence_in_Another_Area"}]},{title:"Team",icon:"mdi-function",img:"https://2020.igem.org/wiki/images/a/ab/T--Waseda--HeaderTeam.png",lists:[{title:"Team",to:"Team"},{title:"Attributions",to:"Attributions"},{title:"Collaborations",to:"Collaborations"},{title:"Sponsors",to:"Sponsors"}]},{title:"JudgingForm",icon:"mdi-vuetify",img:"https://2020.igem.org/wiki/images/8/8d/T--Waseda--Judgingformbutton.png",lists:[{title:"Description",to:"Description"},{title:"Contribution",to:"Contribution"},{title:"Engineering",to:"Engineering"},{title:"Video",to:"Video"},{title:"Achivement",to:"Achivement"},{title:"Safety",to:"Safety"},{title:"Judging Form",to:"Judging_Form"},{title:"Feedback",to:"Feedback"}]}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}},toTop:function(){this.$vuetify.goTo(0)}}},r=(o(296),o(86)),l=o(187),c=o.n(l),d=o(390),v=o(399),m=o(391),_=o(265),f=o(392),x=o(400),h=o(393),w=o(180),y=o(181),k=o(182),C=o(117),V=o(183),T=o(75),P=o(394),H=o(401),M=o(398),S=o(396),E=o(397),W=o(150),z=o(188),A=o.n(z),F=o(124),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{attrs:{app:"",temporary:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{left:""}},[o("v-list-item",{attrs:{to:"/",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-apps")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s("Home")}})],1)],1),t._v(" "),o("v-list-item",{attrs:{to:"/Project",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-speedometer")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s("Project")}})],1)],1),t._v(" "),o("v-list-item",{attrs:{to:"/Parts",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-palette")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s("Parts")}})],1)],1),t._v(" "),t._l(t.items,(function(e,i){return o("v-list-group",{key:i,attrs:{"prepend-icon":e.icon,"no-action":"","append-icon":e.lists?void 0:""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.lists,(function(e,n){return o("v-list-item",{key:n,attrs:{to:e.to,router:""}},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)}))],2)],1),t._v(" "),t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-app-bar",{attrs:{app:"",elevation:"10",prominent:"",dense:"","clipped-left":""}},[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),t._v(" "),o("v-toolbar-title",[o("img",{staticClass:"navi_home_logo",attrs:{src:"https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"}})]),t._v(" "),o("v-spacer"),t._v(" "),t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?[o("v-toolbar-items",[o("v-btn",{staticClass:"navi_btn",attrs:{to:"/",text:""}},[o("img",{staticClass:"navi_logo",attrs:{src:"https://2020.igem.org/wiki/images/7/7a/T--Waseda--HeaderHome.png"}})])],1),t._v(" "),o("v-toolbar-items",[o("v-btn",{staticClass:"navi_btn",attrs:{to:"/Project",text:""}},[o("img",{staticClass:"navi_logo",attrs:{src:"https://2020.igem.org/wiki/images/3/39/T--Waseda--HeaderProject.png"}})])],1),t._v(" "),o("v-toolbar-items",[o("v-btn",{staticClass:"navi_btn",attrs:{to:"/Parts",text:""}},[o("img",{staticClass:"navi_logo",attrs:{src:"https://2020.igem.org/wiki/images/b/b0/T--Waseda--HeaderParts.png"}})])],1),t._v(" "),t._l(t.items,(function(e,i){return o("v-toolbar-items",{key:i},[o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on;return[o("v-btn",t._g({staticClass:"navi_btn",attrs:{text:""}},r),[o("img",{staticClass:"navi_logo",attrs:{src:e.img}})])]}}],null,!0)},[t._v(" "),o("v-list",t._l(e.lists,(function(e,n){return o("v-list-item",{key:n,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)}))]:t._e()],2):o("v-app-bar",{attrs:{app:"",elevation:"10",extend:"",center:"","clipped-cneter":""}},[o("v-app-bar-nav-icon",{attrs:{large:""},on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-title",[o("img",{staticClass:"navi_home_logo",attrs:{src:"https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"}})]),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-main",{staticStyle:{padding:"76px 0 0"}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("nuxt"),t._v(" "),o("v-row",[o("transition",{attrs:{name:"fade"}},[o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[o("v-icon",[t._v("mdi-arrow-up")])],1)],1)],1)],1)],1),t._v(" "),o("v-footer",{staticStyle:{margin:"0 0 -32px 0"},attrs:{color:"primary lighten-1"}},[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v("\n          "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("iGEM Waseda")])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:v.a,VAppBarNavIcon:m.a,VBtn:_.a,VCol:f.a,VContainer:x.a,VFooter:h.a,VIcon:w.a,VList:y.a,VListGroup:k.a,VListItem:C.a,VListItemAction:V.a,VListItemContent:T.a,VListItemTitle:T.b,VMain:P.a,VMenu:H.a,VNavigationDrawer:M.a,VRow:S.a,VSpacer:E.a,VToolbarItems:W.a,VToolbarTitle:W.b}),A()(component,{Scroll:F.b})},269:function(t,e,o){t.exports=o(270)},296:function(t,e,o){"use strict";var n=o(140);o.n(n).a},297:function(t,e,o){(e=o(17)(!1)).push([t.i,"#firstHeading,#home_logo,#sideMenu,#top_title,.patrollink{display:none}#content{padding:0;width:100%;margin-top:-7px;margin-left:0;border:none}[dir=ltr] #HQ_page p{text-align:left}[dir=rtl] #HQ_page p{text-align:right}#HQ_page p{font-size:medium;font-size:24px;word-wrap:normal}[dir=ltr] p{text-align:left}[dir=rtl] p{text-align:right}p{font-size:medium;word-wrap:normal}#bodyContent h1,#bodyContent h2{margin-bottom:0}.p_indent{font-size:24px;text-indent:50px}h2{font-size:40px}.h2_text{font-size:50px;padding:0;margin:20px 0 0;border-bottom:5px solid #000}h3{font-size:30px}p{font-size:24px}.image_max{width:100%}.fig_sm_width{width:100%;padding:0 30%}.fig_mid_width{width:100%;padding:0 20%}.fig_full_width{width:100%;padding:0}.fig_title{text-align:center}.v-toolbar--dense .v-toolbar__content{padding:20px 16px 4px}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#b09161}.navi_home_logo{width:100px}.navi_logo{width:85px}.v-btn:not(.v-btn--round).v-size--default{padding:7px;min-width:0}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:end;padding-bottom:6px;padding-top:0}.v-btn--fab.v-size--large .v-icon,.v-btn--icon.v-size--large .v-icon{padding:20px 0 0 10px;height:40px;font-size:40px;color:#fff;width:40px}.v-toolbar__items>.v-btn{border-radius:0;height:100% - 20x;max-height:76px}.fade-enter-active,.fade-leave-active{transition:.5s}.fade-enter,.fade-leave-to{opacity:0;transform:scale(0)}",""]),t.exports=e},76:function(t,e,o){"use strict";var n=o(86),component=Object(n.a)({},void 0,void 0,!1,null,null,null);e.a=component.exports}},[[269,30,1,31]]]);