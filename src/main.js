import './assets/index.css'
import './assets/test.css'
import './assets/index.less'
import './assets/img/timg.jpg'
import Vue from 'vue'
import App from './app'
new Vue({
  render: h=> h(App) 
}).$mount('#app')
console.log('call me 老yuan')