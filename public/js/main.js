document.addEventListener('DOMContentLoaded', function () {
    const contentDiv = document.querySelector('div');

    if (contentDiv) {
        function handleDivClick(event) {
            console.log('The div was clicked!');
            console.log(event.target);
        }

        contentDiv.addEventListener('click', handleDivClick);
    } else {
        console.log('Error: The div element was not found.');
    }
});
