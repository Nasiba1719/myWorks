//Todo Eleman Ekleme

//Eleman Secimi

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnAddNewTask = document.querySelector("#btnAddNewTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const items= ["Todo 1", "Todo 2", "Todo 3", "Todo 4", "Todo 5", "Todo 6"];




// load items
loadItems();






eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem);
    //delete an item
    taskList.addEventListener("click", deleteItem);

    //delete all item
    btnDeleteAll.addEventListener("click", deleteAllItems);

}


function loadItems() {

    items.forEach(function(item){
        creatItem(item);
    })

}

function creatItem(text){
     // li olusturma

     const li = document.createElement("li");

     li.className = "list-group-item list-group-item-secondary";
 
     li.appendChild(document.createTextNode(text));
 
 
     // a olusturma
 
     const a = document.createElement("a");
 
     a.classList = "delete-item float-right";
 
     a.setAttribute("href", "#");
 
     a.innerHTML = "<i class='fas fa-times'></i>";
 
     li.appendChild(a);
 
     taskList.appendChild(li);
}


function addNewItem(e) {
    if (input.value === '') {
        alert("add new item");
        //console.log("submit");
    }

    //create Item
    creatItem(input.value);


   

    input.value = "";


    e.preventDefault();
}

//Eleman silme

function deleteItem(e) {
   
        if (e.target.className === "fas fa-times") {
            if (confirm("Silmek istediyinize emin misiniz?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    e.preventDefault();
}

//Tum elemanlari slmek

function deleteAllItems(e) {
    /*if (confirm("Tum elemanlari silmek istediyinize emin misiniz?")) {
        taskList.childNodes.forEach(function (item) {
            if (item.nodeType === 1) {
                item.remove();
            }
        })
    } */

taskList.innerHTML=""

}