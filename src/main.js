import Vue from 'vue';
import App from './App.vue';
import "./style/bootstrap.css"
import "./style/style.css"
import "./style/responsive.css"
// import "./style/global.scss"
// import "./style/variable.css"
// import "./style/animate.css"
// import "./style/preloader.css"
// import "./style/header.css"
// import "./style/font-awesome.css"
import { store } from './stores';

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
})
