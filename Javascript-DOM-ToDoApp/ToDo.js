
//add enter key 
const key=document.querySelector('.add-text');
function keyEnter(event) {
  if(event.keyCode===13) {
    //console.log('Entere basdiniz')
    
//MELLIM BURADA addNewTask(element) BU FUNKSIYANI ISLETMEK ISTEYIREM ALINMIR 
  }
}


// Add new task
const checkboxText = document.querySelector('.todo-chekboxText');
function addNewTask(element) {
   
    //bir onceki elementi sec
    const previousElement = element.previousElementSibling;
    const previousElementValue = previousElement.value;
   const checkboxView = `
        <div class="chekbox-content">
       
        <div class="chek">
          <input type="checkbox" onclick="doneTask(this)" class="chek-box">
        </div>
       
        <div class=" chek-input">
          <input type="text" class="add-text chek-text" value='${previousElementValue}' disabled>
        </div>
       
        <div class="check-delete-btn">
          <button type="button" onclick="deleteTask(this)" class="btn btn-delete">Delete</button>
        </div>

        <div class = "check-edit-btn">
        <button type="button" onclick="editTask(this)" class="btn btn-edit">Edit</button>
        </div>
     
        </div>
      <br> <br> `
            
    checkboxText.innerHTML += checkboxView;
    key.value= '';
   
     }
        
    
   
//delete task 
function deleteTask(element){
   const parentElement=element.parentElement.parentElement;
   //console.log(parentElement);
   checkboxText.removeChild(parentElement);
   
}

//done task

function doneTask(element) {
 if (element.checked) {
   element.parentElement.nextElementSibling.style.background= "blue";
 }
 else {
    element.parentElement.nextElementSibling.style.background= "none";
 }
}

//edit task
 function editTask(element) {
  const chekText= document.querySelector(".chek-text")

chekText.removeAttribute('disabled')
 }






