import {requests} from "./request.js"

	export function getHomeGoods(type,page){
		return requests({
			url: "home/data",
			params: {
				type,
				page
			}
		})
	}