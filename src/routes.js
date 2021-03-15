import App from './App.vue'

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
}