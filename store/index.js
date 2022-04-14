import Vue from 'vue'
import Vuex from 'vuex'
/// акшо из vue , акшон меняет мутации , мутациии меняют состояние
Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    images_total: 0,
    images_loaded: 0
  },
  getters:{
      loaded_total: (state) => state.images_loaded,
      mounted_total: (state) => state.images_total
  },
  actions:{
    new_image_loaded({commit}){
        commit('image_loaded')
    },
    new_image_mounted({commit}){
        commit('image_mounted')
    }
  },
  mutations: {
    image_mounted (state) {
      state.images_total += 1
    },
    image_loaded (state) {
        state.images_loaded += 1
      }
  }
})

export default store