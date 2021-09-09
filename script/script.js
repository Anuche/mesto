const closeEdit = document.querySelector('.close-edit');
const closePlace = document.querySelector('.close-place')
const elementLogos = document.querySelectorAll('.element__logo');
const elementLogo = document.querySelector('.element__logo'); 
const edit = document.querySelector('.popup_profile');
const place = document.querySelector('.popup_place')
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button')
const profileFullName = document.querySelector('.profile__full-name');
const profileProfesion = document.querySelector('.profile__profesion');
const editFullName = document.querySelector('#input_full-name');
const editProfesion = document.querySelector('#input_profesion');
const inputPlaceName = document.querySelector('#input_place-name');
const inputUrl = document.querySelector('#input_url');
const formFullName = document.querySelector('.form_profile');
const formNewPlace = document.querySelector('.form_place');
const template = document.querySelector('#template').content;
const popupImage = document.querySelector('.popup-image');
const popupImageTitle = document.querySelector('.popup-image__title');
const popupImageButton = document.querySelector('.popup-image__close-button');
const popupImageArt = document.querySelector('.popup-image__image')
const elementsUnorderedList =document.querySelector('.elements__unordered-list');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  //Открытие попап профиля
clickOpenIcon = () =>{
    edit.classList.add('popup_opened')
    editFullName.value = profileFullName.textContent;
    editProfesion.value = profileProfesion.textContent;
}
//Закрытие попап профиля
clickCloseEdit = () => {
    edit.classList.remove('popup_opened')
}
//Сохранить для профиля
submitClick = (event) =>{
    event.preventDefault(); 
    profileFullName.textContent = editFullName.value;
    profileProfesion.textContent = editProfesion.value;
    clickCloseEdit();
}
//Закрытие попап места
clickClosePlace = () =>{
    place.classList.remove('popup_opened')
}
//Открытие попап места
clickAddButton = () =>{
    place.classList.add('popup_opened')
}
//Сохранить для места
popupFormImage  = (event) =>{
    event.preventDefault(); 
    addElement(elementsUnorderedList, createElements({
        link: inputUrl.value,
        name: inputPlaceName.value
    }));
    formNewPlace.reset();
    clickClosePlace();
}
//Открытие попап изображения
openPopupImage = () =>{
    popupImage.classList.add('popup-image_opened')
}
//Закрытие попап изображения
closedPopupImage = () =>{
    popupImage.classList.remove('popup-image_opened')
}
//Лайки
const clickElementLogo = (event) => {
    event.target.classList.toggle('element__logo_active')
}
elementLogos.forEach((elementLogo) =>{
    elementLogo.addEventListener('click', clickElementLogo);
})
//Удаление
clickDeleteButton = (event) =>{
    event.target.closest('.element').remove();
}

const createElements = (element) => {
    const templatePlace = template.querySelector('.element').cloneNode(true);
    templatePlace.querySelector('.element__image').src = element.link;
    templatePlace.querySelector('.element__image').alt = element.name;
    templatePlace.querySelector('.element__title').textContent = element.name;
    templatePlace.querySelector('.element__delete-button').addEventListener('click', clickDeleteButton);
    templatePlace.querySelector('.element__logo').addEventListener('click', clickElementLogo);
  
    const popupOpenButton = templatePlace.querySelector('.element__image'); 
     
    popupOpenButton.addEventListener('click', (event) => { 
        popupImageArt.src = event.target.src; 
        popupImageArt.alt = event.target.closest('.element').querySelector('.element__title').textContent; 
        popupImageTitle.textContent = event.target.closest('.element').querySelector('.element__title').textContent; 
     
      openPopupImage(); 
    });
  
    return templatePlace;
};
//добавление карточки в список
const addElement = (container, element) => { 
    container.prepend(element);
};
//Карточки из массива
initialCards.forEach((element) => {
    addElement(elementsUnorderedList, createElements(element));
});
//Слушатели
closePlace.addEventListener('click',clickClosePlace)
closeEdit.addEventListener('click',clickCloseEdit)
editButton.addEventListener('click',clickOpenIcon)
formFullName.addEventListener('submit',submitClick)
formNewPlace.addEventListener('submit',popupFormImage)
addButton.addEventListener('click',clickAddButton)
popupImageButton.addEventListener('click',closedPopupImage);