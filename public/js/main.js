var submitBtn = document.querySelector('#submitBtn');

//var loggedIn = false;

submitBtn.addEventListener('click', resultsPage);

async function resultsPage() {
    var selectedLocation = document.querySelector('input[name="location"]:checked').value;
    //const locationResponse = await fetch(`/api/resource/:${selectedLocation}`);
    document.location.replace(`/resources/${selectedLocation}`);
};


// document.addEventListener('DOMContentLoaded', function () {
//     const contentDiv = document.querySelector('div');

//     if (contentDiv) {
//         function handleDivClick(event) {
//             console.log('The div was clicked!');
//             console.log(event.target);
//         }

//         contentDiv.addEventListener('click', handleDivClick);
//     } else {
//         console.log('Error: The div element was not found.');
//     }
// });
