<template lang="pug">
.faq
  .ui.segment.container
    h2.ui.header 相關書籍
    a(href="https://www.books.com.tw/products/0010819668?srsltid=AfmBOoraRMb1c1ydZBU9YLIiXWaJmSZzLvV9PU-ccdOYC95L_2Bz8GCH",
      target="_blank", rel="noopener noreferrer")
      img(src="/img/1book.webp")
      p 還我本來面目
    a(href="https://www.books.com.tw/products/0010881282?loc=P_br_r0vq68ygz_D_2aabd0_B_3",
      target="_blank", rel="noopener noreferrer")
      img(src="/img/2book.webp")
      p 我在・生生世世
    a(href="https://www.books.com.tw/products/0010875911?loc=P_br_r0vq68ygz_D_2aabd0_B_3",
      target="_blank", rel="noopener noreferrer")
      img(src="/img/3book.webp")
      p 叩問生死

</template>

<script>

export default {
  name: 'Faq',
}
</script>

<style scoped>

  img {
    max-width: 88%;  
  }
  p {
    font-size: 18px;
    text-align: center;
    max-width: 620px;
    margin: .6em auto;
    color: rgb(64, 3, 206);
  }
</style>
