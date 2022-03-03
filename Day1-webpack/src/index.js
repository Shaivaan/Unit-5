import "./index.css";
import logo from "./1.png";

var h1 = document.createElement("h1");
h1.innerText = "To Do List"



var image = document.createElement("img");
image.src = "logo";
document.getElementById("logo").append(image);
document.getElementById("head").append(h1);


document.getElementById("bout").addEventListener("click",(e)=>{
    e.preventDefault();
    var inp = document.getElementById("inputDo");
    if(inp.value == ""){ 
        alert("Empty Task😒");
    }else{ 
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        td1.innerText = inp.value;

        var td2 = document.createElement("td");
        td2.innerText = "Delete";
        
        var td0 = document.createElement("td");
        td0.innerText = "➼"
        
        
        tr.append(td0,td1,td2);
        document.getElementById("data").append(tr);
        td0.style.width = "30px"
        
        td2.addEventListener("click",(event)=>{
            deleteTask();
        })
        
    
    }
    
  
    

})

function deleteTask(){
    event.target.parentNode.remove();   
}