/*
 * Создём и добавляем коллекцию
 */
// Нам необходимо создать коллекцию однотипных элементов (кнопок - <button>) и добавить их в структуру существующего HTML документа.

// Видео - 1:32:20

// Исходный массив объектов - база данных, с набором свойств для элементов из создоваемой коллекции 
const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];


// Для начала - создадим один тег-кнопку на основе данных из исходного массива объектов "colorPickerOptions", используя для этого 1-й элемент из массива.
// Создаем переменную-ссылку "optionFirst", на первый элемент исходного массива объектов "colorPickerOptions".
const optionFirst = colorPickerOptions[0];

// Создаем переменную "singleButton", и задаем ей в качестве значения - новосозданный тег-кнопки.
const singleButton = document.createElement('button');
// Задаем созданному тегу-кнопке атрибут - "type"
singleButton.type = 'button';
// Задаем созданному тегу-кнопке класс CSS стиля
singleButton.classList.add('color-picker__option');

// Используя переменную "optionFirst" - задаем необходимые параметры создоваемому тегу-кнопке, перенося их из соответствующего объекта - базы данных.
// Задаем текст
singleButton.textContent = optionFirst.label;
// Задаем динамически изменяемый цвет "бекграунда" в виде инлайн стиля соответствующего тега-кнопки
singleButton.style.backgroundColor = optionFirst.color;

// Выводим в лог структуру созданного тега-кнопки для проверки его свойств.
console.log(singleButton);
console.log('-----------------------------------------------');

// Создаем переменную-ссылку на существующий в разметке HTML документа тег - <div> для вставки создоваемых новых элементов
const colorPickerContainerEl = document.querySelector('.js-color-picker');

// Вставляем созданный тег-кнопку в HTML документ
colorPickerContainerEl.appendChild(singleButton);

//!============================================================
// Создаем вспомогательную переменную с разделителем, которую вставляем в HTML документ после выщеописанного примера для визуального разделения, в окне браузера, между собой результатов предыдущего и последующего примеров
const delimiter = document.createElement('p');
delimiter.textContent = '<---------- разделитель ---------->';
colorPickerContainerEl.appendChild(delimiter);
//!============================================================

// На основе выше описанного примера создания одного тега-кнопки, создадим набор-коллекцию тегов-кнопок

// Используем для создания коллекции "олдскульный" вариант основаный на переборе исходного массива объектов - базы данных с помощью цыкла "for".
// Создаем переменную "elements" с литералом пустого массива, в который будем добавлять создаваемые в цикле теги.
const elements = [];

// Создаем цыкл для перебора исходного массива объектов
for (let i = 0; i < colorPickerOptions.length; i += 1) {
  // Создаем внутреннюю переменную "option", в которую будет записываться объект с параметрами для создоваемого на каждой отдельной итерации тега-кнопки.
  const option = colorPickerOptions[i];

  // Создаем тег-кнопку и задаем ей параметры, по аналогии с предыдущим примером
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.classList.add('color-picker__option');
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  // Добавляем в массив "elements" созданный на итерации цыкла тег-кнопку
  elements.push(buttonEl);
};

// Выводим в консоль созданный с помощью выше описанного цыкла массив тегов для проверки его содержания.
console.log('Цыкл "for":');
console.log(elements);
console.log('-----------------------------------------------');

// Вставляем созданную коллекцию кнопок в структуру HTML документа, используя для этого созданную в предыдущем примере переменную-ссылку - "colorPickerContainerEl".
colorPickerContainerEl.append(...elements);


//!============================================================
// Создаем вспомогательную переменную с разделителем, которую вставляем в HTML документ после выщеописанного примера для визуального разделения, в окне браузера, между собой результатов предыдущего и последующего примеров
const delimiter2 = document.createElement('p');
delimiter2.textContent = '<---------- разделитель ---------->';
colorPickerContainerEl.appendChild(delimiter2);
//!============================================================


// Используем для создания коллекции метод "map".

const elements2 = colorPickerOptions.map(option => {
  // Создаем внутреннею переменную "buttonEl" и задаем ей в качестве значения новосозданный тег-кнопку, после чего, по аналогии с предыдущими примерами - задаем параметры для создоваемой на каждой итерации метода "map" - кнопке. 
  const buttonEl = document.createElement('button');
  buttonEl.type = 'button';
  buttonEl.classList.add('color-picker__option');
  buttonEl.textContent = option.label;
  buttonEl.style.backgroundColor = option.color;

  // Возвращаем из метода "map" - массив тегов
  return buttonEl;
});

// Выводим в консоль созданный с помощью метода "map" массив тегов для проверки его содержания.
console.log('Метод "map()":');
console.log(elements2);
console.log('***********************************************');

// Вставляем созданную коллекцию кнопок в структуру HTML документа, используя для этого ранее созданную переменную-ссылку - "colorPickerContainerEl".
colorPickerContainerEl.append(...elements2);


//!============================================================
// Создаем вспомогательную переменную с разделителем, которую вставляем в HTML документ после выщеописанного примера для визуального разделения, в окне браузера, между собой результатов предыдущего и последующего примеров
const delimiter3 = document.createElement('p');
delimiter3.textContent = '<---------- разделитель ---------->';
colorPickerContainerEl.appendChild(delimiter3);
//!============================================================



/*
 * Пишем функцию для создания разметки колорпикера
 */

// По аналагии с предыдущим примером, используем код для создания коллекции на основе метода "mep", только записываем его в тело функции, которая принимает в себя в качестве аргумента - исходный массив объектов - базу данных с параметрами настроек для создоваемых элементов коллекции.
const makeColorPickerOptions = options => {
  return options.map(option => {
    const buttonEl = document.createElement('button');
    buttonEl.type = 'button';
    buttonEl.classList.add('color-picker__option');
    buttonEl.textContent = option.label;
    buttonEl.style.backgroundColor = option.color;

    return buttonEl;
  });
};

const elements3 = makeColorPickerOptions(colorPickerOptions);

colorPickerContainerEl.append(...elements3);