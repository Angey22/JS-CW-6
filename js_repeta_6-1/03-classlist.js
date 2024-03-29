//! Видео - 0:41:30...0:58:10

/*
 * Интерфейс "classList" (набор методов для работы с CSS классами тега-объекта):
 * - add(класс);
 * - remove(класс);
 * - toggle(класс);
 * - replace(старыйКласс, новыйКласс);
 * - contains(класс).
 */
// У каждого элемента HTML документа есть специальный интерфейс, который называется - "classList". "classList" - это свойство, в котором хранится соответствующий тег-объект, у которого в "прототипе" есть набор специальных методов, предназначеных для работы с ним. Благодоря этому набору специальных методов, можно в удобной форме выполнять необходимые манипуляции с CSS классами тегов-объектов.

// "Привязываем" тег <ul> с CSS классом ".site-nav" к переменной "navEl", и одновременно с єтим превращаем этот элемент HTML документа в объект JS.
const navEl = document.querySelector('.site-nav');
// Выводим в лог структурную ссылку на HTML элемент "привязанный" к переменной "navEl".
console.log('"navEl" ->', navEl);
console.log('--------------------------------------------');

// Выводим в лог тег-объект "navEl", используя свойство - "classList".
console.log('"navEl.classList" ->', navEl.classList);
console.log('--------------------------------------------');
// Нужно отметить, что при вводе команды "navEl.classList", в логе отображается псевдо-массив "DOMTokenList", внутри которого находятся элементы - характеризующие CSS классы тега-объекта, т.е. "DOMTokenList" - это псевдо-массив всех CSS классов соответствующего тега-объекта, "привязанного" к переменной "navEl". В свойстве "[[Prototype]]" этого объекта, есть перечень ссылок на стандартные методы работы с CSS классам этого тега-объекта, среди которых наиболее часто используемыми являются:


// - "add(класс)" - метод предназначенный для выполнения операции добавления нужного CSS класса, в HTML разметке соответствующего тега-объекта.
// Используем метод "add(класс)" для добавления CSS классов в свойстве тега <ul>, "привязанного" к переменной "navEl".
navEl.classList.add('super-cool', 'hren', 'pihva');
// Нужно отметить, что с помощью метода "add(класс)" можно добавить бесконечное количество классов, разделение между которыми в синтаксической записи, выполняется с помощью ",".


// - "remove(класс)" - метод предназначенный для удаления определенного CSS класса, в HTML разметке соответствующего тега-объекта.
// Используем метод "remove(класс)" для удаления CSS классов в свойстве тега <ul>, "привязанного" к переменной "navEl".
// navEl.classList.remove('hren', 'pihva'); //!!!


// - "toggle(класс)" - метод предназначенный для добавления - "нового" или удаления - "имеющегося" CSS класса, в HTML разметке соответствующего тега-объекта. Иначе говоря, если определенного класса на теге-объекте нет, тогда метод "toggle(класс)" его добавит, а если этот класс есть, тогда - удалит.
// Используем метод "toggle(класс)" для добавления/удаления CSS класса "erunda" в свойствj тега <ul>, "привязанного" к переменной "navEl" - по нажатию кнопки "Сделать магию" в окне браузера.

// "Привязываем" тег-кнопку с CSS селектором "js-magic-btn" к переменной "magicBtn"
const magicBtn = document.querySelector('.js-magic-btn');

// "Вешаем" слушателя на тег-кнопку привязанную к переменной "magicBtn", и по "клику" выполняем функцию основанную на использовании метода "toggle(класс)".
magicBtn.addEventListener('click', () => {
  navEl.classList.toggle('erunda');
});
// Для проверки результата нажатия кнопки - смотри в тулзах раздел "Elements".


// - "replace(старыйКласс, новыйКласс)" - метод предназначенный для замены одного CSS класса на другой.
// Используя метод "replace(старыйКласс, новыйКЛасс)" заменим один CSS класс на другой, в свойстве тега <ul>, "привязанного" к переменной "navEl".
// navEl.classList.replace('super-cool', 'all-bad');


// - "contains(класс)" - метод предназначенный для того, чтобы определить-проверить наличие/отсутствие определенного CSS класса в HTML разметке соответствующего тега-объекта.
// Используя метод "contains(класс)" проверяем наличие CSS класса в свойствах тега-объекта "привязанного" к переменной "navEl".
console.log(`"navEl.classList.contains('super-cool')" ->`, navEl.classList.contains('super-cool'));
console.log('--------------------------------------------');
// Метод "contains(класс)" в результате своей работы выдает булевое значение, и в случае наличия искомого класса выдает - "true", а в случае отсутствия - "false".


// Практический пример использования вышеописанных методов и приемов манипулированния CSS классами

const currentPageUrl = '/contact';
// Варианты "href" ссылки на <li> в разметке:
// "/about", "/portfolio", "/contact".

const linkEl = document.querySelector(
  `.site-nav__link[href="${currentPageUrl}"]`,
);
//! Обрати внимание на то, что атрибут "href" берется в "[]" сразу после имени класса. Мы как-бы говорим, возми тег с таким классом, у которого в атрибуте "href" находится соответствующее значение.

console.log(linkEl);

linkEl.classList.add('site-nav__link--current');
// После выполнения вышеописанной коменды, в окне браузера, текст пункта меню "Контакты" поменяет свой цвет на красный. Это связано с тем, что к тегу-объекту данного <li> будет добавлен еще один селектор CSS класса - "site-nav__link--current", в свойствах которого для текста задан красный цвет.