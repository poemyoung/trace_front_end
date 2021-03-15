export default {
    '/': {
        path: '/',
        components: 'Login',
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
    }
}