<template>
  <div class="home">
    <div id="tlo">
      <div>
        <h1 id="hello">Wyszukaj restauracje w której jadłeś: </h1>
      </div>
    </div>
    <div class="grupaZdjec">
      <div class="zdjecie" id="sushi">
        <img src="../assets/sushi.png" alt="Responsive image">
      </div>
      <div class="zdjecie" id="pizza">
        <img src="../assets/pizza.png" alt="Responsive image">
      </div>
      <div class="zdjecie" id="stek">
        <img src="../assets/stek.png" alt="Responsive image">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
  width:100%;
  height:100;
  color: white;
  padding:0;
  margin:0;
  max-height:100%;
}
#tlo{
  border-bottom-right-radius: 60% 25%;
  border-bottom-left-radius: 70% 25%;
  background: #0f4ec2;
  margin-bottom: 0px;
  padding: 20px;
  width: 100%;
  height: 40vh;
}
.grupaZdjec{
  width: auto;
  max-width: 100%;
  margin-top:-100px;
  padding:0;
  height:100%;
  background:yellow;
  display:flex;
  overflow: hidden;
}
.grupaZdjec .zdjecie{
  background:red;
  display:flex;
  margin:0;
  padding:0;
}
.grupaZdjec .zdjecie img{
  max-width:100%;
  height:100%;
  object-fit: cover;
  background:red;
}
h1{
  overflow: hidden;
  font-size:4.5vw;
  font-weight: 300;
  margin: 0;
  margin-top:7vh;
  padding:0;
}
@keyframes fadeinA {
    0% { opacity: 0; }
    45% { opacity: 0; }
    100%   { opacity: 1; }
}
@media screen and (min-width: 1200px) {
  h1 {
     font-size: 3rem;
     margin-top:7vh;
  }
}
</style>
