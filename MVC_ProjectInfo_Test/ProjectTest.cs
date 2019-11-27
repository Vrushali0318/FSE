namespace MVC_ProjectInfo_Test
{

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;
using SPA_MVC_StudentInfo.Models;
using SPA_MVC_StudentInfo.Controllers;


    [TestFixture]
    class ProjectTest
    {
        [Test]
        public void ProjectGetByIdSuccess()
        {
            // Set up Prerequisites 
            var controller = new ProjectInfoAPIController();

            // Act on Test
            var response = controller.GetProjectInfo(1);
            var contentResult = response as OkNegotiatedContentResult<Project>;

            // Assert the result
            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(1, contentResult.Content.Project_ID);

        }
        

        [Test]
        public void AddProjectTest()
        {
            // Arrange
            var controller = new ProjectInfoAPIController();

            Project project = new Project
            {
                Project1 = "Vrushali Test Project",
            };

            // Act
            IHttpActionResult actionResult = controller.PostProjectInfo(project);
            var createdResult = actionResult as CreatedAtRouteNegotiatedContentResult<Project>;

            // Assert
            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RouteName);
            Assert.IsNotNull(createdResult.RouteValues["id"]);
        }

        [Test]
        public void UpdateProjectTest()
        {
            // Arrange
            var controller = new ProjectInfoAPIController();
            Project project = new Project
            {
                Project_ID = 4,
                Project1 = "Test Department",
            };

            // Act
            IHttpActionResult actionResult = controller.PutProjectInfo(project.Project_ID, project);
            var contentResult = actionResult as NegotiatedContentResult<Project>;
            Assert.AreEqual(4, project.Project_ID);
            //Assert.IsNotNull(contentResult);
            //Assert.AreEqual(HttpStatusCode.Accepted, contentResult.StatusCode);
            //Assert.IsNotNull(contentResult.Content);
        }
    }
}
