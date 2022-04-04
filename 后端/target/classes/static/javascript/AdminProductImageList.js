'use strict';
//产品 单个 图片缩略图的个数
var total_number1 = 5;
//T1为产品 单个 图片缩略图表单的tbody
var T1= document.getElementById("T1");
//为产品 单个 图片缩略图表单动态添加元素
for(var i1=1; i1<=total_number1; i1++){
    var Tr1 = document.createElement("tr");
    T1.appendChild(Tr1);
    var IdTd1 = document.createElement("td");
    //动态id属性放这里
    IdTd1.innerText = i1.toString();
    var ProductPhotoTd1 = document.createElement("td");
    var ProductPhoto1 = document.createElement('img');
    //动态图片属性放这里
    ProductPhoto1.setAttribute('src','../html/img');
    ProductPhotoTd1.appendChild(ProductPhoto1);
    var DeleteTd1 = document.createElement("td");
    DeleteTd1.onmousedown = Del;
    var DeleteA1 = document.createElement('a');
    var DeletePhoto1 = document.createElement('img');
    DeletePhoto1.setAttribute('src','../html/img/删除.png');
    DeleteTd1.appendChild(DeleteA1);
    DeleteA1.appendChild(DeletePhoto1);
    Tr1.appendChild(IdTd1);
    Tr1.appendChild(ProductPhotoTd1);
    Tr1.appendChild(DeleteTd1);
}



//产品 详情 图片缩略图的个数
var total_number2 = 6;
//T2为产品 详情 图片缩略图表单的tbody
var T2= document.getElementById("T2");
//为产品 详情 图片缩略图表单动态添加元素
for(var i2=1; i2<=total_number2; i2++){
    var Tr2 = document.createElement("tr");
    T2.appendChild(Tr2);
    var IdTd2 = document.createElement("td");
    IdTd2.innerText = i2.toString();
    var ProductPhotoTd2 = document.createElement("td");
    var ProductPhoto2 = document.createElement('img');
    //动态图片属性放这里
    ProductPhoto2.setAttribute('src','../html/img');
    ProductPhotoTd2.appendChild(ProductPhoto2);
    var DeleteTd2 = document.createElement("td");
    DeleteTd2.onmousedown = Del;
    var DeleteA2 = document.createElement('a');
    var DeletePhoto2 = document.createElement('img');
    DeletePhoto2.setAttribute('src','../html/img/删除.png');
    DeleteTd2.appendChild(DeleteA2);
    DeleteA2.appendChild(DeletePhoto2);
    Tr2.appendChild(IdTd2);
    Tr2.appendChild(ProductPhotoTd2);
    Tr2.appendChild(DeleteTd2);
}



//删除
function Del() {
    //conf用于接收用户是否决定删除，conf的值为false或true
    var conf = confirm("是否删除");
    if(conf){

    }
    else{

    }
}

//该标签为动态变化，数据需要传输
var things_name="夏普屏PANDA/熊猫 LE39D71S 39英寸智能WiFi液晶平板电视40 42 43";
document.getElementById("detail_name").innerText = things_name;