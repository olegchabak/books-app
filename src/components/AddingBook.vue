<script setup>
import FormOfAdding from "@/components/FormOfAdding.vue"
import { ref } from "vue";

const emit = defineEmits(["addBook"]);

const errorMessage = ref("");

const name = ref("");
const authors = ref("");
const image = ref("");
const price = ref("");
const shortDescription = ref("");
const ISBN = ref("");
const category = ref("");
const tags = ref("");

const addBook = () => {
  try {
    const book = {
      name: name.value,
      authors: authors.value?.split("|").map(i=>i.trim()),
      image: image.value,
      price: price.value,
      shortDescription: shortDescription.value,
      ISBN: ISBN.value,
      category: category.value?.split("|").map(i=>i.trim()),
      tags: tags.value?.split("|").map(i=>i.trim()),
    };
    validate(book);
    emit("addBook", book);
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};
const validate = (book) => {
  if (
    !book ||
    !book.name ||
    !book.authors.length ||
    !book.image ||
    !book.price ||
    !book.shortDescription ||
    !book.ISBN ||
    !book.category.length ||
    !book.tags.length
  )
    throw new Error("Не все поля заполнены");
  return book;
};
</script>

<template>
  <FormOfAdding
    @submit="addBook"
    :errorMessage="errorMessage"
    legendText="Добавить книгу:"
  >
    <input v-model="ISBN" placeholder="ISBN" type="number" name="ISBN" />
    <input v-model="name" placeholder="Название книги" type="text" name="name" />
    <textarea v-model="authors" placeholder="Автор 1 | Автор 2 | Автор 3" type="text" name="authors" />
    <input v-model="image" placeholder="https://<Ссылка на фото>" type="text" name="image" />
    <input v-model="price" placeholder="100" type="number" name="price" />
    <textarea v-model="shortDescription" placeholder="Описание книги (кратко)" name="shortDescription" />
    <textarea v-model="category" placeholder="Категория 1 | Категория 2 | Категория 3" name="category" />
    <textarea v-model="tags" placeholder="Тег 1 | Тег 2 | Тег 3" type="text" name="tags" />
  </FormOfAdding>
</template>
