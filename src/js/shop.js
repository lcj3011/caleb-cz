// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer', 'zoom'], (template,url,footer) => {
        // 写首页逻辑
        class Shop {
            constructor () {
                this.headerContainer = $("header")
                this.container = $('#shop-imgs')
                this.init();
                this.addToCart();
                this.getData().then(detail => {
                    this.renderDetail(detail)
                })
            }


            init () {
                // 热卖商品
                $.get(url.baseUrl + '/caleb-list3', resp =>{

                })
            }


            getData () {
                // 取到id值，请求接口
                const id = window.location.search.slice(4)
                console.log(id)
                return new Promise(resolve => {
                    $.get(`http://rap2api.taobao.org/app/mock/223576/caleb-list4`, { id }, resp => {

                        if (resp.code === 200) {
                            const { detail } = resp.body

                            // 由于rap2不能处理请求的时候携带的id，所以返回的数据里没有id
                            // 所以咱们手动的给detail加上id字段
                            // 只有使用rap2的时候需要，上线之后这行代码是不需要的
                            detail.id = id
                            // 存在this身上，这样的话别的方法（比如加购物车）直接获取当前商品信息
                            this.detail = detail
                            // detail = {
                            //   ...detail,
                            //   id
                            // }
                            resolve(detail)
                        }
                    })
                })

            }
            renderDetail (detail) {

                let str = template('template-img', { data: detail })
                this.container.html(str)
                this.zoomImg()
            }

            zoomImg () {
                $('.zoom-img').elevateZoom({
                    gallery: 'gal1', // ul父级盒子的id
                    cursor: 'pointer',
                    borderSize: '1',
                    galleryActiceClass: 'active',
                    borderColor: '#f2f2f2'
                })
            }


            addToCart () {
                let _this = this
                // 添加购物车按钮绑定事件（事件委托）
                $('.con3').on('click', '.addCart1', function () {


                    // 商品加入购物车
                    // 把当前商品存入localStorage
                    // let str = JSON.stringify(_this.detail)
                    // localStorage.setItem('cart', str)

                    // 先取出来判断是否为空
                    let allCart = localStorage.getItem('cart')
                    if (allCart) {
                        // 说明购物车已经有数据了
                        console.log(allCart)
                        // 从localstorage取出来的是json字符串，所以转换一下
                        allCart = JSON.parse(allCart)
                        // 判断allCart里面是否存在当前商品
                        const isExist = allCart.some(shop => {
                            return shop.id === _this.detail.id
                        })

                        if (isExist) {
                            // 说明当前商品已经加入过购物车了
                            // 把这条商品num++就行了

                            // 这种方式也能达到效果，但是不推荐（尽量不要直接修改原数组，而是返回一个新的数组）
                            // allCart.forEach(shop => {
                            //   if (shop.id === _this.detail.id) shop.num++
                            // })

                            allCart = allCart.map(shop => {
                                if (shop.id === _this.detail.id) shop.num++
                                // map方法每一次循环都要有一个返回值，这些返回值会构成一个新的数组，就是整个map的结果
                                return shop
                            })
                        } else {
                            // 购物车有数据，但是没有当前这一条
                            // 把当前商品push进去
                            allCart.push({
                                ..._this.detail,
                                num: 1,
                                check: true
                            })
                        }
                        // 修改完成之后重新存一次把之前的覆盖掉，不管if还是else都要重新存
                        localStorage.setItem('cart', JSON.stringify(allCart))

                    } else {
                        // 购物车为空
                        // 把当前数据构造出一个数组（length为1），默认加上num字段（一般为1，或者页面上的数量），存进去
                        // 默认让商品在购物车页面处于选中状态
                        let arr = [
                            {
                                ..._this.detail,
                                num: 1,
                                check: true
                            }
                        ]
                        // 把这个数组转成json字符串存
                        localStorage.setItem('cart', JSON.stringify(arr))
                    }

                })
            }

        }

        new Shop()

    })
})