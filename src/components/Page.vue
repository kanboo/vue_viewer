<template>
  <div class="wrapper">

    <!-- <div is='TheHeader'></div> -->

    <main class="main">
      <div class="container">

        <div class="flickity-slider-demo">
          <flickity ref="flickity"
            class="flickityMain"
            :options="flickityOptions">

            <img class="carousel-cell-image"
              v-for="(url, index) in imgUrls" :key="index"
              :data-flickity-lazyload="url" alt="">

            <!-- <div class="carousel-cell"
              v-for="(url, index) in imgUrls" :key="index">
              <img :src="url" alt="">
            </div> -->
            <!-- <div class="carousel-cell">
              <img src="@/assets/material-storyboard-2.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="@/assets/material-storyboard-3.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="@/assets/material-storyboard-4.png" alt="">
            </div>
            <div class="carousel-cell">
              <img src="@/assets/material-storyboard-5.png" alt="">
            </div> -->
          </flickity>
        </div>
<div class="flickity-slider-demo">
        <div class="carousel-nav js-flickity"
          data-flickity-options='{ "asNavFor": ".flickityMain" }'>

          <!-- <img class="carousel-cell-image"
              v-for="(url, index) in imgUrls" :key="index"
              :data-flickity-lazyload="url" alt=""> -->
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
          <div class="carousel-cell"></div>
          <div class="carousel-cell"></div>
        </div>
</div>
      <!-- if you don't want to use the buttons Flickity provides -->
      <button @click="previous()">Custom Previous Button</button>
      <button @click="next()">Custom Next Button</button>

      <button @click="change(0)">1</button>
      <button @click="change(5)">6</button>
      <button @click="change(10)">11</button>

      </div>
    </main>

    <div is='TheFooter'></div>

  </div>
</template>

<script>
/* eslint global-require: 0 */
// import { mapState, mapGetters, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import Flickity from 'vue-flickity';
import 'flickity-as-nav-for';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default {
  name: 'Page',
  components: {
    FontAwesomeIcon,
    Flickity,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      // 原始：https://flickity.metafizzy.co/
      // Vue版：https://github.com/drewjbartlett/vue-flickity
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        lazyLoad: true

        // any options from Flickity can be used
      },
      flickityOptionsNav: {
        asNavFor: '.flickityMain',
        contain: true,
        pageDots: false
      },
      imgUrls: [
        require('@/assets/material-storyboard-1.png'),
        require('@/assets/material-storyboard-2.png'),
        require('@/assets/material-storyboard-3.png'),
        require('@/assets/material-storyboard-4.png'),
        require('@/assets/material-storyboard-5.png'),
        require('@/assets/material-storyboard-6.png'),
        require('@/assets/material-storyboard-7.png'),
        require('@/assets/material-storyboard-8.png'),
        require('@/assets/material-storyboard-9.png'),
        require('@/assets/material-storyboard-10.png'),
        require('@/assets/material-storyboard-11.png'),
        require('@/assets/material-storyboard-12.png')
      ]
    };
  },
  methods: {
    next() {
      this.$refs.flickity.next();
    },
    previous() {
      this.$refs.flickity.previous();
    },
    change(index) {
      this.$refs.flickity.select(index);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.wrapper {
  margin: 70px 0;
}

.flickity-slider-demo {
  overflow: hidden;
  width: 100%;
  max-width: 620px;
  margin-bottom: 20px;
}

// .carousel-cell {
//   position: relative;
//   width: 100%;
//   padding-bottom: 100%;

//   > img {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//   }
// }

.carousel {
  background: #fafafa;
  margin-bottom: 40px;
}

.carousel-cell-image {
  display: block;
  // min-width: 620px;
  width: 100%;
  height: 930px;
  transition: opacity 1s;
  opacity: 0;
}

/* fade in lazy loaded image */
.carousel-cell-image.flickity-lazyloaded,
.carousel-cell-image.flickity-lazyerror {
  opacity: 1;
}

// -------------------
.carousel {
  background: #fafafa;
  margin-bottom: 40px;
}

.carousel-cell {
  width: 100%;
  height: 200px;
  margin-right: 10px;
  background: #8c8;
  border-radius: 5px;
  counter-increment: carousel-cell;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  content: counter(carousel-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}

.carousel-nav .carousel-cell {
  height: 80px;
  width: 100px;
}

.carousel-nav .carousel-cell:before {
  font-size: 50px;
  line-height: 80px;
}

.carousel-nav .carousel-cell.is-nav-selected {
  background: #ed2;
}
</style>
