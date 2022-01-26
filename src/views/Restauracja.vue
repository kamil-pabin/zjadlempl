/* eslint-disable vue/no-unused-components */
<template>
  <div id="restauracja">
      <div id="tlo">
        <naglowek text="ZJADŁEM.PL | RESTAURACJA"></naglowek>
        <div v-if="this.$store.state.restId != '' " id="daneRestauracji"> 
            <div class="informacjeRest">
                <div>
                    <div class="flex" style="margin-bottom:2%;">
                    <!-- <h2><p id="nazwaRest" style="line-height:20vh;">{{ this.$store.state.restNazwa }} </p></h2> -->
                    <b-img :src="this.$store.state.restLogo" fluid class="logoRest" style="filter: drop-shadow(0 0 5px rgba(51, 51, 51, 0.668));" />
                    <!-- <div class="logoRestDivInfo">
                        
                    </div>  -->
                    </div>
                    <div class="flex" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); border-radius:4% 4% 4% 4%;">
                        <div class="menu" style="display:block; text-align:left; background: #eeeeee; border-radius:4% 0% 0% 4%;">
                            <h2>Menu: &nbsp;</h2>
                            <div class="kuchnie" style="display:block" id="menuOpis" v-for="(danieSuper, index) in this.$store.state.restMenu"  :key="index" @mouseover="changeCurrentDanie(danieSuper), komLimMax=2">
                                <div id="danie">
                                    <span id="id">{{ index + 1 }}.</span>
                                    <span id="kat"> {{ danieSuper.Kategoria }}: </span>
                                    <span id="skladniki">{{ danieSuper.Nazwa }} &nbsp;</span>
                                </div>
                            </div>
                        </div> 
                        <div class="potrawa" style="display:block; text-align:left; background: #afcfff; border-radius:0% 4% 4% 0%;overflow-y:scroll !important;">
                            <div id="potrawaIns">
                            <h2>Danie
                            </h2>
                            <span v-show="this.wybraneDanie != '' " id="ocenaDania"> </span>
                            <div v-show="this.wybraneDanie != '' " id="kat" style="color: brown"> {{ this.$store.state.restWybranaPotrawaKategoria }}: </div>
                            <span v-show="this.wybraneDanie != '' " id="nazwaPot" style="font-weight:600">Nazwa: <span style="font-weight:400">{{ this.$store.state.restWybranaPotrawaNazwa }} &nbsp;</span></span>
                            <div v-show="this.wybraneDanie != '' "><span style="font-weight:600">Składniki: &nbsp;</span><span id="skladniki">{{ this.$store.state.restWybranaPotrawaSkladniki }} &nbsp;</span></div>
                            <div v-show="this.wybraneDanie != '' ">Ocena społeczności: &nbsp;<star-rating :read-only="true" :inline="true" :star-size="16" :increment="0.01" :fixed-points="2"  :rating=this.$store.state.avgOcena inactive-color="#bbbbbb" /></div>
                            <span v-show="this.wybraneDanie != '' " v-if="$auth.isAuthenticated">Twoja ocena: &nbsp;<star-rating :inline="true" :star-size="16" :increment="0.5" :fixed-points="2" :rating=parseInt(this.$store.state.restWybranaPotrawaOcena[0].Ocena) @rating-selected="setRating" inactive-color="#bbbbbb" active-color="#ffa800" /></span>
                            <div v-show="this.wybraneDanie != '' " style="margin-top:2%;" v-if="$auth.isAuthenticated">
                                <b-form-textarea
                                    id="textarea"
                                    v-model="text"
                                    placeholder="Może chcesz coś o tym daniu napisać?"
                                    rows="3"
                                    max-rows="6"
                                ></b-form-textarea>
                            </div>
                            <div v-show="this.wybraneDanie != '' ">
                                <div v-if="$auth.isAuthenticated">
                                    <b-form-checkbox
                                    id="checkbox-1"
                                    v-model="czyAnonim"
                                    name="checkbox-1"
                                    value="1"
                                    unchecked-value="0"
                                    style="margin:5px"
                                    >
                                    &nbsp; Anonimowa opinia
                                    </b-form-checkbox>
                                </div>
                                <label v-show="ocena==9" v-if="$auth.isAuthenticated" style="color:darkred;">Musisz wybrać ocenę żeby móc kontynuować</label>
                                <div style="display:flex; justify-content:center">
                                <b-button style="margin:2%" :disabled="ocena==9" variant="success" v-if="$auth.isAuthenticated" @click="ocenienie">Oceń</b-button>
                                 <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> aby podzielić się własną opinią!</label>
                                <b-button 
                                v-if="
                                $auth.isAuthenticated
                                &&
                                this.$store.state.restWybranaPotrawaOcena[0] != false
                                &&
                                this.$store.state.restWybranaPotrawaOcena[0].Autor == this.$store.state.currentUserEmail

                                " 
                                style="margin:2%"  variant="danger" @click="usunOpinie">Usuń opinie</b-button>
                                </div>
                                <b-alert 
                                    style="padding:2%; margin-top:2%;"
                                    :show="dismissCountDown"
                                    fade
                                    variant="success"
                                    @dismiss-count-down="countDownChanged"
                                >
                                    Wykonano pomyślnie!
                                </b-alert>
                            </div>
                            <div id="kom"  v-show="this.wybraneDanie != '' "
                                v-if="
                                this.$store.state.restWybranaPotrawaOcena[0].Komentarz != 'brak' 
                                &&
                                this.$store.state.restWybranaPotrawaOcena.length > 0 != null 
                                "
                                style="margin-bottom:5px; margin-top:5px; border-radius:10px; padding-bottom:5%;"
                                >
                                    <div style="font-weight: 600; border-radius:10px; text-align: center; padding:1%;">
                                        <div style="text-transform:uppercase">Twój komentarz:</div>
                                    </div>                                 
                                    <div id="insKom" style="border-top:1px solid black;border-bottom:1px solid black">                                    
                                        <div id="komTekst" style="padding:1%;font-weight:600;justify-content:space-around;display:flex; border-bottom:1px inset">
                                            <div style="text-align: left; width:50%;"> {{ this.$store.state.restWybranaPotrawaOcena[0].Autor }} <span v-if="this.$store.state.restWybranaPotrawaOcena[0].Anonim == 1">(Anonimowa)</span> </div> <div style="width:30%">Data: {{ this.$store.state.restWybranaPotrawaOcena[0].Data }}</div><div style="width:19%; text-align:right">Ocena: {{ this.$store.state.restWybranaPotrawaOcena[0].Ocena }}</div></div>
                                        <div id="tresc" style="border-radius:10px; border-color:transparent;">
                                            <div style="text-align: left; font-style:italic; padding:2%" v-if="this.$store.state.restWybranaPotrawaOcena[0].Komentarz">{{ this.$store.state.restWybranaPotrawaOcena[0].Komentarz }}   </div>
                                            <div style="text-align:left; color:red; padding: 2%;" v-else><i>Brak komentarza.</i></div>
                                        </div>
                                    </div>
                            </div>
                            <div id="kom" v-show="this.wybraneDanie != '' "
                                v-if="
                                this.$store.state.restWybranaPotrawaOcenaSpolecznosci[0].Komentarz != 'qqqqqqqqq'
                                &&
                                this.$store.state.restWybranaPotrawaOcenaSpolecznosci[0].Autor != 'brak'
                                "
                                style="margin-bottom:5px; margin-top:5px; padding-bottom:5%;"
                                >
                                   <div id="nagg" style="font-weight: 600; text-align: center; padding:1%; border-bottom:1px solid black; text-transform:uppercase">
                                       <span>Komentarze społeczności: </span>
                                       <span style="font-family:arial">({{this.$store.state.restWybranaPotrawaOcenaSpolecznosci.length}}) </span> 
                                   </div> 
                                    <div id="insKom" v-for="(danieSuperKom, index) in this.$store.state.restWybranaPotrawaOcenaSpolecznosci.slice(komLimMin,komLimMax)"  :key="index" style="background:#ededed; padding:0%; margin:1%; ">
                                        <div v-if="danieSuperKom.Komentarz != '' && danieSuperKom.Komentarz != null ">
                                            <div id="komTekst" style="padding:1%; font-weight:600; justify-content:space-around; display:flex; border-bottom:1px inset">
                                                <div style="text-align: left; width:50%;" v-if="danieSuperKom.Anonim == 0 || danieSuperKom.Anonim == null">{{ danieSuperKom.Autor }}</div>
                                                <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                                                <div style="width:30%;">Data: {{danieSuperKom.Data}}</div>
                                                <div style="width:20%; text-align:right">Ocena: {{danieSuperKom.Ocena}}</div>
                                            </div>
                                            <div id="tresc">
                                                <div style="text-align: left; font-style:italic; padding:2%">{{ danieSuperKom.Komentarz }}</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div id="komTekst" style="padding:1%; font-weight:600; justify-content:space-around;  display:flex">
                                                <div style="text-align: left; width:50%;" v-if="danieSuperKom.Anonim == 0 || danieSuperKom.Anonim == null">{{ danieSuperKom.Autor }}</div>
                                                <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                                                <div style="width:30%;">Data: {{danieSuperKom.Data}}</div>
                                                <div style="width:20%; text-align:right">Ocena: {{danieSuperKom.Ocena}}</div>
                                            </div>
                                            <div id="tresc">
                                                <div style="text-align:left; color:red; padding: 2%;"><i>Brak komentarza.</i></div>
                                            </div>
                                        </div>
                                    </div>
                                <b-button-group style="padding-top:1%; text-align:center !important; display:block">
                                    <b-button id="wiecej" v-if="komLimMax < this.$store.state.restWybranaPotrawaOcenaSpolecznosci.length" @click="komLimMax+=5">Wyświetl więcej</b-button>
                                    <b-button id="mniej" v-if="komLimMax > 7" @click="komLimMax-=5">Wyświetl mniej</b-button>
                                </b-button-group>
                            </div>
                            <div v-else style="font-weight:600">Brak komentarzy społeczności! Bądź pierwszy!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <div v-else @mouseover="goHome">Brak strony</div>
      </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import Naglowek from '../components/Naglowek.vue'
