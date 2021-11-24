/* eslint-disable no-unused-vars */
<template>
  <div id="browserData">
    <div class="panel">
      <div class='tytul'>
        <div><h2> Znaleziono {{ this.$store.state.restauracje.length }} Restauracji</h2></div>
        <div id="cords" v-if="lat != '' "><h2> Twoja lokalizacja: <i>{{ lat }}E {{ long }}N</i> </h2></div>
      </div>
      
      <div class="restauracja" v-for="item in this.$store.state.restauracje" :key="item.index">

        <div class="logoRestDiv">
            <b-img :src="item.Logo" fluid class="logoRest"/>
        </div>

        <div class="informacje">
              <div>{{ item.Nazwa }}</div>
              <div>Kuchnia: {{ item.Kuchnia }}</div>
        </div>

        <div class="ocenaRestDiv">
            <div v-bind:style=" item.Ocena >= 9 ? {'color': '#00aaff'} : [item.Ocena >= 7 ? {'color': 'green'} : (item.Ocena >= 3 ? {'color': 'orange'} : {'color': 'red'})] ">
              {{ item.Ocena }} / 10
            </div>
        </div> 

      </div>

    </div>
  </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { db } from '../db'
export default {
  name: "BrowserData",
  props: { },
  data() {
    return {
      currentRestauracja: null,
      currentIndex: -1,
      lat: Math.round(this.$store.state.cords.lat * 1000) / 1000,
      long: Math.round(this.$store.state.cords.long * 1000) / 1000,
    };
  },
  methods: {
    fetchData: function () {
      this.$store.state.cords.lat = 10;
      this.$store.state.cords.long = 10;
    },
    onLoadRest () {
      const restData = {
        nazwa: this.nazwa,
        kuchnia: this.kuchnia,
        ocena: this.ocena,
        lokalizacja: this.lokalizacja,
        logo: this.logo
      }
      this.$store.dispatch('bindRestauracja', restData)
      console.log(this.logo)
    }
  },
  created (){
    this.$store.dispatch('bindRestauracja')
  }
};

</script>

<style lang="scss">
#browserData {
  margin: auto;
  height: 1rem;
}
#browserData input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.restauracja{
  background:rgb(238, 238, 238);
  display:flex;
  justify-content: space-between;
  vertical-align: middle;
  padding:auto;
  padding-left: 3%;
  padding-right: 3%;
  margin:auto;
  margin-bottom:1%;
  color:rgb(63, 63, 63);
  font-size: 1.4vw;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.315);
  border-radius: 15px 15px 15px 15px;
  width:75%;
}
.restauracja:nth-child(2n+1){
  //background:rgb(219, 219, 219);
}
.restauracja .logoRestDiv{
  width:25%;
  height:fit-content;
  padding:5%;
}
.restauracja .informacje{
  width:50%;
  height:auto;
  text-align:center;
  display:block;
  padding:7%;
}
.restauracja .informacje div{
  height:60%;
  font-size:1.8vw;
}
.restauracja .informacje div:nth-child(2n){
  font-size:1.1vw;
}
.restauracja .ocenaRestDiv{
  width:15%;
  text-align:left;
  height:inherit;
  display:flex;
  justify-content: center;
  align-items: center;
}
.ocenaRestDiv div{
  text-align:right;
  color: green;
  width:100%;
}
#naglowek div:last-of-type{
  text-align: right;
}
.panel{
  border-radius: 15px 15px 15px 15px;
  background:rgba(255, 255, 255, 0.945);
  padding-bottom:5%;
}
.tytul{
  border-bottom: solid rgba(0, 0, 0, 0.171) 1px;
  color: black;
  padding:2%;
  display:flex;
  margin:auto;
  justify-content: space-between;
  margin-bottom:1%;
  font-size: 1vw;
}
.tytul h2{
  font-size: 2vw;
}
.logoRestDiv{
  background: url("../assets/pizza.png");
  background-size:cover;
  margin:1%;
  border-radius: 15px 15px 15px 15px;
}
.logoRest{
  max-height:100%;
  max-width:100%;
  padding:auto;
  //width:130px;
  margin:auto;
  //height:130px;
  object-fit:cover;
}
.logoRest img{
  margin:auto;
}
#cords i{
 //font-size: 0.9rem;
  font-family: arial;
}

@media screen and (max-width: 600px) {
  .tytul{
    display:block;
    }
  .restauracja{
    background:rgb(238, 238, 238);
    color:rgb(63, 63, 63);
    font-size: 0.6rem;
    width:85%;
  }

  .restauracja .informacje div{
    font-size:2.4vw;
    word-break: break-all;
  }
  .restauracja .informacje div:nth-child(2n){
    font-size:1.6vw;
  }
}
@media screen and (min-width: 1200px) {
  
}
</style>