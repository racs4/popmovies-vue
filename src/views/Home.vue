<template>
  <main>
    <div class="main-carousel">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active" :style="{backgroundImage: 'url(https://i1.wp.com/socientifica.com.br/wp-content/uploads/2019/05/image_7150_1e-Hubble-Legacy-Field.jpg?fit=1920%2C1773&ssl=1)'}">
              <div class="carousel-caption d-none d-md-block">
                <h1 class="text-left">Titulo</h1>
                <p class="text-left" >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Amet ipsa quos reiciendis dolores, consectetur id veritatis dolorem,
                  sint autem, eius pariatur laboriosam
                  distinctio voluptatem! Consequuntur magnam obcaecati iusto veritatis
                  explicabo.
                </p>
              </div>
          </div>
          <div class="carousel-item">

          </div>
          <div class="carousel-item">

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
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {

  },
};
</script>

<style scoped>

.main-carousel {
  height: 100vh;
}

.carousel, .carousel-inner, .carousel-item {
  height: 100%;
}

.carousel-item {
  background-repeat: no-repeat;
  background-position: top center;
  background-clip: border-box;
  animation: posterShow 15s 1 ease-out;
  animation-fill-mode: forwards;
}

@keyframes posterShow {
    100% {background-position: center center;}
}
</style>
