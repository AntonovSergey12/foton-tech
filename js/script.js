const buttonCall = document.querySelector('.banner-button')
const popupSection = document.querySelector('.popup-container')
const closePopUp = document.querySelector('.popup-close')

const buttonOddzvon = document.querySelector('.footer-button')
const popupContent = document.querySelector('.popup-container-oddzwon')
const closePopUpOddzwon = document.querySelector('.popup-close-oddzwon')

buttonCall.addEventListener('click', function () {
    popupSection.classList.add('popup-container-show')
})

closePopUp.addEventListener('click', function () {
    popupSection.classList.remove('popup-container-show')
})

buttonOddzvon.addEventListener('click', function () {
    popupContent.classList.add('popup-container-oddzwon-show')    
})
closePopUpOddzwon.addEventListener('click', function () {
    popupContent.classList.remove('popup-container-oddzwon-show')
})
