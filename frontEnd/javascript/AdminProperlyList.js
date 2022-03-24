'use strict';
var total_number = 100;
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
    for(var i=0;i<5-page_number;i++){
        var a=document.getElementById("page"+String(5-i)).style.visibility="hidden";
    }
}
//更新数据
function change_color() {
    if(now_page > page_number-4){
        if(now_page%5 === 0){
            document.getElementById("page5").style.color='black';
            document.getElementById("page1").style.color='#0052ee';
            document.getElementById("page2").style.color='#0052ee';
            document.getElementById("page3").style.color='#0052ee';
            document.getElementById("page4").style.color='#0052ee';
        }
        if(now_page%5 === 1){
            document.getElementById("page1").style.color='black';
            document.getElementById("page2").style.color='#0052ee';
            document.getElementById("page3").style.color='#0052ee';
            document.getElementById("page4").style.color='#0052ee';
            document.getElementById("page5").style.color='#0052ee';
        }
        if(now_page%5 === 2){
            document.getElementById("page2").style.color='black';
            document.getElementById("page1").style.color='#0052ee';
            document.getElementById("page3").style.color='#0052ee';
            document.getElementById("page4").style.color='#0052ee';
            document.getElementById("page5").style.color='#0052ee';
        }
        if(now_page%5 === 3){
            document.getElementById("page3").style.color='black';
            document.getElementById("page1").style.color='#0052ee';
            document.getElementById("page2").style.color='#0052ee';
            document.getElementById("page4").style.color='#0052ee';
            document.getElementById("page5").style.color='#0052ee';
        }
        if(now_page%5 === 4){
            document.getElementById("page4").style.color='black';
            document.getElementById("page1").style.color='#0052ee';
            document.getElementById("page2").style.color='#0052ee';
            document.getElementById("page3").style.color='#0052ee';
            document.getElementById("page5").style.color='#0052ee';
        }
    }
    else{
        document.getElementById("page1").style.color='black';
        document.getElementById("page2").style.color='#0052ee';
        document.getElementById("page3").style.color='#0052ee';
        document.getElementById("page4").style.color='#0052ee';
        document.getElementById("page5").style.color='#0052ee';
    }
    return true;
}
function update(x) {
    now_page = parseInt(x);
    document.getElementById("ID1").innerHTML = String(now_page);
    document.getElementById("attribute_name1").innerHTML = String(now_page);
    document.getElementById("ID2").innerHTML = String(now_page);
    document.getElementById("attribute_name2").innerHTML = String(now_page);
    document.getElementById("ID3").innerHTML = String(now_page);
    document.getElementById("attribute_name3").innerHTML = String(now_page);
    document.getElementById("ID4").innerHTML = String(now_page);
    document.getElementById("attribute_name4").innerHTML = String(now_page);
    document.getElementById("ID5").innerHTML = String(now_page);
    document.getElementById("attribute_name5").innerHTML = String(now_page);
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
    document.getElementById("ID1").innerHTML = String(now_page);
    document.getElementById("attribute_name1").innerHTML = String(now_page);
    document.getElementById("ID2").innerHTML = String(now_page);
    document.getElementById("attribute_name2").innerHTML = String(now_page);
    document.getElementById("ID3").innerHTML = String(now_page);
    document.getElementById("attribute_name3").innerHTML = String(now_page);
    document.getElementById("ID4").innerHTML = String(now_page);
    document.getElementById("attribute_name4").innerHTML = String(now_page);
    document.getElementById("ID5").innerHTML = String(now_page);
    document.getElementById("attribute_name5").innerHTML = String(now_page);
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
var things_name="电视";
document.getElementById("things_name").innerText = things_name;