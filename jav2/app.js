
const items = document.querySelectorAll('li')
let item2 = document.getElementById('item2')
let item5 = document.getElementById('item5')

console.log(items)


// item5.style.backgroundColor = 'yellow'
// item5.style.color = 'white'
// item5.style.fontSize = '45px'
// item5.textContent = 'javascript'

for (let i = 0; i < items.length; i++){
    items[i].style.color = 'green'
    items[i].style.listStyle = 'none'


    items[i].style.backgroundColor = 'black'

}

items[2].style.fontSize = '60px'
items[2].style.borderBottom = '3px solid white'
items[2].style.color = 'white'


console.log(items.parent)








item2.style.backgroundColor = 'red'
item2.style.border = '1px solid black'

items.textContent = 'ademola'
// console.log(items)
// console.log(items[2].textContent)
// const secondChild = document.querySelector('.item:nth-child(2')



// odd.style.backgroundColor = 'blue'


// secondChild.textContent ='second element'

// items[0].textContent = 'hello there'
// items[1].style.fontSize = '50px'
// items[3].style.backgroundColor = 'red'

// pAll = document.querySelectorAll('p')

// for (let i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'green'
// }


// const input = document.querySelector('.add')

// input.value = 'hello world'


// const odd = document.querySelectorAll('.item:nth-child(odd)')

// for (let i = 0; i < odd.length; i++){
//     odd[i].style.backgroundColor = 'blue'
// }

let lists = document.querySelector('.ul')
console.log(lists.parentElement)
// lists.parentElement.style.backgroundColor = 'red'

// console.log(lists.children[2])

// console.log(lists.lastElementChild)

// const newLi = document.createElement('li')

// lists.append(newLi)

// newLi.textContent = 'new list item'
// newLi.style.fontSize = '30px'


const newDiv = document.createElement('div')
newDiv.className = 'new'
newDiv.textContent = 'a new div'

console.log(newDiv)


let container = document.querySelector('.container')
let h1 = document.querySelector('.head')


// container.insertBefore(newDiv, h1)
// container.insertAdjacentElement("beforebegin", newDiv)
// container.insertAdjacentElement("afterbegin", newDiv)
// container.insertAdjacentElement("beforeend", newDiv)
// container.insertAdjacentElement("afterend", newDiv)

// item2.insertAdjacentElement("beforebegin", newDiv)
// item2.insertAdjacentElement('afterbegin', newDiv)

let newLi = document.createElement('li')
newLi.style.backgroundColor = 'pink'
newLi.textContent = 'a new element with pink background'
newLi.style.fontSize = '40px'

const item4 = document.querySelector('.item4')

item4.insertAdjacentElement("afterend", newLi)


let h2 = document.createElement('h2')
h2.textContent = 'this is another heading'
h2.style.border = '3px solid red'
h2.style.color = 'white'
h2.style.textAlign = 'center'

let itemLister = document.querySelector('.head')

itemLister.insertAdjacentElement('afterbegin', h2)





let button = document.querySelector('.btn2')
console.log(button)


function click (){
    console.log('hello')
}

button.addEventListener('click', function(){
    console.log('click me')
} )






