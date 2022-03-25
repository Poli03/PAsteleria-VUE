<template>
    <div class="sabore">
        <!-- Tabla de sabores -->
    <h4>Sabores</h4>
    <table>
        <tr>
            <th> Limon </th>
            <th> Vainilla </th>
            <th> Fresa </th>
            <th> Chocholate </th>
        </tr>

        <tr>
            <td><img src="../assets/Pastel_Limon_pexels-pixabay-264939.jpg" alt="Pastel de Limon"></td>
            <td><img src="../assets/Pastel_Vainilla_pexels-marta-dzedyshko-7421264.jpg" alt="Pastel de vainilla"></td>
            <td><img src="../assets/Pastel_Fresa_pexels-ronmar-lacamiento-806363.jpg" alt="Pastel de Fresa" ></td>
            <td><img src="../assets/Pastel_chocolate_pexels-polina-tankilevitch-4109998.jpg" alt="Pastel de fresa" ></td>
        </tr>

        <tr>
            <td>$200 </td>
            <td>$150</td>
            <td>$180</td>
            <td>$200</td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    name: 'flavors'
}
</script>

<style scoped>
 img{
     width:100px;
     height:100px;
 }
</style>