const questions = document.querySelectorAll('#question');


questions.forEach(element => {
    element.addEventListener('click', () => {
        if (element.nextElementSibling.style.display === 'block') {
            element.nextElementSibling.style.display = 'none';
            element.classList = 'open';
        } else {
            element.nextElementSibling.style.display = 'block';
            element.classList = 'close';
        }
        
    })
})