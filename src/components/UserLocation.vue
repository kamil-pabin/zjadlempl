<template>
  <div id="poleWyszukiwania">
    <router-link to="/Browser" :active="$route.name == 'Browser'">
    <b-list-group horizontal>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-on:click="miastoSelection('Gdańsk')">
          Gdańsk
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-on:click="miastoSelection('Gdynia')">
          Gdynia
        </b-list-group-item>
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-on:click="miastoSelection('Sopot')">
          Sopot
        </b-list-group-item>
    </b-list-group>
    </router-link>
    <div id="przyciski">
      <div id="gpsLoc">
        <router-link to="/Browser" :active="$route.name == 'Browser'">
          <b-icon icon="geo-alt-fill" v-on:click="locatorButtonPressed"></b-icon>
          </router-link>
        
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "UserLocation",
  props: {},
  data() {
    return {
      address: "",
      lat: "",
      long: "",
      city: '',
      sizes: ["Śmidowicza", "Świętojańska", "Gdańska", "Młodego G"],
    };
  },
  methods: {
    locatorButtonPressed() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat = position.coords.latitude;
          this.long = position.coords.longitude;
          this.$store.state.cords.lat = this.lat;
          this.$store.state.cords.long = this.long;
          (error) => {
          console.log(error.message);
        }
        }
      );
    },
    miastoSelection(citySel){
      this.$store.state.miasto = citySel;
    }
  },
};
</script>

<style lang="scss">
#poleWyszukiwania {
    margin: auto;
    max-width: 30rem;
    width:fit-content;
    height: 2.5rem;
    display: flex;
  }
#buton {
  margin: 0;
  line-height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
div a{
  text-decoration: none;
}
#buton a {
  padding: 0;
  margin: 0;
  color: inherit;
  text-decoration: none;
}
#przyciski {
    display: flex;
    margin: auto;
    padding: auto;
    height: 100%;
    line-height: 50%;
  }
#gpsLoc {
  margin: 0;
  padding: 0;
}
#gpsLoc svg {
  line-height: 50%;
  height: 100%;
  width: auto;
  color: white;
}
#gpsLoc svg:hover {
  cursor: pointer;
}
@media screen and (min-width: 1200px) {
  #poleWyszukiwania {
    margin: auto;
    max-width: 30rem;
    width:fit-content;
    height: 2.5rem;
    display: flex;
  }
  #buton {
    margin-top: 0%;
    margin-left: 10px;
  }
  #przyciski {
    display: flex;
    margin: auto;
    padding: auto;
    height: 100%;
    line-height: 50%;
  }
  #gpsLoc {
    margin-left: 2%;
  }
}
@media screen and (max-width: 600px) {
  #poleWyszukiwania {
    max-width: 20rem;
    margin: auto;
    height: 2rem;
    display: flexbox;
  }
  #przyciski {
    display: flex;
    width: fit-content;
    margin: auto;
    padding: auto;
    margin-top: 2%;
    line-height: 50%;
    height: 100%;
  }
  #buton {
    margin: 0;
    line-height: 100%;
  }
  #gpsLoc {
    margin: 0;
    padding: 0;
  }
}
</style>