
import VueRouter from 'vue-router'
import Vue from 'vue'

const Home = ()=> import('../views/home/Home')
const Cart = ()=> import('../views/cart/Cart')
const Category = ()=> import('../views/category/Category')
const Profile = ()=> import('../views/profile/Profile')
const Detail = ()=> import('../views/detail/Detail')
// 安装插件  使用router
Vue.use(VueRouter)

// 创建路由对象
const routes = [
	{
		path : '',
		redirect : "/home"
	},
	{
		path : '/home',
		component : Home,
		// meta : {
		// 	title : '首页'
		// },
	},
	{
		path : '/cart',
		component : Cart,
		// meta : {
		// 	title : '购物车'
		// }
	},
	{
		path : '/category',
		component : Category,
		// meta : {
		// 	title : '详情'
		// }
	},
	{
		path : '/profile',
		component : Profile,
		// meta : {
		// 	title : '档案'
		// }
	},
	{
		path : '/detail/:iid',
		component : Detail,
	}
]

const router = new VueRouter({
	routes,
})

// 全局导航守卫,进行事件监听
// 前置钩子(hook),回调的意思  beforeEach 路由跳转前
// router.beforeEach((to,from,next)=>{
// 	// 从from来到to去
// 	document.title = to.matched[0].meta.title
// 	// console.log(to);
// 	next();
// })

// 导出router
export default router;


