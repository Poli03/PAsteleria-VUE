<template>
    <div class="figuras">
    <!-- Tabla de figuras -->
     <h4>Adornos</h4>
     <table>
        <tr>
            <th> Estrellas </th>
            <th> Figuras Geometricas </th>
            <th> Numeros </th>
            <th> Letras </th>
        </tr>

        <tr>
            <td><img src="../assets/Estrella_pexels-asya-vlasova-3525771.jpg" alt="Figuras en forma de estrella"></td>
            <td><img src="../assets/Figuras_Geo_pexels-ekaterina-bolovtsova-7307618.jpg" alt="Figuras geometricas" ></td>
            <td><img src="../assets/Numeros_pexels-magda-ehlers-1329296.jpg" alt="Figuras numericas"></td>
            <td><img src="../assets/Letras_pexels-katya-wolf-8716269.jpg" alt="Figuras en letra"></td>
        </tr>

        <tr>
            <td>$20</td>
            <td>$15</td>
            <td>$10</td>
            <td>$20</td>
        </tr>
    </table>
    <p class="tcolor tcenter">Nota: El precio es por figura, letra o numero.</p><br>
    </div>
</template>

<script>
export default {
    name: 'figures'
}
</script>

<style scoped>
 img{
     width:80px; 
     height:80px; 
 }
</style>