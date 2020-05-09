import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const LandingPage = () => import('../pages/LandingPage.vue')
const Login = () => import('../pages/Login.vue')
const HomePage = () => import('../pages/HomePage.vue')
const SearchPage = () => import('../pages/SearchPage.vue')
const ShowPage = () => import('../pages/ShowPage.vue')

const routes = [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/kids',
      name: 'Kids',
      component: HomePage
    },
    {
      path: '/movies',
      name: 'Movies',
      component: HomePage
    },
    {
      path: '/tvshows',
      name: 'TVShows',
      component: HomePage
    },
    {
      path: '/search/:searchTerm',
      name: "SearchPage",
      component: SearchPage
    },
    {
      path: '/shows/:showId',
      name: "ShowPage",
      component: ShowPage
    }
]  

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;