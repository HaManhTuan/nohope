<template>
  <div id="app" :class="showBar ? 'side-content-visible' : showMenu ? 'visible-sidebar' : ''">
<!--    <img-->
<!--      alt="Vue logo"-->
<!--      src="./assets/logo.png"-->
<!--    />-->
    <PreLoader />
    <Header />
    <MenuMobile />
    <InforBar />
  </div>
</template>

<script>
import PreLoader from "./components/PreLoader.vue";
import Header from "./components/Header.vue";
import MenuMobile from "./components/MenuMobile.vue";
import InforBar from "./components/InforBar.vue";

export default {
  components: {
    PreLoader, Header, MenuMobile, InforBar
  },
  computed: {
    showMenu() {
      return this.$store.state.menu.isOpenMenu
    },
    showBar() {
      return this.$store.state.menu.isInforBar
    }
  },
};
</script>

<style>
#app {
  background-color: #D3C6C3;
}
</style>