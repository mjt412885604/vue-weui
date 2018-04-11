import axios from 'axios'

const service = axios.create({
    baseURL: '../',
    timeout: 30000,
    // retry: 2, // 超时重新请求次数
    // retryDelay: 1000 // 请求间隔
});

service.interceptors.request.use(function (config) {
    console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

service.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    console.error(error.response)

    var config = error.config;
    // 是否进行超时重新请求操作
    if (!config || !config.retry) {
        if (error.response.status == 401) {
            
        }

        return Promise.reject(error.response.data)
    };

    config.__retryCount = config.__retryCount || 1; // 记录重新请求次数

    // 累计本地请求次数与设定的重新提交做对比
    if (config.__retryCount >= config.retry) {
        if (error.response.status == 401) {
            follow() // 用户缺少权限，请先关注公众号
        }

        return Promise.reject(error.response.data);
    }

    config.__retryCount += 1; // 记录重新提交次数

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, config.retryDelay || 1);
    });

    // Return the promise in which recalls axios to retry the request
    return backoff.then(function () {
        return service(config);
    });
});

export default service;