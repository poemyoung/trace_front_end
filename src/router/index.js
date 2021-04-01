import VueRouter from 'vue-router';
import Vue from 'vue';
import NF404d from '../pages/404.vue'
import Login from '../components/login.vue'
import Menu from '../components/menu.vue'
import Discom from '../components/discomp.vue'
import Workorder from '../components/womanage.vue'
import Index from '../components/index.vue'
import WoDeal from '../components/wodeal.vue'
import PMark from '../components/emergency/pmark.vue'

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);
const routes = [
    {
        path:'',
        redirect: '/home'
    },
    {
        path: '/index',
        components: {
            menu_view: Menu,
            main_view: Index
        }
    },
    {
        path: '/distribute',
        components: {
            menu_view: Menu,
            main_view: Discom
        }
    },
    {
        path: '/home',
        components:{
            default:Login
        } 
    },
    {
        path: '/workorder',
        components:{
            menu_view: Menu,
            main_view: Workorder
        }
    },
    {
        path:'/wodeal/:aid',
        components: {
            menu_view: Menu,
            main_view: WoDeal
        }
    },
    {
        path:"/pmark",
        components:{
            menu_view: Menu,
            main_view: PMark
        }
    },
    {
        path: '*',
        component: NF404d
    },
]

const router = new VueRouter({
    routes
})

export default router;