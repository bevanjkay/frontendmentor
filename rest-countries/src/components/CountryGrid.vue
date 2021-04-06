<template>
  <div class="card-wrapper container">
    <div v-for="country in data" :key="country.code" class="card" @click="openCountry(country)">
        <!-- <pre><code>{{ country }}</code></pre> -->
        <img :src="country.flag" />
        <div class="body">
            <h3>{{ country.name }}</h3>
            <div class="details">
                <b>Population: </b> {{ useFormatNum(country.population) }}<br>
                <b>Region: </b> {{ country.region }}<br>
                <b>Capital: </b> {{ country.capital }}
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { formatNum } from '@/utils/utils.js'

export default {
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    openCountry (country) {
      this.$router.push({
        name: 'Country',
        params: {
          country: country.alpha3Code
        }
      })
    },
    useFormatNum (num) {
      return formatNum(num)
    }
  }
}
</script>

<style lang="scss" scoped>

    .card {
        width: 100%;
        box-shadow: 0 0 10px rgba(black, 0.15);
        display: flex;
        flex-direction: column;

        img {
            width:100%;
            height: 175px;
            object-fit: cover;
        }

        .body {
            padding: 1em;
            background: var(--elements);

            .details {
                font-size: 0.9em;
                opacity: 0.7;
                margin: 0.5em 0;
            }
        }
    }

    .card-wrapper {
        display: grid;
        grid-auto-flow: row;
        gap: 2em;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

</style>
