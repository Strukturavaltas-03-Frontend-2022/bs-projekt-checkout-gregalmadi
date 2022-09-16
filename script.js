"use strict";

const countrySelector = document.querySelector("#country");
const stateSelector = document.querySelector("#state");

const usStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "IllinoisIndiana",
  "Iowa",
  " Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "MontanaNebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "PennsylvaniaRhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const huStates = [
  "Bács-Kiskun",
  "Baranya",
  "Békés",
  "Borsod-Abaúj-Zemplén",
  "Csongrád-Csanád",
  "Fejér",
  "Győr-Moson-Sopron",
  "Hajdú-Bihar",
  "Heves",
  "Jász-Nagykun-Szolnok",
  "Komárom-Esztergom",
  "Nógrád",
  "Pest",
  "Somogy",
  "Szabolcs-Szatmár-Bereg",
  "Tolna",
  "Vas",
  "Veszprém",
  "Zala",
];

countrySelector.addEventListener("change", () => {
  if (countrySelector.value === "1") {
    changeStateOptions(usStates);
  } else if (countrySelector.value === "2") {
    changeStateOptions(huStates);
  } else {
    stateSelector.innerHTML = "";
    stateSelector.innerHTML += `<option value="">Choose country first</option>`;
  }
});

const changeStateOptions = (countryStates) => {
  stateSelector.innerHTML = "";
  stateSelector.innerHTML += `<option value="">Choose...</option>`;
  countryStates.forEach((state) => {
    const option = document.createElement("option");
    option.innerHTML = state;
    stateSelector.insertAdjacentElement("beforeend", option);
  });
};
