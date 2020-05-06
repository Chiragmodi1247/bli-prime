import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const LandingPage = () => import('../pages/LandingPage.vue')

const routes = [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage
    }
]  

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;