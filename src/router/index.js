import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const LandingPage = () => import('../pages/LandingPage.vue')
const Login = () => import('../pages/Login.vue')

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
    }
]  

const router = new VueRouter({
    mode: "history",
    routes
  });
  
  export default router;