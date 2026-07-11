  const apiKey = "CWA-36BA3E97-0770-40C9-B7F8-AA934780E062";
const city = "屏東縣";

async function loadWeather(){

    const weatherURL =
`https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${apiKey}&locationName=${city}&elementName=PoP,MinT,MaxT`;

    const weather = await fetch(weatherURL);
    const weatherData = await weather.json();

    const location = weatherData.records.location[0];

    const pop =
        location.weatherElement.find(x=>x.elementName==="PoP")
        .time[0].parameter.parameterName;

    const min =
        location.weatherElement.find(x=>x.elementName==="MinT")
        .time[0].parameter.parameterName;

    const max =
        location.weatherElement.find(x=>x.elementName==="MaxT")
        .time[0].parameter.parameterName;

    document.getElementById("temp").innerHTML =
        `${min}°C~${max}°C`;

    document.getElementById("rain").innerHTML =
        `${pop}%`;
}

loadWeather();

async function loadSun(){
 // const apiKey = "CWA-36BA3E97-0770-40C9-B7F8-AA934780E062";
      // 取得今天日期的 YYYY-MM-DD 格式（日出日落查詢必備）
    const todayStr = new Date().toISOString().split('T')[0];

    const url =
`https://opendata.cwa.gov.tw/api/v1/rest/datastore/A-B0062-001?Authorization=${apiKey}&encodeURIComponent=恆春&Date=${todayStr}`;

    const res = await fetch(url);
    const data = await res.json();

    const sunrise =
        data.records.locations.location[0].time[0].SunRiseTime;

    const sunset =
        data.records.locations.location[0].time[0].SunSetTime;

    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
  
  
   // 取得今天日期的 YYYY-MM-DD 格式（日出日落查詢必備）
    document.getElementById("today").textContent =
        `${new Date().getMonth()+1}/${new Date().getDate()}`;
  
  
}

loadSun();