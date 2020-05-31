import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueSocial from "@growthbunker/vuesocial";

Vue.use(VueSocial,{iconPath: '/img/networks',theme: "light"});

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
