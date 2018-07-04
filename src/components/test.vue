<template>
  <div class="wrapper">

    <h1>Flickity - asNavFor</h1>

    <!-- Flickity HTML init -->
    <div class="carousel carousel-main" data-flickity>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
    </div>

    <div class="carousel carousel-nav">
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
      <div class="carousel-cell"></div>
    </div>

  </div>
</template>

<script>
/* eslint global-require: 0 */
/* eslint-disable */
// import { mapState, mapGetters, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Flickity from 'flickity';
// import 'flickity-as-nav-for';

export default {
  name: 'test',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      // 原始：https://flickity.metafizzy.co/
      // Vue版：https://github.com/drewjbartlett/vue-flickity
      pageCount: 12
    };
  },
  mounted() {
    var flkty = new Flickity('.carousel-main', {
      // options
    });

    var flkty2 = new Flickity('.carousel-nav', {
      asNavFor: '.carousel-main',
      contain: true,
      pageDots: false
    });
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

.carousel {
  margin-bottom: 40px;
  background: #fafafa;
}

.carousel-cell {
  width: 100%;
  height: 200px;
  margin-right: 10px;
  counter-increment: carousel-cell;
  border-radius: 5px;
  background: #88cc88;
}

/* cell number */
.carousel-cell:before {
  content: counter(carousel-cell);
  display: block;
  text-align: center;
  color: white;
  font-size: 80px;
  line-height: 200px;
}

.carousel-nav .carousel-cell {
  width: 100px;
  height: 80px;
}

.carousel-nav .carousel-cell:before {
  font-size: 50px;
  line-height: 80px;
}

.carousel-nav .carousel-cell.is-nav-selected {
  background: #eedd22;
}

</style>
