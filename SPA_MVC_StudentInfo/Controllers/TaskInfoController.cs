using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPA_MVC_StudentInfo.Controllers
{
    public class TaskInfoController : Controller
    {
        // GET: TaskInfo...
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewTask()
        {
            return PartialView("AddTask");
        }
        public ActionResult ShowTasks()
        {
            return PartialView("ShowTasks");
        }

        public ActionResult EditTask()
        {
            return PartialView("EditTask");
        }

        public ActionResult DeleteTask()
        {
            return PartialView("DeleteTask");
        }
    }
}
