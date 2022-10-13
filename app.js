// const h1 = document.getElementById('head')
// const p = document.querySelector('p')

// pAll = document.querySelectorAll('p')

// for (let i = 0; i<= pAll.length; i++){
//     console.log(pAll[i])
// }

// console.log(pAll[2])


const area = document.getElementById('area')
const volume = document.getElementById('volume')
const answer = document.querySelector('.answer')

const calButton = document.querySelector('.cal')

console.log(area)
console.log(volume)


function calculate(){
    areaValue = area.value
    const VolumeVal = volume.value

    area.value = ''
    volume.value = ''

    const res = areaValue * VolumeVal
    answer.innerHTML = res
}



calButton.addEventListener('click', calculate)





// console.log(p.textContent)
// console.log(h1)
// console.log(pAll)