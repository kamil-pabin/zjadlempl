/* eslint-disable vue/no-unused-components */
<template>
  <div id="restauracja">
      <div id="tlo2">
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2"/>
      </div>
      <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image4"/>
      </div>
    </div>
      <div id="tlo">
        <div v-if="this.$store.state.restId != '' " id="daneRestauracji"> 

            <div class="restauracjaA" style="height:fit-content">
                <div class="flex">
                <div class="logoRestDiv">
                    <b-img :src="this.$store.state.restLogo" fluid class="logoRest"/>
                </div>
                <div class="informacje" style="display:flexbox; height:fit-content">
                        <div id="wierszP" style="width:100%; height:10%;">
                            <div id="nazwaRest" style="font-size:1rem">{{ this.$store.state.restNazwa }}</div>
                        </div> 

                        <div id="wierszD" style="width:100%; height:fit-content; display:flex; ">
                            <div id="kolumnaP" style="width:50%; height:100%; display:block">
                                <div id="kuchenki" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                                <span style="font-weight:700">Kuchnie:</span>
                                <span class="kuchnie" v-for="kuchniaNazwa in this.$store.state.restKuchnie" :key="kuchniaNazwa" style="font-style:italic;">
                                    {{ kuchniaNazwa }} 
                                </span>
                                </div>
                                <div id="restAdresMiasto" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                                <span style="font-weight:700">Miasto:</span>
                                <span id="itemAdres" style="font-style:italic;">
                                    {{this.$store.state.restMiasto}}
                                </span>
                                </div>
                                <div id="restAdresUlica" style="width:100%; height:fit-content; display:inline-block; margin:0; padding:0; text-align:left">
                                <span style="font-weight:700">Ulica:</span>
                                <span id="itemAdres" style="font-style:italic;">
                                    {{this.$store.state.restUlica}} {{this.$store.state.restLokal}}
                                </span>
                                </div>
                                
                            </div>
                            <div id="kolumnaD" style="width:50%; height:100%; display:flex;">
                                <div id="restOcena" style="width:100%; height:100%; display:block; margin:auto; ">   
                                    <div style="display:block;  width:100%; height:fit-content; padding:0%;">
                                        Ocena społeczności:
                                        <div><star-rating :read-only="true" :inline="true" :star-size="18" :increment="0.01" :fixed-points="2"  :rating=parseFloat(this.$store.state.avgRestOcena) inactive-color="#bbbbbb" /></div>
                                    </div>
                                    <div style="display:block;  width:100%; height:fit-content; padding:0%;" v-if="$auth.isAuthenticated">
                                        Twoja ocena:
                                        <div><star-rating :inline="true" :star-size="18" :increment="0.5" :fixed-points="2"  :rating=parseFloat(this.$store.state.restWybranaOcena[0].Ocena) @rating-selected="setRatingRest" inactive-color="#bbbbbb" active-color="#ffa800" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>     
                        <div id="wierszT" style="width:100%; height:fit-content; display:flex;">
                            <div id="kolumnaG" style="display:block; width:100%; ">
                                 <div v-show="currentRestauracja != 'brak' " v-if="$auth.isAuthenticated" style="margin-top:2%;">
                                    <b-form-textarea
                                        id="textarea"
                                        v-model="text"
                                        placeholder="Może chcesz coś o tej restauracji napisać?"
                                        rows="3"
                                        max-rows="6"
                                    ></b-form-textarea>
                                </div>
                                
                                <div v-show="currentRestauracja != 'brak' ">
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
                                    <label v-show="ocenaRest==9" v-if="$auth.isAuthenticated" style="color:darkred;">Musisz wybrać ocenę żeby móc kontynuować</label>
                                    <div style="display:flex; justify-content:center">
                                    <b-button style="margin:2%;" :disabled="ocenaRest==9" variant="success" v-if="$auth.isAuthenticated" @click="ocenienieRest">Oceń</b-button>
                                        <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> aby podzielić się własną opinią!</label>
                                    <b-button 
                                    v-if="
                                    $auth.isAuthenticated
                                    &&
                                    this.$store.state.restWybranaOcena[0] != false
                                    &&
                                    this.$store.state.restWybranaOcena[0].Autor == this.$store.state.currentUserEmail

                                    " 
                                    style="margin:2%; "  variant="danger" @click="usunOpinieRest">Usuń opinie</b-button>
                                    </div>
                                    <b-alert 
                                        style="padding:2%; margin-top:2%;"
                                        :show="dismissCountDownRest"
                                        fade
                                        variant="success"
                                        @dismiss-count-down="countDownChangedRest"
                                    >
                                        Wykonano pomyślnie!
                                    </b-alert>
                                </div>
                                <div id="kom" v-show="currentRestauracja != 'brak' "
                                    v-if="
                                    this.$store.state.restWybranaOcena[0].Komentarz != 'brak' 
                                    &&
                                    this.$store.state.restWybranaOcena.length >0 != null
                                    "
                                    style="margin-bottom:5px; margin-top:5px;  padding-bottom:5%; "
                                    >
                                    <div style="font-weight: 600; text-align: center; padding:1%; text-transform:uppercase;">Twój komentarz</div>
                                    <div id="insKom" style="box-shadow: 0px 0px 10px 0px rgba(255, 200, 0, 1);">  
                                        <div id="komTekst" style="padding:1%;font-weight:600;justify-content:space-around;display:flex; ">
                                            <div style="text-align: left; width:50%;"> {{ this.$store.state.restWybranaOcena[0].Autor }} <span v-if="this.$store.state.restWybranaOcena[0].Anonim == 1">(Anonimowa)</span> </div> <div style="width:25%">Data: {{ this.$store.state.restWybranaOcena[0].Data }}</div><div style="width:19%; text-align:right">Ocena: {{ this.$store.state.restWybranaOcena[0].Ocena }}</div>
                                        </div>
                                        <div id="tresc">
                                        <div>
                                            <div style="text-align: left; font-style:italic; padding:2%" v-if="this.$store.state.restWybranaOcena[0].Komentarz">{{ this.$store.state.restWybranaOcena[0].Komentarz }}   </div>
                                            <div style="text-align:left; color:red; padding: 2%;" v-else><i>Brak komentarza.</i></div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="kom" v-show="currentRestauracja != 'brak' "
                                    v-if="
                                    this.$store.state.restWybranaOcenaSpolecznosci[0].Komentarz != 'qqqqqqqxDXSx$qq'
                                    &&
                                    this.$store.state.restWybranaOcenaSpolecznosci[0].Autor != 'brak'
                                    "
                                    style="margin-bottom:5px; margin-top:5px;"
                                >
                                    <div style="font-weight: 600; text-align: center; padding:1%;  text-transform:uppercase">Komentarze społeczności <span style="font-family:arial"> ({{this.$store.state.restWybranaOcenaSpolecznosci.length}})</span></div>
                                    
                                    <div id="insKom" v-for="(superOcena, index) in this.$store.state.restWybranaOcenaSpolecznosci.slice(komLimMin,komLimMax)"  :key="index" style="background:#ededed; padding:0%; margin:1%;">
                                        <div v-if="superOcena.Komentarz != '' && superOcena.Komentarz != null ">
                                            <div id="komTekst" style="padding:1%; font-weight:600; justify-content:space-around; display:flex; ">
                                                <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                                                <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                                                <div style="width:30%;">Data: {{superOcena.Data}}</div>
                                                <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                                            </div>
                                            <div id="tresc">
                                                <div style="text-align: left; font-style:italic; padding:2%">{{ superOcena.Komentarz }}</div>
                                            </div>
                                        </div>
                                        <div v-else>
                                            <div id="komTekst" style="padding:1%;  font-weight:600; justify-content:space-around;  display:flex;">
                                                <div style="text-align: left; width:50%;" v-if="superOcena.Anonim == 0 || superOcena.Anonim == null">{{ superOcena.Autor }}</div>
                                                <div style="text-align: left; width:50%;" v-else>Anonim</div> 
                                                <div style="width:30%;">Data: {{superOcena.Data}}</div>
                                                <div style="width:20%; text-align:right">Ocena: {{superOcena.Ocena}}</div>
                                            </div>
                                            <div id="tresc">
                                                <div style="text-align:left; color:red; padding: 2%;"><i>Brak komentarza.</i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <b-button-group style="padding:1%; text-align:center">
                                        <b-button id="wiecej" v-if="komLimMax < this.$store.state.restWybranaOcenaSpolecznosci.length" @click="komLimMax+=5">Wyświetl więcej</b-button>
                                        <b-button id="mniej" v-if="komLimMax > 7" @click="komLimMax-=5">Wyświetl mniej</b-button>
                                    </b-button-group>
                                </div>
                                <div v-else style="font-weight:600">Brak komentarzy społeczności! Bądź pierwszy!</div>
                                </div>
                            </div>
                </div>
            </div>           
          </div>


