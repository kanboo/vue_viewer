<template>
  <div class="wrapper" :class="{ 'darkMode' : isDark }">

    <div is='TheHeader'></div>

    <main class="main" >
      <div class="container">

        <div class="toolBar">
          <h3>
            My Hexschool
            <i class="fas fa-caret-right"></i>
          </h3>

          <select class="select select_chapter">
            <option value="c-1">Chapter 1</option>
            <option value="c-2">Chapter 2</option>
          </select>

          <select class="select select_page"
            v-model="currPage"
            @change="changePage()">
            <option
            v-for="(item, index) in imgUrls"
            :key="index"
            :value="index">
              Page {{index+1}}
            </option>
          </select>

          <div class="view_mode">
            <i class="fas fa-sun"></i>
            <input id="viewMode" type="checkbox" name="view_mode" v-model="isDark">
            <label for="viewMode"></label>
            <i class="fas fa-moon"></i>
          </div>
        </div>


        <div class="flickity-slider-main">
          <div class="carousel carousel-main">
            <div class="carousel-cell" v-for="(url, index) in imgUrls" :key="index">
              <img class="carousel-image" :data-flickity-lazyload="url">
            </div>
          </div>
        </div>

        <div class="flickity-slider-nav">
          <div class="carousel carousel-nav">
            <div class="carousel-cell" v-for="(url, index) in imgUrls" :key="index">
              <img class="carousel-image" :data-flickity-lazyload="url">
            </div>
          </div>
        </div>

      </div>
    </main>

    <div is='TheFooter'></div>

  </div>
</template>

<script>
/* eslint global-require: 0 */
// import { mapState, mapGetters, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

const Flickity = require('flickity');
require('flickity-as-nav-for');

export default {
  name: 'Page',
  components: {
    FontAwesomeIcon,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      // 原始：https://flickity.metafizzy.co/
      flkty: null,
      flktyNav: null,
      currPage: 0,
      isDark: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false,
        lazyLoad: true,
        contain: true
      },
      flickityOptionsNav: {
        asNavFor: '.carousel-nav',
        lazyLoad: true,
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
    this.flkty = new Flickity('.carousel-main', this.flickityOptions);
    this.flktyNav = new Flickity('.carousel-nav', {
      asNavFor: '.carousel-main',
      lazyLoad: 5,
      contain: true,
      pageDots: false
    });

    this.flkty.on('change', index => {
      // console.log(index);
      this.currPage = index;
    });
  },
  methods: {
    changePage() {
      this.flkty.select(this.currPage);
    },
    updatePage(index) {
      this.currPage = index;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
