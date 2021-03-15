<template>
  <div id="app">
      <Login :style="{display : login ? 'none' : 'block'}" v-on:has-login="hasLogin"/>
      <Idx :style="{display : login ? 'block' : 'none'}"/>
  </div>
</template>

<script>
import Login from './components/login.vue'
import Idx from './components/idx.vue'
export default {
  name: 'app',
  data() {
    return {
        login : false
    }
  },
  components: {
    Login,
    Idx
  },
  computed : {
    
  },
  methods : {
    hasLogin() {
      this.login = true;
    }
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
