export class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  //Добавление карточек
  renderItems(data) {
    data.reverse();
    data.forEach((items) => {
      this._renderer(items);
    });
  }

  //Добавление карточки в список
  addItem(element) {
    this._container.prepend(element);
  }
}
