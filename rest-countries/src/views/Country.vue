<template>
  <div class="container wrap">
    <img :src="data.flag" />
    <div class="content">
      <h1>{{ data.name }}</h1>
      <div class="details">
        <p><b>Native Name:</b> {{ data.nativeName }}</p>
        <p><b>Population:</b> {{ data.population }}</p>
        <p><b>Region:</b> {{ data.region }}</p>
        <p><b>Subregion:</b> {{ data.subregion }}</p>
        <p><b>Capital:</b> {{ data.capital }}</p>
        </div>
        <div class="details">
          <p><b>Top Level Domain:</b> {{ data.topLevelDomain.join(', ') }}</p>
          <p><b>Currencies:</b> {{ data.currencies.map(currency => currency.name).join(', ') }}</p>
          <p><b>Languages:</b> {{ data.languages.map(language => language.name).join(', ') }}</p>
        </div>
        <div class="border-countries">
          <p><b>Border Countries: </b> {{ data.borders.join(', ') }}</p>
        </div>
    </div>
  </div>
</template>

<script>
import { getCountry } from '@/utils/API.js'

export default {
  name: 'Country',
  data () {
    return {
      data: {}
    }
  },
  created () {
    const that = this
    const countryCode = this.$route.params.country
    console.log(this.$route.params.country)

    getCountry(countryCode)
      .then(function (res) {
        that.data = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .wrap {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 1fr;
    gap: 3em;

    img {
      width: 100%;
    }
  }
</style>
