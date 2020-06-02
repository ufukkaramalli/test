<template>
  <v-app>
    <v-app-bar height="80" :elevation="appBarColored ? 5 : 0" :class="[appBarColored ? 'black' : 'transparent']" fixed>
      <v-toolbar-title class="font-weight-black display-1 text-uppercase">Ufuk .</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn tile text @click="$vuetify.goTo('#welcome',{duration:1000})">
          <span>Home</span>
          <v-icon right dark>mdi-home</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn tile text @click="$vuetify.goTo('#works',{duration:1000,offset:-60})">
          <span>Works</span>
          <v-icon right dark>mdi-briefcase</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <transition appear>
    <v-content>
      <welcome id="welcome" :background="'transparent'"/>
      <v-divider></v-divider>
      <works id="works" :background="'transparent'"/>
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
  title: 'Welcome | Ufuk KARAMALLI',
  data: () => ({
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
  }
};
</script>
