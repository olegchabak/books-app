import { computed, ref } from "vue";
import { books } from "@/store/catalog";

export const cart = ref([]);
export const totalCount = computed(() =>
  cart.value.reduce((acc, obj) => acc + obj.count, 0)
);
export const totalPrice = computed(() =>
  cart.value.reduce((acc, obj) => acc + obj.price * obj.count, 0)
);

const createCartItem = (ISBN) => {
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

export const updateCartItem = (ISBN, count) => {
  const found = cart.value.find((el) => el.ISBN === ISBN);
  if (found) {
    found.count = count;
  } else {
    cart.value.push(createCartItem(ISBN));
  }
};

export const deleteCartItem = (ISBN) => {
  const index = cart.value.findIndex((el) => el.ISBN === ISBN);
  cart.value.splice(index, 1);
};

export const deleteAll = () => {
  cart.value.length = 0;
};
