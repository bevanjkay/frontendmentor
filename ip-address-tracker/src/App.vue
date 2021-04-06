<template>
  <div id="app">
    <div class="hero">
      <h1>IP Address Tracker</h1>

      <form @submit.prevent="useGetIpData(searchQuery)">
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          v-model="searchQuery"
        />
        <input type="submit" value=">" />
      </form>
    </div>

    <Results
      :results="results"
      />

    <Map :center="[results.lat,results.lng]" />
  </div>
</template>

<script>
import Results from '@/components/Results.vue';
import Map from '@/components/Map.vue';
import { getIpData } from '@/hooks/Getters';

export default {
  name: 'App',
  components: {
    Results,
    Map,
  },
  data() {
    return {
      results: {
        complete: false,
        loading: false,
        ip: null,
        isp: null,
        location: null,
        lat: 51.505,
        lng: -0.09,
        error: '',
        message: '',
      },
      searchQuery: '',
    };
  },
  methods: {
    useGetIpData(input) {
      this.searchQuery = '';
      this.results.loading = true;
      this.results.error = '';
      getIpData(input)
        .then((data) => {
          console.log(data);
          if (data.error) {
            this.results.error = data.message;
            return;
          }
          console.log(data);
          this.results.ip = data.ip;
          this.results.location = data.location;
          this.results.isp = data.isp;
          this.results.lat = data.location.lat;
          this.results.lng = data.location.lng;
          this.results.loading = false;
          this.results.complete = true;
        });
    },
  },
};
</script>

<style>
</style>
