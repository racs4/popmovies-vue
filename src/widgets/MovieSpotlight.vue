<template>
  <div class="card mb-3 bg-dark">
      <div class="row no-gutters">
      <div class="col-md-4">
      <img :src="`${image_url}/w780${movie.poster_path}`" class="card-img" alt="..." />
      </div>
      <div class="col-md-8">
          <div class="card-body">
          <h2 class="card-title spotlight-title">{{movie.title}}</h2>
          <p class="card-text spotlight-text"> {{movie.overview}} </p>
          <p class="card-text">
            <router-link :to="`/movie/${movie.id}`"> <span> See more </span></router-link>
          </p>
          <p class="card-text spotlight-text text-right">
            <small class="text-muted">Released in {{movie.release_date}}</small>
          </p>
          <span class="spotlight-rate"> {{movie.vote_average}} </span>
      </div>
      </div>
      </div>
  </div>
</template>

<script>
import { IMAGE_URL } from '@/config';

export default {
  props: {
    movie: {
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
  },
  computed: {
    image_url() {
      return IMAGE_URL;
    },
  },
};
</script>

<style scoped>

.spotlight-title {
    font-size: 2.5rem;
}

.spotlight-text {
    font-size: 1.25rem;
}

.spotlight-rate {
    position: absolute;
    bottom: 0;
    right: 0;
    background: yellow;
    color: black;
    padding: 0 5px;
    border-radius: 2px;
    font-size: 1.25rem;
    font-weight: 700;
}
</style>
