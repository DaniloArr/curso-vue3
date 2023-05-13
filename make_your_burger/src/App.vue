<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import FooterVue from './components/Footer.vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>
<style>

</style>
