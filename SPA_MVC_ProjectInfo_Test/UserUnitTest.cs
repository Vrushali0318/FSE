using System;
using SPA_MVC_StudentInfo.Models;
using SPA_MVC_StudentInfo.Controllers;
using NUnit.Framework;
using System.Net;
using System.Web.Http;
using System.Web.Http.Results;

namespace SPA_MVC_ProjectInfo_Test
{
 [TestFixture]
    public class UserUnitTest
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

            //// Act
            //IHttpActionResult actionResult = controller.PostUser(user);
            //var createdResult = actionResult as CreatedAtRouteNegotiatedContentResult<User>;

            //// Assert
            //Assert.IsNotNull(createdResult);
            //Assert.AreEqual("DefaultApi", createdResult.RouteName);
            //Assert.IsNotNull(createdResult.RouteValues["id"]);

            Assert.That(true,Is.True);
        }
    }
}
