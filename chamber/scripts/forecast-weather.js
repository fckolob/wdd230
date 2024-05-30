const day1 = document.querySelector("#day-1");

const apiKey = "65350eabdf746570e6fbdc9a9f42f818";

const urlF = `https://api.weatherapi.com/v1/forecast.json?key=4f96681ad030464fa04225840242805&q=Piriapolis&days=4&aqi=no&alerts=no`;


async function apiFetchForcast(){
    try {
        const response = await fetch(urlF);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayResultsForecast(data);
        }
        else{
           throw Error (await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

 function displayResultsForecast(data){
    let keeper = 0;
    data.forecast.forecastday.forEach(element => {
        keeper += 1;
        
        if (keeper > 1){

        let date = "";
        date = `${element.date}`;

        let temp = document.createElement("p");
        temp.setAttribute("class", "day-temperature");
        temp.innerHTML = `${date}: ${element.day.avgtemp_f}&deg;F  `;
        console.log(temp);
        
        day1.appendChild(temp);
        }
    });
    
    
 
 }

apiFetchForcast();




