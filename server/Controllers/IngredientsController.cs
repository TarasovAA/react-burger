using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientsController : ControllerBase
    {
        [HttpGet()]
        public IEnumerable<Ingredient> Get()
        {
            using StreamReader r = new StreamReader("file.json");

            string json = r.ReadToEnd();
            List<Ingredient> items = JsonConvert.DeserializeObject<List<Ingredient>>(json);

            return items;
        }
    }
}
