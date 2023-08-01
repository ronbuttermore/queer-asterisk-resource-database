# Queer Source

A go to website that provides resources for trans and queer affirming mental health resources.

## DESCRIPTION 

Finding mental health providers can be a difficult process already, but finding someone who is queer-affirming for someone who is trans or queer means finding safety and can mean saving their life. 

This project is a resource website that allows users to look up trans and queer-affirming counselors after logging into the website. It is built using Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL with the Sequelize ORM for the database. The website follows the MVC (Model-View-Controller) paradigm for a well-organized folder structure.

### Ron's Learning

### Mohamed's Learning

### Ren's Learning
What I learned is that...

### Kara's Learning

## USER STORY
```md
AS A person who is seeking safer and queer affirming resources
I WANT an application that will provide me this information based on my location preference and whether or not I have insurance.
SO THAT I can be fully informed and know I can be safe before making a big decision of finding a counselor. 
```

## ACCEPTANCE CRITERIA
```md
User Registration:
The system should allow users to create an account by providing a unique username, a valid email address, and a strong password.

User Login:
Registered users should be able to log in to access the database using their username and password.

Resource Search:
The database should allow users to search for trans and queer affirming resources based on their location preference and insurance and/or self-pay options.

Resource Details:
Each resource entry should provide detailed information, including the resource's name, credential, address, location of services, insurance information, contact information (phone/email), and a brief description of the services offered.

Security:
The system should implement appropriate security measures to protect user data and prevent unauthorized access.

Mobile Responsiveness:
The database should be responsive and user-friendly across various devices, including desktops, tablets, and mobile phones.

Performance:
The system should be optimized for performance to ensure quick and efficient searches and resource retrieval.
```

## TABLE OF CONTENTS
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)

## INSTALLATION
Clone the repository.
Install the required dependencies using npm install.
Set up the MySQL database and update the configuration in config/config.js.
Set up the necessary environment variables for sensitive information.
Run the server using npm start.
Visit http://localhost:<PORT> in your web browser to access the website.


## USAGE
1. To use, go to live website where you will be directed to log in or to register. 

2. Once logged in or registered, you will be asked to select a location and insurance or self-pay preference.

3. Once that is submitted, you will be presented with a page of the results of counselors within the area you chose and information preference.

4. After looking at available counselors, select "Learn More" to get more information on a specific counselor.

5. You will be displayed with more information about the counselor as well as contact informtion and a brief description of the services they provide.

6. Once you have read about the counselor and are ready, contact the counselor and initiate the consultation process.

### GITHUB REPOSITORY

### LIVE SITE

### WIREFRAME

## Technologies
Node.js and Express.js for building the RESTful API.
Handlebars.js as the template engine for rendering dynamic views.
MySQL with the Sequelize ORM for the database management.
Express-session and cookies for user authentication and login.

## CREDITS

## Contact
- Ron Buttermore - ENTER EMAIL ADDRESS HERE
- Kara Faris - KaraFaris@icloud.com
- Mohamed Hussein -ENTER EMAIL ADDRESS HERE
- Ren Rojas - rojas.renn@gmail.com

## LICENSE
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

MIT License

Copyright (c) 2023 Ron Buttermore, Kara Faris, Mohamed Hussein and Ren Rojas.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
