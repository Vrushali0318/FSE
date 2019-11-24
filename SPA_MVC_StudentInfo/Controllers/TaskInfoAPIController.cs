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
    public class TaskInfoAPIController : ApiController
    {
        private FSE_ProjectEntities db = new FSE_ProjectEntities();

        // GET: api/TaskInfoAPI
        public IQueryable<Task_Detail> GetTaskInfoes()
        {
            return db.Task_Detail;
        }

        // GET: api/TaskInfoAPI/5
        [ResponseType(typeof(Task_Detail))]
        public IHttpActionResult GetTaskInfo(int id)
        {
            Task_Detail task_Detail = db.Task_Detail.Find(id);
            if (task_Detail == null)
            {
                return NotFound();
            }

            return Ok(task_Detail);
        }

        // PUT: api/TaskInfoAPI/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutTaskInfo(int id, Task_Detail task_Detail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != task_Detail.Task_ID)
            {
                return BadRequest();
            }

            db.Entry(task_Detail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Task_DetailExists(id))
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

        // POST: api/TaskInfoAPI
        [ResponseType(typeof(Task_Detail))]
        public IHttpActionResult PostTaskInfo(Task_Detail task_Detail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Task_Detail.Add(task_Detail);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Task_DetailExists(task_Detail.Task_ID))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = task_Detail.Task_ID }, task_Detail);
        }

        // DELETE: api/TaskInfoAPI/5
        [ResponseType(typeof(Task_Detail))]
        public IHttpActionResult DeleteTask_Detail(int id)
        {
            Task_Detail task_Detail = db.Task_Detail.Find(id);
            if (task_Detail == null)
            {
                return NotFound();
            }

            db.Task_Detail.Remove(task_Detail);
            db.SaveChanges();

            return Ok(task_Detail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Task_DetailExists(int id)
        {
            return db.Task_Detail.Count(e => e.Task_ID == id) > 0;
        }
    }
}