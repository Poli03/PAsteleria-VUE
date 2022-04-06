<template>
  <div class="pastelero">
    <h1>Pastelero</h1>
      <h1>Pedidos requeridos:</h1>
     <p>{{$store.getters.pedido}}</p>
    <!-- <p>Numero de pedido:</p>
     <input type="number" min="0" max="99" value="4"><br>   falta crear funcion para selecionar cada pedido-->
     <table>
        <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo </th>
        </tr>
        <tr v-for="(form, index) in $store.state.arrayForm" :key="index">
             <td>{{form.nombre}}</td>
             <td>{{form.telefono}}</td>
             <td>{{form.correo}}</td>
        </tr>
    </table><br>
            <p><b>Sabores</b></p>
     <table>
        <tr v-for="(flavors, index) in $store.state.arrayFlavor" :key="index">
             <td v-if="flavors.limon">Limon</td>
             <td v-if="flavors.chocolate">Chocolate</td>
             <td v-if="flavors.fresa">Fresa</td>
             <td v-if="flavors.vainilla">Vainilla</td>
        </tr>
    </table><br>
    <p><b>Especificaciones: </b></p><output  v-for="(flavors, index) in $store.state.arrayFlavor" :key="index">
      <br>{{flavors.proporcion}} <br></output>
    <br><br>
    <p><b>Canitad de Adornos</b> </p> 
    <table>
        <tr>
            <th> Estrellas </th>
            <th> Geometricos </th>
            <th> Numeros </th>
            <th> Letras </th>
        </tr>
 
        <tr v-for="(figures, index) in $store.state.arrayFigure" :key="index">
             <td>{{figures.estrella}}</td>
             <td>{{figures.geometrico}}</td>
             <td>{{figures.numero}}</td>
             <td>{{figures.letra}}</td>
        </tr>
    </table><br>
    <!--<p>Elimina pedido seleccionado: </p>
    <button  >Eliminar pedido</button><br><br> falta funcion para eliminar pedido
  -->
  </div>
</template>

<script>
export default {
  name: 'baker'
}
</script>