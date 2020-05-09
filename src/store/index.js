import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogging: false,
    isLogged: false,
    userName: 'Krushil',
    liked: 0,
    allShows: []
  },
  mutations: {
    initialiseStore(state) {
      if(localStorage.getItem('isLogged')){
        state.isLogged = true;
        state.userName = localStorage.getItem('userName')
      }
    },
    setIsLogging (state) {
      state.isLogging = true
    },
    unsetIsLogging (state) {
      state.isLogging = false
    },
    setIsLogged (state , userName) {
      state.isLogging = false
      state.isLogged = true
      state.userName = userName
    },
    setLoggedOut (state) {
      state.isLogged = false
      state.userName = ''
    },
    setAllShows (state , shows) {
      state.allShows = shows;
    }
  },
  actions: {
    logginIn (context) {
      context.commit('setIsLogging')
    },
    unsetIsLogging (context) {
      context.commit('unsetIsLogging')
    },
    login (context , userName) {
      context.commit('setIsLogged' , userName)
      localStorage.setItem('isLogged', true)
      localStorage.setItem('userName',userName)
    },
    logout (context) {
      context.commit('setLoggedOut')
      localStorage.removeItem('isLogged')
      localStorage.removeItem('userName')
    },
    fetchAllShows (context) {
      fetch('https://api.jsonbin.io/b/5eb5b6c947a2266b1475189e/1').then(res => res.json())
      .then(res => {
        context.commit('setAllShows' , res.AllShows)
      })
      .catch(err => console.log(err))
    }
  }
})
