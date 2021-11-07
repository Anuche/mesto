export class Card {
  constructor(
    data,
    userId,
    cardSelector,
    handleImageClick,
    handleLike,
    handleRemove,
    dataTemplate
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._userId = userId;
    this._ownerId = data.owner._id;

    this._cardSelector = cardSelector;
    //элементы
    this._element = dataTemplate.element;
    this._elementImage = dataTemplate.elementImage;
    this._elementDaleteButton = dataTemplate.elementDaleteButton;
    this._elementTitle = dataTemplate.elementTitle;
    this._elementLogo = dataTemplate.elementLogo;
    this._elementLogoActive = dataTemplate.elementLogoActive;
    this._elementOpen = dataTemplate.elementOpen;
    this._daleteButtonVisibile = dataTemplate.elementDaleteButtonVisibile;
    this._daleteButtonHidden = dataTemplate.elementDaleteButtonHidden;
    this._elementNumberOfLikes = dataTemplate.elementNumberOfLikes;
    //функции
    this._handleImageClick = handleImageClick;
    this._handleLike = handleLike;
    this._handleRemove = handleRemove;
  }

  //Элемент из темплейта
  _getTemplate() {
    const element = this._cardSelector
      .querySelector(this._element)
      .cloneNode(true);
    return element;
  }
  // удаление из верстки карточки
  remove() {
    this._element.remove();
    this._element = null;
  }

  //Создание карточки
  createElements() {
    this._element = this._getTemplate();
    //при совпадение id сделать видимой кнопку удаления карточки
    this._daleteButton = this._element
      .querySelector(this._elementDaleteButton)
      .classList.add(
        this._userId === this._ownerId
          ? this._daleteButtonVisibile
          : this._daleteButtonHidden
      );
    this._cardImage = this._element.querySelector(this._elementImage);
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(this._elementTitle).textContent = this._name;
    this._likeButtonElement = this._element.querySelector(this._elementLogo);
    this._element.querySelector(this._elementNumberOfLikes).textContent =
      this._likes.length;
    this._updateLikes();
    this._setEventListeners();
    return this._element;
  }

  //Слушатели
  _setEventListeners() {
    //Слушатель удаления
    this._element
      .querySelector(this._elementDaleteButton)
      .addEventListener("click", () => this._handleRemove(this));
    //Слушатель лайка
    this._likeButtonElement.addEventListener("click", () =>
      this._handleLike(this)
    );
    //Открытие попап-изображения через нажатия на картинку
    this._element
      .querySelector(this._elementImage)
      .addEventListener("click", () => {
        this._handleImageClick(this._name, this._link);
      });
  }

  // запись колличечства лайков и активации кнопки лайка при условии isLiked
  _updateLikes() {
    this._element.querySelector(this._elementNumberOfLikes).textContent =
      this._likes.length;

    if (this.isLiked()) {
      this._likeButtonElement.classList.add(this._elementLogoActive);
    } else {
      this._likeButtonElement.classList.remove(this._elementLogoActive);
    }
  }
  // булевое условие совпадения
  isLiked() {
    return Boolean(this._likes.find((user) => user._id === this._userId));
  }
  //лайк
  setLikes(likes) {
    this._likes = likes;
    this._updateLikes();
  }
  //id
  getId() {
    return this._id;
  }
}
