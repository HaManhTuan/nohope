<template>
    <div class="loader-wrap" v-if="loading">
      <div class="preloader">
        <div class="preloader-close" @click.prevent="closePreLoading">x</div>
        <div id="handle-preloader" class="handle-preloader">
          <div class="animation-preloader">
            <div class="spinner"></div>
            <div class="txt-loading">
              <span data-text-preloader="N" class="letters-loading">
              N
              </span>
              <span data-text-preloader="O" class="letters-loading">
              O
              </span>
              <span data-text-preloader="H" class="letters-loading">
              H
              </span>
              <span data-text-preloader="O" class="letters-loading">
              O
              </span>
              <span data-text-preloader="P" class="letters-loading">
              P
              </span>
              <span data-text-preloader="E" class="letters-loading">
              E
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    }
  },
  name: "PreLoader",
  methods: {
    closePreLoading() {
      // this.loading = false
    }
  }
}
</script>
<style scoped>
</style>