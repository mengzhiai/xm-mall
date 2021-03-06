import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/login',
            component: () =>
                import ( /* webpackChunkName: "about" */ './views/login/login.vue')
        },
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/homePage',
            children: [{
                    path: '/homePage',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/mall/homePage.vue')
                },
                {
                    path: '/detail',
                    component: () =>
                        import ( /* webpackChunkName: "about" */ './views/mall/detail.vue')
                }
            ]
        }
    ]
})