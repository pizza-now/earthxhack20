# Pizza NOW:

_There for when you need it_

Created by Natasha Gabuaeva, Devis Mejia, Harmony Richman, Nuzhat Tabassum Tani, and Joy Wang for submission to EarthxHack 2020

The deployed verson can be found at: pizza-now.herokuapp.com

## Technologies:

Javscript, React, Redux, Express, Sequelize, Heroku, PostgreSQL, MessageBird, Geolocation API

## About:

Pizza NOW is a progressive web app for users to discreetly send help alerts to their contacts when they are in a domestic violence situation. Disguised as a pizza ordering app, Pizza NOW allows users to indicate their threat level by the size of their pizza and also send customized messages by "customizing their order." Alerted contacts will receive a message via email and/or SMS that includes the sender's geolocation so they may respond or call for help.

## App features:

To explore the app without making a real user account, there are the following demo accounts:
email: alice@email.com | password: 123
email: quentin@email.com | password: 123
email: kady@email.com | password

Upon navigating to the site, users arrive at the splash page where they have the option to log in, sign up, or checkout as a guests. Registering as a guest, allows users to save contacts for where their alerts would be sent to.

Alternatively, users in urgent situations can proceed to guest checkout for where they can immediately send an alert to one contact. Future plans for this app will include allowing guest checkout to contact the local police upon submission if no contact is specified.

## To run locally:

Note: this app runs on a PostgreSQL database, therefore users seeking to run this app locally will need PostgreSQL

1.  Fork and clone the repository. Then in the terminal, run `npm install` to install dependancies

2.  Run `createdb earthxhack` and `npm run seed` to create the database and seed it with example users

3.  To start the server, run `npm run start-dev`. It may take a moment as webpack is creating a bundle.js file at this step. When it says "Mixing it up on port 8080" you can navigate to `localhost:8080` in your browser to see the application running
