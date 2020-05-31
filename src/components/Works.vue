<template>
<v-container fluid class="pa-0 mb-12">
  <v-parallax class="pa-0" height="350" src="https://images.unsplash.com/photo-1466428996289-fb355538da1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80">
    <div class="fill-height repeating-gradient"></div>
  </v-parallax>
  <v-container class="py-0">
      <v-row>
        <v-col cols="12" class="d-flex justify-center justify-md-end">
          <v-alert border="bottom" color="black" dark tile class="mt-n12">
            <h1 style="z-index:1;" class="display-2 display-md-4 font-weight-black pa-3">WORKS</h1>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-0">
      <v-row v-once>
        <v-col v-for="work in works" :key="work" cols="12" sm="6" md="4" lg="3" class="d-flex justify-center align-center">
          <iframe :src="work" frameborder="0" allowfullscreen></iframe>
        </v-col>
      </v-row>
    </v-container>
</v-container>
</template>
<script>
  export default {
    name: 'Works',
    props:['background'],
    data: () => ({
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
      works:[
        'https://www.youtube.com/embed/kzMvKb08L9E',
        'https://www.youtube.com/embed/mDbmnYJK2tQ',
        'https://www.youtube.com/embed/3LRSdgLIWHI',
        'https://www.youtube.com/embed/gI8QgGB5gl8',
        'https://www.youtube.com/embed/Wz1P_YFz2Vs',
        'https://www.youtube.com/embed/DljaW86LFf0',
        'https://www.youtube.com/embed/TXPjUJTf9L0',
        'https://www.youtube.com/embed/1bINYnJiHyc',
        ],
    }),
    methods:{
    }
  }
</script>
<style scoped>
.ytp-chrome-top, .ytp-show-cards-title{
  display: none !important;
}
.bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) 1px, rgba(255, 255, 255, 0.25) 2px, rgba(255, 255, 255, 0.25) 3px );
  }
</style>