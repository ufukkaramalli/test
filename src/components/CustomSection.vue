<template>
  <v-container fluid class="pa-0 mb-12">
    <v-parallax class="pa-0" height="350" :src="background">
    </v-parallax>
    <v-divider></v-divider>
    <v-container class="py-0">
      <v-row v-show="enableHeading">
        <v-col cols="12" class="d-flex justify-center" :class="headingPos">
          <v-alert colored-border border="bottom" color="black" dark tile class="mt-n12">
            <h1 style="z-index:1;" class="d-flex align-center justify-center display-2 display-md-4 font-weight-black pa-3">
              <slot name="heading"></slot>
              <v-icon v-show="icon" x-large class="ml-2">{{iconName}}</v-icon>
            </h1>
          </v-alert>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid class="py-0">
      <v-row v-once>
        <slot name="content"></slot>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
  export default {
    name: 'CustomSection',
    props:{
      background: {
        type:String
      },
      icon: Boolean,
      iconName: String,
      enableHeading: Boolean,
      headingPosition: {
        type: String,
        default: 'center'
      }
    },
    data: () => ({
    }),
    methods:{
    },
    computed: {
      headingPos(){
        if (this.headingPosition === 'left') {
          return 'justify-md-start'
        } else if(this.headingPosition === 'right') {
          return 'justify-md-end'
        } else if(this.headingPosition === 'center'){
          return 'justify-md-center'
        } else {
          return false
        }
      }
    },
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
    background-image: repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 5px );
  }
</style>