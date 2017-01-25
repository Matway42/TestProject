using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebMVC_client.Models;

namespace WebMVC_client.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult Index()
        {
            UserClient client = new UserClient();
            var result = client.FindAll();
            return View(result);
        }
    }
}