import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import news from '@/components/wynews/news'
import test from '@/components/test/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
