const active = new URL("../images/active.svg", import.meta.url);
const addlogomini = new URL("../images/add-logo-mini.svg", import.meta.url);
const closeiconmini = new URL("../images/Close-Icon-mini.svg", import.meta.url);
const closeicon = new URL("../images/Close-Icon.svg", import.meta.url);
const daletebuttonbot = new URL(
  "../images/delete-button-bot.svg",
  import.meta.url
);
const daletebuttontop = new URL(
  "../images/delete-button-top.svg",
  import.meta.url
);
const daletebutton = new URL("../images/delete-button.svg", import.meta.url);
const editbuttonmini = new URL(
  "../images/edit-button-mini.svg",
  import.meta.url
);
const editbutton = new URL("../images/edit-button.svg", import.meta.url);
const group = new URL("../images/Group.svg", import.meta.url);
const logo = new URL("../images/logo.svg", import.meta.url);
const vectormini = new URL("../images/Vector-mini.svg", import.meta.url);
const vector = new URL("../images/Vector.svg", import.meta.url);
const imagedef = new URL("../images/image.jpg", import.meta.url);

export const whoIsTheGoat = [
  // меняем исходные пути на переменные
  { name: "active", image: active },

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
];

export const dataConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__filed",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
export const dataTemplate = {
  element: ".element",
  elementImage: ".element__image",
  elementDaleteButton: ".element__delete-button",
  elementTitle: ".element__title",
  elementLogo: ".element__logo",
  elementLogoActive: "element__logo_active",
  elementOpen: "popup_opened",
  elementDaleteButtonVisibile: "element__delete-button_visible",
  elementDaleteButtonHidden: "element__delete-button_hidden",
  elementNumberOfLikes: ".element__number-of-likes",
};
export const dataNamingConfig = {
  formFullName: ".form-profile",
  formNewPlace: ".form-place",
  editFullName: "#input-full-name",
  editProfesion: "#input-profesion",
  inputPlaceName: "#input-place-name",
  inputUrl: "#input-url",
  popups: ".popup",
  errorMassages: ".error",
  closeEdit: ".close-edit",
  closePlace: ".close-place",
  edit: ".popup_type_profile",
  place: ".popup_type_place",
  avatar: ".popup_type_new-avatar",
  confirmation: ".popup_type_confirmation",
  editButton: ".profile__edit-button",
  addButton: ".profile__add-button",
  logoButton: ".profile__logo",
  profileFullName: ".profile__fullname",
  profesionAvatar: ".profile__image",
  profileProfesion: ".profile__profesion",
  profileImage: ".profile__image",
  popupImage: ".popup_type_image",
  popupImageTitle: ".popup__title_image",
  popupImageButton: ".popup__close-icon_image",
  popupImageArt: ".popup__image",
  elementsUnorderedList: ".elements__unordered-list",
  popup: "popup",
  popupCloseIcon: "popup__close-icon",
  openPopup: "popup_opened",
  elementTamplate: "#template",
  popupConfirmation: ".popup_type_confirmation",
};

export const edit = document.querySelector(dataNamingConfig.edit);
export const place = document.querySelector(dataNamingConfig.place);
export const avatar = document.querySelector(dataNamingConfig.avatar);
export const confirmation = document.querySelector(
  dataNamingConfig.confirmation
);
export const editButton = document.querySelector(dataNamingConfig.editButton);
export const addButton = document.querySelector(dataNamingConfig.addButton);
export const logoButton = document.querySelector(dataNamingConfig.logoButton);
export const daleteButton = document.querySelector(
  dataTemplate.elementDaleteButton
);
export const profileAvatar = document.querySelector(
  dataNamingConfig.profesionAvatar
);
export const profileFullName = document.querySelector(
  dataNamingConfig.profileFullName
);
export const profilelogo = document.querySelector(
  dataNamingConfig.profileImage
);
export const profileProfesion = document.querySelector(
  dataNamingConfig.profileProfesion
);
// //Инпуты
export const editFullName = document.querySelector(
  dataNamingConfig.editFullName
);
export const editProfesion = document.querySelector(
  dataNamingConfig.editProfesion
);
// //Темплайет
export const template = document.querySelector(
  dataNamingConfig.elementTamplate
).content;
