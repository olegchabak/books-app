<template>
  <h1>Page Profile</h1>
  <hr>
  <div class="profile-wrap">
    <aside class="profile-submenu">
      <ul class="profile-submenu__list">
        <li class="profile-submenu__item">
          <router-link :to="{ name: 'ProfileOrders' }" class="profile-submenu__link">Orders</router-link>
        </li>
        <li class="profile-submenu__item">
          <router-link :to="{ name: 'ProfileFavorites' }" class="profile-submenu__link">Favorites</router-link>
        </li>
        <li class="profile-submenu__item">
          <router-link :to="{ name: 'ProfileUser' }" class="profile-submenu__link">User</router-link>
        </li>
        <li class="profile-submenu__item">
          <router-link :to="{ name: 'ProfileOptions' }" class="profile-submenu__link">Options</router-link>
        </li>
      </ul>
    </aside>
    <main class="profile-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
.profile-wrap {
  display: flex;
}

.profile-submenu {
  padding-right: 30px;

  &__list {

  }
  &__item {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  &__link {
    display: block;
    padding: 5px 15px;
  }

  .profile-content {
    padding-left: 30px;
    border-left: 1px solid gray;
  }
}
</style>
