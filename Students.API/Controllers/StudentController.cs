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

        public StudentController(DataContext dbContext)   //Связь с базой данных
        {
            _dbContext = dbContext;
            _dbContext.Database.EnsureCreated();                     
        }

        [HttpGet]
        public async Task<IActionResult> Get() //Вывод студентов
        {
            var students = await _dbContext.Students.ToListAsync();
            return Ok(students);
        }

        [HttpPost]
        public async Task<IActionResult> Post(Student student) //Добавление студента
        {
            _dbContext.Students.Add(student);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        public async Task<IActionResult> Put(int Id, Student student) //Изменение студента
        {
            var existingStudent = await _dbContext.Students.FindAsync(Id);
            if (existingStudent == null) 
            {
                return NotFound();
            }
            existingStudent.Name = student.Name;
            existingStudent.Surname = student.Surname;
            existingStudent.Patron = student.Patron;
            existingStudent.City = student.City;
            existingStudent.PostIndex = student.PostIndex;
            existingStudent.Street = student.Street;
            existingStudent.Email = student.Email;
            existingStudent.PhoneNumber = student.PhoneNumber;
            existingStudent.Faculty = student.Faculty;
            existingStudent.Specialty = student.Specialty;
            existingStudent.Course = student.Course;
            existingStudent.GroupName = student.GroupName;

            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete ("{Id}")]
        public async Task<IActionResult> Delete(int Id) //Удаление студента по Id
        {
            var student = await _dbContext.Students.FindAsync(Id);
            if (student == null)
            {
                return NotFound();
            }

            _dbContext.Students.Remove(student);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }
    }
}
