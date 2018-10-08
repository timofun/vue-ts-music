import axios from 'axios';
import configUlr from '@/utils/config.ts'
// 创建axios实例
const service = axios.create({
  baseURL: configUlr.url.baseUrl, // api的base_url
  timeout: 5000,                  // 请求超时时间
})

// request拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  // Do something with request error
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('err' + error)// for debug
    return Promise.reject({mes: '网络错误', timeout: 5000})
  },
)

export default service
