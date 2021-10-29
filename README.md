# Marvel-api

Marvel-api can get comics, heroes or stories and detailed information of this ressources.

The goal of the projet was to get this informations asynchronously to make it more efficient

With the .env you can make our own configuration

## Equip

Louka RUIZ : Ruizlouka

Matthias CHOMETON : MatthiasChometon

Andjiby Léonie Exode MANDAH : leoniemandah

Johanna DÉZARNAUD : johannadznd


## Getting started

yarn install

create your .env into src with :

    API_KEY
    TS
    HASH
    LIMITGET
    API
    PORT
    CORS_ORIGIN
    PATHS

## Start the server : 

yarn dev


## Start the units tests

yarn test

## Structure 

We decided for the structure to start with a Routes-Controllers-Services Directory Structure for more clarity and separate the fonctions and the routes

We make a getAll fonction in services that we can reuse in the controllers, and which makes the project more generic

With the asynchron we can wait that all data be returned to us and then we search their childs 

For exemple we want the comics and when all data are returned we can search the characters and the stories related to comics

For the front we choose to take vue.js to make a application quickly and performante 