<script setup>
import { ref } from "vue";

const form = ref(null);
const emit = defineEmits(["submit"]);
defineProps({
  errorMessage: {
    type: String,
    default: "",
  },
  legendText: {
    type: String,
    required: true,
  },
});

const onSubmit = () => {
  emit("submit");
  form.value.reset();
};
</script>

<template>
  <form @submit.prevent="onSubmit" class="adding-form" ref="form">
    <fieldset class="adding-form__fieldset">
      <legend v-text="legendText" />
      <slot>Тут должна быть форма добавления книги/автора</slot>
      <button>Добавить</button>
    </fieldset>
    <p v-if="errorMessage" v-text="errorMessage" style="color: red" />
    <p>
      <a
        href="https://www.livelib.ru/book/1007260045-bessonnitsa-stiven-king"
        class="footer-link"
        target="_blank"
        >Ссылки на картинки брать отсюда</a
      >
    </p>
  </form>
</template>

<style lang="scss">
.adding-form {
  position: sticky;
  top: 90px;

  &__fieldset {
    padding: 15px 30px;
    display: flex;
    flex-direction: column;

    & > legend {
      font-size: 1.5em;
      font-weight: bold;
    }

    & > input, & > textarea {
      padding: 5px 10px;
      font-size: 16px;
      margin-bottom: 15px;
    }

    & > button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
</style>
