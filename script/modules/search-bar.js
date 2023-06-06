import { searchBar } from "./api.js";

// GET DOM 
const goButton = document.querySelector('.search-joke__btn')

// FUNCTION
function showSearchBar() {
  goButton.addEventListener('click', () => {
    const input = document.querySelector('#search').value
    searchBar(input)
  });
}

export {
  showSearchBar
}