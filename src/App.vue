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
        <v-list-item link @click="$vuetify.goTo('#contact',{duration:1000,offset:-69})">
          <v-list-item-action>
            <v-icon>mdi-phone</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
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
        <v-divider vertical></v-divider>
        <v-btn class="px-6" tile text @click="$vuetify.goTo('#contact',{duration:1000,offset:81})">
          <span>Contact</span>
          <v-icon right dark>mdi-phone</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <transition appear>
      <v-content>
        <welcome id="home" :background="'transparent'"/>
        <v-divider></v-divider>
        <CustomSection id="works" icon :icon-name="'mdi-briefcase'" enable-heading :heading-position="'right'" :background="'https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'">
          <template #heading>
            WORKS
          </template>
          <template #content>
            <v-col v-for="n in 12" :key="n" cols="12" sm="6" md="4" lg="3" class="d-flex justify-center align-center">
              <v-img
                :src="`https://picsum.photos/500/300?image=${n*5 + 10}`"
                :lazy-src="`https://picsum.photos/10/6?image=${n*5 + 10}`"
                aspect-ratio="1"
                class="grey lighten-2"
              ></v-img>
            </v-col>
          </template>
        </CustomSection>
        <v-divider></v-divider>
        <CustomSection id="contact" icon :icon-name="'mdi-phone'" enable-heading :heading-position="'left'" :background="'https://images.unsplash.com/photo-1549900075-f03833dbbe9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'">
          <template #heading>
            CONTACT
          </template>
          <template #content>
            <v-col cols="12" class="d-flex justify-center px-3">
            <v-card dark height="180px" class="d-flex align-center justify-center pa-3">
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar class="ma-3 mr-0" size="125">
                  <v-img :src="require('./assets/avatar.jpg')"></v-img>
                  </v-avatar>
                <div>
                  <v-card-title class="headline" v-text="'UFUK KARAMALLI'"></v-card-title>
                  <v-card-subtitle><!-- +905422079512<br>!-->me@ufukkaramalli.com.tr<br>KAPAKLI,TEKIRDAG</v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>
          </template>
        </CustomSection>
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
        <strong>© Ufuk KARAMALLI</strong> {{ new Date().getFullYear() }} - {{appVersion}}
      </v-card-text>
    </v-footer>
  </v-app>
</template>
<script>
import welcome from './components/Welcome';
import CustomSection from './components/CustomSection';
export default {
  name: 'App',
  components: {
    welcome,
    CustomSection,
  },
  title: function(){
    return 'Welcome | Ufuk KARAMALLI'
  },
  data: () => ({
    drawer:false,
    offsetTop: 0,
    appBarColored: false,
    appVersion: process.env.VUE_APP_VERSION,
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
      ]
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
