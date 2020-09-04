<template>
  <div id="app">
    <router-view />
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: { Header },
};
</script>

<style>

body {
  background-color: black;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
