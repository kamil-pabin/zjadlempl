<template>
  <div id="profile">
    <div class="background" id="backgroundFirst">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2" alt="background" />
    </div>

    <div id="tlo">
      <div class="menuSmakosza" v-if="$auth.isAuthenticated">
        <h1>Twój profil Smakosza</h1>
        <div id="infoProf">
          <div id="avatarDiv">
            <img class="avatar" :src="$auth.user.picture" alt="avatar" />
          </div>
          <div id="infoDiv">
            <!--<p>Liczba ocen: {{this.$store.state.listaOcen.length}}</p> -->
            <p id="poleMojEmail">Email: {{ $auth.user.email }}</p>
            <p id="poleMojNick">Nick: {{ $auth.user.nickname }}</p>
            <p style="color:green; font-weight:700" id="czyMod" v-if="this.$store.state.currentUser_Role.includes('Moderator') ">Moderator</p>
            
          </div>
          
        </div>
        <b-tabs content-class="mt-3" fill>
          <b-tab title="Oceny">
            <h3>Moje oceny:</h3>
            <div>
              <b-table
                hover
                sort-icon-right
                :items="this.$store.state.listaOcen"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="sm"
                style="font-size:0.8rem"
                sticky-header
              ></b-table>
            </div>
            <div>
              Sortowanie przez: <b>{{ sortBy }}</b
              >, Jak:
              <b>{{ sortDesc ? "Malejąco" : "Rosnąco" }}</b>
            </div>
          </b-tab>
          <b-tab title="Moje statystyki">
            <h3>Moje statystyki</h3>
            <h4 style="font-style:italic">*W budowie*</h4>
            <div v-for="(superOcena, index) in this.$store.state.listaOcen"  :key="index" >
              
            </div>
            
          </b-tab>
          <b-tab title="Moi Znajomi">
            <h3>Moja lista znajomych</h3>
            <div>
              <b-table
                hover
                sort-icon-right
                :items="this.$store.state.listaZnaj"
                responsive="sm"
              >
              <template #cell(emailZnajomego)="data">
                <!-- `data.value` is the value after formatted by the Formatter -->
                <span @click="odwiedzZnajomego(data.value)" style="cursor:pointer; color:blue">{{ data.value }}</span>
              </template>
              
              </b-table>
            </div>
          </b-tab>
          <b-tab title="Dodaj znajomego">
              <div class="rowek">
                <p>
                  Jak dodać znajomego? Podaj mu swój adres e-mail oraz prywatny kod
                  znajomego!
                </p>
              </div>
              <div class="panel">
                <div class="kolumna">
                  <div> Twój kod znajomego:
                      <span id="twoj_kod_znajomego" v-show="pokaz==true"><strong>{{ kodUs }}</strong></span> 
                      <b-button style="margin-left:2%;" :pressed.sync="pokaz" @click="wyswietlKod" size="sm" pill variant="outline-secondary">Pokaż/ukryj</b-button>
                  </div>
                  <div>
                    <b-form style="margin-top:2%; display:block" id="zmianaKod" v-if="$auth.isAuthenticated">
                      <div style="display:flex">
                        <p>Zmień swój kod:</p>
                        <b-form-input
                            style="width:40%; margin:2%"
                            id="textarea_nowyKod"
                            :state="validation"
                            v-model="kodNowy"
                            placeholder="Wpisz nowy kod"
                            rows="1"
                            size="sm"
                            max-rows="1"
                            required
                        >
                        </b-form-input>
                      </div>
                      <b-form-valid-feedback :state="validation">
                        <b-button style="margin:1%" pill variant="success" size="sm" v-if="$auth.isAuthenticated" @click="zmienKod" id="button_zmienKod">Zmień</b-button>
                        <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> </label>
                      </b-form-valid-feedback>
                      <b-form-invalid-feedback :state="validation">
                        Podaj kod (Minimum 5 znaków, maksimum 20)
                      </b-form-invalid-feedback>
                    </b-form>
                  </div>
                </div>
                <div class="kolumna" style="width:fit-content; margin:auto; margin-top:0; text-align:center;">
                  <div style="margin:2%;" v-if="$auth.isAuthenticated">
                      <b-form-input
                          style="margin:3%"
                          id="textarea_mailKumpla"
                          v-model="mailKumpla"
                          placeholder="Wpisz mail znajomego"
                          rows="1"
                          size="sm"
                          max-rows="1"
                      ></b-form-input>
                      <b-form-input
                          style="margin:3%"
                          id="textarea_kodKumpla"
                          size="sm"
                          v-model="kodKumpla"
                          placeholder="Wpisz kod znajomego"
                          rows="1"
                          max-rows="1"
                      ></b-form-input>
                  </div>
                  <div id="przycisk_dodajZnajomego" style="margin:auto; margin-bottom:2%;">
                      <b-button style="margin:0" pill variant="outline-secondary" size="sm" v-if="$auth.isAuthenticated" @click="dodajKumpla">Dodaj znajomego</b-button>
                      <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> </label>
                  </div>
                  <span id="dodanie_processing" v-if="this.$store.state.statusDodania == '2'">
                      <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
                  </span>
                  <span id="dodanie_success" v-if="this.$store.state.statusDodania == '1'">
                      <b-iconstack font-scale="2">
                        <b-icon stacked icon="square"></b-icon>
                        <b-icon stacked icon="check"></b-icon>
                      </b-iconstack>
                  </span>
                  <span id="dodanie_error" v-if="this.$store.state.statusDodania == '0'">
                      <b-iconstack font-scale="2">
                        <b-icon stacked icon="square"></b-icon>
                        <b-icon stacked icon="x"></b-icon>
                      </b-iconstack>
                  </span>
                </div>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from "../assets/background1.webp"
