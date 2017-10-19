<%@ WebHandler Language="C#" Class="connector" %>

using System;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
//using tencent_course;

public class connector : IHttpHandler {

    public void ProcessRequest (HttpContext context) {
        context.Response.ContentType = "text/plain";
        context.Response.Write("Hello World");
        string username = context.Request.Form["name"];
        string pwd = context.Request.Form["password"];
        Console.WriteLine(username);

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}