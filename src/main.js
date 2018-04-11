// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import focus from './directives/focus'
import {
    install as pluginsUI
} from './plugins'

Vue.config.productionTip = false

import './css/main.scss'
import './errorLog' // error log
import './permission' // permission control

Vue.use(focus)
Vue.use(pluginsUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    template: '<App/>'
})
