<template>
  <div id="sidebar">
    <div id="avatarDiv"><img class="avatar" :src="$auth.user.picture"></div>
  </div>
</template>


<script>
export default {
  name: "ProfileButton",
  props: {},
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.avatar {
  vertical-align: middle;
  width: 5vh;
  height: 5vh;
  border-radius: 50%;
  border: solid white 2px;
}
.avatar:hover{
  cursor: pointer;
}

</style>