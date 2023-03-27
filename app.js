const months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
];
const weekdays = [
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2024, 3, 30, 19, 45, 30);


const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();


let month = futureDate.getMonth();

month = months[month];


const date = futureDate.getDate();


const weekday = weekdays[futureDate.getDay()];

let clock24;
(hours >= 12) ? clock24 = 'PM' : clock24 = 'AM';

giveaway.textContent = `giveaway ends on 
${weekday}, ${date} ${month} ${year} ${hours}:${minutes}${clock24}`


// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
     const today = new Date().getTime();
     const deadlineTime = futureDate.getTime();
     const remainingTime = deadlineTime - today;

     const oneDay = 24 * 60 * 60 * 1000;
     const oneHour = 60 * 60 * 1000;
     const oneMinute = 60 * 1000;
     const oneSec = 1000;

     let dayRem = Math.floor(remainingTime / oneDay);
     let hoursRem = Math.floor((remainingTime % oneDay) / oneHour);
     let minRem = Math.floor((remainingTime % oneHour) / oneMinute);
     let secRem = Math.floor((remainingTime % oneMinute) / oneSec);

     const values = [dayRem, hoursRem, minRem, secRem];

     function format(item) {
          if (item < 10) {
               return (item = `0${item}`);
          }
          return item;
     }

     items.forEach(function (item, index) {
          item.textContent = format(values[index]);
     });
     if (remainingTime < 0) {
          clearInterval(countdown);
          deadline.innerHTML = `<h4 class='expired'>sorry, this giveaway has expired</h4>`;
     }
}


// countdown
let countdown = setInterval(getRemainingTime, 1000);
getRemainingTime();

