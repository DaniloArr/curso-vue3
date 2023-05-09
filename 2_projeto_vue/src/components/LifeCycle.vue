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
        }, 1000);
        this.lifeCycle()
    },
    mounted() {
        setTimeout(() => {
            this.nome = "Joaozinho"
        }, 2000);
        this.lifeCycle()
    },
    methods: {
        lifeCycle() {
            console.log("Executed")
        }
    }
}
</script>