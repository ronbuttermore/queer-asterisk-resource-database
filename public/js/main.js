var submitBtn = document.querySelector('#submitBtn');

var loggedIn = false;

submitBtn.addEventListener('click', resultsPage);

function resultsPage() {
    var selectedLocation = document.querySelector('input[name="location"]:checked').value;
    if (loggedIn) {
        document.location.replace('/resources');
    } else {
        localStorage.setItem("location", selectedLocation);
        document.location.replace('/login');
    }
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
