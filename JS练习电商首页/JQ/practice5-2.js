$(function(){
	$(".top-left li")
	.first()
	.click(function(){
		$(".login")
		.css("display","block")
	})
//登陆页面
	$(".btn-register")
	.click(function(){
		$(".btn-login")
		.css("border-bottom","3px solid #fff")
		$(".btn-register")
		.css("border-bottom","3px solid red")
		$(".login-page")
		.css("display","none")
		$(".register-page")
		.css("display","block")
		$(".login form")
		.css("height","240px")
	})
	$(".btn-login")
	.click(function(){
		$(".btn-register")
		.css("border-bottom","3px solid #fff")
		$(".btn-login")
		.css("border-bottom","3px solid red")
		$(".register-page")
		.css("display","none")
		$(".login-page")
		.css("display","block")
		$(".login form")
		.css("height","280px")
	})
	$(".close")
	.click(function(){
		$(".login")
		.css("display","none")
	})

//top-right
	$(".top-right .more")
	.mouseover(function(){
		$(this)
		.css({
			"border":"1px solid #ccc",
			"background-color":"#fff"
		})
		.children("div")
		.css("display","block")
	})
	$(".top-right .more")
	.mouseout(function(){
		$(this)
		.css({
			"border":"1px solid rgba(0,0,0,0)",
			"background-color":"rgba(0,0,0,0)"
		})
		.children("div")
		.css("display","none")
	})

//购物车
    $(".cart")
    .click(function(){
    	$(".cart")
    	.css({
    		"background-color":"#fff",
    		"border":"1px solid #ccc"
    	})
    	.children("img:eq(0)")
    	.attr("src","IMG/logo/img2-1.png")
    	.end()
    	.children("img:eq(1)")
    	.attr("src","IMG/logo/img3-1.png")
    	.end()
    	.children("span")
    	.css("color","red")
    	$(".cart-detail")
    	.css("display","block")
    })
    .mouseleave(function(){
    	$(".cart")
    	.css({
    		"background-color":"red",
    		"border":"1px solid red"
    	})
    	.children("img:eq(0)")
    	.attr("src","IMG/logo/img2.png")
    	.end()
    	.children("img:eq(1)")
    	.attr("src","IMG/logo/img3.png")
    	.end()
    	.children("span")
    	.css("color","white")
    	$(".cart-detail")
    	.css("display","none")
    })

//副标题

    $(".goods-classification ul li")
    .mouseover(function(){
    	var A=$(this).attr("class"),
    	    a=parseInt(A);
    	$(".classification")
    	.css("display","none")
    	.eq(a)
    	.css("display","block")
    })

    $(".goods-classification")
    .mouseleave(function(){
    	$(".classification")
    	.css("display","none")
    })

//imgcarousel

    var i=0,
        T=null,
        img=$(".imgcarousel").children("img"),
        dot=$(".dot div"),
        pre=$(".pre"),
        next=$(".next");
    //切换图片
    function changeimg()
    {
	    img
	    .css("display","none");
	    img
	    .eq(i)
	    .css("display","inline");
    }
    //切换圆点
    function changebtn()
    {
	    dot
	    .css({
		    "backgroundColor":"rgba(0,0,0,0.2)",
		    "border":"1px solid #fff"
	    })
	    .eq(i)
	    .css({
		    "backgroundColor":"#fff",
		    "border":"1px solid #bbb"
	    })
    }
    //自动轮播
    function carousel()
    {
	    T=
	    setInterval(function(){
		    i<4?i++:i=0;
		    changeimg();
		    changebtn();
	    },2000)
    }
    //点击圆点换图
    dot
    .on({
	    mouseover:function(){
		    clearInterval(T)
	    },
	    mouseleave:function(){
		    carousel()
	    },
	    click:function(){
		    i=$(this).index();
		    changeimg();
		    changebtn();
	    }
    })
    //图片悬停停止轮播
    img
    .on({
	    mouseover:function(){
		    clearInterval(T)
	    },
	    mouseleave:function(){
		    carousel()
	    }
    })
    //点击上一张换图
    pre
    .click(function(){
    	clearInterval(T);
    	i>0?i--:i=4;
    	changeimg();
    	changebtn();
    })
    //点击下一张换图
    next
    .click(function(){
    	clearInterval(T);
    	i<4?i++:i=0;
    	changeimg();
    	changebtn();
    })
    //初始状态
    changeimg();
    changebtn();
    carousel();
    
//content

    function changetitle(tab,floor){

    var cube=$(tab).children("div"),
        title=$(tab).children("h3"),
        goods=$(floor).children(".goods");
        //console.log(goods);
    
    cube
    .eq(0)
    .css("display","block")

    goods
    .eq(0)
    .nextAll()
    .css("display","none")

    title
    .click(function(){
    	var B=$(this).attr("index"),
    	    b=parseInt(B);
    	    console.log(b);
    	cube
    	.css("display","none")
    	$(this)
    	.next("div")
    	.css("display","block")
    	goods
    	.css("display","none")
    	.eq(b)
    	.css("display","block")
    })
    }

    var tab1=".f-first .tab .tab-right div",
        tab2=".f-second .tab .tab-right div",
        tab3=".f-third .tab .tab-right div",
        tab4=".f-fourth .tab .tab-right div",
        tab5=".f-fifth .tab .tab-right div",
        floor1=".f-first",
        floor2=".f-second",
        floor3=".f-third",
        floor4=".f-fourth",
        floor5=".f-fifth";

    changetitle(tab1,floor1)
    changetitle(tab2,floor2)
    changetitle(tab3,floor3)
    changetitle(tab4,floor4)
    changetitle(tab5,floor5)

})