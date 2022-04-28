<template>
  <div class="home_new">
    <div id="tlo">
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2" style="position:fixed; height:100%; width:100vw; object-fit:cover" />
      </div>
    </div>
    <div style="display:flex; justify-content:center; align-items:center; align-content:center;">
      <Maklowicz name="maklowicz"></Maklowicz>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/background1.webp"
import image2 from "../assets/background2.webp"
import image3 from "../assets/background3.webp"
import image4 from "../assets/background4.webp"
import Maklowicz from "../components/Maklowicz.vue"
export default {
  components: { Maklowicz},
  name: 'Home_new',
  metaInfo:{
    title: 'Zjadłem.pl | Podziel się swoją opinią!',
     htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Strona pozwalajaca ocenic jedzenie w restauracjach - Zjadlempl.' },
    ]
  },
  created() {
    if(this.$auth.isAuthenticated){
      if(this.$auth.user.email != null){ this.$store.state.currentUserEmail = this.$auth.user.email }else{this.$store.state.currentUserEmail = null;}
    }
    //this.$store.dispatch('bindRandomRestauracja');
  },
  data() {
    return {
      text: '',
      background: '',
      images: {
        image1,
        image2,
        image3,
        image4,
      },
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.home_new{
  width:100%;
  text-align: center;
  width:100%;
  display:flex;
  color:white;
  text-shadow: 4px 4px 6px rgb(0, 0, 0);
}
#tlo{
  position:absolute;
  padding:0;
  margin:0;
  z-index:-1;
}
h1{
  overflow: hidden;
  font-size:1.7rem;
  font-weight: 300;
  margin: 0;
  margin-top:7vh;
  padding:0;
  padding-bottom:3vh;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.521);
}
@media screen and (min-width: 1200px) {
}
@media screen and (max-width: 900px) {
}
@media screen and (max-width: 600px) {
  h1 {
     font-size: 1.3rem;
     margin-top:7vh;
  }
}
</style>