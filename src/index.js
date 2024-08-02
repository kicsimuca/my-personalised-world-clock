const updatetime = () => {
  let d = new Date();
  sydney.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
    })
    .split(", ")[1];
  los_angeles.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];
  paris.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Europe/Paris",
    })
    .split(", ")[1];
  new_york.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/New_York",
    })
    .split(", ")[1];
  london.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Europe/London",
    })
    .split(", ")[1];
  tokyo.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Tokyo",
    })
    .split(", ")[1];
};
setInterval(updatetime, 1000);

let tokyoTime = moment().tz("Asia/Tokyo").format("MMM Do, YYYY ");
let tokyoElement = document.querySelector("#date6");
tokyoElement.innerHTML = tokyoTime;
let sydneyTime = moment().tz("Australia/Sydney").format("MMM Do, YYYY ");
let sydneyElement = document.querySelector("#date1");
sydneyElement.innerHTML = sydneyTime;
let los_angelesTime = moment()
  .tz("America/Los_Angeles")
  .format("MMM Do, YYYY ");
let los_angelesElement = document.querySelector("#date2");
los_angelesElement.innerHTML = los_angelesTime;
let parisTime = moment().tz("Europe/Paris").format("MMM Do, YYYY ");
let parisElement = document.querySelector("#date3");
parisElement.innerHTML = parisTime;
let new_yorkTime = moment().tz("America/New_York").format("MMM Do, YYYY ");
let new_yorkElement = document.querySelector("#date4");
new_yorkElement.innerHTML = new_yorkTime;
let londonTime = moment().tz("Europe/London").format("MMM Do, YYYY ");
let londonElement = document.querySelector("#date5");
londonElement.innerHTML = londonTime;

function showDate(event) {
  if (event.target.value.length > 0) {
    let currentTime = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY h:mm A");

    alert(`It is ${currentTime} in ${event.target.value}`);
  }
}

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", showDate);
