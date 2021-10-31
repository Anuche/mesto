import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(PopupSelector) {
    super(PopupSelector);
    this._imageTitle = this._PopupSelector.querySelector(".popup__title_image");
    this._image = this._PopupSelector.querySelector(".popup__image");
  }

  openPopup({ name, link }) {
    this._image.src = link;
    this._image.alt = name;
    this._imageTitle.textContent = name;
    super.setEventListeners();
    super.open();
  }
}
