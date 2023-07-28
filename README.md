# Queer Asterisk Resource Database

## Description 
This project is a resource website that allows users to look up trans-affirming counselors by geo-location. It is built using Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL with the Sequelize ORM for the database. The website follows the MVC (Model-View-Controller) paradigm for a well-organized folder structure.


## User Story
```md
As a developer who creates databases
I WANT a resource website
SO USERS can look up trans counselors by geo location
```

## Acceptance Criteria
```md
User Registration:
The system should allow users to create an account by providing a unique username, a valid email address, and a strong password.

User Login:
Registered users should be able to log in to the database using their username and password.


Resource Search:
The database should allow users to search for trans and affirming resources based on their geo-location (e.g., city, state, or country).

Resource Details:
Each resource entry should provide detailed information, including the resource's name, address, contact information (phone/email), and a brief description of the services offered.
The resource description should clearly indicate if the resource is trans-affirming, LGBTQ+ friendly, and inclusive.

Resource Categories and Tags:
Each resource should be tagged with appropriate keywords (e.g., counseling, hormone therapy, name change) to aid in search results.

Resource Submission:
The database should allow registered users to submit new trans-affirming resources for inclusion in the database.

Security:
The system should implement appropriate security measures to protect user data and prevent unauthorized access.

Mobile Responsiveness:
The database should be responsive and user-friendly across various devices, including desktops, tablets, and mobile phones.

Performance:
The system should be optimized for performance to ensure quick and efficient searches and resource retrieval.
```

## Table of Contents
- [Installation](#installation)
- [Deployed Site](#deployed-site)
- [Screenshots](#sceenshots)
- [Tech Used](#tech-used)
- [Contact](#contributing)
- [License](#license)

## Installation
Clone the repository.
Install the required dependencies using npm install.
Set up the MySQL database and update the configuration in config/config.js.
Set up the necessary environment variables for sensitive information.
Run the server using npm start.
Visit http://localhost:<PORT> in your web browser to access the website.


## Deployed Site
ENTER HEROKU URL HERE

## Screenshots


## Tech Used
Node.js and Express.js for building the RESTful API.
Handlebars.js as the template engine for rendering dynamic views.
MySQL with the Sequelize ORM for the database management.
Express-session and cookies for user authentication and login.

## Contact
Ron Buttermore - ENTER EMAIL ADDRESS HERE
Kara Faris - KaraFaris@icloud.com
Mohamed Hussein -ENTER EMAIL ADDRESS HERE
Ren Rojas - ENTER EMAIL ADDRESS HERE

## License
MIT License
