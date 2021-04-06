// Напиши скрипт который, при наборе текста в инпуте 
// input#name - input(событие input), подставляет его
// текущее значение в span#name - output.Если инпут пустой,
// в спане должна отображаться строка 'незнакомец'.

const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputChange = (event) => {
    if (event.currentTarget.value === '') {
        return spanEl.textContent = 'незнакомец';
    };
    return spanEl.textContent = event.currentTarget.value;
};

inputEl.addEventListener('input', onInputChange);

