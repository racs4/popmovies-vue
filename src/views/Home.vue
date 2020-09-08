<template>
  <main>
    <div v-if="this.popMovies.length" class="main-carousel">
      <Carousel :movies="popMovies.slice(0,3)" />
    </div>

    <div class="container">
      <Section title="Popular Movies">
        <div class="row">
          <CardMovie
            class="col-lg-3 col-sm-6 col-6"
            v-for="movie in popMovies.slice(3,7)"
            :key="movie.id"
            detail
            :movie="movie"
          />
        </div>
      </Section>

      <Section title="Success" title-right >
        <div class="row">
          <div class="col-12">
            <MovieSpotlight :movie="popMovies[7]" />
          </div>
        </div>
      </Section>

      <Section title="See more...">
        <div class="row">
          <CardMovie
            class="col-lg-2 col-sm-3 col-6 mt-5"
            v-for="movie in popMovies.slice(8,20)"
            :key="movie.id"
            :movie="movie"
          />
        </div>
      </Section>
    </div>

  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import { IMAGE_URL } from '@/config';

import CardMovie from '@/widgets/CardMovie.vue';
import MovieSpotlight from '@/widgets/MovieSpotlight.vue';
import Section from '@/components/Section.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  name: 'Home',
  computed: {
    ...mapGetters(['popMovies']),
    image_url() {
      return IMAGE_URL;
    },
  },
  methods: {
    ...mapActions(['setPopMovies']),
  },
  components: {
    CardMovie, MovieSpotlight, Section, Carousel,
  },
  created() {
    this.setPopMovies();
  },
};
</script>

<style>

.main-carousel {
  height: 100vh;
}

.carousel, .carousel-inner, .carousel-item {
  height: 100%;
}

.carousel-item {
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  background-clip: border-box;
  animation: posterShow 15s 1 ease-out;
  animation-fill-mode: forwards;
}

@keyframes posterShow {
    100% {background-position: center center;}
}
</style>
