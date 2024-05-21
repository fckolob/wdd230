const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#weather-description");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=-34.86&lon=-55.27&units=imperial&appid=fbe55b5d6b972ebb3241f821c164c127";

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else{
           throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

 function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F  `;
    let desc = data.weather[0].description;
    let icon = data.weather[0].icon;
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${icon}@2x.png`);
    weatherIcon.setAttribute("alt", "desc");
    description.textContent = `  -${desc}`;
 
 }

apiFetch();

