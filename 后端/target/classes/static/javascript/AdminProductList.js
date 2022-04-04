'use strict';
var total_number = 131;
var page_number;
var now_page=1;
if(total_number%5 === 0){
    page_number = parseInt(String(total_number/5));
}
else{
    page_number = parseInt(String(total_number/5))+1;
}
document.getElementById("page1").style.color='black';
//隐藏页码
if(page_number<5){
    for(var i1=0;i1<5-page_number;i1++){
        var a=document.getElementById("page"+String(5-i1)).style.visibility="hidden";
    }
}
//隐藏表格
if(page_number === 1){
    var i2;
    for(i2=5;i2>total_number;i2--){
        document.getElementById('tr'+i2.toString()).style.display="none";
    }
}
function Hidden() {
    var i;
    var  n;
    if(total_number%5 === 0){
        n = 5;
    }
else {
        n = total_number%5;
    }
    for(i=5;i>n;i--){
        document.getElementById('tr'+i.toString()).style.display="none";
    }
}
//更新数据
function change_color() {
    if(now_page.toString() === document.getElementById("page1").innerText){
        document.getElementById("page1").style.color='black';
        document.getElementById("page2").style.color='#0052ee';
        document.getElementById("page3").style.color='#0052ee';
        document.getElementById("page4").style.color='#0052ee';
        document.getElementById("page5").style.color='#0052ee';
    }
    if(now_page.toString() === document.getElementById("page2").innerText){
        document.getElementById("page2").style.color='black';
        document.getElementById("page1").style.color='#0052ee';
        document.getElementById("page3").style.color='#0052ee';
        document.getElementById("page4").style.color='#0052ee';
        document.getElementById("page5").style.color='#0052ee';
    }
    if(now_page.toString() === document.getElementById("page3").innerText){
        document.getElementById("page3").style.color='black';
        document.getElementById("page1").style.color='#0052ee';
        document.getElementById("page2").style.color='#0052ee';
        document.getElementById("page4").style.color='#0052ee';
        document.getElementById("page5").style.color='#0052ee';
    }
    if(now_page.toString() === document.getElementById("page4").innerText){
        document.getElementById("page4").style.color='black';
        document.getElementById("page1").style.color='#0052ee';
        document.getElementById("page2").style.color='#0052ee';
        document.getElementById("page3").style.color='#0052ee';
        document.getElementById("page5").style.color='#0052ee';
    }
    if(now_page.toString() === document.getElementById("page5").innerText){
        document.getElementById("page5").style.color='black';
        document.getElementById("page1").style.color='#0052ee';
        document.getElementById("page2").style.color='#0052ee';
        document.getElementById("page3").style.color='#0052ee';
        document.getElementById("page4").style.color='#0052ee';
    }
}

