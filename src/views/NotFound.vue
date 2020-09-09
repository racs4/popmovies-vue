<template>
  <div class="not-found">
    <h1 class="text-center"> Page not found </h1>
    <img src="@/assets/not_found.svg" alt="Not Found">
  </div>
</template>

<script>
export default {

};
</script>

<style>

.not-found {
  margin-top: 10vh;
  height: 90vh;
  padding: 0 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.not-found img {
  box-sizing: border-box;
  display: block;
  height: 50vh;
}
</style>
