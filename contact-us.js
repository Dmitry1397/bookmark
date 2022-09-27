const btn = document.querySelector('.subscription');
const email = document.querySelector('#email');
const label = document.querySelector('#label');
const errorMsg = document.querySelector('#label span');


email.addEventListener('input', () => {
    if (!email.validity.valid) {
        errorMsg.style.display = 'block';
        label.style.background = 'hsl(0, 94%, 66%)';
    } else {
        errorMsg.style.display = 'none';
        label.style.background = 'transparent';
    }
});