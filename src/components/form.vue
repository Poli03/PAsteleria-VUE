<template>
    <div class="formulario">
        <p>Nombre: <input type="text" id="name1" v-model="nombreChange" placeholder="Tu nombre completo"></p>
        <p>Telefono: <input type="text" id="tel1" maxlength="10" v-model="telefonoChange"></p>
        <p>Correo: <input type="email" id="email1" v-model="correoChange"></p>
    </div>
</template>

<script>
export default {
  name: 'form',
  computed: {
    nombreChange: {
      get(){
        return this.$store.state.form.nombre;
      },
      set(nombre){
        this.$store.dispatch("nombreChange",nombre);
      }
    },
    telefonoChange: {
      get(){
        return this.$store.state.form.telefono;
      },
      set(telefono){
        this.$store.dispatch("telefonoChange",telefono);
      }
    },
    correoChange: {
      get(){
        return this.$store.state.form.correo;
      },
      set(correo){
        this.$store.dispatch("correoChange",correo);
      }
    }
  }
}
</script>