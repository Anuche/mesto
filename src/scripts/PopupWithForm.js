import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
constructor(PopupSelector, callback) {
    super(PopupSelector);
    this._PopupSelector = document.querySelector(PopupSelector);
    this._callback = callback;
    this.form = this._PopupSelector.querySelector(".form");
    this._inputData = this.form.querySelectorAll(".popup__filed");

}
//кажись тут
//_ должно быть

_getInputValues() {
    const formInfo = {};
    this._inputData.forEach((element) => {
    formInfo[element.name] = element.value;
    });
    return formInfo;
}

setEventListeners() {
    this.form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    this._callback(this._getInputValues()); //function (this._getInputValues()){ содержимое для обработки forminfo }
    this.closePopup();
    }); // отправка формы
    super.setEventListeners();
}

closePopup() {
    super.closePopup();
    this.form.reset();
}
}