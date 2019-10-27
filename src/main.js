import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import 'element-ui/lib/theme-chalk/index.css'
import './style/style/theme/index.css'
import ElementUI from 'element-ui'
import '@/style/common.scss'
Vue.config.productionTip = false
Vue.prototype.axios = axios
import VueLazyload from 'vue-lazyload'


Vue.use(VueLazyload, {
    // loading: require('img/loading.png'), //加载中图片，一定要有，不然会一直重复加载占位图
    // error: require('img/error.png') //加载失败图片
});
Vue.use(ElementUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')