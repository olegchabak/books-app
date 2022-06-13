<script setup>
import AddingAuthor from "@/components/AddingAuthor.vue";
import { authors } from "@/store"

const getGender = (g) => (g === "female" ? "Женщина" : "Мужчина");

const addAuthor = (newAuthor) => {
  authors.value.push(newAuthor);
};
</script>

<template>
  <h1>Cписок авторов</h1>
  <div class="page-wrapper">
    <main class="page-content">
      <Placeholder v-if="!authors" />
      <template v-else>
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
      </template>
    </main>
    <aside>
      <AddingAuthor @addAuthor="addAuthor" />
    </aside>
  </div>
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
