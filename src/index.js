function updateTime() {
  //Sydney
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Los Angeles
  let losAngelesElement = document.querySelector("#los_angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Buenos Aires
  let buenosElement = document.querySelector("#buenos_aires");
  if (buenosElement) {
    let buenosDateElement = buenosElement.querySelector(".date");
    let buenosTimeElement = buenosElement.querySelector(".time");
    let buenosTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosDateElement.innerHTML = buenosTime.format("MMMM Do YYYY");
    buenosTimeElement.innerHTML = buenosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Timbuktu
  let timbuktuElement = document.querySelector("#timbuktu");
  if (timbuktuElement) {
    let timbuktuDateElement = timbuktuElement.querySelector(".date");
    let timbuktuTimeElement = timbuktuElement.querySelector(".time");
    let timbuktuTime = moment().tz("Africa/Timbuktu");

    timbuktuDateElement.innerHTML = timbuktuTime.format("MMMM Do YYYY");
    timbuktuTimeElement.innerHTML = timbuktuTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Costa Rica
  let costaElement = document.querySelector("#costa_rica");
  if (costaElement) {
    let costaDateElement = costaElement.querySelector(".date");
    let costaTimeElement = costaElement.querySelector(".time");
    let costaTime = moment().tz("America/Costa_Rica");

    costaDateElement.innerHTML = costaTime.format("MMMM Do YYYY");
    costaTimeElement.innerHTML = costaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
