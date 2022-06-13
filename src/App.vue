<script setup>
import HomePage from "@/components/pages/HomePage.vue";
import AuthorsPage from "@/components/pages/AuthorsPage.vue";
import BooksPage from "@/components/pages/BooksPage.vue";
import NotFound from "@/components/pages/NotFound.vue";
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import { computed, ref } from "vue";

const routes = {
  "/": HomePage,
  "/authors": AuthorsPage,
  "/books": BooksPage,
};

const currentPath = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  currentPath.value = window.location.hash;
});

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || "/"] || NotFound;
});
</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <div class="page-container">
      <component :is="currentView" />
    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  min-height: 100vh;
}

.app-wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-container {
  position: relative;
  flex-grow: 1;
  width: 1200px;
  margin: auto;
}

section {
  box-sizing: border-box;
  flex-basis: 50%;
  padding: 15px 30px;
  border: 1px solid #aaa;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.page-content {
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
}

.list-item {
  position: relative;
}

.page-wrapper {
  height: 100%;
  display: grid;
  grid-template-columns: auto 350px;
  grid-gap: 30px;
}

.list-item {
  padding: 15px 30px;
  box-shadow: 1px 1px 15px #eee;
  border-radius: 6px;
}
</style>
