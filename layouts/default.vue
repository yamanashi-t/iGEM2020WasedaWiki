<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" temporary　clipped>
      <v-list left>
        <v-list-item :to="'/'" router exact>
                <v-list-item-action>
                  <v-icon>mdi-apps</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="'Home'" />
                </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/Project'" router exact>
                <v-list-item-action>
                  <v-icon>mdi-speedometer</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="'Project'" />
                </v-list-item-content>
        </v-list-item>
        <v-list-item :to="'/Parts'" router exact>
                <v-list-item-action>
                  <v-icon>mdi-palette</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title v-text="'Parts'" />
                </v-list-item-content>
        </v-list-item>

              <v-list-group 
                v-for="(nav_list, i) in items" 
                :key="i" 
                :prepend-icon="nav_list.icon" 
                no-action 
                :append-icon="nav_list.lists ? undefined : ''"
                > 
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ nav_list.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item v-for="(list, j) in nav_list.lists" :key="j" :to="list.to" router>
              <v-list-item-content>
                <v-list-item-title>{{ list.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
      </v-list>

    </v-navigation-drawer>




<!-- this is navigation  bar -->
    <v-app-bar app  elevation="10" prominent dense clipped-left v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
      <v-app-bar-nav-icon @click="drawer=!drawer" v-if="($vuetify.breakpoint.xs||$vuetify.breakpoint.sm)"></v-app-bar-nav-icon>
      <v-toolbar-title ><img class="navi_home_logo" src="https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"></v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="($vuetify.breakpoint.md||$vuetify.breakpoint.lg||$vuetify.breakpoint.xl)">
      <v-toolbar-items><v-btn class="navi_btn" to="/" text><img class="navi_logo" src="https://2020.igem.org/wiki/images/7/7a/T--Waseda--HeaderHome.png"></v-btn></v-toolbar-items>
      <v-toolbar-items><v-btn class="navi_btn" to="/Project" text><img class="navi_logo" src="https://2020.igem.org/wiki/images/3/39/T--Waseda--HeaderProject.png"></v-btn></v-toolbar-items>
      <v-toolbar-items><v-btn class="navi_btn" to="/Parts" text><img class="navi_logo" src="https://2020.igem.org/wiki/images/b/b0/T--Waseda--HeaderParts.png"></v-btn></v-toolbar-items>
      <!-- <v-toolbar-items><v-btn class="navi_btn" to="/" text><img class="navi_logo" src="https://2020.igem.org/wiki/images/7/7a/T--Waseda--HeaderHome.png"></v-btn></v-toolbar-items> -->
      <v-toolbar-items v-for="(item, i) in items" :key="i">
          <v-menu offset-y>
            <template v-slot:activator="{on}">
            <v-btn class="navi_btn" v-on="on" text><img class="navi_logo" :src="item.img"></v-btn>
            
            </template>
            <v-list>
            
              <v-list-item
                  v-for="(list, j) in item.lists"
                  :key="j"
                  :to="list.to"
                  router
                  exact
              >
                
                <v-list-item-content>
                  <v-list-item-title v-text="list.title" />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>
      </v-toolbar-items>
      </template>
    </v-app-bar>

    <v-app-bar app  elevation="10" extend center clipped-cneter  v-else>
      <v-app-bar-nav-icon large @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title><img class="navi_home_logo" src="https://2020.igem.org/wiki/images/9/9d/T--Waseda--iGEM2020lWasedaLogo.png"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-container fluid ma-0 pa-0 fill-height>
        <nuxt />

        <v-row>
          <transition name="fade">
            <v-btn 
              v-scroll="onScroll"
              v-show="fab"
              fab
              dark
              fixed
              bottom
              right
              color="primary"
              @click="toTop">
              <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              </transition>
            </v-row>
      </v-container>
    </v-main>


    <v-footer
    color="primary lighten-1"
    >
      <v-row
        justify="center"
        no-gutters
      >
        <!-- <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn> -->
        <v-col
          class="primary lighten-2 py-4 text-center white--text"
          cols="12"
        >
          {{ new Date().getFullYear() }} — <strong>iGEM Waseda</strong>
        </v-col>
     </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fab: false,
      scrollY: 0,
      clipped: false,
      drawer: false,
      fixed: false,
      items:[

        {
          title: 'Model',
          icon: 'mdi-cogs' ,
          img: 'https://2020.igem.org/wiki/images/1/11/T--Waseda--HeaderModel.png',
          lists:[
            { title: 'Model', to: 'Model'},
            { title: 'Zombie Model', to: 'Zombiemodel'},
            { title: 'IFFL', to: 'IFFL'},
          ]
        },
        {
          title: 'Experiment',
          icon: 'mdi-vuetify',
          img: 'https://2020.igem.org/wiki/images/2/24/T--Waseda--button_experiment.png',
          lists:[
            { title: 'Gene Circuit', to: 'QS'},
            { title: 'Monoterpene', to: 'Monoterpene'},
            { title: 'Racemase', to: 'Racemase'},
            { title: 'Protocol', to: 'Protocol'},
          ]
        },
        {
          title: 'HP',
          icon: 'mdi-view-dashboard',
          img: 'https://2020.igem.org/wiki/images/7/73/T--Waseda--HeaderHp.png',
          lists:[
            { title: 'Human_Practices', to: 'Human_Practices'},
            { title: 'Implementation', to: 'Implementation'},
            { title: 'Entrepreneurship', to: 'Entrepreneurship'},
            { title: 'Education', to: 'Education'},
            { title: 'Excellence_in_Another_Area', to: 'Excellence_in_Another_Area'},
          ]
        },
        {
          title: 'Team',
          icon: 'mdi-function',
          img: 'https://2020.igem.org/wiki/images/a/ab/T--Waseda--HeaderTeam.png',
          lists:[
            { title: 'Team', to: 'Team'},
            { title: 'Attributions', to: 'Attributions'},
            // { title: 'Partnership', to: 'Partnership'},
            { title: 'Collaborations', to: 'Collaborations'},
            { title: 'Sponsors', to: 'Sponsors'},
          ]
        },
        {
          title: 'JudgingForm',
          icon: 'mdi-vuetify',
          img: 'https://2020.igem.org/wiki/images/8/8d/T--Waseda--Judgingformbutton.png',
          lists:[
            { title: 'Description', to: 'Description'},
            { title: 'Contribution', to: 'Contribution'},
            { title: 'Engineering', to: 'Engineering'},
            { title: 'Video', to: 'Video'},
            // { title: 'Poster', to: 'Poster'}, //iGEM server only
            { title: 'Acheivement', to: 'Acheivement'},
            { title: 'Safety', to: 'Safety'},
            { title: 'Judging Form', to: 'Judging_Form'},
            { title: 'Feedback', to: 'Feedback'},
          ]
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',

    }
  },
  methods: {
    //for btn
    onScroll (e){
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 500
    },
    toTop () {
      this.$vuetify.goTo(0)
    }
  },
}
</script>
<style>
/* for iGEM */
#sideMenu, #top_title, .patrollink, #firstHeading, #home_logo, #sideMenu, #HQ_page { display:none; } #content { padding:0px; width:100%; margin-top:-7px; margin-left:0px; border:none;}
p {
  font-size: initial;
  font-size: 24px;
  overflow-wrap: normal;
  text-align: start;
}
#bodyContent h1, #bodyContent h2 {
    margin-bottom: 0;
}

