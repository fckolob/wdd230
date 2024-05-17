const timestampField = document.querySelector("#timestamp");
let d = new Date();
let date = d.toDateString();




let hours = d.getHours();
let mins = d.getMinutes();
let seconds = d.getSeconds();
timestampField.value = date + ", " +hours + ":" + mins + ":" + seconds;