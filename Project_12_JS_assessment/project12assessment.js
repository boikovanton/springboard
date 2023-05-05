const form = document.getElementById('meme-form');
const container = document.getElementById('meme-container');
const deleteButton = document.getElementById('delete-memes');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const imageLink = document.getElementById('image-link').value;
    const topText = document.getElementById('top-text').value;
    const bottomText = document.getElementById('bottom-text').value;

    if (imageLink === '' || topText === '' || bottomText === '') {
        alert('Please fill out all fields.');
        return;
    }

    const memeContainer = document.createElement('div');
    const memeImage = document.createElement('img');
    memeImage.setAttribute('src', imageLink);
    memeContainer.appendChild(memeImage);

    //   memeDiv.innerHTML += `<p class="top-text">${topText}</p>`;
    //   memeDiv.innerHTML += `<p class="bottom-text">${bottomText}</p>`;

    const topTextElement = document.createElement('p');
    topTextElement.innerHTML = topText;
    topTextElement.classList.add('top-text');
    memeContainer.appendChild(topTextElement);

    const bottomTextElement = document.createElement('p');
    bottomTextElement.innerHTML = bottomText;
    bottomTextElement.classList.add('bottom-text');
    memeContainer.appendChild(bottomTextElement);

    memeContainer.classList.add('meme-container');
    container.appendChild(memeContainer);

    form.reset();
    return;
});

deleteButton.addEventListener('click', function() {
    const memes = container.querySelectorAll('.meme-container');
    memes.forEach(function(meme) {
      container.removeChild(meme);
    });
  });