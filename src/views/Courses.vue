<template lang="pug">
.courses
  h1.ui.header 課程
  .ui.four.doubling.cards.container
    .ui.card
      h4.ui.header Playback初階體驗工作坊
        .sub.header 同理心回饋劇初探
      p 九月「從心出發」籌備中...
    .ui.card
      h4.ui.header Playback二階體驗工作坊
        .sub.header 五種基本形式
      p 九月「心聆神會」籌備中...
    .ui.card
      h4.ui.header Playback三階體驗工作坊
        .sub.header 主持人技巧
      p 尚未開課...
    .ui.card
      h4.ui.header 長線成長團體
      p 尚未開課...

</template>

<script>

export default {
  name: 'Faq',
}
</script>

<style scoped>
.ui.card {
  padding: 1em;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}
</style>
