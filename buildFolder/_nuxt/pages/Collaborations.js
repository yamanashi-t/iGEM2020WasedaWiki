(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{408:function(t,e,o){var content=o(435);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(18).default)("4b970b6c",content,!0,{sourceMap:!1})},434:function(t,e,o){"use strict";var r=o(408);o.n(r).a},435:function(t,e,o){(e=o(17)(!1)).push([t.i,".p_indent[data-v-5d6b52e4]{font-size:24px;text-indent:50px}.fig_title[data-v-5d6b52e4]{text-align:center}a[data-v-5d6b52e4]:link{text-decoration:none}a[data-v-5d6b52e4]:link,a[data-v-5d6b52e4]:visited{color:#000}a[data-v-5d6b52e4]:hover{color:#ff69b4}a[data-v-5d6b52e4]:active{color:#000}.link_style[data-v-5d6b52e4]:link{text-decoration:underline}.link_style[data-v-5d6b52e4]:visited{color:#507ea4}.last_message[data-v-5d6b52e4]{margin:400px}.left_box[data-v-5d6b52e4]{padding:0}.sidebar[data-v-5d6b52e4]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-5d6b52e4]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-5d6b52e4]{border-bottom:5px solid #000;padding-bottom:0}.h1_box_text[data-v-5d6b52e4]{padding:0;margin:0}.h1_text[data-v-5d6b52e4]{font-size:60px}.image_max[data-v-5d6b52e4]{width:100%}.navi_icon[data-v-5d6b52e4]{width:200px;height:200px}.navi_image[data-v-5d6b52e4]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-5d6b52e4],.navi_text[data-v-5d6b52e4]{display:block;width:200px}.navi_text[data-v-5d6b52e4]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-5d6b52e4]{position:absolute;top:40px;left:20px}#triangle[data-v-5d6b52e4],.navi_svg[data-v-5d6b52e4]{width:160px;height:160px}#triangle[data-v-5d6b52e4]{stroke-dasharray:510.293}.title_text[data-v-5d6b52e4]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-5d6b52e4]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-5d6b52e4]{width:100%;padding:0;margin:0}",""]),t.exports=e},495:function(t,e,o){"use strict";o.r(e);o(7);var r={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1]}},methods:{pushScrollY:function(t){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var e=0;e<this.check.length;e++)this.scrollY>=this.sectionOffsetTop[e]&&this.scrollY<this.sectionOffsetTop[e+1]&&(this.check[e]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var t=this;["Qdaitop","section_02","section_03","section_06"].forEach((function(e){var element=document.getElementById(e),o=Math.round(window.scrollY+element.getBoundingClientRect().top);t.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},n=(o(434),o(86)),l=o(124),c=o.n(l),d=o(396),h=o(397),v=o(401),m=o(189),_=o.n(m),w=o(125),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[t.$vuetify.breakpoint.lg||t.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),t._v(" "),o("circle",{style:{"stroke-dashoffset":t.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),t._v(" "),t._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),t._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),t._v(" "),o("v-row",{staticClass:"navi_text"},[o("a",{attrs:{href:"Collaborations#Qdai"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[0]}},[t._v("Qai")])],1),t._v(" "),o("a",{attrs:{href:"Collaborations#japansummermeetup"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[1]}},[t._v(" Summer Meetup")])],1),t._v(" "),o("a",{attrs:{href:"Collaborations#japanspringmeetup"}},[o("v-row",{class:{title_text:!0,title_text_active:t.check[2]}},[t._v(" Spring Meetup")])],1)])],1)],1):t._e(),t._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text",attrs:{id:"Qdai"}},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[t._v("Collaborations")])])],1)],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"Qdaitop"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("Qdai")])]),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-col",[o("h3",[t._v("About")]),t._v(" "),o("P",{staticClass:"p_indent"},[t._v("\n                            We collaborated with the Qdai Team about the modeling of the project. \n                            The same style of project modeling could us to easily connect with each other’s projects. \n                            Based on our knowledge, we cooperated with Qdai Team on the modeling of their project.\n                            They gave us deep insight into our models from a wet aspect and could us to create a more powerful model.\n                          ")])],1),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("figure",[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/6/65/T--Waseda--QdaiWasedaLogo.png"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig 7.4  Qdai-Waseda Collabration Logo")])])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box"},[o("h3",[t._v("Why did we decide to do this collaboration?")]),t._v(" "),o("P",{staticClass:"p_indent"},[t._v("\n                          We had much knowledge of modeling of quorum sensing system and creating gene circuits.\n                          However, they lacked knowledge of how to model projects based on wet systems created for real-world problems. \n                          In synthetic biology, modeling is very important for standardization. \n                          A good modeled project is able to be easily connected to other projects.\n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          Our goal was to solve a complex problem, and we needed to be able to connect other projects to our project.\n                          That’s why we decided to work with the Qdai team, who have a deep knowledge of wet lab and a strong focus on real-world problems.\n                        ")])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("v-row",{staticClass:"row_max-box"},[o("v-col",[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/f/f4/T--Waseda--QdaiWasedaAllMember.png"}})]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("h3",[t._v("How did we help each other?")]),t._v(" "),o("P",{staticClass:"p_indent"},[t._v(" \n                            We had a better understanding of each other’s projects through chatting and online meeting.\n                            We learned a detailed understanding of the Qdai Team’s project, “a phosphoric acid storage system”.\n                            Then, we proposed the modeling of the system. We also discussed other collaborate between our projects.\n                            ")])],1)],1)],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{fluid:"","ma-0":"","pa-0":"",id:"japansummermeetup"}},[o("v-col",{staticClass:"row_max-box"},[o("h3",[t._v("What did we learn from this collaboration?")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("\n                            Through this collaboration, we have become very aware of the scalability of our model.\n                            We also learned about the difficulties of applying our model to the project based on wet systems, and the importance of collaboration with other teams. \n                            Connecting our projects with the project based on wet systems for solving real-world problems has a big impact. \n                            The first step in this process, it was very successful to collaborate with the Qdai Team.\n                          ")])])],1)],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("Japan Summer Meetup")])]),t._v(" "),o("v-row",{staticClass:"row_max-box"},[o("v-col",{attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("h3",[t._v("About")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("\n                            We hosted the "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Calendar/Events#Japan_Summer_Meetup"}},[t._v(' "iGEM Japan Summer Meetup"')]),t._v(" online on 29th August. \n \n                            We invited other iGEM teams in Japan (\n                              "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Team:Botchan_Lab_Tokyo/Collaborations"}},[t._v(" Botchan lab")]),t._v(" ,                                \n                              "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Team:Qdai/Collaborations"}},[t._v(" Qdai")]),t._v(",\n                              "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Team:KAIT_Japan/Collaborations"}},[t._v(" KAIT")]),t._v("\n                              \n                              ) to join us and work with them to organize the event.  \n                          ")])]),t._v(" "),o("v-col",{attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"6",xl:"6"}},[o("img",{attrs:{src:"https://2020.igem.org/wiki/images/b/b3/T--Waseda--JapanteamAllLLogo.png"}})])],1),t._v(" "),o("v-row",{staticClass:"row_max-box"},[o("v-col",[o("h3",[t._v("How did we help each other?")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("\n                          This event had three major outcomes. Firstly, the Japanese iGEM team presented their projects for the year and discussed them with each other. We were able to brush up on our projects by supplementing our previous perspectives with perspectives that the teams had not had before.  \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          Secondly, in order to expand the circle of discussion on synthetic biology in Japan, not only the four teams participating in iGEM2020, but also the four teams that will be participating next year (Tokyo University, Gunma University, Gifu University, Kyoto University ) also gave a short presentation (on the prospects for next year's project) and had a discussion with us. We were inspired by the interesting project ideas of the teams that will participate in next year's conference.  \n                        ")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v("  \n                          Finnaly, we invited an expert in entrepreneurship to discuss our projects from an entrepreneurial perspective while learning what it takes to start a business. As a result, we was able to know what kind of things are required in the real-world.                             \n                        ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-col",{staticClass:"row_max-box"},[o("h3",[t._v("What did we learn from this collaboration?")]),t._v(" "),o("p",{staticClass:"p_indent"},[t._v(" \n                            The meetup gave us an opportunity to get to know each other's teams and collaborate with each other. With the participation of so many new iGEMers, we could feel the expansion of the Japanese community.  We hope to continue this great meetup event in the coming year and beyond. \n                          ")])])],1),t._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{fluid:"","ma-0":"","pa-0":""}},[o("figure",{staticClass:"fig_mid_width"},[o("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/2/28/T--Waseda--japansummermeetup.png"}}),t._v(" "),o("figcaption",{staticClass:"fig_title"},[t._v("Fig 7.4　Japan Summer Meetup ")])])])],1),t._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[t._v("Japan Spring Meetup")])]),t._v(" "),o("v-row",{staticClass:"row_max-box"},[o("v-col",[o("h3",[t._v("About")]),t._v(" "),o("P",{staticClass:"p_indent"},[t._v("\n                           We participated in the Japan Spring Meetup hosted by "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Team:Botchan_Lab_Tokyo/Collaborations"}},[t._v(" Team Botchan Lab.!")]),o("br"),t._v("\n                          Good collaboration was born the event and our project was brushed up!　\n                          ")])],1)],1)],1),t._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:t.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_06"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1),t._v(" "),o("v-row",{attrs:{justify:"center",align:"center"}})],1)],1)}),[],!1,null,"5d6b52e4",null);e.default=component.exports;c()(component,{VCol:d.a,VContainer:h.a,VRow:v.a}),_()(component,{Scroll:w.b})}}]);