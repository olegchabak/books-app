import { reactive, ref } from "vue";
import { defineStore } from "pinia";
import mockBooks from "@/mock/books.json";
import mockAuthors from "@/mock/authors.json";

export const useCatalogStore = defineStore("catalog", () => {
  const books = reactive(mockBooks);
  const authors = ref(mockAuthors);
  return { books, authors };
});
