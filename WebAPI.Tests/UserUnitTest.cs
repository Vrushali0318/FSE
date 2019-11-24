namespace WebAPI.Tests
{
    using Microsoft.VisualStudio.TestTools.UnitTesting;
    using System.Net;
    using System.Web.Http;
    using System.Web.Http.Results;
    using SPA_MVC_StudentInfo.Controllers;
    using SPA_MVC_StudentInfo.Models;

    [TestClass]
    public class UserUnitTest
    {
        [TestMethod]
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

        [TestMethod]
        public void GetUserNotFound()
        {
            // Set up Prerequisites 
            var controller = new UserInfoAPIController();

            // Act
            IHttpActionResult actionResult = controller.GetUser(100);

            // Assert
            Assert.IsInstanceOfType(actionResult, typeof(NotFoundResult));
        }

        [TestMethod]
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

        [TestMethod]
        public void UpdateUserTest()
        {
            // Arrange
            var controller = new UserInfoAPIController();
            User user = new User
            {
                User_ID = 4,
                First_Name = "Test F1",
            };

            // Act
            IHttpActionResult actionResult = controller.PutUser(user.User_ID, user);
            var contentResult = actionResult as NegotiatedContentResult<Project>;

            Assert.IsNotNull(contentResult);
            Assert.AreEqual(HttpStatusCode.Accepted, contentResult.StatusCode);
            Assert.IsNotNull(contentResult.Content);
        }

    }
}
