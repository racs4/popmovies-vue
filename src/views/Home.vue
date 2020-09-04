<template>
  <main>
    <div v-if="this.popMovies.length" class="main-carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active"
      :style="{backgroundImage: `url(${this.image_url}/original${this.popMovies[0].poster_path})`}">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-left"> {{this.popMovies[0].title}} </h1>
                <p class="text-left" >
                  {{ this.popMovies[0].overview }}
                </p>
              </div>
          </div>
          <div class="carousel-item"
      :style="{backgroundImage: `url(${this.image_url}/original${this.popMovies[1].poster_path})`}">
             <div class="carousel-caption d-none d-md-block">
                <h1 class="text-left"> {{this.popMovies[1].title}} </h1>
                <p class="text-left" >
                  {{ this.popMovies[1].overview }}
                </p>
              </div>
          </div>
          <div class="carousel-item"
    :style="{backgroundImage: `url(${this.image_url}/original${this.popMovies[2].poster_path})`}">>
             <div class="carousel-caption d-none d-md-block">
                <h1 class="text-left"> {{this.popMovies[2].title}} </h1>
                <p class="text-left" >
                  {{ this.popMovies[2].overview }}
                </p>
              </div>
          </div>
          <div class="carousel-item"
    :style="{backgroundImage: `url(${this.image_url}/original${this.popMovies[3].poster_path})`}">>
             <div class="carousel-caption d-none d-md-block">
                <h1 class="text-left"> {{this.popMovies[3].title}} </h1>
                <p class="text-left" >
                  {{ this.popMovies[3].overview }}
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
    </div>
    <div class="content container">
      <section>
        <div class="mt-5">
          <h1>Popular movies</h1>
          <div class="row pt-5 pb-5">
            <div v-for="movie in popMovies.slice(3,7)"
                 :key="movie.id" class="col-lg-3 col-sm-6 col-6 mt-5">
              <CardMovie :detail="true" :movie="movie" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mt-5">
          <h1 class="text-right">Success</h1>
          <div class="row mt-5">
            <div class="col-12">
              <MovieSpotlight :movie="popMovies[7]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="mt-5 mb-5">
          <h1>See more...</h1>
          <div class="row">
            <div v-for="movie in popMovies.slice(8,20)" :key="movie.id"
              class="col-lg-2 col-sm-3 col-6 mt-5">
              <CardMovie :movie="movie"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex';
import { IMAGE_URL } from '@/config';

import CardMovie from '@/widgets/CardMovie.vue';
import MovieSpotlight from '@/widgets/MovieSpotlight.vue';

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
    CardMovie, MovieSpotlight,
  },
  created() {
    this.setPopMovies();
  },
};
</script>

<style>

h1 {
  color: white;
  font-family: 'Pacifico', sans-serif;
}

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

section {
  margin-top: 10vh;
}
</style>
