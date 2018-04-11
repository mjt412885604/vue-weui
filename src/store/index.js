import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import * as user from './modules/user'
import * as errorLog from './modules/errorLog'

export default new Vuex.Store({
    modules: {
        user,
        errorLog
    }
})