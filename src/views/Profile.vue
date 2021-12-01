<template>
  <div id="profile">
      <div id="tlo">
        <h1>Twój profil Smakosza</h1>
        <div id="dane">
            <div id="avatarDiv"><img class="avatar" :src="$auth.user.picture"></div>
            <p>Imię i Nazwisko: {{ $auth.user.name }}</p>
            <p>Email: {{ $auth.user.email }}</p>
            <p>Nick: {{ $auth.user.nickname }}</p>
        </div>
      </div>
    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  metaInfo:{
    title: 'Zjadłem.pl | Profil'
  },
  components: {},
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
  color: black;
  padding:1%;
  margin-left:auto;
  margin-right: auto;
  font-family: 'Raleway', sans-serif;
}
#tlo{
  width:80%;
  height:100%;
  background:rgba(255, 255, 255, 0.884);
  display:flexbox;
  margin-left: auto;
  margin-right: auto;
  padding:1%;
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
#avatarDiv{
  //background: white;
  //padding:1%;
  //margin:1%;
  //border-radius: 50%;
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