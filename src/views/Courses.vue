<template lang="pug">
.courses
  h1.ui.header 課程
    .sub.header.text-left
      br
      | 我想像中的Playback同理心回饋劇練習，分為三個階段：
      br
      | 一階是入門體驗同理心和即興肢體表達；
      br
      | 二階是學習五種基本的Playback形式；
      br
      | 三階是主持人技巧與態度。
      br
  .ui.four.doubling.stackable.cards.container
    .ui.card
      h4.ui.header Playback初階體驗工作坊
        .sub.header 同理心回饋劇初探
      router-link(to="/lev1")
        img.card-img(src="/img/lev1.jpg")
      // p 八月父親節「從心出發」已截止報名，進行中。
      p 九月中秋節「從心出發」開放報名中，
        router-link(to="/lev1") 詳見此
    .ui.card
      h4.ui.header Playback二階體驗工作坊
        .sub.header 五種基本形式
      img.card-img(src="/img/lev2.jpg")
      p 九月「心聆神會」籌備中...
    .ui.card
      h4.ui.header Playback三階體驗工作坊
        .sub.header 主持人技巧
      img.card-img(src="/img/lev3.jpg")
      p 尚未開課...
    .ui.card
      h4.ui.header 長線成長團體
        .sub.header 穩定的持續練習節奏
      img.card-img(src="/img/group.jpg")
      p 尚未開課...

</template>

<script>

export default {
  name: 'CourSes',
}
</script>

<style scoped>
.ui.card {
  padding: 1em;
}

img.card-img {
  max-width: 100%;
}

.text-left {
  display: block;
  text-align: left;
  width: fit-content !important;
  margin: 0 auto !important;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}
</style>
