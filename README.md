# Quality-Pets

Quality Pets is a pet supplies store.

## Getting Started

### Prerequisites

#### Deployed on Heroku

User will require a browser to open the Heroku Live Link.

#### For local machine

User will be required to install [Node.js](https://nodejs.org/)

### Installing

#### 1. Fork and clone Github repository into local machine

[Quality Pets GitHub Repository](https://github.com/richardleung1/Quality-Pets)

#### 2. Install Node Modules

Type `npm install` or `npm i` in terminal to install node modules

#### 3. Create a `.env` file

1. Go to MongoDB Atlas and create a database
2. Connect to your database and connect to your application
3. Create a variable `MONGO_URI` and set it equal to your connection string.


#### 4. Run server

Type `nodemon` or `node server.js` in terminal to run server

<!-- ### Models -->

### Routes

   VERB 		 | 		  PATH 		 |  	 DESCRIPTION
------------ | ------------- | -------------------
GET | /api/v1/ | index of categories |
GET | /api/v1/:category | index of items in category  |
GET | /api/v1/item/:id | show page for selected item  |
GET | /api/v1/item/new | page to add new item |
POST | /api/v1/item | add a item |
GET | /api/v1/item/:id/edit | page to edit a item |
PUT | /api/v1/item/:id | edit/update a item |
DELETE | /api/v1/item/:id | delete a item |

## Deployment

Deployed on [Heroku]()

## Built With

* [MongoDB](https://www.mongodb.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* JavaScript
* CSS
* HTML

## Authors

* **Richard Leung** - *Author* - [Richard Leung](https://github.com/PurpleBooth)

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc