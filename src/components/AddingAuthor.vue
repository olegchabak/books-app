<script setup>
import FormOfAdding from "@/components/FormOfAdding.vue"
import { ref } from "vue";
const emit = defineEmits(["addAuthor"]);
const errorMessage = ref("");

const name = ref("");
const fullName = ref("");
const dateOfBirth = ref("");
const photo = ref("");
const country = ref("");
const books = ref("");

const addAuthor = () => {
  try {
    const author = {
      name: name.value,
      fullName: fullName.value,
      dateOfBirth: dateOfBirth.value,
      photo: photo.value,
      country: country.value,
      books: books.value?.split("|").map((i) => i.trim()),
    };
    validate(author);
    emit("addAuthor", author);
  } catch (error) {
    console.error(error);
    errorMessage.value = error.message;
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};
const validate = (author) => {
  if (
    !author ||
    !author.name ||
    !author.fullName ||
    !author.dateOfBirth ||
    !author.photo ||
    !author.country ||
    !author.books.length ||
    (author.books.length === 1 && author.books[0] === "")
  )
    throw new Error("Не все поля заполнены");
  return author;
};
</script>

<template>
  <FormOfAdding
    @submit="addAuthor"
    :errorMessage="errorMessage"
    legendText="Добавить автора:"
  >
    <input v-model="name" placeholder="Вася Пупкин" type="text" name="name">
    <input v-model="fullName" placeholder="Вася Васильевич Пупкин" type="text" name="full-name">
    <input v-model="dateOfBirth" placeholder="01 мая 1857 г." type="text" name="date-of-birth">
    <input v-model="photo" placeholder="https://<Ссылка на фото>" type="text" name="photo">
    <input v-model="country" placeholder="Россия" type="text" name="country">
    <textarea v-model="books" placeholder="Название книги 1 | Название книги 2 | Название книги 3" type="text" name="books" />
  </FormOfAdding>
</template>
