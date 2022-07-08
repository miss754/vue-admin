import { createRouter, createWebHashHistory } from "vue-router";
// import Home from "../views/Home.vue";
// import Login from '../views/login';

const routes = [
  {
    path: "/",
    redirect: '/login',
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
