const data = [];

const con = document.getElementById("rep");

localStorage.setItem("local", "[]");

function dataLoad() {
    let d = "";
    data.forEach((data, i) => {
        d = d + data + " " + `<button onclick="rm(${i})">remove</button> <button onclick="updateTask(${i})">Update</button>  <br><br>`;
    })
    con.innerHTML = d;
}
//dataLoad();
function save() {
    const ip = document.getElementById("io");
    //const local = JSON.parse(localStorage.getItem("local"));
    data.push(ip.value);
    localStorage.setItem("local", JSON.stringify(data));
    dataLoad();
    ip.value = "";
}
function rm(index) {
    data.splice(index, 1);
    localStorage.setItem("local", JSON.stringify(data));
    dataLoad();
}
function updateTask(index) {
    const newValue = prompt("Enter the updated task:", data[index]);
    data[index] = newValue;
    localStorage.setItem("local", JSON.stringify(data));
    dataLoad();
}