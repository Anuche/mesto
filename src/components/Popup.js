export class Popup {
  constructor(popupSelector) {
    this._PopupSelector = document.querySelector(popupSelector);
    this._openPopupClass = "popup_opened";
    this._popupButtonClose = "popup__close-icon";
    this._popup = "popup";
    this._closeEsc = this._closeByEsc.bind(this);
  }

  //Открытие попапа
  open() {
    this._PopupSelector.classList.add(this._openPopupClass);
    document.addEventListener("keydown", this._closeEsc);
  }

  //Закрытие попапа
  close() {
    this._PopupSelector.classList.remove(this._openPopupClass);
    document.removeEventListener("keydown", this._closeEsc);
  }

  //esc нажатие
  _closeByEsc(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this._PopupSelector.addEventListener("mousedown", (event) => {
      if (
        event.target.classList.contains(this._popup) ||
        event.target.classList.contains(this._popupButtonClose)
      ) {
        this.close();
      }
    });
  }
}
