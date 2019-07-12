require.config({
  baseUrl: '/',
  paths: {
    jquery: 'libs/jquery/jquery-3.2.1.min',
    header: 'js/model/header',
    footer: 'js/model/footer',
    url:'js/model/url',
    template: 'libs/art-template/template-web',
    cookie: 'libs/jquery-plugins/jquery.cookie',
    fly: 'libs/jquery-plugins/jquery.fly',
    zoom: 'libs/jquery-plugins/jquery.elevatezoom'
    //把插件放进文件
    //垫片，加载一些不满足AMD规范但是又依赖于别的模块
    //cookie插件不满足AMD并且依赖于jquery
    //给插件使用垫片，垫jquery
    //在页面中使用插件

  },
    shim: {
        cookie: {
            deps: ['jquery']
        },
        fly: {
            deps: ['jquery']
        },
        zoom: {
            deps: ['jquery']
        }
    }
})