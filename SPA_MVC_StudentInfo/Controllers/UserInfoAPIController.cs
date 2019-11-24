using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using SPA_MVC_StudentInfo.Models;

namespace SPA_MVC_StudentInfo.Controllers
{
    public class UserInfoAPIController : ApiController
    {
        private FSE_ProjectEntities db = new FSE_ProjectEntities();

        // GET: api/UserInfoAPI
        public IQueryable<User> GetUserInfoes()
        {
            return db.Users;
        }

        // GET: api/UserInfoAPI/5
        [ResponseType(typeof(User))]
        public IHttpActionResult GetUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            return Ok(user);
        }

        // PUT: api/UserInfoAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUser(int id, User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != user.User_ID)
            {
                return BadRequest();
            }

            db.Entry(user).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/UserInfoAPI
        [ResponseType(typeof(User))]
        public IHttpActionResult PostUser(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Users.Add(user);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (UserExists(user.User_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = user.User_ID }, user);
        }

        // DELETE: api/UserInfoAPI/5
        [ResponseType(typeof(User))]
        public IHttpActionResult DeleteUser(int id)
        {
            User user = db.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }

            db.Users.Remove(user);
            db.SaveChanges();

            return Ok(user);
        }

        [Route("Users")]
        public List<User> GetUsers()
        {
            return this.db.Users.ToList();
        }

        /// <summary>
        /// Get Users based on Criteria
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        [Route("Users/{filter}/{value}")]
        public List<User> GetUsersByUserName(string filter, string value)
        {
            List<User> Res = new List<User>();
            switch (filter)
            {
                case "First_Name":
                    Res = (from c in db.Users
                           where c.First_Name.StartsWith(value)
                           select c).ToList();
                    break;
                case "Last_Name":
                    Res = (from c in db.Users
                           where c.Last_Name.StartsWith(value)
                           select c).ToList();
                    break;
                case "Employee_ID":
                    Res = (from c in db.Users
                           where c.Employee_ID.ToString().StartsWith(value)
                           select c).ToList();
                    break;

            }


            return Res;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserExists(int id)
        {
            return db.Users.Count(e => e.User_ID == id) > 0;
        }
    }
}