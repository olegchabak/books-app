<script setup>
import { computed, ref, watch } from "vue";
import { books } from "@/store/catalog";
import SearchResult from "@/components/search/SearchResult.vue";

const OPTION_NAME = { text: "По названию", value: "name" };
const OPTION_AUTHOR = { text: "По автору книги", value: "authors" };
const OPTION_CATEGORY = { text: "По категории", value: "category" };
const OPTION_PRICE = { text: "По цене", value: "price" };

const selectOptions = ref([
  OPTION_NAME,
  OPTION_AUTHOR,
  OPTION_CATEGORY,
  OPTION_PRICE,
]);

const selectedOption = ref("name");

const getLabel = computed(() => {
  switch (selectedOption.value) {
    case OPTION_AUTHOR.value:
      return "Введите автора книги: ";
    case OPTION_CATEGORY.value:
      return "Введите категорию книг: ";
    case OPTION_PRICE.value:
      return "Введите диапазон цены книг: ";
    case OPTION_NAME.value:
    default:
      return "Введите название книги: ";
  }
});

const searchStr = ref("");
const searchFrom = ref("");
const searchTo = ref("");
const lastSearchStr = ref("");
const searchResult = ref([]);

function getFilteredBooksByName() {
  return books.filter((book) => {
    const bookName = book[selectedOption.value].toLowerCase();
    return bookName.includes(searchStr.value.toLowerCase());
  });
}

function getFilteredBooksByCategoryOrAuthor() {
  return books.filter((book) => {
    const selectedOptionArr = book[selectedOption.value];
    for (const el of selectedOptionArr) {
      if (el.toLowerCase().includes(searchStr.value.toLowerCase())) return true;
    }
    return false;
  });
}

const onInputText = () => {
  if (!searchStr.value || searchStr.value.length < 2) return;

  switch (selectedOption.value) {
    case OPTION_NAME.value:
      searchResult.value = getFilteredBooksByName();
      break;
    case OPTION_CATEGORY.value:
    case OPTION_AUTHOR.value:
      searchResult.value = getFilteredBooksByCategoryOrAuthor();
  }
  lastSearchStr.value = searchStr.value;
  searchStr.value = "";
};

const onInputRange = () => {
  if (isNaN(+searchFrom.value) || isNaN(+searchTo.value)) return;

  const minValue = +searchFrom.value ?? 0;
  const maxValue = +searchTo.value || Infinity;
  searchResult.value = books.filter(
    (book) => book.price >= minValue && book.price <= maxValue
  );
};

watch(selectedOption, () => {
  searchResult.value.length = 0;
  lastSearchStr.value = "";
});
</script>

<template>
  <form @submit.prevent class="search-form">
    <fieldset>
      <legend>Поиск книг:</legend>
      <p>
        <select v-model="selectedOption">
          <option
            v-for="option in selectOptions"
            :key="option.value"
            :value="option.value"
          >
            {{ option.text }}
          </option>
        </select>
      </p>
      <div>
        <p>{{ getLabel }}</p>
        <template
          v-if="
            selectedOption === OPTION_NAME.value ||
            selectedOption === OPTION_CATEGORY.value ||
            selectedOption === OPTION_AUTHOR.value
          "
        >
          <input v-model="searchStr" type="text" @change="onInputText" />
        </template>
        <template v-else-if="selectedOption === OPTION_PRICE.value">
          от <input v-model="searchFrom" type="text" @change="onInputRange" />
          до <input v-model="searchTo" type="text" @change="onInputRange" />
        </template>
      </div>
    </fieldset>
  </form>

  <SearchResult :searchResult="searchResult" :lastSearchStr="lastSearchStr" />
</template>

<style lang="scss" scoped>
.search-form {
  margin-bottom: 60px;
}
</style>
