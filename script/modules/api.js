// RANDOM JOKE API REQUEST

async function getJokes() {
  try {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json'
      }
    }
    );
    const jokes = await response.json();
    return jokes
  } catch (error) {
    console.log(error)
  }
};

// // SEARCH BAR API REQUEST

async function searchBar(input) {
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

// API REQUEST FOR PRODUCT ID

async function JokeId(id) {
  try {
    const response = await fetch(`https://icanhazdadjoke.com/j/${id}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const jokes = await response.json();
    const joke = jokes.joke;
    console.log(joke)
    return joke;
  } catch (error) {
    console.log(error);
  }
};

export { getJokes, searchBar, JokeId };

