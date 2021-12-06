<template>
    <div id="naglowek" style="justify-content:space-between; margin:auto; width:100%; display:flex; padding:1%;">
        <b-icon icon="arrow-left" font-scale="2" @click="goBack"></b-icon>
        <h1>{{text}}</h1>
        <b-icon icon="house-door" font-scale="2" @click="goHome"></b-icon>
    </div>
</template>


<script>
export default {
  name: "Naglowek",
  props: { 
      text: String,
   },
  return:{
      
  },
  methods: {
    goHome: function () {
        this.$router.push("/");
    },
    goBack: function () {
        this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
#naglowek{
    justify-content:space-between;
    margin:auto;
    width:100%;
    display:flex;
    padding:1%;
}
#naglowek svg:hover{
    cursor: pointer;
}
h1{
    font-size:1.8rem;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.705);
}
h1:hover{
    cursor:default;
}
@media screen and (max-width: 600px) {
    #naglowek{
        max-width:90%;
    }
    h1{
        font-size:0.9rem;
    }
}

</style>