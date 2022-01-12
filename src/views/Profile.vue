<template>
  <div id="profile">
    <div id="tlo">
      <naglowek
        text="ZJADŁEM.PL | PROFIL SMAKOSZA"
        style="margin-bottom: 2%"
      ></naglowek>
      <div class="menuSmakosza" v-if="$auth.isAuthenticated">
        <h1>Twój profil Smakosza</h1>

        <b-tabs content-class="mt-3" fill>
          <b-tab title="Mój profil" active>
            <div id="avatarDiv">
              <img class="avatar" :src="$auth.user.picture" />
            </div>
            <p>Imię i Nazwisko: {{ $auth.user.name }}</p>
            <p>Email: {{ $auth.user.email }}</p>
            <p>Nick: {{ $auth.user.nickname }}</p>
          </b-tab>
          <b-tab title="Oceny">
            <h3>Moje oceny:</h3>
            <div>
              <b-table
                striped
                hover
                sort-icon-right
                :items="this.$store.state.listaOcen"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="sm"
              ></b-table>
            </div>
            <div>
              Sorotowanie przez: <b>{{ sortBy }}</b
              >, Jak:
              <b>{{ sortDesc ? "Malejąco" : "Rosnąco" }}</b>
            </div>
          </b-tab>
          <b-tab title="Moi Znajomi">
            <h3>Moja lista znajomych</h3>
            <div>
              <b-table
                striped
                hover
                sort-icon-right
                :items="this.$store.state.listaZnaj"
                responsive="sm"
              ></b-table>
            </div>
          </b-tab>
          <b-tab title="Dodaj znajomego"
            ><h3>Znajomi</h3>
            <p>
              Jak dodać znajomego? Podaj mu swój adres e-mail oraz prywatny kod
              znajomego!
            </p>
            <p> Twój adres email: {{ $auth.user.email }}</p>
            <p> Twój kod znajomego: {{this.$store.state.kodUsera.kodZnajomego}}</p>
            <div>
              <div style="margin-top:2%;" v-if="$auth.isAuthenticated">
                  <b-form-input
                      style="width:30%; margin:auto"
                      id="textarea"
                      v-model="kodNowy"
                      placeholder="Wpisz nowy kod"
                      rows="1"
                      max-rows="1"
                  ></b-form-input>
              </div>
              <div>
                  <b-button style="margin:1%" variant="success" v-if="$auth.isAuthenticated" @click="zmienKod">Zmień</b-button>
                  <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> </label>
              </div>
            </div>
            <div>
              <div style="margin-top:2%;" v-if="$auth.isAuthenticated">
                  <b-form-input
                      style="width:30%; margin:auto"
                      id="textarea"
                      v-model="kodKumpla"
                      placeholder="Wpisz kod znajomego"
                      rows="1"
                      max-rows="1"
                  ></b-form-input>
                  <b-form-input
                      style="width:30%; margin:auto"
                      id="textarea"
                      v-model="mailKumpla"
                      placeholder="Wpisz mail znajomego"
                      rows="1"
                      max-rows="1"
                  ></b-form-input>
              </div>
              <div>
                  <b-button style="margin:1%" variant="success" v-if="$auth.isAuthenticated" @click="dodajKumpla">Dodaj znajomego</b-button>
                  <label style="color:brown" v-else><a id="logText" @click="login" style="text-decoration:underline;">Zaloguj się</a> </label>
              </div>
              <span v-if="this.$store.state.statusDodania == '2'">
                  <b-icon icon="arrow-clockwise" animation="spin" font-scale="2"></b-icon>
              </span>
              <span v-if="this.$store.state.statusDodania == '1'">
                  <b-iconstack font-scale="2">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="check"></b-icon>
                  </b-iconstack>
              </span>
              <span v-if="this.$store.state.statusDodania == '0'">
                  <b-iconstack font-scale="2">
                    <b-icon stacked icon="square"></b-icon>
                    <b-icon stacked icon="x"></b-icon>
                  </b-iconstack>
              </span>
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Naglowek from "../components/Naglowek.vue";
export default {
  name: "Profile",
  metaInfo: {
    title: "Zjadłem.pl | Profil",
  },
  components: { Naglowek },
  created() {
    if(this.$auth.user.email != null){
      this.$store.state.currentUserEmail = this.$auth.user.email;
    }
    else{
      this.$store.state.currentUserEmail = null;
    }
    this.$store.dispatch("bindUserOceny");
    this.$store.state.statusDodania = '3'
  },
  data() {
    return {
      kodNowy: '',
      kodKumpla: '',
      mailKumpla: '',
      show: true,
      sortBy: "Restauracja",
      sortDesc: false,
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
      ],
    };
  },
  methods: {
    zmienKod() {
      this.$store.state.nowyKod = this.kodNowy;
      this.$store.dispatch('nowyKodUsera');
      this.$store.dispatch("bindUserOceny");
      },
    dodajKumpla() {
      this.$store.state.statusDodania = '2';
      this.$store.state.currentUserNickname = this.$auth.user.nickname;
      this.$store.state.kodZnajomego = this.kodKumpla;
      this.$store.state.emailZnajomego = this.mailKumpla;
      this.$store.dispatch('dodajKumpla');
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .sr-only {
  display: none !important;
}
#profile {
  text-align: center;
  width: 100%;
  color: white;
  //padding:1%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  font-family: "Raleway", sans-serif;
  padding-top: 0;
}
#tlo {
  width: 80%;
  //height:100%;
  //background:rgba(255, 255, 255, 0.884);
  display: flexbox;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
}
.menuSmakosza {
  color: black;
  background: rgba(255, 255, 255, 0.884);
  height: 80vh;
  padding: 2%;
  border-radius: 10% 10% 0% 0%;
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
h1 {
  overflow: hidden;
  font-size: 1.7rem;
  font-weight: 300;
  margin: 0;
  margin-top: 7vh;
  padding: 0;
  padding-bottom: 3vh;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.19);
}
</style>
