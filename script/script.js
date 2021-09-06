let closeIcon = document.querySelector('.popup__close-icon');
let edit = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let profileFullName = document.querySelector('.profile__full-name');
let profileProfesion = document.querySelector('.profile__profesion');
let editFullName = document.querySelector('#input_full-name');
let editProfesion = document.querySelector('#input_profesion');
let formFullName = document.querySelector('.form');
function clickOpenIcon(){
    edit.classList.add('popup_opened')
    editFullName.value = profileFullName.textContent;
    editProfesion.value = profileProfesion.textContent;
}
function clickCloseIcon(){
    edit.classList.remove('popup_opened')
}
function submitClick (event) {
    event.preventDefault(); 
    profileFullName.textContent = editFullName.value;
    profileProfesion.textContent = editProfesion.value;
    clickCloseIcon();
}
closeIcon.addEventListener('click',clickCloseIcon)
editButton.addEventListener('click',clickOpenIcon)
formFullName.addEventListener('submit',submitClick)