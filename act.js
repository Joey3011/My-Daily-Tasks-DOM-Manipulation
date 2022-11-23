console.log("connected");
const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const checkboxContainer = document.querySelector(".checkboxContainer");
const userInput = document.querySelector("#userInput");

const addTask = (str) =>{
    if(str.length > 5)
    {
        let div = document.createElement('div');
        div.className = "form-check mb-2"
        div.id = "form-check"

        let checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.value = str
        checkbox.id = "checkID"
        checkbox.className = "form-check-input ms-1 me-2"

        let label = document.createElement('label')
        label.htmlFor = "checkID"
        label.appendChild(document.createTextNode(str)) 

        checkboxContainer.appendChild(div)
        div.appendChild(checkbox)
        div.appendChild(label)

        userInput.value=""
    }

    else
    {
        alert("You must enter more than 5 characters");
    }
}

const removeTask = () =>{
    let checkBoxes = document.querySelectorAll('input[type="checkbox"]:checked')
    let div = document.querySelector("#form-check");
    let itemCheck = false;
    for(let item of checkBoxes){
        if (item.checked) { 
            itemCheck = true;
            item.parentElement.remove(div)
        }
    } 
    if(!itemCheck) return alert(`Pls. select item to delete...`)
}

add.addEventListener("click", () => {
    addTask(userInput.value)
});

del.addEventListener('click', () =>{   
    removeTask()
})

userInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault()
      add.click()
    }
});
