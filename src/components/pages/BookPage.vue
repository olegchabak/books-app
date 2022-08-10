<script setup>
import { useRoute } from "vue-router";
import { books } from "@/store/catalog";
import { computed, onMounted, watch } from "vue";
import Recommendation from "@/components/Recommendation.vue";

const route = useRoute();
const props = defineProps(["code"]);

const book = computed(() => books.find((book) => book.code === props.code));
const showRecommendation = computed(() => props.code !== "ono");

// !!! внутри ДИНАМИЧЕСКОЙ СТРАНИЦЫ параметры реактивны,
// а onMounted - не реактивен
onMounted(() => {
  console.log("MOUNTED | code = ", route.params.code); // не покажется при изменении роута, т.к. компонент тот же
});
// если нужно что-то делать на хуке onMounted, то надо вотчить route
watch(route, (newRoute) => {
  console.log("WATCH | code = ", newRoute.params.code);
});
</script>

<template>
  <h1>{{ book.name }}</h1>
  <div class="book-header">
    <img :src="book.image" :alt="book.name" class="book-image" />
    <p><span v-text="book.authors.join(', ')" /></p>
    <p>Цена: {{ book.price }}</p>
    <p>ISBN: {{ book.ISBN }}</p>
    <p v-if="book.category.length">Жанр: <span v-text="book.category.join(', ')"/></p>
    <p v-if="book.tags.length" class="tags">
      Теги: <small v-for="tag in book.tags" :key="tag">{{tag}}</small>
    </p>
  </div>
  <p class="book-description">{{ book.shortDescription }}</p>
  <p class="go-back">
    <router-link :to="{ name: 'BooksPage' }" class="go-back__link">
      &#8592; назад к выбору книг
    </router-link>
  </p>
  <Recommendation v-if="showRecommendation" />
</template>

<style lang="scss" scoped>
.book-description {
  -webkit-line-clamp: initial;
}
</style>
