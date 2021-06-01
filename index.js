"use strict";

let cityStates = [{
    state: "California",
    stateAbbr: "CA",
    cities: ["Los Angeles", "San Francisco", "San Diego"]
 },
 {
    state: "Colorado",
    stateAbbr: "CO",
    cities: ["Aspen", "Boulder", "Denver", "Pagosa Springs"]
 },
 {
    state: "Texas",
    stateAbbr: "TX",
    cities: ["Austin", "Dallas", "Houston", "San Antonio"]
 }
];

window.onload = function () {

    loadstatesDropdown();

    const statesDropdown = document.getElementById("statesDropdown");
    statesDropdown.onchange = onStatesDropdownChanged;

    const citiesDropdown = document.getElementById("citiesDropdown");
    citiesDropdown.onchange = oncitiesDropdownChanged;

}

function loadstatesDropdown() {
    const loadstatesDropdown = document.getElementById("statesDropdown");
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    loadstatesDropdown.appendChild(selectOneOption);
    for (let i = 0; i < cityStates.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = cityStates[i].state;
        theOption.value = cityStates[i].stateAbbr;
        loadstatesDropdown.appendChild(theOption);
    }

    const loadcitiesDropdown = document.getElementById("citiesDropdown");
    selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Pick A State First";
    selectOneOption.value = "";
    loadcitiesDropdown.appendChild(selectOneOption);
}

function onStatesDropdownChanged() {
    const stateDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";
    
    citiesDropdown.options.length = 0;
    let selectedstatesDropdown = stateDropdown.value;
    if (selectedstatesDropdown == "") {
        let selectOneOption = document.createElement("option");
        selectOneOption.textContent = "Pick A State First...";
        selectOneOption.value = "";
        citiesDropdown.appendChild(selectOneOption);
        return;
    }

    let matchingStateAbbr = cityStates.find(a => a.stateAbbr == selectedstatesDropdown);
    let selectOneOption = document.createElement("option");
    selectOneOption.textContent = "Select One...";
    selectOneOption.value = "";
    citiesDropdown.appendChild(selectOneOption);
    for (let i = 0; i < matchingStateAbbr.cities.length; i++) {
        let theOption = document.createElement("option");
        theOption.textContent = matchingStateAbbr.cities[i];
        citiesDropdown.appendChild(theOption);
    }
}

function oncitiesDropdownChanged() {
    const stateDropdown = document.getElementById("statesDropdown");
    const citiesDropdown = document.getElementById("citiesDropdown");
    const messagePara = document.getElementById("messagePara");
    messagePara.innerHTML = "";


    let selectedCity = citiesDropdown.value;
    if (selectedCity == "") {
        return;
    }
    let selectedStateIndex = stateDropdown.selectedIndex;
    let selectedState = stateDropdown.options[selectedStateIndex].text;
    let message = selectedCity + " is in " + selectedState;
    
    messagePara.innerHTML = message;
}
