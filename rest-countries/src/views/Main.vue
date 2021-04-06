<template>
  <div class="home container">
    <div class="filters">
      <input v-model="countrySearch" @keyup="searchCountries" placeholder="Search for a country..." />
      <select v-model="region" @change="filterRegions" type="dropdown">
        <option value=''>(All Regions)</option>
        <option value='Africa'>Africa</option>
        <option value='Americas'>Americas</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <CountryGrid :data="filteredCountries" v-if="!loading" />
  </div>
</template>

<script>
import _ from 'lodash'
import CountryGrid from '@/components/CountryGrid.vue'
import { getCountries } from '@/utils/API.js'

export default {
  name: 'Main',
  components: {
    CountryGrid
  },
  data () {
    return {
      countries: [],
      countrySearch: '',
      currentFilter: '',
      region: '',
      loading: true
    }
  },
  created () {
    const that = this

    getCountries()
      .then(function (res) {
        that.countries = res
        that.loading = false
      })
  },
  computed: {
    filteredCountries () {
      let result = this.countries
      if (this.currentFilter) {
        const regex = new RegExp(this.currentFilter, 'gi')
        result = result.filter(country => country.name.match(regex))
      }
      if (this.region) {
        result = result.filter(country => country.region.match(this.region))
      }
      return result
    }
  },
  methods: {
    searchCountries: _.debounce(function () {
      this.currentFilter = this.countrySearch
    }, 500)
  }
}
</script>

<style lang="scss">

.home.container {
  padding: 3em 0;
}

input {
  padding: 0.25em 0.5em;
  background: var(--input);
}

.filters {
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
