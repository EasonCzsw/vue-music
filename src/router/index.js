import VueRouter from "vue-router";

// node
import Node from "../components/module/Node.vue";

import Me from "../components/tabar/me.vue";
import Find from "../components/tabar/find.vue";
import YC from "../components/tabar/YC.vue";
import Video from "../components/tabar/video.vue";
import Search from "../components/tabar/search.vue";

// nav
import Recommend from "../components/nav/Recommend.vue";
import McList from "../components/nav/McList.vue";
import Radio from "../components/nav/radio.vue";
import Ranking from "../components/nav/ranking-list.vue";
// ranklist
import List1 from "../components/ranking-list/List1.vue";
import List2 from "../components/ranking-list/List2.vue";
import List3 from "../components/ranking-list/List3.vue";
import List4 from "../components/ranking-list/List4.vue";

import Webcast from "../components/nav/webcast.vue";

// YC
import Discuss from "../components/YC/discuss.vue";
import Follow from "../components/YC/follow.vue";

// video
import Video_1 from "../components/video/video1.vue";
import Video_2 from "../components/video/video2.vue";
import Video_3 from "../components/video/video3.vue";
import Video_4 from "../components/video/video4.vue";
import Video_5 from "../components/video/video5.vue";
import Video_6 from "../components/video/video6.vue";

// musicList
import MusicList from "../components/module/musicList.vue";

// 专辑内容
import CD from "../components/module/cd.vue";

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/find" },
    { path: "/me", component: Me },
    { path: "/find", component: Find },
    {
      path: "/YC",
      component: YC,
      children: [
        { path: "/", redirect: "/YC/discuss" },
        { path: "/YC/discuss", component: Discuss },
        { path: "/YC/follow", component: Follow }
      ]
    },
    {
      path: "/video",
      component: Video,
      children: [
        { path: "/", redirect: "/video/video1" },
        { path: "/video/video1", component: Video_1 },
        { path: "/video/video2", component: Video_2 },
        { path: "/video/video3", component: Video_3 },
        { path: "/video/video4", component: Video_4 },
        { path: "/video/video5", component: Video_5 },
        { path: "/video/video6", component: Video_6 }
      ]
    },
    { path: "/search", component: Search },

    // nav
    { path: "/Recommend", component: Recommend },
    { path: "/McList", component: McList },
    { path: "/radio", component: Radio },
    { path: "/ranking-list", component: Ranking },
    { path: "/webcast", component: Webcast },

    // list
    { path: "/ranking-list/list1", component: List1 },
    { path: "/ranking-list/list2", component: List2 },
    { path: "/ranking-list/list3", component: List3 },
    { path: "/ranking-list/list4", component: List4 },

    // node
    { path: "/node", component: Node },

    // music
    { path: "/musicList", component: MusicList },

    //专辑内容
    { path: "/cd/:id", component: CD }
  ],
  linkActiveClass: "li-active"
});

export default router;
