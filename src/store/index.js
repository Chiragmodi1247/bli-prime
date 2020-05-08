import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogging: false,
    isLogged: false,
    email: '',
    liked: 0
  },
  mutations: {
    setIsLogging (state) {
      state.isLogging = true
    },
    unsetIsLogging (state) {
      state.isLogging = false
    },
    setIsLogged (state , email) {
      state.isLogging = false
      state.isLogged = true
      state.email = email
    },
    setLoggedOut (state) {
      state.isLogged = false
      state.email = ''
    }
  },
  actions: {
    logginIn (context) {
      context.commit('setIsLogging')
    },
    unsetIsLogging (context) {
      context.commit('unsetIsLogging')
    },
    login (context , email) {
      context.commit('setIsLogged' , email)
    },
    logout (context) {
      context.commit('setLoggedOut')
    }
  }
})
