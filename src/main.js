import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'semantic-ui-css/semantic.min.css';

import VueGtag from 'vue-gtag';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: {
    id: 'G-DWBX48QTJP', // 請替換為你的 Google Analytics 追蹤 ID
    params: {
      send_page_view: false
    }
  }
}, router); // 加上 router 作為第二個參數

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
