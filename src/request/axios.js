import Axios from 'axios'
// import { MessageBox } from 'element-ui'

Axios.defaults.withCredentials = true

Axios.interceptors.response.use(
    data => {
        if (data.status && data.status === 200 && data.data.code !== 200) {
            if(data.data.code === 502){
                location.href = '/login'
            }
            // MessageBox.alert(data.data.message)
            return Promise.reject(data.data.message[0].details, data)
        }
        return data
    },
    err => {
        if (err.response.status === 404) {
            //          MessageBox.alert('请求无效', '提示')
        } else if (err.response.status === 403) {
            alert('权限不足,请联系管理员!', '提示')
        } else if (err.response.status === 502) {
            location.href = '/login'
        } else {
            alert('服务器错误!', '提示')
        }
        return Promise.reject(err)
    }
)

function errorState(err) {
}

function successState(res) {
}

const httpServer = (opts, data) => {
    const token = localStorage.getItem('token')
    const PUBLIC = `?token=${token}`
    let httpDefaultOpts = ''
    var host = `${process.env.HOST}`
    var prot = `${process.env.PORT}`
    var base = host +(prot?":"+prot:"")
    if (opts.method === 'post') {
        httpDefaultOpts = {
            method: opts.method,
            url: `${base}${opts.url}${PUBLIC}`,
              headers:{
                        'Content-Type':'text/html;charset=utf-8'
                    },
            //    timeout: 10000,
            data: data
        }
    } else {
        httpDefaultOpts = opts
    }

    return new Promise(function (resolve, reject) {
        Axios(httpDefaultOpts).then(
            (res) => {
                successState(res)
                resolve(res)
            }
        ).catch(
            (err) => {
                errorState(err)
                reject(err)
            }
        )
    })
}

export default httpServer