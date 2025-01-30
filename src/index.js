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

function updatePlace(event) {
  let placeTimezone = event.target.value;
  if (placeTimezone === "current") {
    placeTimezone = moment.tz.guess();
  }
  let placeName = placeTimezone.replace("_", "").split("/")[1];
  let placeTime = moment().tz(placeTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
   <div class="city" >
          <h2>${placeName}</h2>
          <div class="date">${placeTime.format("MMMM Do YYYY")}</div>
          <div class="time">${placeTime.format(
            "h:mm:ss"
          )} <small>${placeTime.format("A")}</small></div>
        </div> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#place");

citiesSelectElement.addEventListener("change", updatePlace);
