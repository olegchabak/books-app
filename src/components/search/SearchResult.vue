<script setup>
defineProps({
  searchResult: {
    type: Array,
    required: true,
  },
  lastSearchStr: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="search-result">
    <p v-if="searchResult.length && lastSearchStr" class="search-result__title">По запросу "{{ lastSearchStr }}" найдено:</p>
    <p v-else-if="lastSearchStr" class="search-result__title">По запросу "{{ lastSearchStr }}" ничего не найдено.</p>

    <ul v-if="searchResult.length" class="list books search-result__list">
      <li v-for="book in searchResult" :key="book.ISBN" class="list-item book search-result__item">
        <h2>{{ book.name }}</h2>
        <div class="book-header">
          <img :src="book.image" :alt="book.name" class="book-image"/>
          <p><span v-text="book.authors.join(', ')"/></p>
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
  </div>
</template>

<style lang="scss" scoped>
.search-result {
  &__list {
    grid-template-columns: 1fr 1fr 1fr;
  }
  &__title {
    margin-bottom: 30px;
  }

}
</style>
