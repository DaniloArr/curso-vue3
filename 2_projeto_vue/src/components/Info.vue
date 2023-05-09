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

        <div>
            <button @click="showEmail"> {{ textButton }}</button>
        </div>

        <p v-show="mostrar_email">Email para qualquer dúvida: {{ email }}</p>
        <p class="color_test">Acesse o meu Github <a v-bind:href="meu_link" target="_blank">clique aqui!</a> </p>
        <Picture />
    </div>
</template>
<script>
import Picture from './Picture.vue'
export default {
    components: { 
     Picture 
    },
    name: 'Info',
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            email: 'bythewhei@gmail.com',
            meu_link: 'https://github.com/DaniloArr',
            textButton: 'Mostrar e-mail'
        }
    },
    methods: {
        showEmail() {
            this.mostrar_email = !this.mostrar_email
            if(!this.mostrar_email){
                this.textButton = 'Mostrar e-mail'
            }else {
                this.textButton = 'Esconder e-mail'
            }
        }
    }
}
</script>