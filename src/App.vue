<template>
  <div id="app">
      <Login :adm="hh" :pwd="nihao"/>
  </div>
</template>

<script>
import Login from './components/login.vue'
export default {
  name: 'app',
  components: {
    Login
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
