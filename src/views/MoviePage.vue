<template>
  <div class="movie-page" v-if="selectedMovie">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-sm-12">
            <img v-if="selectedMovie.poster_path" class="card-img movie-img"
            :src="`${image_url}/w780${selectedMovie.poster_path}`"
            :alt="selectedMovie.title" />
        </div>
        <div class="col-lg-8 col-sm-12">
          <h1> {{selectedMovie.title}} </h1>
          <p> {{selectedMovie.overview}} </p>
          <p v-if="selectedMovie.release_date" >
            Release date: {{selectedMovie.release_date}}
          </p>
          <p v-if="selectedMovie.revenue">
            Revenue: {{conversor(selectedMovie.revenue)}}
          </p>
          <p v-if="selectedMovie.budget">
            Budget: {{conversor(selectedMovie.budget)}}
          </p>
          <p v-if="selectedMovie.status">
            Status: {{selectedMovie.status}}
          </p>
          <p v-if="selectedMovie.genres">
            Genres: {{genres}}
          </p>
          <!-- {{genres(selectedMovie.genres)}} -->
          <p v-if="selectedMovie.vote_average">
            Rating: <span class="movie-rate" > {{selectedMovie.vote_average}} </span>
          </p>
          <a v-if="selectedMovie.homepage" :href="selectedMovie.homepage" >
            <p> Official Website </p>
          </a>

      </div>
  </div>
   <div v-if="selectedMovie.videos.results.length" class="similar-movies mt-5">
      <h1> A taste... </h1>
      <div class="embed-responsive embed-responsive-16by9">
          <iframe  :title="selectedMovie.title" class="embed-responsive-item" :src="`https://www.youtube.com/embed/${selectedMovie.videos.results[0].key}?rel=0`" allowFullScreen></iframe>
      </div>
    </div>

    <div v-if="selectedMovie.similar.results.length"
         class="similar-movies mt-5 mb-5">
      <h1> Similar movies </h1>
      <div class="row">

          <div v-for="movie in selectedMovie.similar.results.slice(0,4)"
               :key="movie.id" class="col-lg-3 col-sm-3 col-6 mt-5">
              <CardMovie :movie="movie" :detail="true" />
          </div>

        </div>
    </div>

    <div v-if="selectedMovie.recommendations.results.length" class="similar-movies mt-5 mb-5">
      <h1> Because you watched "{{selectedMovie.title}}" </h1>
        <div class="row">
          <div v-for="movie in selectedMovie.recommendations.results.slice(0,4)"
              :key="movie.id" class="col-lg-3 col-sm-3 col-6 mt-5">
            <CardMovie :movie="movie" :detail="true" />
          </div>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IMAGE_URL } from '@/config';
import CardMovie from '@/widgets/CardMovie.vue';

export default {
  computed: {
    ...mapGetters(['selectedMovie']),
    image_url() {
      return IMAGE_URL;
    },
    genres() {
      return this.selectedMovie.genres
        ? this.selectedMovie.genres.map((obj) => `${obj.name}, `).reduce((a, b) => a + b, '').slice(0, -2)
        : null;
    },
  },
  components: {
    CardMovie,
  },
  methods: {
    ...mapActions(['setSelectedMovie']),
    conversor(number) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
    },
  },
  created() {
    this.setSelectedMovie(this.$route.params.id);
  },
};
</script>

<style scoped>

.similar-movies h1 {
    font-family: 'Pacifico', cursive;
}

.movie-page {
    margin-top: 20vh;
}

.movie-image {
    position: absolute;
}

.movie-rate {
    border-radius: 2px;
    background-color: yellow;
    color: black;
    padding: 0 5px;
    font-weight: 700;
}
</style>
