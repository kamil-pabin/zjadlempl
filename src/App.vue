<template>
  <div id="app">
    <b-card no-body class="theCard">
      <b-icon icon="justify" v-b-toggle.sidebar-backdrop class="butoSidebar invert" font-scale="3"></b-icon>
       <b-sidebar id="sidebar-backdrop" backdrop no-header shadow>
         <template #default="{ hide }">
          <div class="sideber">
            <div class="but">
              <div id="logo">
                <img src="./assets/logo.png" class="" alt="Responsive image">
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
.invert { 
  filter: invert(100%); 
  }
html {
  //background-image: url("./assets/tlo.png");
  background: url("./assets/tlo.png") no-repeat center fixed;
  background-size: cover;
}
body{
  background:transparent;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  position:absolute;
  width:100%;
  height:100%;
  padding:0;
  margin:0;
  border: 0 !important;
  background:transparent;
}
.tabButton {
  transition: .5s ease;
  text-decoration: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 500;
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
  margin:0;
  padding:0;
  height:100vh;
  width:100vw;
  background:transparent;
  padding:0;
  margin:0;
}
.grupaZdjec{
  width: auto;
  max-width: 100%;
  margin-top:-100px;
  padding:0;
  height:100%;
  display:flex;
  overflow: hidden;
}
.grupaZdjec .zdjecie{
  display:flex;
  margin:0;
  padding:0;
}
.grupaZdjec .zdjecie img{
  max-width:100%;
  height:100%;
  object-fit: cover;
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

.card{
  background-color:transparent !important;
  background:transparent !important;
  border: 0 !important;
}
#card{
  background-color:transparent !important;
  background:transparent !important;
}
</style>