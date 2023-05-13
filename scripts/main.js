let jokeText = document.getElementById

async function getJokes() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })
  const jokes = await response.json();
  console.log(jokes);
}
getJokes();

jokes.forEach(joke => {
  joke
});