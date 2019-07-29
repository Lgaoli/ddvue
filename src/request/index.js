let uploadBase = ''

if (process.env.NODE_ENV === 'production') {
    uploadBase = 'http://d.wbgapp.com'
}

export const ApiSetting = {
    // 获取用户信息
    info: { url: '/api/v2/user/info ', method: 'get' },

}


export const ApiSetting = {
    // 获取用户信息
    account_login: { url: '/api/v2/user/info ', method: 'get' },

}