function update(x) {
    now_page = parseInt(x);
    if(now_page === page_number){
        Hidden();
    }
    else{
        var i;
        for(i=1;i<=5;i++){
            document.getElementById('tr'+i.toString()).style.display="table-row";
        }
    }
    document.getElementById("ID1").innerHTML = String(now_page);
    document.getElementById("photo1").src = '../html/img/1.jpg';
    document.getElementById("product_name1").innerHTML = String(now_page);
    document.getElementById("product_title1").innerHTML = String(now_page);
    document.getElementById("beginning_price1").innerHTML = String(now_page);
    document.getElementById("off_price1").innerHTML = String(now_page);
    document.getElementById("number1").innerHTML = String(now_page);
    document.getElementById("ID2").innerHTML = String(now_page);
    document.getElementById("photo2").src = '../html/img/1.jpg';
    document.getElementById("product_name2").innerHTML = String(now_page);
    document.getElementById("product_title2").innerHTML = String(now_page);
    document.getElementById("beginning_price2").innerHTML = String(now_page);
    document.getElementById("off_price2").innerHTML = String(now_page);
    document.getElementById("number2").innerHTML = String(now_page);
    document.getElementById("ID3").innerHTML = String(now_page);
    document.getElementById("photo3").src = '../html/img/1.jpg';
    document.getElementById("product_name3").innerHTML = String(now_page);
    document.getElementById("product_title3").innerHTML = String(now_page);
    document.getElementById("beginning_price3").innerHTML = String(now_page);
    document.getElementById("off_price3").innerHTML = String(now_page);
    document.getElementById("number3").innerHTML = String(now_page);
    document.getElementById("ID4").innerHTML = String(now_page);
    document.getElementById("photo4").src = '../html/img/1.jpg';
    document.getElementById("product_name4").innerHTML = String(now_page);
    document.getElementById("product_title4").innerHTML = String(now_page);
    document.getElementById("beginning_price4").innerHTML = String(now_page);
    document.getElementById("off_price4").innerHTML = String(now_page);
    document.getElementById("number4").innerHTML = String(now_page);
    document.getElementById("ID5").innerHTML = String(now_page);
    document.getElementById("photo5").src = '../html/img/1.jpg';
    document.getElementById("product_name5").innerHTML = String(now_page);
    document.getElementById("product_title5").innerHTML = String(now_page);
    document.getElementById("beginning_price5").innerHTML = String(now_page);
    document.getElementById("off_price5").innerHTML = String(now_page);
    document.getElementById("number5").innerHTML = String(now_page);
    if(page_number>=5){
        if(now_page <= page_number-4){
            document.getElementById("page1").innerHTML = String(now_page);
            document.getElementById("page2").innerHTML = String(now_page+1);
            document.getElementById("page3").innerHTML = String(now_page+2);
            document.getElementById("page4").innerHTML = String(now_page+3);
            document.getElementById("page5").innerHTML = String(now_page+4);
        }
        else{
            document.getElementById("page1").innerHTML = String(page_number-4);
            document.getElementById("page2").innerHTML = String(page_number-3);
            document.getElementById("page3").innerHTML = String(page_number-2);
            document.getElementById("page4").innerHTML = String(page_number-1);
            document.getElementById("page5").innerHTML = String(page_number);
        }
    }
    change_color();
    return false;
}
//前一页
function before() {
    if(now_page>1){
        update(String(now_page-1));
    }
    return false;
}
//下一页
function next() {
    if(now_page<page_number){
        update(String(now_page+1));
    }
    return false;
}
//最后一页
function last() {
    now_page=page_number;
    if(now_page === page_number){
        Hidden();
    }
    else{
        var i;
        for(i=1;i<=5;i++){
            document.getElementById('tr'+i.toString()).style.display="table-row";
        }
    }
    document.getElementById("ID1").innerHTML = String(now_page);
    document.getElementById("photo1").src = '../html/img/1.jpg';
    document.getElementById("product_name1").innerHTML = String(now_page);
    document.getElementById("product_title1").innerHTML = String(now_page);
    document.getElementById("beginning_price1").innerHTML = String(now_page);
    document.getElementById("off_price1").innerHTML = String(now_page);
    document.getElementById("number1").innerHTML = String(now_page);
    document.getElementById("ID2").innerHTML = String(now_page);
    document.getElementById("photo2").src = '../html/img/1.jpg';
    document.getElementById("product_name2").innerHTML = String(now_page);
    document.getElementById("product_title2").innerHTML = String(now_page);
    document.getElementById("beginning_price2").innerHTML = String(now_page);
    document.getElementById("off_price2").innerHTML = String(now_page);
    document.getElementById("number2").innerHTML = String(now_page);
    document.getElementById("ID3").innerHTML = String(now_page);
    document.getElementById("photo3").src = '../html/img/1.jpg';
    document.getElementById("product_name3").innerHTML = String(now_page);
    document.getElementById("product_title3").innerHTML = String(now_page);
    document.getElementById("beginning_price3").innerHTML = String(now_page);
    document.getElementById("off_price3").innerHTML = String(now_page);
    document.getElementById("number3").innerHTML = String(now_page);
    document.getElementById("ID4").innerHTML = String(now_page);
    document.getElementById("photo4").src = '../html/img/1.jpg';
    document.getElementById("product_name4").innerHTML = String(now_page);
    document.getElementById("product_title4").innerHTML = String(now_page);
    document.getElementById("beginning_price4").innerHTML = String(now_page);
    document.getElementById("off_price4").innerHTML = String(now_page);
    document.getElementById("number4").innerHTML = String(now_page);
    document.getElementById("ID5").innerHTML = String(now_page);
    document.getElementById("photo5").src = '../html/img/1.jpg';
    document.getElementById("product_name5").innerHTML = String(now_page);
    document.getElementById("product_title5").innerHTML = String(now_page);
    document.getElementById("beginning_price5").innerHTML = String(now_page);
    document.getElementById("off_price5").innerHTML = String(now_page);
    document.getElementById("number5").innerHTML = String(now_page);
    if(page_number>=5){
        document.getElementById("page5").innerHTML = String(page_number);
        document.getElementById("page4").innerHTML = String(page_number-1);
        document.getElementById("page3").innerHTML = String(page_number-2);
        document.getElementById("page2").innerHTML = String(page_number-3);
        document.getElementById("page1").innerHTML = String(page_number-4);
    }
    change_color();
    return false;
}
//删除
function Delete() {
    //conf用于接收用户是否决定删除，conf的值为false或true
    var conf = confirm("是否删除");
    if(conf){

    }
    else{

    }
}
//该标签的值为动态变化
var things_name="平板电视";
document.getElementById("things_name").innerText = things_name;
