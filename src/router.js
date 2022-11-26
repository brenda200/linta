import Vue from 'vue'
import Router from 'vue-router'
import Principal from './views/principal.vue'


Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'princial',
            component: Principal
        }
    ]
})