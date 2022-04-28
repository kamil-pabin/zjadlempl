/* eslint-disable no-unused-vars */
<template>
  <div id="browserData" >
    <div class="panel">
      <div class='tytul'>
        <div id="gornaLinia" style="padding-top:1%;"> 
            <div><h2> Znaleziono {{ this.$store.state.restauracje.filter(kuchniaSel).length }} Restauracji <span v-if="this.wybranaKuchnia != '' "> z kuchnią {{ this.wybranaKuchnia }}</span> <span v-if="this.$store.state.miasto != ''"> w {{ this.$store.state.miasto}} </span> </h2></div>    
        </div> 
        <div id="dolnaLinia" style="">
          <div>Ilość wyświetlanych restauracji: {{ restLimMax }}</div>
            <div id="wyborKuchni">
              Kuchnia: <b-button @click="wybranaKuchnia=''">Wszystkie </b-button><b-button @click="wybranaKuchnia='Polska'">Polska </b-button><b-button @click="wybranaKuchnia='Sushi'">Sushi </b-button><b-button @click="wybranaKuchnia='Amerykańska'">Amerykańska </b-button><b-button @click="wybranaKuchnia='Włoska'">Włoska </b-button><b-button @click="wybranaKuchnia='Chińska'">Chińska </b-button>
            </div>
        </div>
      </div> 
      <div class="pojemnik">
        <div class="pojemnikDwa">
          <div class="restauracja" 
          v-for="item in this.$store.state.restauracje.filter(kuchniaSel).slice(restLimMin,restLimMax)" 
          :key="item.id"
          >
            <div class="flex" style="flex-direction:row; justify-content:flex-start; align-content:center; align-items:center; padding-bottom:0%; padding-top:0%; height:fit-content;">
              <div class="logoRestDiv" style="display:flex; width:20%; margin-right:1%;">
                  <b-img :src="item.Logo" fluid class="logoRest" style="object-fit:contain" />
              </div>
              <div class="informacje" style="width:79%; display:flex; flex-direction:column; justify-content:center; align-content:flex-start; align-items:center;">
                    <div id="wierszP" style="width:fit-content; display:flex; align-content:center; align-items:center; justify-content:center;">
                      <div id="nazwaRest">{{ item.Nazwa }}</div>
                    </div> 

                    <div id="wierszD" style="width:100%; height:fit-content; justify-content:space-between; display:flex; flex-direction:row; ">
                      <div id="kolumnaP" style="width:fit-content; height:fit-content; display:flex; flex-direction:column; justify-content:flex-start; align-items:flex-start; align-content:flex-start; flex-wrap:wrap;">
                        <div id="kuchenki" style="display:flex; flex-wrap:wrap;">
                          <span style="font-weight:700">Kuchnie:</span>
                          <span class="kuchnie" v-for="kuchniaNazwa in item.Kuchnie" :key="kuchniaNazwa" style="font-style:italic; margin-left:1%; margin-right:1%;">
                            {{ kuchniaNazwa }} 
                          </span>
                        </div>
                        <div id="restAdresMiasto" style="display:flex;">
                          <span style="font-weight:700">Miasto:</span>
                          <span id="itemAdres" style="font-style:italic;">
                            {{item.Miasto}}
                          </span>
                        </div>
                        <div id="restAdresUlica" style="display:flex; flex-direction:row; flex-wrap:wrap;">
                          <span style="font-weight:700">Ulica:</span>
                          <span id="itemAdres" style="font-style:italic; margin:0; padding:0;">
                            {{item.Ulica}} {{item.NumerLokalu}}
                          </span>
                        </div>
                        
                      </div>
                      <div id="kolumnaD" style="width:fit-content; height:fit-content; display:flex; align-items:center; align-content:center">
                        <div id="restOcena" style="">   
                          <div style="" id="ocSpol">
                            Ocena społeczności:
                            <div style="">
                              <star-rating :read-only="true" :inline="true" :star-size="18" :increment="0.01" :fixed-points="2"  :rating=parseFloat(item.Ocena) style="display:flex; " inactive-color="#bbbbbb" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>  
                    <div style="margin-top:2%; margin-bottom:2%;">
                      <b-button
                        id="szczegoly"
                        @click="restaurantLink(item)"
                        :active="$route.name == '/restauracja'"
                        style="font-size:0.65rem;"
                        >
                        Zobacz więcej
                      </b-button>
                    </div>   
              </div>
            </div>           
          </div>
        </div>
      </div> 
      <div class="pojemnik">
        <div class="stopa" style="margin:auto; width:100%;">
            <b-button-group>
              <b-button id="wiecej" v-if="restLimMax < this.$store.state.restauracje.filter(kuchniaSel).length" @click="restLimMax+=10">Wyświetl więcej</b-button>
              <b-button id="mniej" v-if="restLimMax > 11" @click="restLimMax-=10">Wyświetl mniej</b-button>
            </b-button-group>
        </div>
      </div> 
    </div>
  </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { db } from '../db'
