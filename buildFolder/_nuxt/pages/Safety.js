(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{429:function(e,t,o){var content=o(481);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(18).default)("39bfc984",content,!0,{sourceMap:!1})},480:function(e,t,o){"use strict";var r=o(429);o.n(r).a},481:function(e,t,o){(t=o(17)(!1)).push([e.i,"p[data-v-21dc3055]{font-size:24px}.left_box[data-v-21dc3055]{padding:0}.sidebar[data-v-21dc3055]{height:100vh;position:fixed;width:17%;background-image:url(https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png);background-size:100% auto;background-repeat:repeat}.main_text[data-v-21dc3055]{padding:40px 10%;background:#fff 0 0 no-repeat padding-box}.h1_box[data-v-21dc3055]{border-bottom:5px solid #000;margin-bottom:10px}.h1_box[data-v-21dc3055],.h1_box_text[data-v-21dc3055]{padding-bottom:0}.h1_text[data-v-21dc3055]{font-size:60px}.h1_imbox[data-v-21dc3055]{display:block;position:relative}.h1_image[data-v-21dc3055]{position:absolute;top:-30px;left:-30px;height:150px}h2[data-v-21dc3055]{font-size:30px;border-bottom:5px solid #000;margin:20px 0}.image_max[data-v-21dc3055]{width:100%}.image_top[data-v-21dc3055]{height:0;padding-top:66%;background-size:contain;background-image:url(https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png)}.navi_icon[data-v-21dc3055]{width:200px;height:200px}.navi_image[data-v-21dc3055]{position:relative;padding-top:20px;margin:0 auto}.navi_image[data-v-21dc3055],.navi_text[data-v-21dc3055]{display:block;width:200px}.navi_text[data-v-21dc3055]{margin:-40px auto 0;padding:60px 0 40px;border-radius:20px;background-color:#fff}.navi_svg[data-v-21dc3055]{position:absolute;top:40px;left:20px}#triangle[data-v-21dc3055],.navi_svg[data-v-21dc3055]{width:160px;height:160px}#triangle[data-v-21dc3055]{stroke-dasharray:510.293}.title_text[data-v-21dc3055]{display:block;margin:10px auto;width:60%;border-radius:10px;background-color:None}.title_text_active[data-v-21dc3055]{background-color:#507ea4;color:#fff;opacity:.5}.row_max-box[data-v-21dc3055]{width:100%;padding:0;margin:0}.last_message[data-v-21dc3055]{margin-bottom:400px}",""]),e.exports=t},532:function(e,t,o){"use strict";o.r(t);o(7);var r="iGEM2020 Team Waseda'sSafety Formpage",n={head:{title:"Safety Form",meta:[{hid:"description",name:"description",content:r},{hid:"og:title",property:"og:title",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:url",property:"og:url",content:"https://2020.igem.org/Team:Waseda/Safety"}]},data:function(){return{fab:!1,scrollY:0,scrollPer:510.293,sectionOffsetTop:[],check:[!1,!1,!1]}},methods:{pushScrollY:function(e){this.scrollY=window.scrollY;for(var i=0;i<this.check.length;i++)this.check[i]=!1;for(var t=0;t<this.check.length;t++)this.scrollY>=this.sectionOffsetTop[t]&&this.scrollY<this.sectionOffsetTop[t+1]&&(this.check[t]=!0);var o=document.documentElement.scrollHeight-document.documentElement.clientHeight;this.scrollPer=510.293*(1-this.scrollY/o)},pushElementOffsetTop:function(){var e=this;["section_01","section_01","section_03"].forEach((function(t){var element=document.getElementById(t),o=Math.round(window.scrollY+element.getBoundingClientRect().top);e.sectionOffsetTop.push(o)}))}},mounted:function(){this.pushElementOffsetTop()}},l=(o(480),o(86)),c=o(187),h=o.n(c),d=o(392),v=o(400),m=o(396),y=o(188),f=o.n(y),_=o(124),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":"","fill-height":""}},[o("v-container",{attrs:{fluid:"","ma-0":"","pa-0":""}},[o("v-row",{attrs:{fluid:"","ma-5":"","pa-5":"","mb-2":"",justify:"center"}},[e.$vuetify.breakpoint.lg||e.$vuetify.breakpoint.xl?o("v-col",{staticClass:"left_box",attrs:{align:"left"}},[o("v-col",{staticClass:"sidebar",attrs:{"ma-0":"","pa-0":""}},[o("v-row",{staticClass:"navi_image"},[o("svg",{staticClass:"navi_icon",attrs:{"z-index":"99"}},[o("circle",{attrs:{fill:"#363636",cx:"100",cy:"100",r:"80",stroke:"#ffffff","stroke-width":"18"}}),e._v(" "),o("circle",{style:{"stroke-dashoffset":e.scrollPer},attrs:{fill:"none",cx:"100",cy:"100",r:"80",stroke:"#008080","stroke-width":"18",id:"triangle",transform:"rotate(270 100 100)"}}),e._v(" "),e._v("\n                              \n                              Sorry, your browser does not support inline SVG. \n                            ")]),e._v(" "),o("img",{staticClass:"navi_svg",attrs:{"z-indx":"10",src:"https://2020.igem.org/wiki/images/6/6a/T--Waseda--iGEMprojectIcon.svg"}})]),e._v(" "),o("v-row",{staticClass:"navi_text"})],1)],1):e._e(),e._v(" "),o("v-col",{staticClass:"main_text",attrs:{cols:"12",lg:"10",xl:"10"}},[o("v-row",{attrs:{justify:"center","text-align":"left"}},[o("v-row",{staticClass:"h1_box",attrs:{cols:"12"}},[o("v-col",{staticClass:"h1_box_text"},[o("h1",{staticClass:"h1_text",attrs:{pushElementOffsetTop:""}},[e._v("Safty")])])],1)],1),e._v(" "),o("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}]},[o("v-row",{staticClass:"row_max-box"},[o("h2",{staticClass:"h2_text"},[e._v("iGEM Waseda Safety Form")])])],1),e._v(" "),o("v-row",{staticClass:"row_max-box",attrs:{cols:"12",sm:"12",xs:"12",md:"12",lg:"7",xl:"7"}},[o("v-col",{staticClass:"row_max-box",attrs:{cols:"12"}},[o("h3",[e._v("Official Safety Form Page")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v(" \n                              You can see the safety form for all teams.\n                              If you want to see a safety form other than the Waseda team, please go to "),o("a",{staticClass:"link_style",attrs:{href:"https://2020.igem.org/Safety/Final_Safety_Form"}},[e._v("Official Page")]),e._v(".\n                          ")]),e._v(" "),o("p",{staticClass:"p_indent"},[e._v("At iGEM 2020, the safety form was submitted through the online form. ")])]),e._v(" "),o("v-col",{staticClass:"row_max-box",attrs:{cols:"12"}},[o("h3",[e._v("Part 1: Overview")]),e._v(" "),o("p",[e._v(" \n                            Q1. Please upload a photo or two of your lab to the iGEM 2020 server (include your team name in the file name), preferably showing the relevant safety features and paste the link here: (Instructions on how to upload an image to our servers can be found "),o("a",{attrs:{href:"https://2020.igem.org/Resources/Wiki_Editing_Help"}},[e._v("here")]),e._v(") \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. https://2020.igem.org/File:T--Waseda--Lab_photo1.jpeg & https://2020.igem.org/File:T--Waseda--Lab_photo2.jpeg\n                          ")]),o("br"),e._v(" "),o("p",[e._v("Q2. Describe the goal of your project: what is your engineered organism supposed to do? Please include specific technical details and names of important parts.\n                              (Even though your project might change, please describe the main project idea you are working on right now. See the example answers for help.)\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. Our project consists three projects: construction of gene circuit, generation of monoterpene, and generation of D-amino acid with racemase in a cell-free system."),o("br"),e._v("\n                              Our bacteria will be engineered to construct plasmids for our project."),o("br"),e._v("\n                              We will use engineered organisms to construct plasmids for the cell-free system and to make the cell extract."),o("br"),e._v("\n                              The gene circuit project will use essential promoters and proteins for quorum sensing associated with the Lux, Las, Rhl, Lac, CI, and AraC systems."),o("br"),e._v("\n                              The monoterpene project will make limonene, pinene, and sabinene from glucose."),o("br"),e._v("\n                              We will use mevalonate pathway and GPPS to synthesize them."),o("br"),e._v("\n                              The racemase project will make alanine racemase to convert L-alanine amino acid to D-alanine amino acid."),o("br")]),o("br"),e._v(" "),o("h3",[e._v("Part 2: Identifying possible risks")]),e._v(" "),o("p",[e._v("\n                              iGEM has developed a Risk Assessment Tool to help you identify possible risks to you, your colleagues, communities, or the environment. We encourage you to use this tool before filling in this part of the form. What are you using / planning to use? Some organisms and parts present risks beyond what is ordinary for lab work in synthetic biology. As your project progresses, you should consider the risks presented by each organism and part you plan to use.    \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q3. Which whole organisms, including viruses and cell lines, are you planning to use or using in your project?\n                              Please provide as much detail as possible (such as strain information). If you are not using an organism, please note this.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. BL21(DE3)Star is used for the cell-free system. DH5alpha and AG1(ME5305) are used for plasmid transformation and Miniprep.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q4. What risks could these organisms pose to you or your colleagues in the laboratory, or to your community or the environment if they escape the lab?\n                              If you are not using an organism, please note this.\n\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. The strains used in this study are said to be unable to live in environments outside the laboratory.\n                              Therefore, there is no risk to our community.                                \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q5. What organisms are you using as chasses in your project?\n                              For the purposes of iGEM, a chassis is the organism in which you are putting your parts, or which you are modifying in your project. Many teams will use a common lab organism as a chassis. Some teams may use a more exotic organism. Some project may not involve a chassis.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                               Escherichia coli (give names of all strains you are using)"),o("br"),e._v("\n                               BL21(DE3)Star, DH5alpha, AG1(ME5305)\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q6. What risks could your chassis pose to you or your colleagues in the laboratory, or to your community or the environment if they escape the lab?\n                              If not using a chassis organism, please note this.\n\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. The gene circuit, alanine racemase, and alpha-pinene are non-toxic substances.\n                              Therefore, there is no risk to our community.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q7. Which chemicals are you using in your project that might be hazardous?\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Mutagens"),o("br"),e._v("\n                               Other controlled chemicals"),o("br"),e._v("\n                               - EtBr, EtOH, Isopropyl Myristate, hexane, dodecane, ethyl acetate.\n                          ")]),o("br"),e._v(" "),o("p",[o("b",[e._v("Parts")])]),o("br"),e._v(" "),o("p",[e._v("\n                              This part of the form is for you to tell us about the parts you are planning to make or have developed during your project. It summarises information that might already have been submitted through\n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Check_In"}},[e._v("Check-in forms")]),e._v(". if you submitted a\n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Check_In"}},[e._v("Check-in form")]),e._v(" for a part, you should still include it in this section. You may omit parts that were already in the Registry if you are using them without significant modifications. "),o("br"),e._v("\n                              \n                              For more information on virulence factors see the "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Policies"}},[e._v("Safety Policy")]),e._v("\n                              page and the "),o("a",{attrs:{href:"https://2020.igem.org/Safety/White_List"}},[e._v("White List")]),e._v(".\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q8. As part of your project, are you are planning to make / have made new parts or substantively changed existing parts in the Registry.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                             A.  Yes (All relevant new or revised parts should be described on a spreadsheet) \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q9. Part information is submitted in a spreadsheet."),o("br"),e._v('\n                              Instructions for parts spreadsheet: Remember to change the filename of your spreadsheet! Put your team\'s name in place of "TeamName". Please visit this page to download a blank copy of the spreadsheet for this question.'),o("br"),e._v("\n\n                              DOWNLOAD SPREADSHEET "),o("a",{attrs:{href:"https://2020.igem.org/wiki/images/1/14/TeamName_Safety2020_Spreadsheet.xlsx"}},[e._v("here")])]),o("br"),e._v(" "),o("p",[e._v('\n                              A. Species name of parent organism (including strain): For an organism, give the scientific name of the species. Include a strain name or number (such as "K-12" for E. coli K-12) if there is one. For a part, give the name and strain of the organism that the part originally came from. If the part has no natural comparator, note this.'),o("br"),e._v(" "),o("br"),e._v(" \n\n                              B. Risk Group: Give the Risk Group of the organism in column A. You may use a categorization according to your home country, according to the USA, or according to the WHO. If the organism falls into an 'in-between' or special category such as 2+ or 2-Agricultural, explain this category in the Notes column. If you cannot find any Risk Group categorization for this organism, write \"N/A\" and explain in the Notes column. (Multicellular organisms generally do not have a Risk Group.)\n                              Help about "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Risk_Groups"}},[e._v(" Risk Groups and Safety Levels")]),o("br"),e._v(" "),o("br"),e._v(" \n\n                              D. Disease risk to humans: Does this organism cause any disease in humans? If yes, what disease does it cause?"),o("br"),e._v(" "),o("br"),e._v(" \n\n                              E. Disease or other risks to the environment: Does the organism cause plant or animal diseases or would in any other way pose a risk to the environment if accidentally released?"),o("br"),e._v(" "),o("br"),e._v(' \n\n                              F. Part number/name: For a part: If it has a Registry part number (like BBa_XXXXX), write that number. If it has no Registry part number, give a short name for the part. (For example: "Actin", "Alcohol Dehydrogenase".) For a whole organism, leave this column blank.'),o("br"),e._v(" "),o("br"),e._v(" \n\n                              G. Natural function of part: For a part: Briefly describe what the part does in its parent organism. (If it is an enzyme, what reaction does it catalyze? If it is a receptor, what molecules does it bind to? Etc.) For a whole organism, leave this column blank."),o("br"),e._v(" "),o("br"),e._v(" \n\n                              H. How did you acquire it: Describe how you acquired the organism/part. If you have not acquired it yet, describe how you plan to acquire it. (For example: did you receive the part DNA from another lab? Did you order the part DNA from a synthesis company? Did you use PCR to isolate the part from genomic DNA of its parent organism? Did you order the cell line from a company?)"),o("br"),e._v(" "),o("br"),e._v(' \n\n                              I. How will you use it: Describe how you are using the organism/part in the lab. (For example: "This organism is our chassis." "This part senses when the cells are exposed to glucose." "This organism is the source for a part that we are isolating by PCR." "This part produces the toxin which our bio-sensor is designed to detect.")'),o("br"),e._v(" "),o("br"),e._v(" \n\n                              J. Notes: Use this column to give any additional information that is necessary."),o("br"),e._v(" "),o("br")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. Waseda Team's spreadsheet, Download \n                              "),o("a",{attrs:{href:"https://2020.igem.org/wiki/images/3/3e/T--Waseda--Safety2020_Spreadsheet.xls"}},[e._v("here")])]),o("br"),e._v(" "),o("p",[e._v("\n                              Q10. What experiments will you do with your organisms and parts?"),o("br"),e._v("\n                              Please explain briefly. We are particularly keen to understand the boundaries or scope of your project. You should include the names of species / cell lines / strains. You should include experiments involving parts taken from other organisms, even if they are being synthesized rather than isolated from nature – you need not include any parts already in the registry.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. BL21(DE3) Star will be used to create extract. Transcription-translation of enzyme related to gene circuits, alanine racemase, and alpha pinene is performed using an extract-based cell-free system.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q11. What risks could arise from these experiments?"),o("br"),e._v("\n                              For example, could they produce aerosols making it more likely that you could inhale something? Or are you using needles and could accidentally stick yourself? Could you produce something that is not inactivated using standard lab protocols? If you are not conducting any experiments, please note this.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. There is no risk to our community.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q12. Are you collecting any data about people, such as their opinions, quotations, health information, gender, behavior, attitudes, or concerns?"),o("br"),e._v("\n                              This includes surveys and interviews carried out as part of human practices work, whether anonymous or not.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. Yes"),o("br"),e._v("\n                              (Please read iGEM's policy on \n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Policies#subjects"}},[e._v("Human Subjects Research")]),e._v("\n                              very carefully. For good reasons, many countries require formal approval for Human Subjects Research, as well as consent procedures for participants. You may need formal permission from a Research Ethics Committee, Institutional Research Board, or equivalent. Remember compliance with relevant laws and regulations is a requirement for participation in iGEM.)\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q13. Imagine that your project was fully developed into a real product that real people could use. How would people use it?"),o("br"),e._v("\n                              Check all appropriate boxes and expand in the comments section. (Note: iGEM teams should not release modified organisms into the natural environment but you could imagine such a release if your project was fully developed.)\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A.  * In agriculture / on a farm (Examples: cells that guard against pests, engineered rice plants, cells that promote growth of crop plants)"),o("br"),e._v("\n                               * In a small enclosed device (Examples: a bio-sensing strip with cells that detect arsenic)"),o("br"),e._v("\n                               * In the natural environment (Examples: cells that remove pollution from lakes, engineered forest trees that can resist drought)"),o("br"),e._v("\n                               * Other (Examples: bacteria that live on Mars, or a software project)"),o("br"),e._v("\n                               - Our products are cell-free system. Thus, the above products are not GMO.  \n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q14. What safety, security or ethical risks would be involved with such a use?"),o("br"),e._v("\n                              Virtually all modern life science and biotechnology carries with it some risks. These can be identified and managed helping to ensure your work makes a positive impact on the world.\n                               Basic risks are managed for you in many institutions. As you think about how your project might enter the real world, being a responsible biological engineer will require you to think about and manage these risks yourselves. You can find some great resources on the \n                               "),o("a",{attrs:{href:"https://2020.igem.org/Safety"}},[e._v("Safety and Security")]),e._v(" and \n                               "),o("a",{attrs:{href:"https://2020.igem.org/Human_Practices"}},[e._v("Human Practices")]),e._v(" hubs on our wiki. It is even possible that software projects could also pose relevant risks.\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. The cell-free system is a powerful platform and dangerous gene synthesis should be avoided.\n                          ")]),o("br"),e._v(" "),o("h3",[e._v("Part 3: Managing the risks you have identified")]),e._v(" "),o("p",[e._v("\n                              It is impossible to remove all risk from any biological activity. Instead, we attempt to manage these risks - to reduce them to an acceptable level. In this section, you should outline what steps have been taken (or you are planning to take) to reduce any risks you identified in Part 2 of the form, in particular Question 11.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q15. How will experts overseeing your project help to manage any of the risks you identified in this form?"),o("br"),e._v("\n                              For example, who is responsible for the safety and security of biology labs at your institution? What role has any institutional biosafety officer played in reviewing your work? What skills do these experts have that might help? For example, do they have a long history of working with an organism or part that might pose a risk? How familiar are they with the experimental procedures and practices you will be, or are, using?\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. Professor Daisuke kiga is responsible in the lab. He is a professor of Waseda University.\n                              He supported us design our project to be safe.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q16. What rules or guidance cover your work which could help to manage any of the risks you identified in Part 2 of this form (in particular Question 11)?"),o("br"),e._v("\n                              For example: In your country / region, what are the laws and regulations that govern biosafety or biosecurity in research laboratories? Please give a link to these regulations, or briefly describe them if you cannot give a link.What are the guidelines for laboratory biosafety and biosecurity? Please give a link to these guidelines, or briefly describe them if you cannot give a link.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. There is the Cartagena law in Japan."),o("br"),e._v("\n                                  In addition, there is an ethics committee at Waseda University, examination based on the law."),o("br"),e._v("\n                                  Our project safety was designed according to the rules of Waseda University and approved by Waseda University.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q17. Have your team members received any safety training?"),o("br"),e._v("\n                              For the purposes of iGEM, biosafety and biosecurity training covers the procedures and practices used to manage risks from accidents or deliberate misuse of your projects to your team, colleagues, communities and the environment. All team members are expected to be aware of these risks and to work to manage them.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. "),o("br"),e._v("* Yes, we have already received safety training.\n                              "),o("br"),e._v("*   Yes, we have already received security training.\n                              \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q18. Please select the topics that you learned about (or will learn about) in your safety training.\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A.  "),o("br"),e._v("* Lab access and rules (including appropriate clothing, eating and drinking, etc.\n                                  "),o("br"),e._v("* Responsible individuals (such as lab or departmental specialist or institutional biosafety officer)\n                                  "),o("br"),e._v("* Differences between biosafety levels\n                                  "),o("br"),e._v("* Biosafety equipment (such as biosafety cabinets)\n                                  "),o("br"),e._v("* Good microbial technique (such as lab practices)\n                                  "),o("br"),e._v("* Disinfection and sterilization\n                                  "),o("br"),e._v("* Emergency procedures\n                                  "),o("br"),e._v("* Transport rules\n                                  "),o("br"),e._v("* Physical biosecurity\n                                  "),o("br"),e._v("* Personnel biosecurity\n                                  "),o("br"),e._v("* Dual-use and experiments of concern\n                                  "),o("br"),e._v("* Data biosecurity\n                                  "),o("br"),e._v("* Chemicals, fire and electrical safety\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q19. Which work areas do you use / are you using to handle biological materials?"),o("br"),e._v("\n                              Please check all the containment provisions you are using. If you are using more than one space please check all that apply and note this in the other work area box.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. \n                              "),o("br"),e._v("* Open bench\n                              "),o("br"),e._v("* Biosafety cabinet (please note there are important differences between biosafety cabinets and laminar flow hoods / clean benches. iGEM encourages the use of biosafety cabinets but discourages the use of laminar flow hoods or clean benches. This \n                              "),o("a",{attrs:{href:"https://ehs.umich.edu/wp-content/uploads/2018/09/EHS-Ventilation-Whats-the-Difference.pdf",target:"_blank"}},[e._v("Factsheet")]),e._v(" from the University of Michigan helps explain the differences.)\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q20. What is the biosafety Level of your work space?"),o("br"),e._v("\n                              Help about"),o("a",{attrs:{href:"https://2020.igem.org/Safety/Risk_Groups"}},[e._v(" Risk Groups and Safety Levels")]),o("br"),e._v("\n                              If you are working in a biosafety cabinet it may be a biosafety level 2 space (then select Level 2), but biosafety cabinets are sometimes also used in a biosafety level 1 laboratory to provide a sterile work space (then select Level 1). If in any doubt, please discuss this with a biosafety professional or your instructors, supervisors or lab techs to make sure you understand how the equipment you use helps to manage risks.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. Level 1 (low risk)\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q21. What other risk management tools will cover you work?"),o("br"),e._v("\n                              Please select as many as are relevant, including those that happen automatically at your institution and are not specifically connected to your project. If in any doubt, please discuss this with a biosafety professional or your instructors, supervisors or lab techs to make sure you understand how the equipment you use helps to manage risks.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. \n                               "),o("br"),e._v("* Accident reporting (measures to record any accidents)\n                               "),o("br"),e._v("* Personal Protective Equipment (including lab coats, gloves, eye protection, etc)\n                               "),o("br"),e._v("* An inventory control system (measures to track who has what materials and where they are)\n                               "),o("br"),e._v("* Access controls (measures to control who can access your work spaces, or where materials are kept)\n                               "),o("br"),e._v("* Medical surveillance (measures to find out if you get sick because of something you were using)\n                               "),o("br"),e._v("* Waste management system (measures to make sure waste is not hazardous before it leaves your institution)\n                               "),o("br"),e._v("* Special procedures or protocols that address safety or security\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q22. How will the rules, training, containment and other procedures and practices help to manage any of the risks you identified in Part 2 of this form (in particular Question 10)?"),o("br"),e._v("\n                              Please give details of any steps you have taken to manage any risks identified. This might include how any of the following have helped manage risks: the rules you identified, the training you have had, the equipment you have used, the spaces you have worked in, and the procedures and protocols you have followed. It might also include things you deliberately didn't do. For example, if you are not conducting any experiments, especially on grounds of safety, security or as a responsible scientist / engineer, please note this. Examples might include, making sure you only use non-pathogenic strains of an organism, deciding that animal use experiments are not yet warranted, or avoiding plant infection experiments because the affected plant is found in your country. Please also consider waste treatment – how will you know that any waste produced in your project will be successfully inactivated?\n\n                              \n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. We will replace risk involving operations to alternative non-risk involved operations when possible. If the alternative operation is not available, well-trained scientist/engineer will conduct the operation following the safety manual.\n                          ")]),o("br"),e._v(" "),o("h3",[e._v("Part 4: Compliance with iGEM’s rules and policies")]),e._v(" "),o("p",[e._v("\n                              Q23. Are you planning to/ have released any organism or product derived from your project?"),o("br"),e._v("\n                              For the purposes of iGEM, release includes putting any engineered organism or product from one into the environment, yourselves or volunteers (including by eating or drinking), or into a device that will be placed in the environment.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q24 Are you planning to use, or using any animals (including insects and invertebrates) not on the \n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/White_List"}},[e._v("Whitelist?")])]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q25. Are you planning to use / have used any vertebrates (e.g. rats, mice, guinea pigs, hamsters) or higher order invertebrates (e.g. cuttlefish, octopus, squid, lobster)?\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q26. Are you planning to use, or using any parts not on the\n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/White_List"}},[e._v("Whitelist?")])]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q27. Are you planning to carry out any of the activities not on the Whitelist?"),o("br"),e._v("\n                              These include experiments likely to bias the inheritance frequency of a genetic marker in an organism’s progeny, such as through the creation of a gene drive, experiments likely to confer resistance to the World Health Organization's list of Critically Important Antimicrobials, and experiments likely to increase the hazard posed by your project.\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q28. Are you planning to use, or using any parts or organisms obtained from outside the lab or regular suppliers?\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. No\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              Q29. What else can you tell us about any risks associated with your project, how you are managing them, or your compliance with iGEM’s safety and security \n                              \n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Rules"}},[e._v("rules")]),e._v("\n                              and \n                              "),o("a",{attrs:{href:"https://2020.igem.org/Safety/Policies"}},[e._v("policies?")]),o("br"),e._v("\n                              This can include any improvements you would like to see to our safety and security efforts, or anything that has not been sufficiently clear, or where additional guidance would be useful, or where you see important uncertainties.\n\n                          ")]),o("br"),e._v(" "),o("p",[e._v("\n                              A. None\n                          ")]),o("br")])],1),e._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_01"}},[o("v-col",{staticClass:"last_message"})],1),e._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_02"}},[o("v-col",{staticClass:"last_message"})],1),e._v(" "),o("v-template",{directives:[{name:"scroll",rawName:"v-scroll",value:e.pushScrollY,expression:"pushScrollY"}],attrs:{id:"section_03"}},[o("v-col",{staticClass:"last_message"})],1)],1)],1)],1)],1)}),[],!1,null,"21dc3055",null);t.default=component.exports;h()(component,{VCol:d.a,VContainer:v.a,VRow:m.a}),f()(component,{Scroll:_.b})}}]);