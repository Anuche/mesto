import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._PopupSelector = document.querySelector(popupSelector);
    this._callback = callback;
    this.form = this._PopupSelector.querySelector(".form");
    this._inputData = this.form.querySelectorAll(".popup__filed");
  }

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
      this._callback(this._getInputValues());
    }); // отправка формы
    super.setEventListeners();
  }

  close() {
    super.close();
    this.form.reset();
  }
}
