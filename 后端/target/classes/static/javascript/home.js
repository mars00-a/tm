$(document).ready(async function () {
    // $("#footer1").load("./footer1.html");
    // $("#footer2").load("./footer2.html");
    // $("#rollPicture").load("rollPicture.html");
    // $("#nav").load("./nav.html");
    $("#img1").hide();
    $("#img2").hide();
    $("#img3").hide();
    $("#img4").hide();
    $("#img5").hide();
    $("#img6").hide();
    // 将16个
    var listName = new Array(16);
    var navName = new Array(16);
    for (i = 0; i < 16; i++) {
        listName[i] = "#list" + (i + 1);
        navName[i] = ".nav" + (i + 1);
    }
    for (i = 0; i < 16; i++) {

        $(listName[i]).hide();
    }

    var data;
    await axios.get("http://localhost:1380/tmall_springboot/forehome").then(function (response) {
        data = JSON.parse(response.data.slice(0,-61));
        console.log(data)
    })





    var title = ["马桶", "沙发", "电热水器", "平衡车", "扫地机器人", "原汁机", "冰箱", "空调", "女表", "男表", "男士手拿包", "男士西服", "时尚男鞋", "品牌女装", "太阳镜", "安全座椅"];
    var father = $("#father")[0];
    for (var i = 0; i < 16; i++) {

        var tmp = data[16-i-1];
        var mould = $(".commoditylist")[0].cloneNode();
        var mouldTitle = $(".mouldTitle")[0].cloneNode();

        father.appendChild(mould);
        mouldTitle.innerHTML = title[i];
        mould.appendChild(mouldTitle);



        for(j = 0; j < 5; j++){
            var mouldA = $(".mouldA")[0].cloneNode();
            var mouldComm = $(".mouldComm")[0].cloneNode();
            var mouldImg = $(".mouldImg")[0].cloneNode();
            var mouldSpan = $(".mouldSpan")[0].cloneNode();
            var mouldRed = $(".mouldRed")[0].cloneNode();


            mould.appendChild(mouldA);
            mouldA.appendChild(mouldComm);
            mouldComm.appendChild(mouldImg);
            mouldImg.src = "img/" + tmp.products[j].firstProductImage.id + ".jpg";
            mouldComm.appendChild(mouldSpan);
            mouldSpan.innerHTML = tmp.products[j].name;
            mouldComm.appendChild(mouldRed);
            mouldRed.innerHTML = tmp.products[j].promotePrice;
        }

        // console.log("添加了第"+i+"个标签");
    }


    $(".nav17").mouseenter(function () {
        $("#list17").show();
    });
    $(".nav17").mouseleave(function () {
        $("#list17").hide();
    });
    $("#list17").mouseenter(function () {
        $("#list17").show();
    });
    $("#list17").mouseleave(function () {
        $("#list17").hide();
    });
    $(".nav16").mouseenter(function () {
        $("#list16").show();
    });
    $(".nav16").mouseleave(function () {
        $("#list16").hide();
    });
    $("#list16").mouseenter(function () {
        $("#list16").show();
    });
    $("#list16").mouseleave(function () {
        $("#list16").hide();
    });
    $(".nav15").mouseenter(function () {
        $("#list15").show();
    });
    $(".nav15").mouseleave(function () {
        $("#list15").hide();
    });
    $("#list15").mouseenter(function () {
        $("#list15").show();
    });
    $("#list15").mouseleave(function () {
        $("#list15").hide();
    });
    $(".nav14").mouseenter(function () {
        $("#list14").show();
    });
    $(".nav14").mouseleave(function () {
        $("#list14").hide();
    });
    $("#list14").mouseenter(function () {
        $("#list14").show();
    });
    $("#list14").mouseleave(function () {
        $("#list14").hide();
    });
    $(".nav13").mouseenter(function () {
        $("#list13").show();
    });
    $(".nav13").mouseleave(function () {
        $("#list13").hide();
    });
    $("#list13").mouseenter(function () {
        $("#list13").show();
    });
    $("#list13").mouseleave(function () {
        $("#list13").hide();
    });
    $(".nav12").mouseenter(function () {
        $("#list12").show();
    });
    $(".nav12").mouseleave(function () {
        $("#list12").hide();
    });
    $("#list12").mouseenter(function () {
        $("#list12").show();
    });
    $("#list12").mouseleave(function () {
        $("#list12").hide();
    });
    $(".nav11").mouseenter(function () {
        $("#list11").show();
    });
    $(".nav11").mouseleave(function () {
        $("#list11").hide();
    });
    $("#list11").mouseenter(function () {
        $("#list11").show();
    });
    $("#list11").mouseleave(function () {
        $("#list11").hide();
    });
    $(".nav10").mouseenter(function () {
        $("#list10").show();
    });
    $(".nav10").mouseleave(function () {
        $("#list10").hide();
    });
    $("#list10").mouseenter(function () {
        $("#list10").show();
    });
    $("#list10").mouseleave(function () {
        $("#list10").hide();
    });
    $(".nav9").mouseenter(function () {
        $("#list9").show();
    });
    $(".nav9").mouseleave(function () {
        $("#list9").hide();
    });
    $("#list9").mouseenter(function () {
        $("#list9").show();
    });
    $("#list9").mouseleave(function () {
        $("#list9").hide();
    });
    $(".nav8").mouseenter(function () {
        $("#list8").show();
    });
    $(".nav8").mouseleave(function () {
        $("#list8").hide();
    });
    $("#list8").mouseenter(function () {
        $("#list8").show();
    });
    $("#list8").mouseleave(function () {
        $("#list8").hide();
    });
    $(".nav7").mouseenter(function () {
        $("#list7").show();
    });
    $(".nav7").mouseleave(function () {
        $("#list7").hide();
    });
    $("#list7").mouseenter(function () {
        $("#list7").show();
    });
    $("#list7").mouseleave(function () {
        $("#list7").hide();
    });
    $(".nav6").mouseenter(function () {
        $("#list6").show();
    });
    $(".nav6").mouseleave(function () {
        $("#list6").hide();
    });
    $("#list6").mouseenter(function () {
        $("#list6").show();
    });
    $("#list6").mouseleave(function () {
        $("#list6").hide();
    });
    $(".nav5").mouseenter(function () {
        $("#list5").show();
    });
    $(".nav5").mouseleave(function () {
        $("#list5").hide();
    });
    $("#list5").mouseenter(function () {
        $("#list5").show();
    });
    $("#list5").mouseleave(function () {
        $("#list5").hide();
    });
    $(".nav4").mouseenter(function () {
        $("#list4").show();
    });
    $(".nav4").mouseleave(function () {
        $("#list4").hide();
    });
    $("#list4").mouseenter(function () {
        $("#list4").show();
    });
    $("#list4").mouseleave(function () {
        $("#list4").hide();
    });
    $(".nav3").mouseenter(function () {
        $("#list3").show();
    });
    $(".nav3").mouseleave(function () {
        $("#list3").hide();
    });
    $("#list3").mouseenter(function () {
        $("#list3").show();
    });
    $("#list3").mouseleave(function () {
        $("#list3").hide();
    });
    $(".nav2").mouseenter(function () {
        $("#list2").show();
    });
    $(".nav2").mouseleave(function () {
        $("#list2").hide();
    });
    $("#list2").mouseenter(function () {
        $("#list2").show();
    });
    $("#list2").mouseleave(function () {
        $("#list2").hide();
    });
    $(".nav1").mouseenter(function () {
        $("#list1").show();
    });
    $(".nav1").mouseleave(function () {
        $("#list1").hide();
    });
    $("#list1").mouseenter(function () {
        $("#list1").show();
    });
    $("#list1").mouseleave(function () {
        $("#list1").hide();
    });


    $("#span2").mouseenter(function () {
        $("#img1").fadeIn(600);
    });
    $("#span2").mouseleave(function () {
        $("#img1").fadeOut(100);
    });
    $("#span3").mouseenter(function () {
        $("#img2").fadeIn(600);
    });
    $("#span3").mouseleave(function () {
        $("#img2").fadeOut(100);
    });
    $("#span4").mouseenter(function () {
        $("#img3").fadeIn(600);
    });
    $("#span4").mouseleave(function () {
        $("#img3").fadeOut(100);
    });
    $("#span5").mouseenter(function () {
        $("#img4").fadeIn(600);
    });
    $("#span5").mouseleave(function () {
        $("#img4").fadeOut(100);
    });
    $("#span6").mouseenter(function () {
        $("#img5").fadeIn(600);
    });
    $("#span6").mouseleave(function () {
        $("#img5").fadeOut(100);
    });
    $("#span7").mouseenter(function () {
        $("#img6").fadeIn(600);
    });
    $("#span7").mouseleave(function () {
        $("#img6").fadeOut(100);
    });
});
