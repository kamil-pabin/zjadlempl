<template>
  <div class="browser"> 
    <div id="tlo">
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2"/>
      </div>
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image4"/>
      </div>
    </div>
    <div id="browserRest">
      <BrowserData />
    </div>
  </div>
</template>

<script>
import BrowserData from '../components/BrowserData.vue'
import image1 from "../assets/background1.jpeg"
import image2 from "../assets/background2.jpeg"
import image3 from "../assets/background3.jpeg"
import image4 from "../assets/background4.jpeg"
export default {
  name: "Browser",
  metaInfo:{
    title: 'Zjadłem.pl | Przeglądaj restauracje'
  },
  components: { BrowserData},
  data() {
    return {
      value: "",
      context: null,
      images: {
        image1,
        image2,
        image3,
        image4,
      },
    };
  },
  methods: {
    fetchData: function () {
      this.$store.state.cords.lat = 10;
    },
  },
  props: ["lat", "long"],
};
</script>

<style lang="scss" scoped>
.browser{
  width:100%;
}
#tlo{
  position:absolute;
  max-height:100vh;
  z-index:-100;
}
#browserRest{
  padding-top:10%;
  width:60%;
  z-index: 100;
  margin:auto;
}
@media screen and (max-width: 600px) {
  #tlo{
    width: 100%;
  }
  #browserRest{
    padding-top:13vh;
    width:95%;
  }
}
</style>