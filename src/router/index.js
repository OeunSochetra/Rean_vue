import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Info from "@/views/Info.vue";

const routes = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: About },
    { path: "/info", name: "Info", component: Info },
  ],
});

export default routes;
