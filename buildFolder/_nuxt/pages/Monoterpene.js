(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{421:function(e,t,n){var content=n(458);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("1933d971",content,!0,{sourceMap:!1})},457:function(e,t,n){"use strict";var o=n(421);n.n(o).a},458:function(e,t,n){(t=n(17)(!1)).push([e.i,"p[data-v-779e48f2]{font-size:24px}.left_box[data-v-779e48f2]{padding:0}.sidebar[data-v-779e48f2]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-779e48f2]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-779e48f2]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-779e48f2],.h1_box_text[data-v-779e48f2]{padding-bottom:0}.h1_text[data-v-779e48f2]{font-size:60px}.h1_imbox[data-v-779e48f2]{display:block;position:relative}.h1_image[data-v-779e48f2]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-779e48f2]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-779e48f2]{width:100%}.image_top[data-v-779e48f2]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-779e48f2]{width:200px;height:200px}.navi_image[data-v-779e48f2]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-779e48f2],.navi_text[data-v-779e48f2]{display:block;width:200px}.navi_text[data-v-779e48f2]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-779e48f2]{position:absolute;top:40px;left:20px}#triangle[data-v-779e48f2],.navi_svg[data-v-779e48f2]{width:160px;height:160px}#triangle[data-v-779e48f2]{stroke-dasharray:510.293}.title_text[data-v-779e48f2]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-779e48f2]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-779e48f2]{width:100%;padding:0;margin:0}.last_message[data-v-779e48f2]{margin-bottom:400px}a[data-v-779e48f2]:link{text-decoration:none}a[data-v-779e48f2]:link,a[data-v-779e48f2]:visited{color:#000}a[data-v-779e48f2]:hover{color:#ff69b4}a[data-v-779e48f2]:active{color:#000}",""]),e.exports=t},506:function(e,t,n){"use strict";n.r(t);n(7);var o={data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1,!1]}},methods:{pushScrollY:function(e){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var t=0;t<this.check.length;t++)this.scrollY>=this.sectionOffsetTop[t]&&this.scrollY<this.sectionOffsetTop[t+1]&&(this.check[t]=!0);var n=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/n)},pushElementOffsetTop:function(){var e=this;["section_01","section_02","section_03","section_04"].forEach((function(t){var element=document.getElementById(t),n=Math.round(window.scrollY+element.getBoundingClientRect().top);e.sectionOffsetTop.push(n)}))}},mounted:function(){this.pushElementOffsetTop()}},r=(n(457),n(86)),l=n(124),c=n.n(l),d=n(396),m=n(397),h=n(401),f=n(189),_=n.n(f),v=n(125),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[n("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[n("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[e.$vuetify.breakpoint.lg||e.$vuetify.breakpoint.xl?n("v-col",{staticClass:"left_box",attrs:{align:"left"}},[n("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[n("v-row",{staticClass:"navi_image"},[n("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[n("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),e._v(" "),n("circle",{style:{"stroke-dashoffset":e.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),e._v(" "),e._v("\n                                \n                                Sorry, your browser does not support inline SVG. \n                              ")]),e._v(" "),n("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),e._v(" "),n("v-row",{staticClass:"navi_text"},[n("a",{attrs:{href:"Monoterpene#setction_01"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[0]}},[e._v("GC/MS analysis")])],1),e._v(" "),n("a",{attrs:{href:"Monoterpene#setction_02"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[1]}},[e._v("In vivo monoterpene synthesis ")])],1),e._v(" "),n("a",{attrs:{href:"Monoterpene#setction_03"}},[n("v-row",{class:{title_text:!0,title_text_active:e.check[2]}},[e._v("Cell-free monoterpene synthesis")])],1)])],1)],1):e._e(),e._v(" "),n("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[n("v-row",{attrs:{justify:"center","text-align":"left"}},[n("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[n("v-col",{staticClass:"h1_box_text"},[n("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[e._v("Monoterpene.")])])],1)],1),e._v(" "),n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}]},[n("v-row",{staticClass:"row_max-box"},[n("h2",{staticClass:"h2_text"},[e._v("3-3-1. GC/MS analysis")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",{attrs:{id:"section_01"}},[n("h3",[e._v("3-3-1-1 Introduction")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("     \n                              First, we confirmed that GC/MS could detect each monoterpene and confirmed the retention time and mass spectrum of each monoterpene.                       \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Materials and Methods")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("     \n                              300 µl dodecane (Nacalai tesque) containing limonene (Wako) or sabinene (Sigma) and 700 µl ethyl acetate (Nacalai tesque) were mixed and analyzed by GC/MS.  The concentration of monoterpenes contained in dodecane was adjusted to a final concentration of 100 µl when mixed with ethyl acetate.  Also, the peak area of each monoterpene measured here was used to quantify monoterpenes in later experiments. GC/MS analysis was performed on an Agilent 7890B GC with Agilent 5977B MS using a constant flow rate of 1.2 ml/min of helium carrier gas and using HP-5MS (30 m, 0.25 mm, 0.25 µm) column.  The inlet temperature was 300 ℃ and initial column temperature was 40 ℃ for 1 min.  The column was then heated to 300 ℃ at a rate of 15 ℃/min and held at 300 ℃ for 2 min.  The Injection volume was 1 µl with the split ratio 10:1.  In this experiment, SIM mode was used for the analysis.  Ions with four m/z values characteristic of limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed to confirm the presence of monoterpenes.  And for quantitative analysis, 93 m/z was used in each monoterpene analyzes.  These m/z values were selected by referring to the mass spectrum of each monoterpene present in NIST Standard Reference database.  The above GC/MS analysis method was also used in the subsequent analysis of in vivo monoterpene synthesis and cell-free monoterpene synthesis.                         \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Result")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("  \n                              The retention time for the peak of each monoterpene was observed was confirmed by comparing with a monoterpene-free solvent.  In this analysis method, the retention time for the peak of limonene was 8.07 min, and the retention time for the peak of sabinene was 8.45 min (Figure 3-3-1-1)                          \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/d/dd/T--Waseda--monoterpene_3-3-1-1_Major_peak_for_standard_products_of_each_monoterpene.png",alt:"Fig. 3-3-1-1 Major peak for standard products of each monoterpene"}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-1-1 Major peak for standard products of each monoterpene")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("  \n                              In addition, during the retention time when the peak of each monoterpene standard appeared, ions with the m/ z value selected to confirm the presence of each monoterpene were detected.  We were also able to observe the peak of the standard product for the 93 m/z ion used to detect the monoterpene (Figure. 3-3-1-2).                           \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/d/da/T--Waseda--monoterpene_3-3-1-2_93_mz_ion_peak_for_standard_product_of_each_monoterpene.png",alt:"Fig. 3-3-1-2 93 m/z ion peak for standard product of each monoterpene"}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-1-2 93 m/z ion peak for standard product of each monoterpene")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("  \n                              Therefore, in the subsequent experiments, we decided to confirm each monoterpene at the retention time of each monoterpene confirmed here.  And we decided to quantify each monoterpene using a peak of 93 m/z.                            \n                          ")])])],1),e._v(" "),n("v-row",[n("v-row",{staticClass:"row_max-box"},[n("h2",{staticClass:"h2_text"},[e._v("3-3-2. In vivo monoterpene synthesis")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_02"}},[n("v-col",[n("h3",[e._v("Introduction")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/c/c6/T--Waseda--monoterpene_3-3-2-1_Schematic_of_in_vivo_limonene_synthesis.png",alt:"Fig. 3-3-2-1 Schematic of <i>in vivo</i> monoterpene synthesis"}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-2-1 Schematic of "),n("i",[e._v("in vivo")]),e._v(" monoterpene synthesis")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("   \n                              Before monoterpene synthesis with cell-free system, we confirmed activity of the genes by monoterpene production with "),n("i",[e._v("E.coli")]),e._v("  In this experiment, DH5-alpha transformed with a plasmid encoding enzymes of the mevalonate pathway (pBbA5c-MevT-MBI from addgene) and a plasmid encoding GPP synthetase and monoterpene synthase (BBa_K3580101 / BBa_K3580102) were used.                         \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Materials and Methods")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("    \n                              H5-alpha transformed with pBbA5c-MevT-MBI and BBa_K3580101 / BBa_K3580102 were used in this experiment.  DH5-alpha was selected as the strain used because it was based on the strain used in the 2019 XJTU-CHINA team's limonene production project.  And DH5-alpha transformed with only pBbA5c-MevT-MBI was used as negative control.  Strains of transformed DH5-alpha were grown in 2xYT media (16 g/L tryptone, 10 g/L yeast extract, 7 g/L NaCl.  These components were purchased from Nakalai tesque) containing 25 ng/µl (Nakalai tesque) of chloramphenicol and 1 % in mass percent concentration of glucose (Wako).                        \n                          ")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("  \n                              After culturing overnight (37℃, 180 rpm, 14 h) on 3 ml scales, 500 µM IPTG (Nacalai tesque) to induce expression and 500 µl dodecane overlay to capture monoterpene were added when OD600 exceeded 1.5.  After induction by IPTG, strains were continuously cultured at 30 ℃ and 200 rpm for 2 days (48 h). After 2 days of culture, 300 µl dodecane overlays were collected, mixed with 700 µl ethyl acetate and analyzed by GC/MS.  The GC / MS methods used were as described in 3-3-1.                            \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Results")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("  \n                              From GC/MS analysis, we confirmed limonene from the introduced pathway.  Ions with two characteristic m/z values (68, 93) in limonene were detected in the limonene synthesis system using BBa_K3580101.  Also, GC chromatogram of the ion having 93 m/z from the complete limonene pathway shows a peak higher than that from a negative control (Figure. 3-3-2-2). Therefore, the yield of synthesized limonene per culture solution was calculated to be 0.161 µM.                          \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/5/5f/T--Waseda--monoterpene_3-3-2-2_GCMS_analysis_results_of_in_vivo_limonene_synthesis_system.png",alt:"Fig. 3-3-2-2 GC/MS analysis results of <i>in vivo</i> limonene synthesis system "}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-2-2 GC/MS analysis results of "),n("i",[e._v("in vivo")]),e._v(" limonene synthesis system ")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v(" \n                              On the other hand, in the sabinene synthesis system in which BBa_K3580101 was introduced, there was no  difference from the negative control in the detection result of the ion having 93 m/z, which is the most characteristic in sabinene.  It is thought that this is because the retention time overlapped with some substance with ion close to 93 m/z.  For this reason, we thought it difficult to detect sabinene in the in vivo system used this time.                          \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/6/6f/T--Waseda--monoterpene_3-3-2-3_Analysis_results_by_GCMS_of_ions_with_93_mz_for_in_vivo_sabinene_synthesis_system.png",alt:"Fig. 3-3-2-3 Analysis results by GC/MS of ions with 93 m/z for <i>in vivo</i> sabinene synthesis system"}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-2-3 Analysis results by GC/MS of ions with 93 m/z for "),n("i",[e._v("in vivo")]),e._v(" sabinene synthesis system")])])]),e._v(" "),n("v-row",[n("v-row",{staticClass:"row_max-box"},[n("h2",{staticClass:"h2_text"},[e._v("3-3-3 Cell-free monoterpene synthesis")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7",id:"section_03"}},[n("v-col",[n("h3",[e._v("Introduction")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/b/b3/T--Waseda--monoterpene_2-2-1_Parts_and_metabolic_pathways_in_this_experiment_and_a_schematic_diagram_of_the_experiment.png ",alt:"Fig. 3-3-3-1 Parts and metabolic pathways in this experiment and a schematic diagram of the experiment "}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-3-1 Parts and metabolic pathways in this experiment and a schematic diagram of the experiment ")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v(" \n                              As a preparatory step to implement a zombie and samurai scent-based discrimination system that operates in a cell-free system, we attempted to synthesize limonene and sabinene in a cell-free system.  In this cell-free monoterpene synthesis, we mixed two E. coli extracts each of which has either first 7 or last 2 enzymes of a pathway from Ac-CoA, which is a major intermediate of cell central metabolism.  Through mevalonate pathway, the former extract one (derived from E. coli into which pBbA5c-MevT-MBI has been introduced) can provide IPP and DMAPP, which can also be used as intermediates for other important biosynthesis.  Here we indeed supplemented only glucose and acetate as carbon sources.                             \n                          ")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("  \n                              We obtained expression system for those seven genes from addgene and have converted this into Biobrick RFC 1000 format by synonymous replacement (BBa_K3580103).  In order to take advantage of an engineering principle of synthetic biology we provided two biobrick parts (BBa_K3580101, BBa_K3580102) for the source for the latter extract.  BBa_K3580101 has GPP synthase (GPPS) and limonene synthase.  Although GPP synthase is shared with BBa_K3580101, BBa_K3580102 has sabinene synthase, which has one point mutation in limonenesynthase (Srividya Narayanan et al 2015) and a new coding sequence for Parts registry of iGEM (See here for more details on this experiments).                             \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Materials and Methods")]),e._v(" "),n("p",[e._v("   \n                              Cell growth and extract preparation                         \n                          ")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v("  \n                              Transformed DH5-α strains were grown in 2xYT medium containing 25 ng/µl chloramphenicol and 1% glucose concentration. This is the same as in vivo monoterpene synthesis.  After culturing overnight (37℃, 180 rpm, 14 h) on 6 ml scales, 6 ml culture were added to 100 ml 2xYT medium containing 25 ng / µl chloramphenicol and 1% glucose concentration. Then, the culture was continued at 37 ℃ and 250 rpm, and when OD600 exceeded 0.6, 500 µM IPTG and 500 µL dodecane overlay were added.  After that, the strains into which BBa_K3580102 (Ptrc-trGPPS-SS) or pBbA5c-MevT-MBI was introduced were continuously cultured for 30℃, 250rpm, 22 h, and the strains into which BBa_K3580101 (Ptrc-trGPPS-LS) was introduced were continuously cultured for 30℃, 250rpm, 22 h, 6 h.  After culturing, a cell extract was prepared according to step 3 and subsequent steps of the extract preparation protocol. ( "),n("nuxt-link",{attrs:{to:"Protocol"}},[e._v("Here")]),e._v(" ) However, the Buffer E used did not contain dithiothreitol.                          \n                          ")],1)])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",[e._v("Preparation of reaction solution for monoterpene synthesis and reaction conditions")]),e._v(" "),n("p",{staticClass:"p_indent"},[e._v(" \n                              The preparation of the reaction solution for monoterpene synthesis is based on a recent paper from Jwett lab (Dudly et al 2019).  100 µl fraction of the mixed extract and 100 µl fraction of the solution containing the substrate etc. were mixed to prepare the 200 µl reaction solution.  The reaction contains 200 mM glucose, 8 mM magnesium acetate (Nakalai tesque), 10 mM ammonium acetate (Nakalai tesque), 134 mM potassium acetate (Nakalai tesque), 100 mM Bis Tris buffer (Bis Tris was purchased from Sigma, hydrochloric acid was purchased from Nakalai tesque), 10 mM potassium phosphate (Nakalai tesque), and the enzymes contained in the extract. The ratio of enzymes contained in the reaction solution could be adjusted by changing the mixing ratio of the extracts.  200 µl dodecane overlay was added to the prepared reaction solutions, and the reaction solutions were incubated at 30 ℃ for 2 days.  After two days reaction, 150 µl dodecane overlay was collected, mixed with 150 µl dodecane and 700 µl ethyl acetate, and then analyzed by GC/MS.  The GC / MS methods used were as described in 3-3-1.                           \n                          ")]),e._v(" "),n("p",{staticClass:"p_indent"})])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Results and Discussion")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/f/f7/T--Waseda--monoterpene_2-2-2_GCMS_analysis_results_of_limonene_synthesis_system.png ",alt:"Fig. 3-3-3-2 GC / MS analysis results of limonene synthesis system "}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-3-2 GC / MS analysis results of limonene synthesis system ")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("   \n                              We confirmed limonene synthesis GC/MS analysis with SIM.  In this SIM analysis, ions with four m/z values  characteristic in limonene (68 and 93) and sabinene (77 and 91, 93) were analyzed.   By using authentic limonene standard, we confirmed a retention time for GC and the characteristic limonene SIM signal at the specific m/z values.  At the same retention time with the standard, limonene-specific m/z value (68, 93) ions were detected in the selected ions (The upper right figure of Figure. 3-3-3-2).  We also draw a GC chart by summation of the signals from the selected ions (The lower left figure of Figure. 3-3-3-2).  By comparison with a negative control experiment which we omitted the extract containing GPP synthase and limonene synthase, we found clear peak from our limonene synthesis.                            \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("   \n                              By similar GC/MS analysis with SIM, we confirmed the world's first report of sabinene synthesis using cell extracts.  Although elaborative reconstituted system by mixing of purified enzymes has been reported (Srividya Narayanan et al 2015), (Korman Tyler P et al 2017).  Extract-base system with not only simple but engineering principle must provide much contribution to iGEM and DIY biology which as large number of players. Furthermore, extract systems do not require expensive coenzymes (Dudly et al 2019). As well as limonene detection in Fig 3-3-3-2, we firstly confirmed sabinene retention time and SIM signal at the m/z values (77, 91, and 93).  From our cell-free production, we then detected sabinene SIM signal and chromatogram peak which cannot find from the negative control.  Also, from the system containing sabinene synthase and GPP synthase, a peak with the same retention time as the standard limonene product and ions with m/z values characteristic in limonene at that retention time were detected.  This was consistent with the fact that the paper that referred to the sabinene synthase used in this experiment also reported the synthesis of limonene as a by-product (Srividya Narayanan. et al 2015).                            \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/d/dd/T--Waseda--monoterpene_3-3-3-4_Unknown_by-product_of_cell-free_sabinene_synthesis.png",alt:"Fig. 3-3-3-4 Unknown by-product of cell-free sabinene synthesis"}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig. 3-3-3-4 Unknown by-product of cell-free sabinene synthesis")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("    \n                              On the other hand, in the sabinene synthesis system using the extract, a large peak of an unknown substance with a mass spectrum similar to that of sabinene but with a different retention time was detected.   Therefore, we used the scan mode to obtain the Mass spectrum of this unknown substance and estimated what kind of substance was detected (Figure. 3-3-3-4).  This by-product was not detected in the "),n("i",[e._v("in vivo")]),e._v(" system.  By-products other than limonene expected from the report in the paper that referred to the sequence of this part (Srividya Narayanan et al 2015) include alpha-pinene and beta-pinene, but the characteristic peaks of m/z values　(43, 77, 93) did not perfectly match when compared to the data in the NIST database. This by-product needs to be identified by obtaining a standard of the candidate substance and comparing it with its retention time.                          \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("figure",{staticClass:"fig_full_width"},[n("img",{staticClass:"image_max",attrs:{src:"https://2020.igem.org/wiki/images/f/fa/T--Waseda--monoterpene_2-2-4_Yields_of_monoterpene_per_reaction_solution_in_this_experiment_.png ",alt:"Fig.3-3-3-5 Yields of monoterpene per reaction solution in this experiment "}}),e._v(" "),n("figcaption",{staticClass:"fig_title"},[e._v("Fig.3-3-3-5 Yields of monoterpene per reaction solution in this experiment ")])])]),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("p",{staticClass:"p_indent"},[e._v("   \n                              Finally, each of monoterpenes were quantified based on peaks of substance having 93 m/z and each monoterpene standard curves.  Taking advantage of the modularity of the combination of extracts, we confirmed whether the yield of monoterpenes could be changed by changing the mixing ratio of the extract containing the enzyme of the mevalonate pathway and the extract containing GPP synthase and monoterpene synthase.  As a result, changes in the yield of monoterpenes due to the mixing ratio of the extracts were observed (Figure. 3-3-3-5).  The best yield of limonene per reaction solution with limonene synthase contained system was 0.73 µM, and the best yield of sabinene per reaction solution with sabinene synthase contained system was 4.60 µM.  From the relationship between the mixing ratio of the extracts and the yield of sabinene, the optimum mixing ratio of the extract containing the mevalonate pathway enzyme and the extract containing GPP synthase + sabinene synthase considered to exist between 5: 5 and 2: 8.  It was also considered that the yields of the limonene synthesis system were lower than the yields of the sabinene synthesis system because the amount of GPP synthase and limonene synthase expression were small because the culture time after induction of expression was short.  Therefore, increasing the mixing ratio of the extract containing GPP synthase and limonene synthase, or increasing the culture time after expression induction during the preparation of the extract, is expected to increase the yield of limonene.                           \n                          ")])])],1),e._v(" "),n("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[n("v-col",[n("h3",[e._v("Reference")]),e._v(" "),n("p",[e._v("\n                            (1) Alonso-Gutierrez, J. et al. (2013). Metabolic engineering of Escherichia coli for limonene and perillyl alcohol production. Metabolic engineering, 19, 33-41."),n("br"),e._v("\n                            (2) Dudley, Q. M. et al. (2019). Cell-free biosynthesis of limonene using enzyme-enriched Escherichia coli lysates. Synthetic Biology, 4(1), ysz003."),n("br"),e._v("\n                            (3) Srividya, N. et al. (2015). Functional analysis of (4S)-limonene synthase mutants reveals determinants of catalytic outcome in a model monoterpene synthase. Proceedings of the National Academy of Sciences, 112(11), 3332-3337."),n("br"),e._v("\n                            (4) Korman, T. P. et al. (2017). A synthetic biochemistry platform for cell free production of monoterpenes from glucose. Nature communications, 8(1), 1-8."),n("br"),e._v('\n                            (5) Mass Spectrometry Data Center, William E. Wallace, "Mass Spectra" in NIST Chemistry WebBook, NIST Standard Reference Database Number 69, Eds. P.J. Linstrom and W.G. Mallard, National Institute of Standards and Technology, Gaithersburg MD, 20899, https://doi.org/10.18434/T4D303, (retrieved October 22, 2020).'),n("br")])])],1),e._v(" "),n("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_04"}},[n("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"779e48f2",null);t.default=component.exports;c()(component,{VCol:d.a,VContainer:m.a,VRow:h.a}),_()(component,{Scroll:v.b})}}]);