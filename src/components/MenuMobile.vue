<template>
  <div>
    <div class="menu-backdrop"></div>
    <section class="hidden-bar" :class="showMenu ? 'visible-sidebar' : ''">
      <!-- Hidden Bar Wrapper -->
      <div class="inner-box">
        <div class="cross-icon hidden-bar-closer" @click="closeSideBar"><span class="far fa-close"></span></div>
        <div class="logo-box"><a href="index.html" title="Delici - Restaurants HTML Template"><img src="../assets/images/resource/sidebar-logo.png" alt="" title="Delici - Restaurants HTML Template"></a></div>

        <!-- .Side-menu -->
        <div class="side-menu">
          <ul class="navigation clearfix">
            <li class="current"><a href="index.html">Home</a>
            </li>
            <li class="dropdown"><a href="#">Menus<button type="button" class="btn-expander" @click="showList"><i class="far fa-angle-down"></i></button></a>
              <ul v-show="showListMenu">
                <li><a href="menu-list-1.html">Menu List 1</a></li>
                <li><a href="menu-list-2.html">Menu List 2</a></li>
                <li><a href="menu-list-3.html">Menu List 3</a></li>
                <li><a href="menu-list-4.html">Menu List 4</a></li>
              </ul>
            </li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="our-chef.html">Our chefs</a></li>
            <li class="dropdown"><a href="#">Pages<button type="button" class="btn-expander"><i class="far fa-angle-down"></i></button></a>
              <ul style="display: none;">
                <li><a href="#">Dropdown Menu 1</a></li>
                <li><a href="#">Dropdown Menu 2</a></li>
                <li><a href="#">Dropdown Menu 3</a></li>
                <li class="dropdown"><a href="#">Dropdown Menu 4<button type="button" class="btn-expander"><i class="far fa-angle-down"></i></button></a>
                  <ul style="display: none;">
                    <li><a href="#">Dropdown Menu level 2</a></li>
                    <li><a href="#">Dropdown Menu level 2</a></li>
                    <li><a href="#">Dropdown Menu Level 3</a></li>
                  </ul>
                </li>
                <li><a href="#">Dropdown Lorem 5</a></li>
              </ul>
            </li>
            <li><a href="contact-us.html">Contact</a></li>
          </ul>
        </div><!-- /.Side-menu -->

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

      </div><!-- / Hidden Bar Wrapper -->
    </section>
  </div>
</template>

<script>
export default {
  name: "MenuMobile",
  data() {
    return {
      showListMenu: false
    }
  },
  computed: {
    showMenu() {
      return this.$store.state.menu.isOpenMenu
    }
  },
  methods: {
    closeSideBar() {
      this.$store.dispatch('closeMenu', false)
    },
    showList() {
      this.showListMenu = !this.showListMenu
    }
  }
}
</script>

<style scoped>

</style>