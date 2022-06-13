<template>
  <header class="app-header">
    <div class="page-container">
      <ul class="header-links">
        <li>
          <a href="#/" class="header-link">Home</a>
        </li>
        <li>
          <a href="#/authors" class="header-link">Authors</a>
        </li>
        <li>
          <a href="#/books" class="header-link">Books</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
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
}
</style>
