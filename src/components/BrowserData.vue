/* eslint-disable no-unused-vars */
<template>
  <div id="browserData">
    <div class="panel">
      <div class='tytul'>
        <div id="gornaLinia">
            <div><h2> Znaleziono  {{ this.$store.state.restauracje.length }} Restauracji <span v-if="this.$store.state.miasto != ''"> w {{ this.$store.state.miasto}} </span> </h2></div>
            <div id="cords" v-if="this.$store.state.cords.lat != '' "><h2> Twoja lokalizacja: <i> {{ this.$store.state.cords.lat }}E {{ this.$store.state.cords.long }}N</i> </h2></div>
        </div>
        <div id="dolnaLinia">
          <label for="sb-inline">Ilość wyświetlanych restauracji</label>
          <b-form-spinbutton 
          class="numbers"
          id="sb-inline" 
          v-model="restLimMax" 
          inline
          min="5"
          max="1000"
          step="15"
          >
          </b-form-spinbutton>
        </div>
        
      </div> 
      <div class="pojemnik">
        <div class="pojemnikDwa">
          <div class="restauracja" 
          v-for="item in this.$store.state.restauracje.slice(restLimMin,restLimMax)" 
          :key="item.id"
          @mouseover="currentRestauracja = item.index, currentRestauracjaNazwa = item.Nazwa, currentRestauracjaOcena = item.Ocena, currentRestauracjaLogo = item.Logo, currentRestauracjaAdres = item.Adres, currentRestauracjaMiasto = item.Miasto, currentRestauracjaKuchnie = item.Kuchnie, currentRestauracjaUlica = item.Ulica, currentRestauracjaLokal = item.NumerLokalu, getDistanceFromLatLonInKm()"
          >
            <div class="logoRestDiv">
                <b-img :src="item.Logo" fluid class="logoRest"/>
            </div>
            <div class="informacje">
                  <div>{{ item.Nazwa }}</div>
                  <span class="kuchnie" v-for="kuchniaNazwa in item.Kuchnie" :key="kuchniaNazwa">
                      {{ kuchniaNazwa }} 
                  </span>
            </div>           
          </div>
        </div>
        <div class="pojemnikDwa">
          <div class="informacjeRest" v-if="currentRestauracja != 'brak'">
            <div>
              <p id="nazwaRest">{{ currentRestauracjaNazwa }} </p>
              <div class="logoRestDivInfo">
                <b-img :src="currentRestauracjaLogo" fluid class="logoRest"/>
              </div> 
              <p class="numbers" v-if="this.$store.state.cords.lat != '' ">Odległość: {{ dystans }}km</p>
              <div class="flex">
                Średnia ocena: &nbsp;
                <div class="numbers" v-bind:style=" currentRestauracjaOcena >= 9 ? {'color': '#00aaff'} : [currentRestauracjaOcena >= 7 ? {'color': 'green'} : (currentRestauracjaOcena >= 3 ? {'color': 'orange'} : {'color': 'red'})] ">
                  {{ currentRestauracjaOcena }} / 10
                </div>
              </div>  
              <div class="flex">
                Kuchnia: &nbsp;
                <span class="kuchnie" id="kuchOpis" v-for="kuchniaNazwa in currentRestauracjaKuchnie" :key="kuchniaNazwa">
                      {{ kuchniaNazwa }}<span v-if="currentRestauracjaKuchnie.length > 1">, &nbsp;</span>
                  </span>
              </div> 
              <div class="flex">
                Miasto:&nbsp;
                <div>{{currentRestauracjaMiasto}}</div>
              </div>
              <div class="flex">
                Ulica:&nbsp;
                <div>{{currentRestauracjaUlica}} {{ currentRestauracjaLokal }}</div>
              </div>
            </div>
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
      currentRestauracja: 'brak',
      currentRestauracjaNazwa: 'brak',
      currentRestauracjaMiasto: 'brak',
      currentRestauracjaOcena: 'brak',
      currentRestauracjaLogo: 'brak',
      currentRestauracjaKuchnie: 'brak',
      currentRestauracjaUlica: 'brak',
      currentRestauracjaLokal: 'brak',
      restLimMax:  10,
      restLimMin: 0,
      currentRestauracjaAdres: [],
      currentIndex: -1,
      kuchnia: null,
      latOkr: Math.round(this.$store.state.cords.lat * 1000) / 1000,
      longOkr: Math.round(this.$store.state.cords.long * 1000) / 1000,
      lat: this.$store.state.cords.lat,
      long: this.$store.state.cords.long,
      dystans:[],
    };
  },
  methods: {
    getDistanceFromLatLonInKm () {
      var lat1 = this.$store.state.cords.lat;
      var lat2 = this.currentRestauracjaAdres.latitude;
      var lon1 = this.$store.state.cords.long;
      var lon2 = this.currentRestauracjaAdres.longitude;
      var R = 6371; // Radius of the earth in km
      var dLat = (3.14 / 180)*(lat2 - lat1);  // deg2rad below
      var dLon = (3.14 / 180)*(lon2 - lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((3.14 / 180)*(lat1)) * Math.cos((3.14/180)*(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      this.dystans = Math.round(this.dystans = d * 100) /100;
    },
  },
  created (){
    this.$store.dispatch('bindRestauracja')
  },
  computed: {
    btnStates(){
      return this.buttonsLims.map(btn => btn.state)
    }
  },
};

</script>

<style lang="scss">
#browserData {
  margin: auto;
  width:100%;
}
#browserData input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.pojemnik{
  display:flex;
  width:100%;
}
.pojemnikDwa{
  width:50%;
  //height:30%;
  margin-right:2%;
  margin-left:2%;
}
.flex{
  display:flex;
  margin:auto;
  justify-content: center;
}
.restauracja{
  background:rgb(243, 243, 243);
  //background: #407ce417;
  display:flex;
  justify-content: space-between;
  vertical-align: middle;
  padding:auto;
  padding-left: 3%;
  padding-right: 3%;
  //margin:auto;
  //margin-left: 2%;;
  margin-bottom:1%;
  color:rgb(63, 63, 63);
  font-size: 1.2vw;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.144);
  border-radius: 1vw .5vw .5vw .5vw;
  width:100%;
  transition: linear 0.3s;
}
.restauracja:hover{
  transform: scale(1.04);
  transition: linear 0.3s;
  background: #8fb8ff;
}
.informacjeRest{
  background:rgb(243, 243, 243);
  //background: #8fb8ff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.144), 0 6px 20px 0 rgba(0, 0, 0, 0.199);
  border-radius: .5vw .5vw .5vw .5vw;
  padding-left: 3%;
  padding-right: 3%;
  padding-top:3%;
  padding-bottom:3%;
  color:rgb(63, 63, 63);
  padding:auto;
  transition: linear 1.2s;
  width:100%;
  //height:55%;
  font-size: 1vw;
  position:sticky;
  top:18%;
}
.informacjeRest p{
  padding:0;
  margin:0;
}
.informacjeRest .logoRestDivInfo{
  width:50%;
  height:fit-content;
  padding:5%;
  margin:auto;
}
.logoRestDivInfo{
  background: url("../assets/pizza.png");
  background-size:cover;
  margin:1%;
  border-radius: 15px 15px 15px 15px;
}
.restauracja:nth-child(2n+1){
  //background:rgb(219, 219, 219);
}
.restauracja .logoRestDiv{
  width:25%;
  height:fit-content;
  padding:3%;
}
.restauracja .informacje{
  width:75%;
  height:auto;
  text-align:center;
  display:block;
  padding:7%;
}
.kuchnie{
  //display:flex;
  padding:0;
  margin:0;
  font-size: 0.6vw;
  white-space:nowrap;
}
#kuchOpis{
  font-size:1vw;
}
.restauracja .informacje div{
  height:60%;
  font-size:1vw;
}
.restauracja .informacje div:nth-child(2n){
  font-size:.6vw;
}
.restauracja .ocenaRestDiv{
  width:15%;
  text-align:left;
  height:inherit;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: arial;
}
.ocenaRestDiv div{
  text-align:right;
  color: green;
  font-size: 0.86vw;
  width:100%;
}
#naglowek div:last-of-type{
  text-align: right;
}
.panel{
  border-radius: 15px 15px 15px 15px;
  background:rgba(255, 255, 255, 0.897);
  padding-bottom:5%;
  width:100%;
}
.tytul{
  border-bottom: solid rgba(0, 0, 0, 0.171) 1px;
  color: black;
  padding:2%;
  display:flexbox;
  margin:auto;
  justify-content: space-between;
  margin-bottom:1%;
  font-size: 1vw;
  position:sticky;
  top:0%;
  background:rgb(255, 255, 255);
  border-radius: 15px 15px 0px 0px;
}
.tytul #gornaLinia{
  display:flex;
  justify-content: space-between;
}
.tytul #dolnaLinia{
  text-align: left;
}
.tytul #dolnaLinia div{
  margin:1%;
}
.tytul h2{
  font-size: 1.2vw;
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
.numbers{
  font-family: arial;
}
#nazwaRest{
  font-size: 1.5vw;
}

@media screen and (max-width: 600px) {
  .tytul{
    display:block;
    }
  .restauracja{
    background:rgb(238, 238, 238);
    color:rgb(63, 63, 63);
    //font-size: 0.6rem;
  }

  .restauracja .informacje div{
    //font-size:2.4vw;
    word-break: break-all;
  }
  .restauracja .informacje div:nth-child(2n){
    //font-size:1.6vw;
  }
}
@media screen and (min-width: 1200px) {
  
}
</style>