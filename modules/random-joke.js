export async function getJokes() {
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

export default getJokes;
