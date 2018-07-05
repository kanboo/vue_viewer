<template>
  <header class="header">
    <div class="container">
      <!-- <span class="logo">
        Comicomic
      </span> -->
      <router-link to="/Home" class="logo">
        Comicomic
      </router-link>
    </div>
  </header>
</template>

<script>
// import { mapState, mapGetters, mapMutations } from 'vuex';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

export default {
  name: 'TheHeader',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      msg: 'TheHeader'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #000000;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  background: transparent;
}

.logo {
  color: #50ff44;
  font-size: 36px;
  font-weight: bold;
  font-style: italic;
}

.darkMode {
  .header {
    background: #50ff44;
  }

  .logo {
    color: #000000;
    background: #50ff44;
  }
}

</style>
