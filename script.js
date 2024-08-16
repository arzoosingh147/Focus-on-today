const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const errorLabel = document.querySelector('.error-label')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')

checkBoxList.forEach((checkbox)=>{
   checkbox.addEventListener('click', (e)=> {

    checkbox.parentElement.classList.toggle('completed')
   })
})