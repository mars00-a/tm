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



