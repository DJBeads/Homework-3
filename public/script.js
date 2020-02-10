const superForm = document.querySelector('#superForm');

superForm.addEventListener('submit', event => {

    const Text = document.querySelector('#b');

    const error = document.querySelector('#error');

    if(!textValue){
        error.style.display = 'block';
        event.preventDefault();
    } else {
        const button = document.querySelector('#submitButton');
        button.textContent = 'Gesendet!';
        error.style.display = 'none';
    }
});
