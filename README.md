# Rest Service - Users API

This sample RESTful API project. It is built using JavaScript/Node.js, ExpressJS (a small, lightweight web MVC framework) & Mongoose (a MongoDB object modelling library).

## Pre-requisites

To get started, you'll need to have the following requirements installed

- Git
- Node.js<sup>1</sup>
- npm
- MongoDB 2.6.x / 3.4.x<sup>2</sup>

<sup>1</sup>See https://nodejs.org/
<sup>2</sup>See https://docs.mongodb.com/manual/administration/install-community/ for installation guides

## Getting started

	# Ensure `mongod` is running, either as a service or in another shell

	```
	$git clone <this repo>
	$npm install
	$npm install grunt-cli -g
	$grunt test   # If finish successfully all is ok
	$grunt seeds  # Seed the DB with Users
	$grunt server # start the project
	```
## Running tests

`grunt test`

## Debugging

`grunt debug`

## Commands

| Command       | Description                                         |
| ------------- |:---------------------------------------------------:|
| grunt test    | Check style and run all tests                       |
| grunt server  | Start server locally on the port 8000               |
| grunt debug   | Start server locally in debug mode (node-inspector) |
| grunt seeds   | Fill the Database                                   |

## Response Definition

All responses return the Reponse Object defined into `/server/helper/reponse.js` as described into the following attributes definition table.

| Attribute     | Type          | Description                                                   |
| ------------- |:-------------:|:-------------------------------------------------------------:|
| status        | HTTP/1.1 code | Ref.: https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html  |
| message       | String        | Description text of the status. ( E.g `Not found user!`       |
| errors        | Array         | Array with all erros ( E.g Validation errros )                |
| content       | Object        | Result of rest/edpoint ( E.g Array Object with all Users )    |

Following some examples:

* Endpoint: `/users/`
* Usage: To GET {users} by ID
* Result: Sucess - HTTP CODE 200

```
{
    "status": 200,
    "content": {
        "_id": "59cd53b71412dd52b3f024f5",
        "gender": "female",
        "name": {
            "title": "miss",
            "first": "allie",
            "last": "willis"
        },
        "location": {
            "street": "7135 the crescent",
            "city": "Leixlip",
            "state": "colorado",
            "zip": 37191
        },
        "email": "allie.willis@example.com",
        "username": "crazybear293",
        "password": "3232",
        "salt": "UVMKO1Tj",
        "md5": "b7441c556f250fe6ebb3367ba708d4b6",
        "sha1": "fc79c95d01ca351efdf283331f39f2384db1dd78",
        "sha256": "999afe92c680c6d74412ff438c8d0901028805caf66aeff536e0eed52e758d55",
        "registered": 1216643814,
        "dob": 253903290,
        "phone": "041-379-5675",
        "cell": "081-471-3648",
        "PPS": "9408385T",
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/19.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/19.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/19.jpg"
        },
        "__v": 0
    }
}
```

* Endpoint: `/users/:id`
* Usage: To PUT/EDIT {users} by ID
* Result: BadRequest - HTTP CODE 400

```
{
    "status": 400,
    "message": "Validation error",
    "errors": [
        {
            "location": "body",
            "param": "email",
            "msg": "Invalid email"
        }
    ]
}

```

## Call definition

All request following the the typically HTTP methods in in a RESTful API as follows.

Ref.: https://en.wikipedia.org/wiki/Representational_state_transfer

# Project Definitions

## App structure

    bin           # scripts ( E.g seed to fill the test database )
    config        # configurations of the app server api
    public        # view ( html/pages)
    server        # Server REST API implementation
      controllers # business model controller
      dao         # schema persistence
      helper      # helpers ( E.g Response definitions )
      router      # enpoints/ruter definitions
    models        # database model definitions
    tests         # test suit


## API documentation

See [API.md](API.md) for details.

## SonarQube
In addition to ESLint, we've also included some configuration for SonarQube in `sonar-project.properties`.
See http://docs.sonarqube.org/display/SONAR/Get+Started+in+Two+Minutes for more details on how to setup SonarQube locally.

