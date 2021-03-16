import App from './App.vue'
import Nf404 from './pages/404.vue'

export default {
    '/': {
        path: '/',
        components: App,
        meta: {
            isLogin: false
        }
    },
    '/idx': {
        path: '/idx',
        components: 'Idx',
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