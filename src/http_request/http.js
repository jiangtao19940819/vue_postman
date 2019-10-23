import axios from 'axios'
let request = axios.create({
	//baseURL:"http://127.0.0.1:8888",
    baseURL:"http://127.0.0.1:7000",
	//baseURL:"http://172.16.35.231:8888",
	//baseURL:"http://10.0.2.214:8888",
	timeout:100000
})



request.interceptors.response.use(
    function(response){
		return  Promise.resolve(response.data)
	},
    function(error){

		return  Promise.reject(error)
	}
)
export default {
    get: async function(url,params){
		return await request.get(url,{params:params})
	},
	getUrl: async function(url){
		return await request.get(url)
	},
    post:async function(url,data){
		return  await request.post(url,data)
	}
}