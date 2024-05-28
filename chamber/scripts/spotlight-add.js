const spot1 = document.querySelector("#spotlight-add-1");
const spot2 = document.querySelector("#spotlight-add-2");
const spot3 = document.querySelector("#spotlight-add-3");
const banner = document.querySelector("#chamber-banner");
const date = new Date();
let day = date.getDay();

const linksUrlS = "https://fckolob.github.io/wdd230/data/members.json";

const displayBanner = (day) => {
    if(day === 1 || day === 2 || day === 3){
        //console.log(day);
        let close = document.createElement("button");
        close.textContent = "❌";
        close.setAttribute("id", "banner-close");
        close.addEventListener("click", () => {banner.classList.add("closed")});
        let meeting = document.createElement("h3");
        meeting.textContent = "Join us in the chamber meet and greet this wednesday at 7:00hs PM";
        meeting.setAttribute("id", "banner-text");
        let meetingAddress = document.createElement("p");
        meetingAddress.textContent = "Sanabria 1081";
        meetingAddress.setAttribute("id", "banner-address");
        banner.appendChild(close);
        banner.appendChild(meeting);
        banner.appendChild(meetingAddress);
    }
}

const displayLinksS = (data) =>{ 
    let counter = 1;
    data.forEach(member => {
   

    if(member.level === "silver" || member.level === "gold"){
    let img = document.createElement("img");
     img.setAttribute("src", `${member.icon}`);
     img.setAttribute("alt", `${member.name}`);
     img.setAttribute("class", "chamber-member-img");
     
     let name = document.createElement("h3");
     name.textContent = `${member.name}`;
     name.setAttribute("class", "chamber-name");
     let description = document.createElement("p");
     description.setAttribute("class", "chamber-members-p");
     
     description.textContent = `${member.description}`;
        if(counter === 1){
            spot1.appendChild(img);
            spot1.appendChild(name);
            spot1.appendChild(description);
        }
        else if(counter === 2){
            spot2.appendChild(img);
            spot2.appendChild(name);
            spot2.appendChild(description);
        }
        else if (counter === 3){
            spot3.appendChild(img);
            spot3.appendChild(name);
            spot3.appendChild(description);
        }

        counter += 1;
    }
     
     
 
     
 });
     
     
 }


async function getLinksS(linksURL){
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinksS(data.members);
    
}

getLinksS(linksUrlS);

displayBanner(day);

//console.log(day);