<script setup>
import { books } from "@/store"

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
    <ul class="list books">
      <li v-for="book in books" :key="book.ISBN" class="list-item book">
        <a href="#" @click.prevent="deleteBook(book)" class="delete">
          <img src="@/assets/img/delete.svg" alt="delete" />
        </a>
        <router-link
          :to="{ name: 'BookPage', params: { code: book.code } }"
          class="book-inner"
        >
          <h2>{{ book.name }}</h2>
          <div class="book-header">
            <img :src="book.image" :alt="book.name" class="book-image"/>
            <p><span v-text="book.authors.join(', ')" /></p>
            <p>Цена: {{ book.price }}</p>
            <p>ISBN: {{ book.ISBN }}</p>
            <p v-if="book.category.length">Жанр: <span v-text="book.category.join(', ')"/></p>
            <p v-if="book.tags.length" class="tags">
              Теги: <small v-for="tag in book.tags" :key="tag">{{tag}}</small>
            </p>
          </div>
          <p class="book-description">{{ book.shortDescription }}</p>
        </router-link>
      </li>
    </ul>
    <div id="end-list"></div>
  </main>
  <p>
    <router-link :to="{ name: 'AddingBook' }" class="adding-link">+ Добавить книгу</router-link>
  </p>
</template>

<style lang="scss">

.book {
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 30px #bbb;
    .delete {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
}

.book-inner {
  display: block;
  text-decoration: none;
  color: inherit;
}

.book-image {
  float: left;
  width: 100px;
  height: 150px;
  margin-right: 30px;
  margin-bottom: 15px;
}

.book-description {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-style: italic;
}
.delete {
  position: absolute;
  display: block;
  right: 20px;
  top: 20px;
  width: 16px;
  height: 16px;
  opacity: 0;
  transition: all 0.25s;
}

.tags {
  small {
    display: inline-block;
    padding: 3px 8px;
    background-color: #eee;
    border-radius: 8px;
    margin-right: 10px;
    line-height: 1;
    margin-bottom: 10px;
  }
}
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
