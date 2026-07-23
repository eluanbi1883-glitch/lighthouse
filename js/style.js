//const temp=document.getElementById("temp");  
//temp.innerHTML = 32+"°C";   
//const temperature=document.getElementById("temperature");    //最低溫度~最高溫度
const temperatureMin=document.getElementById("temperatureMin");  //最低溫度
const temperatureMax=document.getElementById("temperatureMax");  //最高溫度
const rain=document.getElementById("rain");      
//rain.innerHTML = 100+"%";   
              const sunrise=document.getElementById("sunrise");		    		//日出
//sunrise.innerHTML = "2026-07-18T05:18:00+08:00";  
              const sunset=document.getElementById("sunset");             //日落 
//sunset.innerHTML = "2026-07-18T18:45:00+08:00";                    	    				
//const city=document.getElementById("city");			      			//鄉鎮
//const town=document.getElementById("town");
//const icon=document.getElementById("icon");				      		//圖示
//const weatherText=document.getElementById("weatherText");		//天氣現象	

const windDir = document.getElementById("windDir");              //風向角度

const windSpeed = document.getElementById("windSpeed");          //風級

const visibility =document.getElementById("visibility");        //能見度

const minTemp = document.getElementById("temperature_2m_min");   //最低溫度
const maxTemp = document.getElementById("temperature_2m_max");   //最高溫度

const waveHeight = document.getElementById("waveHeight");
const waveDir = document.getElementById("waveDir");
const wavePeriod = document.getElementById("wavePeriod");

/*
// GPS定位
navigator.geolocation.getCurrentPosition(load,error);
function error(){
alert("定位失敗");
}
*/
/*
async function load(position){
   const    lat=21.99;
   const	lon=120.74;
loadWeather(lat,lon);
loadCity(lat,lon);
*/
  //每分鐘更新時間，每 10 分鐘重新取得天氣資料。