export default {
  name: "Restauracja",
  metaInfo:{
    title: 'Zjadłem.pl | Restauracja'
  },
  components: {StarRating, Naglowek},
  data() {
    return {
        ocena:9,
        ocenaSpolecznosci: [],
        wybraneDanie: '',
        twojaOcena: 0,
        dismissSecs: 3,
        dismissCountDown: 0,
        text: null,
        avg: '',
        komLimMax:  2,
        komLimMin: 0,
        czyAnonim: 0,
        usuniete: 0,
    };
  },
  created (){
    this.$store.dispatch('bindMenu')
  },
  methods: {
    login () {
      this.$auth.loginWithRedirect();
    },
    calculateOcena () {
        var sum = 0;
        for (var i=0; i<this.ocenaSpolecznosci.length; i++){
            sum += parseInt(this.ocenaSpolecznosci[i].Ocena, 10);
        }
        var avg = sum/this.ocenaSpolecznosci.length
        this.avg = avg;
    },
    setRating: function(rating){
      this.ocena= rating;
      this.$store.state.restSelectedOcena= rating;
    },
    changeCurrentDanie(danie) {
      this.wybraneDanie = danie.id;
      this.$store.state.restWybranaPotrawaId = danie.id;
      this.$store.state.restWybranaPotrawaKategoria = danie.Kategoria;
      this.$store.state.restWybranaPotrawaNazwa = danie.Nazwa;
      if(danie.Skladniki != null){
          this.$store.state.restWybranaPotrawaSkladniki = danie.Skladniki;
      }
      else{
          this.$store.state.restWybranaPotrawaSkladniki = "Brak danych od restauracji";
      }
      
      this.ocena=9;
      this.$store.dispatch('bindOcena')
    },
    ocenienie(){
        this.$store.state.czyAnonim = this.czyAnonim;
        this.$store.state.danieKomentarz = this.text;
        this.$store.dispatch('bindOcenaAdd')
        this.$store.dispatch('bindOcena')
        this.dismissCountDown = this.dismissSecs
        //zeby wyswietlalo ocene spolecznosci na zywo mozna dodac COMPUTED ktory obserwuje zmienna, rating to bedzie zmienna, a zmienna bedzie aktualizowana w tej funkcji
        //funkcja ocenienie wysyla ocene, aktualizuje ze stanu wartosc srednia, a nastepnie computed obserwujacy ta zmienna aktualizuje ja
    },
    usunOpinie(){
        console.log("usuwam opinie")
        this.usuniete == 1;
        this.$store.dispatch('bindOcenaRem')
        this.$store.dispatch('bindOcena')
        this.dismissCountDown = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
        this.$store.dispatch('bindOcena')
        this.dismissCountDown = dismissCountDown
    }

  },
  computed: {
      komState() {
          return this.text.length > 10 ? true : false
      }
  }
};
</script>

