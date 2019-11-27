namespace MVC_ProjectInfo_Test
{

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Results;
using SPA_MVC_StudentInfo.Models;
using SPA_MVC_StudentInfo.Controllers;


    [TestFixture]
    class TaskTest
    {

        [Test]
        public void TaskGetById()
        {
            // Set up Prerequisites 
            var controller = new TaskInfoAPIController();
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();

            // Act on Test
            var response = controller.GetTaskInfo(1);
            var contentResult = response as OkNegotiatedContentResult<Task_Detail>;

            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(1, contentResult.Content.Task_ID);
        }

        [Test]
        public void AddTaskTest()
        {
            // Set up Prerequisites 
            var controller = new TaskInfoAPIController();
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();

            //// Act on Test
            //Task_Detail task = new Task_Detail
            //{
            //    Parent_ID = 1,
            //    End_Date = DateTime.Now,
            //    Start_Date = DateTime.Now,
            //    Priorty = 4,
            //    Task_ID = 17
            //};
            //var response = controller.PostTaskInfo(task);

            //// Assert the result
            //Assert.AreEqual(17, task.Task_ID);

            int intIdt = 0;
            using (FSE_ProjectEntities db = new FSE_ProjectEntities())
            {
                // latest_taskid = db.Task_Detail.OrderByDescending(u => u.Task_ID).FirstOrDefault();
                intIdt = db.Task_Detail.Max(u => u.Task_ID) + 1;
            }

            // Act on Test
            Task_Detail task = new Task_Detail
            {
                Parent_ID = 2,
                End_Date = DateTime.Now,
                Start_Date = DateTime.Now,
                Priorty = 4,
                Task_ID = intIdt
            };
            var response = controller.PostTaskInfo(task);
            Assert.AreEqual(intIdt, task.Task_ID);

        }

    }
}
