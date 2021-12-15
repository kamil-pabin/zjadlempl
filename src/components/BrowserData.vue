/* eslint-disable no-unused-vars */
<template>
  <div id="browserData">
    <div class="panel">
      <div class='tytul'>
        <div id="gornaLinia"> <!--TODO: Dodać 4 <span v-if></span> dla współrzędnych, żeby zależnie od ich wartości pokazywała się odpowiednia wartość -->
            <div><h2> Znaleziono {{ this.$store.state.restauracje.filter(kuchniaSel).length }} Restauracji <span v-if="this.wybranaKuchnia != '' "> z kuchnią {{ this.wybranaKuchnia }}</span> <span v-if="this.$store.state.miasto != ''"> w {{ this.$store.state.miasto}} </span> </h2></div>  
              <div id="cords" v-if="this.$store.state.cords.lat != '' "><h2> Twoja lokalizacja: <i> {{ this.$store.state.cords.lat }}E {{ this.$store.state.cords.long }}N</i> </h2></div>
              <div v-else>
                <div v-if="this.$store.state.allowedCords == true">
                  <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
                </div>
                <div v-else>Brak dostępu do lokalizacji</div>
              </div>         
        </div> 
        <div id="dolnaLinia" style="display:flex; justify-content: space-between">
          <div><label>Ilość wyświetlanych restauracji: {{ restLimMax }} </label></div>
            <div id="wyborKuchni">
              Kuchnia: <b-button @click="wybranaKuchnia=''">Brak </b-button><b-button @click="wybranaKuchnia='Polska'">Polska </b-button><b-button @click="wybranaKuchnia='Amerykańska'">Amerykańska </b-button><b-button @click="wybranaKuchnia='Włoska'">Włoska </b-button><b-button @click="wybranaKuchnia='Chińska'">Chińska </b-button><b-button @click="wybranaKuchnia='Sushi'">Sushi </b-button><b-button @click="wybranaKuchnia='Kebab'">Kebab </b-button>
            </div>
        </div>
        <!-- <div id="dolnaLinia" style="display:flex; justify-content: space-between">
          <div id="wyszukiwarkaNazwa">
            <b-form-input debounce="500" v-model="inputRest" placeholder="Wyszukaj restauracje.." list="my-list-id" ></b-form-input>
              <datalist id="my-list-id">
                <option 
                v-for="(rest, idx) in this.$store.state.restauracje" 
                :key="idx"
                >

                {{ rest.Nazwa }}
                
                </option>
              </datalist>
            <b-button
              v-if="inputRest != ''"
              @mouseover="changeCurrentRestaurant(inputRest)"
              @click="restaurantLink"
              :active="$route.name == '/restauracja'"
            >
              Klik 
            </b-button>
          </div>
        </div> -->
      </div> 
      <div class="pojemnik">
        <div class="pojemnikDwa">
          <div class="restauracja" 
          v-for="item in this.$store.state.restauracje.filter(kuchniaSel).slice(restLimMin,restLimMax)" 
          :key="item.id"
          @mouseover="changeCurrentRestaurant(item), getDistanceFromLatLonInKm()"
          >
            <div class="flex">
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
        </div>
        <div class="pojemnikDwa">
          <div class="informacjeRest" v-if="currentRestauracja != 'brak'">
            <div>
              <p id="nazwaRest">{{ this.$store.state.restNazwa }} </p>
              <div class="logoRestDivInfo">
                <b-img :src="this.$store.state.restLogo" fluid class="logoRest"/>
              </div> 
              <p class="numbers" v-if="this.$store.state.cords.lat != '' ">Odległość: {{ dystans }}km</p>
              <!-- <div class="flex">
                Średnia ocena: &nbsp;
                <div class="numbers" v-bind:style=" currentRestauracjaOcena >= 9 ? {'color': '#00aaff'} : [currentRestauracjaOcena >= 7 ? {'color': 'green'} : (currentRestauracjaOcena >= 3 ? {'color': 'orange'} : {'color': 'red'})] ">
                  {{ this.$store.state.avgOcena }} / 10
                </div>
              </div>   -->
              <div class="flex">
                Kuchnia: &nbsp;
                <span class="kuchnie" id="kuchOpis" v-for="kuchniaNazwa in this.$store.state.restKuchnie" :key="kuchniaNazwa">
                  {{ kuchniaNazwa }}<span v-if="currentRestauracjaKuchnie.length > 1">, &nbsp;</span>
                </span>
              </div> 
              <div class="flex">
                Miasto:&nbsp;
                <div>{{this.$store.state.restMiasto}}</div>
              </div>
              <div class="flex">
                Ulica:&nbsp;
                <div>{{this.$store.state.restUlica}} {{ this.$store.state.restNumerLokalu }}</div>
              </div>
              <div class="flex">
                <b-button
                id="szczegoly"
                @click="restaurantLink"
                :active="$route.name == '/restauracja'"
                >
                Zobacz więcej</b-button>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="pojemnik">
        <div class="stopa">
          <div id="lewo">
            <b-button-group>
              <b-button id="wiecej" v-if="restLimMax < this.$store.state.restauracje.filter(kuchniaSel).length" @click="restLimMax+=10">Wyświetl więcej</b-button>
              <b-button id="mniej" v-if="restLimMax > 11" @click="restLimMax-=10">Wyświetl mniej</b-button>
            </b-button-group>
          </div>
          <div id="prawo">
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
      inputRest: '',
      currentRestauracjaNazwa: 'brak',
      currentRestauracjaMiasto: 'brak',
      currentRestauracjaOcena: 'brak',
      currentRestauracjaLogo: 'brak',
      currentRestauracjaKuchnie: 'brak',
      currentRestauracjaUlica: 'brak',
      currentRestauracjaLokal: 'brak',
      restLimMax:  10,
      restLimMin: 0,
      tak: '',
      currentRestauracjaAdres: [],
      currentIndex: -1,
      liczbaRest: 0,
      kuchnia: null,
      latOkr: Math.round(this.$store.state.cords.lat * 1000) / 1000,
      longOkr: Math.round(this.$store.state.cords.long * 1000) / 1000,
      lat: this.$store.state.cords.lat,
      long: this.$store.state.cords.long,
      dystans:[],
      wybranaKuchnia: '',
      liczbaFilteredKuchnie: 0,
    };
  },
  methods: {
    kuchniaSel(item){
      this.liczbaRest = 0; 
      if (this.wybranaKuchnia != '') {
        return item.Kuchnie.includes(this.wybranaKuchnia);
      }
      else{
        return item.Kuchnie;
      }
    },
    getDistanceFromLatLonInKm () {
      var lat1 = this.$store.state.cords.lat;
      var lat2 = this.currentRestauracja.Adres._lat;
      var lon1 = this.$store.state.cords.long;
      var lon2 = this.currentRestauracja.Adres._long;
      var R = 6371; // Radius of the earth in km
      var dLat = (3.14 / 180)*(lat2 - lat1);  // deg2rad below
      var dLon = (3.14 / 180)*(lon2 - lon1); 
      var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos((3.14 / 180)*(lat1)) * Math.cos((3.14/180)*(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      this.dystans = Math.round(this.dystans = d * 100) /100;
    },
    restaurantLink: function () {
      this.$router.push("/restauracja");
    },
    changeCurrentRestaurant(Restaurant) {
      this.currentRestauracja = Restaurant;
      this.$store.state.restNazwa= Restaurant.Nazwa;
      this.$store.state.restAdres= Restaurant.Adres;
      this.$store.state.restKuchnie= Restaurant.Kuchnie;
      this.$store.state.restLogo= Restaurant.Logo;
      this.$store.state.restMiasto= Restaurant.Miasto;
      this.$store.state.restNumerLokalu= Restaurant.NumerLokalu;
      this.$store.state.restOceny= Restaurant.Oceny;
      this.$store.state.restUlica= Restaurant.Ulica;
      this.$store.state.restMenu= Restaurant.Menu;
      this.$store.state.restKomentarze= Restaurant.Komentarze;
      this.$store.state.restId = Restaurant.id;
    },
  },
  created (){
    this.$store.dispatch('bindRestauracja')
  },
  computed: {
    btnStates(){
      return this.buttons.map(btn => btn.state)
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
  //font-size: 1.2vw;
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
  font-size: 0.7rem;
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
  font-size: 0.6rem;
  white-space:nowrap;
}
#kuchOpis{
  font-size:0.7rem;
}
.restauracja .informacje div{
  height:60%;
  font-size:0.75rem;
  text-transform: uppercase;
  font-weight: bold;
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
  font-size: 0.7rem;
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
  font-size: 0.8rem;
  position:sticky;
  top:0%;
  background:rgb(255, 255, 255);
  border-radius: 15px 15px 0px 0px;
  z-index:4;
}
.tytul #gornaLinia{
  display:flex;
  text-transform: uppercase;
  font-weight: 300;
  justify-content: space-between;
}
.tytul #dolnaLinia{
  text-align: left;
}
.tytul #dolnaLinia div{
  //margin:1%;
  text-transform: uppercase;
}
.tytul h2{
  font-size: 0.8rem;
  font-weight: 300;
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
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bold;
}
.stopa{
  //background:red;
  width:100%;
  display:flex;
}
.stopa #lewo{
  //background:cyan;
  width:50%;
}
.stopa #prawo{
  //background:yellow;
  width:50%;
}
.stopa #mniej{
  color:black;
  //text-decoration: underline;
  background: transparent;
  background:rgb(243, 243, 243);
  text-transform: uppercase;
  font-weight: 300;
  font-size:0.8rem;
  border:1px solid rgba(0, 0, 0, 0.178);
}
.stopa #wiecej{
  //text-decoration: underline;
  color:black;
  
  border:1px solid rgba(0, 0, 0, 0.178);
  text-transform: uppercase;
  font-size:0.8rem;
  font-weight: 300;
  //background: transparent;
  background:rgb(243, 243, 243);
}
#szczegoly{
  //text-decoration: underline;
  color:black;
    text-transform: uppercase;

  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#wyborKuchni{
  //background:red;
  width:60%;
  text-align: right;
  padding-top:0;
  padding-bottom:0;
  margin:0;
  font-size: 0.9rem;
}
#wyborKuchni button{
  background:transparent;
  border:0;
  margin:0;
  line-height: 100%;
  color: black;
  font-weight: 300;
  font-size:0.8rem;
  padding-top:0;
  padding-bottom:0;
}
#wyborKuchni button:focus{
  border:0;
  background:transparent;
  color:Red;
}
#wyborKuchni .active{
  color:green;
}
#wyborKuchni span{
  margin-left:1%;
}
#logoCenter{
    filter: drop-shadow(0 0 5px rgba(51, 51, 51, 0.568));
    width:3rem;
}
#wyszukiwarkaNazwa{
  width:25%;
}
#wyszukiwarkaNazwa svg{
}

@media screen and (max-width: 600px) {
  .pojemnik{
    display:block;
    width:100%;
    margin:auto;
  }
  .pojemnik .pojemnikDwa{
    margin:auto;
    width:90%;
    
  }
  .pojemnik .pojemnikDwa:nth-child(2n){
    display:none;
  }
  .tytul{
    display:block;
    font-size:0.5rem;
    }
  .tytul h2{
    font-size:0.45rem;
  }
  .restauracja{
    background:rgb(238, 238, 238);
    color:rgb(63, 63, 63);
  }
  .stopa{
    //background:red;
    width:100%;
    display:block;
  }
  .stopa #lewo{
    //background:cyan;
    width:100%;
  }
  .stopa #prawo{
    //background:yellow;
    width:100%;
  }
  .restauracja .informacje div{
    font-size:0.8rem;
    margin:3%;;
    word-break: break-all;
  }
  .restauracja .informacje .kuchnie{
    font-size:0.5rem;
  }
}
@media screen and (min-width: 1200px) {
  
}
</style>