function updateTime() {
  let losAngelsElement = document.querySelector("#los-angels");
  let losAngelsDateElement = losAngelsElement.querySelector(".date");
  let losAngelsTimeElement = losAngelsElement.querySelector(".time");
  let losAngelsTime = moment().tz("America/Los_Angeles");

  losAngelsDateElement.innerHTML = losAngelsTime.format("MMMM Do YYYY");
  losAngelsTimeElement.innerHTML = losAngelsTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
