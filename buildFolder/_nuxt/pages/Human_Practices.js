(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{417:function(e,t,o){var content=o(451);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("35412b61",content,!0,{sourceMap:!1})},450:function(e,t,o){"use strict";var n=o(417);o.n(n).a},451:function(e,t,o){(t=o(17)(!1)).push([e.i,"p[data-v-154c044a]{font-size:24px}.left_box[data-v-154c044a]{padding:0}.sidebar[data-v-154c044a]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/1/18/T--Waseda--MakiBlack.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-154c044a]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-154c044a]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-154c044a],.h1_box_text[data-v-154c044a]{padding-bottom:0}.h1_text[data-v-154c044a]{font-size:60px}.h1_imbox[data-v-154c044a]{display:block;position:relative}.h1_image[data-v-154c044a]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-154c044a]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-154c044a]{width:100%}.image_top[data-v-154c044a]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-154c044a]{width:200px;height:200px}.navi_image[data-v-154c044a]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-154c044a],.navi_text[data-v-154c044a]{display:block;width:200px}.navi_text[data-v-154c044a]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-154c044a]{position:absolute;top:40px;left:20px}#triangle[data-v-154c044a],.navi_svg[data-v-154c044a]{width:160px;height:160px}#triangle[data-v-154c044a]{stroke-dasharray:510.293}.title_text[data-v-154c044a]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-154c044a]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-154c044a]{width:100%;padding:0;margin:0}.last_message[data-v-154c044a]{margin-bottom:400px}a[data-v-154c044a]:link{text-decoration:none}a[data-v-154c044a]:link,a[data-v-154c044a]:visited{color:#000}a[data-v-154c044a]:hover{color:#ff69b4}a[data-v-154c044a]:active{color:#000}",""]),e.exports=t},505:function(e,t,o){"use strict";o.r(t);o(7);var n={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(e){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var t=0;t<this.check.length;t++)this.scrollY>=this.sectionOffsetTop[t]&&this.scrollY<this.sectionOffsetTop[t+1]&&(this.check[t]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var e=this;["Overview","RIKOTEN","section_06"].forEach((function(t){var element=document.getElementById(t),o=Math.round(window.scrollY+element.getBoundingClientRect().top);e.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(o(450),o(86)),l=o(124),c=o.n(l),d=o(396),h=o(397),v=o(401),f=o(189),m=o.n(f),_=o(125),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[e.$vuetify.breakpoint.lg||e.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),e._v(" "),o("circle",{style:{"stroke-dashoffset":e.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),e._v(" "),e._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),e._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),e._v(" "),o("v-row",{staticClass:"navi_text"},[o("a",{attrs:{href:"Human_Practices#Overview"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[0]}},[e._v("Overview")])],1),e._v(" "),o("a",{attrs:{href:"Human_Practices#RIKOTEN"}},[o("v-row",{class:{title_text:!0,title_text_active:e.check[1]}},[e._v("RIKOTEN")])],1)])],1)],1):e._e(),e._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text",attrs:{id:"Overview"}},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[e._v("Human Practices")])])],1)],1),e._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"OverviewTop"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[e._v("Overview")])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("P",{staticClass:"p_indent"},[e._v('\n                          The field "synthetic biology" has various reputations from person to person.  Synthetic biology is a very attractive field for iGEMers, while the general public opinion on genetic engineering using living organisms can be often negative, such as "scary" or "ethical issues\'\'.\n                        ')]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(" \n                          Today, a lot of things related to genetic engineering such as genetically modified crops are surrounding us, but the lack of opportunities to learn about these biotechnologies has led to widespread vague and inaccurate information.                            \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v('       \n                          It is very dangerous from a safety point of view that people evaluate rapidly developing field "synthetic biology" by sentiment without proper knowledge.  We prefer to discuss the attractive point and safety of synthetic biology through dialogue after communicating proper knowledge.                        \n                        ')]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(" \n                          When we started our project, we wanted to make sure that it was something that would be understood by the general public.  In our survey, we found that cell-free protein synthesis and synthetic biology have come to be linked in recent years.  We thought that we could tell biotechnology properly because a project in a cell-free system wouldn't be linked to bioethics.                           \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("     \n                          We conducted further research on this project, which is very attractive to iGEMers.  Then, we decided to summarize our findings and present them.                         \n                        ")])],1)],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_mid_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c2/T--Waseda--rikotenpicture2.png",alt:"Fig. 6.1.1 explanation of the poster"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-1-2 explanation of the poster")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("            \n                           In order to explain the results of the survey to a large number of citizens and engage in dialogues, we exhibited at RIKOTEN, the science festival at Waseda University.                  \n                           At RIKOTEN, we provided a visual and tactile experience of synthetic biology in addition to lectures on the results of our survey.\n                           We did lectures to a total of 272 people and conducted questionnaires before and after the lecture on the cognition of synthetic biology and cell-free system.\n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_mid_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/3/3c/T--Waseda--HPrikotensummary.png",alt:"Fig. 6-1-2 Questionnaire summary "}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-1-2 Questionnaire summary ")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("    \n                          Before the lecture, only 23% of the responders knew synthetic biology, but after the lecture, 93% of them said they came to be interested in it.  As for the cell-free system, 89% of the responders didn't know it before the lecture, but 27% of them understood completely, 64% of them almost understood that we succeeded in getting a total of 91%  to understand it.\n                          After the lecture, those with vague concerns got to have clear opinions compared to before.\n                        \n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("    \n                          Next, based on the evaluations we received from general public, we started basic experiments related to the project.  This year, due to the strong influence of COVID-19, we decided to focus on cell-free projects.                          \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("       \n                          The relevance and scientific value of the project were established through expert opinions and discussions at the Spring Japan Meetup. In addition, the project was designed with the utmost consideration for safety under the supervision of the PI, Professor Daisuke Kiga, who is an expert in synthetic biology.                       \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent",attrs:{id:"RIKOTEN"}},[e._v("\n                          Since the project began, we have continued to connect with the public.\n                          At times, as educators, we have taught high school students what synthetic biology is. (Go to the Education page.)\n                          At other times, as an entrepreneur, I carefully researched and brushed up on real-world problems, discussing them with people and experts in the field who were facing real-world problems. (Go to Entrepreneurship page. )\n                                                    \n                        ")])])],1)],1),e._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"RIKOTENTop"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[e._v("RIKOTEN")])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("About")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("     \n                          RIKOTEN, sponsored by Faculty of Science and Engineering Waseda Univ., is one of the highly regarded school festival in Tokyo.  Actually, RIKOTEN is awarded a 4th prize in “School festival Grand Prix 2019”.  RIKOTEN is a kind of science festival that allow visitors to experience science through hands -on activities, and approximately 20000 people visit every year because of the quality.                        \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"})])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/cb/T--Waseda--rikotenpicture1.png",alt:"Fig. 6-1-1 Image of RIKOTEN 2019"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig 6-2-1 Image of RIKOTEN 2019")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("    \n                          We, iGEM Waseda 2020 team, exhibited in RIKOTEN to promote synthetic biology and check the level of general public awareness of synthetic biology.  Specifically, we did the following.       \n                        ")]),e._v(" "),o("p",[e._v("     \n                          1.\tPosters and explanation about our research "),o("br"),e._v("\n                          2. Synthetic biology explanatory video broadcast "),o("br"),e._v("\n                          3.\tExploring inside cells using VR headset"),o("br"),e._v("\n                          4.\tDisplay of GFP (in tube) created in cell-free system "),o("br"),e._v("\n                          5.\tDisplay of GFP model made with a 3D printer "),o("br"),e._v("\n                          6.\tQuestionnaires about synthetic biology and cell-free system "),o("br")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("1. Posters and explanation about our research")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("   \n                          We explained about what synthetic biology is and what is done in the field, using our research as an example. We received favorable reviews on how we taught each person individually and carefully.                         \n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c2/T--Waseda--rikotenpicture2.png",alt:"Logo"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig. 6-2-2 explanation of the poster")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("2. Synthetic biology explanatory video broadcast")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("     \n                          We showed Synthetic biology explanation video and distributed materials.                        \n                          In that these materials, we worked to properly describe the aspects of expectations and anxieties about synthetic biology.\n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"})])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("3. Exploring inside cells using VR headset")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("                   \n                          Using VR headset, we explored as if we were actually inside the cell.  This innovative experience gave a positive impression to not only those who were familiar with the scheme in the cell but also without background knowledge like children.         \n                        ")]),e._v(" "),o("p",{staticClass:"p_indent"})])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_mid_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/a/ac/T--Waseda--rikotenpicture5.png",alt:"Logo"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig.1.3  exploring inside cells using VR headsst")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("4. Display of GFP (in tube) created in cell-free system")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("  \n                          Proteins made in a cell-free system do not use genetically modified cells and can be use outside of the lab.\n                          Therefore, we created GFP in cell-free and showed the real-protein GFP, then were able to deepen the understanding of the general public,                           \n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("5. Display of GFP model made with a 3D printer")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("                   \n                          We displayed a GFP model made by a 3D printer and coated with fluorescent paint that reacts to a specific wavelength (the fluorescence wavelength of GFP). This GFP model was built from scratch for the exhibition.         \n                          (This work has evolved more, Go to Another Area page)\n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[e._v("6. Questionnaires about synthetic biology and cell-free system")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("                        \n                          We conducted two questionnaires about synthetic biology before and after experiencing our exhibition.  In the questionnaire asked before the exhibition, we asked about their awareness of synthetic biology and cell-free system. The survey results revealed the following.     \n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/ce/T--Waseda--HPQuestionnairea1.png",alt:"Fig 6-2-4 the first questionnaire before lecture"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig 6-2-4 the questionnaire before lecture")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("                              \n                          About 80% of respondents said they had never heard of synthetic biology and about 90% had \n                          never heard of cell-free systems. In other words, these were found to be a quite unrecognized field to the the general public..\n                          In the questionnaire which was asked after our exhibition, we asked about the impression of synthetic biology and understanding of cell-free system. The survey results revealed the following. \n\n                        ")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",{staticClass:"fig_full_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/7/73/T--Waseda--HPQuestionnairea2.png",alt:"Fig 6-2-5 the questionnaire after lecture"}}),e._v(" "),o("figcaption",{staticClass:"fig_title"},[e._v("Fig 6-2-5 the questionnaire after lecture")])])]),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("p",{staticClass:"p_indent"},[e._v("   \n                          The survey results demonstrate that we were successful in attracting people interested in synthetic biology.  As for the cell-free system, 27% of the respondents said they completely understood it, 64% said they almost understood it.  We are able to raise the understanding of cell-free system, a total of 90%.  Spreading the correct knowledge of synthetic biology leads to better understanding and approval by the general public. Therefore, by teaching factual information on synthetic biology, those who visited our exhibition were able to achieve a positive perception of the safety of synthetic biology.                         \n                        ")])])],1)],1),e._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_06"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"154c044a",null);t.default=component.exports;c()(component,{VCol:d.a,VContainer:h.a,VRow:v.a}),m()(component,{Scroll:_.b})}}]);