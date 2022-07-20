<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

</script>

<template>
  <div class="app-wrapper">
    <AppHeader />
    <div class="page-container page-content">
      <router-view></router-view>
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
  box-sizing: border-box;
  position: relative;
  flex-grow: 1;
  width: 100%;
  padding: 0 15px;
  max-width: 1200px;
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

h1 {
  margin-top: 0;
}

.page-content {
  padding-top: 30px;
}

.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}

.list-item {
  position: relative;
}

.head-wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.list-item {
  padding: 15px 30px;
  box-shadow: 1px 1px 15px #eee;
  border-radius: 6px;
  transition: box-shadow 0.25s;
}

.go-back {
  margin-top: 30px;
  &__link {
    text-decoration: none;
  }
}
</style>
