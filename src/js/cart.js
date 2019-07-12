// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['template','url','header', 'footer'], (template,url,footer) => {
        // 写首页逻辑
        class Cart {
            constructor () {
                this.headerContainer = $("header")

                this.hot()
                this.yuansheng()
            }

            hot () {
                // 热卖商品
                $.get(url.baseUrl + '/caleb-list2', resp =>{
                    console.log(resp)
                    if(resp.res_code === 200){
                        this.renderHot(resp.res_listTop)
                    }

                })
            }
            renderHot(resp){

                //第一个参数是模板的id，第二个参数是模板里面需要的数据
                let html = template('cart-template',{
                    list: resp
                })
                console.log(html)
                $('.con14').html(html)
            }

            yuansheng () {
                var minus = document.getElementsByClassName("minus"),
                    plus = document.getElementsByClassName("plus"),
                    ipt = document.getElementsByClassName("input"),
                    sum = document.getElementsByClassName("sum")[0],
                    totalP = document.getElementsByClassName("totalP")[0],
                    sTotal = document.getElementsByClassName("sTotal"),
                    price = document.getElementsByClassName("price"),
                    len = minus.length;

                for(var i=0;i<len;i++){
                    plus[i].index = i;
                    minus[i].index = i;
                    plus[i].onclick = function () {
                        var num = 0,
                            tot = 0;
                        ipt[this.index].value ++;
                        sTotal[this.index].innerHTML = price[this.index].innerHTML * ipt[this.index].value;
                        for(var i=0;i<len;i++){
                            num += ipt[i].value*1;
                            tot += sTotal[i].innerHTML*1;
                        }
                        sum.innerHTML = num;
                        totalP.innerHTML = tot;
                    };
                    minus[i].onclick = function () {
                        var num = 0,
                            tot = 0;
                        ipt[this.index].value --;
                        if(ipt[this.index].value < 0){
                            ipt[this.index].value = 0;
                        }
                        sTotal[this.index].innerHTML = price[this.index].innerHTML * ipt[this.index].value;
                        for(var i=0;i<len;i++){
                            num += ipt[i].value*1;
                            tot += sTotal[i].innerHTML*1;
                        }
                        sum.innerHTML = num;
                        totalP.innerHTML = tot;
                    }

                }

            }
        }

        new Cart()

    })
})