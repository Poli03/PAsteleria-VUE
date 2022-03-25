<template>
  <div class="formulario">
    <h1>Porfavor proporcione la informacion requerida</h1>
    <Formulario/>
    <CombinaSab/>
    <CombinaFig/>
  </div>
</template>

<script>
import Formulario from "../components/form.vue"
import CombinaFig from "../components/comFigures.vue"
import CombinaSab from "../components/comFlavors.vue"
export default {
  name: 'formview',
  components:{
    Formulario,
    CombinaFig,
    CombinaSab
  }
}
</script>