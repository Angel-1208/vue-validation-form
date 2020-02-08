import Vue from "vue";
import VeeValidate from "vee-validate";

import App from "./app/App";

Vue.use(VeeValidate);

new Vue({
  el: "#app",
  render: h => h(App)
});
