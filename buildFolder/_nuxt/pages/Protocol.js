(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{425:function(t,e,o){var content=o(467);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("116543da",content,!0,{sourceMap:!1})},466:function(t,e,o){"use strict";var r=o(425);o.n(r).a},467:function(t,e,o){(e=o(17)(!1)).push([t.i,"p[data-v-731e6816]{font-size:24px}.left_box[data-v-731e6816]{padding:0}.sidebar[data-v-731e6816]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-731e6816]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-731e6816]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-731e6816],.h1_box_text[data-v-731e6816]{padding-bottom:0}.h1_text[data-v-731e6816]{font-size:60px}.h1_imbox[data-v-731e6816]{display:block;position:relative}.h1_image[data-v-731e6816]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-731e6816]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-731e6816]{width:100%}.image_top[data-v-731e6816]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-731e6816]{width:200px;height:200px}.navi_image[data-v-731e6816]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-731e6816],.navi_text[data-v-731e6816]{display:block;width:200px}.navi_text[data-v-731e6816]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-731e6816]{position:absolute;top:40px;left:20px}#triangle[data-v-731e6816],.navi_svg[data-v-731e6816]{width:160px;height:160px}#triangle[data-v-731e6816]{stroke-dasharray:510.293}.title_text[data-v-731e6816]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-731e6816]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-731e6816]{width:100%;padding:0;margin:0}.last_message[data-v-731e6816]{margin-bottom:400px}a[data-v-731e6816]:link{text-decoration:none}a[data-v-731e6816]:link,a[data-v-731e6816]:visited{color:#000}a[data-v-731e6816]:hover{color:#ff69b4}a[data-v-731e6816]:active{color:#000}",""]),t.exports=e},513:function(t,e,o){"use strict";o.r(e);o(7);var r={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var t=this;["S12","section_03","section_04"].forEach((function(e){var element=document.getElementById(e),o=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},n=(o(466),o(86)),l=o(124),c=o.n(l),d=o(396),v=o(397),h=o(401),f=o(189),m=o.n(f),x=o(125),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),o("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),o("v-row",{staticClass:"navi_text"},[o("a",{attrs:{href:"Protocol#S12"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[0]}},[t._v("Cell extract(S12)")])],1)])],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text"},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Protocol")])])],1)],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"OverviewTop"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("Cell extract(S12) preparation protocol ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent",attrs:{id:"S12"}},[t._v(" \n                            We based the preparation of E. coli extracts for cell-free reactions on a paper by Jewett [Kwon et.al 2015]. The basic protocol is as follows.                            \n                        ")]),t._v(" "),o("p",[t._v("\n                              1. Cells were cultured in overnight as pre culture. "),o("br"),t._v("\n\n                              2. Diluted overnight cell culture were cultured in fresh medium to OD=3.0 (3~4h) "),o("br"),t._v("\n\n                              3. The cells were harvested by centrifuging(7200x g) and washed with S12 Buffer.  "),o("br"),t._v("\n\n                              4. Cells were sonicated 1 min 50 sec in total( 900 ~ 1200 J) "),o("br"),t._v("\n\n                              5. Lysate were centrifuged. (12000 x g) "),o("br"),t._v("\n\n                              6. The supernatant after centrifugation was frozen at -80°C ( keep -80 C)         "),o("br")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                            S12 Buffer  contained 10 mM Tris-acetate (pH 8.2), 14 mM magnesium acetate, 60 mM potassium glutamate and 2 mM dithiothreitol. \n\n                              We sonicated cells by sonicator (Sonicator 3000,Qsonia) with microtip(microtip4118, Wakenbtech) \n                            ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                                The culture medium and strains used at the time of culture vary from one experiment to another.\n                            ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("h3",[t._v("Reference ")]),t._v(" "),o("p",[t._v("\n                            [Kwon et.al 2015] Kwon, Y., & Jewett, M. C. (2015). High-throughput preparation methods of crude extract for robust cell-free protein synthesis. Scientific Reports, 5(1), 8663. doi:10.1038/srep08663                           \n                        ")])])],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[o("v-col",{staticClass:"last_message"})],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_04"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"731e6816",null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:v.a,VRow:h.a}),m()(component,{Scroll:x.b})}}]);