import Idx from './components/idx.vue'
import Nf404 from './pages/404.vue'
import Login from './components/login.vue'

export default {
    '/': {
        path: '/',
        components: Login,
        meta: {
            isLogin: false
        }
    },
    '/idx': {
        path: '/idx',
        components: Idx,
        meta: {
            isLogin: true
        }
    },
    '/nf404': {
        path: '/nf404',
        components: Nf404,
        meta: {
            isLogin: false
        }
    }
}