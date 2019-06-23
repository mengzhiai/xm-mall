import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    menuList:{}
  },
  mutations: {
    addCount(state,num){
      return (state.count += num)
    },
    subtractCount(state,num){
      return (state.count -= num)
    },
    undateMenu(state,data){
      state.menuList = data;
    }
  },
  actions: {

  }
})
