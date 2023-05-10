<template>
    <div>
        <h2>Descrição da pessoa <br> Nome: {{ nome }}</h2>
        <Info :email="email" />
        <Form />
    </div>
    
</template>
<script>
import Info from './Info.vue';
import Form from './Form.vue';
    export default {
        name: 'Pessoa',
        components: {
            Info,
            Form
        },
        data() {
            return {
                nome:'Clebinho',
                email: 'danilinho@email.com'
            }
        }
    }
</script>