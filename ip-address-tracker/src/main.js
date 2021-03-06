import Vue from 'vue';

import {
  LMap, LTileLayer, LMarker, LIcon,
} from 'vue2-leaflet';

import 'leaflet/dist/leaflet.css';

import App from './App.vue';
import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-icon', LIcon);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
