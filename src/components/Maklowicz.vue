<template>
     <div class="maklowiczThing">
        <div style="width:100%;">
          <h1 style="font-weight:600; color:white; text-transform:uppercase; ">Kącik Makłowicza</h1>
        </div>
        <b-card-group class="maklowiczCardGroup" deck>
          <b-card class="kartaMaklo" title="Makłowicz na nartach"  bg-variant="light" footer-bg-variant="light"  >
            <b-card-img-lazy fluid class="backgroundImage" :src="images.maklo2" alt="background" />
            <b-card-text>
              Nadzieja włoskich alpejczyków trenująca w swej Macierzy przyłapana tuż przed udaniem się na stok.

            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href="https://www.instagram.com/p/CZwFlMtrek6/">Oryginalny post</a></small>
            </template>
          </b-card>

          <b-card class="kartaMaklo" title="Pyszności" bg-variant="light" footer-bg-variant="light" src="~images.maklo1"  img-alt="Image" img-top>
            <b-card-img-lazy fluid class="backgroundImage" :src="maklo ? images.maklo3 : images.maklo3b" alt="background" />
            <b-card-text style="">
              Miłego śniadanka i smacznej <span @click='maklo = !maklo' >kawusi...</span>
            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href="https://www.instagram.com/p/CZEhcNiIuvt/">Oryginalny post</a></small>
            </template>
          </b-card>

          <b-card class="kartaMaklo" title="Mandarynki" bg-variant="light" footer-bg-variant="light"  img-alt="Image" img-top>
            <b-card-img-lazy fluid class="backgroundImage" :src="images.maklo1" alt="background" />
            <b-card-text>
              Dziś na moim kanale Youtube premiera najnowszego i ostatniego odcinka z serii ukazującej półwysep Pelješac przed wakacyjnym sezonem.
            </b-card-text>
            <template #footer>
              <small class="text-muted"><a href="https://www.instagram.com/p/CcpypRkoJCV/">Oryginalny post</a></small>
            </template>
          </b-card>
        </b-card-group>
      </div>
</template>


<script>

import maklo1 from "../assets/maklowicz1.webp"
import maklo2 from "../assets/maklowicz2.webp"
import maklo3 from "../assets/maklowicz3.webp"
import maklo3b from "../assets/maklowicz3b.webp"

export default {
  name: "Maklowicz",
  data() {
    return {
      text: '',
      background: '',
      images: {
        maklo1,
        maklo2,
        maklo3,
        maklo3b,
      },
      maklo: true,
    }
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.maklowiczThing{
  //margin-top:10%;
  display:flex;
  width:70%;
  flex-direction: column;
  height:fit-content;
  color:black;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0);
  z-index:10;
}
.maklowiczCardGroup{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  align-content: center;
}
.kartaMaklo{
  width:30%;
  transition: linear 0.2s;
}
.kartaMaklo p{
  margin-top:2%;
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
  color:white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.521);
}
@media screen and (max-width: 900px) {
  .maklowiczThing{
   width:fit-content;
   padding:5%;
  margin-top:15%;
  display:block;
  }
  .maklowiczCardGroup{
  }
  .kartaMaklo{
    width:100%;
    margin-bottom:5%;
  }
}
</style>