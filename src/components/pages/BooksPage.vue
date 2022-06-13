<script setup>
import { books } from "@/store"
import AddingBook from "@/components/AddingBook.vue"

const addBook = (newBook) => {
  books.push(newBook);
  document.getElementById("endList").scrollIntoView({ behavior: "smooth" });
};

function deleteBook(book) {
  const index = books.indexOf(book);
  books.splice(index, 1);
}
</script>

<template>
  <h1>Cписок книг</h1>
  <div class="page-wrapper">
    <main>
      <ul class="list books">
        <li v-for="book in books" :key="book.ISBN" class="list-item book">
          <a href="#" @click.prevent="deleteBook(book)" class="delete">
            <img src="@/assets/img/delete.svg" alt="">
          </a>
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
        </li>
      </ul>
      <div id="endList"></div>
    </main>
    <aside>
      <AddingBook @addBook="addBook" />
    </aside>
  </div>
</template>

<style lang="scss">

.book {
  &:hover {
    .delete {
      opacity: 0.5;
      &:hover {
        opacity: 1;
      }
    }
  }
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
  -webkit-line-clamp: 10;
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
</style>
