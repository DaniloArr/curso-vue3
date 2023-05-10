<template>
    <div>
        <button @click="ativar">Click here !</button>
        <span v-show="ativou"> &nbsp; Botão ativado</span>
    </div>
</template>
<script>
export default {
    name: 'Reutilizacao',
    data() {
        return {
            ativou: false
        }
    },
    methods: {
        ativar() {
            this.ativou = !this.ativou;
        }
    }
}
</script>