<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary app>
      <template v-slot:prepend>
          <v-list-item two-line>
            <v-list-item-title>Navigation</v-list-item-title>
          </v-list-item>
        </template>
        <v-divider></v-divider>
      <v-list nav dense>
        <v-list-item link @click="$vuetify.goTo('#home',{duration:1000})">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link @click="$vuetify.goTo('#works',{duration:1000,offset:-69})">
          <v-list-item-action>
            <v-icon>mdi-briefcase</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar height="80" :elevation="appBarColored ? 5 : 0" :class="[appBarColored ? 'black' : 'transparent']" fixed>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" v-if="$vuetify.breakpoint.smAndDown"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-black display-1 text-uppercase">Ufuk .</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn class="px-6" tile text @click="$vuetify.goTo('#home',{duration:1000})">
          <span>Home</span>
          <v-icon right dark>mdi-home</v-icon>
          <v-divider></v-divider>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn class="px-6" tile text @click="$vuetify.goTo('#works',{duration:1000,offset:-69})">
          <span>Works</span>
          <v-icon right dark>mdi-briefcase</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <transition appear>
    <v-content>
      <welcome id="home" :background="'transparent'"/>
      <v-divider></v-divider>
      <works id="works" :background="'transparent'" :gradientOverlay="true"/>
      <!-- <v-divider></v-divider>
      <contact :background="'transparent'"/> -->
    </v-content>
    </transition>
    <v-footer absolute app dark>
    <v-container fluid>
      <v-row>
        <v-col cols="12" class="align-center justify-center d-flex">
          <v-btn icon fab large v-for="social in icons" :key="social.icon" class="mx-2" v-bind:href="social.link">
            <v-icon>{{social.icon}}</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="pa-0">
      <v-divider></v-divider>
    </v-container>
    <v-card-text class="white--text text-center">
        <strong>© Ufuk KARAMALLI</strong> {{ new Date().getFullYear() }} 
      </v-card-text>
    </v-footer>
  </v-app>
</template>

<script>
import welcome from './components/Welcome';
import works from './components/Works';
// import contact from './components/Contact';
export default {
  name: 'App',
  components: {
    welcome,
    works,
    // contact
  },
  title: function(){
    return 'Welcome | Ufuk KARAMALLI'
  },
  data: () => ({
    drawer:true,
    offsetTop: 0,
    appBarColored: false,
    icons: [
      {
        icon:'mdi-soundcloud',
        link:'https://soundcloud.com/ufukkaramalli',
      },
      {
        icon:'mdi-youtube',
        link:'https://www.youtube.com/ufukkaramalli',
      },
      {
        icon:'mdi-instagram',
        link:'https://www.instagram.com/ufukkaramalli/',
      }
      ],
  }),
  created(){
    window.addEventListener("scroll",this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);  
  },
  methods:{
    handleScroll: function(e){
      this.offsetTop = e.currentTarget.window.scrollY
      if(this.offsetTop > 715){
        this.appBarColored = true
      }else{
        this.appBarColored = false
      }
    }
  },
  computed:{
    cdLouder(){
      return this.$vuetify.breakpoint.name
    }
  }
};
</script>
