<template>
    <div>
        <button @click="primeiro($event), segundo(txt_segundo, $event), terceiro(), quarto($event), quinto()">Ativar múltiplos eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>

<script>
export default {
    name: 'MultiplosEventos',
    data() {
        return {
            multiplos_eventos: "",
            txt_segundo: "Não to brincando "
        }
    },
    methods: {
        primeiro (e){
            this.multiplos_eventos = "Vou sumir !!!"
        },
        segundo(txt, e) {
            setTimeout(() => this.multiplos_eventos = txt, 500)
        },
        terceiro() {
            setTimeout(() => this.multiplos_eventos = "", 1500)
        },
        quarto(e) {
            setTimeout(() => this.multiplos_eventos = "Eu avisei", 3000)
        },
        quinto() {
            setTimeout(() => this.multiplos_eventos = "", 4000)
        },
    }
}
</script>

<style scoped>
    div {
        margin: 85px;

    }
</style>