const updatetime = () => {
  let d = new Date();
  usa.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "America/Los_Angeles",
    })
    .split(", ")[1];
  india.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    })
    .split(", ")[1];
  china.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Shanghai",
    })
    .split(", ")[1];
  rassia.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Yekaterinburg",
    })
    .split(", ")[1];
  london.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Europe/London",
    })
    .split(", ")[1];
  japan.innerHTML = d
    .toLocaleString("en-US", {
      timeZone: "Asia/Tokyo",
    })
    .split(", ")[1];
};
setInterval(updatetime, 1000);
