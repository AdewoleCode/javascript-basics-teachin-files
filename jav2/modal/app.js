const openModal =document.querySelector('.container .open')
const closeModal = document.querySelector('.close')
const popupBox= document.querySelector('.modal')
// const body = document.querySelector('.container')

// form
const formElement = document.querySelector('#form')
// const formCloseBtn = document.querySelector('#form-btn')
const openformBtn = document.querySelector('.open-form-modal')

openformBtn.addEventListener('click', function(){
    formElement.showModal()
})

// formCloseBtn.addEventListener('click', function(){
//     formElement.close()
// })


openModal.addEventListener('click', function(){
    popupBox.showModal()
    console.log(openModal)

})

popupBox.addEventListener('click', function(){
    popupBox.close()
})


closeModal.addEventListener('click', function(){
    popupBox.close()
})

