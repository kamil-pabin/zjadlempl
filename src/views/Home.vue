<template>
  <div class="home">
    <div id="tlo">
      <div id="naglow">
        <h1 id="hello">Wyszukaj restauracje w której jadłeś: </h1>
        <div id="poleWyszukiwania">
          <b-form-input list="my-list-id" v-model="text" placeholder="Podaj ulicę"></b-form-input>
          <datalist id="my-list-id">
            <option v-for="(size) in sizes" :key="size.id">{{ size }}</option>
          </datalist>
          <b-button id="buton" to="/About" :active="$route.name =='About'" variant="dark">Szukaj</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<script>
  export default {
    data() {
      return {
        text: '',
        sizes: ['Śmidowicza', 'Świętojańska', 'Gdańska', 'Młodego G']
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
}
#poleWyszukiwania{
  margin:auto;
  max-width:20rem;
  height:1rem;
  display:flexbox;
}
#poleWyszukiwania input{
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
#buton{
  margin-top: 2%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
#buton a{
  padding:0;
  margin:0;
}
#tlo{
  background: #407ce4;
  //background-image: url("../assets/pizza.png");
  //background-image: url("../assets/sushi.png");
  //background-image: url("../assets/stek.png");
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
  #poleWyszukiwania{
    margin:auto;
    max-width:30rem;
    height:2.5rem;
    display:flex;
  }
  #buton{
    margin-top: 0%;
    margin-left:10px;
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
  #poleWyszukiwania{
    max-width:20rem;
    margin:auto;
    height:2rem;
    display:flexbox;
  }
  #buton{
    margin-top: 2%;
    margin-left:0px;
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