/*
setInterval(()=>{
loadWeather(lat,lon);
loadMarine();                             //刷新海浪
},6000000);                               //
}
*/
/*
async function loadCity(lat,lon){
   
const res=await fetch(
`https://api.open-meteo.com/v1/forecast?latitude=21.90&longitude=120.85`
);

const data3=await res.json();

city.innerHTML=
data3.address.city||
data3.address.town||
data3.address.county||
data3.address.state||
"未知位置";
}
loadCity(21.90, 120.85);
*/
//呼叫氣象資料
async function loadWeather(lat,lon){
         
const url=`https://api.open-meteo.com/v1/forecast?latitude=21.90&longitude=120.85&current=temperature_2m,weather_code,wind_speed_10m,wind_direction_10m,visibility,relative_humidity_2m&hourly=precipitation_probability&daily=sunrise,sunset,temperature_2m_min,temperature_2m_max,uv_index_max&timezone=Asia/Taipei`;


const res=await fetch(url);
const data=await res.json();



//console.log(data);
//  console.log(data);

async function getWeather(){

    let res = await fetch(url);

    let data = await res.json();


    console.log(data);   // ← 這裡查看 API 回傳


    let c = data.current;
    let d = data.daily;

}








  
//溫度
//temp.innerHTML=data.current.temperature_2m+"°C";

const h=new Date().getHours();
//降雨機率
//rain.innerHTML=data.hourly.precipitation_probability[h]+"%";
rain.innerHTML = `${data.hourly.precipitation_probability[h]}%`;

//日出
//sunrise.innerHTML=data.daily.sunrise[0].substring(11,16);
//日落
//sunset.innerHTML=data.daily.sunset[0].substring(11,16);


//風向及風級
const speed = data.current.wind_speed_10m;
const degree = data.current.wind_direction_10m;
//const speed = 25;          //模擬 km/h
//const degree = 315;           //模擬0~360風級（蒲福風級）
windSpeed.innerHTML = speed + " km/h　" + windLevel(speed);
windDir.innerHTML = degreeToText(degree);

//const windSpeed = document.getElementById("windSpeed");
  
//能見度
let vis = data.current.visibility;//單位距離公尺
//let vis = 3000;                 //模擬 
visibility.innerHTML = formatVisibility(vis);

    // 目前溫度
const temp = data.current.temperature_2m;
//let temp = 28.6;
   document.getElementById("temp").innerHTML = `${temp}°C`;
    // 相對溼度 %
const humidity = data.current.relative_humidity_2m;
  document.getElementById("humidity").innerHTML = `${humidity}%`;
//let humidity = 80;
    // 今日最低 / 最高溫
   const minTemp = data.daily.temperature_2m_min[0];
//let minTemp = 26;
   const maxTemp = data.daily.temperature_2m_max[0];
//let maxTemp = 29;
    // 🌡低${minTemp}°C~高${maxTemp}°C<br>
//document.getElementById("temperature").innerHTML = `💧溼度 ${humidity}%<br>🌡目前 ${temp}°C`;

//document.getElementById("temperature").innerHTML = `💧溼度 80%<br>🌡目前 $28.6°C`;   
document.getElementById("temperatureMin").innerHTML = `🌡最低${minTemp}°C`;
document.getElementById("temperatureMax").innerHTML = `🌡最高${maxTemp}°C`;

  

//天氣現象
showWeather(data.current.weather_code);
//模擬天氣現象
//showWeather(0);


//UV 指數
  const uv = data.daily.uv_index_max[0];

//  const uv = 3;                 //模擬UV
document.getElementById("uv").innerHTML = uv;
document.getElementById("uvText").innerHTML = uvLevel(uv);

//UV 指數判等級
  function uvLevel(uv){

if(uv<=2)
return "低";

if(uv<=5)
return "中等";

if(uv<=7)
return "高";

if(uv<=10)
return "很高";

return "極高";

}

if(data.daily.uv_index_max){

    document.getElementById("uv").innerHTML =data.daily.uv_index_max[0];

}
else{

    document.getElementById("uv").innerHTML ="無資料";

}






  
//風向(角度轉文字
function degreeToText(deg){

    if(deg>=348.75 || deg<11.25)
        return "北風 ↑";

    else if(deg<33.75)
        return "北北東 ↗";

    else if(deg<56.25)
        return "東北風 ↗";

    else if(deg<78.75)
        return "東北東 ↗";

    else if(deg<101.25)
        return "東風 →";

    else if(deg<123.75)
        return "東南東 ↘";

    else if(deg<146.25)
        return "東南風 ↘";

    else if(deg<168.75)
        return "南南東 ↓";

    else if(deg<191.25)
        return "南風 ↓";

    else if(deg<213.75)
        return "南南西 ↙";

    else if(deg<236.25)
        return "西南風 ↙";

    else if(deg<258.75)
        return "西西南 ↙";

    else if(deg<281.25)
        return "西風 ←";

    else if(deg<303.75)
        return "西北西 ↖";

    else if(deg<326.25)
        return "西北風 ↖";

    else
        return "北北西 ↖";

}

//風級 (蒲福風級)
function windLevel(speed){

    // Open-Meteo 回傳 km/h

    if(speed<1) return "0級";
    else if(speed<6) return "1級";
    else if(speed<12) return "2級";
    else if(speed<20) return "3級";
    else if(speed<29) return "4級";
    else if(speed<39) return "5級";
    else if(speed<50) return "6級";
    else if(speed<62) return "7級";
    else if(speed<75) return "8級";
    else if(speed<89) return "9級";
    else if(speed<103) return "10級";
    else if(speed<118) return "11級";

    return "12級以上";

}

//能見度
function formatVisibility(meter){

    let km = meter / 1000;


    if(km >= 10){

        return "良好5~6級<br>" 
        + km.toFixed(1)
        +" km";

    }

    else if(km >= 5){

        return "普通3~4級<br>"
        + km.toFixed(1)
        +" km";

    }

    else if(km >= 1){

        return "較差2級<br>"
        + km.toFixed(1)
        +" km";

    }

    else{

        return "低能見度1級<br>"
        + km.toFixed(1)
        +" km";

    }

}

// 判斷是否為白天
function isDay(sunrise, sunset) {
    const now = new Date();
    const sunriseTime = new Date(sunrise).getTime();
    const sunsetTime = new Date(sunset).getTime();

    return now >= sunsetTime && now < sunriseTime;
}



//完整 Weather Code 對照
function showWeather(code, sunrise, sunset) {

//    const day = isDay(sunrise, sunset);
    const day = isDay(sunset, sunrise);
    const weatherMap = {
        0:  { icon: day ? "☀️" : "🌙☀️",   text: "晴天" },
        1:  { icon: day ? "🌤️" : "🌙☁️", text: "大致晴朗" },
        2:  { icon: day ? "⛅" : "☁️🌙", text: "局部多雲" },
        3:  { icon: "☁️", text: "陰天" },

        45: { icon: "🌫️", text: "霧" },
        48: { icon: "🌫️", text: "濃霧" },

        51: { icon: day ? "🌦️" : "⛅🌧️", text: "短暫雨" },
        53: { icon: day ? "🌦️" : "☁🌧️", text: "多雲短暫雨" },
        55: { icon: day ? "🌧️" : "🌧️", text: "強毛毛雨" },

        61: { icon: "🌦️", text: "小雨" },
        63: { icon: "🌧️", text: "中雨" },
        65: { icon: "🌧️", text: "大雨" },

        66: { icon: "🌨️", text: "小凍雨" },
        67: { icon: "🌨️", text: "大凍雨" },

        71: { icon: "🌨️", text: "小雪" },
        73: { icon: "❄️", text: "中雪" },
        75: { icon: "❄️", text: "大雪" },
        77: { icon: "🌨️", text: "冰晶" },

        80: { icon: "🌦️", text: "小陣雨" },
        81: { icon: "🌧️", text: "陣雨" },
        82: { icon: "🌧️", text: "豪雨" },

        95: { icon: "⛈️", text: "雷雨" },
        96: { icon: "⛈️🧊", text: "雷雨夾冰雹" },
        99: { icon: "⛈️🧊", text: "強雷雨夾冰雹" }
    };

    const weather = weatherMap[code] || {
        icon: "❓",
        text: "未知"
    };

 //   document.getElementById("icon").textContent = weather.icon;
  
    document.getElementById("weatherText").textContent = weather.text;
}


// 日期
const today=new Date();

//document.getElementById("date").innerHTML=`${today.getMonth()+1}/${today.getDate()}`;
document.getElementById("date").innerHTML=`${today.getMonth()+1}/${today.getDate()} ${today.getHours()}:${today.getMinutes()}`;
let time = `${today.getHours()}:${today.getMinutes()}`;
document.getElementById("time").innerHTML=time;
}

