<template>
  <!-- <v-layout> -->
    <v-container fluid ma-0 pa-0 fill-height> 

        <v-container fluid ma-0 pa-0>
            <v-row fluid ma-5 pa-5 mb-2  justify="center">
                <!-- v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.xs||$vuetify.breakpoint.sm)" -->
                <v-col class="left_box" align="left"  v-if="($vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
                    <v-col class="sidebar" ma-0 pa-0>

                        <v-row class="navi_image">
                               <svg class="navi_icon" z-index='99'>
                                 <circle fill="#363636" cx="100" cy="100" r="80" stroke="#ffffff" stroke-width="18"/>
                                <circle fill="none" cx="100" cy="100" r="80" stroke="#2C64BB" stroke-width="18" id="triangle" :style="{ 'stroke-dashoffset': scrollPer}" transform='rotate(270 100 100)'/>  
                                <!-- style="stroke-dasharray: 420.293; stroke-dashoffset: 210.293;" -->
                                
                                Sorry, your browser does not support inline SVG. 
                              </svg>
                              <img z-indx="10" class="navi_svg" src="https://2020.igem.org/wiki/images/a/a7/T--Waseda--iGEM2020wikiicons-team.svg">
            
                        </v-row>

            
                    <v-row class="navi_text">
                        <a href="Sponsors#SponsorTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[0] }">Sponsors</v-row></a>
                        <!-- <a href="Attributions#ModelingTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[1] }">Modeling </v-row></a>
                        <a href="Attributions#VideoTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[2] }">Video</v-row></a>
                        <a href="Attributions#WikiTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[3] }">Wiki</v-row></a>
                        <a href="Attributions#HPTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[4] }">HP</v-row></a>
                        <a href="Attributions#OtherTop"><v-row :class="{ 'title_text': true, 'title_text_active': check[5] }">Other</v-row></a>
                         -->

                    </v-row>
                    </v-col>
                </v-col>

                
                <v-col class="main_text" cols="12" lg="10" xl="10">
                    <v-row class="row_max-box" id="SponsorTop">
                        <h2 class="h2_text">Sponsors</h2>
                    </v-row>
                    <v-row class="sponsortop_padding"></v-row>
                    <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/87/T--Waseda--SponsorEDGE.png" alt="EDGELogo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                        <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/01/T--Waseda--SponsorTwist.png" alt="TwistLogo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/8/8f/T--Waseda--SponsorSG.png" alt="Logo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/4/4b/T--Waseda--SponsoeNE.png" alt="Logo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/05/T--Waseda--SponsorGF.png" alt="Logo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/0/08/T--Waseda--SponsorPm.png" alt="Logo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="https://2020.igem.org/wiki/images/d/dc/T--Waseda--SponsorCM.png" alt="Logo">
                        <!-- <figcaption class="fig_title"></figcaption> -->
                        </figure>
                      </v-row>



                      <!-- <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <v-col>
                          <h3></h3>
                          <p class="p_indent">                            
                          </P>
                          <p class="p_indent">                              
                          </p>
                        </v-col>
                      </v-row>

                      <v-row cols="12" sm="12" xs="12" md="12" lg="6" xl="6" class="row_max-box">
                        <figure class="fig_sm_width" >
                          <img class="image_max" src="" alt="Logo">
                        <figcaption class="fig_title"></figcaption>
                        </figure>
                      </v-row> -->

                    <v-row v-scroll="pushScrollY" id="NaviLast" > 
                      <v-col>
                        <v-col class="last_message">
                            <P class="last_message_p">
                              We’d like to express our appreciation to our sponsors.
                            </P>
                        </v-col>
                      </v-col>
                    </v-row>
 
                </v-col>
            </v-row>
        </v-container>

    </v-container>
    
  <!-- </v-layout> -->
</template>
<script>
const pageTitle = 'Sponsors';
const pageDes = "iGEM2020 Team Waseda's" + pageTitle + "page";
const pageUrl = 'https://2020.igem.org/Team:Waseda/Sponsors';


