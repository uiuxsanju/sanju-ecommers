// Handle price filter slider
const priceRange = document.getElementById('priceRange');
const priceValue = document.getElementById('priceValue');
priceRange.addEventListener('input', function () {
  priceValue.textContent = `$${priceRange.value}`;
});

// Toggle between card and list view
const cardViewButton = document.getElementById('cardView');
const listViewButton = document.getElementById('listView');
const categoryList = document.getElementById('categoryList');

cardViewButton.addEventListener('click', function () {
  categoryList.classList.add('card-view');
  categoryList.classList.remove('list-view');
});

listViewButton.addEventListener('click', function () {
  categoryList.classList.add('list-view');
  categoryList.classList.remove('card-view');
});
