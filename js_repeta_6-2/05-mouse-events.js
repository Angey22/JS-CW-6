// Видео - 1:05:50...1:16:00

/*
 * События мыши:
 * - 'mouseenter' и 'mouseleave' (это ховер через JS);
 * - 'mouseover' и 'mouseout';
 * - 'mousemove' (chatty event - болтливое событие)
 * - доп. материал по координатам: https://nerdparadise.com/programming/javascriptmouseposition;
 * - хорошая задачка для тренировки - https://learn.javascript.ru/task/move-ball-field.
 */
// Описание некоторых типов событий мыши:
// - 'mouseenter' - предназначено для регистрации события вхождения в границы тега - курсора мышки. Объект события - передает ссылку на тег, в область которого вошел курсор мыши - через свойство "event.currentTarget".

// - 'mouseleave' - предназначено для регистрации события выхода за границы тега - курсора мышки. Объект события - передает ссылку на тег, из области которого вышел курсор мыши, через свойство "event.currentTarget".

// ! События 'mouseenter' и 'mouseleave' НЕ предназначены для реализации эфекта "ховера", хоть и позволяют его реализовать. Эти события нужны для того, что-бы при регистрации эффекта "ховера" выполнить расчет геометрии, что-то куда-то подвинуть или выполнить более сложные расчетные операции.

// - 'mouseover' - предназначено для регистрации события, когда курсор мыши оказывается над элементом. Отличается от 'mouseenter' тем, что объект события передает не одну, а две ссылки:
// event.currentTarget – это элемент, на который курсор перешёл.
// event.relatedTarget – это элемент, с которого курсор ушёл (relatedTarget → currentTarget).

// - 'mouseout' - предназначено для регистрации события, коггда курсор мыши уходит с элемента. Отличается от 'mouseleave' тем, что объект события передает не одну, а две ссылки:
// event.currentTarget – это элемент, с которого курсор ушёл.
// event.relatedTarget – это элемент, на который курсор перешёл (currentTarget → relatedTarget).

// - 'mousemove' - предназначено для регистрации события движения курсора мыши внутри области отслеживаемого тега.


//! Пример использования событий 'mouseenter' и 'mouseleave':
// Создаем переменную-ссылку на тег-div - '.js-box-1'
const boxRef_1 = document.querySelector('.js-box-1');

// Вешаем слушателя на тег-div, по событию - 'mouseenter'
boxRef_1.addEventListener('mouseenter', onMouseEnter);
// Вешаем слушателя на тег-div, по событию - 'mouseleave'
boxRef_1.addEventListener('mouseleave', onMouseLeave);

// Создаем "колл-бек" функцию для события - 'mouseenter'
function onMouseEnter(event) {
  // Выводим в лог ссылку на тег - вхождения курсора
  console.log(event.currentTarget);

  // Создаем промежуточную переменную "box" и присваиваем ей значение - ссылку на соответствующий тег-div
  const box = event.currentTarget;

  // Добавляем на тег-div нужный CSS класс
  box.classList.add('box--active');
};

// Создаем "колл-бек" функцию для события - 'mouseleave'
function onMouseLeave(event) {
  // Выводим в лог ссылку на тег - выхода курсора
  console.log(event.currentTarget);

  // Создаем промежуточную переменную "box" и присваиваем ей значение - ссылку на соответствующий тег-div
  const box = event.currentTarget;

  // Удаляем с тега-div нужный CSS класс
  box.classList.remove('box--active');
};


//! Пример использования событию 'mouseover' и 'mouseout':
// Создаем переменную-ссылку на тег-div - '.js-box-2'
const boxRef_2 = document.querySelector('.js-box-2');

// Вешаем слушателя на тег-div, по событию - 'mouseover'
boxRef_2.addEventListener('mouseenter', onMouseOver);
// Вешаем слушателя на тег-div, по событию - 'mouseout'
boxRef_2.addEventListener('mouseleave', onMouseOut);

// Создаем "колл-бек" функцию для события - 'mouseover'
function onMouseOver(event) {
  console.log(event.currentTarget);
  console.log(event.relatedTarget);
};

// Создаем "колл-бек" функцию для события - 'mouseout'
function onMouseOut(event) {
  console.log(event.currentTarget);
  console.log(event.relatedTarget);
};



//! Пример использования событию 'mousemove':
// Создаем переменную-ссылку на тег-div - '.js-box-3'
const boxRef_3 = document.querySelector('.js-box-3');

// Вешаем слушателя на тег-div, по событию - 'mousemove'
boxRef_3.addEventListener('mousemove', onMouseMove);

// Создаем "колл-бек" функцию для события - 'mousemove'
function onMouseMove(event) {
  // Выводим в лог служебный объект-событие
  console.log(event);
  console.log('---------------------------------------------');
  
  // Выводим в лог координатные значения "" и "", расположения курсора мыши в области отслеживоемого тега. Начало координат - левый верхний угол облости соответствующего тега. 
  console.log(`"event.offsetX": ${event.offsetX}; "event.offsetY": ${event.offsetY}`);
};

