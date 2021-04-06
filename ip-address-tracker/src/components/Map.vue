<template>
  <l-map ref="map" :zoom="15" :center="center">
    <l-tile-layer
      :url="url"
      :attribution="attribution"
      />

    <l-marker :lat-lng="center">
        <l-icon
        :icon-url="markerImg"
        :shadow-url="markerShadowImg"
    />
    </l-marker>
  </l-map>
</template>

<script>
import markerImg from 'leaflet/dist/images/marker-icon.png';
import markerShadowImg from 'leaflet/dist/images/marker-shadow.png';

export default {
  name: 'Map',
  props: ['center'],
  data() {
    return {
      zoom: 13,
      mapOptions: {
        zoomSnap: 0.5,
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
      markerImg,
      markerShadowImg,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
