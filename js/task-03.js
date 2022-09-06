const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listGalleryRef = document.querySelector('.gallery');

const makeGalerryEL = image => {
  const { url, alt } = image;
  return `
  <li class = "gallery-item">
  <img src = "${url}"
  alt = "${alt}" 
  width = "300"
  height = "200"/> 
  </li>`;
};

const createGallery = images.map(makeGalerryEL).join('');
console.log(createGallery);

listGalleryRef.insertAdjacentHTML('beforeend', createGallery);

//_________________________________________________________

//_________________________________________________________

// const createGallery = images.map(({ url, alt }) => {
//   const li = document.createElement('li');
//   const img = document.createElement('img');
//   img.src = url;
//   img.alt = alt;
//   li.append(img);
//   console.log(li);
//   return li;
// });

// console.log(createGallery);

// listGalleryRef.append(...createGallery);

// Використовуй масив об'єктів images для створення елементів <img>,
//  вкладених в < li >.Для створення розмітки використовуй шаблонні рядки
//   і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
