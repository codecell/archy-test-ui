# archy-test-ui
Archy-test-ui is a is a basic test project to demonstrate basic frontend react knowledge and API intergation.

# Preview
[Click here](https://venerable-elf-f1fe0a.netlify.app/) to view the app on Netlify and 
[here](https://hidden-retreat-03498.herokuapp.com/) to view the API on heroku.

## Features

The app has all 4 CRUD functionalities implemented;

- A client user can:
    - view the list of available users
    - click on each row to edit / update the user data
    - delete a user data
    - create new user data

## Technologies
### Frontend
  - [React js](https://reactjs.org/)
  - [Typescript](https://www.typescriptlang.org/docs/)
  - [Styled-components](https://styled-components.com/)
  - [Styled-system](https://styled-system.com/)

### Backend / API
The application API was developed with [NodeJs](http://nodejs.org/), [Express](http://expressjs.com/) was used for routing and [Mysql2](https://www.mysql.com/)  for database management, The ApI is also developed with 
[Typescript](https://www.typescriptlang.org/docs) and [Sequelize](https://sequelize.org/) was used as the ORM.

## Installation(server)
Follow the steps below to setup a local development environment for the frontend. First ensure you have [Mysql2](https://www.mysql.com/) installed, and a version of [Node.js](http://nodejs.org/) equal or greater than v6.10.0 .

1. Clone the repository from a terminal; git clone `https://github.com/codecell/test_server.git`.
2. Navigate to the project directory `cd test_sercer`
3. Rename `.env.sample` to `.env` and add the required DATABASE settings.
4. Install project dependencies `npm install`
5. To run migrations and start the express server, navigate to src/index.ts and `un-comment` the `await sequelizeInstance.sync` call then run `npm run dev` to serve the project.

## Installation(Frontend)
Follow the steps below to setup a local development environment. First ensure you have [Create-react-app](https://reactjs.org/) and associated build packs installed, and a version of [Node.js](http://nodejs.org/) equal or greater than v6.10.0 .

1. Clone the repository from a terminal; git clone `https://github.com/codecell/archy-test-ui.git`.
2. Navigate to the project directory `cd archy-test-ui`
3. Install project dependencies `yarn install`
4. Start the express server `yarn start` to serve the user interface.


## API Summary
View full API documentation [here](https://hidden-retreat-03498.herokuapp.com/api-docs/)

### Users
EndPoint                      |   Functionality
------------------------------|------------------------
GET api/users/all             |   Allows a client to view all users.
POST api/users/new            |   Allows a client to create a user.
PATCH api/users/:id?          |   Allows a client to edit/update a specific user.
DELETE api/users/:id?         |   Allows a client to delete a specific user


### Limitations
Currently, unit tests have not been written for any of the frontend or backend yet, but i hope to add those soon.


### Licence
MIT