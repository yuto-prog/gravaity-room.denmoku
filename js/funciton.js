
import jsondata from "../data/maru.json" assert { type: "json" };

// console.log(jsondata.name);
document.getElementById('name').textContent = jsondata.name;
document.getElementById('icon').src = jsondata.icon;
document.getElementById('introduction').textContent = jsondata.introduction;

let listdata = "";
jsondata["artist-data"].forEach(function (element) {
    listdata = document.createElement('li');
    listdata.textContent = element;
    document.getElementById('artistarr').appendChild(listdata);
});

listdata = "";
const table = document.getElementById('songarr')
let newrow, songcell, artistcell;
for (let i = 0; i < jsondata["song-data"]["song-name"].length; i++) {
    newrow = table.insertRow();
    songcell = newrow.insertCell();
    songcell.appendChild(document.createTextNode(jsondata["song-data"]["song-name"][i]));
    artistcell = newrow.insertCell();
    artistcell.appendChild(document.createTextNode(jsondata["song-data"]["song-artist"][i]))
    songcell.classList.add('artist');
    artistcell.classList.add('song');

}