//! Видео - 0:58:10...1:06:15

/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * https://www.edu.goit.global/ru/learn/6081611/2294/2300/textbook -(http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html).
 */
// Набор вспомогательных команд (свойств "навигации" по DOM-узлам), которые позволяют выполнять "привязку" одного или нескольки элементов HTML документа отталкиваясь от одного - начального элемента.
// Например, у нас есть некий список - <ul>, и мы выполнили его "привязку" к переменной используя метод "querySelector()". После чего, мы можем отталкиваясь от этого тега-объекта выполнить "привязку" находящихся в нем HTML элементов, к любой переменной с помощью - набора вспомогательных команд (свойств "навигации" по DOM-узлам).

// "Привязываем" <ul> к переменной "navEl" с помощью метода "querySelector()", используя для этого CSS класс списка.
const navEl = document.querySelector('.site-nav');

// Если нам нужно выполнить "поиск-привязку" 1-го <li> соответствующего списка, то мы можем воспользоваться 2-я способами:
console.log('Ищем первый <li> в списке:')
// 1-й способ, с использованием метода "querySelector()"
const firstNavItemEl_1 = navEl.querySelector('.site-nav__item');
console.log('- 1-й способ - "firstNavItemEl_1"', firstNavItemEl_1);

// 2-й способ, с использованием свойства навигации - "firstElementChild".
const firstNavItemEl_2 = navEl.firstElementChild;
console.log('- 2-й способ (firstElementChild) - "firstNavItemEl_2"',firstNavItemEl_2);
console.log('***********************************************');
// Как мы увидели на примере использования свойства навигации "firstElementChild", оно помогает найти нужный элемент отталкиваясь от некоего 1-го корневого элемента, внутри которого - выберет первый дочерний узел-элемент (его первого "ребенка").


/*
* Примеры использования свойств навигации
* ("elem" - это корневой элемент, отталкиваясь от которого, выполняется поиск):
*/

// - "elem.firstElementChild" - выберет первый дочерний узел-элемент внутри "elem" (см. пример выше).


// - "elem.parentNode" - выберет родителя "elem".
console.log('- "navEl.parentNode":');
console.log(navEl.parentNode);
console.log('--------------------------------------------');

// - "elem.childNodes" - псевдомассив, хранит все дочерние элементы, включая текстовые.
console.log('- "navEl.childNodes":');
console.log(navEl.childNodes);
console.log('--------------------------------------------');


// - "elem.children" - псевдомассив, хранит только дочерние узлы-элементы, то есть соответствующие тегам.
console.log('- "navEl.children":');
console.log(navEl.children);
// Выводим определенный элемент псевдо-массива в лог 
console.log('- "navEl.children[2]":');
console.log(navEl.children[2]);
console.log('--------------------------------------------');

// - "elem.firstChild" - выберет первый дочерний элемент внутри "elem", включая текстовые узлы.
console.log('- "navEl.firstChild":');
console.log(navEl.firstChild);
console.log('--------------------------------------------');


// - "elem.lastChild" - выберет последний дочерний элемент внутри "elem", включая текстовые узлы.
console.log('- "navEl.lastChild":');
console.log(navEl.lastChild);
console.log('--------------------------------------------');


// - "elem.lastElementChild" - выберет последний дочерний узел-элемент внутри "elem".
console.log('- "navEl.lastElementChild":');
console.log(navEl.lastElementChild);
console.log('--------------------------------------------');


// - "elem.previousSibling" - выберет элемент «слева» от "elem" (его предыдущего соседа), включая текстовые узлы.
console.log('- "navEl.previousSibling":');
console.log(navEl.previousSibling);
console.log('--------------------------------------------');


// - "elem.previousElementSibling" - выберет узел-элемент «слева» от "elem" (его предыдущего соседа).
console.log('- "navEl.previousElementSibling":');
console.log(navEl.previousElementSibling);
console.log('--------------------------------------------');


// - "elem.nextSibling" - выберет элемент «справа» от "elem" (его следующего соседа), включая текстовые узлы.
console.log('- "navEl.nextSibling":');
console.log(navEl.nextSibling);
console.log('--------------------------------------------');


// - "elem.nextElementSibling" - выберет узел-элемент «справа» от "elem" (его следующего соседа).
console.log('- "navEl.nextElementSibling":');
console.log(navEl.nextElementSibling);
console.log('--------------------------------------------');


