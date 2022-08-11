<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";
import IconBase from "@/components/icons/IconBase.vue";
import IconCart from "@/components/icons/IconCart.vue";
import IconProfile from "@/components/icons/IconProfile.vue";

const store = useCartStore();
const { cart } = storeToRefs(store);

const countGoodsInCart = computed(() => cart.value.length);
</script>

<template>
  <header class="app-header">
    <div class="page-container menu-wrap">
      <ul class="header-links">
        <li>
          <router-link to="/" class="header-link">Home</router-link>
        </li>
        <li>
          <router-link to="/authors" class="header-link">Authors</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'BooksPage' }" class="header-link"
            >Books</router-link
          >
        </li>
      </ul>
      <ul class="header-links">
        <li>
          <router-link :to="{ name: 'ProfileHome' }" class="header-link">
            <icon-base icon-name="Profile" class="header-links__icon">
              <icon-profile />
            </icon-base>
            Profile
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'CartPage' }" class="header-link relative">
            <span v-if="countGoodsInCart" class="count-goods-in-cart">{{ countGoodsInCart }}</span>
            <icon-base icon-name="Cart" class="header-links__icon">
              <icon-cart />
            </icon-base>
            Cart
          </router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="scss">
.app-header {
  position: sticky;
  top: 0;
  padding: 10px 0;
  background-color: #fff;
  box-shadow: 1px 1px 15px #eee;
  z-index: 10;
}
.header-links {
  display: flex;
  &__icon {
    margin-right: 5px;
  }
}
.header-link {
  display: inline-flex;
  align-items: center;
  padding: 10px 0;
  text-decoration: none;
  line-height: 1;
  margin-right: 30px;
}
.router-link-active {
  color: cadetblue;
  text-decoration: underline;
}
.router-link-exact-active {
  color: darkgreen;
  cursor: default;
}

.menu-wrap {
  display: flex;
  justify-content: space-between;
}

.count-goods-in-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 8px;
  background: orangered;
  color: white;
  border-radius: 500px;
  line-height: 0;
  padding: 7px 5px;
  position: absolute;
  left: 10px;
  top: 1px;
}
</style>
