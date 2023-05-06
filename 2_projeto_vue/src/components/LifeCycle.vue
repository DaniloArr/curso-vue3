<template>
    <h2>Meu nome é: {{ nome }}</h2>
</template>

<script>
export default {
    name: 'LyfeCycle',
    data() {
        return {
            nome: 'class LyfeCycle'
        }
    },
    created() {
        setTimeout(() => {
            this.nome = "Danilo"
        }, 1000)
    },
    mounted() {
        setTimeout(() => {
            this.nome = "Joaozinho"
        }, 2000)
    }
}
</script>