loadWeather(21.99, 120.74);


//=========================================================================

const marineUrl =
`https://marine-api.open-meteo.com/v1/marine
?latitude=25.16
&longitude=121.75
&hourly=wave_height,wave_period,wave_direction
&timezone=Asia/Taipei`
.replace(/\n/g,'');

//console.log(data);

fetch(marineUrl)
.then(r=>r.json())
.then(data1=>{

//const h=0;
const h=new Date().getHours();

//浪高  
document.getElementById("waveHeight").innerHTML=data1.hourly.wave_height[h]+" m";
//波形
document.getElementById("wavePeriod").innerHTML=data1.hourly.wave_period[h]+" 秒";

//document.getElementById("waveDir").innerHTML=data.hourly.wave_direction[i]+"°";

const dir = data1.hourly.wave_direction[h];

document.getElementById("waveDir").innerHTML =  degreeToDirection(dir) + ` (${dir}°)`;

  
//document.getElementById("waveDir").innerHTML = degreeToDirection(dir) + ` (${dir}°)`;
        
        // waveDir1.innerHTML = `${data1.hourly.wave_direction[h]}`;

});

//將角度轉成中文方向

function degreeToDirection(deg) {
    const dirs = [
        "北N",
        "東北NE",
        "東E",
        "東南SE",
        "南S",
        "西南SW",
        "西W",
        "西北NW",
        "北N"
    ];
    return dirs[Math.round(deg / 45)];
}

