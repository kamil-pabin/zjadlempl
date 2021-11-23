<template>
  <div class="browser">
    <div id="tlo">
      <h4 class="invert" v-if="this.$store.state.cords.lat != '' ">
        Twoja lokalizacja: {{ this.$store.state.cords.lat }}
        {{ this.$store.state.cords.long }}
        
      </h4>
      <BrowserData />
    </div>
  </div>
</template>

<script>
import BrowserData from '../components/BrowserData.vue'
export default {
  name: "Browser",
  components: { BrowserData },
  data() {
    return {
      value: "",
      context: null,
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
  text-align: center;
  width:100%;
  color: white;
  padding:0;
  margin-left:auto;
  margin-right: auto;
}
#tlo{
  width:90%;
  background: rgba(223, 223, 223, 0.966);
  margin-bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  height: 100vh;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
h1{
  overflow: hidden;
  font-size:1.7rem;
  font-weight: 300;
  margin: 0;
  margin-top:7vh;
  padding:0;
  padding-bottom:3vh;
  text-shadow: 0 4px 8px rgba(0,0,0,0.19);
}
/*@media screen and (min-width: 1200px) {
  h1 {
     font-size: 2.3rem;
     margin-top:7vh;
  }
  #tlo{
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
*/
</style>