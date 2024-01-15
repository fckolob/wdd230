const currentYear = new Date().getFullYear();
let paragraph = document.querySelector("p");
paragraph.innerHTML= `&copy; ${currentYear} Fernando Caballero Uruguay`;
const lastModified = document.lastModified;
let lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.innerHTML= `Last Modification: ${lastModified}`;