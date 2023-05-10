<template>
    <div>
        <h1>Olá Danilo</h1>
        <p>Meu nome artístico {{ nome }} e tenho como profissão {{ profissao }}</p>
        <MultiplosEventos />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'

    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos
        },
        data(){
            return {
                nome: "Danilin",
                profissao: "Garoto de Programa"
            }
        }
}

</script>
