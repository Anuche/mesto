export class Api {
  constructor({ adress, headers }) {
    this._adress = adress;
    this._headers = headers;
  }
  // конструктор get запроса
  _get(query) {
    const options = {
      headers: this._headers,
    };
    return fetch(this._url(query), options).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }
  // конструктор всех запросов кроме get
  _set(query, method, bode) {
    const options = {
      method,
      headers: this._headers,
      body: JSON.stringify(bode),
    };
    return fetch(this._url(query), options).then((res) =>
      res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
    );
  }
  _url(query) {
    return `${this._adress}/${query}`;
  }
  //Пользователь(имя,работа,аватар)
  getUserInfo() {
    return this._get("users/me");
  }
  //замена имини пользователя и професии (не получилось компактно)
  putchUserInfo(data) {
    return fetch(`${this._adress}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.fullname,
        about: data.profesion,
      }),
    }).then((res) => {
      return this._responseServer(res);
    });
  }
  //замена аватара (не получилось компактно)
  putchUserInfoAvatar(data) {
    return fetch(`${this._adress}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((res) => {
      return this._responseServer(res);
    });
  }
  //функция ответа от сервера для не компактных методов
  _responseServer(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  //Карточки
  getCardList() {
    return this._get("cards");
  }
  addCard(data) {
    return this._set("cards", "POST", data);
  }
  removeCard(id) {
    return this._set(`cards/${id}`, "DELETE");
  }
  updateCardLike(id, liked) {
    return this._set(`cards/likes/${id}`, liked ? "PUT" : "DELETE");
  }
  //массив для предзагрузки
  getAppInfo() {
    return Promise.all([this.getUserInfo(), this.getCardList()]);
  }
}
