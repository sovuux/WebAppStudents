using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Students.API
{
    public class EntityDatabaseContext : DbContext
    {
        public EntityDatabaseContext(DbContextOptions<EntityDatabaseContext> options) :base(options) { }
        public DbSet<Student> Students { get; set; }
    }
}