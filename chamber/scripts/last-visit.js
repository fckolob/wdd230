
const date = new Date();
const year = date. getFullYear();
const month = String(date. getMonth() + 1). padStart(2, '0');
const day = String(date. getDate()). padStart(2, '0');
const formattedDate = `${year} ${month} ${day}`;
localStorage.setItem('lastVisit', formattedDate);

displayDaysSinceLastVisit();

function displayDaysSinceLastVisit() {
  const visitsDisplay = document.querySelector('#visits-message');

  const lastVisit = localStorage.getItem('lastVisit');
  let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
  if (numVisits !== 0) {
      visitsDisplay.textContent = numVisits;
  } else {
      visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
  }
  
  // 4️⃣ increment the number of visits by one.
  numVisits++;
  
  // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
  localStorage.setItem("numVisits-ls", numVisits);
  if (!lastVisit) {
    visitsDisplay.innerText = "Welcome! Let us know if you have any questions.";
    
    return;
  }

  const lastVisitDate = Date.parse(lastVisit);
  
  if (!lastVisitDate) {
    // Stored date is not a valid format
    return;
  }

  const currentDate = new Date();

  const difference = currentDate - lastVisitDate;
  const differenceInDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  if(differenceInDays !== 0 && numVisits > 1){
  visitsDisplay.innerText = `Your last visit was ${differenceInDays} days ago.`;
    }
  else if(differenceInDays === 0 && numVisits > 1){
    visitsDisplay.innerText =  "Back so soon! Awesome!";
  }

}