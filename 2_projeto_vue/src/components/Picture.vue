<template>
    <img :src="avatar" :alt="descricao" style="width: 250px;">
</template>
<script>
export default {
    name: 'Picture',
    data() {
        return{
            avatar: "/img/carangueijo.jpg",
            descricao: "Seu Sirigueijo"
        }
    }
}
</script>