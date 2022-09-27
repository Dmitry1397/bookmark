const switchButtons = document.querySelectorAll('.switcher button');
const featureTabs = document.querySelectorAll('.features-tab')


switchButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        removeAttributes(switchButtons);
        element.className = 'switcher-button active-tab';
        displayFeature(featureTabs);
        featureTabs[index].style.display = 'flex';
    })
})

function removeAttributes(array) {
    array.forEach(element => element.className = 'switcher-button');
}

function displayFeature(array) {
    array.forEach(element => element.style.display ='none');
}