<template>
  <div class="main-header">
    <div class="header-top">
      <div class="auto-container">
        <div class="inner clearfix">
          <div class="top-left clearfix">
            <ul class="top-info clearfix">
              <li><i class="icon far fa-map-marker-alt"></i> Restaurant St, Delicious City, London 9578, UK</li>
              <li><i class="icon far fa-clock"></i> Daily : 8.00 am to 10.00 pm</li>
            </ul>
          </div>
          <div class="top-right clearfix">
            <ul class="top-info clearfix">
              <li><a href="tel:+11234567890"><i class="icon far fa-phone"></i> +1 123 456 7890</a></li>
              <li><a href="mailto:booking@restaurant.com"><i class="icon far fa-envelope"></i> booking@restaurant.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="header-upper">
      <div class="auto-container">
        <div class="main-box clearfix">
          <div class="logo-box">
            <div class="logo"><a href="#" title="Delici - Restaurants HTML Template"><img src="../assets/images/logo.png" alt="" title="Delici - Restaurants HTML Template"></a></div>
          </div>
          <div class="nav-box clearfix">
            <!--Nav Outer-->
            <div class="nav-outer clearfix">
              <nav class="main-menu">
                <ul class="navigation clearfix">
                  <li class="current"><a href="index.html">Home</a>
                  </li>
                  <li class="dropdown has-mega-menu"><a href="menu-list.html">Menus</a>
                    <ul>
                      <li>
                        <div class="mega-menu">
                          <div class="menu-inner">
                            <div class="auto-container">
                              <div class="row clearfix">
                                <div class="menu-block col-lg-3 col-md-6 col-sm-6">
                                  <div class="image"><a href="menu-list-1.html"><img src="../assets/images/resource/menu-image-1.jpg" alt=""></a></div>
                                  <div class="title"><a href="menu-list-1.html">Menu list 1</a></div>
                                </div>
                                <div class="menu-block col-lg-3 col-md-6 col-sm-6">
                                  <div class="image"><a href="menu-list-2.html"><img src="../assets/images/resource/menu-image-2.jpg" alt=""></a></div>
                                  <div class="title"><a href="menu-list-2.html">Menu list 2</a></div>
                                </div>
                                <div class="menu-block col-lg-3 col-md-6 col-sm-6">
                                  <div class="image"><a href="menu-list-3.html"><img src="../assets/images/resource/menu-image-3.jpg" alt=""></a></div>
                                  <div class="title"><a href="menu-list-3.html">Menu list 3</a></div>
                                </div>
                                <div class="menu-block col-lg-3 col-md-6 col-sm-6">
                                  <div class="image"><a href="menu-list-4.html"><img src="../assets/images/resource/menu-image-4.jpg" alt=""></a></div>
                                  <div class="title"><a href="menu-list-4.html">Menu list 4</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="our-chef.html">Our chefs</a></li>
                  <li class="dropdown"><a href="#">Pages</a>
                    <ul>
                      <li><a href="#">Dropdown Menu 1</a></li>
                      <li><a href="#">Dropdown Menu 2</a></li>
                      <li><a href="#">Dropdown Menu 3</a></li>
                      <li class="dropdown"><a href="#">Dropdown Menu 4</a>
                        <ul>
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
              </nav>
              <!-- Main Menu End-->
            </div>
            <!--Nav Outer End-->

            <div class="links-box clearfix">
              <div class="link link-btn">
                <a href="reservation-opentable.html" class="theme-btn btn-style-one clearfix">
                                    <span class="btn-wrap">
                                        <span class="text-one">find a table</span>
                                        <span class="text-two">find a table</span>
                                    </span>
                </a>
              </div>
              <div class="link info-toggler">
                <button class="info-btn" @click="openBar">
                                    <span class="hamburger">
                                        <span class="top-bun"></span>
                                        <span class="meat"></span>
                                        <span class="bottom-bun"></span>
                                    </span>
                </button>
              </div>
            </div>

            <!-- Hidden Nav Toggler -->
            <div class="nav-toggler" @click.prevent="openMenu">
              <button class="hidden-bar-opener">
                <span class="hamburger">
                  <span class="top-bun"></span>
                  <span class="meat"></span>
                  <span class="bottom-bun"></span>
                </span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    openMenu() {
      this.$store.dispatch('openMenu', true, { root: true });
    },
    openBar() {
      this.$store.dispatch('openBar', true, { root: true });

    }
  }
}
</script>

<style scoped>

</style>