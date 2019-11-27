using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPA_MVC_StudentInfo.Controllers
{
    public class UserInfoController : Controller
    {
        // GET: UserInfo.....
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewUser()
        {
            return PartialView("AddUser");
        }
        public ActionResult ShowUsers()
        {
            return PartialView("ShowUsers");
        }

        public ActionResult EditUser()
        {
            return PartialView("EditUser");
        }

        public ActionResult DeleteUser()
        {
            return PartialView("DeleteUser");
        }
    }
}
