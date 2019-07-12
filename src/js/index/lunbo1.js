(function(){
    let oBanner = document.getElementById("lunbo1"),
        aPicLi = oBanner.querySelectorAll(".pic li"),
        aTabLi = oBanner.querySelectorAll(".tab li"),
        oPrev = oBanner.querySelector(".prev"),
        oNext = oBanner.querySelector(".next"),
        len = aTabLi.length,
        index = 0,//获取初始显示的那个li的下标
        timer = null;
    Move(aPicLi[index],{
        opacity : 1,
        "z-index" : 2
    },600);
    /*设置时间，获取上一次点击的时间，和当前点击的时间，得到时间间隔
    要保证这个时间间隔大于动画运行时间，这样才能保证动画全部运动完*/
    let date = new Date();//获取初始时间
    oNext.onclick = function(){
        if(new Date() - date > 650){//动画已经运行完的前提
            Move(aPicLi[index],{
                opacity : 0,
                "z-index" : 1
            },600);//给上一个li消失动画
            //移除上一个小圆点的on
            aTabLi[index].classList.remove("on");
            index++;
            index %= len;//取模

            Move(aPicLi[index],{
                opacity : 1,
                "z-index" : 2
            },600);//给当前的li显示动画
            //显示当前小圆点的on
            aTabLi[index].classList.add("on");
        }
        date = new Date();//更新时间
    };
    //点击上一个
    oPrev.onclick = function(){
        if(new Date() - date > 650){//动画已经运行完的前提
            Move(aPicLi[index],{
                opacity : 0,
                "z-index" : 1
            },600);//给上一个li消失动画
            aTabLi[index].classList.remove("on");
            index--;
            //如果当前正处在从第0张切换到第5张的情况
            //那么index小于0，index = len -1 = 5
            index < 0 && (index = len - 1);

            Move(aPicLi[index],{
                opacity : 1,
                "z-index" : 2
            },600);//给当前的li显示动画
            aTabLi[index].classList.add("on");
        }
        date = new Date();//更新时间
    };
    for(let i = 0; i < len; i++){
        aTabLi[i].i = i;
        aTabLi[i].onclick = function(){
            Move(aPicLi[index],{
                opacity : 0,
                "z-index" : 1
            },600);//给上一个li消失动画
            //移除上一个小圆点的on
            aTabLi[index].classList.remove("on");
            index = this.i;
            Move(aPicLi[this.i],{
                opacity : 1,
                "z-index" : 2
            },600);//给当前的li显示动画
            //显示当前小圆点的on
            aTabLi[this.i].classList.add("on");
        };
    }
    oBanner.onmouseover = function(){
        clearInterval(timer);
    };
    oBanner.onmouseleave = function(){
        timer = setInterval(change,2500);
    };
    //自动切换
    timer = setInterval(change,2500);
    function change(){
        if(new Date() - date > 650){//动画已经运行完的前提
            Move(aPicLi[index],{
                opacity : 0,
                "z-index" : 1
            },600);//给上一个li消失动画
            //移除上一个小圆点的on
            aTabLi[index].classList.remove("on");
            index++;
            index %= len;//取模
            Move(aPicLi[index],{
                opacity : 1,
                "z-index" : 2
            },600);//给当前的li显示动画
            //显示当前小圆点的on
            aTabLi[index].classList.add("on");
        }
        date = new Date();//更新时间
    }
})();