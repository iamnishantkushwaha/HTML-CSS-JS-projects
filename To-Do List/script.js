const add = document.querySelector("#addbutton");
let notasks = document.querySelector("#notask");
let Tasks = document.querySelector("#Tasks");
let input = document.querySelector("#Task2 input");
let inputdiv = document.querySelector("#input");
let tasksnos;
let Tasks2 = document.querySelector("#Tasks2");
let completed = document.querySelector("#completed");
let Active = document.querySelector("#Active1");
let taskno = 0;
let comp = 0;

function addtask(e) {
  if (input.value.trim() === "") {
    alert("Enter Task First");
  } else {
    if (taskno == 0) {
      Tasks.innerHTML = ``;
    }
    taskno++;
    let span = document.createElement("span");
    span.id = `${taskno}`;

    if (comp == 0) {
      Tasks2.innerHTML = ``;
    }
    comp++;
    let span2 = document.createElement("span");
    span2.id = `${comp}`;

    function attachinner(check2) {
      span2.innerHTML = `${check2}`;
      span2.querySelector("input").setAttribute("checked", "");
      span2.querySelector("input").setAttribute("disabled", "");
      Tasks2.appendChild(span2);
      comp++;
    }
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkboxicon";
    checkbox.id = `${taskno}check`;
if(Active.className=="activated")
{
checkbox.addEventListener("change", function (e) {
      if (this.checked) {
        let check2 = checkbox.parentElement.parentElement.innerHTML;
       
        e.target.parentElement.parentElement.remove();
        if (Tasks2.innerHTML == "") {
          Tasks2.innerHTML = `<span><h1 id="notask">No Task</h1> <i class="ri-todo-fill"></i></span>`;
        }
        comp--;
        if(comp==0)
        {
            Tasks2.innerHTML=``;
            attachinner(check2);
        }
        else{
          attachinner(check2);
        }
        

        if (Tasks.innerHTML == "") {
          Tasks.innerHTML = `<span><h1 id="notask">No Task</h1> <i class="ri-todo-fill"></i></span>`;
        }
        taskno--;
      }
      
    });
}


    
    span.innerHTML = `<h2 class="box"></h2>`;
    let head = span.querySelector(".box");
    head.prepend(checkbox);
    head.append(input.value);
    Tasks.appendChild(span);
    tasksnos++;

    input.value = "";


    // span.innerHTML = `<h2 class="box"></h2>`;
    // let head = span.querySelector(".box");
    // head.prepend(checkbox);
    // head.append(input.value);
    // Tasks.appendChild(span);
    // tasksnos++;

    // input.value = "";
  }
}

input.addEventListener("keydown", function (e) {
  
  if (e.key === "Enter") {
    addtask(e);
  }
});

add.addEventListener("click", function (e) {
  e.preventDefault();
  addtask(e);
});

completed.addEventListener("click", function () {
  inputdiv.setAttribute("class", "inactive");
  Tasks.setAttribute("class", "inactive");
  Tasks2.removeAttribute("class");
  completed.setAttribute("class", "activated");
  Active.removeAttribute("class");
});

Active.addEventListener("click", function (e) {
  inputdiv.removeAttribute("class");
  Tasks.removeAttribute("class");
  Tasks2.setAttribute("class", "inactive");
  Active.setAttribute("class", "activated");
  completed.removeAttribute("class");
});
