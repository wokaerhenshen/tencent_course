<%@ WebHandler Language="C#" Class="Handler" %>

using System;
using System.Web;


public class Handler : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        string username = context.Request.Form["name"];
        string pwd = context.Request.Form["password"];
        string strSql = string.Format("SELECT userid FROM userinfo where username='{0}' and password='{1}'",username,pwd);


    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}