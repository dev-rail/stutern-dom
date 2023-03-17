console.log('hello word')

// targeting html elements
// query selector
// document API


// Document API

const myHeader = document.getElementById('myHeader');

console.log(myHeader)

myHeader.innerHTML = '<div>Hello</div>'

const myBtn = document.getElementById('myBtn')
const myInput = document.getElementById('input')

function storeItem () {
    let myList = document.getElementById('myList');
    
    const inputVal = myInput.value;

    let prevContent = localStorage.getItem('todo');

    if(!prevContent){
        localStorage.setItem('todo', JSON.stringify([inputVal]))

        myInput.value = ''
    myList.innerHTML = null;

        renderElements()
    }

    let prevContentJSON = JSON.parse(prevContent)


    localStorage.setItem('todo', JSON.stringify([ ...prevContentJSON, inputVal]))
    myInput.value = ''
    myList.innerHTML = null;

    renderElements()

    // console.log(inputVal)
}

function removeElement(todo) {

    let prevContent = localStorage.getItem('todo');
    let prevContentJSON = JSON.parse(prevContent);

    let updatedContent = prevContentJSON.filter(function (item, index) {
        return item !== todo
    });

    localStorage.setItem('todo', JSON.stringify([ ...updatedContent]));

    let myList = document.getElementById('myList');

    myList.innerHTML = null

    renderElements()
    
}

myBtn.addEventListener('click', storeItem)

function renderElements() {

    
    let prevContent = localStorage.getItem('todo');
    let prevContentJSON = JSON.parse(prevContent);

    let myList = document.getElementById('myList');
    

    for (let j = 0; j < prevContentJSON.length; j++) {
        let todoElement = document.createElement('li');
        todoElement.innerText = prevContentJSON[j];

        todoElement.addEventListener('click', function () {
            removeElement(prevContentJSON[j])
        })
        myList.appendChild(todoElement)
        
        
    }
    
}

renderElements()


// local storage methods
// setItem---- store an item in storage
// getItem --- retrieve item from store
// removeItem --- remove item from store
// clear--- remove all item from store


