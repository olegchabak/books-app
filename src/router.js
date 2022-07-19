import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import BooksPage from "@/components/pages/BooksPage.vue";
import BookPage from "@/components/pages/BookPage.vue";
import NotFound from "@/components/pages/NotFound.vue";
import Profile from "@/components/pages/profile/Profile.vue";
import ProfileHome from "@/components/pages/profile/ProfileHome.vue";
import ProfileUser from "@/components/pages/profile/ProfileUser.vue";
import ProfileOrders from "@/components/pages/profile/ProfileOrders.vue";
import ProfileFavorites from "@/components/pages/profile/ProfileFavorites.vue";
import ProfileOptions from "@/components/pages/profile/ProfileOptions.vue";

const routes = [
  {
    path: "/",
    name: "HomePage", // опционально, можно скипнуть
    component: HomePage,
  },
  {
    path: "/books",
    name: "BooksPage",
    component: BooksPage,
  },
  {
    path: "/authors",
    name: "AuthorsPage",
    component: () => import(/* webpackChunkName: "AuthorsPage" */ "@/components/pages/AuthorsPage.vue"),
  },
  {
    path: "/books/:code",
    name: "BookPage",
    component: BookPage,
    props: true,
    beforeEnter: (to, from) => {
      console.log("beforeEnter", to.fullPath, from.fullPath);
      // reject the navigation
      // if (true) return false
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    alias: "/user",
    children: [
      {
        path: "",
        name: "ProfileHome",
        component: ProfileHome,
      },
      {
        path: "orders",
        name: "ProfileOrders",
        component: ProfileOrders,
      },
      {
        path: "favorites",
        name: "ProfileFavorites",
        component: ProfileFavorites,
      },
      {
        path: "user",
        name: "ProfileUser",
        component: ProfileUser,
      },
      {
        path: "options",
        name: "ProfileOptions",
        component: ProfileOptions,
      },
    ],
  },
  {
    path: "/redirect-test",
    redirect: "/",
  },
  {
    path: "/:pathMatch(.*)*", // will match everything and put it under `$route.params.pathMatch`
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, // массив роутов
  mode: "history", // | "hash" | "abstract"
  base: "/", // префикс всех роутов
  linkActiveClass: "router-link-active", // default
  linkExactActiveClass: "router-link-exact-active", // default
  scrollBehavior: (to, from, savedPosition) => {
    // по дефолту сохраняет скролл прошлой страницы
    // всегда скролл вверх
    console.log(to, from, savedPosition);
    return { top: 0 };
    // всегда прокручивать 10 пикселей над элементом #main
    // return {
    //   // could also be
    //   // el: document.getElementById('main')
    //   el: "#main",
    //   top: -10,
    // };
    // c плавной прокруткой до нужного якоря
    // if (to.hash) {
    //   return {
    //     el: to.hash,
    //     behavior: "smooth",
    //   };
    // }
  },
  // parseQuery / stringifyQuery: () => {/* функции парсинга/сериализации query */}
  fallback: false, // default
});

/**
 * Хуки навигации роутера:
 * beforeEach
 * beforeResolve
 * afterEach
 */
router.afterEach((event) => {
  // event - по сути это роут
  console.log("afterEach", event);
});

export default router;
