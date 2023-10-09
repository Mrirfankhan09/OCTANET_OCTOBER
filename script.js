let eleBtn=document.getElementsByTagName("button");
let taskContainer = document.querySelector(".tasks");

function logic(){
    let input = document.getElementById("add-task");
    if(input===""){
        return;
    }
    else{
         listtask=document.createElement("li");
        listtask.setAttribute("class","li-item");
        listtask.textContent=input.value;
        let spanEle=document.createElement("span");
        spanEle.textContent="❌";
        listtask.append(spanEle); 
        console.log(listtask);
        taskContainer.appendChild(listtask); 
    }
    input.value="";
    saveData();
}
taskContainer.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData(){
    localStorage.setItem("data",taskContainer.innerHTML);
}
function showTask(){
    taskContainer.innerHTML=localStorage.getItem("data");
}
showTask();

