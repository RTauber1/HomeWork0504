using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeWork05022022.Data
{
    public class PeopleRepository
    {
        private string _connectionString;

        public PeopleRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void AddPerson(Person person)
        {
            using PeopleDataContext context = new PeopleDataContext(_connectionString);
            context.People.Add(person);
            context.SaveChanges();
        }
        public List<Person> GetPeople()
        {
            using PeopleDataContext context = new PeopleDataContext(_connectionString);
            return context.People.ToList();
        }
        public void Delete(int personId)
        {
            using PeopleDataContext context = new PeopleDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"DELETE FROM People WHERE Id = {personId}");
            context.SaveChanges();
        }
        public void Update(Person person)
        {
            using PeopleDataContext context = new PeopleDataContext(_connectionString);
            context.People.Update(person);
            context.SaveChanges();
        }

    }
}
