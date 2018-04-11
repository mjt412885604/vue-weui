import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: () =>
            import ('@/views/index')
    }, {
        path: '/home',
        name: 'home',
        component: () =>
            import ('@/views/home')
    }, {
        path: '/404',
        name: '404',
        component: () =>
            import ('@/views/404')
    }, {
        path: '*',
        redirect: '/404',
        hidden: true
    }]
})
