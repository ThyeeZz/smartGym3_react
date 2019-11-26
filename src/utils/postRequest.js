import axios from 'axios'
import {
  MessageBox,
  Message
} from 'element-ui'
// import store from '@/store'
import md5 from 'md5'

// create an axios instance
const service = axios.create({
  withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (sessionStorage.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['token'] = sessionStorage.getItem('token')
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

const getSignature = (u, t, d, s, m) => {
  let str = `FROM:${u}-(T:${t}-DATA:${JSON.stringify(d)}|SECRET:${s})=${m}`;
  let signature = md5(str).toUpperCase();
  return signature
}

service.interceptors.response.use(
  /**
   */

  response => {
    const res = response

    // 判断请求错误
    if (res.data.status_code !== 200) {
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      
      return Promise.reject(res.message || 'error')
    } else {
      return res
    }
  },
  error => {
    // console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    // return Promise.reject(error)
  }
)

const postRequest = function (url, data) {
  const encryptKey = '13CD7F1AAFD0D45E5CFE080BF8CED693';
  const udid = '60.186.186.233'; //客户端ip
  let time = new Date().getTime();
  return service({
    url: url,
    method: 'POST',
    data: data,
    headers: {
      'UDID': `${udid}`,
      'TIME': time,
      'SYSAUTH': `${getSignature(udid,time,data,encryptKey,'POST')}`,
      "AccessToken": window.sessionStorage.access_token ? window.sessionStorage.access_token : 0,
      'UID': window.sessionStorage.id ? window.sessionStorage.id : 0,
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
export default postRequest
