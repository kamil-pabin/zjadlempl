<template>
  <div id="profile">
    <div class="background">
        <b-img-lazy fluid class="backgroundImage" :src="images.image2" style="position:fixed; height:100%; width:100vw; object-fit:cover; left:0;" />
      </div>

    <div id="tlo">
      <div class="menuSmakosza" v-if="$auth.isAuthenticated">
        <h1>Profil znajomego Smakosza - <span style="color:green">{{this.$store.state.friendInfo.nickname}}</span></h1>
        <div id="infoProf">
          <div id="infoDiv">
            <!--<p>Liczba ocen: {{this.$store.state.listaOcen.length}}</p> -->
            <p id="poleEmailZnaj">Email: {{ this.$store.state.friendInfo.email }}</p>
            <p id="poleNickZnaj">Nick: {{ this.$store.state.friendInfo.nickname }}</p>
          </div>
          
        </div>
            <h3>Oceny:</h3>
            <div>
              <b-table
                hover
                sort-icon-right
                :items="this.$store.state.listaOcenFriend"
                v-if="this.$store.state.listaOcenFriend.length > 0"
                :fields="fields"
                :sort-by.sync="sortBy"
                :sort-desc.sync="sortDesc"
                responsive="lg"
                style="font-size:0.8rem"
                sticky-header
              ></b-table>
            </div>
            <div v-if="this.$store.state.listaOcenFriend.length > 0">
              Sortowanie przez: <b>{{ sortBy }}</b
              >, Jak:
              <b>{{ sortDesc ? "Malejąco" : "Rosnąco" }}</b>
            </div>
            <div v-else style="color:red">
              Brak ocen - zachęć znajomego i pójdźcie gdzieś razem!
            </div>
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
  name: "Profile_friend",
  metaInfo: {
    title: "Zjadłem.pl | Profil znajomego",
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
    if(this.$auth.user.email != null && this.$store.state.wybranyZnajomy != null){
      this.$store.state.currentUserEmail = this.$auth.user.email;
    }
    else{
      this.$store.state.currentUserEmail = null;
    }
    this.$store.dispatch("bindUserFriendOceny");
  },
  data() {
    return {
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
      ],
    };
  },
  methods: {
    
  },
  computed: {
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
  display:flex;
  color: white;
  justify-content:center;
  align-content: center;
  align-items: flex-start;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  text-transform: uppercase;
  padding-top: 0;
}
#tlo{
  position:absolute;
  padding:0;
  margin:0;
  z-index:-1;
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
@media screen and (max-width: 900px) {
  #tlo {
  width: 100%;
  z-index:10;
  display: flexbox;
  margin-left: auto;
  margin-right: auto;
  padding: 1%;
  margin-top:14vh;
}
  .panel{
  display:flex;
  margin:auto;
  width:95%;
  height:100%;
}
  .menuSmakosza {
    color: black;
    background: rgb(255, 255, 255);
    min-height: 95%;
    height:fit-content;
    -webkit-box-shadow: 0px 0px 20px 7px rgba(0,0,0,0.6); 
    box-shadow: 0px 0px 20px 7px rgba(0,0,0,0.6);
    padding: 1%;
    border-radius: 0px;
    border: 0px solid black;
}
#zmianaKod{
  display:flex;
  flex-direction: column;
  flex-wrap: wrap;
}
#textarea_nowyKod{
  width:100% !important;
}
#zmieniarka{
  flex-direction: column;
}
}
</style>