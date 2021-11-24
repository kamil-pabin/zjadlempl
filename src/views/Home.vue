<template>
  <div class="home">
    <div id="tlo">
      <div id="naglow">
        <h1 id="hello">Wyszukaj restauracje w której jadłeś: </h1>
      </div>
      <user-location />
    </div>
  </div>
</template>

<script>
import UserLocation from '../components/UserLocation.vue'

export default {
  name: 'Home',
  components: { UserLocation},
  data() {
    return {
      text: '',
      long: '',
      lat: '',
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
  width:100%;
  height:100%;
  color: white;
  padding:0;
  margin-left:0px;
  font-family: 'Raleway', sans-serif;
}
#tlo{
  background: #407ce4;
  margin-bottom: 0px;
  padding: 20px;
  width: 100%;
  height: 40vh;
  border-bottom-right-radius: 60% 25%;
  border-bottom-left-radius: 60% 25%;
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
    //background-image: url("../assets/pizza.png");
    //background-image: url("../assets/sushi.png");
    //background-image: url("../assets/stek.png");
    margin-bottom: 0px;
    padding: 20px;
    width: 100%;
    height: 40vh;
  }
}
</style>