import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "首页",
    component: () => import("../view/Main.vue"),
    meta: { icon: "pie-chart" },
    redirect: "/page1",
    children: [
      {
        path: "/page1",
        name: "云平台底座",
        meta: { icon: "pie-chart" },
        component: () => import("../view/Page1.vue"),
      },
      {
        path: "/page2",
        name: "网络及机房",
        meta: { icon: "pie-chart" },
        component: () => import("../view/Page2.vue"),
      },
      {
        path: "/page3",
        name: "智慧应用",
        meta: { icon: "pie-chart" },
        component: () => import("../view/Page3.vue"),
      },
    ],
  },
  // {
  //   path: "/detailPage",
  //   name: "detailPage",
  //   component: () => import("../view/DetailPage"),
  // },
]

const router = new VueRouter({
  routes,
})

export default router
export { routes }
