// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer'], (template,url,footer) => {
        // 写首页逻辑
        class Index {
            constructor () {
                this.headerContainer = $("header")

                this.hot()
            }


            swiper () {
                // 轮播图方法
                console.log('swiper')
            }

            hot () {
                // 热卖商品
                $.get(url.baseUrl + '/caleb-list1', resp =>{
                    console.log(resp)
                    if(resp.res_code === 200){
                        this.renderHot(resp.res_listTop)
                    }

                })
            }
            renderHot(res_listTop){
                //第一个参数是模板的id，第二个参数是模板里面需要的数据
                let html = template('list-template',{
                    list: res_listTop
                })
                // console.log(html)
                $('.con110').html(html)
                this.nav()
            }

            nav () {

                let $navUl = $(".nav-ul ");
                $navUl.on('click','li',function(){
                    $(this).addClass('on');
                    $(this).siblings().removeClass('on');
                })
            }
        }

        new Index()

    })
})