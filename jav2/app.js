
const items = document.querySelectorAll('.item')
console.log(items)
console.log(items[2].textContent)
// const secondChild = document.querySelector('.item:nth-child(2')



// odd.style.backgroundColor = 'blue'


// secondChild.textContent ='second element'

items[0].textContent = 'hello there'
items[1].style.fontSize = '50px'
items[3].style.backgroundColor = 'red'

// pAll = document.querySelectorAll('p')

for (let i = 0; i < items.length; i++){
    items[i].style.backgroundColor = 'green'
}


const input = document.querySelector('.add')

input.value = 'hello world'


const odd = document.querySelectorAll('.item:nth-child(odd)')

for (let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'blue'
}