.p_indent {
  font-size: 24px;
  text-indent: 50px;
}

h2 {
  font-size: 40px;
}
.h2_text {
  font-size: 50px;
  padding: 0;
  margin: 20px 0 0 0;
  border-bottom: 5px solid black;
}
h3 {
  font-size: 30px;
}

p {
  font-size: 24px;
}

.image_max {
  width:100%;
}
.fig_sm_width {
  width: 100%;
  padding: 0 30%;
}

.fig_mid_width {
  width: 100%;
  padding: 0 20%;
}
.fig_full_width {
  width: 100%;
  padding: 0;
}
.fig_title {
  text-align:center;
}



.v-toolbar--dense .v-toolbar__content {
    padding: 20px 16px 4px 16px; /* igem header 20px */
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
    background-color: #B09161 !important;
}
.navi_home_logo {
  width: 100px;
}
.navi_logo {
  width: 85px;
}

.v-btn:not(.v-btn--round).v-size--default {
  padding: 7px;
  min-width: 0;
}

.v-toolbar--prominent:not(.v-toolbar--bottom) .v-toolbar__title {
    align-self: end;
    padding-bottom: 6px;
    padding-top: 0;
}

.v-btn--icon.v-size--large .v-icon, .v-btn--fab.v-size--large .v-icon {
    padding:20px 0 0 10px;
    height: 40px;
    font-size: 40px;
    color: white;
    width: 40px;
}

.v-toolbar__items > .v-btn {
    border-radius: 0;
    height: 100% - 20x;
    max-height: 76px;
}

/*  Scroll back */
.fade-enter-active, .fade-leave-active {
  transition: 0.5s;
} 
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
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


.link_style {
  color: rgb(80,126,164);
}

.link_style:active {
  color: rgb(80,126,164);
}

.link_style:visited {
  color: rgb(80,126,164);
  text-decoration: underline;
}
 
.link_style:link {
  color: rgb(80,126,164);
  text-decoration: underline;
}
</style>