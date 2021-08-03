import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Car from "../views/Car.vue";
import Fee from "../views/Fee.vue";
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/car/:id",
    name: "car",
    component: Car,
    props: true
  },
  {
    path: "/fee/:id",
    name: "fee",
    component: Fee,
    props: true
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

export default router;
