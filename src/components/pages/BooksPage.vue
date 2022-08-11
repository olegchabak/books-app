<script setup>
import { storeToRefs } from "pinia";
import { useCatalogStore } from "@/stores/catalog";
import BookCard from "@/components/BookCard.vue";

const store = useCatalogStore();
const { books } = storeToRefs(store);

function deleteBook(book) {
  const index = books.indexOf(book);
  books.splice(index, 1);
}
</script>

<template>
  <div class="head-wrapper">
    <h1>Список книг</h1>
    <router-link :to="{ name: 'AddingBook' }" class="adding-link">+ Добавить книгу</router-link>
  </div>
  <main>
    <ul v-if="books && books.length" class="list books">
      <BookCard v-for="book in books" :key="book.ISBN" :book="book" @delete-book="deleteBook"/>
    </ul>
    <div id="end-list"></div>
  </main>
  <p>
    <router-link :to="{ name: 'AddingBook' }" class="adding-link">+ Добавить книгу</router-link>
  </p>
</template>

<style lang="scss">
.adding-link {
  text-decoration: none;
  display: inline-block;
  padding: 3px 10px;
  border: 1px solid red;
  &:hover {
    background-color: #f39292;
    color: white;
  }
}
</style>
