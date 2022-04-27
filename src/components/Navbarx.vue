<template>
  <div id="main" :class="{change_navbar: scrollPosition > 105}">
  <b-navbar toggleable="lg" type="dark" id="part2">
    <div id="rzad1">
      <b-navbar-brand @click="scrollToTop()" to="/#/" :active="$route.name == '/#/'" style="width:11em; cursor:pointer;">
        <b-img :src="require('../assets/logo.png')" fluid alt="ZJADLEM"></b-img>
      </b-navbar-brand>
      <div id="searchbar" style="">
        <div style="display:flex;">
          <b-form-input style="margin:5px; width:20vw;" v-model="textSearch" placeholder="Wyszukaj.." ></b-form-input>
          <b-button variant="outline-warning" id="szukaj" style="margin:5px" @click="searchClick" to="/Browser">Szukaj</b-button>
        </div>
      </div>
      <div
        to="/profile"
        :active="$route.name == '/profile'"
      >
      <ProfileButton nameProf='pierwszy' ></ProfileButton>
      
      </div>
    </div>

    <div id="rzad2" :class="{change_navbarColor: scrollPosition > 105}">
        <b-navbar-nav class="ml-auto navidwa">
          <b-navbar-brand id="itemDrop"  @click="scrollToTop()" style="width:3rem; cursor:pointer;" class="showItemRowDwa" :class="{change_show: scrollPosition > 105}">
            <b-img :src="require('../assets/logomale.png')" fluid alt="ZJADLEM"></b-img>
          </b-navbar-brand>
          <b-nav-item-dropdown toggle-class="text-white" text="Restauracje" id="itemDrop">
            <b-dropdown-item @click="scrollToTop()" id="gdanskSel" v-on:click="miastoSelection('Gdańsk')" to="/Browser">Gdańsk</b-dropdown-item>
            <b-dropdown-item @click="scrollToTop()" id="gdyniaSel" v-on:click="miastoSelection('Gdynia')" to="/Browser" >Gdynia</b-dropdown-item>
            <b-dropdown-item @click="scrollToTop()" id="sopotSel" v-on:click="miastoSelection('Sopot')" to="/Browser" >Sopot</b-dropdown-item>
            <b-dropdown-item @click="scrollToTop()" id="redaSel" v-on:click="miastoSelection('Reda')" to="/Browser" >Reda</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown toggle-class="text-white" text="Sklepy" right id="itemDrop">
            <b-dropdown-item @click="scrollToTop()" disabled href="#">Żabka</b-dropdown-item>
            <b-dropdown-item @click="scrollToTop()" disabled href="#">Kaufland</b-dropdown-item>
            <b-dropdown-item @click="scrollToTop()" disabled href="#">Biedronka</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item @click="scrollToTop()" href="#" to='/About' :active="$route.name == '/About'" style="margin-top:auto; margin-bottom:auto" id="itemDrop"> <span>O nas</span></b-nav-item>
          <b-nav-item id="itemDrop" to='/profile' style="margin-top:auto; margin-bottom:auto" v-if="!$auth.isAuthenticated" @click="login">Moje zjadłem</b-nav-item> 
          <b-nav-item @click="scrollToTop()" id="itemDrop" to='/profile' class="moje" v-if="$auth.isAuthenticated"  :active="$route.name == '/profile'">Moje zjadłem</b-nav-item>
          <b-nav-item @click="scrollToTop()" id="itemDrop" class="showItemRowDwa" style="display:none" :class="{change_show: scrollPosition > 105}">
            <div id="profRowDwa">
              <ProfileButton nameProf='drugi' ></ProfileButton>
            </div>
          </b-nav-item>
          
          <b-popover triggers="hover focus" id="maleProfPop" placement="bottom" target="profRowDwa" custom-class="my-popover-class">
            <b-button
            class="buttonProfileDropdown"
            v-b-modal.translate-modal
            style="width:100%; margin:0; padding:0;"
          >
            Język
          </b-button>
            <template #title ><span id="notLoggedUser" v-if="!$auth.isAuthenticated">Musisz się najpierw zalogować!</span><span v-if="$auth.isAuthenticated" id="loggedUser">Witaj<span v-if="$auth.user.nickname !=null"> {{ $auth.user.nickname }}</span><span v-else> smakoszu</span>!</span></template>     
              <div class="buttonsLogin">
                <!-- show login when not authenticated -->

                <b-button
                  class="buttonProfileDropdown"
                  id="login"
                  v-if="!$auth.isAuthenticated"
                  @click="login"
                  >Register/Log in</b-button
                >
                <!-- show logout when authenticated -->
                <div class="profileDropdown">
                  <b-button-group vertical>
                    <b-button
                      class="buttonProfileDropdown"
                      id="mojProfil"
                      v-if="$auth.isAuthenticated"
                      @click="profileClick"
                      
                      >Mój profil</b-button
                    >
                    <b-button
                      class="buttonProfileDropdown"
                      v-if="$auth.isAuthenticated"
                      id="logout"
                      @click="logout"
                      >Log out</b-button
                    >
                  </b-button-group>
                  
                </div>
              </div>
          </b-popover>

        </b-navbar-nav>
    </div>
  </b-navbar>
</div>
</template>


