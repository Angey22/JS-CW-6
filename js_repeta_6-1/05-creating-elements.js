/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */
// Существует метод предназначенный для создания элементов HTML документов - "createElement()". Он позволяет преобразовать лебой текстовый литерал в тег. Созданный с помощью этого метода тег (вне зависимости от того, валидный он или нет) - не добавляется сразу в документ, и при создании находится в оперативной памяти браузера.

// Пример использования метода "createElement()" для создания тегов
console.log('Пример использования метода "createElement()":');
// Создание валидных тегов (существующих в HTML5)
const newTeg_1 = document.createElement('h1');
console.log(newTeg_1);
console.log('-----------------------------------------------');
// Создание НЕ валидных тегов (НЕ существующих в HTML5)
const newTeg_2 = document.createElement('qwe');
console.log(newTeg_2);
console.log('***********************************************');
// При создании новых элементов HTML документа, необходимо сначала создать его основу - тег (с помощью метода "createElement()") в оперативной памяти браузера, задать ему необходимые содержание (текст, изображение и т.п.) и свойства (атрибуты тега). После чего, с помощью методов вставки узлов - вставить созданный таким образом элемент в HTML документ.



/*
 * Создаём заголовок
 */
// Алгоритм создания нового элемента HTML документа - заголовка страницы:

// 1-е создаем переменную и задаем ей в качестве значения новосозданный с помощью метода "createElement()" тег заголовка - "h1"
const titleEl = document.createElement('h1');

// 2-е задаем созданной переменной (созданному тегу) текстовое содержание с помощью свойства "textContent"
titleEl.textContent = 'Это пробный заголовок страницы :)';

// 3-е задаем созданному тегу атрибут класса
titleEl.classList.add('page-title');

// Выводим в лог структуру созданного тега-заголовка для проверки его свойств
console.log(titleEl);
console.log('***********************************************');

// 4-е используя один из методов "вставки узлов в HTML документ" - вставляем новосозданный тег-объект в структуру текущего (к которому подключен JS скрипт) HTML документа. Например, с помощью метода:

// - "appendChild(elem)" - метод предназначенный для добавления указанного в скобках узла в конец существующей структуры элемента указанного в качестве родительского узла. Например, если в качестве родительского узла будет указано "body" HTML документа, то соответствующий "elem" будет вставлен перед закрывающимся тегом - </body>, т.е. в конце существующей HTML структуры "body".
// Используем метод "appendChild(elem)" для вставки "titleEl" в структуру HTML документа.
// document.body.appendChild(titleEl); // !!!
//Раскомментируй и см. результат в окне баузера

// "insertBefore(elem, nextSibling)" - метод предназначенный для добавления необходимого (нового) "elem" перед существующим в структуре HTML документа элементом - "extSibling" добавляет элемент в список дочерних элементов родителя перед указанным элементом. Для корректной работы этого метода необходимо что-бы в коде была ссылка-переменная как вставляемого элемента, так и ссылка-переменная на тот тег-объект, перед которым должна быть выполнена операция вставки. Кроме того, в коде описываемом вставку с помощью этого метода - должна быть ссылка на "родительскую" структурную часть HTML документа, внутри которой будет выполнятся вставка (например, body, header, footer и т.п.).
// Например, в структуре "body" HTML документа есть <ul>, и нам нужно вставить заголовок перед этим списком. Для чего, создадим сначала ссылку тег списка - "list" (с помощью метода "querySelector"), после чего используя метод "insertBefore()", вставим нужный нам тег-объект.
// Создаем переменную-ссылку на тег списка
const list = document.querySelector('ul');
// Используем метод "insertBefore()" для вставки "titleEl" перед "list"
// document.body.insertBefore(titleEl, list); //!!!
//Раскомментируй и см. результат в окне баузера

// - "append(...elems)" - метод предназначенный для вставки текста (текстового литерала) и/или узла в структуру существующего HTML документа. Вставка осуществляется в КОНЕЦ структурного элемента, на основе которого был осуществлен вызов этого метода, и позволяет вставлять как одну так несколько строк или узлов одновременно (разделяемые между собой запятой в скобках метода).
// Используем метод "append(...elems)" для вставки "titleEl" в структуру HTML документа.
// document.body.append(titleEl); // !!!
//Раскомментируй и см. результат в окне баузера

// - "prepend(...elems)" - метод предназначенный для вставки текста (текстового литерала) и/или узла в структуру существующего HTML документа. Вставка осуществляется в НАЧАЛО структурного элемента, на основе которого был осуществлен вызов этого метода, и позволяет вставлять как одну так несколько строк или узлов одновременно (разделяемые между собой запятой в скобках метода).
// Используем метод "prepend(...elems)" для вставки "titleEl" в структуру HTML документа.
// document.body.prepend(titleEl); // !!!
//Раскомментируй и см. результат в окне баузера



