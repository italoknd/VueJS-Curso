import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import User from "../views/User.vue";
import UserPosts from "../components/User/UserPosts.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/contact", component: () => import("../views/Contact.vue") }, //using lazy loading
  { path: "/products", component: () => import("../views/Products.vue") },
  {
    path: "/user/:username",
    name: "user",
    component: User,
    children: [
      {
        path: "posts",
        component: UserPosts
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
