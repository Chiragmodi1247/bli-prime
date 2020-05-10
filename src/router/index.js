import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const LandingPage = () => import("../pages/LandingPage.vue");
const Login = () => import("../pages/Login.vue");
const HomePage = () => import("../pages/HomePage.vue");
const SearchPage = () => import("../pages/SearchPage.vue");
const ShowPage = () => import("../pages/ShowPage.vue");

const routes = [
  {
    path: "/",
    name: "LandingPage",
    component: LandingPage,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/kids",
    name: "Kids",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/movies",
    name: "Movies",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/tvshows",
    name: "TVShows",
    component: HomePage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/search/:searchTerm",
    name: "SearchPage",
    component: SearchPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
  {
    path: "/shows/:showId",
    name: "ShowPage",
    component: ShowPage,
    beforeEnter: (to, from, next) => {
      if (!localStorage.getItem("isLogged")) {
        next({ name: "LandingPage" });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
