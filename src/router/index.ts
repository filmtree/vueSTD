import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Button from "../views/Buttons.vue";
import Cselect from "../views/SelectMake.vue";
import Dycomp from "../views/DynamicComp.vue";
import ElTree from "../views/elementTree.vue";
import NotFound from "../views/NotFound.vue";
import Dragable from "../views/DragAble.vue"
import ButtonProps from "../views/ButtonsProps.vue"
import TooltipMessage from "../views/TooltipMessage.vue";
import EllipsisText from "@/ui/EllipsisTextUse.vue";

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
    component: {default:Button, sidebar: HomeView} // name router-view
  },
  {
    path: "/button2",
    name: "Button2",
    component: ButtonProps // name router-view
  },
  {
    path: "/cselect",
    name: "Cselect",
    component: Cselect,
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
    path: "/draglist",
    name: "draglist",
    component: Dragable,
  },
  {
    path: "/tooltip",
    name: "Tooltip",
    component: TooltipMessage,
  },
  {
    path: "/ellipsistext",
    name: "ellipsistext",
    component: EllipsisText,
  },
  { 
    path: "/:pathMatch(.*)*", // 모든 존재하지 않는 경로에 대해 매칭
    name: "NotFound", 
    component: NotFound 
  },
  // { 
  //   path: '*', // 모든 존재하지 않는 경로에 대해 매칭
  //   redirect: '/404',
  //   alias: '/NotFound'
  // }
  
];

const router = createRouter({
  history: createWebHistory(), // HTML5 Mode
  routes,
  /* 사용자 클래스 지정 */
  linkActiveClass: "active", // 기본 클래스변경, 기본 클래스 router-link-active
  linkExactActiveClass: 'exact-active', // 기본 exact 클래스 변경, 기본 exact 클래스 : router-link-exact-active
  /* transition Scroll */
  // https://router.vuejs.kr/guide/advanced/scroll-behavior.html
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || new Promise((resolve, reject) => {
      // 스크롤 지연
      setTimeout(() => {
        resolve({top: 0, left:0, behavior: 'smooth' })
      }, 300)
    })
  },
});

export default router;
