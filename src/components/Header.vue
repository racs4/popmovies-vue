<template>
  <header>
    <router-link to="/">
      <h1 class="header-logo">PopMovies</h1>
    </router-link>
    <div class="header-search">
      <input
        placeholder="Search for movies..."
        :value="query"
        @keypress.enter="search"
        @input="search"
        type="text"
      />
      <router-link :to="`/search/${query}/1`">
        <i class="fas fa-search"></i>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      query: '',
    };
  },
  methods: {
    search(event) {
      this.query = event.target.value;
      this.$router.push(`/search/${this.query}/1`);
    },
  },
};
</script>

<style scoped>
header {
  background-color: transparent;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  position: absolute;
  top: 0;
  width: 100%;
  height: 10vh;
  text-shadow: black 2px 2px;
}

header h1 {
  font-family: "Pacifico", cursive;
}

header input {
  background-color: transparent;
  border: None;

  box-shadow: 0 0 0 0;
  outline: 0;
  color: lightcyan;
  font-size: 1rem;
  text-shadow: black 1px 1px;
}

header input:focus {
  background-color: transparent;
  box-shadow: 0 0 0 0;
  outline: 0;
}

header a {
  text-decoration: none;
  color: lightcyan;
}

i {
  font-size: 1.25rem;
}

@media (max-width: 425px) {
  header h1 {
    font-size: 2rem;
  }

  header input {
    font-size: 0.8rem;
  }

  header i {
    font-size: 0.75rem;
  }
}
</style>
