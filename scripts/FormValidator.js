export class FormValidator {
    constructor(dataConfig, formElement) {
    this._formSelector = dataConfig.formSelector;
    this._inputSelector = dataConfig.inputSelector;
    this._submitButtonSelector = dataConfig.submitButtonSelector;
    this._inactiveButtonClass = dataConfig.inactiveButtonClass;
    this._inputErrorClass = dataConfig.inputErrorClass;
    this._errorClass = dataConfig.errorClass;
    this._formElement = formElement;
    }

    //Перебор на валидность
    _hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
        });
    };

    //Состояние кнопки
    _toggleButtonState = (inputList, buttonElement) => {
        if (this._hasInvalidInput(inputList)) {
        buttonElement.classList.add(this._inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
        } else {
        buttonElement.classList.remove(this._inactiveButtonClass);
        buttonElement.removeAttribute('disabled'); 
        }
    };

    //Передача текста ошибки 
    _showInputError = (inputElement ,errorMessage) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorClass);
    };

    
  // Удаление текста ошибки
    _hideInputError = (inputElement) => {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = "";
    };

    //Проверка валидности
    _isValid = (
        inputElement,
    ) => {
        if (!inputElement.validity.valid) {
        this._showInputError(
            inputElement,
            inputElement.validationMessage,
        );
        } else {
        this._hideInputError(inputElement);
        }
    };

    //Создаем массив, который после проверки на валидность задаст состояние конкретной кнопке и добавляем слушатель ввода
    _setEventListeners = () => {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        this._toggleButtonState(inputList, buttonElement);
    
        inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            this._isValid(inputElement);
            this._toggleButtonState(inputList, buttonElement,);
        });
        });
    };

    enableValidation = () => {
            this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
        });
        this._setEventListeners();
    };
    
};

export function clearingErrorFields(form, formConfig){
    const inputElements = form.querySelectorAll(formConfig.inputSelector);
    const formReset = form.querySelector('.form');
    inputElements.forEach((dataConfig) => {
        dataConfig.classList.remove(formConfig.inputErrorClass);
        form.querySelector(`.${dataConfig.id}-error`).classList.remove(formConfig.errorClass);
    });
    formReset.reset();
};