
var data=[];
var searchInput=document.getElementById("searchInput"); 
var day0;
var date0;
var day1;
var day2;
var current_date;
var weatherData=document.getElementById("weatherData");


const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var date = new Date();
var monthName=month[date.getMonth()];




if(searchInput.value==""){
  getApiData("cairo");
}

async function getApiData(country){

    var https=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=6f2c4d2953684ec1bdd83754230608&q=${country}&days=3`);
    var response=await https.json();
    data=response
   
	 current_date =date.getDate()+monthName;


function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
        
}
var dateStr0 = data.forecast.forecastday[0].date;
 day0 = getDayName(dateStr0, "en-EN");



var dateStr1 = data.forecast.forecastday[1].date;
 day1 = getDayName(dateStr1, "en-EN");



var dateStr2 = data.forecast.forecastday[2].date;
 day2 = getDayName(dateStr2, "en-EN");


  
displayData();
    
}


function displayData(){

    var cols=``;
    

    cols+=
    `
    <!-- Column 1 -->
    <div class="col-md-6 col-lg-4">
      <div class="card">

        <div class="header">
          <div class="row">
            <div class="col-md-4">
              <p>${day0}</p>
            </div>
            <div class="col-md-5"></div>
            <div class="col-md-3">
              <p>${current_date}</p>
            </div>

          </div>
        </div>

        <div class="card-body">

          <div class="row">
            <div class="col-md-12">
              <p class="city">${data.location.name}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-8">
              <h1>${data.current.temp_c}°C</h1>
            </div>
            <div class="col-md-4">
              <img  src="https:${data.current.condition.icon}"  alt="" srcset="">
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <p class="forecast">${data.current.condition.text}</p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="row">
                <div class="col-md-3">
                <i class="fa-solid fa-umbrella"></i>
                </div>
                <div class="col-md-9">
                  <p style="font-size: 14px;">${data.forecast.forecastday[0].day.daily_will_it_rain}%</p>
                </div>
              </div>
              
             
            </div>

            <div class="col-md-4">
              <div class="row">
                <div class="col-md-3">
                <i class="fa-solid fa-wind"></i>
                </div>
                <div class="col-md-9">
                  <p style="font-size: 14px;">${data.forecast.forecastday[0].day.maxwind_kph}km/h</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="row">
                <div class="col-md-3">
                <i class="fa-regular fa-compass"></i>
                </div>
                <div class="col-md-9">
                  <p style="font-size: 14px;">Ease</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

              <!-- Column 2 -->
    <div class="col-md-6 col-lg-4">
      <div class="card">

        <div class="header1">
          <p class="text-center">${day1}</p>
        </div>

        <div class="card-body middle-card text-center ">

          <img src="https:${data.forecast.forecastday[1].day.condition.icon}" alt="">

          <p class="max-temp">${data.forecast.forecastday[1].day.maxtemp_c}°C</p>
          <p class="low-temp">${data.forecast.forecastday[1].day.mintemp_c}°C</p>
          <p class="forecast">${data.forecast.forecastday[1].day.condition.text}</p>


        </div>




      </div>
    </div>

             <!-- Column 3 -->
    <div class="col-md-6 col-lg-4">
      <div class="card">

        <div class="header">
          <p class="text-center">${day2}</p>
        </div>

        <div class="card-body last-card text-center ">

        <img src="https:${data.forecast.forecastday[2].day.condition.icon}" alt="">

          <p class="max-temp">${data.forecast.forecastday[2].day.maxtemp_c}°C</p>
          <p class="low-temp">${data.forecast.forecastday[2].day.mintemp_c}°C</p>
          <p class="forecast">${data.forecast.forecastday[2].day.condition.text}</p>

        </div>
      </div>
    </div>
    
    `
   

    weatherData.innerHTML=cols

   
}


function search(){
  var input=searchInput.value;
   getApiData(input)
  
}

function searchButton(){
  var input=searchInput.value;
  getApiData(input);
  clear();
  
}

function clear(){
  document.getElementById("searchInput").value="";
}


search();
searchButton();

