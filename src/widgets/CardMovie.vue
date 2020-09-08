<template>
  <div>
    <div class="movie-card-container" :class="{'detail-active': detail}">
      <div
        class="card bg-dark text-white movie-card"
        :class="{'detail-active': detail, detail: !isThereImg}"
      >
        <router-link :to="`/movie/${movie.id}`">

          <img
            class="card-img" v-show="isThereImg" :src="`${image_url}/w780${movie.poster_path}`"
            :alt="movie.title" />

          <div class="card-img-overlay">
            <h5 class="card-title movie-card-title" :class="{detail: isThereImg}">
              {{movie.title}}
            </h5>
            <p class="card-text movie-card-text detail">
              {{movie.overview}}
            </p>
            <span id="movie-rate">
              {{movie.vote_average === 0 ? "N/A" : movie.vote_average}}
            </span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { IMAGE_URL } from '@/config';

export default {
  props: {
    detail: {
      type: Boolean,
      default() { return false; },
    },
    movie: {
      type: Object,
      required: true,
      default() { return {}; },
    },
  },
  computed: {
    image_url() {
      return IMAGE_URL;
    },
    isThereImg() {
      return this.movie.poster_path !== null;
    },
  },
};
</script>

<style>
#movie-rate{
  position: absolute;
  font-weight: 700;
  bottom: 0;
  left: 0;
  color: black;
  background-color: yellow;
  border-radius: 2px;
  padding: 0 5px;
}

.movie-card {
  transition: all .3s ease;
  cursor: pointer;
  overflow: auto;
}

.movie-heart {
  color: red;
  position: absolute;
  right: 2%;
  bottom: 0;
  font-size: 2rem;
  cursor: pointer;
}

.empty {
  display: none;
}

.liked.empty {
  display: unset;
}

.liked.solid {
  display: none;
}

.movie-card.detail {
  height: 100%;
  display: block;
}

.movie-card-container {
  height: 100%;
  display: block;
}

.movie-card-container a {
  color: lightcyan;
}

.detail {
  display: none;
}

.detail-active.movie-card-container:hover {
  height: 100%;
}

.detail-active.movie-card-container:hover img {
  visibility: hidden;
}

.detail-active.movie-card a {
  text-decoration: none;
  color: lightcyan;
}

.detail-active.movie-card-container:hover .movie-card-title,
.detail-active.movie-card-container:hover .movie-card-text {
    display: block;
}

.detail-active.movie-card-container:hover #movie-year,
.detail-active.movie-card-container:hover #movie-rate{
    display: none;
}

.detail-active.movie-card-container:hover .movie-heart {
    color: white;
    transform: scale(0.75);
    transform: translate(-40%, -45%);
}

.movie-card-container {
    transform: translateZ(0);
    transition: all .5s ease;
}

.movie-card-container:hover {
    transform: scale(1.1);
}
</style>
