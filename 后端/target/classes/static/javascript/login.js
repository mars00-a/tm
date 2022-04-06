

function check() {
    var username = document.forms["info"]["username"].value;
    var password = document.forms["info"]["password"].value;
    if(password.length>0){
        document.getElementById("ps").innerHTML = " ";
    }
    if(username.length>0){
        document.getElementById("us").innerHTML = " ";
    }
    if(username.length==0){
        document.getElementById("us").innerHTML = "用户名不能为空";
        return false;
    }

    if(password.length==0){
        document.getElementById("ps").innerHTML = "密码不能为空";
        return false;
    }
}
