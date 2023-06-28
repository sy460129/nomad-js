const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("input");
const toDoList=document.getElementById("todo-list");

const TODOS_KEY="todos";

let list=[];
function save(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(list));
}

function deleteList(event){
    const parNode=event.target.parentElement;
    parNode.remove();
    list=list.filter((toDo) => toDo.id!=parseInt(parNode.id));
    save();
}

function insert(obj){
    const item=document.createElement("li");
    item.id=obj.id;
    const sp=document.createElement("span");    
    sp.innerText=obj.text;
    
    const button=document.createElement("button");
    button.innerText="X";
    button.addEventListener("click", deleteList);
    item.appendChild(sp);
    item.appendChild(button);
    toDoList.appendChild(item);
}

function makeList(event){
    event.preventDefault();
    const newToDo=toDoInput.value;
    toDoInput.value="";
    const obj={
        text:newToDo,
        id:Date.now(),
    }
    list.push(obj);
    insert(obj);
    save();
}
toDoForm.addEventListener("submit", makeList);

const savedToDos=localStorage.getItem(TODOS_KEY);
if(savedToDos!=null){
    const parsedToDos=JSON.parse(savedToDos);
    list=parsedToDos;
    parsedToDos.forEach(insert);
    parsedToDos.forEach((item)=>console.log(`Hi, ${item.text}, id = ${item.id}`));
}