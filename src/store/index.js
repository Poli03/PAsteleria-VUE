import { stringifyQuery } from 'vue-router';
import { createStore } from 'vuex'

export default createStore({
  state: {
    form:{
      nombre:null,
      telefono:null,
      correo:null
    },
    flavors:{
      proporcion:null,
      limon:false,
      vainilla:false,
      fresa:false,
      chocolate:false
    },
    figures:{
      stars:0,
      geometric:0,
      number:0,
      letters:0
    },
    arrayForm:[ 
      {nombre:'Jorge',
     telefono:'2345678901',
     correo:'example@correo.com'}],
    arrayFlavor:[
     {proporcion:null,
      limon:false,
      vainilla:false,
      fresa:false,
      chocolate:false}]
  },
  getters: {
    pedido(state){
      return state.arrayForm.length;
    }
  },
  mutations: {
    addNombre(state,nombre){
      state.form.nombre=nombre;
    },
    addTelefono(state,telefono){
      state.form.telefono=telefono;
    },
    addCorreo(state,correo){
      state.form.correo=correo;
    },
    addForm(state){
      state.arrayForm=[state.form,...state.arrayForm];
      state.form={
        nombre:null,
        telefono:null,
        correo:null
      };
     alert('formulario enviado con exito');
    },
    limonChange(state,limon){
      state.flavors.limon=limon;
    },
    chocolateChange(state,chocolate){
      state.flavors.chocolate=chocolate;
    },
    fresaChange(state,fresa){
      state.flavors.fresa=fresa;
    },
    vainillaChange(state,vainilla){
      state.flavors.vainilla=vainilla;
    },
    
  },
  actions: {
    nombreChange(context,nombre){
      context.commit('addNombre',nombre);
     },
    telefonoChange(context,telefono){
      context.commit('addTelefono',telefono);
     },
    correoChange(context,correo){
      context.commit('addCorreo',correo);
     }, 
    formChange({commit}){
      commit('addForm');
     }
  },
  modules: {
  }
})
