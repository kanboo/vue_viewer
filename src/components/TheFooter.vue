<template>
  <footer class="footer">
    <div class="footer__text">
      <span>{{ title }}</span>
      <span>|</span>

      <span class="author">
        {{ author }}
      </span>
    </div>
    <a href="https://github.com/kanboo/" target="_blank" class="footer__link">
      <font-awesome-icon :icon="['fab', 'github']" />
    </a>
  </footer>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'TheFooter',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      title: 'Vue_Viewer',
      author: 'Designed by Kanboo Wang'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 5px 0;
  background-color: #323232;

  // flex-flow: row wrap;
  &__text {
    margin-right: 10px;
    letter-spacing: 1px;
    color: #ffffff;
    font-size: 14px;
    font-weight: 300;

    @media screen and (max-width: 414px) {
      padding-left: 16px;
    }
  }
  .author {
    font-size: 16px;
    // font-weight: 900;
  }
  &__link {
    // width: 100px;
    transition: transform .4s;
    text-align: center;
    color: #ffffff;
    font-size: 24px;

    &:hover {
      transform: rotate(400deg) scale(1.4);
      color: #f4e5c2;
    }

    @media screen and (max-width: 414px) {
      width: 100px;
      text-align: center;
    }
  }
}

</style>
