import axios from 'axios'
// import QS from 'qs'


// 请求超时时间
axios.defaults.timeout = 30000;
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//设置公共url
// axios.defaults.baseURL = 'http://127.0.0.1:8080'
// axios.defaults.baseURL = 'http://32.81.114.215:8888'
axios.defaults.baseURL = process.env.VUE_APP_URL

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // console.log(config);
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // console.log(error);
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // console.log(response);
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
    // 对响应数据做点什么
    //   return response;
}, function (error) {
    // console.log(error);
    // 对响应错误做点什么
    return Promise.reject(error);
});

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url,params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export default axios