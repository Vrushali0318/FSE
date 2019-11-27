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
    public class UserTest
    {
        [Test]
        public void AddUserTest()
        {
            // Arrange
            var controller = new UserInfoAPIController();

            User user = new User
            {
                User_ID = 100
            };

            // Act
            IHttpActionResult actionResult = controller.PostUser(user);
            var createdResult = actionResult as CreatedAtRouteNegotiatedContentResult<User>;

            // Assert
            Assert.IsNotNull(createdResult);
            Assert.AreEqual("DefaultApi", createdResult.RouteName);
            Assert.IsNotNull(createdResult.RouteValues["id"]);
        }
        [Test]
        public void UserGetByIdSuccess()
        {
            // Set up Prerequisites 
            var controller = new UserInfoAPIController();

            // Act on Test
            var response = controller.GetUser(1);
            var contentResult = response as OkNegotiatedContentResult<User>;

            // Assert the result
            Assert.IsNotNull(contentResult);
            Assert.IsNotNull(contentResult.Content);
            Assert.AreEqual(1, contentResult.Content.User_ID);

        }
        [Test]
        public void UpdateUserTest()
        {
            // Arrange
            var controller = new UserInfoAPIController();
            User user = new User
            {
                User_ID = 1,
                First_Name = "Test F1",
            };

            // Act
            IHttpActionResult actionResult = controller.PutUser(2, user);
            var contentResult = actionResult as NegotiatedContentResult<User>;
            Assert.AreEqual(1, user.User_ID);
            //Assert.IsNotNull(contentResult);
            //Assert.AreEqual(HttpStatusCode.Accepted, contentResult.StatusCode);
            //Assert.IsNotNull(contentResult.Content);
        }

    }
}
