using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HomeWork05022022.Data;

namespace HomeWork05022022.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private string _connectionString;
        public PeopleController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("addPerson")]
        
        public void AddPerson(Person person)
        {
            PeopleRepository peopleRepository = new PeopleRepository(_connectionString);
            peopleRepository.AddPerson(person);
        }
        [Route("getPeople")]
        public List<Person> GetPeople()
        {
            PeopleRepository peopleRepository = new PeopleRepository(_connectionString);
            return peopleRepository.GetPeople();
        }
        [Route("deletePerson")]
        public void DeletePerson(Person person)
        {
            PeopleRepository peopleRepository = new PeopleRepository(_connectionString);
            peopleRepository.Delete(person.Id);
        }
        [Route("updatePerson")]
        public void UpdatePerson(Person person)
        {
            PeopleRepository peopleRepository = new PeopleRepository(_connectionString);
            peopleRepository.Update(person);
        }
        [Route("deletePeople")]
        public void DeletePeople(List<Person> people)
        {
            PeopleRepository peopleRepository = new PeopleRepository(_connectionString);
            people.ForEach((p)=>peopleRepository.Delete(p.Id));
        }
    }
}
