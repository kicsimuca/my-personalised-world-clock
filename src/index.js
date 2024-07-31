const updatetime = () => {
  let d = new Date();
  los_angeles.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];
  sydney.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Australia/Sydney",
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
