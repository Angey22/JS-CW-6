// Видео - 1:47:30...2:07:50
/*
 * Создаём карточку продукта
 * - В классе продукта может быть product--on-sale product--not-available
 */
// У нас есть шаблон HTML разметки - "карточки продукта", согласно которого необходимо создать объединенную группу элементов и вставить ее в текущий HTML документ. При этом, в создаваемые элементы нужно вставить данный из исходного объекта - базы данных. Полученный таким образом составной элемент, необходимо вставить в DOM дерево HTML документа.

// Шаблон HTML разметки, по которой нужно создать вставляемые в HTML документ элементы
/*
<article class="product">
  <h2 class="product__name">Название</h2>
  <p class="product__descr">Описание</p>
  <p class="product__price">Цена: 1111 кредитов</p>
</article>
*/

// Исходный объект - база данных, на основе которого нужно заполнить данными создоваемые элементы
const singleProduct = {
  name: 'Сервоприводы',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
  price: 2000,
  available: true,
  onSale: true,
};


// Выполняем задачу, пишем код, с помошью которого создаем по шаблону необходимый набор элементов, свойства которых - заполняем данными из исходного объекта - база данных "singleProduct".

// Создаем переменную "productEl" и задаем ей в качестве значения тег-article с указанным в шаблоне классом.
const productEl = document.createElement('article');
productEl.classList.add('product');
// Выводим в лог структуру созданного тега-article для проверки его свойств.
console.log(productEl);
console.log('-----------------------------------------------');

// Создаем переменную "nameEl" и задаем ей в качестве значения тег-заголовок "h2", с указанным в шаблоне классом (product__name), и заданным в исходном объекте текстовым контентов (из свойства "name").
const nameEl = document.createElement('h2');
nameEl.classList.add('product__name');
nameEl.textContent = singleProduct.name;
// Выводим в лог структуру созданного тега-заголовок для проверки его свойств.
console.log(nameEl);
console.log('-----------------------------------------------');

// Создаем переменную "descrEl" и задаем ей в качестве значения тег-абзац "p", с указанным в шаблоне классом (product__descr), и заданным в исходном объекте текстовым контентов (из свойства "description").
const descrEl = document.createElement('p');
descrEl.classList.add('product__descr');
descrEl.textContent = singleProduct.description;
// Выводим в лог структуру созданного тега-абзаца для проверки его свойств.
console.log(descrEl);
console.log('-----------------------------------------------');

// Создаем переменную "El" и задаем ей в качестве значения тег-абзац "p", с указанным в шаблоне классом (product__descr), и заданным в исходном объекте текстовым контентов (из свойства "description").
const priceEl = document.createElement('p');
priceEl.classList.add('product__price');
priceEl.textContent = `Цена: ${singleProduct.price} кредитов`;
// Выводим в лог структуру созданного тега-абзаца для проверки его свойств.
console.log(priceEl);
console.log('-----------------------------------------------');

// Связываем все созданные элементы воедино, "вставляя" их в нужной последовательности в тег-article, с помощью метода "append()".
productEl.append(nameEl, descrEl, priceEl);
// Выводим в лог структуру измененного тега-article для проверки его свойств.
console.log(productEl);
console.log('***********************************************');

// Вставляем созданный объединенный набор элементов в структуру HTML документа.
// Создаем переменную-ссылку на существующий в разметке HTML документа тег <div>, внутрь которого будет вставляться созданный объединенный набор элементов.
const productsContainerEl = document.querySelector('.js-products');
// Вставляем созданный объединенный набор элементов в структуру HTML документа.
productsContainerEl.appendChild(productEl);
// См. результат в окне браузера

//!============================================================
// Создаем вспомогательную переменную с разделителем, которую вставляем в HTML документ после выщеописанного примера для визуального разделения, в окне браузера, между собой результатов предыдущего и последующего примеров
const delimiter = document.createElement('p');
delimiter.textContent = '<---------- разделитель ---------->';
productsContainerEl.appendChild(delimiter);
//!============================================================


