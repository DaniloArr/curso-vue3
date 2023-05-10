<template>
    <div>
        <reutilizacao />
        <h1>Olá Danilo</h1>
        <p>Meu nome artístico {{ nome }} e tenho como profissão {{ profissao }}</p>
        <MultiplosEventos />
        <reutilizacao />
    </div>
</template>

<script>
import MultiplosEventos from './MultiplosEventos.vue'
import Reutilizacao from './Reutilizacao.vue'

    export default {
        name: 'PrimeiroComponente',
        components: {
            MultiplosEventos,
                Reutilizacao
        },
        data(){
            return {
                nome: "danilindosolo",
                profissao: "Garoto de Programa"
            }
        }
}

</script>
