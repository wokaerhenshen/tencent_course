using System; 
using System.Data; 
using System.Data.SqlClient; 
using System.Configuration; 
namespace Starter { 
    class Program { 
        // Get connection, initialize SqlDataAdapter, and get data. 
        static DataTable RunSQL(string sql) { 
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
        // Iterate through DataTable rows and columns to show data. 
        static void ShowOutput(DataTable dt) { 
            if (dt == null) { 
                Console.WriteLine("Empty dataset: Check your SQL."); 
                return; 
            } 
            foreach (DataRow row in dt.Rows) { 
                foreach (DataColumn col in dt.Columns) 
                    Console.Write(row[col].ToString() + ", "); 
                Console.WriteLine(); 
            } 
        } 
        public static void Main() { 
            DataTable dt = RunSQL("SELECT * FROM Product"); 
            ShowOutput(dt); 
            Console.ReadLine(); 
        } 
    } 
}  