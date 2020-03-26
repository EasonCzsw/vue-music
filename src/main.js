import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";

// router
import VueRouter from "vue-router";
import router from "./router/index.js";
Vue.use(VueRouter);

// vue-resource
import resource from "vue-resource";
Vue.use(resource);

// index.css
import "../src/style/index.css";

// axios
import axios from "axios";
Vue.prototype.$ajax = axios;

// mint-ui
import { Navbar, TabItem, Swipe, SwipeItem } from "mint-ui";
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import "../src/mui/mui-master/dist/css/mui.min.css";
import "../src/mui/mui-master/examples/hello-mui/css/icons-extra.css";
import "mint-ui/lib/style.css";
import "mint-ui/src/assets/font/iconfont.css";
import "./assets/music_Icon/iconfont.css";
import "./assets/music_Icon/iconfont.js";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
