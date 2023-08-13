const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById("cityName");
const showCityName = document.getElementById("city_name");
const temp = document.getElementById("temp");
const tempStatus = document.getElementById("temp_status");
const todayday = document.getElementById("today_day");
const todaydate = document.getElementById("today_date");
const showData = document.getElementById("show-data");


      // get date and day

      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const d = new Date();
      let month = months[d.getMonth()];

      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let day = days[d.getDay()];
       
      const date = d.getDate();
      todayday.innerText= day;
      todaydate.innerText= `${date} ${month}`
      console.log(`${date} ${month}`)
const getInfo = async (event)=>{
    event.preventDefault();
    const cityNameVal = cityName.value
    console.log("hii");
    console.log(cityNameVal)

    if(cityNameVal===""){

        showCityName.innerText ="Plz enter the city name ";
    }
    else{
        try{
            const api=`https://api.openweathermap.org/data/2.5/weather?q=${cityNameVal}&units=metric&appid=821656a3e7858ad1ea265f611550d7cb`
            const response = await fetch(api);
            const data =await response.json();
            const arrData = [data]; 
            showData.classList.remove("data_hide");
            console.log(arrData);
            temp.innerHTML=  `<p><span>${arrData[0].main.temp}</span> <sup>O</sup> C</p>`;
            showCityName.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
            const tempMode =arrData[0].weather[0].main;



           console.log(tempMode)
            // condition to check sunny or cloudy

            if(tempMode=="Clear"){
                tempStatus.innerHTML=
                "<i class = 'fas fa-sun' style='color:#eccc68;'></i>"
            }
            else if(tempMode=="Clouds"){
                tempStatus.innerHTML=
                "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            else if(tempMode=="Rain"){
                tempStatus.innerHTML=
                "<i class = 'fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }
            else{
                tempStatus.innerHTML=
                "<i class = 'fas fa-cloud' style='color:#f1f2f6;'></i>"
            }

      
        }
    catch{

        showData.classList.add("data_hide");

            showCityName.innerText ="Plz enter the city name  properly";
        }
        
    }
}
submitBtn.addEventListener("click",getInfo);