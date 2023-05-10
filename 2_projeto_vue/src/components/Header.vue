<style scoped>
    ul{
        list-style: none;
        display: flex;
        background: #800606;
    }
    li {
        margin-right: 10px;
    }
    a {
        color: #DDD;
        text-decoration: none;
        transition: .5s;
    }
    a:hover {
        color: rgb(127, 206, 96);
    }
</style>

<template>
    <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#">Contato</a></li>
        <li v-if="entrou_user"><a href="#">Meu Perfil</a></li>
    </ul>
</template>

<script>
export default {
    name: 'Header',
    props: ["entrou_user"]
}
</script>

