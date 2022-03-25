<template>
  <div class="home">
    <img id="logo" alt="Vue logo" src="../assets/Kira_Pasteles.png">
    <p class="tcenter">Pasteleria Kira se pone a usus ordenes para preparar su pastel preferido</p>
    <Sabores/>
    <Figuras/>
    <Info/>
  </div>
</template>

<script>
import Info from "../components/info.vue"
import Sabores from "../components/flavors.vue"
import Figuras from "../components/figures.vue"

export default {
  name: 'HomeView',
  components: {
    Info,
    Sabores,
    Figuras
  }
}
</script>

<style>
table{
  margin-left: auto;
    margin-right: auto;
    border-spacing: 20px;
    border:2px;
}
#logo{
  width: 18%;
  height: 12%;
}
</style>
