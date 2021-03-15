export default {
    routes : [
        {
            path : '/',
            components : 'Login',
            meta : {
                isLogin : false
            }
        },{
            path : '/idx',
            components : 'Idx',
            meta : {
                isLogin : true
            }
        }
    ]
}