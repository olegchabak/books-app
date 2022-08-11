<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import AppCounter from "@/components/common/AppCounter.vue";

const store = useCartStore();
const { deleteCartItem } = store;

const props = defineProps({
  item: {
    type: Object,
  },
  index: Number,
});

const sumPrice = computed(() => {
  return props.item.count * props.item.price;
});

function deleteFromCart() {
  deleteCartItem(props.item.ISBN);
}
</script>

<template>
  <tr>
    <td>{{ props.index + 1 }}</td>
    <td class="text-center">
      <router-link
        :to="{ name: 'BookPage', params: { code: props.item.code } }"
      >
        <img width="60" :src="props.item.image" :alt="props.item.name"/>
      </router-link>
    </td>
    <td>
      <router-link :to="{ name: 'BookPage', params: { code: props.item.code } }">
        {{ props.item.name }}
      </router-link>
    </td>
    <td>{{ props.item.authors.join(", ") }}</td>
    <td>{{ props.item.price }} ₽</td>
    <td>
      <AppCounter :item="props.item" />
    </td>
    <td>{{ sumPrice }} ₽</td>
    <td class="text-center">
      <button @click="deleteFromCart">Удалить</button>
    </td>
  </tr>
</template>

<style lang="scss">

</style>
