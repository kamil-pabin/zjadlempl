<template>
  <div id="poleWyszukiwania">
    <b-form-input
      list="my-list-id"
      v-model="text"
      placeholder="Podaj ulicę"
    ></b-form-input>
    <datalist id="my-list-id">
      <option v-for="size in sizes" :key="size.id">{{ size }}</option>
    </datalist>
    <div id="przyciski">
      <b-button id="buton" variant="dark">
        <router-link to="/Browser" :active="$route.name == 'Browser'"
          >Szukaj</router-link
        >
      </b-button>
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
  },
};
</script>

<style lang="scss">
#poleWyszukiwania {
  margin: auto;
  max-width: 20rem;
  height: 1rem;
  display: flexbox;
}
#poleWyszukiwania input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#buton {
  margin: 0;
  line-height: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
  margin-top: 2%;
  height: fit-content;
  width: fit-content;
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
    height: 2.5rem;
    display: flex;
  }
  #buton {
    margin-top: 0%;
    margin-left: 10px;
  }
  #przyciski {
    display: flex;
    width: 40%;
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