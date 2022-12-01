// 测试底部路由切换
import demo from '@/router/demo.js'

const Home = () => import('@/views/app/home/home.vue')
const Login = () => import('@/views/app/login/login.vue')

const appRoute = [
  {
    path: '/',
    redirect: '/home'
  }, 
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/demo/demo1',
    children:demo
  },
	{
		path: '/login',
		name: 'Login',
		component: Login,
    meta:{
      title:'登录'
    }
	},
  {
    path: '*',
    redirect: '/404'
  },
]

export default appRoute