<script>
import ProfileButton from "../components/ProfileButton.vue";
export default {
  name: "Navbarx",
  components: {ProfileButton},
  data(){
    return{
      scrollPosition: null,
      textSearch: '',
    }   
  },
  methods: {
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    scrollToTop() {
    window.scrollTo(0,0);
  },
    goHome: function () {
        this.$router.push("/");
    },
    profileClick: function () {
      this.$router.push("/profile");
      this.popOverClick();
    },
    popOverClick: function (){
      this.$root.$emit('bv::hide::popover')
    },
    login () {
      this.$auth.loginWithRedirect();
      this.popOverClick();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
      this.popOverClick();
    },
    goBack: function () {
        this.$router.go(-1);
    },
    miastoSelection(citySel) {
      this.$store.state.miasto = citySel;
      this.$store.state.searchPhrase = '';
      this.$store.dispatch('bindRestauracja');
    },
    searchClick(){
      this.$store.state.searchPhrase = this.textSearch;
      this.$store.state.miasto = '';
      this.bindRest();
    },
    bindRest(){
      this.$store.dispatch('bindRestauracjaSearch');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  }
};
</script>

<style lang="scss" scoped>
.showItemRowDwa{
  //transition-delay: 250ms;
  display: none;
  transition: opacity 1s ease-out;
  opacity: 0;
  padding:auto;
}
#profRowDwa{
  //padding-top:1%;
  //padding-bottom:1%;
  //transform: scale(0.8);
  //padding:0;
  //margin-top:1%;
  //background:yellow;
  padding:0;
  height:100%;
  width:100%;

  margin:auto;
}

#main{
  width:100vw !important;
  display:flex;
  z-index: 1000;
  position: fixed;
  top: 0;
  font-weight: 700;
  text-transform: uppercase;
  transition: 0.6s all ease;
  background-color: rgba(89, 131, 252, 0);
  background-image: linear-gradient(360deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.301) 20%, rgba(0, 0, 0, 0.397) 29%, rgba(0, 0, 0, 0.68) 91%);
  //background:yellow;
}
.navidwa{
  width:100%;
  display:flex;
  justify-content:space-around;
  //align-content: center;
  //align-items: center;
  //margin-left: 20%;
  //margin-right: 20%;
  //margin-top: 10%;
 // background:red;
}
.navidwa div{
  //background:blue;
}
.navidwa li{
 // background:yellow;
 // display:inline;
  ///justify-content: center;
  //align-content: center;
  //align-items: center;
}
.navidwa #text{
  color:black !important;
}
.navbar-dark .navbar-nav .nav-link {
  color:white;
  display:flex;
  align-content: center;
  line-height: 1.5;
}
#part2{
  width:100%;
  justify-content: space-between;
  text-align: center;
  display:inline;
}
#rzad1{
  padding-left: 10%;
  padding-right: 10%;
  width:100%;
  transition: transform 0.6s ease;
  display:flex;
  justify-content: space-evenly;
  margin-bottom: 1%;
}
#rzad2{
  transition: 1s all ease;
  width:100%;
  display:flex;
 // justify-content: space-evenly;
}
#szukaj{
  border-color: white;
  border-width: 1px;
  color: white;
}
.buttonsLogin{
  //background:red;
  margin:auto;
  width:100%;
}
.profileDropdown{
  width: fit-content;
  //background:pink;
  padding:auto;
  margin:auto;
}
.buttonProfileDropdown{
  margin:0;
  background:transparent;
  color:black;
  border:0;
  margin-bottom:5%;
  width:100%;
  padding:auto;
}
.buttonProfileDropdown:first-child{
  border-bottom:1px solid lightgrey;
}
#itemDrop{
  cursor:pointer;
  //background:blue;
  //display:flexbox;
}
.change_navbar {
  margin-top:0;
}
.change_navbar #rzad1{
  display:none;
}
.change_show {
  opacity: 1;
  display: block !important;
}
.change_navbar #rzad2{
  line-height: 5vh;
  padding-bottom:5px;
  //:yellow;
  //display:flex;
  //align-content: center;
  //justify-content: space-evenly;
  //align-items:stretch;
}
.navbar-expand-lg .navbar-nav .dropdown-menu {
    position: absolute !important;
    margin-top: 6vh !important;
}
.change_navbarColor {
  //background-color: rgb(0, 0, 0);
  //background-image: linear-gradient(360deg, rgba(89, 131, 252, 0) 0%, rgba(0, 0, 0, 0.52) 39%, rgba(0, 0, 0, 0.68) 91%);
}
@media screen and (max-width: 1001px) {
  #main{
 // padding-left: 2%;
 // padding-right: 2%;
 // margin:0;
}
.change_navbar {
  margin-top:0;
}
.change_navbar #rzad1{
  display:none;
}
  #rzad1 #searchbar{
   // display:none;
  }
  #rzad2{
   // width:100%;
    font-size:0.7rem;
  }
  .change_navbar #rzad2{
  //line-height: 2vh;
  //padding-top:2vh;
}
  #rzad2 #itemDrop{
    //background:green;
    //padding:2%;
    //margin:auto;
  }
  .navidwa{
    flex-direction: row;
    //width:100%;
    //justify-content: space-between;
  }
}

@media screen and (max-width: 801px) {
  #rzad1{
    //padding-left: 20%;
    //padding-right: 20%;
    //width:100%;
    display:flex;
   // justify-content: space-evenly;
    //margin-bottom: 1%;
  }
  #rzad1 #searchbar{
    display:none;
  }
  #rzad2{
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    align-items: center;
    //background: red;
  }
  #rzad2 li{
    //background:blue;
  }
  #rzad2 #itemDrop{
    //background:green;
    padding:2%;
    margin:auto;
  }
  .navidwa{
    flex-direction: row;
    width:100%;
    padding:0;
    justify-content: space-between;
  }
}

</style>