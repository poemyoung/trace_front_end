<template>
  <div id="app">
      <router-view></router-view>
      <router-view name="menu_view" class="menu-container"></router-view>
      <router-view name="main_view" class="content-container"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
.menu-container {
  position: absolute;
  left: 20px;
  width: 250px
}
.content-container{
  position: absolute;
  left: 280px;
  width: 1100px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
}
</style>
