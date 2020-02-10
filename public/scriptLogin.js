const messageForm = document.querySelector('#loginForm');
messageForm.addEventListener('submit', event => {

    const messageAuthor = document.querySelector('#messageAuthor');
    const author = messageAuthor.value;
    const error = document.querySelector('#validationError');

    if(!author){
        event.preventDefault();// stop form submission to server
        error.style.display = 'block';
    }
    if (author){
        error.style.display = 'none';
        console.log(author);
    }
});