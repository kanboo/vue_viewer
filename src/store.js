// 參考範本：https://github.com/milkmidi/2017_vue_vuex_hello_world
/* eslint no-shadow:0, no-param-reassign:0 */
import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);

const state = {
  // totalCost: Math.floor(Vue.faker().random.number()),
  // netIncome: Math.floor(Vue.faker().random.number())
};

/**
computed:{
  ...mapGetters(['showLoading','isLogin','userName'])
},
 */
const getters = {
  // totalCost: state => state.totalCost,
  // netIncome: state => state.netIncome
};

// vue 裡用 this.$store.commit('showLoading' , true)
// mutation 必須是同步函數, 很重要
const mutations = {
  // totalCost(state, value) {
  //   state.totalCost = value;
  // },
  // netIncome(state, value) {
  //   state.netIncome = value;
  // }
};

/*
vue 裡用 this.$store.dispatch('showLoading' , true)
methods(){
  ...mapActions(['showLoading','count']),
}
Action 類似於 mutation，不同在於：
Action 提交的是 mutation，而不是直接變更狀態。
Action 可以包含任意異步操作。
Action 可以非同步，但一定只能 return Promise
*/
const actions = {
  showLoading({ commit }, value) {
    commit('showLoading', value);
  },
  login({ commit }, { email, password }) {
    return new Promise(resolve => {
      commit('showLoading', true);
      console.log('action login', email, password);
      setTimeout(async () => {
        const { data } = await axios.get('api.txt');
        if (data.status === 'ok') {
          commit('userName', data.name);
          // action 不應該直接修改 state 的值,
          // 要使用 commit 的方式呼叫 mutations 去改值
          // 以下寫法在嚴格模式會發生錯誤
          // state.isLogin = true;
          commit('isLogin', true);
        }
        resolve(data);
        commit('showLoading', false);
      }, 1000);
    });
  }
};

// https://vuex.vuejs.org/en/plugins.html
// Plugins
const myPlugin = store => {
  // called when the store is initialized
  store.subscribe(mutation => {
    // called after every mutation.
    console.log(mutation);
    // The mutation comes in the format of { type, payload }.
  });
};

export default new Vuex.Store({
  plugins: [myPlugin],
  state,
  getters,
  actions,
  mutations,
  strict: true
});
