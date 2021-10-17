<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <mainSite msg="Witaj"/>
  </div>
</template>

<script>
// @ is an alias to /src
import mainSite from '@/components/mainSite.vue'

export default {
  name: 'Home',
  components: {
    mainSite,
  }
}
</script>
