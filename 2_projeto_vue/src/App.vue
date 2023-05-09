<style>
  body {
    background-color: azure;
    color: blueviolet;
    font-family: 'Courier New', Courier, monospace;
  }
  a {
    color:yellowgreen;
  }
  .color_test {
    background-color: cadetblue;
    border-radius: 2px;
    padding: 3px;
  }
</style>

<template>
  <div>
    <Header />
    <PrimeiroComponente />
    <p>Classe: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import LifeCycle from './components/LifeCycle.vue';
import Pessoa from './components/Pessoa.vue';
import Header from './components/Header.vue';

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      LifeCycle,
      Pessoa,
      Header
    },
    data() {
      return {
        testando: "App"
      }
    }
  }
</script>