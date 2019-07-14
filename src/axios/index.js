import axios from 'axios'
import JsonP from 'jsonp'
import { Modal } from 'antd';
export default class Axios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status === 'success') {
                    resolve(response)
                } else {
                    reject(response.message)
                }
            })
        })
    }
    static ajax(options) {
        const baesApi = 'https://easy-mock.com/mock/5d2a9caa1bba03305e100ec5/api'
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baesApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data
                    if (res.code === 0) {
                        resolve(res)
                    } else {
                        Modal.info({
                            title: "",
                            content: res.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}