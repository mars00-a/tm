$(document).ready(function() {
  $("#footer1").load("./footer1.html");
  $("#footer2").load("./footer2.html");
  $("#nav").load("./nav.html");
});

function check() {
    var name = document.forms["info"]["name"].value;
    var password = document.forms["info"]["password"].value;
    var repeatpassword = document.forms["info"]["repeatpassword"].value;
    var x = document.getElementById("alert")
    if (name == null || name == "") {
        x.style.border = "1px solid #ebccd1";
        x.style.backgroundColor = "#f2dede"
        document.getElementById("spanalert").innerHTML = "请输入用户名";
        return false;
    }
    else if (password == null || password == "") {
        x.style.border = "1px solid #ebccd1";
        x.style.backgroundColor = "#f2dede"
        document.getElementById("spanalert").innerHTML = "请输入密码";
        return false;
    }
    else if (repeatpassword == null || repeatpassword == "") {
        x.style.border = "1px solid #ebccd1";
        x.style.backgroundColor = "#f2dede"
        document.getElementById("spanalert").innerHTML = "请再次输入密码";
        return false;
    }
    else if (password.length < 8) {
        x.style.border = "1px solid #ebccd1";
        x.style.backgroundColor = "#f2dede"
        document.getElementById("spanalert").innerHTML = "密码长度小于八位";
        return false;
    }
    else if (password != repeatpassword) {
        x.style.border = "1px solid #ebccd1";
        x.style.backgroundColor = "#f2dede"
        document.getElementById("spanalert").innerHTML = "两次密码不一致";
        return false;
    }
}