using Microsoft.AspNetCore.Mvc;
using Npgsql;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Students.API.Models;

namespace Students.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly DataContext _dbContext;
        private readonly IConfiguration _configuration;

        public StudentController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public StudentController(DataContext dbContext)   //Connect to DB
        {
            _dbContext = dbContext;
            _dbContext.Database.EnsureCreated();                     
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var students = await _dbContext.Students.ToListAsync();
            return Ok(students);
        }
    }
}
