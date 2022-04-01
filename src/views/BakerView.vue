<template>
  <div class="pastelero">
    <h1>Pastelero</h1>
      <h1>Pedidos requeridos:</h1>
     <p>{{$store.getters.pedido}}</p>
     <p>Numero de pedido:</p>
     <input type="number" min="0" max="99" value="4"><br>
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
     <table>
        <tr>
            <th>Sabores</th>
        </tr>
        <tr>
             <td>limon ={{$store.state.flavors.limon}}</td>
             <td>chocolate ={{$store.state.flavors.chocolate}}</td>
             <td>fresa ={{$store.state.flavors.fresa}}</td>
             <td>vainilla ={{$store.state.flavors.vainilla}}</td>
        </tr>
    </table><br>
    <p><b>Especificaciones: </b></p><output>El pastel sera adornado asi....</output>
    <br><br>
    <p><b>Canitad de Adornos</b> </p> 
    <table>
        <tr>
            <th> Estrellas </th>
            <th> Figuras geometricas </th>
            <th> Numeros </th>
            <th> Letras </th>
        </tr>
 
        <tr>
             <td><output>12</output></td>
             <td><output>3</output></td>
             <td><output>20</output></td>
             <td><output>0</output></td>
        </tr>
    </table><br>
    <p>Adornos en almacen</p>
    <table>
       <tr>
           <th> Estrellas </th>
           <th> Figuras geometricas </th>
           <th> Numeros </th>
           <th> Letras </th>
       </tr>

       <tr>
            <td><input type="number" id="num1" name="num1" min="0" max="1000" value="50"></td>
            <td><input type="number" id="num1" name="num1" min="0" max="1000" value="25"></td>
            <td><input type="number" id="num1" name="num1" min="0" max="1000" value="3"></td>
            <td><input type="number" id="num1" name="num1" min="0" max="1000" value="128"></td>
       </tr>
   </table>
   <p><input type="submit" id="button" value="Clic para actualizar"></p>
  </div>
</template>

<script>
export default {
  name: 'baker'
}
</script>