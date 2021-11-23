/* eslint-disable no-unused-vars */
<template>
  <div id="browserData">
    <h1> Restauracje:</h1>
    <div class="panel">
      <div id="naglowek">
        <div>
          Nazwa
        </div>
        <div>
          Kuchnia
        </div>
        <div>
          Ocena
        </div>
        <div>
          Adres
        </div>
      </div>
      <div class="restauracja" v-for="item in this.$store.state.restauracje" :key="item.index">
        <div>
            {{ item.Nazwa }}
        </div> 
        <div>
            {{item.Kuchnia}}
        </div> 
        <div>
            {{ item.Ocena }}
        </div> 
        <div>
            {{ item.Adres }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// eslint-disable-next-line no-unused-vars
import { db } from '../db'
export default {
  name: "BrowserData",
  props: { },
  data() {
    return {
      currentRestauracja: null,
      currentIndex: -1,
    };
  },
  methods: {
    
  },
  created (){
    this.$store.dispatch('bindRestauracja')
  }
};

</script>

<style lang="scss">
#browserData {
  margin: auto;
  height: 1rem;
}
#browserData input {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.restauracja{
  background:#407ce4;
  height:10vh;
  display:flex;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.315);
}
.restauracja:nth-child(2n+1){
  background:grey;
}
.restauracja div{
  width:25%;
  text-align: left;;
}
.panel{
  
}
#naglowek{
  display:flex;
  justify-content: space-between;
  padding-left: 3%;
  padding-right: 3%;
  height:5vh;
  
  background:rgb(155, 155, 155);
}
#naglowek div{
  width: 25%;
  text-align: left;
}

</style>