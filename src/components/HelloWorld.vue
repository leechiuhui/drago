<template lang="pug">
.hello
  .ui.segment.container
    h2.ui.header 
      span.fat-only 歡迎來到
      | Drago 累積
      .sub.header.left.aligned 「身而為人，有身體界線、倫理界線、社會界線、國家界線
        br
        | 在不同的人面前、在不同的團體、在不同的振動頻率、在不同的社交平台，我得練習說出不同面向不同層次的話語
        br
        | 但這樣不能累積完整的我，我希望在我接下來的人生，開始自己做主，累積自己的人生，這是我對自己的承諾。」
    h2.ui.header 最新消息
    p.announce(v-for="(a, idx) in announces")
      a(v-if="a.h", :href="a.h", target="_blank", rel="noopener norefferer", @click="trackEvent('external_link', a.h)") {{a.date}}：
        b {{ a.text }} 
      span(v-else-if="a.r", :to="a.r", @click="trackEvent('internal_link', a.r)") {{a.date}}：
        b {{ a.text }} 
      span(v-else)  {{a.date}}：
        b {{ a.text }} 
    //- .ui.vertical.buttons
    //-   router-link.ui.large.purple.button(to="/core", @click="trackEvent('external_link', 'Google Doc')") Playback精華
    //-   router-link.ui.large.pink.button(to="/about", @click="trackEvent('internal_link', '/about')") 從流動塑像開始
    //-   router-link.ui.large.blue.button(to="/faq", @click="trackEvent('internal_link', '/faq')") 常見問題FAQ
    //-   // a.ui.black.button(href="https://www.threads.net/@bestian_t", target="_blank", rel="noopener norefferer", @click="trackEvent('external_link', 'Threads')") @Threads上新動態 
    
    //- h2.ui.header Playback同理心回饋劇簡介：
    //- p Playback同理心回饋劇(英文: Playback Theatre)是一種即興的互動式劇場，其演出並無預定的劇本，透過參與者口述的親身經驗，自願分享的心情和故事，在主持人的引導下，用即興有結構的表演形式，將故事呈現出來，並把演出回送給說故事的人和所有參與者。
    //- br
    //- p 這是一份相互分享的珍貴禮物，在同理心回饋劇場的尊重與包容裡，共創安全的支持空間，能讓所有參與者充份體驗真實生命經驗交會的感動。❤️‍
    

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
  },
  methods: {
    trackEvent(eventCategory, eventLabel) {
      this.$gtag.event('click', {
        event_category: eventCategory,
        event_label: eventLabel,
      });
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

p {
  font-size: 16px;
  max-width: 680px;
  margin: 0 auto;
}

p::first-letter {
  font-size: 1.6em;
}


p.announce::first-letter {
  font-size: 1em;
}

</style>
  