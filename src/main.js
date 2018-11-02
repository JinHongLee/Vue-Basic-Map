import Vue from 'vue'
import VueMapbox from 'vue-mapbox'
import Mapbox from 'mapbox-gl'
import App from './App.vue'

Vue.use(VueMapbox, { mapboxgl: Mapbox })

new Vue({
  el: '#app',
  render: h => h(App)
})
