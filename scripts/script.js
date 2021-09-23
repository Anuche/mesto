const allPopups = document.querySelectorAll('.popup');
const errorMassages = document.querySelectorAll('.error');
const closeEdit = document.querySelector('.close-edit');
const closePlace = document.querySelector('.close-place');
const edit = document.querySelector('.popup_type_profile');
const place = document.querySelector('.popup_type_place');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileFullName = document.querySelector('.profile__full-name');
const profileProfesion = document.querySelector('.profile__profesion');
const popupImage = document.querySelector('.popup_type_image');
const popupImageTitle = document.querySelector('.popup__title_image');
const popupImageButton = document.querySelector('.popup__close-icon_image');
const popupImageArt = document.querySelector('.popup__image');
const elementsUnorderedList = document.querySelector('.elements__unordered-list');
//Инпуты
const editFullName = document.querySelector('#input-full-name');
const editProfesion = document.querySelector('#input-profesion');
const inputPlaceName = document.querySelector('#input-place-name');
const inputUrl = document.querySelector('#input-url');
//Формы
const formFullName = document.querySelector('.form-profile');
const formNewPlace = document.querySelector('.form-place');
//Темплайет
const template = document.querySelector('#template').content;

const dataConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__filed',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};

//Открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", closeByEsc);
}

//Закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener("keydown", closeByEsc);
}

//Открытие попапа профиля
const openProfileForm = () =>{
    clearingErrorFields(edit);
    openPopup(edit);
    editFullName.value = profileFullName.textContent;
    editProfesion.value = profileProfesion.textContent;
}

//Сохранить для профиля
const handleSubmitClick = (event) =>{
    event.preventDefault(); 
    profileFullName.textContent = editFullName.value;
    profileProfesion.textContent = editProfesion.value;
    closePopup(edit);
}

//Сохранить для места
const handleCardFormSubmit  = (event) =>{
    event.preventDefault();
    addElement(elementsUnorderedList, createElements({
        link: inputUrl.value,
        name: inputPlaceName.value
    }));
    formNewPlace.reset();
    closePopup(place);
    const inputList = Array.from(place.querySelectorAll(dataConfig.inputSelector));
    const buttonElement = place.querySelector(dataConfig.submitButtonSelector);
    toggleButtonState (inputList, buttonElement, dataConfig.inactiveButtonClass);
}


//Лайки
const handleLikeIcon = (event) => {
    event.target.classList.toggle('element__logo_active');
}

//Удаление
const handleDeleteCard = (event) =>{
    event.target.closest('.element').remove();
}

//Создание карточки
const createElements = (element) => {
    const templatePlace = template.querySelector('.element').cloneNode(true);
    const popupOpenButton = templatePlace.querySelector('.element__image');
    templatePlace.querySelector('.element__image').src = element.link;
    templatePlace.querySelector('.element__image').alt = element.name;
    templatePlace.querySelector('.element__title').textContent = element.name;
    templatePlace.querySelector('.element__delete-button').addEventListener('click', handleDeleteCard);
    templatePlace.querySelector('.element__logo').addEventListener('click', handleLikeIcon);

     //Слушатель клик и присваивающий попапу-изображения - атрибуты 
    popupOpenButton.addEventListener('click', () => { 
        popupImageArt.src = element.link;
        popupImageArt.alt = element.name;
        popupImageTitle.textContent = element.name;
        openPopup(popupImage); 
    });
    return templatePlace;
};

//Добавление карточки в список
const addElement = (container, element) => { 
    container.prepend(element);
};

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
    clearingErrorFields(place);
    openPopup(place);
})
popupImageButton.addEventListener('click',() => {
    closePopup(popupImage);
})
//esc нажатие
const closeByEsc = (event) => {
    if (event.key == "Escape") {
        const popupOpened = document.querySelector('.popup_opened'); 
        closePopup(popupOpened);
    }
};
//клик оверлей
allPopups.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
    if (
        event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')
    ) {
        closePopup(element);
    }
    });
});
//убираем элементы ошибки и очищаем форму
const clearingErrorFields = (form, formConfig) => {
    formConfig = dataConfig;
    const inputElements = form.querySelectorAll(formConfig.inputSelector);
    const formReset = form.querySelector('.form');
    inputElements.forEach((data) => {
        data.classList.remove(formConfig.inputErrorClass);
        form.querySelector(`.${data.id}-error`).classList.remove(formConfig.errorClass);
    });
    formReset.reset();
}