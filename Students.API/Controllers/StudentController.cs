using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Collections.Generic;
using System.Data.Entity;

namespace Students.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly EntityDatabaseContext _dbContext;

        public StudentController(EntityDatabaseContext dbContext)   //Connect to DB
        {
            _dbContext = dbContext;
            _dbContext.Database.EnsureCreated();                     
        }

        [HttpGet]
        public async Task<IActionResult> Get(string? sortByOptions, bool sortAscending = true, string? sortTable = null)
        {
            return Ok();
        }
    }
}
