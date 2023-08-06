// Selectors
const todoadd = document.querySelector(".add-button")
const todoinput = document.querySelector(".input")
const todolist = document.querySelector(".todolist")

// Event Listeners
// selections.addEventListener("click",e=>{alert("Fucked")})
todoadd.addEventListener('click',addTodo)

// Functions
function addTodo(event){
    // Prevents form from submitting
    event.preventDefault()

    // add class div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // add li 
    const newtodo = document.createElement('li')
    newtodo.innerText = todoinput.value
    newtodo.classList.add('todo-item')
    todoDiv.appendChild(newtodo)

    // add check button
    const checkbutton = document.createElement('button')
    checkbutton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbutton.classList.add('check-btn')
    todoDiv.appendChild(checkbutton)

    // add Delete button
    const deletebutton = document.createElement('button')
    deletebutton.innerHTML = '<i class="fa-solid fa-delete-left"></i>'
    deletebutton.classList.add('delete-btn')
    todoDiv.appendChild(deletebutton)

    // Append everything
    if(todoinput.value == ""){
        alert("Your Input is Empty")
    }
    else{
        todolist.appendChild(todoDiv)
    }
    

    // After it need to Clear
    todoinput.value = "";

    // For Check Button 
} 