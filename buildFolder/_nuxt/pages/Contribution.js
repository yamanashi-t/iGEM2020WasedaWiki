(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{409:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("1acfe872",content,!0,{sourceMap:!1})},442:function(t,e,n){"use strict";var o=n(409);n.n(o).a},443:function(t,e,n){(e=n(17)(!1)).push([t.i,"p[data-v-168662b2]{font-size:24px}.left_box[data-v-168662b2]{padding:0}.sidebar[data-v-168662b2]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/4/4e/T--Waseda--MakiRed.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-168662b2]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-168662b2]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-168662b2],.h1_box_text[data-v-168662b2]{padding-bottom:0}.h1_text[data-v-168662b2]{font-size:60px}.h1_imbox[data-v-168662b2]{display:block;position:relative}.h1_image[data-v-168662b2]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-168662b2]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-168662b2]{width:100%}.image_top[data-v-168662b2]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-168662b2]{width:200px;height:200px}.navi_image[data-v-168662b2]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-168662b2],.navi_text[data-v-168662b2]{display:block;width:200px}.navi_text[data-v-168662b2]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-168662b2]{position:absolute;top:35px;left:15px;width:170px;height:170px}#triangle[data-v-168662b2]{width:160px;height:160px;stroke-dasharray:510.293}.title_text[data-v-168662b2]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-168662b2]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-168662b2]{width:100%;padding:0;margin:0}.last_message[data-v-168662b2]{margin-bottom:400px}",""]),t.exports=e},513:function(t,e,n){"use strict";n.r(e);n(7);var o="iGEM2020 Team Waseda'sContributionpage",r={head:{title:"Contribution",meta:[{hid:"description",name:"description",content:o},{hid:"og:title",property:"og:title",content:o},{hid:"og:description",property:"og:description",content:o},{hid:"og:url",property:"og:url",content:"https://2020.igem.org/Team:Waseda/Contribution"}]},data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var n=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/n)},pushElementOffsetTop:function(){var t=this;["section_01","section_02","section_03"].forEach((function(e){var element=document.getElementById(e),n=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(n)}))}},mounted:function(){this.pushElementOffsetTop()}},l=(n(442),n(86)),c=n(187),d=n.n(c),h=n(392),m=n(400),v=n(396),_=n(188),f=n.n(_),x=n(124),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[n("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?n("v-col",{staticClass:"left_box",attrs:{align:"left"}},[n("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[n("v-row",{staticClass:"navi_image"},[n("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[n("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),n("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#F4CCCB","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),n("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/2/2f/T--Waseda--iGEM2020wikiicons-award.svg"}})]),t._v(" "),n("v-row",{staticClass:"navi_text"})],1)],1):t._e(),t._v(" "),n("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[n("v-row",{attrs:{justify:"center","text-align":"left"}},[n("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[n("v-col",{staticClass:"h1_box_text"},[n("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Contribution")])])],1)],1),t._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_01"}},[n("v-row",{staticClass:"row_max-box"},[n("h2",{staticClass:"h2_text"})])],1),t._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",{staticClass:"row_max-box",attrs:{cols:"12"}},[n("h3"),t._v(" "),n("p",[n("b",[t._v("\n                              Add new documentation to an existing Part on that Part's Registry page:\n                          ")])]),t._v(" "),n("p",{staticClass:"p_indent"},[n("a",{staticClass:"link_style",attrs:{href:"http://parts.igem.org/Part:BBa_K1529321"}},[t._v("BBa_K1529321")]),t._v(" (PrhlRR-GFP) and \n                              by improving plux/tet-GFP "),n("a",{staticClass:"link_style",attrs:{href:"http://parts.igem.org/Part:BBa_K1529311"}},[t._v("BBa_K1529311")]),t._v(" (PluxLR-GFP) has been analyzed in vivo activity. Here, we added new data obtained by cell-free protein synthesis.\n                          ")]),t._v(" "),n("p",{staticClass:"p_indent"},[t._v(" \n                              For the crosstalk experiments, we constructed two kinds of cell-free translation systems containing substantial amount of R proteins (luxR,rhlR). In those systems, we put signaling molecules (3OHSL-C4 or 3OHSL-C6) and target genes (plux/tet-GFP or prhl-RR-GFP), respectively. We measured the fluorescence of GFP expressed from plux/tet-GFP and prhl(RR)-GFP on a RT-qPCR machine.\n                          ")]),t._v(" "),n("p",{staticClass:"p_indent"},[t._v(" \n                              Fig 1 shows the result of the crosstalk test in a cell-free system containing sufficient amount of LuxR protein.   In the results, non-cognate Prhl(RR) promoter was highly activated by luxR-3OC6HSL complex as well as the cognate Plux/tet promoter.\n                              Fig 2 shows the result of the crosstalk test in a cell-free system containing sufficient amount of RhlR protein.\n\n                          ")]),t._v(" "),n("p",{staticClass:"p_indent"},[n("br")]),t._v(" "),n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/9/98/T--Waseda--crosstalk_luxR.png",alt:"Fig1 Prhl(RR)-GFP assay in a cell-free system containing LuxR"}}),t._v(" "),n("figcaption",{staticClass:"fig_title"},[t._v("Fig1 Prhl(RR)-GFP assay in a cell-free system containing LuxR")])]),t._v(" "),n("p",{staticClass:"p_indent"},[n("br")]),t._v(" "),n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/e/ec/T--Waseda--crosstalk_rhlR.png",alt:"Fig2 Prhl(RR)-GFP assay in a cell-free system containing rhlR"}}),t._v(" "),n("figcaption",{staticClass:"fig_title"},[t._v("Fig2 Prhl(RR)-GFP assay in a cell-free system containing rhlR")])]),t._v(" "),n("p",{staticClass:"p_indent"},[n("br")]),t._v(" "),n("p",[n("b",[t._v(" \n                              We have also described monotelpensynthesis by using either \n                              "),n("a",{staticClass:"link_style",attrs:{href:"http://parts.igem.org/Part:BBa_K3580101"}},[t._v("BBa_K3580101")]),t._v(" (improved part) or \n                              "),n("a",{staticClass:"link_style",attrs:{href:"http://parts.igem.org/Part:BBa_K3580102"}},[t._v("BBa_K3580102")]),t._v(" (new part). \n                          ")])]),t._v(" "),n("p",{staticClass:"p_indent"},[n("br")]),t._v(" "),n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png",alt:"Fig. 2-2-2 GC / MS analysis results of limonene synthesis system"}}),t._v(" "),n("figcaption",{staticClass:"fig_title"},[t._v("Fig. 2-2-2 GC / MS analysis results of limonene synthesis system")])]),t._v(" "),n("p",{staticClass:"p_indent"},[n("br")]),t._v(" "),n("p",{staticClass:"p_indent"},[t._v(" \n                              We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.   By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values.  At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions (The upper right figure of Figure. 2-2-2).  We also draw a GC chart by summation of the signals from the selected ions (The lower left figure of Figure. 2-2-2).  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis.\n                          \n                          ")])])],1),t._v(" "),n("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[n("v-col",{staticClass:"last_message"})],1),t._v(" "),n("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[n("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"168662b2",null);e.default=component.exports;d()(component,{VCol:h.a,VContainer:m.a,VRow:v.a}),f()(component,{Scroll:x.b})}}]);