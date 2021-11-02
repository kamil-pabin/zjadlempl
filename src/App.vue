<template>
  <div id="app">
    <b-card no-body class="theCard">
      <b-icon icon="justify" v-b-toggle.sidebar-backdrop class="butoSidebar invert" font-scale="3"></b-icon>
       <b-sidebar id="sidebar-backdrop" backdrop no-header shadow>
         <template #default="{ hide }">
          <div class="px-3 py-2 sideber">
            <div class="but">
              <div id="logo">
                <img src="./assets/logo.png" class="invert" alt="Responsive image">
              </div>
              <b-button class="tabButton " to="/#/" :active="$route.name =='/#/'">
                  Home
              </b-button>
              <b-button class="tabButton" to="/About" :active="$route.name =='About'">
                  <a>O nas</a>
              </b-button>
              <b-button class="tabButton bold" @click="hide">
                  Close
              </b-button>
            </div>
          </div>
         </template>
       </b-sidebar>
      <b-card-body class="text-center interior">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>

</script>

<style lang="scss">

@import '../src/assets/transitionStyles.css';
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500&family=Raleway:wght@200;300;500&display=swap');
@import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
.invert { filter: invert(100%); }
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  position:absolute;
}
.tabButton {
    transition: .5s ease;
    text-decoration: 0;
    text-transform: uppercase;
    font-size: 0.8rem;
    font-weight: 500;
  }
#sidebar-backdrop {

}
#sidebar-backdrop .b-sidebar-header{
}
#logo{
  margin:10%;
}
#logo img{
  width:100%;
}
.butoSidebar{
  position:absolute;
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
.sideber{
  transition: width 2s;
}
.sideber .but{
  background-color: transparent;
  margin:auto;
  width:100%;
}
.sideber .but .tabButton {
  margin:5px;
  color:black;
  width:100%;
  background-color: transparent;
  border:0;
  transition: linear 0.3s;
}
.sideber .but .bold {
  color:rgb(160, 0, 0);
}
.sideber .but .tabButton:hover {
  font-size:1.2rem;
}
.theCard {
  min-height: 100vh;
  min-width: 100vw;
  padding: 0vh;
}
.interior{
  padding-bottom: 0;
  margin-bottom:0;
  display:flex;
  max-height:100%;
  background:transparent;
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
.card-body.text-center.interior {
    padding: 0;
    height:100%;
}
</style>
