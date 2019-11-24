namespace WebAPI.Tests
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using System.Net.Http;
    using System.Web.Http;
    using SPA_MVC_StudentInfo.Controllers;
    using SPA_MVC_StudentInfo.Models;
    using System.Web.Http.Results;

    [TestClass]
    public class TaskUnitTest
    {
        [TestMethod]
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

        [TestMethod]
        public void TaskPost()
        {
            // Set up Prerequisites 
            var controller = new TaskInfoAPIController();
            controller.Request = new HttpRequestMessage();
            controller.Configuration = new HttpConfiguration();

            // Act on Test
            Task_Detail task = new Task_Detail
            {
                Parent_ID = 7,
                End_Date = new System.DateTime(),
                Start_Date = new System.DateTime(),
                Priorty = 33,
                Task_ID = 34
            };
            var response = controller.PostTaskInfo(task);

            // Assert the result

            Assert.AreEqual(34, task.Task_ID);
        }
    }
}
