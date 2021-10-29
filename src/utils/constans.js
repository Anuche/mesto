const active = new URL("../images/active.svg", import.meta.url);
const addlogomini = new URL("../images/add-logo-mini.svg",import.meta.url);
const closeiconmini = new URL("../images/Close-Icon-mini.svg", import.meta.url);
const closeicon = new URL("../images/Close-Icon.svg", import.meta.url);
const daletebuttonbot = new URL("../images/delete-button-bot.svg", import.meta.url);
const daletebuttontop = new URL("../images/delete-button-top.svg", import.meta.url);
const daletebutton = new URL("../images/delete-button.svg", import.meta.url);
const editbuttonmini = new URL("../images/edit-button-mini.svg", import.meta.url);
const editbutton = new URL("../images/edit-button.svg", import.meta.url);
const group = new URL("../images/Group.svg", import.meta.url);
const logo = new URL("../images/logo.svg", import.meta.url);
const vectormini = new URL("../images/Vector-mini.svg", import.meta.url);
const vector = new URL("../images/Vector.svg", import.meta.url);
const imagedef = new URL("../images/image.jpg", import.meta.url);
const image1 = new URL("../images/kirill-pershin-1088404-unsplash.jpg", import.meta.url);
const image2 = new URL("../images/kirill-pershin-1404681-unsplash.jpg", import.meta.url);
const image3 = new URL("../images/kirill-pershin-1556355-unsplash.jpg", import.meta.url);

export const whoIsTheGoat = [
    // меняем исходные пути на переменные
    { name: "active", image: active},

    { name: "addlogomini", image: addlogomini },
    { name: "closeiconmini", image: closeiconmini },
    { name: "closeicon", image: closeicon },
    { name: "daletebuttonbot", image: daletebuttonbot },
    { name: "daletebuttontop", image: daletebuttontop },
    { name: "daletebutton", image: daletebutton },
    { name: "editbuttonmini", image: editbuttonmini },
    { name: "editbutton", image: editbutton },
    { name: "group", image: group },
    { name: "logo", image: logo },
    { name: "vectormini", image: vectormini },
    { name: "imagedef", link: imagedef },
    { name: "vector", link: vector },
    { name: "image1", link: image1 },
    { name: "image2", link: image2 },
    { name: "image3", link: image3 },
];

export const dataConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__filed',
    submitButtonSelector: '.popup__submit-button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
};
export const dataTemplate = {
    element:'.element',
    elementImage:'.element__image',
    elementDaleteButton:'.element__delete-button',
    elementTitle:'.element__title',
    elementLogo:'.element__logo',
    elementLogoActive:'element__logo_active',
};
export const dataNamingConfig ={
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
    profileFullName:'.profile__fullname',
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
// export const allPopups = document.querySelectorAll(dataNamingConfig.popups);
export const edit = document.querySelector(dataNamingConfig.edit);
export const place = document.querySelector(dataNamingConfig.place);
export const editButton = document.querySelector(dataNamingConfig.editButton);
export const addButton = document.querySelector(dataNamingConfig.addButton);
export const profileFullName = document.querySelector(dataNamingConfig.profileFullName);
export const profileProfesion = document.querySelector(dataNamingConfig.profileProfesion);
// export const popupImage = document.querySelector(dataNamingConfig.popupImage);
// export const popupImageTitle = document.querySelector(dataNamingConfig.popupImageTitle);
// export const popupImageArt = document.querySelector(dataNamingConfig.popupImageArt);
// export const elementsUnorderedList = document.querySelector(dataNamingConfig.elementsUnorderedList);
// //Инпуты
export const editFullName = document.querySelector(dataNamingConfig.editFullName);
export const editProfesion = document.querySelector(dataNamingConfig.editProfesion);
// export const inputPlaceName = document.querySelector(dataNamingConfig.inputPlaceName);
// export const inputUrl = document.querySelector(dataNamingConfig.inputUrl);
// //Формы
// export const formFullName = document.querySelector(dataNamingConfig.formFullName);
// export const formNewPlace = document.querySelector(dataNamingConfig.formNewPlace);
// //Темплайет
export const template = document.querySelector(dataNamingConfig.elementTamplate).content;

//Карточки
export const initialCards = [
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
