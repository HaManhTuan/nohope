<template>
  <section class="info-bar">
    <div class="inner-box">
      <div class="cross-icon" @click.prevent="closeBar"><span class="far fa-close"></span></div>
      <div class="logo-box"><a href="index.html" title="Delici - Restaurants HTML Template"><img src="../assets/images/resource/sidebar-logo.png" alt="" title="Delici - Restaurants HTML Template"></a></div>
      <div class="image-box"><img src="../assets/images/resource/sidebar-image.jpg" alt="" title=""></div>

      <h2>Visit Us</h2>
      <ul class="info">
        <li>Restaurant St, Delicious City, <br>London 9578, UK</li>
        <li>Open: 9.30 am - 2.30pm</li>
        <li><a href="mailto:booking@domainame.com">booking@domainame.com</a></li>
      </ul>
      <div class="separator"><span></span></div>
      <div class="booking-info">
        <div class="bk-title">Booking request</div>
        <div class="bk-no"><a href="tel:+88-123-123456">+88-123-123456</a></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InforBar",
  methods: {
    closeBar() {
      this.$store.dispatch('closeBar', false)
    }
  }
}
</script>

<style scoped>

</style>