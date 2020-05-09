import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  beforeCreate() {
		store.commit('initialiseStore');
	},
  render: h => h(App)
}).$mount('#app')
