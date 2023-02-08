import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import RegisterTrip from "../views/RegisterTrip"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    },
    {
        path: "/registerTrip",
        name: "Register Trip",
        component: RegisterTrip,
    },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
