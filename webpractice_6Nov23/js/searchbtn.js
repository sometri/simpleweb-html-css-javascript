const searchButton = document.getElementById('top-search-button');
const searchInput = document.getElementById('top-search-input');
const searchResults = document.getElementById('top-search-results');

searchButton.addEventListener('click', function() {
  const searchTerm = searchInput.value.toLowerCase();
  const allTextElements = document.querySelectorAll('body *:not(script)');
  const matchingElements = [];

  allTextElements.forEach(function(element) {
    const elementText = element.innerText.toLowerCase();
    if (elementText.includes(searchTerm)) {
      matchingElements.push(element);
    }
  });

  displaySearchResults(matchingElements);
});

function displaySearchResults(elements) {
  searchResults.innerHTML = '';

  if (elements.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>';
    return;
  }

  elements.forEach(function(element) {
    const resultItem = document.createElement('p');
    resultItem.textContent = element.innerText;
    searchResults.appendChild(resultItem);
  });
}
