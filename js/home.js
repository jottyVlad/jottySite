import {loadJSON} from "/js/index.js";

let about_section = document.getElementById("about-me-inner");

loadJSON('/js/json/index.json', response => {
    let json = JSON.parse(response);
    about_section.innerText = json["about"];
});