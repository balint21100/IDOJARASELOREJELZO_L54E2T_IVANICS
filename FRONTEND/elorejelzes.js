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
 
  
  
