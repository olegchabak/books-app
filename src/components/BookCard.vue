<script setup>
import { computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";
import IconBase from "@/components/icons/IconBase.vue";
import IconCart from "@/components/icons/IconCart.vue";

const store = useCartStore();
const { cart } = storeToRefs(store);
const { updateCartItem } = store;

const emit = defineEmits(["deleteBook"]);

const props = defineProps({
  book: {
    type: Object,
    required: true,
  },
});

const bookInCart = computed(() =>
  cart.value.find((el) => el.ISBN === props.book?.ISBN)
);
const cartQuantity = ref(bookInCart.value?.count);
const sum = computed(() => props.book?.price * cartQuantity.value);

watch(bookInCart, () => {
  cartQuantity.value = bookInCart.value?.count;
});

const onClickBtn = () => {
  updateCartItem(props.book?.ISBN, cartQuantity.value || 1);
};
</script>

<template>
  <li class="list-item book" v-if="book">
    <a
      href="#"
      @click.prevent="emit('deleteBook', book)"
      class="delete"
      title="Удалить книгу из библиотеки"
    >
      <img src="@/assets/img/delete.svg" alt="delete" />
    </a>
    <router-link
      :to="{ name: 'BookPage', params: { code: book.code } }"
      class="book__main"
    >
      <h2>{{ book.name }}</h2>
      <div class="book-header">
        <img :src="book.image" :alt="book.name" class="book-image" />
        <p><span v-text="book.authors.join(', ')" /></p>
        <p>Цена: {{ book.price }}</p>
        <p>ISBN: {{ book.ISBN }}</p>
        <p v-if="book.category.length">
          Жанр: <span v-text="book.category.join(', ')" />
        </p>
        <p v-if="book.tags.length" class="tags">
          Теги: <small v-for="tag in book.tags" :key="tag">{{ tag }}</small>
        </p>
      </div>
      <p class="book-description">{{ book.shortDescription }}</p>
    </router-link>
    <div class="book__footer">
      <div v-if="bookInCart" class="book-controls">
        <span class="book-controls__quantity">
          Кол-во:
          <input
            type="text"
            v-model.number="cartQuantity"
            @change="onClickBtn"
          />
        </span>
        <span class="book-controls__sum">Сумма: {{ sum }} ₽</span>
        <router-link :to="{ name: 'CartPage' }" class="btn" title="Перейти в корзину">
          <icon-base icon-name="Cart" class="header-links__icon">
            <icon-cart />
          </icon-base>
        </router-link>
      </div>
      <button v-else class="btn cart-btn" @click.prevent="onClickBtn">
        В корзину
      </button>
    </div>
  </li>
</template>

<style lang="scss">
.book {
  display: flex;
  flex-direction: column;
  &__main {
    flex-grow: 1;
    text-decoration: none;
    color: inherit;
  }
  &__footer {
    flex-grow: 0;
  }

  &:hover {
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
  height: 100%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
  &__main {
    flex-grow: 1;
  }
  &__footer {
    flex-grow: 0;
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

.book-controls {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  &__quantity {
    input {
      width: 30px;
      text-align: center;
    }
  }

  &__sum {
  }
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 5px;
  cursor: pointer;
  border: 1px solid gray;
  background-color: #ddd;
  border-radius: 3px;
}

.cart-btn {
  width: 100%;

}
</style>
