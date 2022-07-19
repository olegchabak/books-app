<template>
  <h1>HOME PAGE</h1>
  <p>
    Смотреть
    <router-link :to="{ name: 'AuthorsPage' }">список авторов</router-link>
  </p>
  <p>Смотреть <button @click.prevent="goToBooksPage">список книг</button></p>
  <Search />
</template>

<script setup>
import Search from "@/components/search/Search.vue"
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// Можно было через router-link, но для примера - программный роутинг с параметрами
async function goToBooksPage() {
  await router.push({ name: "BooksPage", query: { foo: "bar", baz: "true" } });
  // Пример использования route
  const { fullPath, query, name, params } = route;
  console.table({ fullPath, query, name, params });
}
</script>
