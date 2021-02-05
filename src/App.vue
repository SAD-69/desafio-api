<template>
  <v-app>
    <div id="app">
        <!-- <ul id="initial-navbar">
          <li><router-link to="/home"> Home </router-link></li> |
          <li><router-link to="/about"> About </router-link></li>
        </ul> -->
        <v-app-bar color="grey darken-4" dark>
          <!-- <v-app-bar-nav-icon>
            <v-icon>menu</v-icon>
          </v-app-bar-nav-icon> -->
          <v-avatar class="mx-3" :tile="true">
            <img :src="require('../public/vue-logo.png')" alt="logo">
          </v-avatar>

          <v-toolbar-title>Desafio API</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn class="mx-1" icon to="/home">
            <v-icon>fas fa-home</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon to="/cep">
            <v-icon>fas fa-map-marker-alt</v-icon>
          </v-btn>

          <v-btn class="mx-1" icon to="/castle">
            <v-icon>fab fa-fort-awesome</v-icon>
          </v-btn>

          <!-- <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn> -->
        </v-app-bar>

        <v-main>
          <div class="content">
            <router-view></router-view>
          </div>
        </v-main>
    </div>
  </v-app>
</template>

<script>

export default {
  data:() => ({
  }),
  name: 'App'
}
</script>

<style>
 #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;/* 
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  text-align: center;
  /* color: #2c3e50; */
}
.content {
  margin: 5%;
}

/* #initial-navbar > * {
  display: inline;
}
#initial-navbar a {
  text-decoration: none;
} */
</style>
