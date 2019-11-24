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
    public class ProjectInfoAPIController : ApiController
    {
        private FSE_ProjectEntities db = new FSE_ProjectEntities();

        public IQueryable<Project> GetProjectInfoes()
        {
            return db.Projects;
        }

        // GET: api/Project/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult GetProjectInfo(int id)
        {
            Project projectInfo = db.Projects.Find(id);
            if (projectInfo == null)
            {
                return NotFound();
            }

            return Ok(projectInfo);
        }

        // PUT: api/projectInfo/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProjectInfo(int id, Project projectInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != projectInfo.Project_ID)
            {
                return BadRequest();
            }

            db.Entry(projectInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectInfoExists(id))
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

        // POST: api/projectInfoAPI
        [ResponseType(typeof(Project))]
        public IHttpActionResult PostProjectInfo(Project projectInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Projects.Add(projectInfo);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = projectInfo.Project_ID }, projectInfo);
        }

        // DELETE: api/ProjectInfoAPI/5
        [ResponseType(typeof(Project))]
        public IHttpActionResult DeleteProjectInfo(int id)
        {
            Project projectInfo = db.Projects.Find(id);
            if (projectInfo == null)
            {
                return NotFound();
            }

            db.Projects.Remove(projectInfo);
            db.SaveChanges();

            return Ok(projectInfo);
        }

        /// <summary>
        /// Get all projects
        /// </summary>
        /// <returns></returns>
        [Route("Projects")]
        public List<Project> GetProjects()
        {
            return this.db.Projects.ToList();
        }

        /// <summary>
        /// Get Users based on Criteria
        /// </summary>
        /// <param name="filter"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        [Route("Projects/{filter}/{value}")]
        public List<Project> GetProjectsByProjectName(string filter, string value)
        {
            List<Project> Res = new List<Project>();
            switch (filter)
            {
                case "Start_Date":
                    Res = (from c in db.Projects
                           where c.Start_Date.ToString().StartsWith(value)
                           select c).ToList();
                    break;
                case "End_Date":
                    Res = (from c in db.Projects
                           where c.End_Date.ToString().StartsWith(value)
                           select c).ToList();
                    break;
                case "Priority":
                    Res = (from c in db.Projects
                           where c.Priorty.ToString().StartsWith(value)
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

        private bool ProjectInfoExists(int id)
        {
            return db.Projects.Count(e => e.Project_ID == id) > 0;
        }
    }
}