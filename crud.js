function addTask(){
    let inputData=document.getElementById("enterData");
    let inputDataValue=inputData.value.trim()
    const allTaskContainer=document.querySelector("#tasks")
    let liTag=document.createElement("li")
    liTag.innerHTML+=`${inputDataValue}
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
    `
    liTag.style.listStyleType="none"
    

allTaskContainer.appendChild(liTag)
const editBtn=liTag.querySelector(".edit")
editBtn.style.backgroundColor="lightblue"
const deleteBtn=liTag.querySelector(".delete")
deleteBtn.style.backgroundColor="red"

inputData.value=""

deleteBtn.addEventListener("click",()=>{
       deleteTask(liTag)
})
  
editBtn.addEventListener("click",()=>{
editTask(liTag)
})
}

function deleteTask(liTag){
    let a=confirm("Are uh sure!! wanna delete task")
    if (a){
        liTag.remove()
    }
    
}
function editTask(item){
   let x=prompt("enter the data",item.firstChild.textContent)
    if(x !== null && x.trim()!=""){
        item.firstChild.textContent=x;
    }
}

