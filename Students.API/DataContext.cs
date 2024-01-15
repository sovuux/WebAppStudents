using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Students.API.Models;

namespace Students.API
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base(options) { }

        public DbSet<Student> Students { get; set; }
    }
}