export class Section {
    constructor({ items, renderer }, container) {
    this._renderer = renderer;
    this._items = items;
    this._container = document.querySelector(container);
    }

    //Добавление карточек
    renderItems() {
    this._items.forEach((items) => {
        this._renderer(items);
    });
    }

    //Добавление карточки в список
    addItem(element) {
    this._container.prepend(element);
    }
}