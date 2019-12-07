using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;

using MathSoftModelLib;

/// <summary>
/// WebService 的摘要说明
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// 若要允许使用 ASP.NET AJAX 从脚本中调用此 Web 服务，请取消注释以下行。 
// [System.Web.Script.Services.ScriptService]
public class WebService : System.Web.Services.WebService {

    public WebService () {

        //如果使用设计的组件，请取消注释以下行 
        //InitializeComponent(); 
    }

    [WebMethod]
    public string HelloWorld() {
        return Newtonsoft.Json.JsonConvert.SerializeObject(new { name="马良"});
    }
    [WebMethod]
    public string HelloWorld1()
    {
        return Newtonsoft.Json.JsonConvert.SerializeObject(new { name = "马良" });
    }
    [WebMethod]
    public ModelA6 HelloWorld2(string a)
    {
        return new ModelA6 { A1 = "1", A2 = "1", A3 = "1", A4 = "A4", A5 = "A4", A6 = "a1" };
    }

}
