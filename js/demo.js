function ShowLoginBox() {
    layer.open({
        type: 1,
        title: "login",
        area: ['500px', '300px'],
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
        //using jquery to pass the form
        $.post("connector.ashx", { "name": username, "password": pwd }, function (data) {
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