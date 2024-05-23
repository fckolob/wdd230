const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const linksUrl = "https://fckolob.github.io/wdd230/data/members.json";

const displayLinks = (data) =>{ data.forEach(member => {
    let section = document.createElement("section");
    let img = document.createElement("img");
     img.setAttribute("src", `${member.icon}`);
     img.setAttribute("alt", `${member.name}`);
     let name = document.createElement("h3");
     name.textContent = `${member.name}`;
     let details = document.createElement("p");
     details.textContent = `Address: ${member.address}\nPhone number: ${member.phone}\nMembership level: ${member.level}\nDescription: ${member.description}`;
     section.appendChild(name);
     section.appendChild(img);
     section.appendChild(details);
     display.appendChild(section);
 
     
 });
     
     
 }




gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.members);
    
}

getLinks();
