<template>
    <div class="combinaFiguras">
        <h2>Selección de figuras</h2>
        <input type="checkbox" id="topping1" name="topping1" value="Estrella">
        <label for="topping1">Estrellas:</label>
        <input type="number" id="numero1" name="topping1" class="amount" min="0" max="100" value="0"><br> <br>
        <input type="checkbox" id="topping2" name="topping2" value="Fig_geo">
        <label for="topping2">Figuras Geometricas:</label>
        <input type="number" id="numero2" name="topping2" class="amount" min="0" max="100" value="0"><br> <br>
        <input type="checkbox" id="topping3" name="topping3" value="Numero">
        <label for="topping3">Numeros:</label>
        <input type="number" id="numero3" name="topping3" class="amount" min="0" max="100" value="0"><br> <br>
        <input type="checkbox" id="topping3" name="topping3" value="Letra">
        <label for="topping3">Letras:</label>
        <input type="number" id="numero4" name="topping4" class="amount" min="0" max="100" value="0"><br> <br>      
        <p><input type="submit" id="button" value="Clic aquí para enviar"></p>
    </div>
</template>

<style scoped>
 #button{
     width: 150px;
     height: 23px;
     background-color: aqua;
 }
</style>