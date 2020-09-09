<template>
<div>
  <div class="movie-page" v-if="!loading">
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
            Revenue: {{selectedMovie.revenue | dollarFormat }}
          </p>
          <p v-if="selectedMovie.budget">
            Budget: {{selectedMovie.budget | dollarFormat }}
          </p>
          <p v-if="selectedMovie.status">
            Status: {{selectedMovie.status}}
          </p>
          <p v-if="selectedMovie.genres">
            Genres: {{genres}}
          </p>
          <p v-if="selectedMovie.vote_average">
            Rating: <span class="movie-rate" > {{selectedMovie.vote_average}} </span>
          </p>
          <a v-if="selectedMovie.homepage" :href="selectedMovie.homepage" >
            <p> Official Website </p>
          </a>
        </div>

      </div>

      <Section v-if="trailers.length" title="A taste...">
        <div class="row scroller">
          <div
            v-for="trailer in trailers"
            :key="trailer.key"
            class="embed-responsive embed-responsive-16by9 col-12 mr-5"
          >
            <iframe
              :title="selectedMovie.title" class="embed-responsive-item"
              :src="`https://www.youtube.com/embed/${trailer.key}?rel=0`" allowFullScreen>
            </iframe>
          </div>
        </div>
      </Section>

      <Section v-if="selectedMovie.similar.results.length" title="Similar movies">
        <div class="row scroller">
          <CardMovie
            class="col-lg-3 col-sm-3 col-6"
            v-for="movie in selectedMovie.similar.results"
            :key="movie.id"
            detail
            :movie="movie"
          />
        </div>
      </Section>

      <Section
        v-if="selectedMovie.recommendations.results.length"
        :title="`Because you searched '${selectedMovie.title}'`"
      >
        <div class="row scroller">
          <CardMovie
            class="col-lg-3 col-sm-3 col-6"
            v-for="movie in selectedMovie.recommendations.results"
            :key="movie.id"
            detail
            :movie="movie"
          />
        </div>
      </Section>

    </div>
  </div>

  <Loader v-else />

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { IMAGE_URL } from '@/config';
import CardMovie from '@/widgets/CardMovie.vue';
import Loader from '@/widgets/Loader.vue';
import Section from '@/components/Section.vue';

export default {
  components: {
    CardMovie, Section, Loader,
  },
  methods: {
    ...mapActions(['setSelectedMovie']),
  },
  computed: {
    ...mapGetters(['selectedMovie', 'loading']),
    image_url() {
      return IMAGE_URL;
    },
    genres() {
      return this.selectedMovie.genres
        ? this.selectedMovie.genres.map((obj) => `${obj.name}, `).reduce((a, b) => a + b, '').slice(0, -2)
        : null;
    },
    trailers() {
      return this.selectedMovie.videos.results.filter((video) => video.type === 'Trailer');
    },
  },
  created() {
    this.setSelectedMovie(this.$route.params.id);
  },
  beforeRouteUpdate(to, from, next) {
    if (to.params.id !== from.params.id) {
      this.setSelectedMovie(to.params.id);
    }
    next();
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

.scroller {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 30px 0;
  scrollbar-color: #888 rgba(255, 255, 255, 0.1);
  scrollbar-width: thin;

}
</style>
