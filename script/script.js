const allPopup = document.querySelectorAll('.popup');
const errorMassage = document.querySelectorAll('.error');
const closeEdit = document.querySelector('.close-edit');
const closePlace = document.querySelector('.close-place');
const edit = document.querySelector('.popup_profile');
const place = document.querySelector('.popup_place');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileFullName = document.querySelector('.profile__full-name');
const profileProfesion = document.querySelector('.profile__profesion');
const popupImage = document.querySelector('.popup-image');
const popupImageTitle = document.querySelector('.popup-image__title');
const popupImageButton = document.querySelector('.popup-image__close-button');
const popupImageArt = document.querySelector('.popup-image__image');
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
    formSelector: ".popup__form",
    inputSelector: ".popup__filed",
    submitButtonSelector: ".popup__submit-button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
};

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
//Открытие попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener("keydown", keydownEscape);
}

//Закрытие попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
    clearingErrorFields(popup); 
}

//Открытие попапа профиля
const openForm = () =>{
    openPopup(edit);
    editFullName.value = profileFullName.textContent;
    editProfesion.value = profileProfesion.textContent;
}

//Сохранить для профиля
const submitClick = (event) =>{
    event.preventDefault(); 
    profileFullName.textContent = editFullName.value;
    profileProfesion.textContent = editProfesion.value;
    closePopup(edit);
}

//Сохранить для места
const popupFormImage  = (event) =>{
    event.preventDefault(); 
    addElement(elementsUnorderedList, createElements({
        link: inputUrl.value,
        name: inputPlaceName.value
    }));
    formNewPlace.reset();
    closePopup(place);
}


//Лайки
const clickElementLogo = (event) => {
    event.target.classList.toggle('element__logo_active')
}

//Удаление
const clickDeleteButton = (event) =>{
    event.target.closest('.element').remove();
}

//Создание карточки
const createElements = (element) => {
    const templatePlace = template.querySelector('.element').cloneNode(true);
    const popupOpenButton = templatePlace.querySelector('.element__image');
    templatePlace.querySelector('.element__image').src = element.link;
    templatePlace.querySelector('.element__image').alt = element.name;
    templatePlace.querySelector('.element__title').textContent = element.name;
    templatePlace.querySelector('.element__delete-button').addEventListener('click', clickDeleteButton);
    templatePlace.querySelector('.element__logo').addEventListener('click', clickElementLogo);

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

//Карточки из массива
initialCards.forEach((element) => {
    addElement(elementsUnorderedList, createElements(element));
});

//Слушатели
closePlace.addEventListener('click',() => {
    closePopup(place)
})
closeEdit.addEventListener('click',() => {
    closePopup(edit)
})
editButton.addEventListener('click',openForm)
formFullName.addEventListener('submit',submitClick)
formNewPlace.addEventListener('submit',popupFormImage)
addButton.addEventListener('click',() => {
    openPopup(place)
})
popupImageButton.addEventListener('click',() => {
    closePopup(popupImage)
})
//esc нажатие
const keydownEscape = (event) => {
    if (event.key == "Escape") {
        const popupOpened = document.querySelector('.popup_opened'); 
        closePopup(popupOpened);
    }
};
//клик оверлей
allPopup.forEach((element) => {
    element.addEventListener('mousedown', (event) => {
    if (
        event.target.classList.contains('popup') || event.target.classList.contains('popup__close-icon')
    ) {
        closePopup(element);
    }
    });
});
//При условие , что это не попап изображения , убираем элементы ошибки и очищаем форму
const clearingErrorFields = (event) => {
    if (!event.classList.contains('popup-image')) {
    const inputElement = event.querySelectorAll('.popup__filed');
    const formReset = event.querySelector('.form');
    inputElement.forEach((data) => {
        data.classList.remove(dataConfig.inputErrorClass);
        event.querySelector(`.${data.id}-error`).classList.remove(dataConfig.errorClass);
    });
    formReset.reset();
    }
}