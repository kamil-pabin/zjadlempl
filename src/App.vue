/* eslint-disable no-unused-vars */
<template>
  <div id="app">
    <b-card no-body class="theCard">
      <div class="butoSidebar">
        <Sidebar></Sidebar>
      </div>
      <div
        to="/profile"
        v-if="$auth.isAuthenticated"
        @click="profileLink"
        :active="$route.name == '/profile'"
        class="butoSidebarRight"
      >
        <ProfileButton></ProfileButton>
      </div>
      <b-card-body class="text-center interior">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import ProfileButton from "./components/ProfileButton.vue";
export default {
  components: { Sidebar, ProfileButton },
  methods: {
    profileLink: function () {
      this.$router.push("/profile");
    },
  },
};
</script>

<style lang="scss">
@import "../src/assets/transitionStyles.css";
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Raleway:wght@200;300;500&display=swap");
.invert {
  filter: invert(0%);
}
html {
  //background-image: url("./assets/tlo.png");
  background: url("./assets/tlo.png") no-repeat center fixed;
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
  font-family: "Raleway", sans-serif;
  position: absolute;
  width: 100%;
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