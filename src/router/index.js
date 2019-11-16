import Vue from 'vue'
import Router from 'vue-router'

const Home =()=>import('../views/home/Home')
const Cart =()=>import('../views/cart/Cart')
const Category =()=>import('../views/category/Category')
const Profile =()=>import('../views/profile/Profile')


const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};


// 1.安装插件
Vue.use(Router)

// 2.创建路由
const  routes = [
  {
    // 路由的默认路径
    path: '/',
    // redirect 重定向
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta:{
      title: '首页'
    }
  },
  {
    path: '/cart',
    component: Cart,
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类'
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta:{
      title: '我的'
    }
  }

]

const router = new Router({
  routes,
  mode: 'history'
})

// 3.导出router
export default router
