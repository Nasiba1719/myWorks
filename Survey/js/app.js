let users = [];

let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    let data = new FormData(form);
    let obj = {};
    for (let value of data.entries()) {
        obj[value[0]] = value[1]
    }
    users.push(obj);
    console.log(users);
});

