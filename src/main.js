import Vue from 'vue'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import routes from './routes'
import Nf404 from './pages/404.vue'

Vue.use(ElementUI)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      let ph = window.location.pathname;
      let status = this.userStatus(ph);
      switch (status) {
        case 'hl':
          return routes[ph].components;
        case 'nl':
          if (routes[ph].meta.isLogin) {
            window.location.href = '/';
            return routes['/'].components;
          } else {
            return routes[ph].components;
          }
          case '404':
            return Nf404;
      }
      return routes[window.location.pathname].components;
    }
  },
  render(h) {
    return h(this.ViewComponent);
  },
  methods: {
    userStatus(cr) {
      const tmp = routes[cr];
      if (!tmp) {
        return '404';
      }
      // 检查本地存储中用户是否登录过
      const login = localStorage.IsLogin;
      const d = localStorage.LoginTime;
      if (login == 'true' && this.dateExpire(d,new Date())) {
        // 用户已登录
        return 'hl';
      } else {
        return 'nl';
      }
    },
    dateExpire(oldDate, newDate) {
      if (Math.abs(newDate - oldDate) > (1000 * 60 * 60 * 24)) {
        return false;
      } else {
        return true;
      }
    }
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})