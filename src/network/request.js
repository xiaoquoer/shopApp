import axios from 'axios'
export function request(config) {
	// 1、创建axios实例
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
		timeout: 5000
	})
	
	// axios拦截器
	instance.interceptors.request.use(config=>{
		// 比如再拦截响应时 界面显示一个小图标在转
		return config;
	},err =>{
		console.log(err);
	})
	return instance(config);
}

export function requests(config) {
	// 1、创建axios实例
	const instance = axios.create({
		baseURL: 'http://106.54.54.237:8000/api/v1',
		timeout: 5000
	})
	
	// axios拦截器
	instance.interceptors.request.use(config=>{
		// 比如再拦截响应时 界面显示一个小图标在转
		return config;
	},err =>{
		console.log(err);
	})
	return instance(config);
}
