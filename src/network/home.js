// home页面的axios请求
import {request} from "./request.js"
export function getHomeData(){
	// return request({
	// 	url: "/headers"
	// }).then(res => {
	// 	console.log(res);
	// }).catch(err => {
	// 	console.log(err);
	// })
	return request({
		url: "/home/multidata"
	})
	}
	

