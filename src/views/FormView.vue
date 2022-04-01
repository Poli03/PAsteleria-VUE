<template>
  <div class="formulario">
    <h2>Porfavor proporcione la informacion requerida</h2>
    <CombinaFig/>
    <Info/>
  </div>
</template>

<script>
import CombinaFig from "../components/comFigures.vue"
import Info from "../components/info.vue"
export default {
  name: 'formview',
  components:{
    CombinaFig,
    Info
  }
}
</script>