// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)
Vue.config.productionTip = false
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faSpinner, faHandshake, faMailBulk ,faFileCode} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee, faSpinner, faHandshake, faMailBulk, faFileCode)
Vue.component('font-awesome-icon', FontAwesomeIcon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    // 使用するデータ
  },
})
