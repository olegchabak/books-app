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
      <router-link :to="{ name: 'ProfileHome' }" class="header-link">Profile</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

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
}
.header-link {
  display: inline-block;
  padding: 10px 0;
  margin-right: 30px;
  text-decoration: none;
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
</style>
