<template>
  <div class="hello">
    <h1><span class="fat-only">歡迎來到</span>
      playback劇場</h1>
    <div class="ui buttons">
      <a class="ui large purple button" href="https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?usp=sharing"
        target="_blank" rel="noopener norefferer">Playback精華</a>
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

.hello {
  color: rgb(64, 3, 206);
  height: 100vh;
  padding-top: 2em;
}

</style>
