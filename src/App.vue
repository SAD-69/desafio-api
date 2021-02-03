<template>
  <div id="app">
    <ul id="initial-navbar">
      <li><router-link to="/home"> Home </router-link></li> |
      <li><router-link to="/about"> About </router-link></li>
    </ul>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#initial-navbar > * {
  display: inline;
}
#initial-navbar a {
  text-decoration: none;
}
</style>
