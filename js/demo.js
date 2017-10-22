function ShowLoginBox() {
    layer.open({
        type: 1,
        title: "login",
        area: ['500px', '300px'],
        content: $("#loginbox")
    });
}

function ShowRegBox() {
    layer.open({
    type: 1,
    title: "reg",
    area: ['500px', '300px'],
    content: $("#regbox")
});
}

function login() {
    var username = $.trim($("#userName").val());// get user name
    var pwd = $.trim($("#pwd").val()); //get pwd

    if (username == "" || pwd == "") {
        layer.alert("username or password can't be empty", {
            title: "remainder",
            icon: 5
        });
    }

    else {
        //using jquery to pass the form
        $.post("connector.ashx", { "name": username, "password": pwd, "cmd":"login" }, function (data) {
            if (data == "true") {
                layer.alert("success!", {
                    title: "提示",
                    icon: 6
                });

            }
            else {
                layer.alert("fail!", {
                    title: "提示",
                    icon: 5
                });
            }

        });

        //using jquery ajax and json to pass the parameters:
        /*
        $.ajax({
            type: "POST",
            url: "connector.ashx",
            data: { username: username, pwd: pwd },
            contentType: 'application/json; charset=utf-8',
            dataType: "json",
            success: function (Jdata) {
                alert("success");
            },
            error: function () {
                alert("error");
            }
        });
          */



    }
}

function reg() {
    var username = $.trim($("#regUserName").val());// get user name
    var pwd = $.trim($("#regpwd").val()); //get pwd

    if (username == "" || pwd == "") {
        layer.alert("username or password can't be empty", {
            title: "remainder",
            icon: 5
        });
    }

    else {
        $.post("connector.ashx", { "name": username, "password": pwd, "cmd": "reg" }, function (data) {
            if (data == "true") {
                layer.alert("注册成功!", {
                    title: "提示",
                    icon: 6
                });

            }
            else {
                layer.alert("用户名已被使用!", {
                    title: "提示",
                    icon: 5
                });
            }

        });
    }
}

function ShowImgBox() {
    $("#cimgbox").slideDown();
}

function HideImgBox() {
    $("#cimgbox").slideUp();
}

$(function () {
    if ($.cookie("bgimg") =="" || $.cookie("bgimg") == null){
    $("body").css("background-image", "url(img/food_1.jpg)");
    }
    else{
        $("body").css("background-image", "url('" + $.cookie("bgimg") + "')");
    }

    $(".imgstuff").click(function () {
        var src = ($(this).attr("src"));
        $("body").css("background-image", "url('" + src + "')");
        $.cookie("bgimg", src);
    });
});