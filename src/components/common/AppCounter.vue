<script setup>
import { useCartStore } from "@/stores/cart";
import { ref } from "vue";

const store = useCartStore();
const { updateCartItem: updateCartItemInStore } = store;

const inputRef = ref(null);

const props = defineProps({
  item: Object,
});

const count = ref(props.item.count);

function decrementCount() {
  if (count.value > 1) count.value--;
  updateCartItemInStore(props.item.ISBN, count.value);
}
function incrementCount() {
  count.value++;
  updateCartItemInStore(props.item.ISBN, count.value);
}
function changeCount() {
  inputRef.value.blur();
  if (count.value < 1) count.value = 1;
  updateCartItemInStore(props.item.ISBN, count.value);
}
// Если хотим отслеживать по @input, а не по @blur, то
// watch(count, () => {
//   updateCartItemInStore(props.item.ISBN, count.value);
// });
</script>

<template>
  <table class="counter">
    <tr>
      <td><button @click="decrementCount">-</button></td>
      <td>
        <input
          type="number"
          ref="inputRef"
          name="count"
          v-model.number="count"
          @blur="changeCount"
          @keyup.enter="changeCount"
        />
        шт.
      </td>
      <td @click="incrementCount"><button>+</button></td>
    </tr>
  </table>
</template>

<style lang="scss">
.counter {
  td {
    border: none !important;
  }
  button {
    cursor: pointer;
    font-size: 18px;
  }
  input {
    text-align: center;
    width: 30px;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>
