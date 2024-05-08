import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Button from "../views/Buttons.vue";
import CSelect from "../views/SelectMake.vue";
import Dycomp from "../views/dynamicComp.vue";
import ElTree from "../views/elementTree.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/button",
    name: "Button",
    component: Button,
  },
  {
    path: "/cselect",
    name: "CSelect",
    component: CSelect,
  },
  {
    path: "/dycomp",
    name: "Dycomp",
    component: Dycomp,
    children: [
      {
        path: '/elTree',
        component: ElTree,
      },
    ],
  },
  {
    path: "/elTree",
    name: "ElTree",
    component: ElTree,
  },
  { 
    path: "/:pathMatch(.*)*", // 모든 존재하지 않는 경로에 대해 매칭
    name: "NotFound", 
    component: NotFound 
  },
  { 
    path: '*', // 모든 존재하지 않는 경로에 대해 매칭
    redirect: '/404' 
  } 
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active", // 기본 클래스변경, 기본 클래스 router-link-active
  linkExactActiveClass: 'exact-active', // 기본 exact 클래스 변경, 기본 exact 클래스 : router-link-exact-active
});

export default router;
