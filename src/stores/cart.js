import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useCatalogStore } from "@/stores/catalog";

/**
 * // Options API style (передается объект с опциями)
 * export const useCartStore = defineStore("cart", {
 *   state: () => ({
 *     count: 0,
 *   }),
 *   getters: {
 *     doubleCount: (state) => state.count * 2,
 *   },
 *   actions: {
 *     increment() { this.count++ },
 *   },
 * });
 *
 * // Composition API style (передается функция)
 * export const useCartStore = defineStore("cart", () => {
 *   // ref() становятся state
 *   const count = ref(0);
 *   // computed() становится getters
 *   const doubleCount = computed(() => count.value * 2);
 *   // function() становится actions
 *   function increment() {
 *     count.value++;
 *   }
 *   return { count, doubleCount, increment };
 * });
 * */

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);

  const totalCount = computed(() =>
    cart.value.reduce((acc, item) => acc + item.count, 0)
  );
  const totalPrice = computed(() =>
    cart.value.reduce((acc, item) => acc + item.price * item.count, 0)
  );

  const createCartItem = (ISBN) => {
    const { books } = useCatalogStore();
    const catalogItem = books.find((el) => el.ISBN === ISBN);
    const { name, code, authors, image, price } = catalogItem;
    return {
      ISBN,
      name,
      code,
      authors,
      image,
      price,
      count: 1,
    };
  };

  const updateCartItem = (ISBN, count) => {
    const found = cart.value.find((el) => el.ISBN === ISBN);
    if (found) {
      found.count = count;
    } else {
      cart.value.push(createCartItem(ISBN));
    }
  };

  const deleteCartItem = (ISBN) => {
    const index = cart.value.findIndex((el) => el.ISBN === ISBN);
    cart.value.splice(index, 1);
  };

  const deleteAll = () => {
    cart.value.length = 0;
  };

  return {
    cart,
    totalCount,
    totalPrice,
    updateCartItem,
    deleteCartItem,
    deleteAll,
  };
});
