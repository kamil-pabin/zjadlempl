<template>
  <div id="profile">
      <div id="tlo">
        <naglowek text="ZJADŁEM.PL | PROFIL SMAKOSZA" style="margin-bottom:2%;"></naglowek>
        <div class="menuSmakosza" v-if="$auth.isAuthenticated">
          <h1>Twój profil Smakosza</h1>
          <div id="dane">
              <div id="avatarDiv"><img class="avatar" :src="$auth.user.picture"></div>
              <p>Imię i Nazwisko: {{ $auth.user.name }}</p>
              <p>Email: {{ $auth.user.email }}</p>
              <p>Nick: {{ $auth.user.nickname }}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Naglowek from "../components/Naglowek.vue"
export default {
  name: "Profile",
  metaInfo:{
    title: 'Zjadłem.pl | Profil'
  },
  components: { Naglowek },
  data() {
    return {
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
#profile{
  text-align: center;
  width:100%;
  color: white;
  //padding:1%;
  margin-left:auto;
  margin-right: auto;
  margin-top:0;
  font-family: 'Raleway', sans-serif;
  padding-top:0;
}
#tlo{
  width:80%;
  //height:100%;
  //background:rgba(255, 255, 255, 0.884);
  display:flexbox;
  margin-left: auto;
  margin-right: auto;
  padding:1%;
}
.menuSmakosza{
  color:black;
  background:rgba(255, 255, 255, 0.884);
  height:60vh;
  padding:2%;
  border-radius:10% 10% 0% 0%;
}
#dane{
    height:fit-content;
    margin-left:auto;
    margin-right: auto;
    padding:0;
}
#dane p{
    margin:0;
}
.avatar {
  vertical-align: middle;
  width: 15vh;
  height: 15vh;
  border-radius: 50%;
}
h1{
  overflow: hidden;
  font-size:1.7rem;
  font-weight: 300;
  margin: 0;
  margin-top:7vh;
  padding:0;
  padding-bottom:3vh;
  text-shadow: 0 4px 8px rgba(0,0,0,0.19);
}
</style>