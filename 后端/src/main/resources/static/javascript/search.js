// var button1 = document.getElementById("button");
var button1 = $("#button");
async function check() {
    var keyword = document.getElementById("keyword").value;
    let data;
    await axios.post('http://localhost:1380/tmall_springboot/foresearch?keyword=' + keyword, {
        "methods": "post"
    }).then(response => {
        data = JSON.parse(response.data.slice(0, -61));
        console.log(data);
    });

    var length = data.length;
    var father = $(".commoditylist")[0];
    var mouldA = $(".mouldA")[0].cloneNode();
    mouldA.style.display = "inline-block";
    var mouldImg = $(".mouldImg")[0].cloneNode();
    var mouldSpan = $(".mouldSpan")[0].cloneNode();
    var mouldRed = $(".mouldRed")[0].cloneNode();

    $(".mouldA").hide();


    father.appendChild(mouldA);
    mouldA.appendChild(mouldImg);
    mouldA.appendChild(mouldSpan);
    mouldA.appendChild(mouldRed);
    mouldImg.src = "img/" + data[0].firstProductImage.id + ".jpg";
    mouldSpan.innerHTML = data[0].name;
    mouldRed.innerHTML = data[0].promotePrice;

    for (i = 1; i < length; i++){
        mouldA = $(".mouldA")[0].cloneNode();
        mouldA.style.display = "inline-block";
        mouldImg = $(".mouldImg")[0].cloneNode();
        mouldSpan = $(".mouldSpan")[0].cloneNode();
        mouldRed = $(".mouldRed")[0].cloneNode();
        console.log("输出了第" + i + "次");

        father.appendChild(mouldA);
        mouldA.appendChild(mouldImg);
        mouldImg.src = "img/" + data[i].firstProductImage.id + ".jpg";
        mouldA.appendChild(mouldSpan);
        mouldSpan.innerHTML = data[i].name;
        mouldA.appendChild(mouldRed);
        mouldRed.innerHTML = data[i].promotePrice;
    }
}




$(document).ready(async function () {
    $("#footer1").load("./footer1.html");
    $("#footer2").load("./footer2.html");
    $("#rollPicture").load("rollPicture.html");
    $("#nav").load("./nav.html");
    // 将16个

    // var data;
    // await axios.get("http://localhost:1380/tmall_springboot/forehome").then(function (response) {
    //     data = JSON.parse(response.data.slice(0,-61));
    // })
    //
    //
    // // console.log("\n\n\n");
    // // console.log(dataa);
    //
    //
    // var title = ["马桶", "沙发", "电热水器", "平衡车", "扫地机器人", "原汁机", "冰箱", "空调", "女表", "男表", "男士手拿包", "男士西服", "时尚男鞋", "品牌女装", "太阳镜", "安全座椅"];
    // var father = $("#father")[0];
    // for (var i = 0; i < 16; i++) {
    //
    //     var tmp = data[16-i-1];
    //
    //     var mould = $(".commoditylist")[0].cloneNode();
    //     var mouldTitle = $(".mouldTitle")[0].cloneNode();
    //
    //     father.appendChild(mould);
    //     mouldTitle.innerHTML = title[i];
    //     mould.appendChild(mouldTitle);
    //
    //
    //
    //     for(j = 0; j < 5; j++){
    //         var mouldA = $(".mouldA")[0].cloneNode();
    //         var mouldComm = $(".mouldComm")[0].cloneNode();
    //         var mouldImg = $(".mouldImg")[0].cloneNode();
    //         var mouldSpan = $(".mouldSpan")[0].cloneNode();
    //         var mouldRed = $(".mouldRed")[0].cloneNode();
    //
    //
    //         mould.appendChild(mouldA);
    //         mouldA.appendChild(mouldComm);
    //         mouldComm.appendChild(mouldImg);
    //         mouldImg.src = "img/" + tmp.products[j].firstProductImage.id + ".jpg";
    //         mouldComm.appendChild(mouldSpan);
    //         mouldSpan.innerHTML = tmp.products[j].name;
    //         mouldComm.appendChild(mouldRed);
    //         mouldRed.innerHTML = tmp.products[j].promotePrice;
    //     }
    //
        // console.log("添加了第"+i+"个标签");
    // }








});
