<template>
  <div id="app">
    <mgl-map
        :accessToken="accessToken"
        :mapStyle.sync="mapStyle"
    />
  </div>
</template>

<script>
import { MglMap } from 'vue-mapbox'

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken: pk.eyJ1Ijoic2xhIiwiYSI6Ik15dE1uclUifQ.ZmSBZxWOZYCSW3m71abSzQ, // your access token. Needed if you using Mapbox maps
      mapStyle: styles/sla/cjnci1u153tqz2ro5eka7t0ef , // your map style
    }
  }
}
</script>

<style lang="scss">

$link: #42b983;
$app-color: #2c3e50;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $app-color;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: $link;
}
</style>
