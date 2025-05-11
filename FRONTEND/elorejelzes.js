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
 function GenerateRandomWeather()
 {
    weatherTypes = ["napos","borus","esős"]
    return {
      "forecast": weatherTypes[Math.floor(Math.random()*3)],
      "c" : Math.floor(Math.random()*26)+5,
      "windspeed" : Math.floor(Math.random()*37)+5,
    }
    

 }
 function ShowWeathers()
 {
    const daysOfWeek = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat", "Vasárnap"];
    currentDayIndex = 0;
    
    


    tbody = document.getElementById("historyTable");
    tbody.innerHTML = "";
    Weathers.forEach(item => {
      tr=document.createElement("tr");
      tbody.appendChild(tr);
      td = document.createElement("td");
      tr.appendChild(td);
      td.innerHTML = daysOfWeek[currentDayIndex++ % 7];
      td2 = document.createElement("td");
      tr.appendChild(td2);
      td2.innerHTML = `${geticon(item)} ${item.forecast} `;
      td3 = document.createElement("td");
      tr.appendChild(td3);
      td3.innerHTML = `${item.c} °C`;
      td4 = document.createElement("td");
      tr.appendChild(td4);
      td4.innerHTML = `${item.windspeed} km/h`;
    });
    setBackgroundColor(Weathers[Weathers.length-1]);
    ShowLastWeather(Weathers[Weathers.length-1]);
 }
 function ShowLastWeather(weather)
 {
    document.getElementById("icon").innerHTML = geticon(weather)
    document.getElementById("forecast").innerHTML = `Időjárás: ${weather.forecast}`
    document.getElementById("temp").innerHTML = `Hőmérséklet: ${weather.c} °C`
    document.getElementById("windspeed").innerHTML = `Szélsebesség: ${weather.windspeed} km/h`
 }

  async function ForeCast(weatherTypes) 
  {
    

    
      const response = await fetch(url, 
      {
        method: "POST",
        headers: 
        {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(Weathers)
      });

      if (response.status === 400) 
      {

        alert("Hibás bemenet");
      } 
      else if (response.status === 200) 
      {
        const res = await response.json();
        Weathers.push(res);
        ShowWeathers();
      }
    
  }

  
  
