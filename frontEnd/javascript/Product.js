$(document).ready(function(){
    $("#footer1").load("footer1.html");
    $("#footer2").load("footer2.html");
    $("#nav").load("nav.html");
    $("#searchtop").load("searchtop.html")
});

/** 切换产品详情图片的功能**/
$(function(){
    $("img.smallImage").mouseenter(function(){
        var bigImageURL = $(this).attr("bigImageURL");
        $("img.bigImg").attr("src",bigImageURL);
    });
    $("img.bigImg").load(
        function(){
            $("img.smallImage").each(function(){
                var bigImageURL = $(this).attr("bigImageURL");
                img = new Image();
                img.src = bigImageURL;
                img.onload = function(){
                    console.log(bigImageURL);
                    $("div.img4load").append($(img));
                };
            });
        }
    );

});

/** 设置库存并界定加入购物车的数量**/
$(function(){
    var stock = 66;
    $(".productNumberSetting").keyup(function(){
        var num= $(".productNumberSetting").val();
        num = parseInt(num);
        if(isNaN(num))
            num= 1;
        if(num<=0)
            num = 1;
        if(num>stock)
            num = stock;
        $(".productNumberSetting").val(num);
    });

    $(".increaseNumber").click(function(){
        var num= $(".productNumberSetting").val();
        num++;
        if(num>stock)
            num = stock;
        $(".productNumberSetting").val(num);
    });
    $(".decreaseNumber").click(function(){
        var num= $(".productNumberSetting").val();
        --num;
        if(num<=0)
            num=1;
        $(".productNumberSetting").val(num);
    });

});

/** 切换产品详情和评论画面**/
$(function(){
    $("div.productReviewDiv").hide();
    $("a.productDetailTopReviewLink").click(function(){
        $("div.productReviewDiv").show();
        $("div.productDetailDiv").hide();
    });
    $("a.productReviewTopPartSelectedLink").click(function(){
        $("div.productReviewDiv").hide();
        $("div.productDetailDiv").show();
    });
})
