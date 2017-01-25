using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;

namespace WebMVC_client.Models
{
    public class UserClient
    {
        private string BASEURL = "http://localhost:51095/api/";

        public IEnumerable<User> FindAll()
        {
            HttpClient client = new HttpClient { BaseAddress = new Uri(BASEURL) };
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            HttpResponseMessage response = client.GetAsync("user").Result;
            if (response.IsSuccessStatusCode)
            {
                return response.Content.ReadAsAsync<IEnumerable<User>>().Result;
            }

            return null;
        }
    }
}