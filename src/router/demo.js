const Demo1 = () => import('@/views/demo/demo1/index.vue')
const Classify = () => import('@/views/classify/index.vue')
const My = () => import('@/views/my/index.vue')

const appRoute = [
    {
		path: '/demo/demo1',
		name: 'DemoDemo1',
		component: Demo1,
		meta: {
			title: '首页',
			tabbarshow: true
		  }
	},
    {
		path: '/classify',
		name: 'classify',
		component: Classify,
		meta: {
			title: '分类',
			tabbarshow: true
		  }
	},
	{
		path:'/shopping',
		name:'shopping',
		component:()=>import('@/views/shopping/index'),
		meta: {
			title: '购物车',
			tabbarshow: true
		  }
	},
	{
		path: '/my',
		name: 'my',
		component: My,
		meta: {
			title: '我的',
			tabbarshow: true
		  }
	},
	{
		path:'/my/message',
		name:'message',
		component:() => import('../views/my/message/index.vue'),
		meta:{
			title:'消息中心',
			tabbarshow: false
		}
	},
	{
		path:'/my/setting',
		name:'setting',
		component:() => import('../views/my/setting/index.vue'),
		meta:{
			title:'设置',
			tabbarshow: false
		}
	},
	{
		path:'/my/wallet',
		name:'wallet',
		component:() => import('../views/my/wallet/index.vue'),
		meta:{
			title:'我的钱包',
			tabbarshow: false
		}
	},
	{
		path:'/my/promotion',
		name:'promotion',
		component:() => import('../views/my/promotion/index.vue'),
		meta:{
			title:'分销推广',
			tabbarshow: false
		}
	},
	{
		path:'/my/address',
		name:'address',
		component:() => import('../views/my/address/index.vue'),
		meta:{
			title:'收货地址',
			tabbarshow: false
		}
	},
	{
		path:'/my/addAddress',
		name:'addAddress',
		component:() => import('../views/my/address/addAddress.vue'),
		meta:{
			title:'收货地址',
			tabbarshow: false
		}
	},
	{
		path:'/login/addLogin',
		name:'addLogin',
		component:() => import('../views/app/login/addLogin.vue'),
		meta:{
			title:'手机号绑定',
		}
	},
	{
		path:'/my/member',
		name:'member',
		component:() => import('../views/my/member/index.vue'),
		meta:{
			title:'会员中心',
		}
	},
	{
		path:'/my/member',
		name:'member',
		component:() => import('../views/my/member/index.vue'),
		meta:{
			title:'我的收藏',
		}
	},

]

export default appRoute