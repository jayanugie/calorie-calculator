import { createRouter, createWebHashHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LoginView",
      component: LoginView,
    },
    {
      path: "/register",
      name: "RegisterView",
      component: RegisterView,
    },
  ],
});

export default router;