<!--komentarze i oceny dan -->
            <div class="informacjeRest">
                <div>
                    <div class="flex" style="box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19); ">
                        <div class="menu" style="display:block; text-align:left; background: #eeeeee; ">
                            <h2>Menu: &nbsp;</h2>
                            <div class="kuchnie" style="display:block" id="menuOpis" v-for="(danieSuper, index) in this.$store.state.restMenu"  :key="index" @mouseover="changeCurrentDanie(danieSuper), komLimMax=2">
                                <div id="danie">
                                    <span id="id">{{ index + 1 }}.</span>
                                    <span id="kat"> {{ danieSuper.Kategoria }}: </span>
                                    <span id="skladniki">{{ danieSuper.Nazwa }} &nbsp;</span>
                                </div>
                            </div>
                        </div> 
                        <div class="potrawa" style="display:block; text-align:left; ">
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
                                    id="checkbox-2"
                                    v-model="czyAnonim"
                                    name="checkbox-2"
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
                                style="margin-bottom:5px; margin-top:5px; padding-bottom:5%;"
                                >
                                    <div style="font-weight: 600;  text-align: center; padding:1%;">
                                        <div style="text-transform:uppercase">Twój komentarz:</div>
                                    </div>                                 
                                    <div id="insKom">                                    
                                        <div id="komTekst" style="padding:1%;font-weight:600;justify-content:space-around;display:flex;">
                                            <div style="text-align: left; width:50%;"> {{ this.$store.state.restWybranaPotrawaOcena[0].Autor }} <span v-if="this.$store.state.restWybranaPotrawaOcena[0].Anonim == 1">(Anonimowa)</span> </div> <div style="width:30%">Data: {{ this.$store.state.restWybranaPotrawaOcena[0].Data }}</div><div style="width:19%; text-align:right">Ocena: {{ this.$store.state.restWybranaPotrawaOcena[0].Ocena }}</div></div>
                                        <div id="tresc">
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
                                   <div id="nagg" style="font-weight: 600; text-align: center; padding:1%; text-transform:uppercase">
                                       <span>Komentarze społeczności: </span>
                                       <span style="font-family:arial">({{this.$store.state.restWybranaPotrawaOcenaSpolecznosci.length}}) </span> 
                                   </div> 
                                    <div id="insKom" v-for="(danieSuperKom, index) in this.$store.state.restWybranaPotrawaOcenaSpolecznosci.slice(komLimMin,komLimMax)"  :key="index" style="background:#ededed; padding:0%; margin:1%; ">
                                        <div v-if="danieSuperKom.Komentarz != '' && danieSuperKom.Komentarz != null ">
                                            <div id="komTekst" style="padding:1%; font-weight:600; justify-content:space-around; display:flex;">
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
import image1 from "../assets/background1.jpeg"
import image2 from "../assets/background2.jpeg"
import image3 from "../assets/background3.jpeg"
import image4 from "../assets/background4.jpeg"
import StarRating from 'vue-star-rating'
export default {
  name: "Restauracja",
  metaInfo:{
    title: 'Zjadłem.pl | Restauracja'
  },
  components: {StarRating},
  data() {
    return {
        images: {
            image1,
            image2,
            image3,
            image4,
        },
        ocena:9,
        ocenaSpolecznosci: [],
        wybraneDanie: '',
        twojaOcena: 0,
        dismissSecs: 3,
        dismissSecsRest: 3,
        dismissCountDown: 0,
        dismissCountDownRest: 0,
        text: null,
        avg: '',
        komLimMax:  2,
        komLimMin: 0,
        czyAnonim: 0,
        usuniete: 0,
    };
  },
  created (){
    this.$store.dispatch('bindOcenaRest')
    this.$store.dispatch('bindOcenaRest')
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
      this.ocena = rating;
      this.$store.state.restSelectedOcena= rating;
    },
    setRatingRest: function(rating){
      this.ocenaRest = rating;
      this.$store.state.restSelectedRestOcena= rating;
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
    ocenienieRest(){
        this.$store.state.czyAnonim = this.czyAnonim;
        this.$store.state.restKomentarz = this.text;
        this.$store.commit('addOcenaRest');
        this.dismissCountDownRest = this.dismissSecs;
    },
    usunOpinie(){
        console.log("usuwam opinie")
        this.usuniete == 1;
        this.$store.dispatch('bindOcenaRem')
        this.$store.dispatch('bindOcena')
        this.dismissCountDown = this.dismissSecs
    },
    usunOpinieRest(){
        console.log("usuwam opinie")
        this.$store.commit('remOcenaRest');
        this.dismissCountDownRest = this.dismissSecs
    },
    countDownChanged(dismissCountDown) {
        this.$store.dispatch('bindOcena')
        this.dismissCountDown = dismissCountDown
    },
    countDownChangedRest(dismissCountDownRest) {
        this.$store.dispatch('bindOcenaRest')
        this.dismissCountDownRest = dismissCountDownRest;
    },


  },
  computed: {
      komState() {
          return this.text.length > 10 ? true : false
      }
  }
};
</script>

