(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{415:function(t,e,o){var content=o(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("f3319d34",content,!0,{sourceMap:!1})},444:function(t,e,o){"use strict";var n=o(415);o.n(n).a},445:function(t,e,o){(e=o(17)(!1)).push([t.i,"p[data-v-0faa02f1]{font-size:24px}.left_box[data-v-0faa02f1]{padding:0}.sidebar[data-v-0faa02f1]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/1/18/T--Waseda--MakiBlack.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-0faa02f1]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-0faa02f1]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-0faa02f1],.h1_box_text[data-v-0faa02f1]{padding-bottom:0}.h1_text[data-v-0faa02f1]{font-size:60px}.h1_imbox[data-v-0faa02f1]{display:block;position:relative}.h1_image[data-v-0faa02f1]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-0faa02f1]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-0faa02f1]{width:100%}.image_top[data-v-0faa02f1]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-0faa02f1]{width:200px;height:200px}.navi_image[data-v-0faa02f1]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-0faa02f1],.navi_text[data-v-0faa02f1]{display:block;width:200px}.navi_text[data-v-0faa02f1]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-0faa02f1]{position:absolute;top:40px;left:20px}#triangle[data-v-0faa02f1],.navi_svg[data-v-0faa02f1]{width:160px;height:160px}#triangle[data-v-0faa02f1]{stroke-dasharray:510.293}.title_text[data-v-0faa02f1]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-0faa02f1]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-0faa02f1]{width:100%;padding:0;margin:0}.last_message[data-v-0faa02f1]{margin-bottom:400px}a[data-v-0faa02f1]:link{text-decoration:none}a[data-v-0faa02f1]:link,a[data-v-0faa02f1]:visited{color:#000}a[data-v-0faa02f1]:hover{color:#ff69b4}a[data-v-0faa02f1]:active{color:#000}",""]),t.exports=e},489:function(t,e,o){"use strict";o.r(e);o(7);var n={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var t=this;["section_01","section_02","section_03","section_04","section_06"].forEach((function(e){var element=document.getElementById(e),o=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(o(444),o(86)),l=o(124),c=o.n(l),d=o(396),h=o(397),f=o(401),m=o(189),v=o.n(m),_=o(125),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),o("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),o("v-row",{staticClass:"navi_text"},[o("a",{attrs:{href:"Implementation#Intro"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[0]}},[t._v("Intorduction")])],1),t._v(" "),o("a",{attrs:{href:"Implementation#Learn"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[1]}},[t._v("Learn")])],1),t._v(" "),o("a",{attrs:{href:"Implementation#bs"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[2]}},[t._v("Brainstorming")])],1),t._v(" "),o("a",{attrs:{href:"Implementation#Interview"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[3]}},[t._v("Interview")])],1)])],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text",attrs:{id:"Intro"}},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Implementation")])])],1)],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}]},[o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_01"}},[o("v-col",[o("h3",[t._v("Intorduction")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          Scientists in Synthetic biology always need to communicate with society.\n                          We thought about how our project could contribute to society.\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent",attrs:{id:"Learn"}},[t._v(" \n                          First, We interviewed citizens and experts to verify the validity, safety, and ethics of the project. As a results, we confilmed the validity, safety, and ethics of the project. ( Go to Human Practice page)\n                          We decided to create our business model because we were very interested in the social implementation of our project.  It's not a good idea to implement your research project directly into real-world. It's important to adapt the implementation to the real-world needs.\n                           \n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_02"}},[o("v-col",[o("h3",[t._v("Learn business model")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          To learn the basics of business model, first, we went to interview Mr. Watanabe, who is the representative director of Maximize, inc. and is an expert in business model creation, we learned the basics of business model creation from them. The important things of the business model are 4 points: The What, Why, How and Who.\n                          As well as planning for scientific research, business model creation should learn from previous success.  From Mr. Watanabe’s point of view, a business has a higher probability of success when two of a four points are changed from the existing business success. The kind of change is called business model innovation.\n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"bs"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c7/T--Waseda--InpriFig1.png",alt:"Fig. 6-5-1 The important things of the business model are 4 points"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig. 6-5-1 The important things of the business model are 4 points")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_03"}},[o("v-col",[o("h3",[t._v("Brainstorming")]),t._v(" "),o("p",{staticClass:"p_indent"}),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                          After the interview, we brainstormed to create a business model based on “SAMURAI” System (GO to Modelling page)\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                          The smell of monoterpenes has the ability to repellents insects. These are natural and are less likely to cause allergies than currently the non-natural products in use. People living with animals and families with small children have needed our products based on natural products. \n                          \n                          Monoterpene synthesis can take advantage of cell-free system. Monoterpenes are toxic in the cell and difficult to synthesize on a large scale. However, the cell-free system avoids toxicity and allows the mass synthesis of monoterpenes. (Go to monoterpen page)\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(' \n                          These are the "How" and "Who" of the four points of the business model. We have also made strong changes in the "What".\n                          \n                          We would like to use the advantage of the safe biotechnological properties of the cell-free system.\n\n                          We thought about producing the insect repellent of monoterpene in real-time, when we want to use it. The effectiveness of the insect repellent is reduced due to evaporation, using a monoterpene that has already been created. By producing it in real-time, contrary, the effect of the insect repellent could keep constant and for a longer time.\n                          To implement those features, we use the SAMURAI System using the mulit IFFL system.\n                           \n                        ')])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/4/44/T--Waseda--InpriFig2.png",alt:"Fig. 6-5-2 Our business model concept"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Our business model concept")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent",attrs:{id:"Interview"}},[t._v('    \n                          We would like to challenge the already established insect repellent market by updating the "How" and "Who" and "What" of existing better business model.                        \n                        ')])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_04"}},[o("v-col",[o("h3",[t._v("Interview")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("   \n                          　The most important thing about business success is matching the business model you create with the real-world issues.\n                            Many early business models are unsuccessful because they do not match the real-world needs.\n                            In order to improve the business model, it is important to repeat steps to verify the real-world needs and restructure the business model.\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/2/28/T--Waseda--InpriFig3.png",alt:"Fig. 6-5-3 Hypothesis-Verification Step"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig. 6-5-3 Hypothesis-Verification Step")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[t._v("  \n                          We interviewed a wide range of people, including friends around us, business model experts, with allergies, and pet owners who could be customers. \n                          By interviewing many people, we were able to examine the business model from a variety of perspectives.\n                          Then, our business model was more improved while addressing the challenges that emerged from the interview. \n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/8/81/T--Waseda--InpriFig4.png",alt:"Fig. 6-5-4 online interview image"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig. 6-5-4 online interview image")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[t._v(" \n                          Through this verification, we were able to confirm that there is a definite need for our business model. (Fig. 6-5-5 )                                                      \n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/5/5d/T--Waseda--InpriFig5.png",alt:"Fig. 6-5-5 Brushed business model"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig. 6-5-5 Brushed business model")])])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",[o("p",{staticClass:"p_indent"},[t._v("  \n                          But, surprisingly, in those interviews, we found that there was another great need.\n                          People who are concerned about whether or not they contain the substance that causes allergies are careful to determine whether or not they contain the source of their allergies.\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          We got the inspiration for detecting allergens and pivoted to a business model for substance detection using the cell-free system. (Go to integrate)\n                          \n                        ")])])],1)],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_06"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"0faa02f1",null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:h.a,VRow:f.a}),v()(component,{Scroll:_.b})}}]);