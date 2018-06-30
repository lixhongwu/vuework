<template>
  <div>
    <div class="head">
      <ul class="head-content">
        <router-link to="/news/recomond" tag="li" active-class="active">推荐</router-link>
        <router-link to="/news/news" tag="li" active-class="active">新闻</router-link>
        <router-link to="/news/yule" tag="li" active-class="active">娱乐</router-link>
        <router-link to="/news/finance" tag="li" active-class="active">财经</router-link>
        <router-link to="/news/sports" tag="li" active-class="active">体育</router-link>
        <router-link to="/news/pepole" tag="li" active-class="active">民生</router-link>
      </ul>
    </div>
    <div class="banner-cotent">
      <img class="banner" src="../../assets/banner.jpeg"/>
      <p class="title">韩国民众举行集体祈福</p>
    </div>
    <div class="new-content">
      <ul>
        <li class="new-items">
          <div class="item-inner">
            <img class="img-inner" src="../../assets/1.png">
            <p class="item-title">国礼送什么？普京带了一个俄罗斯浴室</p>
            <span class="time">1小时前</span>
              <span class="num">266跟帖</span>
          </div>
        </li>
        <li class="new-items">
          <div class="item-inner">
            <img class="img-inner" src="../../assets/1.png">
            <p class="item-title">国礼送什么？普京带了一个俄罗斯浴室</p>
            <span class="time">1小时前</span>
            <span class="num">266跟帖</span>
          </div>
        </li>
        <li class="new-items">
          <div class="item-inner">
            <img class="img-inner" src="../../assets/1.png">
            <p class="item-title">国礼送什么？普京带了一个俄罗斯浴室</p>
            <span class="time">1小时前</span>
            <span class="num">266跟帖</span>
          </div>
        </li>
        <li class="new-items">
          <div class="item-inner">
            <img class="img-inner" src="../../assets/1.png">
            <p class="item-title">国礼送什么？普京带了一个俄罗斯浴室</p>
            <span class="time">1小时前</span>
            <span class="num">266跟帖</span>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>
<script>
import { Header } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" >
  @import "index.scss";
</style>
