<template>
  <div class="hello">
    <h1><span class="fat-only">歡迎來到</span>
      playback劇場!!</h1>
    <div class="ui buttons">
      <a class="ui large purple button" href="https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?usp=sharing"
        target="_blank" rel="noopener norefferer">小巴的Playback精華</a>
      <router-link class="ui large green button" to="/about">從流動塑像開始</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  text-shadow: 0.1em 0.1em 0.2em black;
}
.hello {
  color: orange;
  height: 100vh;
  padding-top: 2em;
  background: url(https://3dw.github.io/playback/og-image.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>