// Существует возможность экспортировать данныйе из другого JS файла в текущий. Для того, чтобы использовать эту возможность необходимо, что-бы оба файла (и тот из которого экспортируются данные, и тот в который они приходят) имели - type="module" в параметрах тега <script>. При этом, тот файл в который экспортируются данные должен в обязательном порядке иметь type="module" в параметрах тега <script>, с помощью которого он подключается к HTML документу, а второй файл, из которого берутся данные - может быть вообще не подключен не к одному из HTML документов, и служить исключительно как хранилище данных. Вторым обязательным условием, является необходимость записи в файле, из которого экспортируется инвормация, оформления набора данных в виде одного единого объекта (массива или объекта), а так же, наличия служебных слов "export default" - в качестве обозначения литерала с набором данных, которые подлежат экспорту (см. файл "products.js" в папке "data"). После чего, в том файле, куда необходимо экспортировать соответствующие данные (в самом начале этого файла скрипта), необходимо с помощью специальной синтаксической конструкции, выполнить операцию присвоения экспортируемых данных к переменной, и указать путь к файлу, в котором находятся данные: import [имя переменной] 'путь к файлу с даннымии' (например, './data/proucts.js'). Путь к файлу с данными записывается в виде текстового литерала, а отправной точкой для адресации - текущий файл, в который и выполняется операция переноса данных.

// Создаем переменную "products" и экспортируем-присваеваем ей значение массива объектов - базы данных, код которого находится в другом файле проекта.
import products from './data/proucts.js';

// Выводим в лог переменную "products" для проверки ее свойств
console.log('Переменная "products", с экспортированными из другого файла данными:');
console.log(products);
console.log('***********************************************');



/*
 * Пишем функцию для создания карточки продукта
 */
// Напишем функцию, которая получает в качестве аргумента ОДИН объект с набором данных (на подоби "singleProduct"), и, используя данные из этого объекта, создает разметку карточки продукта по вышеописанномы шаблону разметки, и вставляет ее в текущий HTML документ. Для написания кода функции используем вышеописанный пример, и деструкторизацию свойств объекта - получаемого в качестве аргумента функции.

const makeProductCard = ({ name, description, price } = {}) => {
  // Создаем тег <article>
  const productEl = document.createElement('article');
  productEl.classList.add('product');

  // Создаем тег <h2>
  const nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');

  // Создаем тег <p> с текстом
  const descrEl = document.createElement('p');
  descrEl.textContent = description;
  descrEl.classList.add('product__descr');

  // Создаем тег <p> с ценой
  const priceEl = document.createElement('p');
  priceEl.textContent = `Цена: ${price} кредитов`;
  priceEl.classList.add('product__price');

  // Объединяем в единое целое созданные теги 
  productEl.append(nameEl, descrEl, priceEl);

  // Функция возвращает единый объект, подготовленный для вставки в HTML документ.
  return productEl;
};

// Проверяем работу функции, передавая в нее в качестве аргумента один из элементов массива объектов - базы данных, из переменной "products", и выводя в консоль созданную функцией разметку.
console.log(makeProductCard(products[1]));
console.log('-----------------------------------------------');


// Создаем переменную "elements" и присваиваем ей в качестве значения мап-нутую переменную "products", содержащую в себе набор экспортируемых из другого файла данных в виде массива объектов - базы данных. При этом, в качестве колл-бек функции обрабатывающей данные из переменной "products", используем выше описанную функцию "makeProductCard".
const elements = products.map(makeProductCard);

// Выводим в консоль переменную "elements", которая после выше описанной обработки с помощью функции "map()", должна содержать в себе массив с разметками соответствующего количества карточек товаров.
console.log('Массив с разметкой карточек товаров:');
console.log(elements);

// Вставляем в HTML документ коллекцию созданных карточек товаров, используя для этого ранее созданную в первом примере - переменную-ссылку "productsContainerEl".
productsContainerEl.append(...elements);
// См. результат в окне браузера
