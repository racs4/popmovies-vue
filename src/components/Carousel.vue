<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li v-for="(movie, i) in movies"
          :key="movie.id"
          data-target="#carouselExampleIndicators"
          :data-slide-to="i"
          :class="{ active: (i === 0) }">
      </li>
    </ol>
    <div class="carousel-inner">
      <div
        v-for="(movie, i) in movies"
        :key="movie.id"
        class="carousel-item"
        :class="{active: i === 0}"
        :style="{backgroundImage: `url(${image_url}/original${movie.poster_path})`}"
      >
          <div class="carousel-caption d-none d-md-block">
            <router-link :to="{name: 'MoviePage', params: { id: movie.id }}">
              <h1 class="text-left"> {{movie.title}} </h1>
            </router-link>
            <p class="text-left" >
              {{ movie.overview }}
            </p>
          </div>
      </div>
    </div>
    <a
      class="carousel-control-prev"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#carouselExampleIndicators"
      role="button"
      data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
import { IMAGE_URL } from '@/config';

export default {
  props: {
    movies: {
      type: Array,
      required: true,
    },
  },
  computed: {
    image_url() { return IMAGE_URL; },
  },
};
</script>

<style>
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
