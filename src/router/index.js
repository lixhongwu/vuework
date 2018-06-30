import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import news from '@/components/wynews/news'
// 动态添加title
import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news/:type',
      name: 'news',
      component: news,
      meta: {
        title: '网易新闻'
      }
    }
  ]
})
