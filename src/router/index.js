import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news-list",
    name: "NewsList",
    component: () =>
      import(/* webpackChunkName: "NewsList" */ "../views/NewsList.vue"),
  },
  {
    path: "/news-list/:id",
    name: "NewsDetails",
    component: () =>
      import(/* webpackChunkName: "NewsDetails" */ "../views/NewsDetails.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

export default router;
