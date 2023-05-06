<template>
    <div>
        <h1>Olá Danilo</h1>
        <p>Meu nome artístico {{ nome }} e tenho como profissão {{ profissao }}</p>
    </div>
</template>

<script>
    export default {
        name: 'PrimeiroComponente',
        data(){
            return {
                nome: "Danilin",
                profissao: "Garoto de Programa"
            }
        }
}

</script>
