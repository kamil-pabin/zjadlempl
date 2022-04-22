<template>
  <div class="home_new">
    <div class="background" id="backgroundFirst" >
      <b-img-lazy fluid class="backgroundImage" :src="images.image3" alt="background" />
    </div>
    <div class="background" id="backgroundSecond">
      <div>
        <h1 style="font-weight:600; color:white; text-transform:uppercase; ">Kącik Makłowicza</h1>
      </div>
      <div style=" width:70%; margin:auto; justif-content:center;">
        <b-card-group style="display:flex; justify-content:space-between;  align-items:stretch; height:fit-content; text-align:left;" deck>
          <b-card class="kartaMaklo" title="Makłowicz na nartach"  bg-variant="light" footer-bg-variant="light" style="max-width: 20rem;" >
            <b-card-img-lazy fluid class="backgroundImage" :src="images.maklo2" alt="background" style="height:70%;" />
            <b-card-text>
              Nadzieja włoskich alpejczyków trenująca w swej Macierzy przyłapana tuż przed udaniem się na stok.

            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href>https://www.instagram.com/p/CZwFlMtrek6/</a></small>
            </template>
          </b-card>

          <b-card class="kartaMaklo" title="Pyszności" bg-variant="light" footer-bg-variant="light" src="~images.maklo1"  style="max-width: 20rem;padding-bottom:1%;" img-alt="Image" img-top>
            <b-card-img-lazy fluid class="backgroundImage" :src="images.maklo3" alt="background" style="height:70%;" />
            <b-card-text style="">
              Miłego śniadanka i smacznej kawusi…
            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href>https://www.instagram.com/p/CZEhcNiIuvt/</a></small>
            </template>
          </b-card>

          <b-card class="kartaMaklo" title="Mandarynki" bg-variant="light" footer-bg-variant="light" style="max-width: 20rem;"  img-alt="Image" img-top>
            <b-card-img-lazy fluid class="backgroundImage" :src="images.maklo1" alt="background" style="height:70%;" />
            <b-card-text>
              Dziś na moim kanale Youtube premiera najnowszego i ostatniego odcinka z serii ukazującej półwysep Pelješac przed wakacyjnym sezonem.
            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href>https://www.instagram.com/p/CcpypRkoJCV/</a></small>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </div>
    <div class="background" id="backgroundFirst">
      <b-img-lazy fluid class="backgroundImage" :src="images.image2" alt="background" />
    </div>
    <div class="background" id="backgroundSecond">
     
    </div>
    <div class="background" id="backgroundFirst">
      <b-img-lazy fluid class="backgroundImage" :src="images.image4" alt="background" />
    </div>
    <div class="background" id="backgroundSecond">
     
    </div>
  </div>
</template>

<script>
import image1 from "../assets/background1.webp"
import image2 from "../assets/background2.webp"
import image3 from "../assets/background3.webp"
import image4 from "../assets/background4.webp"
import maklo1 from "../assets/maklowicz1.webp"
import maklo2 from "../assets/maklowicz2.webp"
import maklo3 from "../assets/maklowicz3.webp"

export default {
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
        maklo1,
        maklo2,
        maklo3,
      },
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>
.background:first-of-type{
  margin-top:-7%;
}
.background {
  height:40vh;
  width:100vw;
  background:white;
  display:flex;
  flex-direction:column;
  align-content: center;
  align-items: center;
  justify-content: center;
}
.background div{
  //width:100%;
}
.background:nth-child(odd){
  height:60vh;
  background:rgb(211, 211, 211);
}
.backgroundImage{
  //margin-top:-7%;
  height:100%;
  width:100vw;
  //background:red;
  object-fit: cover;
}
//.backgroundBlank{
//  background:blue;
//}
.home{
  text-align: center;
  width:100%;
  height:100%;
  color: white;
  padding:0;
  margin-left:0px;
  font-family: 'Raleway', sans-serif;
}
.kartaMaklo{
  transition: linear 0.2s;
}
.kartaMaklo:hover{
  transform: scale(1.05);
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
@keyframes fadeinA {
    0% { opacity: 0; }
    45% { opacity: 0; }
    100%   { opacity: 1; }
}
@media screen and (min-width: 1200px) {
  h1 {
     font-size: 2.3rem;
     margin-top:7vh;
  }
  #tlo{
    border-bottom-right-radius: 60% 25%;
    border-bottom-left-radius: 60% 25%;
    margin-bottom: 0px;
    padding: 20px;
    width: 100%;
    height: 40vh;
  }
}
@media screen and (max-width: 600px) {
  h1 {
     font-size: 1.3rem;
     margin-top:7vh;
  }
  #tlo{
    border-bottom-right-radius: 60% 25%;
    border-bottom-left-radius: 60% 25%;
    margin-bottom: 0px;
    padding: 20px;
    width: 100%;
    height: 40vh;
  }
}
</style>