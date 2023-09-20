//your code here!

const list = document.getElementById('infi-list');
let currentPage = 1;

// Function to add more list items
function addMoreItems() {
  // Simulate fetching more items from a data source (e.g., an API)
  const newItems = generateListItems(2);

  // Append the new items to the list
  list.innerHTML += newItems;

  // Increase the current page
  currentPage++;
}

// Function to generate list items (you can customize this)
function generateListItems(count) {
  let items = '';
  for (let i = 0; i < count; i++) {
    items += `<li>List item ${currentPage * 10 + i + 1}</li>`;
  }
  return items;
}

// Event listener to check if the user has reached the end of the list
list.addEventListener('scroll', function () {
  if (list.scrollHeight - list.clientHeight <= list.scrollTop + 1) {
    addMoreItems();
  }
});

// Initial load with 10 list items
list.innerHTML = generateListItems(10);