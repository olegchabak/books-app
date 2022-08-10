<script setup>
import { authors } from "@/store/catalog";
const getGender = (g) => (g === "female" ? "Женщина" : "Мужчина");
</script>

<template>
  <div class="head-wrapper">
    <h1>Список авторов</h1>
    <router-link :to="{ name: 'AddingAuthor' }" class="adding-link">+ Добавить автора</router-link
    >
  </div>
  <main class="page-content">
    <ul class="list authors">
      <li v-for="author in authors" :key="author.name" class="list-item author">
        <div class="author-header">
          <img :src="author.photo" :alt="author.name" class="author-photo" />
          <h2>{{ author.name }}</h2>
          <p>{{ author.fullName }}</p>
          <p>{{ author["date of birth"] }} / {{ getGender(author.gender) }} / {{ author.country }}</p>
        </div>
        <h3>Книги:</h3>
        <ul>
          <li v-for="book in author.books" :key="book">
            &#10002; {{ book }}
          </li>
        </ul>
      </li>
    </ul>
    <div id="end-list"></div>
  </main>
  <p><router-link :to="{ name: 'AddingAuthor' }" class="adding-link">+ Добавить автора</router-link></p>
</template>

<style lang="scss">

.author-photo {
  float: left;
  margin-right: 30px;
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
