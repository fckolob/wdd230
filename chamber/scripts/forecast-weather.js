const day1 = document.querySelector("#day-1");
const day2 = document.querySelector("day-2");
const day3 = document.querySelector("day-3");
const apiKey = "65350eabdf746570e6fbdc9a9f42f818";
const lat = "-34.86";
const lon = "-55.27";
const urlF = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;


async function apiFetchForcast(){
    try {
        const response = await fetch(urlF);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            //displayResultsForcast(data);
        }
        else{
           throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

 function displayResultsForecast(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F  `;
    let desc = data.weather[0].description;
    let icon = data.weather[0].icon;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute("alt", `${desc}`);
    description.textContent = `  -${desc}`;
 
 }

apiFetchForcast();




