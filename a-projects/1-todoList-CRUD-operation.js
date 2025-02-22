const createTodo = document.querySelector('#create')
// console.log(createTodo)
createTodo.addEventListener('click', todoItems)


function todoItems(e) {
    e.preventDefault()
    // const dataContainer = document.querySelector('.data-Container')
    const inputData = document.querySelector('#inputData')
    const userID = inputData.value
    const tiger = userID.split(/ /)
    // userID.split()
    
    const parentlement = document.querySelector('.data-Container');

    const parentDiv = document.createElement('div')
    parentDiv.className = "data-list"
    const childDiv = document.createElement('div');
    childDiv.className = "task"
    const data = document.createElement('table')

    parentDiv.appendChild(childDiv)
    childDiv.appendChild(data)
    const tableRow = document.createElement('tr')
    const tableHeader1 = document.createElement('th')
    const tableHeader2 = document.createElement('th')
    const tableHeader3 = document.createElement('th')
    tableHeader1.innerHTML = "ID",
        tableHeader2.innerHTML = "NAME",
        tableHeader3.innerHTML = "PASSWORD"

    const removeBtn = document.createElement('button')
    removeBtn.setAttribute('id', 'delete')
    removeBtn.innerHTML = "Delete"
    removeBtn.addEventListener('click', function (e) {
        e.stopPropagation()
        // dele.parentNode.removeChild(dele)
        // console.log(removeBtn.parentNode)
        removeBtn.parentElement.remove(parentDiv)
        // console.log(parentDiv)
        
    })
    const updateBtn = document.createElement('button')
    updateBtn.setAttribute('id', 'update')
    updateBtn.innerHTML = "Update"

    data.appendChild(tableRow)
    tableRow.appendChild(tableHeader1)
    tableRow.appendChild(tableHeader2)
    tableRow.appendChild(tableHeader3)
    childDiv.appendChild(updateBtn)
    childDiv.appendChild(removeBtn)


    // console.log(parentDiv)

    const tableRow2 = document.createElement('tr')
    tableRow2.className = "tableRow2"
    const tData1 = document.createElement('td')
    tData1.innerHTML = tiger[0]


    const tData2 = document.createElement('td')
    tData2.innerHTML = tiger[1]

    const tData3 = document.createElement('td')
    tData3.innerHTML = tiger[2]
    data.appendChild(tableRow2)
    tableRow2.appendChild(tData1)
    tableRow2.appendChild(tData2)
    tableRow2.appendChild(tData3)
    parentlement.appendChild(parentDiv)


    // updateBtn.addEventListener('click', function (e) {
    //     e.stopPropagation();
    //     const updateAppender = document.querySelector('.tableRow2')
    //     let tableInput = document.createElement('input');
    //     tableHeader1.id = "inputData"
    //     updateAppender.appendChild(tableInput)
    //     updateAppender.remove()
    // })


    // console.log(parentDiv)
    
}