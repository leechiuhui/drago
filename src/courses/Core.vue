<template lang="pug">
.courses
  h1.ui.header Drago功過格
    .sub.header 必須苦其筋骨餓其體膚，空乏其身，行拂亂其所為，所以動心忍性，以究其所不能。
  .ui.segmant.container
    iframe(width="100%", 
      height="600px",
      frameborder="0",
      allowfullscreen,
      :src=" 'https://github.com/leechiuhui/Thoughts_on_Emotion_Control/issues '")


</template>

<script>

export default {
  name: 'Faq',
  data () {
    return {
      YourDocumentID: '17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU'
    }
  }
}
</script>

<style scoped>
.ui.card {
  padding: 1em;
}

img.card-img {
  max-width: 33vmin;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}
</style>
