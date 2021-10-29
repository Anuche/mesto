export class UserInfo {
    constructor({ nameUsers,informUsers}) {
        this._nameUsers = nameUsers;
        this._informUsers = informUsers;
    }
    getUserInfo() {
        const dataUser = {};
        dataUser.name = this._nameUsers.textContent;
        dataUser.job = this._informUsers.textContent;
        return dataUser;
    }

    setUserInfo(data) {
        this._nameUsers.textContent = data.fullname;
        this._informUsers.textContent = data.profesion};
    }