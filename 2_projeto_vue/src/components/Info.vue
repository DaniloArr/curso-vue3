<template>
    <div>
        <p>{{ email }}</p>
        <p v-if="esta_trabalhando">Estou trabalhando no momento</p>
        <p v-else>Não estou trabalhando no momento</p>
        <p>Utilizo as seguintes linguagens para backend</p>
        <ul>
            <li v-for="(technology, index) in backend_technologies" v-bind:key="index">
                {{ technology }}
            </li>
        </ul>
        <p>Utilizo as seguintes tecnologias para front-end</p>
        <ul>
            <li v-for="technology in frontend_technologies" :key="technology.id">
                {{ technology.language }}
            </li>
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
    name: 'Info',
    components: { 
     Picture 
    },
    props: {
        email: String
    },
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            meu_link: 'https://github.com/DaniloArr',
            textButton: 'Mostrar e-mail',
            backend_technologies: ['Java', 'Python', 'PHP'],
            frontend_technologies: [
                {id: 1, language: 'Bootstrap'},
                {id: 2, language: 'Vue'},
                {id: 3, language: 'Quasar'}

            ]
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