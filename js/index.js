let projectsListHtml = document.getElementsByClassName("projects-list")[0]

function loadJSON(file, callback) {
    let xObj = new XMLHttpRequest();
    xObj.overrideMimeType("application/json");
    xObj.open('GET', file, true);
    xObj.onreadystatechange = function() {
        if (xObj.readyState === 4 && xObj.status === 200) {
            callback(xObj.responseText);
        }
    };
    xObj.send(null);
}

loadJSON("/js/projects.json", response => {
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