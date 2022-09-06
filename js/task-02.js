const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createLiEl = ingredients.map(item => {
  const liItem = document.createElement('li');

  liItem.textContent = item;
  liItem.classList = 'item';

  return liItem;
});

const listRef = document.querySelector('#ingredients');
listRef.append(...createLiEl);
