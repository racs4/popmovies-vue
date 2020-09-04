<template>
  <div class="search-page">
      <h1>Search Page {{ $route.params.query }}  {{ $route.params.page }} </h1>
  </div>
</template>

<script>
export default {
  name: 'SearchPage',
};
</script>

<style>

.search-page {
    margin-top: 20vh;
}

</style>
