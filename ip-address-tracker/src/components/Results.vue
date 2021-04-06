<template>
<div class="results-wrapper">
  <div class="error results" v-if="computedResults.error">
    <div class="error--container"><span class="error--title">ERROR:</span>
      <span class="error--message"> {{ computedResults.error }}</span></div>
  </div>
  <div v-if="!computedResults.error" class="results">
      <div>
          <h3>IP Address</h3>
          <p v-if="!computedResults.complete && !computedResults.loading" class="placeholder"></p>
          <p v-else-if="!computedResults.complete && computedResults.loading" class="loading"></p>
          <p v-else>{{ computedResults.ip }}</p>
      </div>
      <div>
          <h3>Location</h3>
          <p v-if="!computedResults.complete && !computedResults.loading" class="placeholder"></p>
          <p v-else-if="!computedResults.complete && computedResults.loading" class="loading"></p>
          <p v-else>
            <span class="results--location_city">{{ computedResults.location.city }}</span>
            <br/><small>{{ computedResults.location.region }} -
                 {{ computedResults.location.country }}</small>
          </p>
      </div>
      <div>
          <h3>Timezone</h3>
          <p v-if="!computedResults.complete && !computedResults.loading" class="placeholder"></p>
          <p v-else-if="!computedResults.complete && computedResults.loading" class="loading"></p>
          <p v-else>UTC {{ computedResults.location.timezone }}</p>
      </div>
      <div>
          <h3>ISP</h3>
          <p v-if="!computedResults.complete && !computedResults.loading" class="placeholder"></p>
          <p v-else-if="!computedResults.complete && computedResults.loading" class="loading"></p>
          <p v-else>{{ computedResults.isp }}</p>
      </div>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    computedResults() {
      return {
        complete: this.results.complete,
        loading: this.results.loading,
        ip: this.results.ip,
        isp: this.results.isp,
        location: this.results.location,
        error: this.results.error,
      };
    },
  },
  props: {
    results: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes load {
    from {
        left: -150px;
    }
    to   {
        left: 100%;
    }
}

.placeholder {
    background: #eee;
    height: 1.5em;
}

.loading {
    height: 1.5em;
    position: relative;
    overflow: hidden;
    background: #eee;

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: load 1s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;
    }
}

.error {
  text-align: center;
  place-items: center;
  grid-template-columns: 1fr;
  font-size: 1.2em;

  &--title {
    font-weight: 500;
    color: red;
  }
}

</style>
