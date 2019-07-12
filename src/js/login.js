// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['header', 'footer'], (footer) => {
    // 写首页逻辑
    class Login {
        constructor () {
            this.login();
        }


        init () {
            // 热卖商品
        }

        login () {
            let tel= $(".tel"),
                pw = $(".pw"),
                $btn = $(".btn20"),
                $a = $(".loginA");

            tel.on('keyup',() =>{
                if(tel.val() !==''&& pw.val() !==''){
                    $btn.addClass("btnOn");
                }else{
                    $btn.removeClass("btnOn");
                }
            });

            pw.on('keyup',() =>{
                if(tel.val()!=='' && pw.val()!==''){
                    $btn.addClass("btnOn");
                }else{
                    $btn.removeClass("btnOn");
                }
            });

            $btn.on('click',() =>{
                 if(tel.val()!=='' && pw.val()!==''){
                     alert("登陆成功")
                 }else{
                     alert("登陆失败")
                     $a.attr("href","http://localhost:404/html/login.html");
                 }
            })



            let $span1 = $(".span20"),
                $span2 = $(".span21");

                $span1.on("click", () => {
                $span1.removeClass("on");
                $span2.addClass("on");
            })

                 $span2.on("click", () => {
                 $span2.removeClass("on");
                 $span1.addClass("on");
            })
        }
    }

    new Login()

    })
})