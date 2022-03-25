<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Form">Formulario</router-link> |
    <router-link to="/Baker">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
   background-color: antiquewhite;
   margin: 0px;
   padding: 0px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #be5329;
}
</style>
