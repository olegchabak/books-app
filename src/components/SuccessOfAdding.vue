<template>
  <p>{{ entityName }} успешно добавлен(-а) в список!</p>
  <router-link :to="{ name: pageName, hash: '#end-list' }">
    Посмотреть в списке
  </router-link>
</template>

<script setup>
defineProps({
  entityName: String,
  pageName: String,
});
</script>

<style >

</style>
