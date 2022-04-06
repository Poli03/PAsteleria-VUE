<template>
    <div class="combinaFiguras">
        <Formulario/>
        <CombinaSab/>
        <h2>Selección de figuras</h2>
        <label for="topping1">Estrellas:</label>
        <input type="number" v-model="nombreChange" name="topping1" class="amount" min="0" max="100"><br> <br>
        <label for="topping2">Figuras Geometricas:</label>
        <input type="number" v-model="nombreChange" name="topping2" class="amount" min="0" max="100"><br> <br>
        <label for="topping3">Numeros:</label>
        <input type="number" v-model="nombreChange" name="topping3" class="amount" min="0" max="100"><br> <br>
        <label for="topping3">Letras:</label>
        <input type="number" v-model="nombreChange" name="topping4" class="amount" min="0" max="100"><br> <br>      
        
        <button @click="addForm" >Clic aquí para enviar</button><br><br>
    </div>
</template>

<script>
import Formulario from "../components/form.vue"
import CombinaSab from "../components/comFlavors.vue"
export default {
  name: 'comFigures',
  components:{
    Formulario,
    CombinaSab
  },
  methods:{
  addForm(){
      this.$store.dispatch('formChange')
      this.$store.dispatch('formChange2')
    }
  },
   computed: {
    estrellaChange: {
      get(){
        return this.$store.state.figures.estrella;
      },
      set(estrella){
        this.$store.commit("limonChange",estrella);
      }
    },
    geometricaChange: {
      get(){
        return this.$store.state.figures.geometrica;
      },
      set(geometrica){
        this.$store.commit("chocolateChange",geometrica);
      }
    },
    numeroChange: {
      get(){
        return this.$store.state.figures.numero;
      },
      set(numero){
        this.$store.commit("fresaChange",numero);
      }
    },
    letraChange: {
      get(){
        return this.$store.state.figures.letra;
      },
      set(letra){
        this.$store.commit("vainillaChange",letra);
      }
    }
  }    
}
</script>
<style scoped>
 #button{
     width: 150px;
     height: 23px;
     background-color: aqua;
 }
</style>