// 一个页面对应一个js，这个js里要依赖别的模块
require(['./config'], () => {
  // 引入config以后就有短名称了
  require(['template','url','header', 'footer','cookie'], (template,url,footer) => {
    // 写首页逻辑
    class Index {
      constructor () {
        this.headerContainer = $("header")

        this.hot()
        this.lunbo2()
      }
      

      swiper () {
        // 轮播图方法
        console.log('swiper')
      }

      hot () {
        // 热卖商品
          $.get(url.baseUrl + '/caleb-list', resp =>{
            //console.log(resp)
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
        //console.log(html)
          $('.small').html(html)
      }

      lunbo2(){
              let aBanner = document.getElementById("zy"),
                  a9 = aBanner.getElementsByClassName("a9"),
                  a10 = aBanner.getElementsByClassName("a10"),
                  a11 = aBanner.getElementsByClassName("a11"),
                  a12 = aBanner.getElementsByClassName("a12"),
                  aPrev = aBanner.querySelector(".prev1"),
                  aNext = aBanner.querySelector(".next1");
              //点击下一个

              aNext.onclick = function () {
                  if(aPrev.className === "prev1"){
                      aPrev.className = "prev1 on";
                  }
                  if(aNext.className === "next1 on"){
                      aNext.className = "next1";
                  }

                  for(let i = 0;i < a9.length;i ++){
                    a9[i].style.display = "none";
                  }
                  for(let i = 0;i < a10.length;i ++){
                    a10[i].style.display = "none";
                  }

                  for(let i = 0;i < a11.length;i ++){
                      a11[i].style.display = "block";
                  }
                  for(let i = 0;i < a12.length;i ++){
                      a12[i].style.display = "block";
                  }
              };
              //点击上一个
              aPrev.onclick = function () {
                  if(aPrev.className === "prev1 on"){
                      aPrev.className = "prev1";
                  }
                  if(aNext.className === "next1"){
                      aNext.className = "next1 on";
                  }

                  for(let i = 0;i < a9.length;i ++){
                      a9[i].style.display = "block";
                  }
                  for(let i = 0;i < a10.length;i ++){
                      a10[i].style.display = "block";
                  }

                  for(let i = 0;i < a11.length;i ++){
                      a11[i].style.display = "none";
                  }
                  for(let i = 0;i < a12.length;i ++){
                      a12[i].style.display = "none";
                  }
              };

      }
    }



    new Index()

  })
})