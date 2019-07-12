define(['jquery'], () => {
  class Header {
    constructor () {
      this.container = $("#header-container")
      this.load().then(() => {
        // 操作header里面的DOM
        this.search();
        this.navUlLi();
      })
    }

    load () {
      return new Promise(resolve => {
        // 由于header模块要在不同的页面使用，所以路径一定是绝对路径 /html/....
        this.container.load('/html/model/header.html', () => {
          // 异步加载完成
          resolve()
        })
      })
    }

    search () {
      let $ipt = $(".ipt11"),
          $select = $(".select");

      $ipt.on('focus',function(){
          $select.css('display','block');
      })

      $ipt.on('blur',function(){
          $select.css('display','none');

      })
    }

    navUlLi () {
      let $li = $(".ul15 li"),
          $con1 = $(".nav-2 .con1"),
          $odd1 = $(".odd1"),
          $even1 = $(".even1"),
          $con111 = $(".con111"),
          $con112 = $(".con112"),
          $nav2 = $(".nav-2");

      $li.on('mouseenter',function(){
        $con1.css('display','block');
      })
      $odd1.on('mouseenter',function(){
        $con111.css('display','block');
        $con112.css('display','none');
      })
      $even1.on('mouseenter',function(){
          $con112.css('display','block');
          $con111.css('display','none');
      })
      $nav2.on('mouseleave',function(){

        $con1.css('display','none');
      })
    }


  }

  return new Header()
})

