<template>
    <div class="combinaSabores">
        <h2>Selección de Sabor</h2>
        <input type="checkbox" id="Limon" v-model="limonChange" >
        <label for="Limon">Limon</label>
        <input type="checkbox" id="Chocolate" v-model="chocolateChange">
        <label for="Chocolate">Chocolate</label>
        <input type="checkbox" id="Fresa" v-model="fresaChange">
        <label for="Fresa">Fresa</label>
        <input type="checkbox" id="Vainilla" v-model="vainillaChange">
        <label for="Vainilla">Vainilla</label><br><br>
        <textarea name="txflavor" cols="80" rows="10"  v-model="proporChange"
        placeholder="Especifique la proporcion del sabor y el acomodo de alguna figura"></textarea><br>
    </div>
</template>

<script>
export default {
  name: 'comFlavors',
  computed: {
    limonChange: {
      get(){
        return this.$store.state.flavors.limon;
      },
      set(limon){
        this.$store.commit("limonChange",limon);
      }
    },
    chocolateChange: {
      get(){
        return this.$store.state.flavors.chocolate;
      },
      set(chocolate){
        this.$store.commit("chocolateChange",chocolate);
      }
    },
    fresaChange: {
      get(){
        return this.$store.state.flavors.fresa;
      },
      set(fresa){
        this.$store.commit("fresaChange",fresa);
      }
    },
    vainillaChange: {
      get(){
        return this.$store.state.flavors.vainilla;
      },
      set(vainilla){
        this.$store.commit("vainillaChange",vainilla);
      }
    },
    proporChange: {
      get(){
        return this.$store.state.flavors.proporcion;
      },
      set(proporcion){
        this.$store.dispatch("proporcionChange",proporcion);
      }
    }
  }
}
</script>