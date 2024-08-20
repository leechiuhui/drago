<template lang="pug">
.courses
  h1.ui.header 課程
    .sub.header.text-left.padded
      br
      | 我的人生從2008年33歲開始，進入了一個新的階段，因為我接觸了圓桌教育基金會《改變的力量》課程
      br
      | 2010年買到一本書《還我本來面目》
      br
      | 
      br
      | 
      br
  .ui.four.doubling.stackable.cards.container
    .ui.card
      h4.ui.header 圓桌教育基金會課程
        .sub.header 《改變的力量》
      router-link(to="/lev1")
        img.card-img(src="/img/logo.jpg")
      // p 八月父親節「從心出發」已截止報名，進行中。
      //- p 九月中秋節「從心出發」開放報名中(8/26截止)，
      //-   router-link(to="/lev1") 詳見此
      //- p.gray 十月華山文創場「從心出發」籌備中，有興趣的朋友請先空出10/26(六), 10/27(日)上午時段
      //- p.gray 十一月中壢夢田場「從心出發」籌備中，有興趣的朋友請先空出11/09(六), 11/10(日)上午時段
    .ui.card
      h4.ui.header 至青宇宙學校
        .sub.header 我在・生生世世
      img.card-img(src="/img/logo.jpg")
      //- p 九月教師節「心領神會」籌備中，有興趣的朋友請先空出09/28(六), 09/29(日)上午時段
    .ui.card
      h4.ui.header 
        .sub.header 
      img.card-img(src="/img/logo.jpg")
      p 尚在思考...
    .ui.card
      h4.ui.header 
        .sub.header 
      img.card-img(src="/img/logo.jpg")
      p 尚在思考

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

.padded {
  padding: 1em !important;
}

p {
  font-size: 18px;
  text-align: left;
  max-width: 620px;
  margin: .6em auto;
  color: rgb(64, 3, 206);
}

p.gray {
  color: #999;
}
</style>
