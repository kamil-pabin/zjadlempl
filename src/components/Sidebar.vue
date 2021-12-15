/* eslint-disable vue/no-unused-vars */
<template>
  <div id="sidebar">
    <b-icon
      icon="justify"
      v-b-toggle.sidebar-backdrop
      class="butoSidebar invert"
      font-scale="2"
    ></b-icon>
    <b-sidebar id="sidebar-backdrop" backdrop no-header shadow>
      <template #default="{ }">
        <div class="sideber">
          <div class="but">
            <div id="logo">
              <img src="../assets/logo.png" class="" alt="Responsive image" />
            </div>

            
            <b-button class="tabButton" to="/#/" :active="$route.name == '/#/'">
                Home
            </b-button>
            <b-button class="tabButton" @click="resetMiasto" to="/Browser" :active="$route.name == '/Browser'">
                Restauracje
            </b-button>
            <b-button class="tabButton" to='/profile' v-if="$auth.isAuthenticated" :active="$route.name == '/profile'">
                Profil
            </b-button>
            <b-button class="tabButton" to="/About" :active="$route.name == 'About'">
                O nas
            </b-button>
            
            
          </div>
        </div>
      </template>
      <template #footer="{ hide }">
        <div v-if="!$auth.loading" class="sideber but footerEl">
              <!-- show login when not authenticated -->
              <b-button
                class="tabButton footerEl boldGreen"
                id="login"
                v-if="!$auth.isAuthenticated"
                @click="login"
                >Log in</b-button
              >
              <!-- show logout when authenticated -->
              <b-button
                class="tabButton footerEl bold"
                v-if="$auth.isAuthenticated"
                id="logout"
                @click="logout"
                >Log out</b-button
              >
            </div>
        <b-button class="tabButton but bold footerEl" @click="hide">
          <b-icon icon="x-circle" variant="danger" style="fill:#ff2244; filter: none;" font-scale="2" shift-v="-0.25"></b-icon>
        </b-button>
      </template>
    </b-sidebar>
  </div>
</template>


<script>
export default {
  name: "Sidebar",
  props: {},
  methods: {
    login () {
      this.$auth.loginWithRedirect();
    },
    resetMiasto(){
      this.$store.state.miasto = ''
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  },
};
</script>

<style lang="scss" scoped>
svg {
  fill: #ffffff;
  filter: drop-shadow(2px 3px 10px #000000);
  border:0 !important;
}
.tabButton {
  transition: .5s ease;
  text-decoration: 0;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 300;
}
#logo{
  margin:0;
  width:100%;
  padding-top:10%;
  padding-bottom:8%;
  padding-left:10%;
  padding-right:10%;
  margin-bottom:2%;
  background: #407ce4;
  //border-bottom-right-radius: 10%;
  //border-bottom-left-radius: 10%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
#logo img{
  width:100%;
}
.but {
  padding:0;
}
.butoSidebar{
  position:fixed;
  margin-left:1%;
  margin-top:1%;
}
.butoSidebar:first-child{
  background:transparent;
  background-color:transparent;
  border:0;
}
.butoSidebar:first-child:hover{
  background:rgba(255, 255, 255, 0.082);
  border:0;
}
.butright{
  margin-left:90%;
}
.sideber{
  transition: width 2s;
  padding:0;
}
.sideber .but{
  background-color: transparent;
  margin:auto;
  width:fit-content;
}
.sideber .but .tabButton {
  margin-bottom:0.938rem;
  color:black;
  width:100%;
  background-color: transparent;
  border:0;
  border-bottom: 1px solid #00000017;
  transition: linear 0.3s;
}
.sideber .but .bold {
  color:rgb(160, 0, 0);
}
.sideber .but .boldGreen {
  color:rgb(13, 160, 0);
}
.sideber .but .tabButton:hover {
  font-size:1.4rem;
}
.butoSidebar svg:hover{
  cursor: pointer;
}
.footerEl{
  background:transparent;
  border:0;
  color:inherit;
}
.footerEl:hover{
  background:transparent;
  border:0;
  color:inherit;
  font-size:1.4rem;
}
#logout{
  color:rgb(163, 33, 54);
  border-top: 1px solid #00000017;
  border-bottom: 1px solid #00000017;
  margin-bottom:0.938rem;
  color:rgb(182, 44, 62);
  width:100%;
  transition: linear 0.3s;
}
#login{
  color:rgb(33, 163, 87);
  border-top: 1px solid #00000017;
  border-bottom: 1px solid #00000017;
  margin-bottom:0.938rem;
  width:100%;
  transition: linear 0.3s;
}

@media only screen and (max-width: 1100px) {
  .myheader{
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
  }
  .tabButton {
    transition: .5s ease;
    text-decoration: 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
    transform: skew(0deg);
  }
}
@media screen and (max-width: 600px) {
    .butoSidebar{
      position:absolute;
    }
}

</style>