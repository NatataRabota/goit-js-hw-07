// Напиши скрипт, который бы при потере фокуса на инпуте, 
// проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, 
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.


const inputEl = document.querySelector('#validation-input');
const validDataInput = parseInt(inputEl.getAttribute("data-length"));

const checkValidInput = (event) => {
  const input = event.currentTarget.value;
  input.length === validDataInput
    ? (inputEl.style.borderColor = "#4caf50")
    : (inputEl.style.borderColor = "#f44336");
};

inputEl.addEventListener("blur", checkValidInput);