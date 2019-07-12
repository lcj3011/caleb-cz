// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
    // 引入config以后就有短名称了
    require(['header', 'footer'], (footer) => {
        // 写首页逻辑
        class Register {
            constructor () {
                this.register();
            }


            init () {
                // 热卖商品
            }

            register () {
                let $span1 = $(".span1"),
                    $span2 = $(".span2");
                $span2.on("click", () => {
                    $span2.removeClass("on");
                    $span1.addClass("on");
                })

                $span1.on("click", () => {
                    $span1.removeClass("on");
                    $span2.addClass("on");
                })

                let $s2 = $(".s22"),
                    $s3 = $(".s33"),
                    $s4 = $(".s44"),
                    $s5 = $(".s55"),
                    $btn = $(".btn"),
                    $a = $(".a10");

                $s2.on('keyup',() =>{
                    if($s2.val() !=='' && $s3.val() !=='' && $s4.val() !=='' && $s5.val() !==''){
                        $btn.addClass("btnOn");
                    }else{
                        $btn.removeClass("btnOn");
                    }
                });

                $s3.on('keyup',() =>{
                    console.log(111)
                    if($s2.val() !=='' && $s3.val() !=='' && $s4.val() !=='' && $s5.val() !==''){
                        $btn.addClass("btnOn");
                    }else{
                        $btn.removeClass("btnOn");
                    }
                });

                $s4.on('keyup',() =>{
                    if($s2.val() !=='' && $s3.val() !=='' && $s4.val() !=='' && $s5.val() !==''){
                        $btn.addClass("btnOn");
                    }else{
                        $btn.removeClass("btnOn");
                    }
                });

                $s5.on('keyup',() =>{
                    if($s2.val() !=='' && $s3.val() !=='' && $s4.val() !=='' && $s5.val() !==''){
                        $btn.addClass("btnOn");
                    }else{
                        $btn.removeClass("btnOn");
                    }
                });


                $btn.on('click',() =>{

                    if($s2.val() !=='' && $s3.val() !=='' && $s4.val() !=='' && $s5.val() !==''){
                        alert("注册成功")
                    }else{
                        alert("注册失败")
                        $a.attr("href","http://localhost:404/html/register.html");
                    }
                })
            }
        }

        new Register()

    })
})