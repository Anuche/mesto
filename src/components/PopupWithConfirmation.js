import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._PopupSelector.querySelector(".form");
  }

  setSubmitHandler(handleSubmit) {
    this._handleSubmit = handleSubmit;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();

      this._handleSubmit();
    });
  }
}
