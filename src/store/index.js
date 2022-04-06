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
      estrella:null,
      geometrico:null,
      numero:null,
      letra:null
    },
    arrayForm:[ 
      {nombre:'Prueba Nombre',
     telefono:'1234567890',
     correo:'example@correo.com'}],
    arrayFlavor:[
     {proporcion:'Prueba descripcion',
      limon:true,
      vainilla:false,
      fresa:false,
      chocolate:true}],
    arrayFigure:[
      {estrella:0,
      geometrico:0,
      numero:0,
      letra:0}]
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
    },
    estrellaChange(state,estrella){
      state.figures.estrella=estrella;
    },
    geometricoChange(state,geometrico){
      state.figures.geometrico=geometrico;
    },
    numeroChange(state,numero){
      state.figures.numero=numero;
    },
    letraChange(state,letra){
      state.figures.letra=letra;
    },
    addForm3(state){
      state.arrayFigure=[state.figures,...state.arrayFigure];
      state.figures={
        estrella:null,
        geometrico:null,
        numero:null,
        letra:null
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
     formChange3({commit}){
      commit('addForm3');
     }
  },
  modules: {
  }
})
