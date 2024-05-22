const baseURL = "https://fckolob.github.io/wdd230/";
const linksURL = "https://fckolob.github.io/wdd230/data/links.json";

const learningActivitiesUl = document.querySelector("#learning-activities-ul");
const learningActivities = document.querySelector("#learning-activities-ul");

function darkMode(){
    const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");
const navigation = document.querySelector(".navigation");
const body = document.querySelector("body");
const card = document.querySelector(".card");
const cardInformation = document.querySelector("#information");
const cardTitle = document.querySelectorAll(".card-title");
const assigmentLi = document.querySelectorAll(".assigment-li");
//const hoverLight = document.querySelectorAll(".hover-light");
const menu = document.querySelector("#menu");
const h1 = document.querySelector("h1");
const recordMessage = document.querySelector("#record-message");

assigmentLi.forEach(aLi=> {
			
	
	aLi.classList.add('hover-light');
});

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		body.style.background = "#000";
        header.style.background = "#000";
        header.style.color = "#fff";
		
		navigation.style.background = "rgb(105, 0, 144)";
		footer.style.background = "rgb(105, 0, 144)";
		modeButton.textContent = "🔆";
		card.style.background = "rgb(0, 0, 128)";
		cardInformation.style.background = "rgb(0, 0, 128)";
		menu.style.background = "#000";
		menu.style.color = "#fff";
		
		cardTitle.forEach(ct => {
			ct.style.background = "rgb(106, 90, 205)";
			ct.style.color = "#fff";
			
		});
		assigmentLi.forEach(aLi=> {
			
			aLi.classList.add("hover-dark");
			aLi.classList.remove('hover-light');
		});
		h1.style.color = "#fff";
		recordMessage.style.color= "rgb(255, 255, 255)";
	} else {
		
		body.style.background = "rgb(233, 196, 106)";
		header.style.background = "rgb(231, 111, 81)";
		header.style.color = "";
		main.style.color = "";
		main.style.background ="rgb(233, 196, 106)";
		modeButton.textContent = "🕶️";
		navigation.style.background = "";
		footer.style.background = "";
		card.style.background = "";
		cardInformation.style.background = "";
		menu.style.background = "";
		menu.style.color = "";
		
		cardTitle.forEach(ct => {
			ct.style.background = "";
			ct.style.color = "";
			
		});
		assigmentLi.forEach(aLi=> {
			
			aLi.classList.remove("hover-dark");
			aLi.classList.add('hover-light');
		});
		h1.style.color ="rgb(0, 0, 0)";
		recordMessage.style.color= "rgb(0, 0, 0)"
	}
});
}

const displayLinks = (data) =>{ data.forEach(week => {
    let li = document.createElement("li");
    li.classList.add("assigment-li");
    li.textContent = `${week.week}`;
    week.links.forEach(link => {
       let a = document.createElement("a");
       a.classList.add("assigment");
       //a.classList.add("hover-light");
       a.setAttribute("href", `${link.url}`);
       a.textContent = `${link.title}`;
       li.appendChild(a);
    });

    learningActivitiesUl.appendChild(li);
    
});
    
    
}


async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
    darkMode();
}

getLinks();