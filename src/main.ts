import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { upperFirst, camelCase } from 'lodash'
import 'nprogress/nprogress.css'
import Vuelidate from 'vuelidate'
import { date } from '@/filters/date'
import { focus } from '@/directives/focus'

Vue.use(Vuelidate)
Vue.filter('date', date)
Vue.directive('focus', focus)

const requireComponent = require.context(
  // The relative path of the components folder
  './components',
  // Whether or not to look in subfolders
  false,
  // The regular expression used to match base component filenames
  /Base[A-Z]\w+\.(vue|js)$/
)

requireComponent.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requireComponent(fileName)
  const extractFileName = (fN: any) => {
    return fN
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
  }

  // Get PascalCase name of component
  const componentName = upperFirst(
    camelCase(extractFileName(fileName))
    // Gets the file name regardless of folder depth
  )

  // Register component globally
  Vue.component(
    componentName,
    // Look for the component options on `.default`, which will
    // exist if the component was exported with `export default`,
    // otherwise fall back to module's root.
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
