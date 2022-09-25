export function loadJSON(file, callback) {
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
