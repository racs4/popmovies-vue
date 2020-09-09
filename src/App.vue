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

h1 {
  color: white;
  font-family: 'Pacifico', sans-serif;
}

a:hover {
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

/* width */
::-webkit-scrollbar {
width: 10px;
height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
background: #000000;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #555;
}
</style>
