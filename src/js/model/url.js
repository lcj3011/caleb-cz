// 配置请求baseUrl模块
// 上线之前的假接口
define(() =>{
    return {
        baseUrl:'http://rap2api.taobao.org/app/mock/223576',
        basePhpUrl:'http://localhost'
    }
})


// 上线之后都换成真实接口
/*define(() =>{
    return {
        baseUrl:'http://rap2api.taobao.org/app/mock/223576/caleb-shop',
        basePhpUrl:'http://localhost'
    }
})*/
