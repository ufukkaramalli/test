<template>
<v-container fluid class="pa-0">
  <v-parallax class="pa-0" height="350" :src="background">
    <!-- <div class="fill-height repeating-gradient"></div> -->
  </v-parallax>
  <v-divider></v-divider>
  <v-container class="py-0">
      <v-row>
        <v-col cols="12" class="d-flex justify-center justify-md-start px-3 px-md-0">
          <v-alert colored-border border="bottom" color="black" dark tile class="mt-n12">
            <h1 style="z-index:1;" class="display-2 font-weight-black pa-3">CONTACT</h1>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex px-3 px-md-0">
          <v-card dark height="180px" class="d-flex align-center justify-center pa-3">
            <div class="d-flex flex-no-wrap justify-space-between">
              <v-avatar class="ma-3 mr-0" size="125">
                <v-img :src="'https://instagram.fist6-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/43012137_171723483737185_6336579927150971647_n.jpg?_nc_ht=instagram.fist6-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Ba9tuzyOdMYAX_RexQQ&oh=2d8a1d8dcdffb5661dbeccecbc6173e4&oe=5EFBF3B4'"></v-img>
                </v-avatar>
              <div>
                <v-card-title class="headline" v-text="'UFUK KARAMALLI'"></v-card-title>
                <v-card-subtitle>+905422079512<br>me@ufukkaramalli.com.tr<br>KAPAKLI,TEKIRDAG</v-card-subtitle>
              </div>

            </div>
          </v-card>
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
.v-parallax__content {
  padding: 0px 0px !important;
}
.bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) 1px, rgba(255, 255, 255, 0.25) 2px, rgba(255, 255, 255, 0.25) 3px );
  }
</style>