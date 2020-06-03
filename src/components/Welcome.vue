<template>
  <v-container fluid :class="background">
    <v-row style="height:100vh;" align="center" justify="center">
      <v-col cols="11" md="7">
        <v-row class="text-center">
          <v-col cols="12 text-left">
            <span class="font-weight-black display-1 text-uppercase">Hello,<br v-if="$vuetify.breakpoint.smAndDown"> <span class="font-weight-thin">My name is</span></span>
          </v-col>
          <v-col cols="12">
            <v-img
              :src="require('../assets/ukklogo.svg')"
              class="my-3"
              contain
              :height="checkBreakpoint"
            />
          </v-col>
          <v-col cols="12" class="d-flex text-left">
            <vue-typed-js
              :typeSpeed="150" 
              :cursorChar="'_'" 
              :loop="true"
              :backDelay="1000"
              :smartBackspace="true"
              :strings="typedData2"
            >
              <h2 class="font-weight-thin display-1 text-uppercase">I am a <br v-if="$vuetify.breakpoint.smAndDown"><span class="typing font-weight-black display-1 text-uppercase"></span></h2>
            </vue-typed-js>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import vue from 'vue'
  import VueTypedJs from 'vue-typed-js'
  vue.use(VueTypedJs)
  export default {
    name: 'Welcome',
    props:['background'],
    data: () => ({
      typedData: ['If you heard the beats I played once...', 'I was exactly there with you.','Thank you for listening','I appreciate it.','See ya!'],
      typedData2: ['Composer','Developer','Designer','Producer','Worker'],
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
      typeIt:{
        fadeOut:false,
      }
    }),
    methods:{
      doSmth: function(e){
        this.typeIt.fadeOut = true
        console.log(e)
      }
    },
    computed:{
      checkBreakpoint: function(){
        if(this.$vuetify.breakpoint.smAndDown){
          return 60
        }else{
          return 200
        }
      }
    }
  }
</script>
<style scoped>
  .typed-element .typed-cursor{
    font-size: 30px !important;
  }
</style>
