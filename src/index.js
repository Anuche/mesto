//Импорт
import './pages/index.css';

import { Card } from "./scripts/Card.js"; 

import { FormValidator } from "./scripts/FormValidator.js"; 

import { Section } from "./scripts/Section.js";

import { PopupWithImage } from "./scripts/PopupWithImage.js";

import { PopupWithForm } from "./scripts/PopupWithForm.js";

import { UserInfo } from "./scripts/UserInfo.js";

import {
    dataConfig,
    dataTemplate,
    dataNamingConfig,
    initialCards,
    editButton,
    profileFullName,
    profileProfesion,
    editFullName,
    editProfesion,
    addButton,
    edit,
    place,
    template
} from './utils/constans.js';

//Функция открытия попапа с изображением
const openImage = new PopupWithImage(dataNamingConfig.popupImage);

function handleImageClick(name, link) {
const data = {
    name,
    link,
};

openImage.openPopup(data);
}
//Данные пользователя
const userInfo = new UserInfo({
    nameUsers:profileFullName,
    informUsers:profileProfesion
});


//Функция генерации карточек
const cardPost = new Section({
    items: initialCards,
    renderer: function (element) {
        renderCard(element);
    }
    },
    dataNamingConfig.elementsUnorderedList
);

function renderCard(element){
    const card = createCard(element);
    const cardElement = card.createElements();
    cardPost.addItem(cardElement);
}
//Создание карточки
const createCard = (element) => {    
    const card = new Card(element, template , handleImageClick , dataTemplate);
    return card;
}
//Отрисовка карточек из массива
cardPost.renderItems();

//Генерация карточек из попапа
const validFormPlace = new FormValidator(dataConfig, place);

//Включение валидации
validFormPlace.enableValidation();

//Попап с созданием карточек
const popupSubmitCard = new PopupWithForm(
    dataNamingConfig.place,
    (element) => {
        renderCard(element);
}
);

popupSubmitCard.setEventListeners();

function openCard() {
    validFormPlace.resetValidation();
    popupSubmitCard.openPopup();
}

addButton.addEventListener("click", openCard);

//Попап с редактированием имени и работы
const popupSubmit = new PopupWithForm(
    dataNamingConfig.edit,
    (data) => {
    userInfo.setUserInfo(data);
    }
);

const validFormEdit = new FormValidator(dataConfig, edit);

validFormEdit.enableValidation();

popupSubmit.setEventListeners();
function openProfilePopup() {
    validFormEdit.resetValidation();
    const data = userInfo.getUserInfo();
    editProfesion.value = data.job;
    editFullName.value = data.name;

popupSubmit.openPopup();
}

editButton.addEventListener("click", openProfilePopup); 