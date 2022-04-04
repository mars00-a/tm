'use strict';
//行数和列数
var TdNumber = 0;
var TrNumber = 0;
//用于添加表格元素,text1为内容标题，text2为内容主体
function addTable(text1,text2) {
    var Table = document.getElementById("Table");
    var Td1 = document.createElement("td");
    var Text = document.createElement("div");
    Text.innerText = text1;
    var Td2 = document.createElement("td");
    var Input = document.createElement("input");
    Input.setAttribute("value",text2);
    Input.setAttribute("type","text");
    Td1.appendChild(Text);
    Td2.appendChild(Input);
    if(TdNumber%2 === 0){
        TrNumber++;
        TdNumber++;
        var Tr = document.createElement("tr");
        Tr.setAttribute("id","tr"+TrNumber.toString());
        Tr.appendChild(Td1);
        Tr.appendChild(Td2);
        Table.appendChild(Tr);
    }
    else {
        TdNumber++;
        document.getElementById("tr"+TrNumber.toString()).appendChild(Td1);
        document.getElementById("tr"+TrNumber.toString()).appendChild(Td2);
        Table.appendChild(document.getElementById("tr"+TrNumber.toString()));
    }
}
//用于通过数据库数据动态添加属性
function abc() {
    var total_number = 7;
    var text1 = "操作系统";
    var text2 = "VIDAA";
    var i;
    for(i=1;i<=total_number;i++){
        console.log(123);
        addTable(text1,text2);
    }
}
abc();
var things_name = "平板电视";
var detail_name = "夏普屏PANDA/熊猫 LE39D71S 39英寸智能WiFi液晶平板电视40 42 43";
document.getElementById("things_name").innerText = things_name;
document.getElementById("detail_name").innerText = detail_name;
