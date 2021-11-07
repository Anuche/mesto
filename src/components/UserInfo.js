export class UserInfo {
  constructor({ nameUsers, informUsers, urlAvatar }) {
    this._nameUsers = nameUsers;
    this._informUsers = informUsers;
    this._urlAvatar = urlAvatar;
  }
  getUserInfo() {
    const dataUser = {};
    dataUser.name = this._nameUsers.textContent;
    dataUser.job = this._informUsers.textContent;
    return dataUser;
  }
  //Для имени пользователя и работы
  setUserInfo(data) {
    if (data.name) this._nameUsers.textContent = data.name;
    if (data.job) this._informUsers.textContent = data.job;
  }
  //для аватара
  setAvatarInfo(data) {
    if (data.avatarUser) this._urlAvatar.src = data.avatarUser;
  }
}
