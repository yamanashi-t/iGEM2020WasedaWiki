(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{411:function(e,t,n){var content=n(421);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("3a1dc722",content,!0,{sourceMap:!1})},420:function(e,t,n){"use strict";var o=n(411);n.n(o).a},421:function(e,t,n){(t=n(17)(!1)).push([e.i,"p[data-v-1da7d73c]{font-size:24px;margin-top:10px}.left_box[data-v-1da7d73c]{padding:0}.sidebar[data-v-1da7d73c]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-1da7d73c]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-1da7d73c]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-1da7d73c],.h1_box_text[data-v-1da7d73c]{padding-bottom:0}.h1_text[data-v-1da7d73c]{font-size:60px}.h1_imbox[data-v-1da7d73c]{display:block;position:relative}.h1_image[data-v-1da7d73c]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-1da7d73c]{font-size:50px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-1da7d73c]{width:100%}.image_top[data-v-1da7d73c]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-1da7d73c]{width:200px;height:200px}.navi_image[data-v-1da7d73c]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-1da7d73c],.navi_text[data-v-1da7d73c]{display:block;width:200px}.navi_text[data-v-1da7d73c]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-1da7d73c]{position:absolute;top:40px;left:20px}#triangle[data-v-1da7d73c],.navi_svg[data-v-1da7d73c]{width:160px;height:160px}#triangle[data-v-1da7d73c]{stroke-dasharray:510.293}.title_text[data-v-1da7d73c]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-1da7d73c]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-1da7d73c]{width:100%;padding:0;margin:0}.last_message[data-v-1da7d73c]{margin:20px 0 200px}.last_message_p[data-v-1da7d73c]{font-size:40px}a[data-v-1da7d73c]:link{text-decoration:none}a[data-v-1da7d73c]:link,a[data-v-1da7d73c]:visited{color:#000}a[data-v-1da7d73c]:hover{color:#ff69b4}a[data-v-1da7d73c]:active{color:#000}",""]),e.exports=t},444:function(e,t,n){"use strict";n.r(t);n(7);var o={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1,!1,!1,!1,!1]}},methods:{pushScrollY:function(e){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var t=0;t<this.check.length;t++)this.scrollY>=this.sectionOffsetTop[t]&&this.scrollY<this.sectionOffsetTop[t+1]&&(this.check[t]=!0);var n=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/n)},pushElementOffsetTop:function(){var e=this;["WetLab","Modeling","NaviVideo","Wiki","HP","NaviOther","NaviLast"].forEach((function(t){var element=document.getElementById(t),n=Math.round(window.scrollY+element.getBoundingClientRect().top);e.sectionOffsetTop.push(n)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(n(420),n(86)),c=n(124),d=n.n(c),l=n(398),v=n(399),_=n(403),h=n(194),w=n.n(h),m=n(126),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[n("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[e.$vuetify.breakpoint.lg||e.$vuetify.breakpoint.xl?n("v-col",{staticClass:"left_box",attrs:{align:"left"}},[n("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[n("v-row",{staticClass:"navi_image"},[n("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[n("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),e._v(" "),n("circle",{style:{"stroke-dashoffset":e.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),e._v(" "),e._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),e._v(" "),n("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),e._v(" "),n("v-row",{staticClass:"navi_text"},[n("a",{attrs:{href:"Attributions#WetLabTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[0]}},[e._v("Wet Lab")])],1),e._v(" "),n("a",{attrs:{href:"Attributions#ModelingTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[1]}},[e._v("Modeling ")])],1),e._v(" "),n("a",{attrs:{href:"Attributions#VideoTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[2]}},[e._v("Video")])],1),e._v(" "),n("a",{attrs:{href:"Attributions#WikiTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[3]}},[e._v("Wiki")])],1),e._v(" "),n("a",{attrs:{href:"Attributions#HPTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[4]}},[e._v("HP")])],1),e._v(" "),n("a",{attrs:{href:"Attributions#OtherTop"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[5]}},[e._v("Other")])],1)])],1)],1):e._e(),e._v(" "),n("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[n("v-row",{attrs:{justify:"center","text-align":"centre"}},[n("v-row",{staticClass:"image_top",attrs:{cols:"12",id:"WetLabTop"}})],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"WetLab"}},[n("v-col",[n("v-row",[n("h2",[e._v("Wet Lab")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Ryota Miyachi ")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student. \n                        He was responsible for Racemase project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takuro Shioi ")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student. \n                        He was responsible for Gene circuit project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takashi Yamanashi")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student. \n                        He was responsible for Gene circuit project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Yuya Otsuki")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student.\n                        He was responsible for Monoterpene project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Kanta Suga")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student.\n                        He was responsible for Gene circuit project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Kae Nakamura")]),n("br"),e._v("\n                        - Electrical Engineering and Bioscience student.\n                        She was responsible for Racemase project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",{attrs:{id:"ModelingTop"}},[n("P",[n("b",[e._v("Saho Fujieda ")]),n("br"),e._v("\n                        - Medical Bioscience student.\n                        She was responsible for Racemase project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Satohiro Takizawa")]),n("br"),e._v("\n                        - Medical Bioscience student. \n                        He was responsible for Racemase project and experimented in Wet Lab.\n                      ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Yuji Kamei")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student. \n                          He was responsible for Monoterpene and Gene circuit project and experimented in Wet Lab.\n                      ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"Modeling"}},[n("v-col",[n("v-row",[n("h2",[e._v("Modeling & Software")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takuro Shioi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He was responsible for Gene circuit project and designed models.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Kanta Suga")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He was responsible for IFFL project and designed models.\n                        ")])],1),e._v(" "),n("v-row",{attrs:{id:"VideoTop"}},[n("P",[n("b",[e._v("Takashi Yamanashi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He developed software tools which are useful for our projects.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Tomohiro Inoue (Special support)")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He helped us developing software tools \n                        ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"NaviVideo"}},[n("v-col",[n("v-row",[n("h2",[e._v("Video")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Kanta Suga")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He made video which explains our projects.\n                        ")])],1),e._v(" "),n("v-row",{attrs:{id:"WikiTop"}},[n("P",[n("b",[e._v("Rei Abe")]),n("br"),e._v("\n                          - Medical Bioscience student.\n                          She made video which explains our projects.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("ASOBIchanson.inc (Special support)")]),n("br"),e._v("\n                          - They helped us making video which explains our projects.\n                        ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"Wiki"}},[n("v-col",[n("v-row",[n("h2",[e._v("Wiki")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takashi Yamanashi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He played a central part in making wiki pages by using software tools.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Rei Abe")]),n("br"),e._v("\n                          - Medical Bioscience student.She designed our wiki pages.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Yuji Kamei")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student. \n                          He thought about the structure of wiki pages.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takuma Kawabata")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He thought about the structure of wiki pages.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Aimi Watanabe ")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student. \n                          She thought about the structure of wiki pages.\n                        ")])],1),e._v(" "),n("v-row",{attrs:{id:"HPTop"}},[n("P",[n("b",[e._v("Yuri Hayashi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                           She thought about the structure of wiki pages.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Everyone ")]),n("br"),e._v("\n                          - All members cooperated with each other and made wiki pages.                          \n                        ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"HP"}},[n("v-col",[n("v-row",[n("h2",[e._v("Human Practice")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Yuya Otsuki")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He was responsible for Education and gave a lecture on Synthetic Biology to high school students.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Satohiro Takizawa")]),n("br"),e._v("\n                          - Medical Bioscience student. \n                          He was responsible for Education.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takashi Yamanashi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He was responsible for Business model and tried to make our projects useful for society.\n                        ")])],1),e._v(" "),n("v-row",{attrs:{id:"OtherTop"}},[n("P",[n("b",[e._v("Saho Fujieda")]),n("br"),e._v("\n                          - Medical Bioscience student.\n                          She was responsible for Business model and tried to make our projects useful for society.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Maximize, Inc. (Special support)")]),n("br"),e._v("\n                          - They taught us how to plan business models and gave advise.\n                        ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"NaviOther"}},[n("v-col",[n("v-row",[n("h2",[e._v("Other")])]),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takashi Yamanashi")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                          He was responsible for Collaborations and Excellence in Another Area.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Yuji Kamei")]),n("br"),e._v("\n                          - Electrical Engineering and Bioscience student.\n                           He came up with application which can connect DNA information and protein.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Rei Abe")]),n("br"),e._v("\n                          - Medical Bioscience student. \n                          She researched about Racemase and gave us helpful information.\n                        ")])],1),e._v(" "),n("v-row",[n("P",[n("b",[e._v("Takaomi Yamada ")]),n("br"),e._v("\n                          - Medical Bioscience student. \n                          He researched about Racemase and gave us helpful information.\n                        ")])],1)],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"NaviLast"}},[n("v-col",[n("v-row",{staticClass:"last_message"},[n("P",{staticClass:"last_message_p"},[n("b",[e._v("\n                            We appreciate all the person for helping our projects !")]),n("br")])],1)],1)],1)],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center",align:"center"}})],1)],1)}),[],!1,null,"1da7d73c",null);t.default=component.exports;d()(component,{VCol:l.a,VContainer:v.a,VRow:_.a}),w()(component,{Scroll:m.b})}}]);