<style lang="scss" scoped>
#tlo2{
  position:absolute;
  max-height:100vh;
  padding:0;
  margin:0;
  z-index:-1;
}
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
.restauracjaA{
  background: linear-gradient(90deg, rgb(233, 233, 233) 0%, rgba(233, 233, 233, 0.473) 54%, rgba(255, 255, 255, 0) 100%);
  padding-right: 3%;
  margin-bottom:2%;
  color:rgb(63, 63, 63);
  -webkit-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  -moz-box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  box-shadow: -8px 8px 15px -8px rgba(66, 68, 90, 1);
  border-radius: 5vw 0 0 0vw;
  transition: linear 0.3s;
}
.restauracjaA .logoRestDiv{
  //width:13vw;
  //height:5vh;
  //background:yellow;
  border-radius: 25vw;
  //padding:3%;
}
.restauracjaA .informacje{
  width:75%;
  height:auto;
  //text-align:center;
  //background:blue;
  //display:block;
  padding:2%;
  font-size: 0.8rem;
}
#tlo{
  //padding-top:1%;
  border-radius: 5vw 0 0 0vw;
  width:60%;
  z-index: 0;
  background:white !important;
  margin:auto;
  margin-top:10%;
}
.informacjeRest{
    background:rgba(255, 255, 255, 0.884);
    max-height:100%;
    //ow-y:auto !important;
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
    //overflow-y:hidden !important;
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
#naglowek svg:hover{
    cursor: pointer;
}
#danie{
    padding:1%;
    //background:rgb(236, 236, 236);
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
  //border: 1px solid black;
  //border-radius: 10px;
  
}
#kom #insKom{
    padding:0;
    margin: 0 !important;
    background:rgb(255, 255, 255) !important;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
#kom #insKom #komTekst{
  //background:rgb(255, 255, 255);
}
#kom #insKom #tresc{
  //background:rgb(255, 255, 255);
  //border-bottom:1px solid black
  margin-bottom:10px;
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