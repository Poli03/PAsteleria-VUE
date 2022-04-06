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
      estrella:0,
      geometrica:0,
      numero:0,
      letra:0
    },
    arrayForm:[ 
      {nombre:'Jorge',
     telefono:'2345678901',
     correo:'example@correo.com'}],
    arrayFlavor:[
     {proporcion:'no hay',
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
    addproPorcion(state,proporcion){
      state.flavors.proporcion=proporcion;
    },
    addForm2(state){
      state.arrayFlavor=[state.flavors,...state.arrayFlavor];
      state.flavors={
        proporcion:null,
        limon:false,
        vainilla:false,
        fresa:false,
        chocolate:false
      };
     alert('formulario enviado con exito');
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
     },
     proporcionChange({commit},proporcion){
      commit('addproPorcion',proporcion);
     },
    formChange2({commit}){
      commit('addForm2');
     },
  },
  modules: {
  }
})
