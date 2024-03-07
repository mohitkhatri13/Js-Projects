const inputBox = document.querySelector(".input-field");
const listscontainer = document.querySelector(".listoflist");

function addTask(){
  if(inputBox.value===''){
    alert("You must enter something !!");
  }
  else{ 
     let li = document.createElement("li");
     li.innerHTML = inputBox.value;
     listscontainer.appendChild(li);
     let span = document.createElement("span");
     span.innerHTML = "\u00d7";
     li.appendChild(span);
  }
    inputBox.value  = "";
    saveData();
}

listscontainer.addEventListener("click" , function(e){
       if(e.target.tagName ==="LI"){
          e.target.classList.toggle("checked");
          saveData();
       }
       else if(e.target.tagName==="SPAN"){
           e.target.parentElement.remove();
           saveData();
       }
}, false)  // for the false read the concept of capturing phase and bubbling phase


//it save the data in the local sotrage of brower hence
//data not get deleted when we closed or refresh the data
function saveData(){
 localStorage.setItem("data" , listscontainer.innerHTML);
}
// it helps to render again our data when we reopen out data
function getData(){
    listscontainer.innerHTML= localStorage.getItem("data");
}
getData();





