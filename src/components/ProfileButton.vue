<template>
  <div id="profilePic">
    <div v-if="$auth.isAuthenticated">
      <b-avatar class="avatar"><img class="avatar" :src="$auth.user.picture"></b-avatar>
    </div>
    
    <div v-else>
      <b-avatar variant="primary" class="avatar" text="ZJ"></b-avatar>
    </div>

    <b-popover triggers="click focus" placement="bottom" target="profilePic" custom-class="popoverProfile">
        <b-button
            class="buttonProfileDropdown"
            v-b-modal.translate-modal
            style="width:100%; margin:0; padding:0;"
          >
            Język   <b-icon icon="globe"> </b-icon>
          </b-button>
        <template #title ><span id="notLoggedUser" v-if="!$auth.isAuthenticated">Musisz się najpierw zalogować!</span><span v-if="$auth.isAuthenticated" id="loggedUser">Witaj<span v-if="$auth.user.nickname !=null"> {{ $auth.user.nickname }}</span><span v-else> smakoszu</span>!</span></template>     
          <div class="buttonsLogin">
            <!-- show login when not authenticated -->

            <b-button
              class="buttonProfileDropdown"
              id="login"
              v-if="!$auth.isAuthenticated"
              @click="login"
              >Register/Log in</b-button
            >
            <!-- show logout when authenticated -->
            <div class="profileDropdown">
              <b-button-group vertical>
                <b-button
                  class="buttonProfileDropdown"
                  id="mojProfil"
                  v-if="$auth.isAuthenticated"
                  @click="profileClick"
                  >Mój profil</b-button
                >
                <b-button
                  class="buttonProfileDropdown"
                  v-if="$auth.isAuthenticated"
                  id="logout"
                  @click="logout"
                  >Log out</b-button
                >
              </b-button-group>
            </div>
          </div>
      </b-popover>
      <translate-modal></translate-modal>
  </div>
</template>


<script>
import TranslateModal from "./TranslateModal";
export default {
  name: "ProfileButton",
  components: { TranslateModal },
  props: {
    nameProf: String
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    profileClick: function () {
      this.$router.push("/profile");
      this.popOverClick();
    },
    popOverClick: function (){
      this.$root.$emit('bv::hide::popover')
    },
    login () {
      this.$auth.loginWithRedirect();
      this.popOverClick();
    },
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
      this.popOverClick();
    }
  },
};
</script>
<style lang="scss" scoped>
.avatar {
  vertical-align: middle;
  width: 3rem;
  background:lightgrey;
  margin:10%;
  border-radius: 50%;
  border: solid white 2px;
}
.avatar:hover{
  cursor: pointer;
}
.buttonsLogin{
  //background:red;
  margin:auto;
  width:100%;
}
.profileDropdown{
  width: fit-content;
  //background:pink;
  padding:auto;
  margin:auto;
  
}
.buttonProfileDropdown{
  margin:0;
  background:transparent;
  color:black;
  border:0;
  //margin-bottom:5%;
  width:100%;
  padding:auto;
  
}
.buttonProfileDropdown:first-child{
  border-bottom:1px solid lightgrey;
  //background:red;
}
.dropdownProfile{
  //background:red;
}
</style>