import image2 from "../assets/background2.webp"
import image3 from "../assets/background3.webp"
import image4 from "../assets/background4.webp"
export default {
  
  name: "Profile",
  metaInfo: {
    title: "Zjadłem.pl | Profil",
    htmlAttrs: {
      lang: 'pl-PL'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Strona pozwalajaca ocenic jedzenie w restauracjach - Zjadlempl.' },
    ]
  },
  components: { },
  created() {
    if(this.$auth.isAuthenticated){
    if(this.$auth.user.email != null){
      this.$store.state.currentUserEmail = this.$auth.user.email;
    }
    else{
      this.$store.state.currentUserEmail = null;
    }
    this.$store.dispatch("bindUserOceny");
    this.$store.state.statusDodania = '3'
    }
  },
  data() {
    return {
      pokaz: false,
      kodUs: '',
      kodNowy: '',
      kodKumpla: '',
      mailKumpla: '',
      show: true,
      sortBy: "Restauracja",
      sortDesc: false,
      images: {
        image1,
        image2,
        image3,
        image4,
      },
      fields: [
        {
          key: "Restauracja",
          sortable: true,
        },
        {
          key: "Potrawa",
          sortable: false,
        },
        {
          key: "Komentarz",
          sortable: false,
        },
        {
          key: "Ocena",
          sortable: true,
        },
        {
          key: "Data",
          sortable: true,
        },
        {
          key: "Anonim",
          sortable: true,
        },
      ],
    };
  },
  methods: {
    zmienKod() {
      this.$store.state.nowyKod = this.kodNowy;
      this.$store.dispatch('nowyKodUsera');
      this.$store.dispatch("bindUserOceny");
      this.pokaz=false;
    },
    zobaczInfo(){
      //console.log(this.$auth.user);
      //console.log(this.$auth.user["https://zjadlem.pl/role"].includes('Moderator'))
    },
    wyswietlKod() {
      if(this.$store.state.kodUsera != null && this.$store.state.kodUsera != ''){
        if(this.$store.state.kodUsera.kodZnajomego != null && this.$store.state.kodUsera.kodZnajomego != ''){
          this.kodUs = this.$store.state.kodUsera.kodZnajomego;
        }
      }
      else{
        this.kodUs = "Nie posiadasz kodu znajomego, ustaw go poniżej"
      }
      
    },
    dodajKumpla() {
      this.$store.state.statusDodania = '2';
      this.$store.state.currentUserNickname = this.$auth.user.nickname;
      this.$store.state.kodZnajomego = this.kodKumpla;
      this.$store.state.emailZnajomego = this.mailKumpla;
      this.$store.dispatch('dodajKumpla');
    },
    odwiedzZnajomego(email){
      this.$store.state.wybranyZnajomy = email;
      this.$router.push("/profile_friend");
      console.log(this.$store.state.wybranyZnajomy)
    }
  },
  computed: {
    validation() {
        return this.kodNowy.length > 4 && this.kodNowy.length <= 20
      }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .sr-only {
  display: none !important;
}
.background {
  width:100vw;
  z-index:-1000;
  background:white;
  position:absolute;
}
#profile {
  width: 100%;
  color: white;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  text-transform: uppercase;
  padding-top: 0;
}
#tlo {
  width: 80%;
  z-index:10;
  display: flexbox;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  margin-top:14vh;
}
.menuSmakosza {
  color: black;
  background: rgb(255, 255, 255);
  min-height: 70vh;
  height:fit-content;
  -webkit-box-shadow: 0px 0px 20px 7px rgba(0,0,0,0.6); 
  box-shadow: 0px 0px 20px 7px rgba(0,0,0,0.6);
  padding: 1%;
  border-radius: 50px;
  border: 1px solid black;
}
#dane {
  height: fit-content;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}
#dane p {
  margin: 0;
}
.avatar {
  vertical-align: middle;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
}
#infoProf{
  margin:1%;
  text-align:left;
  display:flex;
  padding:1%;
}
#infoProf div{
  margin-right:5%;
}
#infoDiv{
  height:fit-content;
  margin-top:auto;
  margin-bottom:auto;
  padding:0;
}
#infoDiv p{
  margin:auto;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.192);
  font-weight: 300;
}
h1 {
  overflow: hidden;
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0;
  margin-top: 2%;
  padding: 0;
  padding-bottom: 3vh;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.596);
  font-weight: 500;
}
.panel{
  display:flex;
  margin:auto;
  width:90%;
  height:100%;
}
.panel .kolumna{
  width:50%;
  text-align: left;
}
#zmianaKod p{
  margin:auto;
  margin-left:0;
  margin-right: 0;
}
</style>
