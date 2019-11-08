import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'
// 1 安装插件
Vue.use(Vuex)

// 创建store对象
const store = new Vuex.Store({
	getters,
	state:{
		cartList:[]
	},
	mutations:{
		addCart(state,payload){
			// payload新添加的商品
			let oldProduct = null;
			for(let item of state.cartList){
				if(item.iid === payload.iid){
					oldProduct = item;
				}
			}
			// 判断oldProduct
			if(oldProduct){
				oldProduct.count +=1
			}else{
				payload.count = 1;
				state.cartList.push(payload);
			}
		}
	}
})

// 挂到vue实例上
export default store;