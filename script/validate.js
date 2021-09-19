//Перебор на валидность
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    });
};

//Состояние кнопки
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
    } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled"); 
    
    }
};

//Передача текста ошибки 
const showInputError = (
    formElement,
    inputElement,
    errorMessage,
    inputErrorClass,
    errorClass
) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
};

  // Удаление текста ошибки
const hideInputError = (
    formElement,
    inputElement,
    inputErrorClass,
    errorClass
) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = "";
};

  //Проверка валидности
const isValid = (
    formElement,
    inputElement,
    inputSelector,
    inputErrorClass,
    errorClass
) => {
    if (!inputElement.validity.valid) {
    showInputError(
        formElement,
        inputElement,
        inputElement.validationMessage,
        inputErrorClass,
        errorClass
    );
    } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
    }
};

const setEventListeners = (
    formElement,
    inputSelector,
    submitButtonSelector,
    inactiveButtonClass,
    inputErrorClass,
    errorClass
) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);

    inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
        isValid(
        formElement,
        inputElement,
        inputSelector,
        inputErrorClass,
        errorClass
        );
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
    });
};

const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
    });
    setEventListeners(
        formElement,
        config.inputSelector,
        config.submitButtonSelector,
        config.inactiveButtonClass,
        config.inputErrorClass,
        config.errorClass
    );
    });
};
  // Вызовем функцию
enableValidation(dataConfig);
//При условие , что это не попап изображения , убираем элементы ошибки и очищаем форму
function clearingErrorFields(event) {
    if (!event.classList.contains("popup-image")) {
    const inputElement = event.querySelectorAll(".popup__filed");
    const formReset = event.querySelector(".popup__form");
    inputElement.forEach((data) => {
        data.classList.remove(dataConfig.inputErrorClass);
        evt.querySelector(`.${data.id}-error`).classList.remove(dataConfig.errorClass);
    });
    formReset.reset();
    }
}