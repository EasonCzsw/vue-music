import VueRouter from "vue-router";

import Me from "../components/tabar/me.vue";
import Find from "../components/tabar/find.vue";
import YC from "../components/tabar/YC.vue";
import Video from "../components/tabar/video.vue";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/find" },
    { path: "/me", component: Me },
    { path: "/find", component: Find },
    // { path: "/YC", component: YC },
    // { path: "/video", component: video },
    {
      path: "/video",
      components: {
        other: Video
      }
    },
    {
      path: "/YC",
      components: {
        others: YC
      }
    }
  ],
  linkActiveClass: "li-active"
});

export default router;
