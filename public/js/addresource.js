async function addResourceHandler(event) {
    event.preventDefault();

    const first_name = document.querySelector('#first_name').value.trim();
    const last_name = document.querySelector('#last_name').value.trim();
    const location = document.querySelector('#location').value.trim();
    const credential = document.querySelector('#credential').value.trim();
    const pronouns = document.querySelector('#pronouns').value.trim();
    const organization = document.querySelector('#organization').value.trim();
    const description = document.querySelector('#description').value.trim();
    const insurance = document.querySelector('#insurance').value.trim();
    const address = document.querySelector('#address').value.trim();
    const phone_number = document.querySelector('#phone_number').value.trim();
    const email = document.querySelector('#email').value.trim();
    const social = document.querySelector('#social').value.trim();

    const response = await fetch('/api/resource', {
        method: 'POST',
        body: JSON.stringify({
            first_name: first_name,
            last_name: last_name,
            location: location,
            credential: credential,
            pronouns: pronouns,
            organization: organization,
            description: description,
            insurance: insurance,
            address: address,
            phone_number: phone_number,
            email: email,
            social: social
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    console.log(response);

};

document.querySelector('#submit-btn').addEventListener('click', addResourceHandler);