import StarRating from 'vue-star-rating'
export default {
  name: "BrowserData",
  props: { },
  // eslint-disable-next-line vue/no-unused-components
  components: {StarRating},
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
      ocenaSpolecznosci: [],
      twojaOcena: 0,
      ocena: 9,
      text: null,
      dismissSecs: 3,
      dismissCountDown: 0,
      avg: '',
      komLimMax:  2,
      komLimMin: 0,
      czyAnonim: 0,
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
    setRating: function(rating){
      this.ocena= rating;
      this.$store.state.restSelectedRestOcena= rating;
    },
    ocenienie(){
        this.$store.state.czyAnonim = this.czyAnonim;
        this.$store.state.restKomentarz = this.text;
        this.$store.commit('addOcenaRest');
        this.dismissCountDown = this.dismissSecs;
    },
    usunOpinie(){
        console.log("usuwam opinie")
        this.$store.commit('remOcenaRest');
        this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
        this.$store.dispatch('bindOcenaRest')
        this.dismissCountDown = dismissCountDown;
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
    restaurantLink: function (Restaurant) {
      this.changeCurrentRestaurant(Restaurant);
      this.$router.push("/restauracja");
    },
    changeCurrentRestaurant(Restaurant) {
      this.ocena=9;
      window.scrollTo(0,0);
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
      this.text = null;
      this.$store.dispatch('bindOcenaRest')
    },
    login () {
      this.$auth.loginWithRedirect();
    },
  },
  created (){
    this.$store.dispatch('bindRestauracja')
    if(this.$auth.isAuthenticated){
    if(this.$auth.user.email != null){
      this.$store.state.currentUserEmail = this.$auth.user.email;
    }
    else{
      this.$store.state.currentUserEmail = null;
    }
    }
  },
  computed: {
    btnStates(){
      return this.buttons.map(btn => btn.state)
    },
  },
};

</script>

