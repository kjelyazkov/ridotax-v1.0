import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Car from "../views/Car.vue";
import Fee from "../views/Fee.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { requiresLogin: true }
  },
  {
    path: "/car/:id",
    name: "car",
    component: Car,
    props: true,
    meta: { requiresLogin: true }

  },
  {
    path: "/fee/:id",
    name: "fee",
    component: Fee,
    props: true,
    meta: { requiresLogin: true }

  },
  {
    path: "/login",
    name: "login",
    component: Login,

  },
  {
    path: "/register",
    name: "register",
    component: Register,

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const vuex = JSON.parse(localStorage.getItem("vuex"));

  if (to.matched.some(record => record.meta.requiresLogin) && (vuex === null || vuex.auth.token === null)) {
    next({ name: "login" });
  } else {
    next();
  }
})

export default router;
