<template>
  <div class="about">
    <div class="typewriter">
      <h1 id="hello">Zjadłem.pl</h1>
    </div>
    <div id="logo" class='invert'>
        <img src="../assets/logo.png" alt="Responsive image">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: '',
      context: null
    }
  }
}
</script>

<style lang="scss" scoped>
.about{
  font-family: Lucida Sans Unicode;
  text-align: center;
  width:100%;
  position:flex;
  color: black;
  padding:0;
  margin:0;
  max-height:100%;
}
h1{
    overflow: hidden;
    line-height: 20vh;
    font-size:6.5vw;
    margin: 0;
    padding:0;
    letter-spacing: .15em;
  }
@media only screen and (min-width: 1350px) {
  .typewriter h1{
    overflow: hidden;
    font-size:5rem;
    line-height:20vh;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: .15em;
  }
  #hello{
    animation-delay: 0.2s;
    animation:
      typing 3s steps(30, end);
  }
  @keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
}
</style>