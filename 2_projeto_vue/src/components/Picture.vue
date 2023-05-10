<template>
    <div>
        <img :src="avatar" :alt="descricao" style="width: 250px;">
        <mudarImagem @mudar-imagem="switchImage"/>
    </div>
</template>
<script>
import MudarImagem from './MudarImagem.vue'
import Reutilizacao from './Reutilizacao.vue'
export default {
  components: { 
        Reutilizacao, 
        MudarImagem 
    },
    name: 'Picture',
    data() {
        return{
            avatar: "/img/carangueijo.jpg",
            descricao: "pão de batata"
        }
    },
    methods: {
        switchImage() {
            if(this.avatar == "/img/carangueijo.jpg"){
                this.avatar = "/img/peixe.jpg";
            } else {
                this.avatar = "/img/carangueijo.jpg";
            }
            
        }
    }
}
</script>