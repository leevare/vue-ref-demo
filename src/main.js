import Vue from "vue";
import App from "./App.vue";
import vueRef from "./vue-ref";

Vue.config.productionTip = false;

Vue.use(vueRef, { name: "ref" });

new Vue({
  render: h => h(App)
}).$mount("#app");
