<template>
  <div class="wrapper">

    <div is='TheHeader'></div>

    <main class="main">
      <div class="container">

        <div class="toolBar">
          <h3>My Hexschool</h3>
          <select class="select select_chapter">
            <option value="c-1">Chapter 1</option>
            <option value="c-2">Chapter 2</option>
          </select>

          <select class="select select_page"
            v-model="selected"
            @change="change(selected)">
            <option v-for="(item, index) in imgUrls"
            :key="index"
            >Page {{index+1}}</option>
            <option value="p-1">Page 1</option>
            <option value="p-2">Page 2</option>
            <option value="p-3">Page 3</option>
            <option value="p-4">Page 4</option>
            <option value="p-5">Page 5</option>
            <option value="p-6">Page 6</option>
            <option value="p-7">Page 7</option>
            <option value="p-8">Page 8</option>
            <option value="p-9">Page 9</option>
            <option value="p-10">Page 10</option>
            <option value="p-11">Page 11</option>
            <option value="p-12">Page 12</option>
          </select>

          <div class="view_mode">
            <i class="fas fa-sun"></i>
            <input id="viewMode" type="checkbox" name="view_mode">
            <label for="viewMode"></label>
            <i class="fas fa-moon"></i>
          </div>
        </div>

        <div class="flickity-slider-demo">
          <flickity ref="flickity"
            class="flickityMain"
            :options="flickityOptions">

            <img class="carousel-cell-image"
              v-for="(url, index) in imgUrls" :key="index"
              :data-flickity-lazyload="url" alt="">
          </flickity>
        </div>

        <div class="flickity-slider-demo">
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
      pageCount: 12,
      selected: 0,
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
  mounted() {
    /* eslint-disable */
    // var flkty = new Flickity('.carousel-main', {
    //   // options
    // });

    var flkty2 = new Flickity('.carousel-nav', {
      asNavFor: '.flickityMain',
      contain: true,
      pageDots: false
    });
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
  margin-bottom: 40px;
  background: #fafafa;
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
.carousel-cell-image.flickity-lazyloaded,.carousel-cell-image.flickity-lazyerror {
  opacity: 1;
}

// -------------------
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
