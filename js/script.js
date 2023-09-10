//days of the week
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];


document.getElementById('day').innerHTML = day


setInterval(() => {
    const millis = Date.now();

    //displaying the current date in miliseconds
    document.getElementById('time').innerHTML = millis
    

  }, 1);

  