<style lang="scss">
#browserData {
  margin: auto;
  width:100%;
}
.pojemnik{
  display:flex;
  width:100%;
}
.pojemnikDwa{
  width:100%;
  margin-right:2%;
  margin-left:2%;
}
.flex{
  display:flex;
  //margin:auto;
}
.restauracja{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgb(233, 233, 233) 0%, rgba(233, 233, 233, 0.473) 54%, rgba(255, 255, 255, 0) 100%);
  padding-right: 3%;
  margin-bottom:1%;
  color:rgb(63, 63, 63);
  -webkit-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  border-radius: 20vw 0 0 20vw;
  transition: linear 0.2s;
}
.restauracja:hover{
  transform: scale(1.04);
}
.restauracja .logoRestDiv{
  max-width:100%;
  max-height:100%;
  border-radius: 25vw;
}
.restauracja .informacje{
  //width:75%;
  //height:auto;
  //padding:2%;
  //font-size: 0.8rem;
}
.restauracja .informacje div{
  text-transform: uppercase;
}
.restauracja .ocenaRestDiv{
  //width:15%;
  //text-align:left;
  //height:inherit;
  display:flex;
  justify-content: center;
  align-items: center;
  font-family: arial;
}
.ocenaRestDiv div{
  text-align:right;
  color: green;
  //font-size: 0.7rem;
  width:100%;
}
#naglowek div:last-of-type{
  text-align: right;
}
.panel{
  border-radius: 15px 15px 15px 15px;
  background:rgb(255, 255, 255);
  padding-bottom:5%;
  width:100%;
}
.tytul{
  border-bottom: solid rgba(0, 0, 0, 0.171) 1px;
  color: black;
  padding:2%;
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin:auto;
  justify-content: space-between;
  margin-bottom:1%;
  font-size: 1rem;
  //position:sticky;
  top:0%;
  background:rgb(255, 255, 255);
  border-radius: 15px 15px 0px 0px;
  z-index:4;
}
.tytul #gornaLinia{
  display:flex;
  flex-wrap: wrap;
  text-transform: uppercase;
  font-weight: 300;
  justify-content: space-between;
}
.tytul #dolnaLinia{
  text-transform: uppercase;
  display:flex;
  flex-wrap:wrap;
  align-content: flex-end;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
}
.tytul #dolnaLinia div{
  width:fit-content;
}
.tytul h2{
  font-size: 1rem;
  font-weight: 300;
}
.logoRestDiv{
  //background-size:cover;
}
.logoRest{
  //padding:0;
 // width:100%;
  //margin:0;
  //object-fit:cover;
}
.logoRest img{
  //margin:0;
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
  width:100%;
  margin:auto;
}
.stopa #mniej{
  color:black;
  //text-decoration: underline;
  background: transparent;
  background:rgb(243, 243, 243);
  text-transform: uppercase;
  font-weight: 300;
  //font-size:0.8rem;
  border:1px solid rgba(0, 0, 0, 0.178);
}
.stopa #wiecej{
  //text-decoration: underline;
  color:black;
  
  border:1px solid rgba(0, 0, 0, 0.178);
  text-transform: uppercase;
  //font-size:0.8rem;
  font-weight: 300;
  //background: transparent;
  background:rgb(243, 243, 243);
}
#wiecej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#mniej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#szczegoly{
  //text-decoration: underline;
  color:black;
    text-transform: uppercase;

  border:none;
  //font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background: transparent;
  background:rgb(243, 243, 243);
}
#wyborKuchni{
  width:fit-content;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  justify-content: flex-start;
  margin:0;
  font-size: 1rem;
}
#wyborKuchni button{
  background:transparent;
  border:0;
  margin:0;
  padding-top:0;
  padding-bottom: 0;
  color: black;
  font-weight: 300;
  text-transform: uppercase;
  font-size:1rem;
  vertical-align: top;
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
  //margin-left:1%;
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
#ocSpol{
  width:fit-content; 
  height:fit-content; 
  display:flex; 
  flex-direction: column;
  align-items:flex-start !important; 
  align-content:flex-start !important;
}

@media screen and (max-width: 900px) {

  .restauracja{
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgb(233, 233, 233) 0%, rgba(233, 233, 233, 0.473) 54%, rgba(255, 255, 255, 0) 100%);
  //padding:0;
  //margin:0;
  margin-bottom:1%;
  font-size: 0.65rem;
  color:rgb(63, 63, 63);
  -webkit-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 0);
  -moz-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 0);
  box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 0);
  border-radius: 0vw 0 0 0vw;
  transition: linear 0.2s;
}
.restauracja:hover{
  transform: scale(1.0);
}
#browserData {
  margin: 0;
  width:100%;
}
.pojemnik{
  display:flex;
  width:100%;
}
.pojemnikDwa{
  width:100%;
  margin-right:0%;
  margin-left:0%;
}
.tytul h2{
  font-size: 0.8rem;
  font-weight: 300;
}
.tytul{
  font-size:0.8rem;
}
#wyborKuchni{
  font-size:0.8rem !important;
}
#wyborKuchni button{
  font-size:0.8rem !important;
}
}
@media screen and (min-width: 1200px) {
  
}

</style>