export default {
  
  head: {

    title: pageTitle,
    meta: [
      //Change each page
      { hid: 'description', name: 'description', content: pageDes},
      { hid: 'og:title', property: 'og:title', content: pageDes },
      { hid: 'og:description', property: 'og:description', content: pageDes },
      { hid: 'og:url', property: 'og:url', content: pageUrl },
    ],
  },
  data: () => {
    return {
  
      fab: false,
      scrollY: 0,
      scrollPer: 510.293,
      sectionOffsetTop: [],
      check: [false, false],

    };
  },
  
  methods: {
    pushScrollY(e) {
      this.scrollY = window.scrollY;
      for (var i = 0; i < this.check.length; i++) {
        this.check[i] = false
      };
      for (var j=0; j < this.check.length; j++) {
        if(this.scrollY >= this.sectionOffsetTop[j] && this.scrollY < this.sectionOffsetTop[j+1]) {
          this.check[j] = true
        }
      };
      const windowHigh = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollPer = 510.293*(1 - (this.scrollY/(windowHigh)));

    },

    pushElementOffsetTop() {
      const targets = [
        'SponsorTop', 'NaviLast'
      ];
      targets.forEach(target => {
        const element = document.getElementById(target);
        const offsetTop = Math.round(window.scrollY + element.getBoundingClientRect().top);
        this.sectionOffsetTop.push(offsetTop);
      });
    },


  }, 
  mounted() {
    this.pushElementOffsetTop();
  },
}
</script>

<style lang="scss" scoped>
p{
  font-size: 24px;
}
.left_box {
    padding :0;
}
.sidebar {
    height: 100vh;
    position: fixed;
    width: 17%;
    background-image: url("https://2020.igem.org/wiki/images/e/e9/T--Waseda--Tasukinisakura1.png");
    background-size: 100% auto;
    background-repeat: repeat;
}
.main_text {
    padding: 40px 10%;
    background: rgba(255, 255, 255) 0% 0% no-repeat padding-box;
}
.h1 {
  &_box {
    border-bottom: 5px solid black;
    padding-bottom: 0;
    margin-bottom: 10px;
    &_text{
      padding-bottom: 0;
    }
  }
  &_text {
    font-size: 60px;
  }
  &_imbox {
    display: block;
    position: relative;
  }
  &_image{
    position: absolute;
    top: -30px;
    left: -30px;
    height: 150px;   
  }
}
h2 {
  font-size: 30px;
  border-bottom: 5px solid black;
  margin: 20px 0;
  
}
.h2_text {
  font-size: 50px;
  padding: 0;
  margin: 20px 0 0 0;
  border-bottom: 5px solid black;
}


.image_max {
  width:100%;
}

.image_top {
  height: 0;
  padding-top: 66%;
  background-size: contain;
  background-image: url("https://2020.igem.org/wiki/images/6/63/T--Waseda--AttributionsTop.png")
}

.navi {
  &_icon {
    width: 200px;
    height: 200px;
  }

  &_image {
        display: block;
        position: relative;
        padding-top: 20px;
        width: 200px;
        margin: 0 auto;
  }
  &_text {
        display: block;
        width: 200px;
        margin: -40px auto 0 auto;
        padding: 60px 0 40px 0;
        border-radius: 20px;
        background-color: white;
  }
  &_svg {
      position:absolute; top:40px; left:20px; 
      width: 160px;
      height: 160px;
  }
}
#triangle {
  width:160px;
  height: 160px;
  stroke-dasharray: 510.293; 
  // stroke-dashoffset: 420.293 - scrollY;
}


.title_text {
    display: block;
    margin: 10px auto;
    width:60%;
    border-radius: 10px;
    background-color: None;
    &_active{
      background-color: #507EA4;
      color: white;
      opacity: 0.5;
    }
}
.row_max-box {
  width: 100%;
  padding: 20px 0;
  margin: 0;
}

.last_message {
  margin: 200px 0;
  &_p {
    vertical-align: middle;
    text-align: center;
  }
}

a:link {
  color: black;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: black;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: black;
}

.sponsortop_padding {
    padding: 5% 0;
}
</style>

