import Vue from 'vue'
import './plugins/element.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import routes from './routes'

Vue.use(ElementUI)

Vue.config.productionTip = false

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[window.location.pathname].components;
    }
  },
  render (h) {
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
      if (login === 'true') {
        // 用户已登录
        return 'hl';
      } else {
        return 'nl';
      }
    }
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})