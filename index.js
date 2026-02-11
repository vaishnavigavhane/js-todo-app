let input = document.getElementById("input");
let listContainer = document.getElementById("list-container");

function addTask(){
    let value = input.value.trim();
    if(value === ''){
        alert("You must write something!");
         input.value = '';
        return;
    }
    let tasks = listContainer.getElementsByTagName("li");
    for(let task of tasks){
        if(task.firstChild.textContent.trim() === input.value.trim()){
            alert("List item already exists!");
             input.value = '';
            return;
        }
    }

        let li = document.createElement("li");
        li.innerHTML = value;
        li.className = "task-item";
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&times";
        span.className = "delete-btn";
        li.appendChild(span);
    
    input.value = '';
    saveData();
} 

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("completed");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
