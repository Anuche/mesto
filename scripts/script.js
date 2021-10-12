import { Card } from "./Card.js"; //импортируем генератор карточек
import { FormValidator } from "./FormValidator.js"; //импортируем валидацию

const dataConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__filed',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};
const dataTemplate = {
    element:'.element',
    elementImage:'.element__image',
    elementDaleteButton:'.element__delete-button',
    elementTitle:'.element__title',
    elementLogo:'.element__logo',
    elementLogoActive:'element__logo_active',
};
const dataNamingConfig ={
    formFullName:'.form-profile',
    formNewPlace:'.form-place',
    editFullName:'#input-full-name',
    editProfesion:'#input-profesion',
    inputPlaceName:'#input-place-name',
    inputUrl:'#input-url',
    popups:'.popup',
    errorMassages:'.error',
    closeEdit:'.close-edit',
    closePlace:'.close-place',
    edit:'.popup_type_profile',
    place:'.popup_type_place',
    editButton:'.profile__edit-button',
    addButton:'.profile__add-button',
    profileFullName:'.profile__full-name',
    profileProfesion:'.profile__profesion',
    popupImage:'.popup_type_image',
    popupImageTitle:'.popup__title_image',
    popupImageButton:'.popup__close-icon_image',
    popupImageArt:'.popup__image',
    elementsUnorderedList:'.elements__unordered-list',
    popup:'popup',
    popupCloseIcon:'popup__close-icon',
    openPopup: 'popup_opened',
    elementTamplate:'#template'
};
const allPopups = document.querySelectorAll(dataNamingConfig.popups);
const popupForms = document.querySelectorAll(dataConfig.formSelector);
const closeEdit = document.querySelector(dataNamingConfig.closeEdit);
const closePlace = document.querySelector(dataNamingConfig.closePlace);
const edit = document.querySelector(dataNamingConfig.edit);
const place = document.querySelector(dataNamingConfig.place);
const editButton = document.querySelector(dataNamingConfig.editButton);
const addButton = document.querySelector(dataNamingConfig.addButton);
const profileFullName = document.querySelector(dataNamingConfig.profileFullName);
const profileProfesion = document.querySelector(dataNamingConfig.profileProfesion);
const popupImage = document.querySelector(dataNamingConfig.popupImage);
const popupImageTitle = document.querySelector(dataNamingConfig.popupImageTitle);
const popupImageButton = document.querySelector(dataNamingConfig.popupImageButton);
const popupImageArt = document.querySelector(dataNamingConfig.popupImageArt);
const elementsUnorderedList = document.querySelector(dataNamingConfig.elementsUnorderedList);
//Инпуты
const editFullName = document.querySelector(dataNamingConfig.editFullName);
const editProfesion = document.querySelector(dataNamingConfig.editProfesion);
const inputPlaceName = document.querySelector(dataNamingConfig.inputPlaceName);
const inputUrl = document.querySelector(dataNamingConfig.inputUrl);
//Формы
const formFullName = document.querySelector(dataNamingConfig.formFullName);
const formNewPlace = document.querySelector(dataNamingConfig.formNewPlace);
//Темплайет
const template = document.querySelector(dataNamingConfig.elementTamplate).content;
//Карточки
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

//Создание карточки
const createCard = (element) => {    
    const card = new Card(element, template , handleImageClick , dataTemplate);
    const cardElement = card.createElements();
    return cardElement;
}

//Валидность формы
const createValidForm = (formElement) => {
    const validForm = new FormValidator(dataConfig, formElement);
    return validForm;
}

//Очистка
const  resetValidForm = () => {
    popupForms.forEach((formElement) => {
        const validForm = createValidForm(formElement);
        validForm.resetValidation();
    });
};

//Добавление карточки в список
const addElement = (container, element) => { 
    container.prepend(element);
};

//Добавление карточек
initialCards.forEach((element) => {
    addElement(elementsUnorderedList, createCard(element));
});

// Валидация
const validation = () => {
    popupForms.forEach((formElement) => {
        const validForm = createValidForm(formElement)
        validForm.enableValidation();
    });
}

//Открытие попапа
const  openPopup = (popup) => {
    resetValidForm();
    popup.classList.add(dataNamingConfig.openPopup);
    document.addEventListener("keydown", closeByEsc);
}

//Закрытие попапа
const  closePopup = (popup) => {
    popup.classList.remove(dataNamingConfig.openPopup);
    document.removeEventListener("keydown", closeByEsc);
}

//Открытие попапа профиля
const openProfileForm = () =>{
    openPopup(edit);
    validation();
    editFullName.value = profileFullName.textContent;
    editProfesion.value = profileProfesion.textContent;
}

//Сохранить для профиля
const handleSubmitClick = (event) =>{
    event.preventDefault(); 
    profileFullName.textContent = editFullName.value;
    profileProfesion.textContent = editProfesion.value;
    closePopup(edit);
    formFullName.reset();
}

function handleImageClick(name, link) {
    popupImageArt .src = link;
    popupImageTitle.textContent = name;
    popupImageArt .alt = name;

    openPopup(popupImage);
}

//Сохранить для места
const handleCardFormSubmit  = (event) =>{
    event.preventDefault();
    const element = {
        link: inputUrl.value,
        name: inputPlaceName.value
    };
    addElement(elementsUnorderedList, createCard(element));
    formNewPlace.reset();
    closePopup(place);
}

//Слушатели
closePlace.addEventListener('click',() => {
    closePopup(place);
})
closeEdit.addEventListener('click',() => {
    closePopup(edit);
})
editButton.addEventListener('click',openProfileForm)
formFullName.addEventListener('submit',handleSubmitClick)
formNewPlace.addEventListener('submit',handleCardFormSubmit)
addButton.addEventListener('click',() => {
    openPopup(place);
    validation();
})
popupImageButton.addEventListener('click',() => {
    closePopup(popupImage);
})

//esc нажатие
const closeByEsc = (event) => {
    if (event.key == "Escape") {
        const popupOpened = document.querySelector(`.${dataNamingConfig.openPopup}`); 
        closePopup(popupOpened);
    }
};

//клик оверлей
allPopups.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
    if (
        event.target.classList.contains(dataNamingConfig.popup) || event.target.classList.contains(dataNamingConfig.popupCloseIcon)
    ) {
        closePopup(element);
    }
    });
});
