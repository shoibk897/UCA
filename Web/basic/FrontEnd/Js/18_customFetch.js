fetch('https://pokeapi.co/api/v2/pokemon/pikachu',)
  .then(res => res.json())
  .then(data => console.log(data.name))
  .catch(err => {console.error(err)});


function customFetch(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(`HTTP Error: ${xhr.status}`));
            }
        };

        xhr.onerror = () => reject(new Error('Network Error'));
        xhr.send();
    });
}

customFetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(data => console.log(data))
    .catch(error => console.error(error));