<style lang="scss" scoped>
#restauracja{
  text-align: center;
  width:100%;
  color: black;
  //padding:1%;
  margin-left:auto;
  margin-right: auto;
  margin-top:0;
  font-family: 'Raleway', sans-serif;
  padding-top:0;
}
#tlo{
  width:80%;
  height:100%;
  
  color:white;
  display:flexbox;
  margin-left: auto;
  margin-right: auto;
  padding:1%;
}
.informacjeRest{
    background:rgba(255, 255, 255, 0.884);
    max-height:100%;
    overflow-y:auto !important;
}
#logText:hover{
    cursor: pointer;
}
#daneRestauracji{
    //height:100vh;
    margin-left:auto;
    margin-right: auto;
    padding:0;
}
#daneRestauracji p{
    margin:0;
}
.menu{
    padding:2%;
    width:50%;
    //height:90%;
    //box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.potrawa{
    padding:2%;
    width:50%;
    overflow-y:hidden !important;
    //overflow-y:auto !important;
    //max-height:60vh;
    //
}
#potrawaIns{
    //overflow-y:auto !important;
    //max-height:100%;
    //padding:5%;
}
#menuOpis{
    height:fit-content;
    margin-left:auto;
    margin-right: auto;
    word-wrap: break-word !important;
    padding:0;
    font-size: 1rem;
    white-space: pre-wrap;
}
.logoRestDivInfo{
    width:20%;
    margin-bottom:1%;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.logoRest{
    width:20vh;
}
.avatar {
  vertical-align: middle;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
}
#naglowek svg:hover{
    cursor: pointer;
}
#danie{
    padding:1%;
    background:rgb(236, 236, 236);
    text-align: left;
}
#danie:hover{
    background:rgb(220,220,220);
}
#danie #kat{
    color:rgb(99, 59, 59);
    font-weight: bolder;
    word-wrap: break-word;
}
#danie #id {
    font-family: arial;
    word-wrap: break-word;
    font-weight: bolder;
}
#skladniki{
    font-style:italic;
    word-wrap: break-word;
}
#nazwaRest{
    font-size:3vw;
}
h1{
  overflow: hidden;
  font-size:3vw;
  font-weight: 300;
  margin: 0;
  margin-top:1vh;
  padding:0;
  padding-bottom:3vh;
  text-shadow: 0 4px 8px rgba(0,0,0,0.19);
}
#kom{
  border: 1px solid black;
  border-radius: 10px;
}
#kom #insKom{
    padding:0;
    margin: 0 !important;
    background:white !important;
}
#kom #insKom #komTekst{
  background:rgb(255, 255, 255);
}
#kom #insKom #tresc{
  background:rgb(255, 255, 255);
  border-bottom:1px solid black
}
#wiecej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background:rgb(243, 243, 243);
}
#mniej{
  color:black;
  text-transform: uppercase;
  border:none;
  font-size:0.7rem;
  font-weight: 300;
  border:1px solid rgba(0, 0, 0, 0.178);
  background:rgb(243, 243, 243);
}
</style>