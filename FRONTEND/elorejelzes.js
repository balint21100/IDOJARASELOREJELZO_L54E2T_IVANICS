  Weathers = [];
  const url = "http://localhost:5271/api/weather/ForeCast";

    
  function GenerateBase()
  {
    
    for (let index = 0; index < 3; index++) 
    {
      Weathers.push(GenerateRandomWeather());
    }
    ShowWeathers();
  }
 
