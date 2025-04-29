document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        checkInputs();
    });

    function checkInputs() {
        const usernameValue = username.value.trim();
        const passwordValue = password.value.trim();

        if (usernameValue === '') {
            setErrorFor(username, 'Please enter username');
        } else if (usernameValue !== 'new_user') {
            setErrorFor(username, 'Please enter a valid username');
        } else {
            setSuccessFor(username);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Please enter password');
        } else if (passwordValue !== '123456789') {
            setErrorFor(password, 'Please enter a valid password');
        } else {
            setSuccessFor(password);
        }

        if (usernameValue === 'new_user' && passwordValue === '123456789') {
            showSuccessMessage();
        }
    }

    function setErrorFor(input, message) {
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        small.innerText = message;
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    function showSuccessMessage() {
        const successMessage = form.querySelector('small:last-of-type');
        successMessage.style.visibility = 'visible';
        successMessage.innerText = 'Successful login!';
    }

    function setSuccessFor(input) {
        const formControl = input.parentElement; 
        const checkIcon = formControl.querySelector('i.fa-check'); 
        const errorIcon = formControl.querySelector('i.fa-xmark'); 
        const small = formControl.querySelector('small'); 
    
        formControl.className = 'form-control success';
    
        if (checkIcon) {
            checkIcon.style.visibility = 'visible'; 
        }
        if (errorIcon) {
            errorIcon.style.visibility = 'hidden'; 
        }
        if (small) {
            small.style.visibility = 'hidden'; 
        }
    }
});


















