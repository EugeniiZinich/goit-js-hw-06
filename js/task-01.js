const itemRef = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemRef.length}`);

itemRef.forEach(item => {
  const linkRef = item.querySelector('h2');
  console.log(linkRef.textContent);
  const itemListRef = item.querySelectorAll('li');
  console.log(itemListRef.length);
});
