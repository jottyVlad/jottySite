import {loadJSON} from "/js/index.js";

let projectsListHtml = document.getElementsByClassName("projects-list")[0]

loadJSON("/js/json/projects.json", response => {
    let json = JSON.parse(response);
    json.forEach(elem => {
        let newDiv = document.createElement('div');
        newDiv.className = "row project";

        let projectNameDiv = document.createElement('div');
        projectNameDiv.className = "row project-name";
        projectNameDiv.innerText = elem["name"];
        newDiv.appendChild(projectNameDiv);

        let projectDescriptionDiv = document.createElement('div');
        projectDescriptionDiv.className = "row project-description";
        projectDescriptionDiv.innerText = elem["description"];
        newDiv.appendChild(projectDescriptionDiv);

        projectsListHtml.appendChild(newDiv);
    })
})