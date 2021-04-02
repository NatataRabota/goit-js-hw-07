// Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.
// Получится 'В списке 3 категории.'.

const categoriesEl = document.querySelector('#categories');
console.log(`В списке ${categoriesEl.children.length} категории.`);



// Для каждого элемента li.item в списке ul#categories, найдет и выведет
// в консоль текст заголовка элемента(тега h2) и количество элементов в
// категории(всех вложенных в него элементов li).

const itemsEl = document.querySelectorAll('li.item');
itemsEl.forEach(item => {
    console.log(`Категория: ${item.firstElementChild.textContent}, Количество элементов: ${item.querySelectorAll('li').length}`);
});