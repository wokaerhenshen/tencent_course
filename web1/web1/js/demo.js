function ShowLoginBox() {
    layer.open({
        type: 1,
        title: "login",
        area: ['500px', '500px'],
        content: $("#loginbox")
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
        $.post("/Handler.ashx", { "name": username, "password": pwd }, function (data) { });
    }
}