<%@ WebHandler Language="C#" Class="connector" %>

using System;
using System.Web;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;

public class connector : IHttpHandler {

    static DataTable RunSQL(string sql)
    {
        DataTable table = new DataTable();
        try {
            // A reference to the dll is needed in References. See example 19-3.
            // Also, a reference is needed in the App.config file.
            string connection
            = ConfigurationManager.ConnectionStrings["MyConnection"]
            .ConnectionString;
            SqlDataAdapter adapter = null;
            adapter = new SqlDataAdapter(sql, connection);
            adapter.Fill(table);
        }
        catch(Exception e) {
            Console.WriteLine("The SQL is either invalid or your "
            + "connection failed. Please check your "
            + "App.config reference just in case: "
            + e.Message);
        }
        return table;
    }



    public void ProcessRequest (HttpContext context) {

        string username = context.Request.Form["name"];
        string pwd = context.Request.Form["password"];
        string strSql = string.Format("SELECT UserName FROM UserInfor where UserName='{0}' and Pwd='{1}'", username, pwd);
        DataTable td = RunSQL(strSql);
        if (td.Rows.Count == 0)
        {
            context.Response.Write("false");
            Console.WriteLine("this table is null");
        }

        else
        {
            Console.WriteLine("this table is not null");
            context.Response.Write("true");
           
        }
        //Console.WriteLine(username);
        //context.Response.ContentType = "application/json";
        //context.Response.Charset = "utf-8";

    }

    public bool IsReusable {
        get {
            return false;
        }
    }

}