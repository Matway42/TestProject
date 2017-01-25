using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    public class UserController : ApiController
    {
        public IEnumerable<User> GetUsers()
        {
            var users = new List<User>
            {
                new User
                {
                    Name = "Name",
                    LastName = "LastName"
                },
                new User
                {
                    Name = "Name1",
                    LastName = "LastName1"
                },
                new User
                {
                    Name = "Name2",
                    LastName = "LastName2"
                },
                new User
                {
                    Name = "Name3",
                    LastName = "LastName3"
                },
                new User
                {
                    Name = "Name4",
                    LastName = "LastName4"
                }
            };

            return users;
        }
    }
}
