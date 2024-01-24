//body
let body = document.body

// creating an input field: 
let inputSection = document.createElement('section')
inputSection.classList.add('input-section')
body.appendChild(inputSection)

let userInput = document.createElement('input')
inputSection.appendChild(userInput)

//create add btn
let addBtn = document.createElement('button')
addBtn.innerText = 'add'
addBtn.classList.add('add-btn')
inputSection.appendChild(addBtn)

//create a list of tasks
let list = document.createElement('ul')
body.appendChild(list)

function taskCreator(task) {
    let item = document.createElement('li')
    let itemP = document.createElement('p')
    itemP.innerText = task
    itemP.classList.add('item-text')
    item.appendChild(itemP)

    let buttonDone = document.createElement('button')
    buttonDone.classList.add('done-btn')
    buttonDone.innerText = 'Done'
    item.appendChild(buttonDone)

    let buttonDelete = document.createElement('button')
    buttonDelete.innerText = 'Delete'
    buttonDelete.classList.add('delete-btn')
    item.appendChild(buttonDelete)

    buttonDelete.addEventListener('click', function() {
        list.removeChild(item)
    })

    list.insertAdjacentElement('afterbegin', item)
}

taskCreator('Do the dishes')
taskCreator('Take out the trash')
taskCreator('Walk the dog') 

//User creates a task
addBtn.addEventListener('click', function() {
    taskCreator(userInput.value)
    userInput.value = ''
})

//Delete a task
