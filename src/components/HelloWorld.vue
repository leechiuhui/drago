<template lang="pug">
.hello
  h1.ui.header 
    span.fat-only 歡迎來到
    | 【從心出發】Playback劇場
    .sub.header.left.aligned 「每個人的生命，都是可歌可泣的故事。
      br
      | 可歌，是因為有力量；可泣，是因為有磨難。
      br
      | 聆聽自我，面對真實，專注當下，生命便會成長」-- 主辦人
  h2.ui.header 最新消息
  p.announce(v-for="(a, idx) in announces")
    a(v-if="a.h", :href="a.h", target="_blank", rel="noopener norefferer") {{a.date}}：{{ a.text }} 
    span(v-else-if="a.r", :to="a.r") {{a.date}}：{{ a.text }} 
    span(v-else)  {{a.date}}：{{ a.text }} 
  .ui.vertical.buttons
    a.ui.large.purple.button(href="https://docs.google.com/document/d/17lp1gGyKwxt8gU64gMlOwPE-_p5lQeWaZ-8g8T7KsDU/edit?usp=sharing", target="_blank", rel="noopener norefferer") Playback精華
    router-link.ui.large.pink.button(to="/about") 從流動塑像開始
    a.ui.black.button(href="https://www.threads.net/@bestian_t", target="_blank", rel="noopener norefferer") Thread上更多文章 
  //  a.ui.large.green.button(href="https://line.me/ti/g/6n2qAsibyY", target="_blank", rel="noopener norefferer") 【從心出發】Line群組

  // img.qr(src="../assets/heart_playback_qr.jpeg")
  // audio#background-music(src="/Shiva.m4a", autoplay, loop)
  
  </template>
  
  <script>
  import { announces } from '../data/announce.js'
  
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data () {
      return {
        announces: announces
      }
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
  
  p.announce {
    font-size: 18px;
    width: fit-content;
    display: block;
    margin: 1em auto;
  }
  
  img.qr {
    width: 140px;
    display: block;
    margin: 1em auto;
  }

  .left.aligned {
    display: block;
    text-align: left;
    width: fit-content !important;
    max-width: 420px;
    margin: .6em auto !important;
  }
  
  </style>
  