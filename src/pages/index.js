//Импорт
import "./index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import {
  dataConfig,
  dataTemplate,
  dataNamingConfig,
  editButton,
  profileFullName,
  profileProfesion,
  profileAvatar,
  editFullName,
  editProfesion,
  addButton,
  edit,
  place,
  avatar,
  confirmation,
  template,
  logoButton,
} from "../utils/constants.js";
let userId = null;

//Генерация Апи
const api = new Api({
  adress: "https://mesto.nomoreparties.co/v1/cohort-29",
  headers: {
    authorization: "777d047d-0035-4f0a-bbc4-2cd11ccae3d4",
    "Content-Type": "application/json",
  },
});

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
  nameUsers: profileFullName,
  informUsers: profileProfesion,
  urlAvatar: profileAvatar,
});

//Функция генерации карточек
const cardPost = new Section(function (element) {
  renderCard(element);
}, dataNamingConfig.elementsUnorderedList);

//Предварительная загрузка с сервера
api
  .getAppInfo()
  .then(([infoUser, initalCards]) => {
    userId = infoUser._id;
    userInfo.setUserInfo({ name: infoUser.name, job: infoUser.about });
    userInfo.setAvatarInfo({ avatarUser: infoUser.avatar });
    cardPost.renderItems(initalCards);
  })
  .catch((err) => {
    console.log(`Не удалось отрисовать страницу: ${err}`);
  });

//функция создания новой карточки , её сборка и добавление
function renderCard(element) {
  const card = createCard(element);
  const cardElement = card.createElements();
  cardPost.addItem(cardElement);
}

//создание формы подтверждения
const removeCardPopup = new PopupWithConfirmation(
  dataNamingConfig.popupConfirmation
);

//слушатель для формы подтверждения
removeCardPopup.setEventListeners();

//изменения текста ,для загрузки
function lodingTextContent(popup, text) {
  const button = popup.querySelector(".popup__submit-button");
  button.textContent = text;
}

//Создание карточки
function createCard(element) {
  const card = new Card(
    element,
    userId,
    template,
    handleImageClick,
    function handleLike(card) {
      api
        .updateCardLike(card.getId(), !card.isLiked())
        .then((data) => card.setLikes(data.likes))
        .catch((err) =>
          console.log(`Не удалось изменить состояние лайка: ${err}`)
        );
    },
    function handleRemove(card) {
      removeCardPopup.open();
      removeCardPopup.setSubmitHandler(() => {
        lodingTextContent(confirmation, "Удаление...");

        api
          .removeCard(card.getId())
          .then(() => {
            card.remove();
            removeCardPopup.close();
          })
          .catch((err) => console.log(`Не удалось удалить карточку: ${err}`))
          .finally(() => {
            lodingTextContent(confirmation, "Да");
          });
      });
    },
    dataTemplate
  );
  return card;
}

//Генерация карточек из попапа
const validFormPlace = new FormValidator(dataConfig, place);

//Включение валидации
validFormPlace.enableValidation();

//Попап с созданием карточек
const popupSubmitCard = new PopupWithForm(dataNamingConfig.place, (element) => {
  lodingTextContent(place, "Сохранение...");

  api
    .addCard(element)
    .then((element) => {
      renderCard(element);
      popupSubmitCard.close();
    })
    .catch((err) => console.log(`Не удалось сохранить карточку: ${err}`))
    .finally(() => {
      lodingTextContent(place, "Создать");
    });
});

//Слушатель
popupSubmitCard.setEventListeners();

//сброс валидации и открытие попапа
function openCard() {
  validFormPlace.resetValidation();
  popupSubmitCard.open();
}

//добавление слушателя события
addButton.addEventListener("click", openCard);

//Попап новый ававтар
const popupSubmitAvatar = new PopupWithForm(
  dataNamingConfig.avatar,
  (element) => {
    lodingTextContent(avatar, "Сохранение...");
    api
      .putchUserInfoAvatar(element)
      .then((element) => {
        userInfo.setAvatarInfo({ avatarUser: element.avatar });
        userId = element._id;
        popupSubmitAvatar.close();
      })
      .catch((err) => console.log(`Не удалось изменить аватар: ${err}`))
      .finally(() => {
        lodingTextContent(avatar, "Сохранить");
      });
  }
);

popupSubmitAvatar.setEventListeners();

const validFormAvatar = new FormValidator(dataConfig, avatar);

validFormAvatar.enableValidation();

function openLogo() {
  validFormAvatar.resetValidation();
  popupSubmitAvatar.open();
}

logoButton.addEventListener("click", openLogo);

//Попап с редактированием имени и работы
const popupSubmit = new PopupWithForm(dataNamingConfig.edit, (element) => {
  lodingTextContent(avatar, "Сохранение...");
  api
    .putchUserInfo(element)
    .then((element) => {
      userInfo.setUserInfo({ name: element.name, job: element.about });
      popupSubmit.close();
    })
    .catch((err) => console.log(`Не удалось изменить имя и работу: ${err}`))
    .finally(() => {
      lodingTextContent(avatar, "Сохранить");
    });
});

const validFormEdit = new FormValidator(dataConfig, edit);

validFormEdit.enableValidation();

popupSubmit.setEventListeners();

function openProfilePopup() {
  validFormEdit.resetValidation();
  const data = userInfo.getUserInfo();
  editProfesion.value = data.job;
  editFullName.value = data.name;

  popupSubmit.open();
}

editButton.addEventListener("click", openProfilePopup);
