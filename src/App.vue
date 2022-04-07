/* eslint-disable no-unused-vars */
<template>
  <div id="app">
    <div id="navbarx">
      <Navbarx></Navbarx>
    </div>

    <b-card no-body class="theCard">
      <b-card-body class="text-center interior">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </b-card-body>
    </b-card>
    <footer id="footerZjadlem" style="color:white">
      <div id="container" style="display:flex; flex-direction:row; flex-wrap: wrap; justify-content:center; allign-items:center; allign-content:center; padding:10px;">
        <div style="flex-direction:column;">
          <div style="padding:0; margin: 0;">Zjadlem.pl 2022</div>
          <div style="padding:0; margin: 0;"><a href="mailto:support@zjadlem.pl">support@zjadlem.pl</a></div>
        </div>
      </div>
      
    </footer>
  </div>
</template>

<script>
import Navbarx from "./components/Navbarx.vue";
export default {
  components: { Navbarx},
  methods: {
    profileLink: function () {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import "../src/assets/transitionStyles.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Raleway:wght@200;300;500&display=swap");
.invert {
  filter: invert(0%);
}
html {
  background:rgb(19, 19, 19);
  //background: url("./assets/tlo.png") no-repeat center fixed;
  background-size: cover;
  -webkit-font-smoothing: antialiased;
}
body {
  background: transparent;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: "Lato";
  position: absolute;
  width: 100vw;
  height: 100%;
  padding: 0;
  margin: 0;
  border: 0 !important;
  background: transparent;
}
.theCard {
  min-height: 100vh;
  min-width: 100vw;
  padding: 0vh;
  isolation: isolate;
}
.interior {
  padding-bottom: 0;
  margin-bottom: 0;
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  background: transparent;
  padding: 0;
  margin: 0;
}
.butoSidebar {
  position: fixed;
  //margin-left:1%;
  margin-top: 1%;
  z-index: 5;
  overflow-y: none !important;
}
.butoSidebarRight {
  position: fixed;
  margin-left: 93%;
  margin-top: 1%;
  z-index: 4;
  overflow-y: none !important;
}

@media only screen and (max-width: 1100px) {
  .myheader {
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
  }
  .invert {
    filter: invert(100%);
  }
}
.card-body.text-center.interior {
  padding: 0;
  height: 100%;
}

.card {
  background-color: transparent !important;
  background: transparent !important;
  border: 0 !important;
}
#card {
  background-color: transparent !important;
  background: transparent !important;
}
</style>