/*
 * Создаём и вставляем в HTML документ изображение c нужными содержанием и свойствами:
 * - src - https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg (./img/valais-3562988_1280.jpg);
 * - alt - valais-alpine-mountains-glacier;
 * - width - 320.
 */

// Создаем переменную "imageEl" и задаем ей в качестве значения тег-объект "img", созданный с помощью метода "createElement()".
const imageEl = document.createElement('img');

// Задаем созданному тегу-изображению атрибут "src"
imageEl.src = '../img/valais-3562988_1280.jpg';

// Задаем созданному тегу-изображению атрибут "alt"
imageEl.alt = 'valais-alpine-mountains-glacier';

// Задаем созданному тегу-изображению атрибут "width"
// 1-й способ, с помощью прямого обращения к соответствующему свойству тега-объекта через "."
// imageEl.width = 320;

// 2-й способ, с ппомощью метода "setAttribute(имя-атрибута)"
imageEl.setAttribute('width', 320);

// Выводим в лог структуру созданного тега-изображения для проверки его свойств
console.log(imageEl);
console.log('***********************************************');

// Вставляем созданный тег-изображение и тег-заголовок в структуру существующего HTML документа, с помощью метода "appendChild(elem)", используя для вставки - переменную-ссылку на тег <div> с CSS классом - "hero".
const heroEL = document.querySelector('.hero');

// 1-й способ вставки нескольких элементов
// heroEL.appendChild(titleEl);
// heroEL.appendChild(imageEl);

// 2-й способ вставки нескольких элементов
heroEL.append(titleEl, imageEl);



/*
 * Создаём и добавляем новый пункт меню
 */
// Когда необходимо создать сложный элемент состоящий из нескольких и более составных частей, необходимо сначала создать все составные части этого элемента по отдельности. После чего, связать составные в единую конструкцию - элемент, и уже объедененный, единый объект - добавить в DOM дерево HTML документа.
// Например, нам нужно создать новый пункт - ссылку в меню сайта, которое выполненно в виде списка (тега - <ul>). Для этого, нам нужно создать две составляющие: подпункт списка (тег - <li>) и ссылку (тег - <a>). После чего, объединить эти два элемента в единое целое и добавить в структуру существующего спика (тега - <ul>), на нужную позицию.

// 1-й элемент
// Создаем переменную "navItemEl" и задаем ей значение в виде новосозданного, с помощью метода "createElement()", тега - "li", и задаем этому тегу необходимые атрибуты.  
const navItemEl = document.createElement('li');
// Добавляем класс CSS стиля в созданный пункт списка
navItemEl.classList.add('site-nav__item');

// Выводим в лог структуру созданного тега-пункта списка для проверки его свойств
console.log(navItemEl);
console.log('-----------------------------------------------');


// 2-й элемент
// Создаем переменную "navLinkEl" и задаем ей значение в виде новосозданного, с помощью метода "createElement()", тега - "a", и задаем этой ссылке необходимые: текстовое содержание и атрибуты.
const navLinkEl = document.createElement('a');
// Задаем созданной переменной (созданному тегу) текстовое содержание, с помощью свойства "textContent".
navLinkEl.textContent = 'Личный кабинет';
// Добавляем класс CSS стиля в созданную ссылку
navLinkEl.classList.add('site-nav__link');
// Задаем атрибут "href" ссылке
navLinkEl.href = '/profile';

// Выводим в лог структуру созданного тега-ссылки для проверки её свойств.
console.log(navLinkEl);
console.log('-----------------------------------------------');


// "Связываем" в единое целое созданный в памяти браузера тег-пункт списки (<li>) и ссылку (<a>), с помощью метода "appendChild()", вкладывая <a> в <li>.
navItemEl.appendChild(navLinkEl);

// Выводим в лог структуру созданного объединенного элемента для проверки её свойств.
console.log(navItemEl);
console.log('***********************************************');


// Создаем переменную "navEl" для "привязки" существующего в документе списка
const navEl = document.querySelector('.site-nav');


// Используем методы вставки узлов в DOM дерево HTML документа для вставки созданного сложного элемента в структуру соответствующего списка
// Вставляем созданный пункт в конец списка
// navEl.appendChild(navItemEl); // !!!
//Раскомментируй и см. результат в окне баузера

// Вставляем созданный пункт в начало списка
// navEl.insertBefore(navItemEl, navEl.firstElementChild); // !!!
//Раскомментируй и см. результат в окне баузера

// Вставляем созданный пункт - перед существующим вторым пунктом в списке, т.е. - сделаем наш пункт вторым в списке.
// navEl.insertBefore(navItemEl, navEl.children[1]); // !!!
//Раскомментируй и см. результат в окне баузера

// Вставляем созданный пункт перед последним существующим пунктом в списке, т.е. - сделаем наш пункт предпоследним
// navEl.insertBefore(navItemEl, navEl.lastElementChild); // !!!
//Раскомментируй и см. результат в окне баузера