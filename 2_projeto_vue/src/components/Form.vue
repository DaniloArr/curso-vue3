<template>
    <div>
        <h3>Formulário: </h3>
        <form action="" @submit="enviarFormulario($event)">
            <div>
                <input type="text" v-model="name">
            </div>
            
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <Submit />
            </div>
        </form>
    </div>
</template>
<script>
import InputText from './form/InputText.vue'
import Submit from './form/Submit.vue'
    export default {
        name: 'Form',
        components: {
            InputText,
            Submit
        },
        data(){
            return {
                name: "Nome",
                email: "email@email.com"
            }
        },
        methods: {
            enviarFormulario(e) {
                e.preventDefault()
                const name = this.name;
                const email = this.email;
                console.log('Formulário enviado');
                console.log("Nome ->" + name);
                console.log("Email ->" +email);
            }
        }
    }
</script>

<style scoped>
    p {
        margin: 78px;
    }
</style>