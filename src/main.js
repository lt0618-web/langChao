import Vue from "vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import bmap from "vue-baidu-map";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.use(ElementUI, bmap);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
