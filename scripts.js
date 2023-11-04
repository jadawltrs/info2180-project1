/* Add your JavaScript to this file */
document.addEventListener('DOMContentLoaded', function() {
    const newsForm = document.querySelector('form');
    const emailInput = newsForm.querySelector('input');

    let message = document.createElement('p');
    let newDiv = document.createElement('div');

    newsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = emailInput.value;

        if (email === ''){
            event.preventDefault();
            message.textContent = 'Please enter a valid email address';
        }
        else {
            event.preventDefault();
            message.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
        }

        newDiv.appendChild(message);
        newsForm.appendChild(newDiv);
        newsForm.insertAdjacentElement('afterend', newDiv);

        emailInput.value = '';
    });
    
});