import mockBooks from "@/mock/books.json"
import mockAuthors from "@/mock/authors.json"
import { reactive, ref } from "vue";

export const books = reactive(mockBooks);
export const authors = ref(mockAuthors);
