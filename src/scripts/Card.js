export class Card {
    constructor(data, cardSelector ,handleImageClick, dataTemplate) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;

    this._element = dataTemplate.element;
    this._elementImage = dataTemplate.elementImage;
    this._elementDaleteButton = dataTemplate.elementDaleteButton;
    this._elementTitle = dataTemplate.elementTitle;
    this._elementLogo = dataTemplate.elementLogo;
    this._elementLogoActive = dataTemplate.elementLogoActive;

    this._handleImageClick = handleImageClick;    
    }

    //Элемент из темплейта
    _getTemplate() {
        const element = this._cardSelector.querySelector(this._element).cloneNode(true);
        return element;
    }
    //Удаление
    _handleDeleteCard = (event) =>{
        event.target.closest(this._element).remove();
    }

    //Лайки
    _handleLikeIcon = (event) => {
        event.target.classList.toggle(this._elementLogoActive);
    }

    //Слушатели
    _setEventListeners() {
        //Слушатель удаления 
        this._elements
        .querySelector(this._elementDaleteButton)
        .addEventListener("click", (event) => {
            this._handleDeleteCard(event);
        });
        //Слушатель лайка
        this._elements
        .querySelector(this._elementLogo)
        .addEventListener("click", (event) => {
            this._handleLikeIcon(event);
        });
        //Открытие попап-изображения через нажатия на картинку
        this._elements
        .querySelector(this._elementImage)
        .addEventListener("click", () => {
            this._handleImageClick(this._name, this._link);
        });
    }
    
    //Создание карточки
    createElements() {

    this._elements = this._getTemplate();
    this._cardImage = this._elements.querySelector(this._elementImage);
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._elements.querySelector(this._elementTitle).textContent = this._name;
    this._setEventListeners();

    return this._elements;
    };
}