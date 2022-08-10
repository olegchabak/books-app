<template>
  <h1>Корзина</h1>
  <template v-if="cart && cart.length">
    <table class="cart-table">
      <thead>
        <tr>
          <th>№</th>
          <th>Обложка</th>
          <th>Название книги</th>
          <th>Автор книги</th>
          <th>Цена</th>
          <th>Количество</th>
          <th>Сумма</th>
          <th><button @click="deleteAll">Удалить все</button></th>
        </tr>
      </thead>
      <tbody>
        <CartTableItem
          v-for="(item, index) in cart"
          :key="item.ISBN"
          :item="item"
          :index="index"
        />
      </tbody>
      <tfoot>
        <tr>
          <td colspan="5" class="text-right bold">Итого:</td>
          <td colspan="1">{{ totalCount }} шт.</td>
          <td colspan="2">{{ totalPrice }} ₽</td>
        </tr>
      </tfoot>
    </table>
  </template>
  <template v-else>
    <p>Ваша корзина пуста</p>
    <p>
      <router-link :to="{ name: 'BooksPage' }">Перейти в каталог</router-link>
    </p>
  </template>
</template>

<script setup>
import { cart, totalPrice, totalCount, deleteAll } from "@/store/cart";
import CartTableItem from "@/components/cart/CartTableItem.vue";
</script>

<style lang="scss">
.cart-table {
  width: 100%;
  border-collapse: collapse;

  thead {}
  tbody {}
  tr { }
  td, th {
    border: 1px solid gray;
    padding: 5px 10px;
  }
  th {}
  td {}
}
</style>
