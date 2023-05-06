<template>
    <div>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Não estou trabalhando no momento</p>
        <p>Utilizo as seguintes linguagens</p>
        <ul>
            <li>JavaScript</li>
            <li>Java</li>
            <li>MySQL</li>
        </ul>
        <p v-show="mostrar_email">Email para qualquer dúvida: {{ email }}</p>
    </div>
</template>
<script>
    export default {
        name: 'Info',
        data() {
            return {
                esta_trabalhando: false,
                mostrar_email: true,
                email: 'bythewhei@gmail.com'
            }
        }
    }
</script>