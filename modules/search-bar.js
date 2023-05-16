export async function searchBar(input) {
  try {
    const response = await fetch(`https://icanhazdadjoke.com/search?term=${input}`,
      {
        headers: {
          'Accept': 'application/json'
        }
      });
    const data = await response.json();
    const jokeText = document.querySelector('.search-joke__body')
    if (data.results.length) {
      jokeText.innerHTML = `${data.results.map(jokes => `<p>${jokes.joke}</p>`).join('')}`
    } else {
      jokeText.innerHTML = `<p>No hubo resultados</p>`
    }
  } catch (error) {
    console.log(error)
  }
};

export default searchBar;

