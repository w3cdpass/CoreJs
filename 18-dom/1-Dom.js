/** 
 *   innerText give text 
 *  innerContent give full text if it is hidden
 */


// most used dom

/**
 *  documetnt.querySelector('#id) or ('class) ('css.selector') 
 *  you can use any css selector here
 * 
*/
document.getElementsByName('text')[0].placeholder = "Changed the placeholder";

// const li1 = document.querySelector('li:nth-child(4)');
const all = document.querySelectorAll('li')
// all.style.background = 'red'
// all.style.padding = '10px';

// all.textContent = 'this is Dom'
// console.log()
const value = []
all.forEach((vale) => {
    value.push(vale.innerHTML)
})

function filterItems(arr, query) {
    return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()))
}

console.log(filterItems(value, 'e'))