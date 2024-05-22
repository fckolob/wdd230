const baseURL = "https://fckolob.github.io/wdd230/";
const linksURL = "https://fckolob.github.io/wdd230/data/links.json";

const learningActivitiesUl = baseURL.document.querySelector("#learning-activities-ul");
const learningActivities = baseURL.document.querySelector("#learning-activities-ul");



const displayLinks = (data) =>{ data.forEach(week => {
    let li = document.createElement("li");
    li.classList.add("assigment-li");
    li.textContent = `${week.week}`;
    week.links.forEach(link => {
       let a = document.createElement("a");
       a.classList.add("assigment");
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
    console.log(data);
    displayLinks(data.weeks);
}

getLinks();