(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(t,e,o){var content=o(298);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("18a64e50",content,!0,{sourceMap:!1})},142:function(t,e,o){var content=o(306);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("932a8f60",content,!0,{sourceMap:!1})},269:function(t,e,o){"use strict";var r={data:function(){return{fab:!1,scrollY:0,clipped:!1,drawer:!1,fixed:!1,items:[{title:"Home",icon:"mdi-speedometer",img:"https://2020.igem.org/wiki/images/7/7a/T--Waseda--HeaderHome.png",lists:[{title:"Overview",to:"/"}]},{title:"Project",icon:"mdi-speedometer",img:"https://2020.igem.org/wiki/images/3/39/T--Waseda--HeaderProject.png",lists:[{title:"Overview",to:"inspire"},{title:"Description",to:"Description"},{title:"Quick Start",to:"inspire"}]},{title:"Model",icon:"mdi-cogs",img:"https://2020.igem.org/wiki/images/1/11/T--Waseda--HeaderModel.png",lists:[{title:"Model",to:"Model"},{title:"Quick Start",to:"inspire"},{title:"Software",to:"SoftWare"}]},{title:"Parts",icon:"mdi-palette",img:"https://2020.igem.org/wiki/images/b/b0/T--Waseda--HeaderParts.png",lists:[{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"}]},{title:"HP",icon:"mdi-view-dashboard",img:"https://2020.igem.org/wiki/images/7/73/T--Waseda--HeaderHp.png",lists:[{title:"Human_Practices",to:"Human_Practices"},{title:"Entrepreneurship",to:"Entrepreneurship"},{title:"Education",to:"Education"}]},{title:"Team",icon:"mdi-function",img:"https://2020.igem.org/wiki/images/a/ab/T--Waseda--HeaderTeam.png",lists:[{title:"Team",to:"Team"},{title:"Attributions",to:"Attributions"},{title:"Partnership",to:"Partnership"},{title:"Collaborations",to:"Collaborations"}]},{title:"Award",icon:"mdi-vuetify",img:"https://2020.igem.org/wiki/images/5/5c/T--Waseda--HeaderAward.png",lists:[{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"}]},{title:"Notebook",icon:"mdi-vuetify",img:"https://2020.igem.org/wiki/images/5/5c/T--Waseda--HeaderAward.png",lists:[{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"},{title:"Quick Start",to:"inspire"}]}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},methods:{onScroll:function(t){if("undefined"!=typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>500}},toTop:function(){this.$vuetify.goTo(0)}}},n=(o(305),o(86)),l=o(124),c=o.n(l),v=o(396),d=o(406),m=o(397),f=o(265),_=o(398),h=o(399),w=o(400),k=o(183),x=o(184),y=o(185),V=o(117),T=o(186),S=o(75),H=o(401),C=o(407),W=o(405),E=o(403),M=o(404),A=o(152),P=o(194),Q=o.n(P),$=o(126),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-navigation-drawer",{attrs:{app:"",temporary:"",clipped:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[o("v-list",{attrs:{left:""}},[o("v-list-item",{attrs:{to:"/",router:"",exact:""}},[o("v-list-item-action",[o("v-icon",[t._v("mdi-apps")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s("Home")}})],1)],1),t._v(" "),t._l(t.items,(function(e,i){return o("v-list-group",{key:i,attrs:{"prepend-icon":e.icon,"no-action":"","append-icon":e.lists?void 0:""},scopedSlots:t._u([{key:"activator",fn:function(){return[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)]},proxy:!0}],null,!0)},[t._v(" "),t._l(e.lists,(function(e,r){return o("v-list-item",{key:r,attrs:{to:e.to,router:""}},[o("v-list-item-content",[o("v-list-item-title",[t._v(t._s(e.title))])],1)],1)}))],2)}))],2)],1),t._v(" "),t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-app-bar",{attrs:{app:"",elevation:"10",prominent:"",dense:"","clipped-left":""}},[t.$vuetify.breakpoint.xs||t.$vuetify.breakpoint.sm?o("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}):t._e(),t._v(" "),o("v-toolbar-title",[o("img",{staticClass:"navi_home_logo",attrs:{src:"https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"}})]),t._v(" "),o("v-spacer"),t._v(" "),t.$vuetify.breakpoint.md||t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?t._l(t.items,(function(e,i){return o("v-toolbar-items",{key:i},[o("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(r){var n=r.on;return[o("v-btn",t._g({staticClass:"navi_btn",attrs:{text:""}},n),[o("img",{staticClass:"navi_logo",attrs:{src:e.img}})])]}}],null,!0)},[t._v(" "),o("v-list",t._l(e.lists,(function(e,r){return o("v-list-item",{key:r,attrs:{to:e.to,router:"",exact:""}},[o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1)],1)})):t._e()],2):o("v-app-bar",{attrs:{app:"",elevation:"10",extend:"",center:"","clipped-cneter":""}},[o("v-app-bar-nav-icon",{attrs:{large:""},on:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),o("v-spacer"),t._v(" "),o("v-toolbar-title",[o("img",{staticClass:"navi_home_logo",attrs:{src:"https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"}})]),t._v(" "),o("v-spacer")],1),t._v(" "),o("v-main",[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("nuxt"),t._v(" "),o("v-row",[o("transition",{attrs:{name:"fade"}},[o("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:"",fixed:"",bottom:"",right:"",color:"primary"},on:{click:t.toTop}},[o("v-icon",[t._v("mdi-arrow-up")])],1)],1)],1)],1)],1),t._v(" "),o("v-footer",{attrs:{color:"primary lighten-1"}},[o("v-row",{attrs:{justify:"center","no-gutters":""}},[o("v-col",{staticClass:"primary lighten-2 py-4 text-center white--text",attrs:{cols:"12"}},[t._v("\n          "+t._s((new Date).getFullYear())+" — "),o("strong",[t._v("iGEM Waseda")])])],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VCol:_.a,VContainer:h.a,VFooter:w.a,VIcon:k.a,VList:x.a,VListGroup:y.a,VListItem:V.a,VListItemAction:T.a,VListItemContent:S.a,VListItemTitle:S.b,VMain:H.a,VMenu:C.a,VNavigationDrawer:W.a,VRow:E.a,VSpacer:M.a,VToolbarItems:A.a,VToolbarTitle:A.b}),Q()(component,{Scroll:$.b})},274:function(t,e,o){t.exports=o(275)},297:function(t,e,o){"use strict";var r=o(140);o.n(r).a},298:function(t,e,o){(e=o(17)(!1)).push([t.i,"h1[data-v-bfedb7fe]{font-size:20px}",""]),t.exports=e},305:function(t,e,o){"use strict";var r=o(142);o.n(r).a},306:function(t,e,o){(e=o(17)(!1)).push([t.i,"#firstHeading,#home_logo,#sideMenu,#top_title,.patrollink{display:none}#content{padding:0;width:100%;margin-top:-7px;margin-left:0;border:none}h2{font-size:40px}h3{font-size:30px}.v-toolbar--dense .v-toolbar__content{padding:20px 16px 4px}.theme--light.v-app-bar.v-toolbar.v-sheet{background-color:#b09161}.navi_home_logo{width:130px}.navi_logo{width:85px}.v-btn:not(.v-btn--round).v-size--default{padding:7px;min-width:0}.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title{align-self:end;padding-bottom:6px;padding-top:0}.v-btn--fab.v-size--large .v-icon,.v-btn--icon.v-size--large .v-icon{padding:20px 0 0 10px;height:40px;font-size:40px;color:#fff;width:40px}.fade-enter-active,.fade-leave-active{transition:.5s}.fade-enter,.fade-leave-to{opacity:0;transform:scale(0)}",""]),t.exports=e},77:function(t,e,o){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},n=(o(297),o(86)),l=o(124),c=o.n(l),v=o(396),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{dark:""}},[404===t.error.statusCode?o("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):o("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),o("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;c()(component,{VApp:v.a})}},[[274,17,1,18]]]);