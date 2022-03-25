<template>
  <div class="formulario">
    <h2>Porfavor proporcione la informacion requerida</h2>
    <Formulario/>
    <CombinaSab/>
    <CombinaFig/>
    <Info/>
  </div>
</template>

<script>
import Formulario from "../components/form.vue"
import CombinaFig from "../components/comFigures.vue"
import CombinaSab from "../components/comFlavors.vue"
import Info from "../components/info.vue"
export default {
  name: 'formview',
  components:{
    Formulario,
    CombinaFig,
    CombinaSab,
    Info
  }
}
</script>