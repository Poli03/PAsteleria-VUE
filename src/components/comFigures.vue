<template>
    <div class="combinaFiguras">
        <Formulario/>
        <CombinaSab/>
        <h2>Selección de figuras</h2>
        <label for="topping1">Estrellas:</label>
        <input type="number" v-model="estrellaChange" name="topping1" class="amount" min="0" max="100"><br> <br>
        <label for="topping2">Geometricos:</label>
        <input type="number" v-model="geometricoChange" name="topping2" class="amount" min="0" max="100"><br> <br>
        <label for="topping3">Numeros:</label>
        <input type="number" v-model="numeroChange" name="topping3" class="amount" min="0" max="100"><br> <br>
        <label for="topping3">Letras:</label>
        <input type="number" v-model="letraChange" name="topping4" class="amount" min="0" max="100"><br> <br>      
        
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
      this.$store.dispatch('formChange3')
    }
  },
   computed: {
    estrellaChange: {
      get(){
        return this.$store.state.figures.estrella;
      },
      set(estrella){
        this.$store.commit("estrellaChange",estrella);
      }
    },
    geometricoChange: {
      get(){
        return this.$store.state.figures.geometrico;
      },
      set(geometrico){
        this.$store.commit("geometricoChange",geometrico);
      }
    },
    numeroChange: {
      get(){
        return this.$store.state.figures.numero;
      },
      set(numero){
        this.$store.commit("numeroChange",numero);
      }
    },
    letraChange: {
      get(){
        return this.$store.state.figures.letra;
      },
      set(letra){
        this.$store.commit("letraChange",letra);
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