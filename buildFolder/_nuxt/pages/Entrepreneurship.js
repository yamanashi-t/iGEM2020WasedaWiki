(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{413:function(t,e,o){var content=o(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("467ee8e4",content,!0,{sourceMap:!1})},442:function(t,e,o){"use strict";var l=o(413);o.n(l).a},443:function(t,e,o){(e=o(17)(!1)).push([t.i,"p[data-v-6ad0175c]{font-size:24px}.left_box[data-v-6ad0175c]{padding:0}.sidebar[data-v-6ad0175c]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/1/18/T--Waseda--MakiBlack.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-6ad0175c]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-6ad0175c]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-6ad0175c],.h1_box_text[data-v-6ad0175c]{padding-bottom:0}.h1_text[data-v-6ad0175c]{font-size:60px}.h1_imbox[data-v-6ad0175c]{display:block;position:relative}.h1_image[data-v-6ad0175c]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-6ad0175c]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-6ad0175c]{width:100%}.image_top[data-v-6ad0175c]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-6ad0175c]{width:200px;height:200px}.navi_image[data-v-6ad0175c]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-6ad0175c],.navi_text[data-v-6ad0175c]{display:block;width:200px}.navi_text[data-v-6ad0175c]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-6ad0175c]{position:absolute;top:40px;left:20px}#triangle[data-v-6ad0175c],.navi_svg[data-v-6ad0175c]{width:160px;height:160px}#triangle[data-v-6ad0175c]{stroke-dasharray:510.293}.title_text[data-v-6ad0175c]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-6ad0175c]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-6ad0175c]{width:100%;padding:0;margin:0}.last_message[data-v-6ad0175c]{margin-bottom:400px}a[data-v-6ad0175c]:link{text-decoration:none}a[data-v-6ad0175c]:link,a[data-v-6ad0175c]:visited{color:#000}a[data-v-6ad0175c]:hover{color:#ff69b4}a[data-v-6ad0175c]:active{color:#000}",""]),t.exports=e},493:function(t,e,o){"use strict";o.r(e);o(7);var l={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var t=this;["section_01","section_02","section_03","section_04"].forEach((function(e){var element=document.getElementById(e),o=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(o(442),o(86)),n=o(124),c=o.n(n),d=o(396),v=o(397),m=o(401),_=o(189),h=o.n(_),f=o(125),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),o("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),o("v-row",{staticClass:"navi_text"})],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text"},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Entrepreneurship")])])],1)],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"OverviewTop"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("What is business model?")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[t._v("\n                          In order to implement our project in the real world, we've been working on the business model from early on.                            \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          To learn the basics of business model, we first went to interview Mr. Watanabe, a representative director of Maximize, inc. and is an expert in business model creation., Through the interview with him, we learned the basics of business model creation. The critical elements of a business model are 4 points: The What, Why, How and Who (Fig 6-5-1).                            \n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c7/T--Waseda--InpriFig1.png",alt:"Fig 6-5-1 The 4 important point of business model"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig 6-5-1 The 4 important point of business model")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[t._v("\n                          Like planning for a scientific research, business model creation should learn from previous success. From Mr. Watanabe’s point of view, a business have a higher probability of success when two of the four points are modified from the existing successful business. This is called a business model innovation.                            \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          After the interview regarding the basics of business model creation, we brainstormed on new business models derived from our cell-free based iGEM project and designed several business models. To brush up the models, we applied the four points of a business model.                            \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                          We decided creating monoterpenes on a large scale and using them as insect repellents as our best business model. Monoterpenes are toxic in the cell and are difficult to synthesize on a large scale. However, a cell-free system allows mass synthesis of monoterpenes, hence,                            \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"",alt:"Logo"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"})])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("h3"),t._v(" "),o("p",{staticClass:"p_indent"}),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"",alt:"Logo"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"})])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("h3"),t._v(" "),o("p",{staticClass:"p_indent"}),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"",alt:"Logo"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"})])]),t._v(" "),o("v-row",[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("Overview")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("h3"),t._v(" "),o("p",{staticClass:"p_indent"}),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"",alt:"Logo"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"})])]),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_01"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_04"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"6ad0175c",null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:v.a,VRow:m.a}),h()(component,{Scroll:f.b})}}]);