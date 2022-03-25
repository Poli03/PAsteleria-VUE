<template>
    <div class="formulario">
        <p>Nombre: <input type="text" id="name1" name="name1" placeholder="Tu nombre completo"></p>
        <p>Telefono: <input type="tel" id="tel1" name="tel1" maxlength="10" ></p>
        <p>Correo: <input type="email" id="email1" name="email1" ></p>
    </div>
</template>

<script>
export default {
    name: 'form'
}
</script>