<template>
  <div class="pastelero">
    <h1>Pastelero</h1>
      <h1>Pedidos requeridos:</h1>
     <output>5</output>
     <p>Numero de pedido:</p>
     <input type="number" id="orders1" name="orders1" min="0" max="20" value="2"><br>
     <table>
        <tr>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo </th>
            <th> Sabores</th>
        </tr>
 
        <tr>
             <td>Martin Lara Rosas</td>
             <td><output>Martin Lara Rosas</output></td>
             <td><output>Martin12@correo.com</output></td>
             <td><output>Limon,vainilla</output></td>
        </tr>
    </table><br>
    <p>Especificaciones: </p><output>El pastel sera adornado asi....</output>
    <br><br>
    <p>Canitad de Adornos</p> 
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