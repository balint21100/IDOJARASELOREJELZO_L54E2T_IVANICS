using Microsoft.AspNetCore.Mvc;
using BACKEND.Models;

namespace BACKEND.Controllers
{
    [ApiController]
    [Route("api/weather")]
    public class WeatherController : ControllerBase
    {
        private static readonly string[] WeatherTypes = { "napos", "borus", "esős" };
        private static readonly Random rand = new Random();

        [HttpPost("ForeCast")]
        public ActionResult<Weather> WeatherForeCast([FromBody] IEnumerable<Weather> input)
        {
            if (input.ToArray().Length < 3) return BadRequest();
            Weather[] past = input.TakeLast(3).ToArray();

            Weather forecast = new Weather();

            bool same = past[0] == past[1] && past[1] == past[2];

            if (same)
            {
                double chance = rand.NextDouble();
                if (chance < 0.7)
                    forecast.Forecast = past[0].Forecast;
                else if (chance < 0.9)
                    forecast.Forecast = ImproveWeather(past[0].Forecast);
                else
                    forecast.Forecast = WorsenWeather(past[0].Forecast);
            }
            else
            {
                forecast.Forecast = WeatherTypes[rand.Next(WeatherTypes.Length)];
            }

            int temperature = rand.Next(5, 31);
            int windspeed = rand.Next(5, 41);

            forecast.Windspeed = windspeed;
            forecast.C = temperature;

            return Ok(forecast);
        }

        private string ImproveWeather(string current)
        {
            if (current == "esős") return "borult";
            if (current == "borult") return "napos";
            return "napos";
        }

        private string WorsenWeather(string current)
        {
            if (current == "napos") return "borult";
            if (current == "borult") return "esős";
            return "esős";
        }
    }
}

