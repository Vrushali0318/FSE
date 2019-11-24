using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SPA_MVC_StudentInfo.Controllers
{
    public class ProjectInfoController : Controller
    {
        // GET: ProjectInfo
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult AddNewProject()
        {
            return PartialView("AddProject");
        }
        public ActionResult ShowProjects()
        {
            return PartialView("ShowProjects");
        }

        public ActionResult EditProject()
        {
            return PartialView("EditProject");
        }

        public ActionResult DeleteProject()
        {
            return PartialView("DeleteProject");
        }
    }
}