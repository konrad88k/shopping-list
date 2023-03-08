const n = new Date();
const y = n.getFullYear();
const m = n.getMonth() + 1;
const d = n.getDate();

const dayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayName = dayArr[n.getDay()];
const monthName = monthArr[m];

switch (d % 10) {
    case 1: nth = "st";
    case 2: nth = "nd";
    case 3: nth = "rd";
    default: nth = "th";
}

document.querySelector("#date1").innerHTML = dayName + ", " + d + "<sup>" + nth + "</sup>";
document.querySelector("#date2").innerHTML = monthName + " " + y;
