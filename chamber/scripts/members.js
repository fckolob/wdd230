const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const linksUrl = "https://fckolob.github.io/wdd230/data/members.json";

const displayLinks = (data) =>{ data.forEach(member => {
    let section = document.createElement("section");
    let img = document.createElement("img");
     img.setAttribute("src", `${member.icon}`);
     img.setAttribute("alt", `${member.name}`);
     img.setAttribute("class", "member-img");
     
     let name = document.createElement("h3");
     name.textContent = `${member.name}`;
     name.setAttribute("id", "name");
     let address = document.createElement("p");
     address.setAttribute("class", "members-p");
     address.setAttribute("id", "address");
     address.textContent = `Address: ${member.address}`;
     let phone = document.createElement("p");
     phone.setAttribute("class", "members-p");
     phone.setAttribute("id", "phone");
     phone.textContent = `Phone number: ${member.phone}`;
     let level = document.createElement("p");
     level.setAttribute("id", "level");
     level.setAttribute("class", "members-p");
     level.textContent = `Membership level: ${member.level}`;

     
     let description = document.createElement("p");
     description.setAttribute("class", "members-p");
     description.setAttribute("id", "description");
     description.textContent = `Description: ${member.description}`;
     section.appendChild(name);
     section.appendChild(img);
     section.appendChild(address);
     section.appendChild(phone);
     section.appendChild(level);
     section.appendChild(description);
     display.appendChild(section);
 
     
 });
     
     
 }

showList();


gridbutton.addEventListener("click", () => {
	
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

async function getLinks(linksURL){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.members);
    
}

getLinks(linksUrl);
