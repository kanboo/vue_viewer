<template>
  <div class="wrapper">

    <div is='TheHeader'></div>

    <main class="main">
      <div class="container">

        <div class="comics">
          <div class="comics__img" :style="{ backgroundImage: 'url(' + comics.imgUrl + ')' }"></div>
          <div class="comics__context">
            <h1 class="comics__context__title">{{ comics.title }}</h1>

            <div class="comics__context__info">
              <ul>
                <li>
                  <h3>Genres</h3>
                  <span>{{ comics.genres }}</span>
                </li>
                <li>
                  <h3>Author</h3>
                  <span>{{ comics.author }}</span>
                </li>
                <li>
                  <h3>Status</h3>
                  <span>{{ comics.status }}</span>
                </li>
                <li>
                  <h3>Rate</h3>
                  <span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                  </span>
                </li>
              </ul>
            </div>
            <div class="comics__context__summary">
              <h3>Summary</h3>
              <p v-html="comics.summary"></p>
            </div>
          </div>
        </div>

        <div class="chapters">
          <div class="chapters__tags">
            <div class="chapters__tags__item">
              All Chapters
            </div>
          </div>
          <div class="chapters__list">
            <div class="chapters__list__item">
              <router-link to="/Page">
                Chapter 1: The F2E Challenge Start!
              </router-link>
            </div>
            <div class="chapters__list__item">
              <router-link to="/Page">
                Chapter 2: Todo List is Going Crazy!
                <span class="newChapter">NEW</span>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </main>

    <div is='TheFooter'></div>

  </div>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

export default {
  name: 'Home',
  components: {
    FontAwesomeIcon,
    TheHeader,
    TheFooter
  },
  data() {
    return {
      comics: {
        // eslint-disable-next-line
        imgUrl: require('@/assets/material-comic-cover.png'),
        title: 'MY HEXSCHOOL',
        genres: 'Fusce/vehicula/dolor',
        author: 'Namae Shiranai',
        status: 'Ongoing',
        rate: 4,
        summary:
          'If your banker breaks, you snap; if your apothecary by mistake sends you poison in your pills, you die.<br><br>Therefore, I say, I saw that this situation of mine was the precise situation of every mortal that has this Siamese connexion with a plurality of other mortals.'
      }
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lagn="scss">
</style>
